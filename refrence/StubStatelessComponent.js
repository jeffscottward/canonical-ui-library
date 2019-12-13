import React from "react";
import PropTypes from "prop-types";

const _______ = ({ className, children }) => (
  <div className={"_______ " + className}>
    <style jsx>{`
      .________ {
      }
    `}</style>
  </div>
);

_______.propTypes = {
  /**
   * Child Elements
   */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  /**
   * Classname
   */
  className: PropTypes.string
};

_______.defaultProps = {};

export default _______;
