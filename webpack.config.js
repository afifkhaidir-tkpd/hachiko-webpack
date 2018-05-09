const path = require('path')

module.exports = {
  entry: './src/js/info.js',
  output: {
    filename: 'info.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
}