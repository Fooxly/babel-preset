var envPreset = require('@babel/preset-env')
var classProperties = require('@babel/plugin-proposal-class-properties')
var optionalChaining = require('@babel/plugin-proposal-optional-chaining')
var exportFrom = require('@babel/plugin-proposal-export-default-from')
var moduleResolver = require('babel-plugin-module-resolver')

module.exports = function (api, opts) {
  api.cache(true)
  return {
    presets: !opts.noEnv ? [[envPreset, {
      corejs: 3,
      useBuiltIns: 'usage'
    }]] : [],
    plugins: [
      exportFrom,
      classProperties,
      optionalChaining,
      [moduleResolver, {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json']
      }]
    ],
    env: {
      production: {
        compact: true,
        sourceMaps: false
      }
    }
  }
}
