"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _vars = require("../vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
var GlobalDefault = function GlobalDefault() {
  return _react2.default.createElement(_style2.default, {
    styleId: "1050169740",
    css: "*,*::before,*::after{box-sizing:border-box !important;}ul,li{list-style:none;padding:0;margin:0;}html,body{height:100%;}img{max-width:100%;max-height:100%;}a{cursor:pointer;}figure{margin:0;}body{background:" + _vars.Colors.Alabaster + ";}",
    dynamic: [_vars.Colors.Alabaster]
  });
};

exports.default = GlobalDefault;