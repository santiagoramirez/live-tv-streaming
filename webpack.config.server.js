const path = require('path')

const SCRIPTS_ENTRY_PATH = path.join(__dirname, './source/app')
const SCRIPTS_OUTPUT_PATH = './build/assets/scripts'

const babelLoaderOptions = {
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

var fs = require('fs');

var nodeModules = {}

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const config = {
  entry: {
    'server': [
      path.join(SCRIPTS_ENTRY_PATH, './server.js'),
    ]
  },
  target: 'node',
  output: {
    path: __dirname,
    filename: path.join(SCRIPTS_OUTPUT_PATH, './[name].js'),
  },
  externals: nodeModules,
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        { loader: 'babel-loader', options: babelLoaderOptions }
      ]
    }],
  },
  resolve: {
    alias: {
      '@app': SCRIPTS_ENTRY_PATH,
    }
  },
  mode: 'development',
  devtool: 'source-map',
  watch: true
}

module.exports = config
