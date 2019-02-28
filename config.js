const path = require('path')

module.exports = {
  SERVER_ENTRY_PATH: path.join(__dirname),
  SERVER_OUTPUT_PATH: './',
  SCRIPTS_ENTRY_PATH: path.join(__dirname, './src'),
  SCRIPTS_OUTPUT_PATH: './dist/scripts',
  STYLES_OUTPUT_PATH: './dist/styles',
}
