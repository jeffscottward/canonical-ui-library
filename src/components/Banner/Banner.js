import React from "react";
import PropTypes from "prop-types";
import LayoutGrid from "../LayoutGrid";
import Button from "../Button";
import { MarginPaddingSize, Colors } from "../vars";
import { bgwaves } from "../../asset-inliner";

const Banner = ({
  className,
  title,
  altStyle,
  secondayTitle,
  ctaBtnText,
  ctaBtnAction
}) => (
  <div className={"Banner" + (className ? " " + className : "")}>
    <LayoutGrid columns={1}>
      <div className="banner-left">
        <h1>{title}</h1>
        {secondayTitle ? <h1>{secondayTitle}</h1> : null}
      </div>
      <div className="banner-right">
        {ctaBtnText && ctaBtnAction ? (
          <Button onClick={ctaBtnAction}>{ctaBtnText}</Button>
        ) : null}
      </div>
    </LayoutGrid>
    <style jsx>{`
      .Banner {
        display: flex;
        flex-direction: vertical;
        align-items: center;
        height: 240px;
        padding: 0 ${MarginPaddingSize[3]};
        background-color: ${altStyle ? "none" : Colors.Mirage};
        background-image: ${altStyle ? "none" : "url(" + bgwaves + ")"};
        background-position: bottom;
        background-size: 100% auto;
        background-size: cover;
        background-repeat: no-repeat;

        h1,
        h2 {
          margin: 0;
        }

        h1 {
          color: ${altStyle ? Colors.Mirage : Colors.White};
        }
        h1 + h1 {
          color: ${altStyle ? Colors.Slate : Colors.White};
        }

        h1 {
          font-weight: normal;
        }
        h1 + h1 {
          font-weight: 100;
        }

        .banner-right {
          text-align: right;
        }

        ${altStyle ? `background-color: none; background-image: none;` : null};
      }
    `}</style>
  </div>
);

Banner.propTypes = {
  /**
   * Banner title
   */
  title: PropTypes.string.isRequired,
  /**
   * Banner inverted style
   */
  altStyle: PropTypes.string,
  /**
   * Banner sub-title
   */
  secondayTitle: PropTypes.string,
  /**
   * Banner button text
   */
  ctaBtnText: PropTypes.string,
  /**
   * Banner button functionality
   */
  ctaBtnAction: PropTypes.func
};

export default Banner;
