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

var _assetInliner = require("../../asset-inliner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accordian = function Accordian(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title;
  return _react2.default.createElement(
    "details",
    {
      className: _style2.default.dynamic([["3743574101", ["url(" + _assetInliner.glypharrow + ")"]]]) + " " + ("Accordian" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "summary",
      {
        className: _style2.default.dynamic([["3743574101", ["url(" + _assetInliner.glypharrow + ")"]]])
      },
      title
    ),
    _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["3743574101", ["url(" + _assetInliner.glypharrow + ")"]]]) + " " + "details-content"
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "3743574101",
      css: "details.__jsx-style-dynamic-selector{padding:0;max-width:635px;border-radius:2px;background-color:#ffffff;border:solid 1px #e4e4e4;cursor:pointer;}details.__jsx-style-dynamic-selector:focus,summary.__jsx-style-dynamic-selector:focus{outline:none !important;}summary.__jsx-style-dynamic-selector{padding:20px 40px 20px 0;position:relative;font-size:16px;font-weight:bold;font-style:normal;font-stretch:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#1e2837;}summary.__jsx-style-dynamic-selector::after{content:\"\";display:block;position:absolute;right:20px;top:20px;width:20px;height:10px;line-height:1;background:" + ("url(" + _assetInliner.glypharrow + ")") + " no-repeat center center;}summary.__jsx-style-dynamic-selector::-webkit-details-marker{color:transparent;}details[open].__jsx-style-dynamic-selector summary.__jsx-style-dynamic-selector::after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.details-content.__jsx-style-dynamic-selector{margin:0 0 20px 20px;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.43;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#1e2837;}",
      dynamic: ["url(" + _assetInliner.glypharrow + ")"]
    })
  );
};

Accordian.propTypes = {
  /**
   * Child Elements
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired
};

exports.default = Accordian;