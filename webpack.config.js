var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.bundle.js',
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