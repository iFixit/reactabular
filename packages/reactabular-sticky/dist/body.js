'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactabularTable = require('reactabular-table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */


var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    _this.ref = null;
    return _this;
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          tableHeader = _props.tableHeader,
          _onScroll = _props.onScroll,
          props = _objectWithoutProperties(_props, ['style', 'tableHeader', 'onScroll']);

      var tableHeaderWidth = tableHeader ? tableHeader.clientWidth : 0;
      var tableBodyWidth = this.ref ? this.ref.clientWidth : 0;
      var scrollOffset = tableHeaderWidth - tableBodyWidth || 0;

      return _react2.default.createElement(_reactabularTable.Body, _extends({
        ref: function ref(body) {
          _this2.ref = body && body.getRef();
        },
        style: _extends({
          display: 'block',
          overflow: 'auto',
          paddingRight: scrollOffset
        }, style || {}),
        // Expand onScroll as otherwise the logic won't work
        onScroll: function onScroll(e) {
          _onScroll && _onScroll(e);

          var scrollLeft = e.target.scrollLeft;


          if (tableHeader) {
            tableHeader.scrollLeft = scrollLeft;
          }
        }
      }, props));
    }
  }, {
    key: 'getRef',
    value: function getRef() {
      return this.ref;
    }
  }]);

  return Body;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? Body.propTypes = {
  style: _react2.default.PropTypes.any,
  tableHeader: _react2.default.PropTypes.any,
  onScroll: _react2.default.PropTypes.func
} : void 0;

exports.default = Body;