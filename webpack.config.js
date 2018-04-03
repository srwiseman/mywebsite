var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  mode : "production",
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins : [
      new webpack.DefinePlugin({
        "process.env": { 
          NODE_ENV: JSON.stringify("production") 
         }
      }),
      new UglifyJSPlugin({
        sourceMap:true
    })
  ]
};

module.exports = config;