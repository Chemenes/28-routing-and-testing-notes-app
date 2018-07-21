const merge = require('../../../Library/Caches/typescript/2.9/node_modules/@types/webpack-merge');
const MiniCssPlugin = require('../../../Library/Caches/typescript/2.9/node_modules/@types/mini-css-extract-plugin');
const commonConfig = require('./webpack.common');

const webpackProdConfig = {};
webpackProdConfig.module = {};
webpackProdConfig.mode = 'production';

webpackProdConfig.plugins = [
  new MiniCssPlugin({
    filename: '[name].[hash].css',
  }),
];

webpackProdConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      MiniCssPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
];

module.exports = merge(commonConfig, webpackProdConfig);