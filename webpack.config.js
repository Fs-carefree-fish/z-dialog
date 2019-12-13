const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'release'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // webpack-dev-server 资源根目录
    contentBase: path.resolve(__dirname, 'release'),
    //启动热更新
    inline: true,
    hot: true,
    port: 8082,
  }
}