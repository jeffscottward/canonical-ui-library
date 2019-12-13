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

var RadioGroup = function RadioGroup(_ref) {
  var className = _ref.className,
      nameID = _ref.nameID,
      options = _ref.options,
      direction = _ref.direction;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["2221564526", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, _vars.Colors.Cinnabar, _vars.Colors.Royal]]]) + " " + ("RadioGroup" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "form",
      {
        className: _style2.default.dynamic([["2221564526", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, _vars.Colors.Cinnabar, _vars.Colors.Royal]]])
      },
      options.map(function (option, index) {
        return _react2.default.createElement(
          "div",
          {
            key: option.label + index,
            className: _style2.default.dynamic([["2221564526", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, _vars.Colors.Cinnabar, _vars.Colors.Royal]]]) + " " + ("radio-choice-wrap" + (option.disabled ? " disabled" : "") + (option.deactive ? " deactive" : "") + (option.error ? " error" : "") || "")
          },
          _react2.default.createElement("input", {
            type: "radio",
            id: option.label + index,
            name: nameID,
            disabled: option.disabled || option.error,
            className: _style2.default.dynamic([["2221564526", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, _vars.Colors.Cinnabar, _vars.Colors.Royal]]])
          }),
          _react2.default.createElement(
            "label",
            { htmlFor: option.label + index, className: _style2.default.dynamic([["2221564526", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, _vars.Colors.Cinnabar, _vars.Colors.Royal]]])
            },
            option.label
          )
        );
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "2221564526",
      css: "form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:" + (direction || "column") + ";-ms-flex-direction:" + (direction || "column") + ";flex-direction:" + (direction || "column") + ";}.radio-choice-wrap.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:" + (direction === "row" ? "center" : "") + ";-webkit-box-align:" + (direction === "row" ? "center" : "") + ";-ms-flex-align:" + (direction === "row" ? "center" : "") + ";align-items:" + (direction === "row" ? "center" : "") + ";margin-bottom:" + (!direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0") + ";margin-right:" + (direction === "row" ? _vars.MarginPaddingSize[1] : "0") + ";}.radio-choice-wrap.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:before,.radio-choice-wrap.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:before{cursor:not-allowed;}.radio-choice-wrap.deactive.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector::after{-webkit-filter:saturate(0%) opacity(20%);filter:saturate(0%) opacity(20%);}.radio-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:before,.radio-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:before{border:2px solid " + _vars.Colors.Cinnabar + ";background:rgba(227,66,52,0.1);cursor:not-allowed;}.radio-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:after,.radio-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:after{background:" + _vars.Colors.Cinnabar + ";}[type=\"radio\"]:checked.__jsx-style-dynamic-selector,[type=\"radio\"]:not(:checked).__jsx-style-dynamic-selector{position:absolute;left:-9999px;}[type=\"radio\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector,[type=\"radio\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:#666;}[type=\"radio\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:before,[type=\"radio\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;left:0;top:0;width:20px;height:20px;border:1px solid #ddd;border-radius:100%;background:#fff;}[type=\"radio\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after,[type=\"radio\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{content:\"\";width:10px;height:10px;background:" + _vars.Colors.Royal + ";position:absolute;top:5px;left:5px;border-radius:100%;-webkit-transition:all 0.2s ease;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}[type=\"radio\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{opacity:0;-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}[type=\"radio\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}",
      dynamic: [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, _vars.Colors.Cinnabar, _vars.Colors.Royal]
    })
  );
};

RadioGroup.propTypes = {
  /**
   * Field label
   */
  nameID: _propTypes2.default.string.isRequired,
  /**
   * Radio ID
   */
  options: _propTypes2.default.array.isRequired
};

exports.default = RadioGroup;