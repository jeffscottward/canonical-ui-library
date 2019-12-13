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

var _assetInliner = require("../../asset-inliner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.modalTrigger = _react2.default.createRef();
    _this.state = {
      title: props.title,
      initFire: props.fire
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "handleCloseClick",
    value: function handleCloseClick() {
      this.setState({
        initFire: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        {
          className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]]) + " " + ("modal" + (this.props.className ? " " + this.props.className : "") || "")
        },
        _react2.default.createElement("input", {
          id: "modal-trigger-" + this.props.modalID,

          type: "checkbox",
          defaultChecked: this.props.fire ? this.state.initFire : null,
          className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]]) + " " + "checkbox"
        }),
        _react2.default.createElement("label", {
          htmlFor: "modal-trigger-" + this.props.modalID,

          ref: this.modalTrigger,
          className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]]) + " " + "open-modal"
        }),
        _react2.default.createElement(
          "div",
          {
            className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]]) + " " + "modal-overlay"
          },
          _react2.default.createElement("label", {
            htmlFor: "modal-trigger-" + this.props.modalID,

            onClick: this.checkBox,
            className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]]) + " " + "o-close"
          }),
          _react2.default.createElement(
            "div",
            {
              className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]]) + " " + ("modal-wrap " + (this.props.fullscreen && this.props.position ? this.props.position : "") || "")
            },
            _react2.default.createElement(
              "label",
              {
                htmlFor: "modal-trigger-" + this.props.modalID,
                className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]]) + " " + "close"
              },
              _react2.default.createElement("img", { src: _assetInliner.glyphclosex, alt: "close button", className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]])
              })
            ),
            _react2.default.createElement(
              "h2",
              {
                className: _style2.default.dynamic([["2076895271", [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]]])
              },
              this.state.title
            ),
            this.props.children
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: "2076895271",
          css: ".open-modal.__jsx-style-dynamic-selector:hover{cursor:pointer;opacity:0;postion:absolute;width:0;height:0;}.modal.__jsx-style-dynamic-selector .checkbox.__jsx-style-dynamic-selector{display:none;}.modal.__jsx-style-dynamic-selector .modal-overlay.__jsx-style-dynamic-selector{opacity:0;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;width:50%;width:100%;height:100%;position:fixed;top:0;left:0;z-index:-100;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);display:none;background-color:rgba(0,0,0,0.7);}.modal.__jsx-style-dynamic-selector .modal-wrap.__jsx-style-dynamic-selector{background-color:" + _vars.Colors.White + ";box-shadow:3px 3px 3px rgba(0,0,0,0.2);padding:40px 50px;width:60%;margin:20px auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-radius:2px;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}.modal.__jsx-style-dynamic-selector .modal-wrap.small.__jsx-style-dynamic-selector{width:30%;}.modal.__jsx-style-dynamic-selector .modal-wrap.full.__jsx-style-dynamic-selector{width:100%;height:100%;}.modal.__jsx-style-dynamic-selector .modal-wrap.top.__jsx-style-dynamic-selector{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.modal.__jsx-style-dynamic-selector .modal-wrap.from-left.__jsx-style-dynamic-selector{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}.modal.__jsx-style-dynamic-selector .modal-wrap.from-right.__jsx-style-dynamic-selector{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.modal.__jsx-style-dynamic-selector .modal-wrap.from-top.__jsx-style-dynamic-selector{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}.modal.__jsx-style-dynamic-selector .modal-wrap.from-bottom.__jsx-style-dynamic-selector{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);}.modal.__jsx-style-dynamic-selector .modal-overlay.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector{position:absolute;right:20px;top:20px;font-size:40px;width:30px;height:30px;color:#282c34;}.modal.__jsx-style-dynamic-selector .modal-overlay.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{cursor:pointer;display:block;}h2.__jsx-style-dynamic-selector{margin-bottom:" + _vars.MarginPaddingSize[2] + ";font-weight:" + _vars.Typography.typePrimaryWeight.normal + ";}.modal.__jsx-style-dynamic-selector .o-close.__jsx-style-dynamic-selector{width:100%;height:100%;position:fixed;left:0;top:0;z-index:-100;}.modal.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked~.o-close.__jsx-style-dynamic-selector{z-index:9998;}.modal.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked~.modal-overlay.__jsx-style-dynamic-selector{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;z-index:9997;overflow:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-name:fade-in-__jsx-style-dynamic-selector;animation-name:fade-in-__jsx-style-dynamic-selector;" + (this.props.fullscreen ? "" : "position: relative") + ";}.modal.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked~.modal-overlay.__jsx-style-dynamic-selector .modal-wrap.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);z-index:9999;}@-webkit-keyframes fade-in-__jsx-style-dynamic-selector{0%{display:none;opacity:0;}1%{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}100%{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:1;}}@keyframes fade-in-__jsx-style-dynamic-selector{0%{display:none;opacity:0;}1%{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}100%{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:1;}}",
          dynamic: [_vars.Colors.White, _vars.MarginPaddingSize[2], _vars.Typography.typePrimaryWeight.normal, this.props.fullscreen ? "" : "position: relative"]
        })
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * List of possible texts.
   */
  title: _propTypes2.default.string.isRequired,
  /**
   * ModalID
   */
  modalID: _propTypes2.default.string.isRequired,
  /**
   * Fullscreen
   */
  fullscreen: _propTypes2.default.bool,
  /**
   * Modal Position
   */
  position: _propTypes2.default.string
};
exports.default = Modal;