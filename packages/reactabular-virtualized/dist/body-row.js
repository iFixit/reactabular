'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactabularTable = require('reactabular-table');

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BodyRow = function (_React$Component) {
  _inherits(BodyRow, _React$Component);

  function BodyRow(props) {
    _classCallCheck(this, BodyRow);

    var _this = _possibleConstructorReturn(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).call(this, props));

    _this.ref = null;

    _this.updateHeight = _this.updateHeight.bind(_this);
    return _this;
  }

  _createClass(BodyRow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateHeight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // Capture height data only during initial measurement for performance.
      // This loses some accuracy if row height changes, but it's good enough
      // for most purposes.
      if (this.context.initialMeasurement) {
        this.updateHeight();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('tr', _extends({}, this.props, {
        ref: function ref(e) {
          if (e) {
            _this2.ref = e;
          }
        }
      }));
    }
  }, {
    key: 'updateHeight',
    value: function updateHeight() {
      this.context.updateHeight(this.props['data-rowkey'], this.ref.offsetHeight);
    }
  }]);

  return BodyRow;
}(_react2.default.Component);

BodyRow.contextTypes = _types.bodyRowContextTypes;
process.env.NODE_ENV !== "production" ? BodyRow.propTypes = _types.bodyRowTypes : void 0;

BodyRow.shouldComponentUpdate = function (nextProps) {
  var previousProps = this.props;

  // Update only if a row has not been measured and either
  // columns or rowData hasn't changed
  if (nextProps.rowData._measured) {
    return !((0, _reactabularTable.columnsAreEqual)(previousProps.columns, nextProps.columns) && (0, _isEqual3.default)(previousProps.rowData, nextProps.rowData));
  }

  return true;
};

exports.default = BodyRow;