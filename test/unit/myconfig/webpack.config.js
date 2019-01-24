const alias = require('../../../scripts/alias')
const featureFlags = require('../../../scripts/feature-flags')
const webpack = require('webpack')
const webpackConfig = {
  mode: 'development',
  resolve: {
    alias: alias
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __WEEX__: false,
      'process.env': {
        TRANSITION_DURATION: process.env.CI ? 100 : 50,
        TRANSITION_BUFFER: 10,
        ...featureFlags
      }
    })
  ],
  devtool: '#inline-source-map'
}

module.exports = webpackConfig
