const path = require('path')

const config = {
  SERVER_ENTRY_PATH: path.join(__dirname, './src/server'),
  SERVER_OUTPUT_PATH: './dist/server',

  SCRIPTS_ENTRY_PATH: path.join(__dirname, './src/scripts'),
  SCRIPTS_OUTPUT_PATH: './dist/scripts',

  STYLES_ENTRY_PATH: path.join(__dirname, './src/styles'),
  STYLES_OUTPUT_PATH: './dist/styles',
}

module.exports = config
