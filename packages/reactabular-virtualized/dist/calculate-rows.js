'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calculateAverageHeight = require('./calculate-average-height');

var _calculateAverageHeight2 = _interopRequireDefault(_calculateAverageHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculateRows = function calculateRows(_ref) {
  var measuredRows = _ref.measuredRows,
      height = _ref.height,
      rowKey = _ref.rowKey,
      rows = _ref.rows,
      _ref$scrollTop = _ref.scrollTop,
      scrollTop = _ref$scrollTop === undefined ? 0 : _ref$scrollTop;

  // Calculate amount of rows to render based on average height and take the
  // amount of actual rows into account.
  var averageHeight = (0, _calculateAverageHeight2.default)({ measuredRows: measuredRows, rows: rows, rowKey: rowKey });
  var amountOfRowsToRender = Math.ceil(height / averageHeight) + 2;

  var startIndex = Math.floor(scrollTop / averageHeight);
  var rowsToRender = rows.slice(startIndex, startIndex + amountOfRowsToRender);

  if (process.env.NODE_ENV !== 'production' && window.LOG_VIRTUALIZED) {
    console.log( // eslint-disable-line no-console
    'update rows to render', 'scroll top', scrollTop, 'measured rows', measuredRows, 'amount of rows to render', amountOfRowsToRender, 'rows to render', rowsToRender, 'start index', startIndex);
  }

  // Escape if there are no rows to render for some reason
  if (!rowsToRender.length) {
    return null;
  }

  var startHeight = startIndex * averageHeight;

  // Calculate the padding of the last row so we can match whole height. This
  // won't be totally accurate if row heights differ but should get close
  // enough in most cases.
  var endHeight = Math.max((rows.length - amountOfRowsToRender) * averageHeight - startHeight, 0);

  if (process.env.NODE_ENV !== 'production' && window.LOG_VIRTUALIZED) {
    console.log( // eslint-disable-line no-console
    'average height', averageHeight, 'body height', height, 'scroll top', scrollTop, 'start height', startHeight, 'end height', endHeight);
  }

  return {
    amountOfRowsToRender: amountOfRowsToRender,
    startIndex: startIndex,
    showExtraRow: !(startIndex % 2),
    startHeight: startHeight,
    endHeight: endHeight
  };
};

exports.default = calculateRows;