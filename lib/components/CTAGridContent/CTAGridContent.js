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

var CTAGridContent = function CTAGridContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      align = _ref.align;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["1881013901", [align === "left" ? "left" : "center", _vars.MarginPaddingSize[3], align === "left" ? "left" : "center", _vars.MarginPaddingSize[0], _vars.Colors.Royal, _vars.Typography.typePrimaryWeight.normal, align === "left" ? "left" : "center", _vars.MarginPaddingSize[0]]]]) + " " + ("CTAGridContent" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["1881013901", [align === "left" ? "left" : "center", _vars.MarginPaddingSize[3], align === "left" ? "left" : "center", _vars.MarginPaddingSize[0], _vars.Colors.Royal, _vars.Typography.typePrimaryWeight.normal, align === "left" ? "left" : "center", _vars.MarginPaddingSize[0]]]]) + " " + "inner-wrap"
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "1881013901",
      css: ".CTAGridContent.__jsx-style-dynamic-selector{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}.CTAGridContent.__jsx-style-dynamic-selector .inner-wrap.__jsx-style-dynamic-selector{text-align:" + (align === "left" ? "left" : "center") + ";padding:" + _vars.MarginPaddingSize[3] + " 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.CTAGridContent.__jsx-style-dynamic-selector .inner-wrap.__jsx-style-dynamic-selector>h2{text-align:" + (align === "left" ? "left" : "center") + ";margin-bottom:" + _vars.MarginPaddingSize[0] + ";color:" + _vars.Colors.Royal + ";font-weight:" + _vars.Typography.typePrimaryWeight.normal + ";}.CTAGridContent.__jsx-style-dynamic-selector .inner-wrap.__jsx-style-dynamic-selector>p{text-align:" + (align === "left" ? "left" : "center") + ";margin-bottom:" + _vars.MarginPaddingSize[0] + ";}.CTAGridContent.__jsx-style-dynamic-selector .inner-wrap.__jsx-style-dynamic-selector>a{-webkit-text-decoration:none;text-decoration:none;}",
      dynamic: [align === "left" ? "left" : "center", _vars.MarginPaddingSize[3], align === "left" ? "left" : "center", _vars.MarginPaddingSize[0], _vars.Colors.Royal, _vars.Typography.typePrimaryWeight.normal, align === "left" ? "left" : "center", _vars.MarginPaddingSize[0]]
    })
  );
};

CTAGridContent.propTypes = {
  /*
  * Alignment style
  */
  align: _propTypes2.default.string
};

exports.default = CTAGridContent;