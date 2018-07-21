'use strict';

const { HotModuleReplacementPlugin } = require('../../../Library/Caches/typescript/2.9/node_modules/@types/webpack');
const merge = require('../../../Library/Caches/typescript/2.9/node_modules/@types/webpack-merge');
const commonConfig = require('./webpack.common');


const webpackDevConfig = {};
webpackDevConfig.module = {};
webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true, // opens a new tab in our default browser
  hot: true, // hot reloads our changes every time we save
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true, // maps css lines in inspector back to actual scss file
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig);