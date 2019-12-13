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

var Toggle = function Toggle(_ref) {
  var className = _ref.className,
      toggleID = _ref.toggleID,
      size = _ref.size;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["2664321381", [size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", _vars.Colors.Royal, size === "small" ? "15px" : "20px", _vars.Colors.Royal]]]) + " " + ("Toggle" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement("input", { type: "checkbox", name: toggleID, id: toggleID, className: _style2.default.dynamic([["2664321381", [size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", _vars.Colors.Royal, size === "small" ? "15px" : "20px", _vars.Colors.Royal]]])
    }),
    _react2.default.createElement("label", { htmlFor: toggleID, className: _style2.default.dynamic([["2664321381", [size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", _vars.Colors.Royal, size === "small" ? "15px" : "20px", _vars.Colors.Royal]]])
    }),
    _react2.default.createElement(_style2.default, {
      styleId: "2664321381",
      css: "input.__jsx-style-dynamic-selector{max-height:0;max-width:0;opacity:0;}input.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector{display:inline-block;position:relative;box-shadow:inset 0 0 0px 1px #d5d5d5;text-indent:-5000px;height:" + (size === "small" ? "15px" : "30px") + ";width:" + (size === "small" ? "30px" : "50px") + ";border-radius:15px;cursor:pointer;}input.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;display:block;height:" + (size === "small" ? "15px" : "30px") + ";width:" + (size === "small" ? "15px" : "30px") + ";top:0;left:0;border-radius:15px;background:rgba(19,191,17,0);-moz-transition:0.25s ease-in-out;-webkit-transition:0.25s ease-in-out;-webkit-transition:0.25s ease-in-out;transition:0.25s ease-in-out;}input.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;display:block;height:" + (size === "small" ? "15px" : "30px") + ";width:" + (size === "small" ? "15px" : "30px") + ";top:0;left:0px;border-radius:15px;background:white;box-shadow:inset 0 0 0 1px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.2);-moz-transition:0.25s ease-in-out;-webkit-transition:0.25s ease-in-out;-webkit-transition:0.25s ease-in-out;transition:0.25s ease-in-out;}input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:before{width:" + (size === "small" ? "30px" : "50px") + ";background:" + _vars.Colors.Royal + ";}input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:after{left:" + (size === "small" ? "15px" : "20px") + ";box-shadow:inset 0 0 0 1px " + _vars.Colors.Royal + ", 0 2px 4px rgba(0,0,0,0.2);}",
      dynamic: [size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "15px" : "30px", size === "small" ? "30px" : "50px", _vars.Colors.Royal, size === "small" ? "15px" : "20px", _vars.Colors.Royal]
    })
  );
};

Toggle.propTypes = {
  /*
  * UUID
  */
  toggleID: _propTypes2.default.string.isRequired,
  /*
  * Size value
  */
  size: _propTypes2.default.string
};

exports.default = Toggle;