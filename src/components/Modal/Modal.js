import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors, MarginPaddingSize, Typography } from "../vars";
import { glyphclosex } from "../../asset-inliner";

class Modal extends Component {
  static propTypes = {
    /**
     * List of possible texts.
     */
    title: PropTypes.string.isRequired,
    /**
     * ModalID
     */
    modalID: PropTypes.string.isRequired,
    /**
     * Fullscreen
     */
    fullscreen: PropTypes.bool,
    /**
     * Modal Position
     */
    position: PropTypes.string
  };

  constructor(props) {
    super();
    this.modalTrigger = React.createRef();
    this.state = {
      title: props.title,
      initFire: props.fire
    };
  }

  handleCloseClick() {
    this.setState({
      initFire: false
    });
  }

  render() {
    return (
      <div
        className={
          "modal" + (this.props.className ? " " + this.props.className : "")
        }
      >
        <input
          id={"modal-trigger-" + this.props.modalID}
          className="checkbox"
          type="checkbox"
          defaultChecked={this.props.fire ? this.state.initFire : null}
        />
        <label
          htmlFor={"modal-trigger-" + this.props.modalID}
          className="open-modal"
          ref={this.modalTrigger}
        />
        <div className="modal-overlay">
          <label
            htmlFor={"modal-trigger-" + this.props.modalID}
            className="o-close"
            onClick={this.checkBox}
          />
          <div
            className={
              "modal-wrap " +
              (this.props.fullscreen && this.props.position
                ? this.props.position
                : "")
            }
          >
            <label
              htmlFor={"modal-trigger-" + this.props.modalID}
              className="close"
            >
              <img src={glyphclosex} alt="close button" />
            </label>
            <h2>{this.state.title}</h2>
            {this.props.children}
          </div>
        </div>
        <style jsx>{`
          .open-modal {
            &:hover {
              cursor: pointer;
              opacity: 0;
              postion: absolute;
              width: 0;
              height: 0;
            }
          }

          .modal .checkbox {
            display: none;
          }

          /* Gray background */
          .modal .modal-overlay {
            opacity: 0;
            transition: all 0.3s ease;
            width: 50%;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -100;
            transform: scale(1);
            display: none;
            background-color: rgba(0, 0, 0, 0.7);
          }

          /* Box */
          .modal .modal-wrap {
            background-color: ${Colors.White};
            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
            padding: 40px 50px;
            width: 60%;
            margin: 20px auto;
            align-self: center;
            border-radius: 2px;
            transition: all 0.5s ease;
          }
          .modal .modal-wrap.small {
            width: 30%;
          }
          .modal .modal-wrap.full {
            width: 100%;
            height: 100%;
          }

          .modal .modal-wrap.top {
            align-self: flex-start;
          }
          .modal .modal-wrap.from-left {
            transform: translateX(-100%);
          }
          .modal .modal-wrap.from-right {
            transform: translateX(100%);
          }
          .modal .modal-wrap.from-top {
            transform: translateY(-100%);
          }
          .modal .modal-wrap.from-bottom {
            transform: translateY(100%);
          }

          /* Close button */
          .modal .modal-overlay .close {
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 40px;
            width: 30px;
            height: 30px;
            color: #282c34;
            img {
              cursor: pointer;
              display: block;
            }
          }

          h2 {
            margin-bottom: ${MarginPaddingSize[2]};
            font-weight: ${Typography.typePrimaryWeight.normal};
          }

          .modal .o-close {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            z-index: -100;
          }

          .modal input:checked ~ .o-close {
            z-index: 9998;
          }

          .modal input:checked ~ .modal-overlay {
            transform: scale(1);
            opacity: 1;
            z-index: 9997;
            overflow: auto;
            display: flex;
            animation-duration: 0.5s;
            animation-name: fade-in;
            ${this.props.fullscreen ? "" : "position: relative"};
          }

          .modal input:checked ~ .modal-overlay .modal-wrap {
            transform: translateY(0);
            z-index: 9999;
          }

          /* Fadein from display:none */
          @keyframes fade-in {
            0% {
              display: none;
              opacity: 0;
            }
            1% {
              display: flex;
              opacity: 0;
            }
            100% {
              display: flex;
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Modal;
