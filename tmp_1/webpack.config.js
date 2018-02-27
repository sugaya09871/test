const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    common: './resource/js/common.js',
    vendors: ['jquery']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './webroot/js')
  },
  module: {
    rules: [{
        test: /\.js$/,
        // node_modules は除外する
        exclude: /node_modules/,
        use: {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {}
        },
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name     : 'vendors',
      minChunks : Infinity
    })
  ]
};