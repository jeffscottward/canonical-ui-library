import React from "react";
import PropTypes from "prop-types";
import { LayoutSizes, MarginPaddingSize } from "../vars";

/**
 * This is a top-level wrapper layout block
 */
const LayoutWrapper = ({ className, children, documentationStylesOnly }) => (
  <div className={"LayoutWrapper" + (className ? " " + className : "")}>
    {children}
    <style jsx>{`
      .LayoutWrapper {
        margin: auto;
        max-width: ${LayoutSizes[5]};
        padding: 0 ${MarginPaddingSize[3]};
        width: 100%;
      }
      ${documentationStylesOnly};
    `}</style>
  </div>
);

LayoutWrapper.propTypes = {
  /**
   * Wrapper layout block
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array
  ]).isRequired
};

export default LayoutWrapper;
