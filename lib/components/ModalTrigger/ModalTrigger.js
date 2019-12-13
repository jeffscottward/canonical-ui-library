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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalTrigger = function ModalTrigger(_ref) {
  var className = _ref.className,
      children = _ref.children,
      modalID = _ref.modalID;
  return _react2.default.createElement(
    "label",
    {
      htmlFor: "modal-trigger-" + modalID,
      className: "jsx-3671263334" + " " + ("toggleModal" + (className ? " " + className : "") || "")
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: "3671263334",
      css: "label.jsx-3671263334{cursor:pointer;}"
    })
  );
};

ModalTrigger.propTypes = {
  /**
   * Wrapper layout block
   */
  children: _propTypes2.default.string.isRequired,
  /**
   * Wrapper layout block
   */
  modalID: _propTypes2.default.string.isRequired,
  /**
   * ClassName
   */
  className: _propTypes2.default.string
};

exports.default = ModalTrigger;