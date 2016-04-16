var path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');

module.exports = {
  entry: {
    main: [
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  // Adding jquery here makes it global for the app, no import needed
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
    new AureliaWebpackPlugin(),
    new ProvidePlugin({
      Promise: 'bluebird'
    })
  ],
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 3000
  },
  module: {
    resolve: {
      modulesDirectories: ['node_modules']
    },
    loaders: [
      //You still need css for files that are not .scss but jus .css
      { test: /\.css?$/, loader: 'style!css' },
      {test: /\.ts$/, loader: 'awesome-typescript', exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]},
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|gif|jpg)$/, loader: 'url', query: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
      { test: /\.scss$/, loader: 'style!css?sourceMap!postcss!sass?sourceMap'}
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./sass")]
  }
};
