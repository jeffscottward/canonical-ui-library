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

var Textarea = function Textarea(_ref) {
  var className = _ref.className,
      label = _ref.label,
      placeholder = _ref.placeholder,
      required = _ref.required,
      error = _ref.error,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["2316965056", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.Colors.Gallery, _vars.Colors.Royal, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery]]]) + " " + ("Textarea-wrapper" + (className ? " " + className : "") || "")
    },
    label ? _react2.default.createElement(
      "label",
      {
        className: _style2.default.dynamic([["2316965056", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.Colors.Gallery, _vars.Colors.Royal, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery]]])
      },
      label,
      " ",
      required ? "*" : null
    ) : null,
    error ? _react2.default.createElement(
      "label",
      {
        className: _style2.default.dynamic([["2316965056", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.Colors.Gallery, _vars.Colors.Royal, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery]]]) + " " + "error"
      },
      error
    ) : null,
    _react2.default.createElement("textarea", { placeholder: placeholder, disabled: disabled, className: _style2.default.dynamic([["2316965056", [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.Colors.Gallery, _vars.Colors.Royal, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery]]])
    }),
    _react2.default.createElement(_style2.default, {
      styleId: "2316965056",
      css: ".Textarea-wrapper.__jsx-style-dynamic-selector{border-radius:2px;background-color:#ffffff;display:inline-block;position:relative;padding-bottom:calc(" + _vars.MarginPaddingSize[1] + " / 2);width:100%;}.Textarea-wrapper.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:block;font-size:" + _vars.Typography.fontSize[4] + ";color:" + _vars.Colors.Slate + ";margin-bottom:calc(" + _vars.MarginPaddingSize[0] + " / 2);}.Textarea-wrapper.__jsx-style-dynamic-selector label.error.__jsx-style-dynamic-selector{color:" + _vars.Colors.Cinnabar + ";}.Textarea-wrapper.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector{display:block;width:100%;font-size:" + _vars.Typography.fontSize[3] + ";color:" + _vars.Colors.Mirage + ";border:solid 1px " + _vars.Colors.Gallery + ";border-color:" + (error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery) + ";padding:calc(" + _vars.MarginPaddingSize[0] + ") calc(" + _vars.MarginPaddingSize[0] + ");outline:none;position:relative;resize:none;min-width:100px;min-height:100px;}.Textarea-wrapper.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:" + _vars.Colors.Gallery + ";}.Textarea-wrapper.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector::-moz-placeholder{color:" + _vars.Colors.Gallery + ";}.Textarea-wrapper.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector:-ms-input-placeholder{color:" + _vars.Colors.Gallery + ";}.Textarea-wrapper.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector::placeholder{color:" + _vars.Colors.Gallery + ";}.Textarea-wrapper.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector:active,.Textarea-wrapper.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector:focus{border:solid 1px " + _vars.Colors.Royal + ";border-color:" + (error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery) + ";}",
      dynamic: [_vars.MarginPaddingSize[1], _vars.Typography.fontSize[4], _vars.Colors.Slate, _vars.MarginPaddingSize[0], _vars.Colors.Cinnabar, _vars.Typography.fontSize[3], _vars.Colors.Mirage, _vars.Colors.Gallery, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery, _vars.MarginPaddingSize[0], _vars.MarginPaddingSize[0], _vars.Colors.Gallery, _vars.Colors.Royal, error ? _vars.Colors.Cinnabar : _vars.Colors.Gallery]
    })
  );
};

Textarea.propTypes = {
  /**
   * Field label
   */
  label: _propTypes2.default.string,
  /**
   * PlaceHolder
   */
  placeholder: _propTypes2.default.string,
  /**
   * Required? (*)
   */
  required: _propTypes2.default.bool,
  /**
   * Error
   */
  error: _propTypes2.default.string,
  /**
   * Required? (*)
   */
  disabled: _propTypes2.default.bool
};

exports.default = Textarea;