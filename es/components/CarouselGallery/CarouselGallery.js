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

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _vars = require("../vars");

var _nukaCarousel = require("nuka-carousel");

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselGallery = function CarouselGallery(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      label = _ref.label,
      bottomLabel = _ref.bottomLabel;
  return _react2.default.createElement(
    "div",
    {
      className: _style2.default.dynamic([["836209608", [type === "A" ? _vars.MarginPaddingSize[3] + " 0 0 0" : "", _vars.MarginPaddingSize[3], type === "A" ? "calc(-2px + " + "-" + _vars.MarginPaddingSize[3] + ") !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", _vars.MarginPaddingSize[2], _vars.MarginPaddingSize[3]]]]) + " " + ("CarouselGallery" + (className ? " " + className : "") || "")
    },
    type === "A" ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement("div", {
        className: _style2.default.dynamic([["836209608", [type === "A" ? _vars.MarginPaddingSize[3] + " 0 0 0" : "", _vars.MarginPaddingSize[3], type === "A" ? "calc(-2px + " + "-" + _vars.MarginPaddingSize[3] + ") !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", _vars.MarginPaddingSize[2], _vars.MarginPaddingSize[3]]]]) + " " + "CarouselGallery-offset-bg"
      }),
      _react2.default.createElement(
        _nukaCarousel2.default,
        {
          slidesToShow: window.innerWidth >= 500 ? 3 : 1,
          heightMode: "first",
          renderCenterLeftControls: function renderCenterLeftControls() {
            return null;
          },
          renderCenterRightControls: function renderCenterRightControls() {
            return null;
          },
          renderBottomCenterControls: function renderBottomCenterControls() {
            return null;
          },
          renderTopLeftControls: function renderTopLeftControls(_ref2) {
            var previousSlide = _ref2.previousSlide,
                nextSlide = _ref2.nextSlide;
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(_Button2.default, {
                bgColor: "rgba(215, 214, 215, 1.0)",
                type: "left",
                onClick: previousSlide,
                size: _vars.MarginPaddingSize[3],
                styleOverRideRule: "override-1",
                styleOverRide: "\n                    .override-1 { \n                      border: none !important;\n                    }\n                  "
              }),
              _react2.default.createElement(_Button2.default, {
                bgColor: "rgba(215, 214, 215, 1.0)",
                type: "right",
                onClick: nextSlide,
                size: _vars.MarginPaddingSize[3],
                styleOverRideRule: "override-2",
                styleOverRide: "\n                    .override-2 {\n                      border: none !important;\n                      border-left: 1px solid " + _vars.Colors.Alabaster + " !important;\n                    }\n                  "
              }),
              _react2.default.createElement(
                "h3",
                {
                  className: _style2.default.dynamic([["836209608", [type === "A" ? _vars.MarginPaddingSize[3] + " 0 0 0" : "", _vars.MarginPaddingSize[3], type === "A" ? "calc(-2px + " + "-" + _vars.MarginPaddingSize[3] + ") !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", _vars.MarginPaddingSize[2], _vars.MarginPaddingSize[3]]]]) + " " + "CarouselGallery-label"
                },
                label
              )
            );
          },
          renderBottomLeftControls: function renderBottomLeftControls() {
            return _react2.default.createElement(
              "div",
              {
                className: _style2.default.dynamic([["836209608", [type === "A" ? _vars.MarginPaddingSize[3] + " 0 0 0" : "", _vars.MarginPaddingSize[3], type === "A" ? "calc(-2px + " + "-" + _vars.MarginPaddingSize[3] + ") !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", _vars.MarginPaddingSize[2], _vars.MarginPaddingSize[3]]]]) + " " + "CarouselGallery-bottomLabel"
              },
              bottomLabel
            );
          }
        },
        children
      )
    ) : _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        _nukaCarousel2.default,
        {
          slidesToShow: 3,
          heightMode: "first",
          cellSpacing: 10,
          renderCenterLeftControls: function renderCenterLeftControls(_ref3) {
            var previousSlide = _ref3.previousSlide;
            return _react2.default.createElement(_Button2.default, {
              type: "left",
              onClick: previousSlide,
              styleOverRideRule: "override-3",
              styleOverRide: "\n                  .override-3 {\n                    background-color: white !important;\n                  }\n                "
            });
          },
          renderCenterRightControls: function renderCenterRightControls(_ref4) {
            var nextSlide = _ref4.nextSlide;
            return _react2.default.createElement(_Button2.default, {
              type: "right",
              onClick: nextSlide,
              styleOverRideRule: "override-4",
              styleOverRide: "\n                  .override-4 {\n                    background-color: white !important;\n                  }\n                "
            });
          },
          renderBottomCenterControls: function renderBottomCenterControls() {
            return null;
          }
        },
        children
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "836209608",
      css: ".CarouselGallery.__jsx-style-dynamic-selector{padding:" + (type === "A" ? _vars.MarginPaddingSize[3] + " 0 0 0" : "") + ";position:relative;overflow:hidden;}.CarouselGallery.__jsx-style-dynamic-selector .CarouselGallery-offset-bg.__jsx-style-dynamic-selector{background:#eeeeee;position:absolute;height:100%;width:100%;top:0;left:calc(" + _vars.MarginPaddingSize[3] + " * 3);}@media (max-width:500px){.CarouselGallery.__jsx-style-dynamic-selector .CarouselGallery-offset-bg.__jsx-style-dynamic-selector{left:0;}}.CarouselGallery.__jsx-style-dynamic-selector .slider-control-topleft{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:" + (type === "A" ? "calc(-2px + " + "-" + _vars.MarginPaddingSize[3] + ") !important" : "") + ";left:" + (type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "") + ";}@media (max-width:500px){.CarouselGallery.__jsx-style-dynamic-selector .slider-control-topleft{left:0 !important;}}.CarouselGallery.__jsx-style-dynamic-selector .slider-control-bottomleft{left:" + (type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "") + ";}@media (max-width:500px){.CarouselGallery.__jsx-style-dynamic-selector .slider-control-bottomleft{left:0 !important;}}.CarouselGallery.__jsx-style-dynamic-selector .slider-frame{overflow:visible !important;}.CarouselGallery.__jsx-style-dynamic-selector .CarouselGallery-label.__jsx-style-dynamic-selector,.CarouselGallery.__jsx-style-dynamic-selector .CarouselGallery-bottomLabel.__jsx-style-dynamic-selector{display:inline-block;margin:0 0 0 " + _vars.MarginPaddingSize[2] + ";line-height:" + _vars.MarginPaddingSize[3] + ";}",
      dynamic: [type === "A" ? _vars.MarginPaddingSize[3] + " 0 0 0" : "", _vars.MarginPaddingSize[3], type === "A" ? "calc(-2px + " + "-" + _vars.MarginPaddingSize[3] + ") !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", type === "A" ? "calc( " + _vars.MarginPaddingSize[3] + " * 3) !important" : "", _vars.MarginPaddingSize[2], _vars.MarginPaddingSize[3]]
    })
  );
};

CarouselGallery.propTypes = {
  /**
   * Children
   */
  children: _propTypes2.default.array.isRequired
};

exports.default = CarouselGallery;