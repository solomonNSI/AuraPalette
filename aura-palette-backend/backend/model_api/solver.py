import torch
import torch.nn as nn
import os
import time
import numpy as np
import matplotlib.colors as mcolors
import matplotlib.pyplot as plt
plt.switch_backend('agg')
from skimage.color import lab2rgb

from .model import TPN
from .data_loader import *
from .util import *

from gensim.scripts.glove2word2vec import glove2word2vec
from gensim.models import KeyedVectors

class Solver(object):
    def __init__(self, args):
        self.args = args
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        # Build the model.
        self.build_model(args.mode)
        self.model = None  # initializing the model attribute

    def initialize_embeddings(self):
        base_path = os.path.dirname(os.path.abspath(__file__))  # Get the absolute path of the current file
        glove_file = os.path.join(base_path, 'data/glove.6B.300d.txt')

        # convert glove to word2vec format
        word2vec_output_file = glove_file + '.word2vec'
        glove2word2vec(glove_file, word2vec_output_file)

        # load the Stanford GloVe model
        self.model = KeyedVectors.load_word2vec_format(word2vec_output_file, binary=False)

    def preprocess_text(self, input_text):
        # split the input_text into words
        words = input_text.split()

        # for each word, retrieve the GloVe embedding
        embeddings = []
        for word in words:
            if word in self.model:
                embeddings.append(self.model[word])
            else:  # if the word is not in the GloVe vocabulary, initialize it randomly
                embeddings.append(np.random.normal(size=(300,)))

        # return the array of embeddings
        return np.array(embeddings)

    def prepare_dict(self):
        input_dict = Dictionary()
        print( os.getcwd())
        base_path = os.path.dirname(os.path.abspath(__file__))  # Get the absolute path of the current file
        src_path = os.path.join(base_path, 'data/hexcolor_vf/all_names.pkl')
        with open(src_path, 'rb') as f:
            text_data = pickle.load(f)
            f.close()

        print("Loading %s palette names..." % len(text_data))
        print("Making text dictionary...")

        for i in range(len(text_data)):
            input_dict.index_elements(text_data[i])
        return input_dict

    def prepare_data(self, images, palettes, always_give_global_hint, add_L):
        batch = images.size(0)
        imsize = images.size(3)

        inputs, labels = process_image(images, batch, imsize)
        if add_L:
            for_global = process_palette_lab(palettes, batch)
            global_hint = process_global_lab(for_global, batch, always_give_global_hint)
        else:
            for_global = process_palette_ab(palettes, batch)
            global_hint = process_global_ab(for_global, batch, always_give_global_hint)

        inputs = inputs.to(self.device)
        labels = labels.to(self.device)
        global_hint = (global_hint).expand(-1, -1, imsize, imsize).to(self.device)
        return inputs, labels, global_hint

    def build_model(self, mode):
        if mode == 'train_TPN':
            # Data loader.
            self.input_dict = self.prepare_dict()
            self.train_loader, _ = t2p_loader(self.args.batch_size, self.input_dict)

            # Load pre-trained GloVe embeddings.
            base_path = os.path.dirname(os.path.abspath(__file__))  # Get the absolute path of the current file
            emb_file = os.path.join(base_path, 'data', 'Color-Hex-vf.pth')
            if os.path.isfile(emb_file):
                W_emb = torch.load(emb_file)
            else:
                W_emb = load_pretrained_embedding(self.input_dict.word2index,
                                                  '../data/glove.840B.300d.txt',
                                                  300)
                W_emb = torch.from_numpy(W_emb)
                torch.save(W_emb, emb_file)
            W_emb = W_emb.to(self.device)

            # Generator and discriminator.
            self.encoder = TPN.EncoderRNN(self.input_dict.n_words, self.args.hidden_size,
                                      self.args.n_layers, self.args.dropout_p, W_emb).to(self.device)
            self.G = TPN.AttnDecoderRNN(self.input_dict, self.args.hidden_size,
                                    self.args.n_layers, self.args.dropout_p).to(self.device)
            self.D = TPN.Discriminator(15, self.args.hidden_size).to(self.device)

            # Initialize weights.
            self.encoder.apply(init_weights_normal)
            self.G.apply(init_weights_normal)
            self.D.apply(init_weights_normal)

            # Optimizer.
            self.G_parameters = list(self.encoder.parameters()) + list(self.G.parameters())
            self.g_optimizer = torch.optim.Adam(self.G_parameters,
                                                lr=self.args.lr, weight_decay=self.args.weight_decay)
            self.d_optimizer = torch.optim.Adam(self.D.parameters(),
                                                lr=self.args.lr, betas=(self.args.beta1, self.args.beta2))

        elif mode == 'test_TPN' or 'test_text2colors' or 'sample_TPN':
            
            # Data loader.
            self.input_dict = self.prepare_dict()

            # Load pre-trained GloVe embeddings.
            base_path = os.path.dirname(os.path.abspath(__file__))  # Get the absolute path of the current file
            emb_file = os.path.join(base_path, 'data', 'Color-Hex-vf.pth')
            if os.path.isfile(emb_file):
                print("i am here in w_emb")
                W_emb = torch.load(emb_file)
            else:
                base_path = os.path.dirname(os.path.abspath(__file__))  # Get the absolute path of the current file
                else_file = os.path.join(base_path, 'data', 'glove.840B.300d.txt')
                W_emb = load_pretrained_embedding(self.input_dict.word2index,
                                                  else_file,
                                                  300)
                W_emb = torch.from_numpy(W_emb)
                torch.save(W_emb, emb_file)
            W_emb = W_emb.to(self.device)

            # Data loader.
            self.test_loader, self.imsize = test_loader(self.args.dataset, self.args.batch_size, self.input_dict)

            # Load the trained generators.
            self.encoder = TPN.EncoderRNN(self.input_dict.n_words, self.args.hidden_size,
                                          self.args.n_layers, self.args.dropout_p, W_emb).to(self.device)
            self.G_TPN = TPN.AttnDecoderRNN(self.input_dict, self.args.hidden_size,
                                        self.args.n_layers, self.args.dropout_p).to(self.device)
            # print("self.G_TPN {}".format(self.G_TPN) )
            # self.G_PCN = PCN.UNet(self.imsize, self.args.add_L).to(self.device)

            # Load model.
            if self.args.resume_epoch:
                self.load_model(self.args.mode, self.args.resume_epoch)

    def train_TPN(self):
        # Loss function.
        criterion_GAN = nn.BCELoss()
        criterion_smoothL1 = nn.SmoothL1Loss()

        # Start training from scratch or resume training.
        start_epoch = 0
        if self.args.resume_epoch:
            start_epoch = self.args.resume_epoch
            self.load_model(self.args.mode, self.args.resume_epoch)

        self.encoder.train()
        self.G.train()
        self.D.train()

        print('Start training...')
        start_time = time.time()
        for epoch in range(start_epoch, self.args.num_epochs):
            for batch_idx, (txt_embeddings, real_palettes) in enumerate(self.train_loader):

                # Compute text input size (without zero padding).
                batch_size = txt_embeddings.size(0)
                nonzero_indices = list(torch.nonzero(txt_embeddings)[:, 0])
                each_input_size = [nonzero_indices.count(j) for j in range(batch_size)]

                # Prepare training data.
                txt_embeddings = txt_embeddings.to(self.device)
                real_palettes = real_palettes.to(self.device).float()

                # Prepare labels for the BCE loss.
                real_labels = torch.ones(batch_size).to(self.device)
                fake_labels = torch.zeros(batch_size).to(self.device)

                # Prepare input and output variables.
                palette = torch.FloatTensor(batch_size, 3).zero_().to(self.device)
                fake_palettes = torch.FloatTensor(batch_size, 15).zero_().to(self.device)

                # Condition for the generator.
                encoder_hidden = self.encoder.init_hidden(batch_size).to(self.device)
                encoder_outputs, decoder_hidden, mu, logvar = self.encoder(txt_embeddings, encoder_hidden)

                # Generate color palette.
                for i in range(5):
                    palette, decoder_context, decoder_hidden, _ = self.G(palette,
                                                                         decoder_hidden.squeeze(0),
                                                                         encoder_outputs,
                                                                         each_input_size,
                                                                         i)
                    fake_palettes[:, 3 * i:3 * (i+1)] = palette

                # Condition for the discriminator.
                each_input_size = torch.FloatTensor(each_input_size).to(self.device)
                each_input_size = each_input_size.unsqueeze(1).expand(batch_size, self.G.hidden_size)
                encoder_outputs = torch.sum(encoder_outputs, 0)
                encoder_outputs = torch.div(encoder_outputs, each_input_size)

                # =============================== Train the discriminator =============================== #
                # Compute BCE loss using real palettes.
                real = self.D(real_palettes, encoder_outputs)
                d_loss_real = criterion_GAN(real, real_labels)

                # Compute BCE loss using fake palettes.
                fake = self.D(fake_palettes, encoder_outputs)
                d_loss_fake = criterion_GAN(fake, fake_labels)

                d_loss = d_loss_real + d_loss_fake

                # Backprop and optimize.
                self.d_optimizer.zero_grad()
                d_loss.backward(retain_graph=True)
                self.d_optimizer.step()

                # ================================ Train the generator ================================= #
                # Compute BCE loss (fool the discriminator).
                fake = self.D(fake_palettes, encoder_outputs)
                g_loss_GAN = criterion_GAN(fake, real_labels)

                # Compute smooth L1 loss.
                g_loss_smoothL1 = criterion_smoothL1(fake_palettes, real_palettes)

                # Compute KL loss.
                kl_loss = KL_loss(mu, logvar)

                g_loss = g_loss_GAN + g_loss_smoothL1 * self.args.lambda_sL1 + kl_loss * self.args.lambda_KL

                # Backprop and optimize.
                self.g_optimizer.zero_grad()
                g_loss.backward()
                self.g_optimizer.step()

            # For debugging. Save training output.
            if (epoch+1) % self.args.sample_interval == 0:
                for x in range(5):  # saving 5 samples
                    fig1, axs1 = plt.subplots(nrows=1, ncols=5)
                    input_text = ''
                    for idx in txt_embeddings[x]:
                        if idx.item() == 0: break
                        input_text += self.input_dict.index2word[idx.item()] + " "
                    axs1[0].set_title(input_text)
                    for k in range(5):
                        lab = np.array([fake_palettes.data[x][3*k],
                                        fake_palettes.data[x][3*k+1],
                                        fake_palettes.data[x][3*k+2]], dtype='float64')
                        rgb = lab2rgb_1d(lab)
                        axs1[k].imshow([[rgb]])
                        axs1[k].axis('off')

                    fig1.savefig(os.path.join(self.args.train_sample_dir,
                                              'epoch{}_sample{}.jpg'.format(epoch+1, x+1)))
                    plt.close()
                print('Saved train sample...')

            if (epoch+1) % self.args.log_interval == 0:
                elapsed_time = time.time() - start_time
                print('Elapsed time [{:.4f}], Iteration [{}/{}], '
                      'd_loss: {:.6f}, g_loss: {:.6f}'.format(
                       elapsed_time, (epoch+1), self.args.num_epochs,
                       d_loss.item(), g_loss.item()))

            if (epoch+1) % self.args.save_interval == 0:
                torch.save(self.encoder.state_dict(),
                           os.path.join(self.args.text2pal_dir, '{}_G_encoder.ckpt'.format(epoch+1)))
                torch.save(self.G.state_dict(),
                           os.path.join(self.args.text2pal_dir, '{}_G_decoder.ckpt'.format(epoch+1)))
                torch.save(self.D.state_dict(),
                           os.path.join(self.args.text2pal_dir, '{}_D.ckpt'.format(epoch+1)))
                print('Saved model checkpoints...')

    def test_TPN(self):
        print('Start testing...')
        for batch_idx, (txt_embeddings, real_palettes, _) in enumerate(self.test_loader):
            if txt_embeddings.size(0) != self.args.batch_size:
                break

            # Compute text input size (without zero padding).
            batch_size = txt_embeddings.size(0)
            nonzero_indices = list(torch.nonzero(txt_embeddings)[:, 0])
            each_input_size = [nonzero_indices.count(j) for j in range(batch_size)]

            # Prepare test data.
            txt_embeddings = txt_embeddings.to(self.device)
            real_palettes = real_palettes.to(self.device).float()

            # Generate multiple palettes from same text input.
            for num_gen in range(10):

                # Prepare input and output variables.
                palette = torch.FloatTensor(batch_size, 3).zero_().to(self.device)
                fake_palettes = torch.FloatTensor(batch_size, 15).zero_().to(self.device)

                # ============================== Text-to-Palette ==============================#
                # Condition for the generator.
                encoder_hidden = self.encoder.init_hidden(batch_size).to(self.device)
                encoder_outputs, decoder_hidden, mu, logvar = self.encoder(txt_embeddings, encoder_hidden)
                print("encoder_outputs: [{}], decoder_hidden [{}], mu [{}], logvar [{}]".format(encoder_outputs, decoder_hidden, mu, logvar))
                # Generate color palette.
                for i in range(5):
                    palette, decoder_context, decoder_hidden, _ = self.G_TPN(palette,
                                                                             decoder_hidden.squeeze(0),
                                                                             encoder_outputs,
                                                                             each_input_size,
                                                                             i)
                    fake_palettes[:, 3 * i:3 * (i + 1)] = palette

                # ================================ Save Results ================================#
                for x in range(self.args.batch_size):
                    # Input text.
                    input_text = ''
                    for idx in txt_embeddings[x]:
                        if idx.item() == 0: break
                        input_text += self.input_dict.index2word[idx.item()] + ' '

                    # Save palette generation results.
                    fig1, axs1 = plt.subplots(nrows=2, ncols=5)
                    axs1[0][0].set_title(input_text + 'fake {}'.format(num_gen + 1))
                    for k in range(5):
                        lab = np.array([fake_palettes.data[x][3 * k],
                                        fake_palettes.data[x][3 * k + 1],
                                        fake_palettes.data[x][3 * k + 2]], dtype='float64')
                        rgb = lab2rgb_1d(lab)
                        axs1[0][k].imshow([[rgb]])
                        axs1[0][k].axis('off')
                    axs1[1][0].set_title(input_text + 'real')
                    for k in range(5):
                        lab = np.array([real_palettes.data[x][3 * k],
                                        real_palettes.data[x][3 * k + 1],
                                        real_palettes.data[x][3 * k + 2]], dtype='float64')
                        rgb = lab2rgb_1d(lab)
                        axs1[1][k].imshow([[rgb]])
                        axs1[1][k].axis('off')

                    fig1.savefig(os.path.join(self.args.test_sample_dir, self.args.mode,
                                              '{}_palette{}.jpg'.format(self.args.batch_size*batch_idx+x+1,
                                                                        num_gen+1)))
                    print('Saved data [{}], input text [{}], test sample [{}]'.format(
                          self.args.batch_size*batch_idx+x+1, input_text, num_gen+1))

    def load_model(self, mode, resume_epoch):
        print('Loading the trained model from epoch {}...'.format(resume_epoch))
        if mode == 'train_TPN':
            encoder_path = os.path.join(self.args.text2pal_dir, '{}_G_encoder.ckpt'.format(resume_epoch))
            G_path = os.path.join(self.args.text2pal_dir, '{}_G_decoder.ckpt'.format(resume_epoch))
            D_path = os.path.join(self.args.text2pal_dir, '{}_D.ckpt'.format(resume_epoch))
            self.encoder.load_state_dict(torch.load(encoder_path, map_location=lambda storage, loc: storage))
            self.G.load_state_dict(torch.load(G_path, map_location=lambda storage, loc: storage))
            self.D.load_state_dict(torch.load(D_path, map_location=lambda storage, loc: storage))

        elif mode == 'train_PCN':
            G_path = os.path.join(self.args.pal2color_dir, '{}_G.ckpt'.format(resume_epoch))
            D_path = os.path.join(self.args.pal2color_dir, '{}_D.ckpt'.format(resume_epoch))
            self.G.load_state_dict(torch.load(G_path, map_location=lambda storage, loc: storage))
            self.D.load_state_dict(torch.load(D_path, map_location=lambda storage, loc: storage))

        elif mode == 'test_TPN' or 'sample_TPN':
            encoder_path = os.path.join(self.args.text2pal_dir, '{}_G_encoder.ckpt'.format(resume_epoch))
            G_TPN_path = os.path.join(self.args.text2pal_dir, '{}_G_decoder.ckpt'.format(resume_epoch))
            self.encoder.load_state_dict(torch.load(encoder_path, map_location=lambda storage, loc: storage))
            self.G_TPN.load_state_dict(torch.load(G_TPN_path, map_location=lambda storage, loc: storage))

    def sample_TPN(self, queryString, numPalettesPerQuery=1):
        # print("self.G_TPN {}".format(self.G_TPN) )
        print('queryString: [{}]'.format( queryString))
        # ==================== Preprocessing src_seqs ==================== #
        # Return a list of indexes, one for each word in the sentence.
        words_index = []
        txt_embedding = [0] * self.input_dict.max_len
        for i, word in enumerate(queryString.split(' ')):
            print('word: [{}] and index [{}]'.format(word, self.input_dict.word2index[word]))
            txt_embedding[i] = self.input_dict.word2index[word]
        words_index.append(txt_embedding)

        print("Convert to tensor") 
        txt_embeddings = torch.LongTensor(words_index).to(self.device)

        print("Compute text input size (without zero padding).")
        batch_size = txt_embeddings.size(0)
        nonzero_indices = list(torch.nonzero(txt_embeddings)[:, 0])
        each_input_size = [nonzero_indices.count(j) for j in range(batch_size)]

        print("Placeholder for final palettes")
        palettes = [{'queryString': queryString, 'samples': []} ]

        # Generate multiple palettes from same text input.
        for num_gen in range(1):
            print("Generate multiple palettes from same text input")
            # Prepare input and output variables.
            palette = torch.FloatTensor(batch_size, 3).zero_().to(self.device)
            fake_palettes = torch.FloatTensor(batch_size, 15).zero_().to(self.device)

            # ============================== Text-to-Palette ==============================#
            print("Condition for the generator.")
            encoder_hidden = self.encoder.init_hidden(batch_size).to(self.device)
            encoder_outputs, decoder_hidden, mu, logvar = self.encoder(txt_embeddings, encoder_hidden)
            # print("encoder_outputs: [{}], decoder_hidden [{}], mu [{}], logvar [{}]".format(encoder_outputs, decoder_hidden, mu, logvar))
            print("Generate color palette.")
            for i in range(5):
                palette, decoder_context, _, _ = self.G_TPN(palette,
                                                                        decoder_hidden.squeeze(0),
                                                                        encoder_outputs,
                                                                        each_input_size,
                                                                        i)
                print('color no: [{}]'.format(i))
                fake_palettes[:, 3 * i:3 * (i + 1)] = palette
                # print('fake palettes [{}]'.format(fake_palettes))


            # Move tensor to CPU after all computations
            fake_palettes = fake_palettes.detach().cpu().data

            # Extract color palettes.
            for x in range(batch_size):
                rgbs = []

                for k in range(5):
                    lab = np.array([fake_palettes[x][3*k],
                                    fake_palettes[x][3*k+1],
                                    fake_palettes[x][3*k+2]], dtype='float64')
                    rgb = lab2rgb_1d(lab)
                    
                    # Rescale from [0, 1] to [0, 255]
                    rgb *= 255

                    rgbs.append(rgb.tolist())
                    
                   # Convert RGB values to hexadecimal format
                hex_colors = []
                for rgb in rgbs:
                    r, g, b = rgb
                    hex_color = mcolors.rgb2hex([r/255, g/255, b/255])
                    hex_colors.append(hex_color)

                palettes[x]['samples'].append(hex_colors)
        print('ayo {} \n \n'.format(palettes[0]))

        return palettes[0]