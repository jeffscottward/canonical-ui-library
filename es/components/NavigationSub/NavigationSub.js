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

var _vars = require("../vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationSub = function NavigationSub(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "header",
      {
        className: _style2.default.dynamic([["4089634121", [_vars.MarginPaddingSize[3]]]]) + " " + ("NavigationSub" + (className ? " " + className : "") || "")
      },
      _react2.default.createElement(
        _LayoutGrid2.default,
        { columns: 1 },
        _react2.default.createElement(
          "nav",
          {
            className: _style2.default.dynamic([["4089634121", [_vars.MarginPaddingSize[3]]]])
          },
          _react2.default.createElement(
            "ul",
            {
              className: _style2.default.dynamic([["4089634121", [_vars.MarginPaddingSize[3]]]]) + " " + "nav-items"
            },
            children
          )
        )
      ),
      _react2.default.createElement(_style2.default, {
        styleId: "4089634121",
        css: ".NavigationSub.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50px;border-bottom:1px solid #e4e4e4;background-image:linear-gradient(to bottom,#f8f8f8,#ffffff);}.NavigationSub.__jsx-style-dynamic-selector .nav-items.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.NavigationSub.__jsx-style-dynamic-selector .nav-items.__jsx-style-dynamic-selector>*{padding:0 " + _vars.MarginPaddingSize[3] + ";}",
        dynamic: [_vars.MarginPaddingSize[3]]
      })
    )
  );
};

NavigationSub.propTypes = {
  /**
   * Nav Elements
   */
  children: _propTypes2.default.array.isRequired
};

exports.default = NavigationSub;