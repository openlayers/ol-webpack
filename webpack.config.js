const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
};
