const path = require('path')
const webpack = require('webpack')
const devMode = process.env.NODE_ENV !== 'production'

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'info': './src/js/info.js',
    'intro': './src/js/intro.js'
  },
  devtool: devMode ? 'inline-source-map' : false,
  output: {
    filename: '[name]/[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: devMode ? '' : 'https://ecs7.tokopedia.net/assets-tokopoints/prod/js',
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader', 
            options: {
              sourceMap: devMode 
            }
          },
          { 
            loader: 'sass-loader', 
            options: {
              sourceMap: devMode 
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[name].[hash].css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['info'],
      template: './src/info/index.html',
      filename: 'info/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['intro'],
      template: './src/intro/index.html',
      filename: 'intro/index.html'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: devMode
      }),
      new OptimizeCssAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}
