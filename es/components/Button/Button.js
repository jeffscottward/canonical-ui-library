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

var _assetInliner = require("../../asset-inliner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      size = _ref.size,
      onClick = _ref.onClick,
      styleOverRideRule = _ref.styleOverRideRule,
      styleOverRide = _ref.styleOverRide,
      activeHighlight = _ref.activeHighlight;
  return _react2.default.createElement(
    "button",
    {
      disabled: type === "disabled",
      onClick: onClick,
      className: _style2.default.dynamic([["2117708739", [!activeHighlight ? "#c4cdd5" : _vars.Colors.Royal, _vars.Colors.Royal, _vars.Colors.White, _vars.MarginPaddingSize[2], _vars.MarginPaddingSize[2], _vars.Typography.fontSize[3], _vars.MarginPaddingSize[2], _vars.Colors.PoloBlue]], ["3006240739", [type === "primary" ? "\n              background: " + _vars.Colors.Royal + ";\n              border-color: " + _vars.Colors.Royal + ";\n              color: " + _vars.Colors.White + ";\n            " : "", type === "warning" ? "\n              background: " + _vars.Colors.Cinnabar + ";\n              border-color: " + _vars.Colors.Cinnabar + ";\n              color: " + _vars.Colors.White + ";\n              cursor: default;\n            " : "", type === "disabled" ? "\n              background: " + _vars.Colors.Gallery + ";\n              border-color: #c4cdd5;\n              color: " + _vars.Colors.Slate + ";\n              cursor: not-allowed;\n            " : "", type === "left" || type === "right" ? "\n              min-width: 0px;\n              min-height: 0;\n              max-height: none;\n              width: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              height: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              line-height: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              padding: 0;\n              background: " + ("url( " + _assetInliner.glyphcarouselarrow + ")") + "  no-repeat center center;\n            " : "", type === "left" ? "transform:rotateY(180deg);" : "", size === "small" ? "\n              padding: 2px calc(" + _vars.MarginPaddingSize[2] + "/4);\n              font-size: " + _vars.Typography.fontSize[4] + ";\n              max-height: 22px;\n              min-width: auto;\n              min-height: 0;\n              line-height: 1;\n            " : "", type === "primary" ? "\n                background: #5068b2;\n                border-color: " + _vars.Colors.PoloBlue + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "primary" && size === "small" ? "border-color: #5068b2;" : "", type === "warning" ? "\n                background: " + _vars.Colors.Cinnabar + ";\n                border-color: " + _vars.Colors.Cinnabar + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "disabled" ? "\n                background: " + _vars.Colors.Gallery + ";\n                border-color: #eee;\n                color: " + _vars.Colors.Slate + ";\n                cursor: not-allowed;\n              " : "", _vars.Colors.ResolutionBlue, type === "primary" ? "\n                background: " + _vars.Colors.ResolutionBlue + ";\n                border-color: " + _vars.Colors.ResolutionBlue + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "warning" ? "\n                background: " + _vars.Colors.Cinnabar + ";\n                border-color: " + _vars.Colors.Cinnabar + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "disabled" ? "\n                background: " + _vars.Colors.Gallery + ";\n                border-color: #eee;\n                color: " + _vars.Colors.Slate + ";\n                cursor: not-allowed;\n              " : ""]]]) + " " + ("Button " + (activeHighlight ? "tab-active " : "") + (styleOverRideRule ? styleOverRideRule : "") + (className ? " " + className : "") || "")
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: "2117708739",
      css: ".Button.__jsx-style-dynamic-selector{cursor:pointer;text-align:center;border-width:1px;border-style:solid;border-color:" + (!activeHighlight ? "#c4cdd5" : _vars.Colors.Royal) + ";color:" + _vars.Colors.Royal + ";background-color:" + _vars.Colors.White + ";padding:0 calc(" + _vars.MarginPaddingSize[2] + " / 2);line-height:" + _vars.MarginPaddingSize[2] + ";font-size:" + _vars.Typography.fontSize[3] + ";max-height:" + _vars.MarginPaddingSize[2] + ";min-width:140px;min-height:40px;border-radius:2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.Button.__jsx-style-dynamic-selector img{display:inline-block;}.Button.__jsx-style-dynamic-selector img + *{margin-left:5px;}.Button.__jsx-style-dynamic-selector * + img{margin-right:5px;}.Button.__jsx-style-dynamic-selector:hover{color:" + _vars.Colors.PoloBlue + ";}.Button.__jsx-style-dynamic-selector:focus{outline:none;}",
      dynamic: [!activeHighlight ? "#c4cdd5" : _vars.Colors.Royal, _vars.Colors.Royal, _vars.Colors.White, _vars.MarginPaddingSize[2], _vars.MarginPaddingSize[2], _vars.Typography.fontSize[3], _vars.MarginPaddingSize[2], _vars.Colors.PoloBlue]
    }),
    _react2.default.createElement(_style2.default, {
      styleId: "3006240739",
      css: ".Button.__jsx-style-dynamic-selector{" + (type === "primary" ? "\n              background: " + _vars.Colors.Royal + ";\n              border-color: " + _vars.Colors.Royal + ";\n              color: " + _vars.Colors.White + ";\n            " : "") + "  " + (type === "warning" ? "\n              background: " + _vars.Colors.Cinnabar + ";\n              border-color: " + _vars.Colors.Cinnabar + ";\n              color: " + _vars.Colors.White + ";\n              cursor: default;\n            " : "") + " " + (type === "disabled" ? "\n              background: " + _vars.Colors.Gallery + ";\n              border-color: #c4cdd5;\n              color: " + _vars.Colors.Slate + ";\n              cursor: not-allowed;\n            " : "") + " " + (type === "left" || type === "right" ? "\n              min-width: 0px;\n              min-height: 0;\n              max-height: none;\n              width: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              height: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              line-height: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              padding: 0;\n              background: " + ("url( " + _assetInliner.glyphcarouselarrow + ")") + "  no-repeat center center;\n            " : "") + " " + (type === "left" ? "transform:rotateY(180deg);" : "") + "   " + (size === "small" ? "\n              padding: 2px calc(" + _vars.MarginPaddingSize[2] + "/4);\n              font-size: " + _vars.Typography.fontSize[4] + ";\n              max-height: 22px;\n              min-width: auto;\n              min-height: 0;\n              line-height: 1;\n            " : "") + ";}.Button.__jsx-style-dynamic-selector:hover{" + (type === "primary" ? "\n                background: #5068b2;\n                border-color: " + _vars.Colors.PoloBlue + ";\n                color: " + _vars.Colors.White + ";\n              " : "") + " " + (type === "primary" && size === "small" ? "border-color: #5068b2;" : "") + " " + (type === "warning" ? "\n                background: " + _vars.Colors.Cinnabar + ";\n                border-color: " + _vars.Colors.Cinnabar + ";\n                color: " + _vars.Colors.White + ";\n              " : "") + " " + (type === "disabled" ? "\n                background: " + _vars.Colors.Gallery + ";\n                border-color: #eee;\n                color: " + _vars.Colors.Slate + ";\n                cursor: not-allowed;\n              " : "") + ";}.Button.__jsx-style-dynamic-selector:active{color:" + _vars.Colors.ResolutionBlue + ";" + (type === "primary" ? "\n                background: " + _vars.Colors.ResolutionBlue + ";\n                border-color: " + _vars.Colors.ResolutionBlue + ";\n                color: " + _vars.Colors.White + ";\n              " : "") + " " + (type === "warning" ? "\n                background: " + _vars.Colors.Cinnabar + ";\n                border-color: " + _vars.Colors.Cinnabar + ";\n                color: " + _vars.Colors.White + ";\n              " : "") + " " + (type === "disabled" ? "\n                background: " + _vars.Colors.Gallery + ";\n                border-color: #eee;\n                color: " + _vars.Colors.Slate + ";\n                cursor: not-allowed;\n              " : "") + ";}",
      dynamic: [type === "primary" ? "\n              background: " + _vars.Colors.Royal + ";\n              border-color: " + _vars.Colors.Royal + ";\n              color: " + _vars.Colors.White + ";\n            " : "", type === "warning" ? "\n              background: " + _vars.Colors.Cinnabar + ";\n              border-color: " + _vars.Colors.Cinnabar + ";\n              color: " + _vars.Colors.White + ";\n              cursor: default;\n            " : "", type === "disabled" ? "\n              background: " + _vars.Colors.Gallery + ";\n              border-color: #c4cdd5;\n              color: " + _vars.Colors.Slate + ";\n              cursor: not-allowed;\n            " : "", type === "left" || type === "right" ? "\n              min-width: 0px;\n              min-height: 0;\n              max-height: none;\n              width: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              height: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              line-height: " + (size !== "small" ? size || _vars.MarginPaddingSize[2] : _vars.MarginPaddingSize[2]) + ";\n              padding: 0;\n              background: " + ("url( " + _assetInliner.glyphcarouselarrow + ")") + "  no-repeat center center;\n            " : "", type === "left" ? "transform:rotateY(180deg);" : "", size === "small" ? "\n              padding: 2px calc(" + _vars.MarginPaddingSize[2] + "/4);\n              font-size: " + _vars.Typography.fontSize[4] + ";\n              max-height: 22px;\n              min-width: auto;\n              min-height: 0;\n              line-height: 1;\n            " : "", type === "primary" ? "\n                background: #5068b2;\n                border-color: " + _vars.Colors.PoloBlue + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "primary" && size === "small" ? "border-color: #5068b2;" : "", type === "warning" ? "\n                background: " + _vars.Colors.Cinnabar + ";\n                border-color: " + _vars.Colors.Cinnabar + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "disabled" ? "\n                background: " + _vars.Colors.Gallery + ";\n                border-color: #eee;\n                color: " + _vars.Colors.Slate + ";\n                cursor: not-allowed;\n              " : "", _vars.Colors.ResolutionBlue, type === "primary" ? "\n                background: " + _vars.Colors.ResolutionBlue + ";\n                border-color: " + _vars.Colors.ResolutionBlue + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "warning" ? "\n                background: " + _vars.Colors.Cinnabar + ";\n                border-color: " + _vars.Colors.Cinnabar + ";\n                color: " + _vars.Colors.White + ";\n              " : "", type === "disabled" ? "\n                background: " + _vars.Colors.Gallery + ";\n                border-color: #eee;\n                color: " + _vars.Colors.Slate + ";\n                cursor: not-allowed;\n              " : ""]
    }),
    _react2.default.createElement(
      "style",
      null,
      " " + styleOverRide + " "
    )
  );
};

Button.propTypes = {
  /**
   * Button text or images
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.array]),
  /**
   * Button type
   */
  type: _propTypes2.default.oneOf(["default", "primary", "warning", "disabled", "left", "right"]),
  /**
   * Button size
   */
  size: _propTypes2.default.string,
  /**
   * StyleOveride Rule
   */

  styleOverRideRule: _propTypes2.default.string,
  /**
   * StyleOverides
   */

  styleOverRide: _propTypes2.default.string,
  /**
   * Button highlight for tavs
   */

  activeHighlight: _propTypes2.default.bool
};

exports.default = Button;