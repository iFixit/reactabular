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

var _reactabularSticky = require('reactabular-sticky');

var _reactabularTable = require('reactabular-table');

var _types = require('./types');

var _calculateAverageHeight = require('./calculate-average-height');

var _calculateAverageHeight2 = _interopRequireDefault(_calculateAverageHeight);

var _calculateRows = require('./calculate-rows');

var _calculateRows2 = _interopRequireDefault(_calculateRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualizedBody = function (_React$Component) {
  _inherits(VirtualizedBody, _React$Component);

  function VirtualizedBody(props) {
    _classCallCheck(this, VirtualizedBody);

    var _this = _possibleConstructorReturn(this, (VirtualizedBody.__proto__ || Object.getPrototypeOf(VirtualizedBody)).call(this, props));

    _this.measuredRows = {}; // row key -> measurement
    _this.ref = null;
    _this.scrollTop = 0;
    _this.initialMeasurement = true;

    _this.state = getInitialState();

    _this.checkMeasurements = _this.checkMeasurements.bind(_this);
    return _this;
  }

  _createClass(VirtualizedBody, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkMeasurements();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkMeasurements();
    }
  }, {
    key: 'getHeight',
    value: function getHeight(optionalProps) {
      // If `optionalProps` is defined, we use `optionalProps` instead of `this.props`.
      var props = optionalProps || this.props;
      // If `props.height` is not defined, we use `props.style.maxHeight` instead.
      return props.height || props.style.maxHeight;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual3.default)(this.props.rows, nextProps.rows) || this.getHeight() !== this.getHeight(nextProps)) {
        if (process.env.NODE_ENV !== 'production' && window.LOG_VIRTUALIZED) {
          console.log('invalidating measurements'); // eslint-disable-line no-console
        }

        var rows = (0, _calculateRows2.default)({
          scrollTop: this.scrollTop,
          measuredRows: this.measuredRows,
          height: this.getHeight(nextProps),
          rowKey: nextProps.rowKey,
          rows: nextProps.rows
        });

        if (!rows) {
          return;
        }

        this.setState(rows);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      var _state = this.state,
          startHeight = _state.startHeight,
          endHeight = _state.endHeight,
          showExtraRow = _state.showExtraRow;


      return {
        startHeight: startHeight,
        endHeight: endHeight,
        showExtraRow: showExtraRow,
        updateHeight: function updateHeight(rowKey, height) {
          _this2.measuredRows[rowKey] = height;
        },
        // Capture height data only during the initial measurement
        initialMeasurement: this.initialMeasurement
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          _onRow = _props.onRow,
          rows = _props.rows,
          _onScroll = _props.onScroll,
          props = _objectWithoutProperties(_props, ['onRow', 'rows', 'onScroll']);

      var _state2 = this.state,
          startIndex = _state2.startIndex,
          amountOfRowsToRender = _state2.amountOfRowsToRender;

      // Attach information about measuring status. This way we can implement
      // proper shouldComponentUpdate

      var rowsToRender = rows.slice(startIndex, startIndex + amountOfRowsToRender).map(function (rowData, rowIndex) {
        return _extends({}, rowData, {
          _measured: !!_this3.measuredRows[(0, _reactabularTable.resolveRowKey)({
            rowData: rowData,
            rowIndex: rowIndex,
            rowKey: _this3.props.rowKey
          })]
        });
      });

      if (process.env.NODE_ENV !== 'production' && window.LOG_VIRTUALIZED) {
        console.log( // eslint-disable-line no-console
        'rendering', rowsToRender.length, '/', rows.length, 'rows to render', rowsToRender, 'start index', startIndex, 'amount of rows to render', amountOfRowsToRender);
      }

      return _react2.default.createElement(_reactabularSticky.Body, _extends({}, props, {
        onRow: function onRow(row, extra) {
          var rowProps = _onRow ? _onRow(row, extra) : {};

          return _extends({
            // Pass index so that row heights can be tracked properly
            'data-rowkey': extra.rowKey
          }, rowProps);
        },
        rows: rowsToRender,
        ref: function ref(body) {
          _this3.ref = body && body.getRef().getRef();
        },
        onScroll: function onScroll(e) {
          _onScroll && _onScroll(e);

          var scrollTop = e.target.scrollTop;

          // Y didn't change, bail to avoid rendering rows

          if (_this3.scrollTop === scrollTop) {
            return;
          }

          _this3.scrollTop = scrollTop;

          _this3.setState((0, _calculateRows2.default)({
            scrollTop: scrollTop,
            measuredRows: _this3.measuredRows,
            height: _this3.getHeight(),
            rowKey: _this3.props.rowKey,
            rows: _this3.props.rows
          }));
        }
      }));
    }
  }, {
    key: 'getRef',
    value: function getRef() {
      var _this4 = this;

      var ref = this.ref;

      ref.scrollTo = function (index) {
        var startIndex = parseInt(index, 10);

        if (startIndex >= 0) {
          var startHeight = (0, _calculateAverageHeight2.default)({
            measuredRows: _this4.measuredRows,
            rows: _this4.props.rows,
            rowKey: _this4.props.rowKey
          }) * startIndex;

          _this4.scrollTop = startHeight;
          _this4.ref.scrollTop = startHeight;
        }
      };

      return ref;
    }
  }, {
    key: 'checkMeasurements',
    value: function checkMeasurements() {
      var _this5 = this;

      // If there are no valid measurements, calculate some after waiting a while.
      // Without this styling solutions like Radium won't work as you might expect
      // given they can take a while to set container height.
      if (this.initialMeasurement) {
        setTimeout(function () {
          var rows = (0, _calculateRows2.default)({
            scrollTop: _this5.scrollTop,
            measuredRows: _this5.measuredRows,
            height: _this5.getHeight(),
            rowKey: _this5.props.rowKey,
            rows: _this5.props.rows
          });

          if (!rows) {
            // Refresh the rows to trigger measurement.
            _this5.forceUpdate();

            return;
          }

          _this5.setState(rows, function () {
            _this5.initialMeasurement = false;
          });
        }, 100);
      }
    }
  }]);

  return VirtualizedBody;
}(_react2.default.Component);

VirtualizedBody.defaultProps = _reactabularSticky.Body.defaultProps;
process.env.NODE_ENV !== "production" ? VirtualizedBody.propTypes = _extends({}, _reactabularSticky.Body.propTypes, {
  height: _react2.default.PropTypes.number.isRequired
}) : void 0;
VirtualizedBody.childContextTypes = _types.bodyChildContextTypes;

function getInitialState() {
  return {
    amountOfRowsToRender: 3, // First few rows for initial measurement
    startIndex: 0, // Index where to start rendering

    // Heights for extra rows to mimic scrolling
    startHeight: 0,
    endHeight: 0,

    // Show extra row (even/odd issue)
    showExtraRow: false
  };
}

exports.default = VirtualizedBody;