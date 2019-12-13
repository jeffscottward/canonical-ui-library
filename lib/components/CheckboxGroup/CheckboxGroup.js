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

var CheckboxGroup = function CheckboxGroup(_ref) {
  var className = _ref.className,
      nameID = _ref.nameID,
      options = _ref.options,
      error = _ref.error,
      direction = _ref.direction;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["1860961313", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, "url(" + _assetInliner.glyphcheck + ")", error ? "none" : "url(" + _assetInliner.glyphcheck + ")"]]]) + " " + ("CheckboxGroup" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "form",
      {
        className: _style2.default.dynamic([["1860961313", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, "url(" + _assetInliner.glyphcheck + ")", error ? "none" : "url(" + _assetInliner.glyphcheck + ")"]]])
      },
      options.map(function (option, index) {
        return _react2.default.createElement(
          "div",
          {
            key: option.label + index,
            className: _style2.default.dynamic([["1860961313", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, "url(" + _assetInliner.glyphcheck + ")", error ? "none" : "url(" + _assetInliner.glyphcheck + ")"]]]) + " " + ("checkbox-choice-wrap" + (option.disabled ? " disabled" : "") + (option.deactive ? " deactive" : "") + (option.error ? " error" : "") || "")
          },
          _react2.default.createElement("input", {
            type: "checkbox",
            id: option.label + index + nameID,
            name: nameID,
            disabled: option.disabled || option.error,
            className: _style2.default.dynamic([["1860961313", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, "url(" + _assetInliner.glyphcheck + ")", error ? "none" : "url(" + _assetInliner.glyphcheck + ")"]]])
          }),
          _react2.default.createElement(
            "label",
            { htmlFor: option.label + index + nameID, className: _style2.default.dynamic([["1860961313", [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, "url(" + _assetInliner.glyphcheck + ")", error ? "none" : "url(" + _assetInliner.glyphcheck + ")"]]])
            },
            option.label
          )
        );
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "1860961313",
      css: "form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:" + (direction || "column") + ";-ms-flex-direction:" + (direction || "column") + ";flex-direction:" + (direction || "column") + ";}.checkbox-choice-wrap.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:" + (direction === "row" ? "center" : "") + ";-webkit-box-align:" + (direction === "row" ? "center" : "") + ";-ms-flex-align:" + (direction === "row" ? "center" : "") + ";align-items:" + (direction === "row" ? "center" : "") + ";margin-bottom:" + (!direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0") + ";margin-right:" + (direction === "row" ? _vars.MarginPaddingSize[1] : "0") + ";}.checkbox-choice-wrap.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:before,.checkbox-choice-wrap.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:before{cursor:not-allowed;}.checkbox-choice-wrap.deactive.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector::after{-webkit-filter:saturate(0%) opacity(20%);filter:saturate(0%) opacity(20%);}.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:before,.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:before{border:1px solid " + _vars.Colors.Cinnabar + ";background:rgba(227,66,52,0.1);cursor:not-allowed;}.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:after,.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:after{background-image:" + ("url(" + _assetInliner.glyphcheck + ")") + ";}[type=\"checkbox\"]:checked.__jsx-style-dynamic-selector,[type=\"checkbox\"]:not(:checked).__jsx-style-dynamic-selector{position:absolute;left:-9999px;}[type=\"checkbox\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector,[type=\"checkbox\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector{position:relative;padding-left:28px;cursor:pointer;line-height:1.2 !important;display:inline-block;color:#666;}[type=\"checkbox\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:before,[type=\"checkbox\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;left:0;top:0;width:16px;height:16px;border:1px solid #ddd;border-radius:2px;background:#fff;}[type=\"checkbox\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after,[type=\"checkbox\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{content:\"\";width:15px;height:16px;position:absolute;top:2px;left:1px;border-radius:100%;-webkit-transition:all 0.2s ease;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;background-image:" + (error ? "none" : "url(" + _assetInliner.glyphcheck + ")") + ";background-size:contain;}[type=\"checkbox\"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{opacity:0;-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}[type=\"checkbox\"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}",
      dynamic: [direction || "column", direction === "row" ? "center" : "", !direction || direction === "column" ? _vars.MarginPaddingSize[1] : "0", direction === "row" ? _vars.MarginPaddingSize[1] : "0", _vars.Colors.Cinnabar, "url(" + _assetInliner.glyphcheck + ")", error ? "none" : "url(" + _assetInliner.glyphcheck + ")"]
    })
  );
};

CheckboxGroup.propTypes = {
  /**
   * Field label
   */
  nameID: _propTypes2.default.string.isRequired,
  /**
   * checkbox ID
   */
  options: _propTypes2.default.array.isRequired,
  /**
   * Error
   */
  error: _propTypes2.default.bool,
  /**
   * Disabled
   */
  disabled: _propTypes2.default.bool
};

exports.default = CheckboxGroup;