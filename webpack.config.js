var path = require('path');

module.exports = {
  entry: './src/main_scratch.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src/generate')
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
  }
};