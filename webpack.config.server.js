const fs = require('fs')
const path = require('path')
const config = require('./config')
const baseWebpackConfig = require('./webpack.config.base')

const nodeModules = {}

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  })

module.exports = Object.assign({}, baseWebpackConfig, {
  entry: {
    'index': path.join(config.SERVER_ENTRY_PATH, './index.js')
  },
  target: 'node',
  output: {
    path: __dirname,
    filename: path.join(config.SERVER_OUTPUT_PATH, './[name].bundle.js'),
  },
  externals: nodeModules,
  mode: 'development',
  devtool: 'source-map'
})
