const path = require('path')

const config = {
  SERVER_ENTRY_PATH: path.join(__dirname),
  SERVER_OUTPUT_PATH: './',

  SCRIPTS_ENTRY_PATH: path.join(__dirname, './src/scripts'),
  SCRIPTS_OUTPUT_PATH: './dist/scripts',

  STYLES_ENTRY_PATH: path.join(__dirname, './src/styles'),
  STYLES_OUTPUT_PATH: './dist/styles',
}

module.exports = config
