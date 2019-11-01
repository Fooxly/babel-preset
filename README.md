# Fooxly Babel Preset

The default [Babel](https://babeljs.io/) preset for [Fooxly](https://www.fooxly.com) projects.

[![npm version](https://img.shields.io/npm/v/@fooxly/babel-preset.svg?style=flat)](https://www.npmjs.com/package/@fooxly/babel-preset)

## :rocket:&nbsp; Powered By

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [@babel/plugin-proposal-optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) (configured for all `.js`, `.jsx` & `.json` files in `./src`)

## ❤&nbsp; Support us

> <span style="color:#32CD32">**40%**</span> of the revenue made from the support you give us, will be donated to a [charity](https://teamtrees.org)

<p>
  <a title="BuyMeACoffee" href="https://www.buymeacoffee.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/buymeacoffee.png" alt="BuyMeACoffee" width="25%" style="max-width: 180px" />
  </a>&nbsp;&nbsp;
  <a title="Patreon" href="https://www.patreon.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/patreon.png" alt="Patreon" width="25%" style="max-width: 180px"/>
  </a>&nbsp;&nbsp;
  <a title="PayPal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE">
    <img src="https://developer.fooxly.com/general/assets/images/paypal.png" alt="PayPal" width="25%" style="max-width: 180px" />
  </a>
</p>

<br/>

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
