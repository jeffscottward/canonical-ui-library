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
var GlobalTypography = function GlobalTypography() {
  return _react2.default.createElement(_style2.default, {
    styleId: "3778974900",
    css: "*{color:" + _vars.Colors.Mirage + ";font-family:" + _vars.Typography.typePrimaryStack + " !important;font-size:" + _vars.Typography.fontSize[3] + ";}h1,h2,h3,h4,p{margin-top:0 !important;margin-bottom:" + _vars.MarginPaddingSize[2] + ";}h1{font-weight:" + _vars.Typography.typePrimaryWeight.regular + ";font-size:" + _vars.Typography.fontSize[0] + ";}h2{font-weight:" + _vars.Typography.typePrimaryWeight.regular + ";font-size:" + _vars.Typography.fontSize[1] + ";}h3{font-weight:" + _vars.Typography.typePrimaryWeight.medium + ";font-size:" + _vars.Typography.fontSize[2] + ";}h4{font-weight:" + _vars.Typography.typePrimaryWeight.medium + ";font-size:" + _vars.Typography.fontSize[3] + ";}p{font-weight:" + _vars.Typography.typePrimaryWeight.normal + ";font-size:" + _vars.Typography.fontSize[3] + ";}label{font-weight:" + _vars.Typography.typePrimaryWeight.medium + ";font-size:" + _vars.Typography.fontSize[4] + ";}small{font-weight:" + _vars.Typography.typePrimaryWeight.light + ";font-size:" + _vars.Typography.fontSize[5] + ";}li,span,p{line-height:1.56;}html{background:inherit;}",
    dynamic: [_vars.Colors.Mirage, _vars.Typography.typePrimaryStack, _vars.Typography.fontSize[3], _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.regular, _vars.Typography.fontSize[0], _vars.Typography.typePrimaryWeight.regular, _vars.Typography.fontSize[1], _vars.Typography.typePrimaryWeight.medium, _vars.Typography.fontSize[2], _vars.Typography.typePrimaryWeight.medium, _vars.Typography.fontSize[3], _vars.Typography.typePrimaryWeight.normal, _vars.Typography.fontSize[3], _vars.Typography.typePrimaryWeight.medium, _vars.Typography.fontSize[4], _vars.Typography.typePrimaryWeight.light, _vars.Typography.fontSize[5]]
  });
};

exports.default = GlobalTypography;