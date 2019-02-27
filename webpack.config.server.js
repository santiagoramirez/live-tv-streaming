const fs = require('fs')
const path = require('path')
const config = require('./config')

const nodeModules = {}

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  })

module.exports = {
  entry: {
    'server': path.join(config.SERVER_ENTRY_PATH, './server.js')
  },
  target: 'node',
  output: {
    path: __dirname,
    filename: path.join(config.SERVER_OUTPUT_PATH, './[name].js'),
  },
  externals: nodeModules,
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            ['transform-async-to-promises'],
            ['transform-class-properties'],
            ['transform-object-rest-spread']
          ],
          presets: [
            'es2015',
            'react'
          ]
        }
      }]
    }],
  },
  resolve: {
    alias: {
      '@app': config.SCRIPTS_ENTRY_PATH,
      '@styles': config.STYLES_ENTRY_PATH
    }
  },
  watch: true
}
