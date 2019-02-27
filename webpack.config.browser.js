const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const SCRIPTS_ENTRY_PATH = path.join(__dirname, './source/app')
const SCRIPTS_OUTPUT_PATH = './build/assets/scripts'

const STYLES_ENTRY_PATH = path.join(__dirname, './source/styles')
const STYLES_OUTPUT_PATH = './build/assets/styles'

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

const cssLoaderOptions = {
  minimize: true,
  url: false
}

const postCSSLoaderOptions = {
  ident: 'postcss',
  remove: false,
  plugins: [
    require('autoprefixer')({
      flexbox: 'no-2009',
    })
  ]
}

const config = {
  entry: {
    'app': [
      path.join(SCRIPTS_ENTRY_PATH, './browser.js'),
      path.join(STYLES_ENTRY_PATH, './app.scss')
    ]
  },
  output: {
    path: __dirname,
    filename: path.join(SCRIPTS_OUTPUT_PATH, './[name].js'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        { loader: 'babel-loader', options: babelLoaderOptions }
      ]
    }, {
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', options: cssLoaderOptions },
        { loader: 'postcss-loader', options: postCSSLoaderOptions },
        { loader: 'sass-loader' }
      ]
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join(STYLES_OUTPUT_PATH, './[name].css')
    })
  ],
  resolve: {
    alias: {
      '@app': SCRIPTS_ENTRY_PATH,
      '@app/styles': STYLES_ENTRY_PATH
    }
  },
  mode: 'development',
  devtool: 'source-map',
  watch: true
}

module.exports = config
