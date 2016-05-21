(function() {
  'use strict';

  var path = require('path'),
      webpack = require('webpack');

  module.exports = {
    entry: './src/js/index.js',
    output: {
      path: './site/build',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src/js'),
          ],
          loader: 'babel-loader'
        },
        {
          test: /\.sass$/,
          include: [
            path.resolve(__dirname, 'src/sass'),
          ],
          loaders: ['style', 'css', 'sass']
        }
      ]
    },
    resolve: {
      root: [
        path.resolve(__dirname, 'src'),
      ]
    }
  };
})();
