'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeWith2 = require('lodash/mergeWith');

var _mergeWith3 = _interopRequireDefault(_mergeWith2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergePropPair(first) {
  for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  // Avoid mutating the first prop collection
  return _mergeWith3.default.apply(undefined, [(0, _mergeWith3.default)({}, first)].concat(props, [function (a, b, key) {
    if (key === 'children') {
      // Children have to be merged in reverse order for Reactubular
      // logic to work.
      return _extends({}, b, a);
    }

    if (key === 'className') {
      // Process class names through classNames to merge properly
      // as a string.
      return (0, _classnames2.default)(a, b);
    }

    return undefined;
  }]));
}

exports.default = mergePropPair;