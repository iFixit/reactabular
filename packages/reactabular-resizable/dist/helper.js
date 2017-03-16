'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _stylesheetHelpers = require('stylesheet-helpers');

var stylesheet = _interopRequireWildcard(_stylesheetHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function helper(_ref) {
  var globalId = _ref.globalId,
      getId = _ref.getId;

  // Create a custom stylesheet for tracking styles.
  // Without creating a custom one we would need to modify
  // an existing one.
  //
  // This can fail on old IE due to low maximum stylesheet limit.
  var _stylesheet$create = stylesheet.create(),
      styleSheetElement = _stylesheet$create.styleSheetElement,
      styleSheet = _stylesheet$create.styleSheet;

  return {
    initialize: function initialize(columns) {
      return columns.map(function (column, index) {
        var className = getClassName(globalId, getId(column, index));

        updateWidth({
          styleSheet: styleSheet,
          className: className,
          width: column.width
        });

        return _extends({}, column, {
          props: _extends({}, column.props, {
            // TODO: test against missing props case
            className: (0, _classnames2.default)(column.props && column.props.className, className)
          })
        });
      });
    },
    cleanup: function cleanup() {
      styleSheetElement.remove();
    },
    update: function update(_ref2) {
      var column = _ref2.column,
          width = _ref2.width;

      updateWidth({
        styleSheet: styleSheet,
        className: getClassName(globalId, getId(column)),
        width: width
      });
    }
  };
}

function getClassName(globalId, localId) {
  return 'column-' + globalId + '-' + localId;
}

function updateWidth(_ref3) {
  var styleSheet = _ref3.styleSheet,
      className = _ref3.className,
      width = _ref3.width;

  stylesheet.updateProperties(window, styleSheet, className, {
    width: width + 'px',
    minWidth: width + 'px',
    maxWidth: width + 'px'
  });
}

exports.default = helper;