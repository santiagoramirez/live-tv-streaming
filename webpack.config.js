const clientWebpackConfig = require('./webpack.config.client')
const serverWebpackConfig = require('./webpack.config.server')

module.exports = [
  clientWebpackConfig,
  serverWebpackConfig
]
