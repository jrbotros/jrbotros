(function() {
  'use strict';

  var path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

  module.exports = {
    entry: './src/js/index.js',
    output: {
      path: './site/build',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /.*\.min\.js/],
        query: {
          presets: ['es2015'],
          // Enable object spread operator, which simplifies Redux reducers
          // https://github.com/sebmarkbage/ecmascript-rest-spread
          plugins: ['transform-object-rest-spread', 'transform-react-jsx']
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }]
    },
    plugins: [
      new ExtractTextPlugin('bundle.css')
      // TODO: enable when javascript is real
      // new webpack.optimize.UglifyJsPlugin(),
    ],
    resolve: {
      root: [
        path.resolve(__dirname, 'src'),
      ]
    },
    sassLoader: {
      includePaths: [path.resolve(__dirname, 'src/scss'), path.resolve(__dirname, 'node_modules')]
    }
  };
})();
