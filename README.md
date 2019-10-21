# Fooxly Babel Preset

The default [Babel](https://babeljs.io/) preset for [Fooxly](https://www.fooxly.com) projects.

[![npm version](https://img.shields.io/npm/v/@fooxly/babel-preset.svg?style=flat)](https://www.npmjs.com/package/@fooxly/babel-preset)

## :rocket:&nbsp; Powered By

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [@babel/plugin-proposal-optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) (configured for all `.js`, `.jsx` & `.json` files in `./src`)

## :cloud:&nbsp; Installation

### using npm

```sh
npm install --save-dev @fooxly/babel-preset
```

### using yarn

```sh
yarn add -D @fooxly/babel-preset
```

## :triangular_ruler:&nbsp; Usage

### using .babelrc

```json
{
  "presets": ["@fooxly/babel-preset"]
}
```

### using package.json

```json
...
"babel": {
  "presets": ["@fooxly/babel-preset"]
}
...
```

### using React Native

Make sure to check out the README of the [Metro Babel preset](https://www.npmjs.com/package/metro-react-native-babel-preset) in order to use the latest available React Native technologies.

```json
{
  "presets": [
    "module:metro-react-native-babel-preset",
    "@fooxly/babel-preset"
  ]
}
```
