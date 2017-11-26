const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const thisConfig = {
  entry: './src/client/client.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = merge(baseConfig, thisConfig);
