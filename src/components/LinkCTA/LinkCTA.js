import React from "react";
import PropTypes from "prop-types";
import { Typography, Colors, MarginPaddingSize } from "../vars";
import {
  glyphdoublearrow,
  glyphdoublearrowcolormalibu
} from "../../asset-inliner";

const LinkCTA = ({ className, children, label, onDark }) => (
  <div className={"LinkCTA" + (className ? " " + className : "")}>
    <div className="label">{label}</div>
    <div className="description-box">{children}</div>
    <style jsx>{`
      .LinkCTA {
        display: inline-block;
        height: 100%;
        background: ${!!onDark === true ? "#1e2837" : Colors.Gallery};
        max-width: 400px;
        color: ${!!onDark === true ? Colors.Malibu : Colors.Royal};
        font-size: ${Typography.fontSize[4]};
        cursor: pointer;
        border-radius: 2px;

        @media (width <= 500px) {
          width: 100%;
        }

        .label {
          height: 21px;
          border-radius: 2px;
          background-color: ${!!onDark === true ? "black" : Colors.Royal};
          color: white;
          padding: 4px 13px 0px 13px;
          font-weight: 300;
          font-style: normal;
          line-height: 1;
          text-align: center;
          border-color: ${!!onDark === true ? "black" : ""};
          font-size: 14px;

          @media (width <= 500px) {
            display: none;
          }
        }

        :global(*) {
          display: inline-block;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
        }

        :global(button) {
          display: inline-block;
        }

        .description-box {
          padding: 0 ${MarginPaddingSize[0]};
          font-size: ${Typography.fontSize[4]};
          color: ${!!onDark === true ? Colors.Malibu : ""};

          @media (width <= 500px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          &::after {
            content: "";
            display: inline-block;
            position: relative;
            left: 0px;
            transition: inherit;
            width: calc(${MarginPaddingSize[0]}*2);
            height: ${MarginPaddingSize[0]};
            margin-left: ${MarginPaddingSize[0]};
            background: ${!!onDark
                ? "url( " + glyphdoublearrowcolormalibu + ")"
                : "url( " + glyphdoublearrow + ")"}
              no-repeat;
            background-position-x: right;
          }
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

        &:hover {
          .description-box ::after {
            left: -10px;
          }
        }
      }
    `}</style>
  </div>
);

LinkCTA.propTypes = {
  /**
   * LinkCTA text
   */
  children: PropTypes.string,
  /**
   * LinkCTA arrow
   */
  label: PropTypes.string
};

export default LinkCTA;
