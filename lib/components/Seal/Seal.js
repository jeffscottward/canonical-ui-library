"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seal = function Seal(_ref) {
  var className = _ref.className,
      type = _ref.type;
  return _react2.default.createElement("img", {
    className: "Seal" + (className ? " " + className : ""),
    alt: "seal " + type,
    src: require("../../asset-inliner/inlined/seals/seal-" + type + ".svg.js"),
    style: {
      width: Seal.sizes["large"],
      height: Seal.sizes["large"]
    }
  });
};

Seal.propTypes = {
  /*
  * Seal type
  */
  type: _propTypes2.default.string.isRequired
};

Seal.sizes = {
  large: "160px"
};

exports.default = Seal;