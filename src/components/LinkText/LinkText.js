import React from "react";
import PropTypes from "prop-types";
import { Typography, Colors } from "../vars";

const LinkText = ({ className, children, arrow, inverse, activeState }) => (
  <span className={"LinkText" + (className ? " " + className : "")}>
    {arrow ? <div className="arrow-right" /> : null}
    {children}
    <style jsx>{`
      .LinkText {
        color: ${Colors.Royal};
        font-size: ${Typography.fontSize[4]};
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        .arrow-right {
          display: inline-block;
          margin-right: 5px;
          width: 0px;
          height: 0px;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid ${Colors.Royal};
        }
      }
    `}</style>
  </span>
);

LinkText.propTypes = {
  /**
   * LinkText text
   */
  children: PropTypes.string,
  /**
   * LinkText arrow
   */
  arrow: PropTypes.bool
};

export default LinkText;
