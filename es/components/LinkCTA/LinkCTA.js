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

var LinkCTA = function LinkCTA(_ref) {
  var className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      onDark = _ref.onDark;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["1592305960", [!!onDark === true ? "#1e2837" : _vars.Colors.Gallery, !!onDark === true ? _vars.Colors.Malibu : _vars.Colors.Royal, _vars.Typography.fontSize[4], !!onDark === true ? "black" : _vars.Colors.Royal, !!onDark === true ? "black" : "", _vars.MarginPaddingSize[0], _vars.Typography.fontSize[4], !!onDark === true ? _vars.Colors.Malibu : "", _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], !!onDark ? "url( " + _assetInliner.glyphdoublearrowcolormalibu + ")" : "url( " + _assetInliner.glyphdoublearrow + ")", _vars.Colors.Royal]]]) + " " + ("LinkCTA" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["1592305960", [!!onDark === true ? "#1e2837" : _vars.Colors.Gallery, !!onDark === true ? _vars.Colors.Malibu : _vars.Colors.Royal, _vars.Typography.fontSize[4], !!onDark === true ? "black" : _vars.Colors.Royal, !!onDark === true ? "black" : "", _vars.MarginPaddingSize[0], _vars.Typography.fontSize[4], !!onDark === true ? _vars.Colors.Malibu : "", _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], !!onDark ? "url( " + _assetInliner.glyphdoublearrowcolormalibu + ")" : "url( " + _assetInliner.glyphdoublearrow + ")", _vars.Colors.Royal]]]) + " " + "label"
      },
      label
    ),
    _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["1592305960", [!!onDark === true ? "#1e2837" : _vars.Colors.Gallery, !!onDark === true ? _vars.Colors.Malibu : _vars.Colors.Royal, _vars.Typography.fontSize[4], !!onDark === true ? "black" : _vars.Colors.Royal, !!onDark === true ? "black" : "", _vars.MarginPaddingSize[0], _vars.Typography.fontSize[4], !!onDark === true ? _vars.Colors.Malibu : "", _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], !!onDark ? "url( " + _assetInliner.glyphdoublearrowcolormalibu + ")" : "url( " + _assetInliner.glyphdoublearrow + ")", _vars.Colors.Royal]]]) + " " + "description-box"
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "1592305960",
      css: ".LinkCTA.__jsx-style-dynamic-selector{display:inline-block;height:100%;background:" + (!!onDark === true ? "#1e2837" : _vars.Colors.Gallery) + ";max-width:400px;color:" + (!!onDark === true ? _vars.Colors.Malibu : _vars.Colors.Royal) + ";font-size:" + _vars.Typography.fontSize[4] + ";cursor:pointer;border-radius:2px;}@media (max-width:500px){.LinkCTA.__jsx-style-dynamic-selector{width:100%;}}.LinkCTA.__jsx-style-dynamic-selector .label.__jsx-style-dynamic-selector{height:21px;border-radius:2px;background-color:" + (!!onDark === true ? "black" : _vars.Colors.Royal) + ";color:white;padding:4px 13px 0px 13px;font-weight:300;font-style:normal;line-height:1;text-align:center;border-color:" + (!!onDark === true ? "black" : "") + ";font-size:14px;}@media (max-width:500px){.LinkCTA.__jsx-style-dynamic-selector .label.__jsx-style-dynamic-selector{display:none;}}.LinkCTA.__jsx-style-dynamic-selector *{display:inline-block;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;}.LinkCTA.__jsx-style-dynamic-selector button{display:inline-block;}.LinkCTA.__jsx-style-dynamic-selector .description-box.__jsx-style-dynamic-selector{padding:0 " + _vars.MarginPaddingSize[0] + ";font-size:" + _vars.Typography.fontSize[4] + ";color:" + (!!onDark === true ? _vars.Colors.Malibu : "") + ";}@media (max-width:500px){.LinkCTA.__jsx-style-dynamic-selector .description-box.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}}.LinkCTA.__jsx-style-dynamic-selector .description-box.__jsx-style-dynamic-selector::after{content:\"\";display:inline-block;position:relative;left:0px;-webkit-transition:inherit;transition:inherit;width:calc(" + _vars.MarginPaddingSize[0] + "*2);height:" + _vars.MarginPaddingSize[0] + ";margin-left:" + _vars.MarginPaddingSize[0] + ";background:" + (!!onDark ? "url( " + _assetInliner.glyphdoublearrowcolormalibu + ")" : "url( " + _assetInliner.glyphdoublearrow + ")") + " no-repeat;background-position-x:right;}.LinkCTA.__jsx-style-dynamic-selector .arrow-right.__jsx-style-dynamic-selector{display:inline-block;margin-right:5px;width:0px;height:0px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid " + _vars.Colors.Royal + ";}.LinkCTA.__jsx-style-dynamic-selector:hover .description-box.__jsx-style-dynamic-selector::after{left:-10px;}",
      dynamic: [!!onDark === true ? "#1e2837" : _vars.Colors.Gallery, !!onDark === true ? _vars.Colors.Malibu : _vars.Colors.Royal, _vars.Typography.fontSize[4], !!onDark === true ? "black" : _vars.Colors.Royal, !!onDark === true ? "black" : "", _vars.MarginPaddingSize[0], _vars.Typography.fontSize[4], !!onDark === true ? _vars.Colors.Malibu : "", _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], !!onDark ? "url( " + _assetInliner.glyphdoublearrowcolormalibu + ")" : "url( " + _assetInliner.glyphdoublearrow + ")", _vars.Colors.Royal]
    })
  );
};

LinkCTA.propTypes = {
  /**
   * LinkCTA text
   */
  children: _propTypes2.default.string,
  /**
   * LinkCTA arrow
   */
  label: _propTypes2.default.string
};

exports.default = LinkCTA;