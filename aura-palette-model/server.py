    import argparse
    from solver import Solver

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
    parser.add_argument('--resume_epoch', type=int, default=1000, help='resume training from this epoch')
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
    parser.add_argument('--pal2color_dir', type=str, default='./models/PCN')
    parser.add_argument('--train_sample_dir', type=str, default='./samples/train')
    parser.add_argument('--test_sample_dir', type=str, default='./samples/test')

    # Step size.
    parser.add_argument('--log_interval', type=int, default=1,
                        help='how many steps to wait before logging training status')
    parser.add_argument('--sample_interval', type=int, default=20,
                        help='how many steps to wait before saving the training output')
    parser.add_argument('--save_interval', type=int, default=50,
                        help='how many steps to wait before saving the trained models')
    args, unknown = parser.parse_known_args()
    print(args)
    
    # Solver for sampling Text2Colors.
    solver = Solver(args)

    query = ["your query here", "your query here"]
    print(solver.sample_TPN(query))