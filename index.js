var envPreset = require('@babel/preset-env')
var optionalChaining = require('@babel/plugin-proposal-optional-chaining')
var moduleResolver = require('babel-plugin-module-resolver')

module.exports = function (context, options = {}) {
  return {
    presets: [envPreset],
    plugins: [
      optionalChaining,
      [moduleResolver, {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json']
      }]
    ]
  }
}
