let path = require('path');

module.exports = {
  entry: {
    trade: './src/trade.js',
    sync: './src/sync.js',
    history: './src/history.js',
    withdraw: './src/withdraw.js',
    server: './src/server.js',
    price: './src/price.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2017']
        }
      }
    }]
  },
  target: 'async-node',
  node: {
    __filename: true,
    __dirname: true
  }
};