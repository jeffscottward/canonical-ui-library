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

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _vars = require("../vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectDropDown = function (_React$Component) {
  _inherits(SelectDropDown, _React$Component);

  function SelectDropDown() {
    _classCallCheck(this, SelectDropDown);

    var _this = _possibleConstructorReturn(this, (SelectDropDown.__proto__ || Object.getPrototypeOf(SelectDropDown)).call(this));

    _this.handleChange = function (selectedOption) {
      _this.setState({ selectedOption: selectedOption });

      if (_this.props.handleChange) {
        _this.props.handleChange(selectedOption);
      }
    };

    _this.state = {
      selectedOption: ""
    };
    return _this;
  }

  _createClass(SelectDropDown, [{
    key: "render",
    value: function render() {
      var selectedOption = this.state.selectedOption;


      return _react2.default.createElement(
        "div",
        {
          className: "jsx-2878773064 " + _style2.default.dynamic([["3857541570", [_vars.MarginPaddingSize[0], _vars.Colors.Mirage, _vars.Colors.Mirage, _vars.Colors.Royal, _vars.Colors.Royal]]]) + " " + ("SelectDropDown" + (this.props.className ? " " + this.props.className : "") || "")
        },
        _react2.default.createElement(_reactSelect2.default, {
          name: name,
          value: selectedOption,
          onChange: this.handleChange,
          options: [{ value: "one", label: "One" }, { value: "two", label: "Two" }]
        }),
        _react2.default.createElement(_style2.default, {
          styleId: "2878773064",
          css: ".Select{position:relative;}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none !important;}.Select input::-ms-clear{display:none !important;}.Select input::-ms-reveal{display:none !important;}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:0.35;}.Select.is-disabled>.Select-control{background-color:#f9f9f9;}.Select.is-disabled>.Select-control:hover{box-shadow:none;}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9;}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px;}.Select.is-searchable.is-open>.Select-control{cursor:text;}.Select.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text;}.Select.is-focused>.Select-control{background:#fff;}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075), 0 0 0 3px rgba(0,126,255,0.1);background:#fff;}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px;}.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label{color:#333;}.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus{color:#007eff;outline:none;-webkit-text-decoration:underline;text-decoration:underline;}.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff;}.Select.has-value.is-pseudo-focused .Select-input{opacity:0;}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666;}.Select.Select--rtl{direction:rtl;text-align:right;}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%;}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06);}.Select-control .Select-input:focus{outline:none;background:#fff;}.Select-placeholder,.Select--single>.Select-control .Select-value{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle;}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none;}.is-focused .Select-input>input{cursor:text;}.has-value.is-pseudo-focused .Select-input{opacity:0;}.Select-control:not(.is-searchable)>.Select-input{outline:none;}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px;}.Select-loading{-webkit-animation:Select-animation-spin 400ms infinite linear;-o-animation:Select-animation-spin 400ms infinite linear;-webkit-animation:Select-animation-spin 400ms infinite linear;animation:Select-animation-spin 400ms infinite linear;width:16px;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block;position:relative;vertical-align:middle;}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn 200ms;-o-animation:Select-animation-fadeIn 200ms;-webkit-animation:Select-animation-fadeIn 200ms;animation:Select-animation-fadeIn 200ms;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px;}.Select-clear-zone:hover{color:#d0021b;}.Select-clear{display:inline-block;font-size:18px;line-height:1;}.Select--multi .Select-clear-zone{width:17px;}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px;}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px;}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative;}.Select-control>*:last-child{padding-right:5px;}.Select--multi .Select-multi-value-wrapper{display:inline-block;}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;-webkit-clip:rect(0,0,0,0);clip:rect(0,0,0,0);overflow:hidden;float:left;}@-webkit-keyframes Select-animation-fadeIn{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes Select-animation-fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes Select-animation-fadeIn{from{opacity:0;}to{opacity:1;}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,0.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch;}.Select-menu{max-height:198px;overflow-y:auto;}.Select-option{box-sizing:border-box;background-color:#fff;color:#666666;cursor:pointer;display:block;padding:8px 10px;}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px;}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,0.04);color:#333;}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,0.08);color:#333;}.Select-option.is-disabled{color:#cccccc;cursor:default;}.Select-noresults{box-sizing:border-box;color:#999999;cursor:default;display:block;padding:8px 10px;}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0;}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px;}.Select--multi.has-value .Select-input{margin-left:5px;}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,0.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,0.24);color:#007eff;display:inline-block;font-size:0.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top;}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle;}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.Select--multi a.Select-value-label:hover{-webkit-text-decoration:underline;text-decoration:underline;}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,0.24);padding:1px 5px 3px;}.Select--multi .Select-value-icon:hover,.Select--multi .Select-value-icon:focus{background-color:#d8eafd;background-color:rgba(0,113,230,0.08);color:#0071e6;}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,0.24);}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px;}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,0.24);}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333;}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3;}.Select--multi.is-disabled .Select-value-icon:hover,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:active{background-color:#fcfcfc;}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn);-ms-transform:rotate(1turn);transform:rotate(1turn);}}@keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn);-ms-transform:rotate(1turn);transform:rotate(1turn);}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn);}}"
        }),
        _react2.default.createElement(_style2.default, {
          styleId: "3857541570",
          css: ".Select-control{height:" + _vars.MarginPaddingSize[0] + ";border-radius:2px;background-image:linear-gradient(to bottom,#ffffff,#f9fafb);border:solid 1px #c4cdd5;}.Select-menu-outer > *{background-image:linear-gradient(to bottom,#ffffff,#f9fafb);}.Select-menu-outer > * > *{background-color:transparent;}.Select-placeholder{color:" + _vars.Colors.Mirage + ";}.Select-menu-outer *{color:" + _vars.Colors.Mirage + ";}.Select--multi .Select-value-icon:hover{background-color:inherit;color:" + _vars.Colors.Royal + ";}.Select--multi .Select-value-icon:focus{background-color:inherit;color:" + _vars.Colors.Royal + ";}",
          dynamic: [_vars.MarginPaddingSize[0], _vars.Colors.Mirage, _vars.Colors.Mirage, _vars.Colors.Royal, _vars.Colors.Royal]
        })
      );
    }
  }]);

  return SelectDropDown;
}(_react2.default.Component);

SelectDropDown.propTypes = {
  /*
  * UUID 
  */
  name: _propTypes2.default.string,
  /*
  * Event Handler
  */
  handleChange: _propTypes2.default.func,
  /*
  * Dropdown options
  */
  options: _propTypes2.default.array
};

exports.default = SelectDropDown;