"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _assetInliner = require("../../asset-inliner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternBorder = function PatternBorder(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["3242426712", ["url(" + _assetInliner.bgpattern + ")"]]]) + " " + ("PatternBorder" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(_style2.default, {
      styleId: "3242426712",
      css: ".PatternBorder.__jsx-style-dynamic-selector{width:100%;height:20px;opacity:0.7;background:" + ("url(" + _assetInliner.bgpattern + ")") + " repeat;}",
      dynamic: ["url(" + _assetInliner.bgpattern + ")"]
    })
  );
};

exports.default = PatternBorder;