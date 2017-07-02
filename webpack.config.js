var path = require('path');

module.exports = {
  entry: {
    app: './src/main.js',
    sync: './src/sync.js',
    history: './src/history.js',
    server: './src/server.js'
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
  target: 'async-node'
};