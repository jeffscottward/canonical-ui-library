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

var CTAGrid = function CTAGrid(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["1435940087", [_vars.MarginPaddingSize[3]]]]) + " " + ("CTAGrid" + (className ? " " + className : "") || "")
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: "1435940087",
      css: ".CTAGrid.__jsx-style-dynamic-selector{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:200px;}.CTAGrid.__jsx-style-dynamic-selector>*{border:1px solid #eee;min-height:" + _vars.MarginPaddingSize[3] + ";border-right:none;}.CTAGrid.__jsx-style-dynamic-selector>*:last-child{border-right:1px solid #eee;}",
      dynamic: [_vars.MarginPaddingSize[3]]
    })
  );
};

CTAGrid.propTypes = {
  /**
   * CTAGrid block
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired
};

exports.default = CTAGrid;