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

var _LinkText = require("../LinkText");

var _LinkText2 = _interopRequireDefault(_LinkText);

var _vars = require("../vars");

var _assetInliner = require("../../asset-inliner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SealBanner = function SealBanner(_ref) {
  var className = _ref.className,
      type = _ref.type,
      title = _ref.title,
      date = _ref.date,
      url = _ref.url;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + ("SealBanner" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + ("SealBannerInner " + type || "")
      },
      _react2.default.createElement("img", { alt: "seal " + "blue", src: _assetInliner.sealblue, className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "sealImg"
      }),
      _react2.default.createElement(
        "div",
        {
          className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "info-box"
        },
        _react2.default.createElement(
          "h1",
          {
            className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "title"
          },
          title
        ),
        _react2.default.createElement(
          "span",
          {
            className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "date"
          },
          "Verified on " + date
        ),
        _react2.default.createElement(
          "a",
          { href: url, target: "_blank", className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "certificate-link"
          },
          _react2.default.createElement(
            _LinkText2.default,
            null,
            "View the Certificate"
          )
        )
      )
    ),
    type === "vertical" ? _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "tail-feather"
      },
      _react2.default.createElement("div", {
        className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "triangle-topleft"
      }),
      _react2.default.createElement("div", {
        className: _style2.default.dynamic([["972888259", [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "triangle-topright"
      })
    ) : null,
    _react2.default.createElement(_style2.default, {
      styleId: "972888259",
      css: ".SealBanner.__jsx-style-dynamic-selector{padding:" + _vars.MarginPaddingSize[1] + ";max-width:420px;font-family:" + _vars.Typography.typePrimaryStack + ";}.SealBanner.__jsx-style-dynamic-selector .sealImg.__jsx-style-dynamic-selector{padding:" + _vars.MarginPaddingSize[1] + ";width:130px;height:130px;}.SealBanner.__jsx-style-dynamic-selector .SealBannerInner.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#edeff7;}.SealBanner.__jsx-style-dynamic-selector .SealBannerInner.__jsx-style-dynamic-selector .info-box.__jsx-style-dynamic-selector{padding-right:" + _vars.MarginPaddingSize[1] + ";}.SealBanner.__jsx-style-dynamic-selector .SealBannerInner.vertical.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;max-width:200px;}.SealBanner.__jsx-style-dynamic-selector .SealBannerInner.vertical.__jsx-style-dynamic-selector .sealImg.__jsx-style-dynamic-selector{width:160px;height:160px;}.SealBanner.__jsx-style-dynamic-selector .SealBannerInner.vertical.__jsx-style-dynamic-selector .info-box.__jsx-style-dynamic-selector{padding-bottom:" + _vars.MarginPaddingSize[1] + ";padding-right:0;}.SealBanner.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{font-size:18px;margin:0;}.SealBanner.__jsx-style-dynamic-selector .date.__jsx-style-dynamic-selector{display:block;font-size:14px;padding:10px 0;}.SealBanner.__jsx-style-dynamic-selector .certificate-link.__jsx-style-dynamic-selector{display:block;}.tail-feather.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.triangle-topleft.__jsx-style-dynamic-selector{width:0;height:0;border-top:100px solid #edeff7;border-right:100px solid transparent;}.triangle-topright.__jsx-style-dynamic-selector{width:0;height:0;border-top:100px solid #edeff7;border-left:100px solid transparent;}",
      dynamic: [_vars.MarginPaddingSize[1], _vars.Typography.typePrimaryStack, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]
    })
  );
};

SealBanner.propTypes = {
  /*
  * SealBanner type
  */
  type: _propTypes2.default.string.isRequired,
  /*
  * SealBanner type
  */
  title: _propTypes2.default.string.isRequired,
  /*
  * SealBanner type
  */
  date: _propTypes2.default.string.isRequired,
  /*
  * SealBanner type
  */
  url: _propTypes2.default.string.isRequired
};

exports.default = SealBanner;