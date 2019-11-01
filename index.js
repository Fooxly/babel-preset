var envPreset = require('@babel/preset-env')
var classProperties = require('@babel/plugin-proposal-class-properties')
var optionalChaining = require('@babel/plugin-proposal-optional-chaining')
var moduleResolver = require('babel-plugin-module-resolver')

module.exports = function (context, options = {}) {
  return {
    presets: [[envPreset, {
      corejs: 3,
      useBuiltIns: 'usage'
    }]],
    plugins: [
      classProperties,
      optionalChaining,
      [moduleResolver, {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json']
      }]
    ]
  }
}
