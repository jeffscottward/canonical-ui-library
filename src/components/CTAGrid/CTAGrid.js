import React from "react";
import PropTypes from "prop-types";
import { MarginPaddingSize } from "../vars";

const CTAGrid = ({ className, children }) => (
  <div className={"CTAGrid" + (className ? " " + className : "")}>
    {children}
    <style jsx>{`
      .CTAGrid {
        margin: auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        min-height: 200px;

        > :global(*) {
          border: 1px solid #eee;
          min-height: ${MarginPaddingSize[3]};
          border-right: none;
        }

        > :global(*:last-child) {
          border-right: 1px solid #eee;
        }
      }
    `}</style>
  </div>
);

CTAGrid.propTypes = {
  /**
   * CTAGrid block
   */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default CTAGrid;
