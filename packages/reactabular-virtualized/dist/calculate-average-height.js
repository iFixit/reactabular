'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactabularTable = require('reactabular-table');

var calculateAverageHeight = function calculateAverageHeight(_ref) {
  var measuredRows = _ref.measuredRows,
      rows = _ref.rows,
      rowKey = _ref.rowKey;

  var resolvedRowKeys = rows.map(function (rowData, rowIndex) {
    return (0, _reactabularTable.resolveRowKey)({ rowData: rowData, rowIndex: rowIndex, rowKey: rowKey });
  });
  var measuredAmounts = Object.keys(measuredRows).filter(function (key) {
    return resolvedRowKeys.indexOf(key) >= 0;
  }).map(function (key) {
    return measuredRows[key];
  });
  var amountOfMeasuredRows = measuredAmounts.length;

  return measuredAmounts.reduce(function (a, b) {
    return a + b / amountOfMeasuredRows;
  }, 0);
};

exports.default = calculateAverageHeight;