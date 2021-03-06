var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: process.env.NODE_ENV === 'production'
      ? config.build.assetsRoot
      : config.dev.assetsRoot,
    filename: '[name].js',
    chunkFilename: '../../assets/js/[chunkhash].chunk.js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'datetimepicker':'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      'easing':'jquery.easing/jquery.easing.js',
      'morris':'morris.js/morris.js',
      'material':'bootstrap-material-design/dist/js/material.js',
      'ripples':'bootstrap-material-design/dist/js/ripples.js',
      'notify':"notify/dist/bootstrap-notify.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /bootstrap.+\.(js)$/,
        loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
      },
      {
        test: /material.+\.(js)$/,
        loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
      },
      {
        test: /ripples.+\.(js)$/,
        loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
      },
      {
        test: /bootstrap-notify.+\.(js)$/,
        loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('../../assets/images/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('../../assets/css/fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins:[
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           "select2": "../node_modules/select2/dist/js/select2.full.min.js",
           moment: "moment",
           swal: 'sweetalert2',
           material:'../node_modules/bootstrap-material-design/dist/js/material.js',
           ripples:'../node_modules/bootstrap-material-design/dist/js/ripples.js',
           datetimepicker:"../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"
       })
    ]
}
