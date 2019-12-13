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

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _LinkText = require("../LinkText");

var _LinkText2 = _interopRequireDefault(_LinkText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconReducer = function iconReducer(type) {
  switch (type) {
    case "success":
      return _react2.default.createElement(_Icon2.default, { type: "icon-success", size: "small" });
    case "wait":
      return _react2.default.createElement(_Icon2.default, { type: "icon-wait", size: "small" });
    case "alert":
      return _react2.default.createElement(_Icon2.default, { type: "icon-alert", size: "small" });
    case "error":
      return _react2.default.createElement(_Icon2.default, { type: "icon-error", size: "small" });
    case "warning":
      return _react2.default.createElement(_Icon2.default, { type: "icon-warning", size: "small" });
  }
};

var Notification = function Notification(_ref) {
  var className = _ref.className,
      type = _ref.type,
      headline = _ref.headline,
      subheader = _ref.subheader,
      link = _ref.link;
  return _react2.default.createElement(
    "div",
    {
      className: "jsx-367131779" + " " + ("Notification" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "div",
      {
        className: "jsx-367131779" + " " + "icon-area"
      },
      iconReducer(type)
    ),
    _react2.default.createElement(
      "div",
      {
        className: "jsx-367131779" + " " + "info-area"
      },
      _react2.default.createElement(
        "div",
        {
          className: "jsx-367131779" + " " + "info-area-top"
        },
        _react2.default.createElement(
          "h4",
          {
            className: "jsx-367131779"
          },
          headline
        )
      ),
      _react2.default.createElement(
        "div",
        {
          className: "jsx-367131779" + " " + "info-area-bottom"
        },
        _react2.default.createElement(
          "h5",
          {
            className: "jsx-367131779"
          },
          subheader
        ),
        "\xA0",
        _react2.default.createElement(
          _LinkText2.default,
          null,
          link
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "367131779",
      css: ".Notification.jsx-367131779{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:674px;height:77px;border-radius:2px;background-color:#ffffff;box-shadow:0 1px 3px 0 rgba(63,63,68,0.15), 0 0 0 1px rgba(63,63,68,0.05);}.icon-area.jsx-367131779{margin:20px;}.info-area.jsx-367131779{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h4.jsx-367131779,h5.jsx-367131779{display:inline-block;margin:0;font-family:sans-serif;}h4.jsx-367131779{font-size:16px;font-weight:500;color:#1e2837;}h5.jsx-367131779{font-size:14px;font-weight:normal;color:#708090;}"
    })
  );
};

Notification.propTypes = _defineProperty({
  /**
   * Type
   */
  type: _propTypes2.default.oneOf(["success", "wait", "alert", "error", "warning"]).isRequired,
  /**
   * Headline
   */
  headline: _propTypes2.default.string.isRequired,
  /**
   * SubHeader
   */
  subheader: _propTypes2.default.string
}, "subheader", _propTypes2.default.string);

exports.default = Notification;