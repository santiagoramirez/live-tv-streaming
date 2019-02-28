const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')

module.exports = {
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
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
      '@app': config.SCRIPTS_ENTRY_PATH
    },
    extensions: ['.js', '.jsx'],
    plugins: [
      new DirectoryNamedWebpackPlugin(true)
    ]
  }
}
