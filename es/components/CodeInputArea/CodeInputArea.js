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

var _reactCodemirror = require("react-codemirror2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sampleCodeInternal = "pragma solidity ^0.4.15;\n\n// Proof of Existence contract, version 1\ncontract ProofOfExistence1 {\n\n  // state\n  bytes32 public proof;\n\n  // calculate and store the proof for a document\n  // *transactional function*\n  function notarize(string document) {\n    proof = proofFor(document);\n  }\n\n  // helper function to get a document's sha256\n  // *read-only function*\n  function proofFor(string document) constant returns (bytes32) {\n    return sha256(document);\n  }\n}";

var CodeInputArea = function (_Component) {
  _inherits(CodeInputArea, _Component);

  function CodeInputArea(props) {
    _classCallCheck(this, CodeInputArea);

    var _this = _possibleConstructorReturn(this, (CodeInputArea.__proto__ || Object.getPrototypeOf(CodeInputArea)).call(this));

    _this.handleChange = function (editor, data, value) {
      _this.props.handleChange ? _this.props.handleChange(value, data, editor) : console.log("controlled", { value: value });
    };

    _this.componentDidMount = function () {
      var cm = document.querySelector(".cm-hook");
      var cmTA = document.querySelector(".cm-hook textarea");
      cmTA.style = "opacity: 0;";

      var looper = function looper(collection) {
        collection.childNodes.forEach(function (item) {
          if (item.nodeName !== "TEXTAREA") {
            item.style = item.style + " background: transparent;";
          } else {
            item.parentNode.style = "height: 0";
          }
          looper(item);
        });
      };

      looper(cm);
    };

    _this.state = {
      value: props.code || sampleCodeInternal
    };
    return _this;
  }

  _createClass(CodeInputArea, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        {
          className: "jsx-1986657539" + " " + ("CodeInputArea" + (this.props.className ? " " + this.props.className : "") || "")
        },
        _react2.default.createElement(_reactCodemirror.Controlled, {
          value: this.state.value,
          options: {
            mode: "xml",
            lineNumbers: true
          },
          className: "cm-hook " + this.props.className,
          onBeforeChange: function onBeforeChange(editor, data, value) {
            _this2.setState({ value: value });
          },
          onChange: function onChange(editor, data, value) {
            _this2.handleChange(editor, data, value);
          }
        }),
        _react2.default.createElement(_style2.default, {
          styleId: "2770334568",
          css: ".CodeMirror{font-family:monospace;height:300px;color:black;direction:ltr;}.CodeMirror-lines{padding:4px 0;}.CodeMirror pre{padding:0 4px;}.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{background-color:white;}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap;}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap;}.CodeMirror-guttermarker{color:black;}.CodeMirror-guttermarker-subtle{color:#999;}.CodeMirror-cursor{border-left:1px solid black;border-right:none;width:0;}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver;}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0 !important;background:#7e7;}.cm-fat-cursor div.CodeMirror-cursors{z-index:1;}.cm-fat-cursor-mark{background-color:rgba(20,255,20,0.5);-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7;}@-moz-keyframes blink{50%{background-color:transparent;}}@-webkit-keyframes blink{50%{background-color:transparent;}}@-webkit-keyframes blink{50%{background-color:transparent;}}@keyframes blink{50%{background-color:transparent;}}.cm-tab{display:inline-block;-webkit-text-decoration:inherit;text-decoration:inherit;}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden;}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute;}.cm-s-default .cm-header{color:blue;}.cm-s-default .cm-quote{color:#090;}.cm-negative{color:#d44;}.cm-positive{color:#292;}.cm-header,.cm-strong{font-weight:bold;}.cm-em{font-style:italic;}.cm-link{-webkit-text-decoration:underline;text-decoration:underline;}.cm-strikethrough{-webkit-text-decoration:line-through;text-decoration:line-through;}.cm-s-default .cm-keyword{color:#708;}.cm-s-default .cm-atom{color:#219;}.cm-s-default .cm-number{color:#164;}.cm-s-default .cm-def{color:#00f;}.cm-s-default .cm-variable-2{color:#05a;}.cm-s-default .cm-variable-3,.cm-s-default .cm-type{color:#085;}.cm-s-default .cm-comment{color:#a50;}.cm-s-default .cm-string{color:#a11;}.cm-s-default .cm-string-2{color:#f50;}.cm-s-default .cm-meta{color:#555;}.cm-s-default .cm-qualifier{color:#555;}.cm-s-default .cm-builtin{color:#30a;}.cm-s-default .cm-bracket{color:#997;}.cm-s-default .cm-tag{color:#170;}.cm-s-default .cm-attribute{color:#00c;}.cm-s-default .cm-hr{color:#999;}.cm-s-default .cm-link{color:#00c;}.cm-s-default .cm-error{color:#f00;}.cm-invalidchar{color:#f00;}.CodeMirror-composing{border-bottom:2px solid;}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0;}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22;}.CodeMirror-matchingtag{background:rgba(255,150,0,0.3);}.CodeMirror-activeline-background{background:#e8f2ff;}.CodeMirror{position:relative;overflow:hidden;background:white;}.CodeMirror-scroll{overflow:scroll !important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative;}.CodeMirror-sizer{position:relative;border-right:30px solid transparent;}.CodeMirror-vscrollbar,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{position:absolute;z-index:6;display:none;}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll;}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll;}.CodeMirror-scrollbar-filler{right:0;bottom:0;}.CodeMirror-gutter-filler{left:0;bottom:0;}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3;}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px;}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none !important;border:none !important;}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4;}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4;}.CodeMirror-gutter-wrapper::selection{background-color:transparent;}.CodeMirror-gutter-wrapper::-moz-selection{background-color:transparent;}.CodeMirror-lines{cursor:text;min-height:1px;}.CodeMirror pre{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual;}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal;}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0;}.CodeMirror-linewidget{position:relative;z-index:2;padding:0.1px;}.CodeMirror-rtl pre{direction:rtl;}.CodeMirror-code{outline:none;}.CodeMirror-scroll,.CodeMirror-sizer,.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber{-moz-box-sizing:content-box;box-sizing:content-box;}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden;}.CodeMirror-cursor{position:absolute;pointer-events:none;}.CodeMirror-measure pre{position:static;}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3;}div.CodeMirror-dragcursors{visibility:visible;}.CodeMirror-focused div.CodeMirror-cursors{visibility:visible;}.CodeMirror-selected{background:#d9d9d9;}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0;}.CodeMirror-crosshair{cursor:crosshair;}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0;}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0;}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,0.4);}.cm-force-border{padding-right:0.1px;}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden;}}.cm-tab-wrap-hack:after{content:\"\";}span.CodeMirror-selectedtext{background:none;}"
        }),
        _react2.default.createElement(_style2.default, {
          styleId: "1625660034",
          css: ".CodeMirror *{font-family:monospace !important;font-size:12px !important;box-sizing:initial !important;}.CodeMirror-gutter{background:#f2f4f9;}.CodeMirror-linenumber{color:#052892;font-weight:bold;}pre.CodeMirror-line{padding-left:60px;}.CodeMirror pre{z-index:4;line-height:1.8;}.CodeMirror-sizer,.CodeMirror-gutter-wrapper,.CodeMirror-linenumber{left:0 !important;margin-left:0 !important;width:auto !important;min-width:30px !important;}.CodeMirror-linenumber.CodeMirror-gutter-elt{padding-right:10px;border-right:1px solid #ccc;background:#f2f4f9;line-height:1;}.CodeMirror-lines{padding-top:0;padding-bottom:0;}.CodeMirror-gutters{display:none;}.CodeMirror-scroll{overflow:auto;overflow-y:scroll !important;margin-bottom:0 !important;}.CodeMirror::-webkit-scrollbar{display:none;}.CodeMirror-linenumber.CodeMirror-gutter-elt,.CodeMirror-line{padding-top:5px;padding-bottom:5px;}*[class*=\"rsg\"] .CodeMirror-scroll{padding-bottom:0 !important;}"
        })
      );
    }
  }]);

  return CodeInputArea;
}(_react.Component);

CodeInputArea.propTypes = {
  /* 
  * Code string
  */
  code: _propTypes2.default.string.isRequired
};
exports.default = CodeInputArea;