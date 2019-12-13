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

var Input = function Input(_ref) {
  var className = _ref.className,
      type = _ref.type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      search = _ref.search,
      required = _ref.required,
      error = _ref.error,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["700796155", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], error ? _vars.Colors.Cinnabar : _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], error ? _vars.Colors.Cinnabar : _vars.Colors.Royal, search ? "url(" + _assetInliner.glyphsearch + ")" : null]]]) + " " + ("input-wrapper" + (className ? " " + className : "") || "")
    },
    label ? _react2.default.createElement(
      "label",
      {
        className: _style2.default.dynamic([["700796155", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], error ? _vars.Colors.Cinnabar : _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], error ? _vars.Colors.Cinnabar : _vars.Colors.Royal, search ? "url(" + _assetInliner.glyphsearch + ")" : null]]])
      },
      label,
      " ",
      required ? "*" : null
    ) : null,
    error ? _react2.default.createElement(
      "label",
      {
        className: _style2.default.dynamic([["700796155", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], error ? _vars.Colors.Cinnabar : _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], error ? _vars.Colors.Cinnabar : _vars.Colors.Royal, search ? "url(" + _assetInliner.glyphsearch + ")" : null]]]) + " " + "error"
      },
      error
    ) : null,
    _react2.default.createElement("input", {
      type: type || "text",
      placeholder: placeholder,
      disabled: disabled,
      className: _style2.default.dynamic([["700796155", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], error ? _vars.Colors.Cinnabar : _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], error ? _vars.Colors.Cinnabar : _vars.Colors.Royal, search ? "url(" + _assetInliner.glyphsearch + ")" : null]]])
    }),
    _react2.default.createElement(_style2.default, {
      styleId: "700796155",
      css: ".input-wrapper.__jsx-style-dynamic-selector{border-radius:2px;background-color:#ffffff;display:inline-block;min-width:100px;position:relative;padding-bottom:calc(" + _vars.MarginPaddingSize[1] + " / 2);}.input-wrapper.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:block;font-size:" + _vars.Typography.fontSize[4] + ";color:" + _vars.Colors.Slate + ";margin-bottom:calc(" + _vars.MarginPaddingSize[0] + " / 2);}.input-wrapper.__jsx-style-dynamic-selector label.error.__jsx-style-dynamic-selector{color:" + _vars.Colors.Cinnabar + ";}.input-wrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{display:block;width:100%;font-size:" + _vars.Typography.fontSize[3] + ";color:" + (error ? _vars.Colors.Cinnabar : _vars.Colors.Mirage) + ";border:solid 1px " + _vars.Colors.Gallery + ";border-color:" + (error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery) + ";padding:calc(" + _vars.MarginPaddingSize[0] + ") calc(" + _vars.MarginPaddingSize[0] + ");outline:none;position:relative;border-radius:2px;}.input-wrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#708090;opacity:0.5;font-weight:normal;}.input-wrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-moz-placeholder{color:#708090;opacity:0.5;font-weight:normal;}.input-wrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#708090;opacity:0.5;font-weight:normal;}.input-wrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::placeholder{color:#708090;opacity:0.5;font-weight:normal;}.input-wrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:active,.input-wrapper.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:focus{border-color:" + (error ? _vars.Colors.Cinnabar : _vars.Colors.Royal) + ";}.input-wrapper.__jsx-style-dynamic-selector::after{display:block;vertical-align:middle;content:\"\";background:" + (search ? "url(" + _assetInliner.glyphsearch + ")" : null) + ";width:14px;height:14px;position:absolute;left:calc(100% - 20px - 5px);bottom:24px;}",
      dynamic: [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], error ? _vars.Colors.Cinnabar : _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], error ? _vars.Colors.Cinnabar : _vars.Colors.Royal, search ? "url(" + _assetInliner.glyphsearch + ")" : null]
    })
  );
};

Input.propTypes = {
  /**
   * Field label
   */
  label: _propTypes2.default.string,
  /**
   * PlaceHolder
   */
  placeholder: _propTypes2.default.string,
  /**
   * Search Icon
   */
  search: _propTypes2.default.bool,
  /**
   * Required? (*)
   */
  required: _propTypes2.default.bool,
  /**
   * Error
   */
  error: _propTypes2.default.string,
  /**
   * Disabled
   */
  disabled: _propTypes2.default.bool
};

exports.default = Input;