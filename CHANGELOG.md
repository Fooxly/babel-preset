<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2019-11-25
### Added
- [CI workflow](https://github.com/Fooxly/babel-preset/actions?query=workflow%3Atests)
- [`compact: true`](https://babeljs.io/docs/en/options#compact) & [`sourceMaps: false`](https://babeljs.io/docs/en/options#sourcemaps) in production
- `noEnv` option (+ tests) to disable [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) (necessary for React Native)

### Changed
- Updated dependencies

## [2.1.0] - 2019-11-04
### Added
- Support for [Export From](https://babeljs.io/docs/en/next/babel-plugin-proposal-export-default-from.html)
- Tests for `export ... from`
- More keywords to [package.json]

## [2.0.1] - 2019-11-03
### Changed
- "React Native" to "React or React Native" in [README.md]
- Now redirecting React & React Native users to [@fooxly/babel-preset-react](https://www.npmjs.com/package/@fooxly/babel-preset-react)

### Fixed
- Double donate button in [README.md]

## [2.0.0] - 2019-11-03
### Added
- Caching preset for better performance
- Our support section to the [README.md]
- Support for [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) ([core-js@3](https://www.npmjs.com/package/core-js) & [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime))
- Support for [Class Properties](https://javascript.info/class#class-properties) ([@babel/plugin-proposal-class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties))

### Changed
- Tests to support Async/Await & Class Properties

## [1.0.3] - 2019-10-30
### Changed
- Dependencies now match latest compatible version instead of latest version

## [1.0.2] - 2019-10-21
### Added
- React Native instructions to [README.md]

### Changed
- Moved from [pnpm] to yarn

## [1.0.1] - 2019-10-20
### Added
- This changelog file
- Colored output for test errors

### Changed
- Dependencies updated to satisfy latest versions

### Removed
- [pnpm] engine requirement
- npm bundle size from [README.md] (due to this being a development package)

### Fixed
- Indentation & double keyword in [package.json]

## [1.0.0] - 2019-10-18
### Added
- The default [Babel] preset [Fooxly] uses

[README.md]: README.md
[package.json]: package.json
[Babel]: https://babeljs.io/
[Fooxly]: https://www.fooxly.com/
[pnpm]: https://github.com/pnpm/pnpm

[3.0.0]: https://github.com/Fooxly/babel-preset/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/Fooxly/babel-preset/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/Fooxly/babel-preset/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/Fooxly/babel-preset/compare/v1.0.3...v2.0.0
[1.0.3]: https://github.com/Fooxly/babel-preset/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/Fooxly/babel-preset/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Fooxly/babel-preset/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Fooxly/babel-preset/releases/tag/v1.0.0
