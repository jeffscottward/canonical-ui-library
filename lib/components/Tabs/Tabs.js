"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _vars = require("../vars");

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

    _this.handleClick = function (e, tabitemClick) {
      _this.setState({ activeTab: tabitemClick });

      if (_this.props.handleSelection) {
        _this.props.handleSelection(tabitemClick);
      }
    };

    _this.state = {
      activeTab: props.defaultActiveTab || ""
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        {
          className: _style2.default.dynamic([["441934181", [_vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]]]) + " " + ("Tabs" + (this.props.className ? " " + this.props.className : "") || "")
        },
        this.props.tabList.map(function (tabItem) {
          return _react2.default.createElement(
            _Button2.default,
            {
              key: tabItem + Math.random(),
              activeHighlight: _this2.state.activeTab === tabItem,
              onClick: function onClick(someVal) {
                _this2.handleClick(someVal, tabItem);
              }
            },
            tabItem
          );
        }),
        _react2.default.createElement(_style2.default, {
          styleId: "441934181",
          css: ".Tabs.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.Tabs.__jsx-style-dynamic-selector .Button{border-right-width:0;}.Tabs.__jsx-style-dynamic-selector *:last-child{border-right-width:1px !important;}.Tabs.__jsx-style-dynamic-selector .Button.tab-active{padding-left:calc(" + _vars.MarginPaddingSize[1] + " + 1px);}.Tabs.__jsx-style-dynamic-selector .Button.tab-active + .Button{border-left-width:0px;padding-left:calc(" + _vars.MarginPaddingSize[1] + " + 1px);}.Tabs.__jsx-style-dynamic-selector .Button.tab-active{border-right-width:1px;}",
          dynamic: [_vars.MarginPaddingSize[1], _vars.MarginPaddingSize[1]]
        })
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  /*
  * Tab value list
  */
  tabList: _propTypes2.default.array.isRequired,
  /*
  * Default Active
  */
  defaultActiveTab: _propTypes2.default.string,
  /*
  * Event handler
  */
  handleSelection: _propTypes2.default.func.isRequired
};
exports.default = Tabs;