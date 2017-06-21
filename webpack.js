/*
  Using webpack as my bundler.
  Will compile and bundle CSS and JS
*/
// const cwd = process.cwd();
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths;

module.exports = {
  entry: ['./app/app.jsx', './stylesheets/main.scss'],
  output: {
    filename: 'bundle.js',
    // directory where bundle should be placed
    path: path.resolve(__dirname, 'dist'),
  },
  module: {

    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // Using BABEl for transpiling
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      },
      {
        // configuring file/font loader if needed
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        // configuring sass / scss loader
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', `sass-loader?includePaths[]=${bourbon}&includePaths[]=${neat}`]),
      }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // Shrinking my bundle with react-lite
      // disable if using react-dev-tool / debugging
      react: 'react-lite',
      'react-dom': 'react-lite',
      // common path alias for project imports
      common: path.resolve(path.join(__dirname, 'app'), 'common'),
    },
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    // Uglify should only be done on production
    // disable for debugging
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
