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
            path.resolve(__dirname, 'src/lib'),
          ],
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          include: [
            // Vanilla CSS files should only live in imported libraries
            path.resolve(__dirname, 'src/lib/'),
          ],
          loaders: ['style', 'css']
        },
        {
          test: /\.scss$/,
          include: [
            path.resolve(__dirname, 'src/scss'),
          ],
          loaders: ['style', 'css', 'sass']
        }
      ]
    },
    resolve: {
      root: [
        path.resolve(__dirname, 'src'),
      ]
    },
    sassLoader: {
      includePaths: [path.resolve(__dirname, 'src/scss')]
    }
  };
})();
