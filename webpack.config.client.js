const path = require('path')
const config = require('./config')
const baseWebpackConfig = require('./webpack.config.base')

module.exports = Object.assign({}, baseWebpackConfig, {
  entry: {
    'app': [
      path.join(config.SCRIPTS_ENTRY_PATH, './app.js')
    ]
  },
  output: {
    path: __dirname,
    filename: path.join(config.SCRIPTS_OUTPUT_PATH, './[name].js'),
  },
  mode: 'development',
  devtool: 'source-map'
})
