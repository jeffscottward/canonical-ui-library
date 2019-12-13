import React from "react";
import PropTypes from "prop-types";

const ModalTrigger = ({ className, children, modalID }) => (
  <label
    htmlFor={"modal-trigger-" + modalID}
    className={"toggleModal" + (className ? " " + className : "")}
  >
    {children}
    <style jsx>{`
      label {
        cursor: pointer;
      }
    `}</style>
  </label>
);

ModalTrigger.propTypes = {
  /**
   * Wrapper layout block
   */
  children: PropTypes.string.isRequired,
  /**
   * Wrapper layout block
   */
  modalID: PropTypes.string.isRequired,
  /**
   * ClassName
   */
  className: PropTypes.string
};

export default ModalTrigger;
