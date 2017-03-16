'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableDefaults = exports.tableHeaderRowDefaults = exports.tableHeaderRowTypes = exports.tableHeaderContextTypes = exports.tableHeaderTypes = exports.tableBodyRowDefaults = exports.tableBodyRowTypes = exports.tableBodyContextTypes = exports.tableBodyDefaults = exports.tableBodyTypes = exports.tableContextTypes = exports.tableTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayOfObjectColumns = _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
  header: _react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string,
    transforms: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
    formatters: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
    props: _react2.default.PropTypes.object
  }),
  cell: _react2.default.PropTypes.shape({
    property: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
    transforms: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
    formatters: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
    props: _react2.default.PropTypes.object
  })
}));
var arrayOfArrayColumns = _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.array);
var rowsType = _react2.default.PropTypes.oneOfType([arrayOfObjectColumns, arrayOfArrayColumns]);
var rowKeyType = _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]);
var rowDataType = _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]);
var tableTypes = {
  columns: _react2.default.PropTypes.array.isRequired,
  components: _react2.default.PropTypes.object
};
var tableContextTypes = {
  columns: _react2.default.PropTypes.array.isRequired,
  components: _react2.default.PropTypes.object
};
var tableBodyDefaults = {
  onRow: function onRow() {}
};
var tableBodyTypes = {
  onRow: _react2.default.PropTypes.func,
  rows: rowsType.isRequired,
  rowKey: rowKeyType
};
var tableBodyContextTypes = {
  columns: _react2.default.PropTypes.array.isRequired,
  components: _react2.default.PropTypes.object
};
var tableBodyRowDefaults = {
  onRow: function onRow() {
    return {};
  }
};
var tableBodyRowTypes = {
  columns: _react2.default.PropTypes.array.isRequired,
  components: _react2.default.PropTypes.object,
  onRow: _react2.default.PropTypes.func,
  rowIndex: _react2.default.PropTypes.number.isRequired,
  rowData: rowDataType.isRequired,
  rowKey: _react2.default.PropTypes.string.isRequired
};
var tableHeaderTypes = {
  headerRows: _react2.default.PropTypes.arrayOf(arrayOfObjectColumns),
  children: _react2.default.PropTypes.any
};
var tableHeaderContextTypes = {
  columns: _react2.default.PropTypes.array.isRequired,
  components: _react2.default.PropTypes.object
};
var tableHeaderRowDefaults = {
  onRow: function onRow() {
    return {};
  }
};
var tableHeaderRowTypes = {
  components: _react2.default.PropTypes.object,
  onRow: _react2.default.PropTypes.func,
  rowIndex: _react2.default.PropTypes.number.isRequired,
  rowData: rowDataType.isRequired
};
var tableDefaults = {
  components: {
    table: 'table',
    header: {
      wrapper: 'thead',
      row: 'tr',
      cell: 'th'
    },
    body: {
      wrapper: 'tbody',
      row: 'tr',
      cell: 'td'
    }
  }
};

exports.tableTypes = tableTypes;
exports.tableContextTypes = tableContextTypes;
exports.tableBodyTypes = tableBodyTypes;
exports.tableBodyDefaults = tableBodyDefaults;
exports.tableBodyContextTypes = tableBodyContextTypes;
exports.tableBodyRowTypes = tableBodyRowTypes;
exports.tableBodyRowDefaults = tableBodyRowDefaults;
exports.tableHeaderTypes = tableHeaderTypes;
exports.tableHeaderContextTypes = tableHeaderContextTypes;
exports.tableHeaderRowTypes = tableHeaderRowTypes;
exports.tableHeaderRowDefaults = tableHeaderRowDefaults;
exports.tableDefaults = tableDefaults;