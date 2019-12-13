"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var className = _ref.className,
      type = _ref.type,
      size = _ref.size;
  return _react2.default.createElement("img", {
    className: "Icon" + (className ? " " + className : ""),
    alt: "icon " + type,
    src: require("../../asset-inliner/inlined/icons/" + type + ".svg.js"),
    style: {
      width: Icon.sizes[size] || Icon.sizes["small"],
      height: Icon.sizes[size] || Icon.sizes["small"]
    }
  });
};

Icon.propTypes = {
  /*
  * Icon type
  */
  type: _propTypes2.default.string.isRequired,
  /*
  * Icon size
  */
  size: _propTypes2.default.string.isRequired
};

Icon.sizes = {
  small: "40px",
  large: "70px"
};

exports.default = Icon;