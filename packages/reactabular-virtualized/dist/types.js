'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyWrapperTypes = exports.bodyWrapperContextTypes = exports.bodyRowTypes = exports.bodyRowContextTypes = exports.bodyChildContextTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyRowContextTypes = {
  initialMeasurement: _react2.default.PropTypes.bool,
  updateHeight: _react2.default.PropTypes.func
};
var bodyRowTypes = {
  'data-rowkey': _react2.default.PropTypes.string
};
var bodyWrapperContextTypes = {
  startHeight: _react2.default.PropTypes.number,
  endHeight: _react2.default.PropTypes.number,
  showExtraRow: _react2.default.PropTypes.bool
};
var bodyWrapperTypes = {
  children: _react2.default.PropTypes.any
};
var bodyChildContextTypes = _extends({}, bodyRowContextTypes, bodyWrapperContextTypes);

exports.bodyChildContextTypes = bodyChildContextTypes;
exports.bodyRowContextTypes = bodyRowContextTypes;
exports.bodyRowTypes = bodyRowTypes;
exports.bodyWrapperContextTypes = bodyWrapperContextTypes;
exports.bodyWrapperTypes = bodyWrapperTypes;