from flask import Flask, jsonify, request
from flask_cors import CORS
from gevent.pywsgi import WSGIServer
import argparse
import multiprocessing as mp
import os

from solver import Solver


# Declare a flask app
app = Flask(__name__)


# Enable CORS
cors = CORS(app)

# Global variables

# Constants
PORT = 8000


# Placeholder for Solver object
solver = None


def log(f, s, level='DEBUG'):
    f.write('[{}]: {}\n'.format(level, s))


# Healthcheck endpoint
@app.route('/',  methods=['GET'])
def healthCheck():
    return jsonify(status='OK', message='Server is running')


# Palette sample endpoint
@app.route('/palette',  methods=['GET','POST'])
def samplePalette():

    if not request.data:
        return jsonify(status='Error', message='Empty body')

    queryStrings = request.json['queryStrings']
    numPalettesPerQuery = request.json['numPalettesPerQuery']
    
    palettes = solver.sample_TPN(queryStrings, numPalettesPerQuery)

    return jsonify(status='OK', message={'palettes': palettes})


if __name__ == '__main__':

    parser = argparse.ArgumentParser()

    # Model configuration.
    # text2pal
    parser.add_argument('--hidden_size', type=int, default=150)
    parser.add_argument('--n_layers', type=int, default=1)
    # pal2color
    parser.add_argument('--always_give_global_hint', type=int, default=1)
    parser.add_argument('--add_L', type=int, default=1)

    # Training and testing configuration.
    parser.add_argument('--mode', type=str, default='sample_TPN',
                        choices=['sample_TPN', 'sample_text2colors'])
    parser.add_argument('--dataset', type=str, default='bird256', choices=['imagenet', 'bird256'])
    parser.add_argument('--lr', type=float, default=5e-4, help='initial learning rate')
    parser.add_argument('--num_epochs', type=int, default=1000, help='number of epochs for training')
    parser.add_argument('--resume_epoch', type=int, default=None, help='resume training from this epoch')
    parser.add_argument('--batch_size', type=int, default=1, help='batch size for sampling')
    parser.add_argument('--dropout_p', type=float, default=0.2)
    parser.add_argument('--weight_decay', type=float, default=5e-5)
    parser.add_argument('--beta1', type=float, default=0.5)
    parser.add_argument('--beta2', type=float, default=0.99)
    parser.add_argument('--lambda_sL1', type=float, default=100.0, help='weight for L1 loss')
    parser.add_argument('--lambda_KL', type=float, default=0.5, help='weight for KL loss')
    parser.add_argument('--lambda_GAN', type=float, default=0.1)

    # Directories.
    parser.add_argument('--text2pal_dir', type=str, default='./models/TPN')
    parser.add_argument('--train_sample_dir', type=str, default='./samples/train')
    parser.add_argument('--test_sample_dir', type=str, default='./samples/test')

    # Step size.
    parser.add_argument('--log_interval', type=int, default=1,
                        help='how many steps to wait before logging training status')
    parser.add_argument('--sample_interval', type=int, default=20,
                        help='how many steps to wait before saving the training output')
    parser.add_argument('--save_interval', type=int, default=50,
                        help='how many steps to wait before saving the trained models')
    args = parser.parse_args()
    print(args)
    
    # Solver for sampling Text2Colors.
    solver = Solver(args)

    mp.set_start_method('spawn')

    # app.run(debug=False, host='0.0.0.0', port=PORT)

    # Serve the app with gevent
    http_server = WSGIServer(('0.0.0.0', PORT), app)
    http_server.serve_forever()
