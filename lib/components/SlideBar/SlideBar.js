"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSlider = require("rc-slider");

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _rcTooltip = require("rc-tooltip");

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _vars = require("../vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Handle = _rcSlider2.default.Handle;

var SlideBar = function (_Component) {
  _inherits(SlideBar, _Component);

  function SlideBar(props) {
    _classCallCheck(this, SlideBar);

    var _this = _possibleConstructorReturn(this, (SlideBar.__proto__ || Object.getPrototypeOf(SlideBar)).call(this));

    _this.handleDrag = function (sliderData) {
      if (_this.props.handleDrag) {
        _this.props.handleDrag(sliderData);
      }

      var value = sliderData.value,
          dragging = sliderData.dragging,
          index = sliderData.index,
          restProps = _objectWithoutProperties(sliderData, ["value", "dragging", "index"]);

      return _react2.default.createElement(
        _rcTooltip2.default,
        {
          prefixCls: "rc-slider-tooltip",
          overlay: value,
          visible: dragging,
          placement: "top",
          key: index
        },
        _react2.default.createElement(Handle, _extends({ value: value }, restProps))
      );
    };

    return _this;
  }

  _createClass(SlideBar, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        {
          className: "jsx-3583611659 " + _style2.default.dynamic([["1351504089", [_vars.Colors.White, _vars.Colors.Royal, _vars.Colors.PoloBlue, _vars.Colors.Royal]]]) + " " + ("SlideBar" + (this.props.className ? " " + this.props.className : "") || "")
        },
        _react2.default.createElement(_rcSlider2.default, {
          min: 0,
          max: this.props.max,
          defaultValue: this.props.defaultValue,
          handle: this.handleDrag
        }),
        _react2.default.createElement(_style2.default, {
          styleId: "3583611659",
          css: ".rc-slider{position:relative;height:14px;padding:5px 0;width:100%;border-radius:6px;-ms-touch-action:none;touch-action:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider-rail{position:absolute;width:100%;background-color:#e9e9e9;height:4px;border-radius:6px;}.rc-slider-track{position:absolute;left:0;height:4px;border-radius:6px;background-color:#abe2fb;}.rc-slider-handle{position:absolute;margin-left:-7px;margin-top:-5px;width:14px;height:14px;cursor:pointer;cursor:-webkit--webkit-grab;cursor:-moz--webkit-grab;cursor:-webkit-grab;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;border-radius:50%;border:solid 2px #96dbfa;background-color:#fff;-ms-touch-action:pan-x;touch-action:pan-x;}.rc-slider-handle:hover{border-color:#57c5f7;}.rc-slider-handle:active{border-color:#57c5f7;box-shadow:0 0 5px #57c5f7;cursor:-webkit--webkit-grabbing;cursor:-moz--webkit-grabbing;cursor:-webkit-grabbing;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing;}.rc-slider-handle:focus{border-color:#57c5f7;box-shadow:0 0 0 5px #96dbfa;outline:none;}.rc-slider-mark{position:absolute;top:18px;left:0;width:100%;font-size:12px;}.rc-slider-mark-text{position:absolute;display:inline-block;vertical-align:middle;text-align:center;cursor:pointer;color:#999;}.rc-slider-mark-text-active{color:#666;}.rc-slider-step{position:absolute;width:100%;height:4px;background:transparent;}.rc-slider-dot{position:absolute;bottom:-2px;margin-left:-4px;width:8px;height:8px;border:2px solid #e9e9e9;background-color:#fff;cursor:pointer;border-radius:50%;vertical-align:middle;}.rc-slider-dot-active{border-color:#96dbfa;}.rc-slider-disabled{background-color:#e9e9e9;}.rc-slider-disabled .rc-slider-track{background-color:#ccc;}.rc-slider-disabled .rc-slider-handle,.rc-slider-disabled .rc-slider-dot{border-color:#ccc;box-shadow:none;background-color:#fff;cursor:not-allowed;}.rc-slider-disabled .rc-slider-mark-text,.rc-slider-disabled .rc-slider-dot{cursor:not-allowed !important;}.rc-slider-vertical{width:14px;height:100%;padding:0 5px;}.rc-slider-vertical .rc-slider-rail{height:100%;width:4px;}.rc-slider-vertical .rc-slider-track{left:5px;bottom:0;width:4px;}.rc-slider-vertical .rc-slider-handle{margin-left:-5px;margin-bottom:-7px;-ms-touch-action:pan-y;touch-action:pan-y;}.rc-slider-vertical .rc-slider-mark{top:0;left:18px;height:100%;}.rc-slider-vertical .rc-slider-step{height:100%;width:4px;}.rc-slider-vertical .rc-slider-dot{left:2px;margin-bottom:-4px;}.rc-slider-vertical .rc-slider-dot:first-child{margin-bottom:-4px;}.rc-slider-vertical .rc-slider-dot:last-child{margin-bottom:-4px;}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear{-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:block !important;-webkit-animation-play-state:paused;animation-play-state:paused;}.rc-slider-tooltip-zoom-down-leave{-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:block !important;-webkit-animation-play-state:paused;animation-play-state:paused;}.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active{-webkit-animation-name:rcSliderTooltipZoomDownIn;animation-name:rcSliderTooltipZoomDownIn;-webkit-animation-play-state:running;animation-play-state:running;}.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active{-webkit-animation-name:rcSliderTooltipZoomDownOut;animation-name:rcSliderTooltipZoomDownOut;-webkit-animation-play-state:running;animation-play-state:running;}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear{-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);-webkit-animation-timing-function:cubic-bezier(0.23,1,0.32,1);animation-timing-function:cubic-bezier(0.23,1,0.32,1);}.rc-slider-tooltip-zoom-down-leave{-webkit-animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);}@-webkit-keyframes rcSliderTooltipZoomDownIn{0%{opacity:0;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}@keyframes rcSliderTooltipZoomDownIn{0%{opacity:0;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}@-webkit-keyframes rcSliderTooltipZoomDownOut{0%{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}100%{opacity:0;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}}@keyframes rcSliderTooltipZoomDownOut{0%{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}100%{opacity:0;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}}.rc-slider-tooltip{position:absolute;left:-9999px;top:-9999px;visibility:visible;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider-tooltip *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}.rc-slider-tooltip-hidden{display:none;}.rc-slider-tooltip-placement-top{padding:4px 0 8px 0;}.rc-slider-tooltip-inner{padding:6px 2px;min-width:24px;height:24px;font-size:12px;line-height:1;color:#fff;text-align:center;-webkit-text-decoration:none;text-decoration:none;background-color:#6c6c6c;border-radius:6px;box-shadow:0 0 4px #d9d9d9;}.rc-slider-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid;}.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow{bottom:4px;left:50%;margin-left:-4px;border-width:4px 4px 0;border-top-color:#6c6c6c;}"
        }),
        _react2.default.createElement(_style2.default, {
          styleId: "1351504089",
          css: ".rc-slider-handle{border-color:" + _vars.Colors.White + ";border-width:5px;box-shadow:0 1px 5px 0 rgba(0,0,0,0.15);background-color:" + _vars.Colors.Royal + ";margin-top:-10px;width:24px;height:24px;}.rc-slider-handle:hover{border-color:" + _vars.Colors.PoloBlue + ";}.rc-slider-handle:active{border-color:white;box-shadow:0 1px 5px 0 rgba(0,0,0,0.15);}.rc-slider-track{background-color:" + _vars.Colors.Royal + ";}",
          dynamic: [_vars.Colors.White, _vars.Colors.Royal, _vars.Colors.PoloBlue, _vars.Colors.Royal]
        })
      );
    }
  }]);

  return SlideBar;
}(_react.Component);

SlideBar.propTypes = {
  /*
  * Max value
  */
  max: _propTypes2.default.number.isRequired,
  /*
  * Default value
  */
  defaultValue: _propTypes2.default.number,
  /*
  * Event Handler
  */
  handleDrag: _propTypes2.default.func
};
exports.default = SlideBar;