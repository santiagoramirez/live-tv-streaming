const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')

module.exports = {
  entry: {
    'app': [
      path.join(config.SCRIPTS_ENTRY_PATH, './browser.js'),
      path.join(config.STYLES_ENTRY_PATH, './app.scss')
    ]
  },
  output: {
    path: __dirname,
    filename: path.join(config.SCRIPTS_OUTPUT_PATH, './[name].js'),
  },
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
    }, {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          minimize: true,
          url: false
        }
      }, {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          remove: false,
          plugins: [
            require('autoprefixer')({
              flexbox: 'no-2009',
            })
          ]
        }
      }, {
        loader: 'sass-loader'
      }
      ]
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join(config.STYLES_OUTPUT_PATH, './[name].css')
    })
  ],
  resolve: {
    alias: {
      '@app': config.SCRIPTS_ENTRY_PATH,
      '@styles': config.STYLES_ENTRY_PATH
    }
  },
  mode: 'development',
  devtool: 'source-map',
  watch: true
}
