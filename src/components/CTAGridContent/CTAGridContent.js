import React from "react";
import PropTypes from "prop-types";
import { MarginPaddingSize, Colors, Typography } from "../vars";

const CTAGridContent = ({ className, children, align }) => (
  <div className={"CTAGridContent" + (className ? " " + className : "")}>
    <div className="inner-wrap">{children}</div>
    <style jsx>{`
      .CTAGridContent {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .inner-wrap {
          text-align: ${align === "left" ? "left" : "center"};
          padding: ${MarginPaddingSize[3]} 0;
          display: flex;
          flex-direction: column;

          > :global(h2) {
            text-align: ${align === "left" ? "left" : "center"};
            margin-bottom: ${MarginPaddingSize[0]};
            color: ${Colors.Royal};
            font-weight: ${Typography.typePrimaryWeight.normal};
          }

          > :global(p) {
            text-align: ${align === "left" ? "left" : "center"};
            margin-bottom: ${MarginPaddingSize[0]};
          }

          > :global(a) {
            text-decoration: none;
          }
        }
      }
    `}</style>
  </div>
);

CTAGridContent.propTypes = {
  /*
  * Alignment style
  */
  align: PropTypes.string
};

export default CTAGridContent;
