'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var componentDefaults = _types.tableDefaults.components;

// TODO: shouldComponentUpdate

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          columns = _props.columns,
          components = _props.components;


      return {
        columns: columns,
        components: {
          table: components.table || componentDefaults.table,
          header: _extends({}, componentDefaults.header, components.header),
          body: _extends({}, componentDefaults.body, components.body)
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          columns = _props2.columns,
          components = _props2.components,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ['columns', 'components', 'children']);

      return _react2.default.createElement(components.table || _types.tableDefaults.components.table, props, children);
    }
  }]);

  return Provider;
}(_react2.default.Component);

exports.default = Provider;

process.env.NODE_ENV !== "production" ? Provider.propTypes = _extends({}, _types.tableTypes, {
  children: _react2.default.PropTypes.any
}) : void 0;
Provider.defaultProps = _extends({}, _types.tableDefaults);
Provider.childContextTypes = _types.tableContextTypes;