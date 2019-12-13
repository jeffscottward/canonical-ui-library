"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _vars = require("../vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a column layout block
 */
var LayoutGrid = function LayoutGrid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      offset = _ref.offset;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["384212626", [_vars.LayoutSizes[3], children.length > 1 ? "width: calc( (" + _vars.LayoutSizes[3] + "/" + children.length + ") - (" + _vars.MarginPaddingSize[2] + "/" + children.length + ") );" : "width: 100%;", offset ? offset === "left" ? "&:first-child { width: " + _vars.LayoutSizes[2] + "};" + "&:nth-child(2) { width: " + _vars.LayoutSizes[0] + "};" : offset === "right" ? "&:first-child { width: " + _vars.LayoutSizes[0] + "};" + "&:nth-child(2) { width: " + _vars.LayoutSizes[2] + "};" : "" : "", offset && children.length === 2 ? offset === "left" ? "width: " + _vars.LayoutSizes[2] + ";" : "" : "", offset && children.length === 2 ? offset === "right" ? "width: " + _vars.LayoutSizes[0] + ";" : "" : "", offset && children.length === 2 ? offset === "left" ? "width: " + _vars.LayoutSizes[0] + ";" : "" : "", offset && children.length === 2 ? offset === "right" ? "width: " + _vars.LayoutSizes[2] + ";" : "" : ""]]]) + " " + ("LayoutGrid" + (className ? " " + className : "") || "")
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: "384212626",
      css: ".LayoutGrid.__jsx-style-dynamic-selector{margin:auto;max-width:" + _vars.LayoutSizes[3] + ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}.LayoutGrid.__jsx-style-dynamic-selector>*{" + (children.length > 1 ? "width: calc( (" + _vars.LayoutSizes[3] + "/" + children.length + ") - (" + _vars.MarginPaddingSize[2] + "/" + children.length + ") );" : "width: 100%;") + " " + (offset ? offset === "left" ? "&:first-child { width: " + _vars.LayoutSizes[2] + "};" + "&:nth-child(2) { width: " + _vars.LayoutSizes[0] + "};" : offset === "right" ? "&:first-child { width: " + _vars.LayoutSizes[0] + "};" + "&:nth-child(2) { width: " + _vars.LayoutSizes[2] + "};" : "" : "") + ";}.LayoutGrid.__jsx-style-dynamic-selector>*:first-child{" + (offset && children.length === 2 ? offset === "left" ? "width: " + _vars.LayoutSizes[2] + ";" : "" : "") + " " + (offset && children.length === 2 ? offset === "right" ? "width: " + _vars.LayoutSizes[0] + ";" : "" : "") + ";}.LayoutGrid.__jsx-style-dynamic-selector>*:nth-child(2){" + (offset && children.length === 2 ? offset === "left" ? "width: " + _vars.LayoutSizes[0] + ";" : "" : "") + " " + (offset && children.length === 2 ? offset === "right" ? "width: " + _vars.LayoutSizes[2] + ";" : "" : "") + ";}@media (max-width:500px){.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}*[class*=\"LayoutGrid\"] *{width:100% !important;}*[class*=\"LayoutGrid\"] *:first-child{width:100% !important;}*[class*=\"LayoutGrid\"] *:nth-child(2){width:100% !important;}}",
      dynamic: [_vars.LayoutSizes[3], children.length > 1 ? "width: calc( (" + _vars.LayoutSizes[3] + "/" + children.length + ") - (" + _vars.MarginPaddingSize[2] + "/" + children.length + ") );" : "width: 100%;", offset ? offset === "left" ? "&:first-child { width: " + _vars.LayoutSizes[2] + "};" + "&:nth-child(2) { width: " + _vars.LayoutSizes[0] + "};" : offset === "right" ? "&:first-child { width: " + _vars.LayoutSizes[0] + "};" + "&:nth-child(2) { width: " + _vars.LayoutSizes[2] + "};" : "" : "", offset && children.length === 2 ? offset === "left" ? "width: " + _vars.LayoutSizes[2] + ";" : "" : "", offset && children.length === 2 ? offset === "right" ? "width: " + _vars.LayoutSizes[0] + ";" : "" : "", offset && children.length === 2 ? offset === "left" ? "width: " + _vars.LayoutSizes[0] + ";" : "" : "", offset && children.length === 2 ? offset === "right" ? "width: " + _vars.LayoutSizes[2] + ";" : "" : ""]
    })
  );
};

LayoutGrid.propTypes = {
  /**
   * LayoutGrid block
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired,
  /**
   * LayoutGrid offset
   */
  offset: _propTypes2.default.oneOf(["left", "right"])
};

exports.default = LayoutGrid;