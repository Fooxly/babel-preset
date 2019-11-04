var envPreset = require('@babel/preset-env')
var classProperties = require('@babel/plugin-proposal-class-properties')
var optionalChaining = require('@babel/plugin-proposal-optional-chaining')
var exportFrom = require('@babel/plugin-proposal-export-default-from')
var moduleResolver = require('babel-plugin-module-resolver')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [[envPreset, {
      corejs: 3,
      useBuiltIns: 'usage'
    }]],
    plugins: [
      exportFrom,
      classProperties,
      optionalChaining,
      [moduleResolver, {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json']
      }]
    ]
  }
}
