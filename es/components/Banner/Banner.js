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

var _LayoutGrid = require("../LayoutGrid");

var _LayoutGrid2 = _interopRequireDefault(_LayoutGrid);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _vars = require("../vars");

var _assetInliner = require("../../asset-inliner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Banner = function Banner(_ref) {
  var className = _ref.className,
      title = _ref.title,
      altStyle = _ref.altStyle,
      secondayTitle = _ref.secondayTitle,
      ctaBtnText = _ref.ctaBtnText,
      ctaBtnAction = _ref.ctaBtnAction;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["2607972194", [_vars.MarginPaddingSize[3], altStyle ? "none" : _vars.Colors.Mirage, altStyle ? "none" : "url(" + _assetInliner.bgwaves + ")", altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? "background-color: none; background-image: none;" : null]]]) + " " + ("Banner" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      _LayoutGrid2.default,
      { columns: 1 },
      _react2.default.createElement(
        "div",
        {
          className: _style2.default.dynamic([["2607972194", [_vars.MarginPaddingSize[3], altStyle ? "none" : _vars.Colors.Mirage, altStyle ? "none" : "url(" + _assetInliner.bgwaves + ")", altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? "background-color: none; background-image: none;" : null]]]) + " " + "banner-left"
        },
        _react2.default.createElement(
          "h1",
          {
            className: _style2.default.dynamic([["2607972194", [_vars.MarginPaddingSize[3], altStyle ? "none" : _vars.Colors.Mirage, altStyle ? "none" : "url(" + _assetInliner.bgwaves + ")", altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? "background-color: none; background-image: none;" : null]]])
          },
          title
        ),
        secondayTitle ? _react2.default.createElement(
          "h1",
          {
            className: _style2.default.dynamic([["2607972194", [_vars.MarginPaddingSize[3], altStyle ? "none" : _vars.Colors.Mirage, altStyle ? "none" : "url(" + _assetInliner.bgwaves + ")", altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? "background-color: none; background-image: none;" : null]]])
          },
          secondayTitle
        ) : null
      ),
      _react2.default.createElement(
        "div",
        {
          className: _style2.default.dynamic([["2607972194", [_vars.MarginPaddingSize[3], altStyle ? "none" : _vars.Colors.Mirage, altStyle ? "none" : "url(" + _assetInliner.bgwaves + ")", altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? "background-color: none; background-image: none;" : null]]]) + " " + "banner-right"
        },
        ctaBtnText && ctaBtnAction ? _react2.default.createElement(
          _Button2.default,
          { onClick: ctaBtnAction },
          ctaBtnText
        ) : null
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "2607972194",
      css: ".Banner.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:vertical;-ms-flex-direction:vertical;flex-direction:vertical;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:240px;padding:0 " + _vars.MarginPaddingSize[3] + ";background-color:" + (altStyle ? "none" : _vars.Colors.Mirage) + ";background-image:" + (altStyle ? "none" : "url(" + _assetInliner.bgwaves + ")") + ";background-position:bottom;background-size:100% auto;background-size:cover;background-repeat:no-repeat;" + (altStyle ? "background-color: none; background-image: none;" : null) + ";}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector,.Banner.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0;}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:" + (altStyle ? _vars.Colors.Mirage : _vars.Colors.White) + ";}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector+h1.__jsx-style-dynamic-selector{color:" + (altStyle ? _vars.Colors.Slate : _vars.Colors.White) + ";}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-weight:normal;}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector+h1.__jsx-style-dynamic-selector{font-weight:100;}.Banner.__jsx-style-dynamic-selector .banner-right.__jsx-style-dynamic-selector{text-align:right;}",
      dynamic: [_vars.MarginPaddingSize[3], altStyle ? "none" : _vars.Colors.Mirage, altStyle ? "none" : "url(" + _assetInliner.bgwaves + ")", altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? "background-color: none; background-image: none;" : null]
    })
  );
};

Banner.propTypes = {
  /**
   * Banner title
   */
  title: _propTypes2.default.string.isRequired,
  /**
   * Banner inverted style
   */
  altStyle: _propTypes2.default.string,
  /**
   * Banner sub-title
   */
  secondayTitle: _propTypes2.default.string,
  /**
   * Banner button text
   */
  ctaBtnText: _propTypes2.default.string,
  /**
   * Banner button functionality
   */
  ctaBtnAction: _propTypes2.default.func
};

exports.default = Banner;