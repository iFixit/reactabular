'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Adapted from https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable
var resizableColumn = function resizableColumn(_ref) {
  var _ref$parent = _ref.parent,
      parent = _ref$parent === undefined ? document : _ref$parent,
      _ref$onDragStart = _ref.onDragStart,
      onDragStart = _ref$onDragStart === undefined ? function (width, extra) {} : _ref$onDragStart,
      _ref$onDrag = _ref.onDrag,
      onDrag = _ref$onDrag === undefined ? function (width, extra) {} : _ref$onDrag,
      _ref$onDragEnd = _ref.onDragEnd,
      onDragEnd = _ref$onDragEnd === undefined ? function (width, extra) {} : _ref$onDragEnd,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === undefined ? 10 : _ref$minWidth,
      _ref$props = _ref.props,
      props = _ref$props === undefined ? {
    container: {},
    value: {},
    handle: {}
  } : _ref$props;

  if (!onDrag) {
    throw new Error('resizableColumn - Missing onDrag!');
  }

  return function (label, extraParameters) {
    var ResizableColumn = function (_React$Component) {
      _inherits(ResizableColumn, _React$Component);

      function ResizableColumn(props) {
        _classCallCheck(this, ResizableColumn);

        // Track coordinate rows at instance, no React state needed
        var _this = _possibleConstructorReturn(this, (ResizableColumn.__proto__ || Object.getPrototypeOf(ResizableColumn)).call(this, props)); // eslint-disable-line no-shadow


        _this.startX = null;
        _this.startWidth = null;

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);

        // Stash ref so we can check width
        _this.column = null;
        return _this;
      }

      _createClass(ResizableColumn, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          return _react2.default.createElement(
            'div',
            _extends({
              className: 'resize-container',
              ref: function ref(column) {
                if (column) {
                  _this2.column = column;
                }
              }
            }, props.container),
            _react2.default.createElement(
              'span',
              _extends({
                className: 'resize-value'
              }, props.value),
              label
            ),
            _react2.default.createElement(
              'span',
              _extends({
                className: 'resize-handle',
                onMouseDown: this.onMouseDown
              }, props.handle),
              '\xA0'
            )
          );
        }
      }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
          event.stopPropagation();
          event.preventDefault();

          parent.addEventListener('mousemove', this.onMouseMove);
          parent.addEventListener('mouseup', this.onMouseUp);

          this.startX = event.clientX;
          this.startWidth = this.column.offsetWidth;

          this.triggerMove(onDragStart, event);
        }
      }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
          event.stopPropagation();
          event.preventDefault();

          this.triggerMove(onDrag, event);
        }
      }, {
        key: 'onMouseUp',
        value: function onMouseUp(event) {
          event.stopPropagation();
          event.preventDefault();

          this.triggerMove(onDragEnd, event);

          parent.removeEventListener('mousemove', this.onMouseMove);
          parent.removeEventListener('mouseup', this.onMouseUp);
        }
      }, {
        key: 'triggerMove',
        value: function triggerMove(handler, event) {
          handler(Math.max(this.startWidth - this.startX + event.clientX, extraParameters.column && extraParameters.column.minWidth || minWidth), extraParameters);
        }
      }]);

      return ResizableColumn;
    }(_react2.default.Component);

    return _react2.default.createElement(ResizableColumn);
  };
};

exports.default = resizableColumn;