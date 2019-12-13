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

var CarouselGalleryCard = function CarouselGalleryCard(_ref) {
  var className = _ref.className,
      children = _ref.children,
      imgSrc = _ref.imgSrc,
      title = _ref.title,
      subText = _ref.subText;
  return _react2.default.createElement(
    "figure",
    {
      className: _style2.default.dynamic([["177927407", [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + ("CarouselGalleryCard" + (className ? " " + className : "") || "")
    },
    _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["177927407", [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "CarouselGalleryCard-header"
      },
      _react2.default.createElement("img", { src: imgSrc, className: _style2.default.dynamic([["177927407", [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]])
      }),
      _react2.default.createElement(
        "div",
        {
          className: _style2.default.dynamic([["177927407", [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "CarouselGalleryCard-header-text"
        },
        _react2.default.createElement(
          "h3",
          {
            className: _style2.default.dynamic([["177927407", [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]])
          },
          title
        ),
        _react2.default.createElement(
          "h4",
          {
            className: _style2.default.dynamic([["177927407", [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]])
          },
          subText
        )
      )
    ),
    _react2.default.createElement(
      "div",
      {
        className: _style2.default.dynamic([["177927407", [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + "CarouselGalleryCard-content"
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "177927407",
      css: ".CarouselGalleryCard.__jsx-style-dynamic-selector{width:470px;height:450px;padding:" + _vars.MarginPaddingSize[2] + ";background:" + _vars.Colors.White + ";box-shadow:0 5px 20px 0 rgba(63,63,68,0.1);border-radius:2px;border-color:#c4cdd5;margin:0;}@media (max-width:500px){.CarouselGalleryCard.__jsx-style-dynamic-selector{height:auto;max-height:430px;width:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.CarouselGalleryCard.__jsx-style-dynamic-selector p{line-height:1.56;}.CarouselGalleryCard.__jsx-style-dynamic-selector .CarouselGalleryCard-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:0 " + _vars.MarginPaddingSize[1] + " " + _vars.MarginPaddingSize[1] + " 0;}.CarouselGalleryCard.__jsx-style-dynamic-selector .CarouselGalleryCard-header.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:block;margin-right:" + _vars.MarginPaddingSize[1] + ";max-width:120px;height:120px;}.CarouselGalleryCard.__jsx-style-dynamic-selector .CarouselGalleryCard-header.__jsx-style-dynamic-selector .CarouselGalleryCard-header-text.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.CarouselGalleryCard.__jsx-style-dynamic-selector .CarouselGalleryCard-header.__jsx-style-dynamic-selector .CarouselGalleryCard-header-text.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin-bottom:" + _vars.MarginPaddingSize[1] + ";}.CarouselGalleryCard.__jsx-style-dynamic-selector .CarouselGalleryCard-header.__jsx-style-dynamic-selector .CarouselGalleryCard-header-text.__jsx-style-dynamic-selector *.__jsx-style-dynamic-selector{display:block;}.CarouselGalleryCard.__jsx-style-dynamic-selector .CarouselGalleryCard-header.__jsx-style-dynamic-selector .CarouselGalleryCard-header-text.__jsx-style-dynamic-selector *.__jsx-style-dynamic-selector:last-child{margin-bottom:0;color:#708090;}",
      dynamic: [_vars.MarginPaddingSize[2], _vars.Colors.White, _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]
    })
  );
};

CarouselGalleryCard.propTypes = {
  /**
   * Nav Elements
   */
  children: _propTypes2.default.object.isRequired
};

exports.default = CarouselGalleryCard;