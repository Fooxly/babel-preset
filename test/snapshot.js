module.exports = `
"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.timers");

require("regenerator-runtime/runtime");

var _test = _interopRequireDefault(require("./src/components/test"));

var _foo$foo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var testOptionalChaining = (_foo$foo = {
  foo: {
    bar: 'test'
  }
}.foo) === null || _foo$foo === void 0 ? void 0 : _foo$foo.bar;

var testClassProperties = function testClassProperties() {
  _classCallCheck(this, testClassProperties);

  _defineProperty(this, "property", 'foo bar');
};

var wait = function wait() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true);
    }, 1000);
  });
};

var testAsync =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = console;
            _context.next = 3;
            return wait();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function testAsync() {
    return _ref.apply(this, arguments);
  };
}();
`.trim()
