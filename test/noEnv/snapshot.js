module.exports = `
var _foo$foo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import testAbsoluteImports from "./src/components/test";
import _testExportFrom from "./src/components/test";
export { _testExportFrom as testExportFrom };
const testOptionalChaining = (_foo$foo = {
  foo: {
    bar: 'test'
  }
}.foo) === null || _foo$foo === void 0 ? void 0 : _foo$foo.bar;

class testClassProperties {
  constructor() {
    _defineProperty(this, "property", 'foo bar');
  }

}
`.trim()
