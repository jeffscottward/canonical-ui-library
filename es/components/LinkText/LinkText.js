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

var LinkText = function LinkText(_ref) {
  var className = _ref.className,
      children = _ref.children,
      arrow = _ref.arrow,
      inverse = _ref.inverse,
      activeState = _ref.activeState;
  return _react2.default.createElement(
    "span",
    {
      className: _style2.default.dynamic([["3293377763", [_vars.Colors.Royal, _vars.Typography.fontSize[4], _vars.Colors.Royal]]]) + " " + ("LinkText" + (className ? " " + className : "") || "")
    },
    arrow ? _react2.default.createElement("div", {
      className: _style2.default.dynamic([["3293377763", [_vars.Colors.Royal, _vars.Typography.fontSize[4], _vars.Colors.Royal]]]) + " " + "arrow-right"
    }) : null,
    children,
    _react2.default.createElement(_style2.default, {
      styleId: "3293377763",
      css: ".LinkText.__jsx-style-dynamic-selector{color:" + _vars.Colors.Royal + ";font-size:" + _vars.Typography.fontSize[4] + ";cursor:pointer;}.LinkText.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}.LinkText.__jsx-style-dynamic-selector .arrow-right.__jsx-style-dynamic-selector{display:inline-block;margin-right:5px;width:0px;height:0px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid " + _vars.Colors.Royal + ";}",
      dynamic: [_vars.Colors.Royal, _vars.Typography.fontSize[4], _vars.Colors.Royal]
    })
  );
};

LinkText.propTypes = {
  /**
   * LinkText text
   */
  children: _propTypes2.default.string,
  /**
   * LinkText arrow
   */
  arrow: _propTypes2.default.bool
};

exports.default = LinkText;