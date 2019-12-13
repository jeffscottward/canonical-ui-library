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

var _LayoutWrapper = require("../LayoutWrapper");

var _LayoutWrapper2 = _interopRequireDefault(_LayoutWrapper);

var _Logo = require("../Logo");

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationTop = function NavigationTop(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "header",
      {
        className: _style2.default.dynamic([["3100320005", [_vars.MarginPaddingSize[1]]]]) + " " + ("NavigationTop" + (className ? " " + className : "") || "")
      },
      _react2.default.createElement(
        _LayoutWrapper2.default,
        null,
        _react2.default.createElement(
          "nav",
          {
            className: _style2.default.dynamic([["3100320005", [_vars.MarginPaddingSize[1]]]])
          },
          _react2.default.createElement(
            "div",
            {
              className: _style2.default.dynamic([["3100320005", [_vars.MarginPaddingSize[1]]]]) + " " + "nav-left"
            },
            _react2.default.createElement(_Logo2.default, { height: "40px" })
          ),
          _react2.default.createElement(
            "div",
            {
              className: _style2.default.dynamic([["3100320005", [_vars.MarginPaddingSize[1]]]]) + " " + "nav-right"
            },
            _react2.default.createElement(
              "ul",
              {
                className: _style2.default.dynamic([["3100320005", [_vars.MarginPaddingSize[1]]]]) + " " + "nav-items"
              },
              children
            )
          )
        )
      ),
      _react2.default.createElement(_style2.default, {
        styleId: "3100320005",
        css: ".NavigationTop.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100px;border-bottom:1px solid #e4e4e4;background-image:linear-gradient(to bottom,#f8f8f8,#ffffff);}.NavigationTop.__jsx-style-dynamic-selector nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.NavigationTop.__jsx-style-dynamic-selector .nav-right.__jsx-style-dynamic-selector{text-align:right;}.NavigationTop.__jsx-style-dynamic-selector .nav-items.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.NavigationTop.__jsx-style-dynamic-selector .nav-items.__jsx-style-dynamic-selector>*{padding:0 " + _vars.MarginPaddingSize[1] + ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.NavigationTop.__jsx-style-dynamic-selector .nav-items.__jsx-style-dynamic-selector>*:last-child{padding-right:0;}",
        dynamic: [_vars.MarginPaddingSize[1]]
      })
    )
  );
};

NavigationTop.propTypes = {
  /**
   * Nav Elements
   */
  children: _propTypes2.default.array.isRequired
};

exports.default = NavigationTop;