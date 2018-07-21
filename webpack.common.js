'use strict';

require('../../../Library/Caches/typescript/2.9/node_modules/@types/dotenv').config();

const { DefinePlugin } = require('../../../Library/Caches/typescript/2.9/node_modules/@types/webpack');
const HtmlWebpackPlugin = require('../../../Library/Caches/typescript/2.9/node_modules/@types/html-webpack-plugin');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title: 'Day 28 React App',
  }),
  new DefinePlugin({
    API_URL: JSON.stringify(process.env.API_URL),
  }),
];

webpackConfig.module = {};

webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|gif)$/i,
    use: ['file-loader'],
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-0', 'react'],
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      },
    },
  },
];