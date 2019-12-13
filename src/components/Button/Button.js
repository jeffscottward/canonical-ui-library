import React from "react";
import PropTypes from "prop-types";
import { Typography, Colors, MarginPaddingSize } from "../vars";
import { glyphcarouselarrow } from "../../asset-inliner";

const Button = ({
  className,
  children,
  type,
  size,
  onClick,
  styleOverRideRule,
  styleOverRide,
  activeHighlight
}) => (
  <button
    className={
      "Button " +
      (activeHighlight ? "tab-active " : "") +
      (styleOverRideRule ? styleOverRideRule : "") +
      (className ? " " + className : "")
    }
    disabled={type === "disabled"}
    onClick={onClick}
  >
    {children}
    <style jsx>{`
      .Button {
        /* DEFAULT - Unchanging Styles */
        cursor: pointer;
        text-align: center;
        border-width: 1px;
        border-style: solid;
        border-color: ${!activeHighlight ? "#c4cdd5" : Colors.Royal};
        color: ${Colors.Royal};
        background-color: ${Colors.White};
        padding: 0 calc(${MarginPaddingSize[2]} / 2);
        line-height: ${MarginPaddingSize[2]};
        font-size: ${Typography.fontSize[3]};
        max-height: ${MarginPaddingSize[2]};
        min-width: 140px;
        min-height: 40px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;

        :global(img) {
          display: inline-block;
        }

        :global(img + *) {
          margin-left: 5px;
        }

        :global(* + img) {
          margin-right: 5px;
        }

        &:hover {
          color: ${Colors.PoloBlue};
        }

        &:focus {
          outline: none;
        }
      }
    `}</style>
    <style jsx>{`      
      .Button {        
        /* DEFAULT - Type Overides*/
        ${
          type === "primary"
            ? `
              background: ${Colors.Royal};
              border-color: ${Colors.Royal};
              color: ${Colors.White};
            `
            : ""
        }
        
        ${
          type === "warning"
            ? `
              background: ${Colors.Cinnabar};
              border-color: ${Colors.Cinnabar};
              color: ${Colors.White};
              cursor: default;
            `
            : ""
        }

        ${
          type === "disabled"
            ? `
              background: ${Colors.Gallery};
              border-color: #c4cdd5;
              color: ${Colors.Slate};
              cursor: not-allowed;
            `
            : ""
        }

        ${
          type === "left" || type === "right"
            ? `
              min-width: 0px;
              min-height: 0;
              max-height: none;
              width: ${
                size !== "small"
                  ? size || MarginPaddingSize[2]
                  : MarginPaddingSize[2]
              };
              height: ${
                size !== "small"
                  ? size || MarginPaddingSize[2]
                  : MarginPaddingSize[2]
              };
              line-height: ${
                size !== "small"
                  ? size || MarginPaddingSize[2]
                  : MarginPaddingSize[2]
              };
              padding: 0;
              background: ${`url( ` +
                glyphcarouselarrow +
                `)`}  no-repeat center center;
            `
            : ""
        }

        ${type === "left" ? `transform:rotateY(180deg);` : ""}
        
        /* DEFAULT - Size Overide */
        ${
          size === "small"
            ? `
              padding: 2px calc(${MarginPaddingSize[2]}/4);
              font-size: ${Typography.fontSize[4]};
              max-height: 22px;
              min-width: auto;
              min-height: 0;
              line-height: 1;
            `
            : ""
        }
        
        /* HOVER - Type Overides*/
        &:hover {

          ${
            type === "primary"
              ? `
                background: #5068b2;
                border-color: ${Colors.PoloBlue};
                color: ${Colors.White};
              `
              : ""
          }

          ${
            type === "primary" && size === "small"
              ? `border-color: #5068b2;`
              : ""
          }

          ${
            type === "warning"
              ? `
                background: ${Colors.Cinnabar};
                border-color: ${Colors.Cinnabar};
                color: ${Colors.White};
              `
              : ""
          }

          ${
            type === "disabled"
              ? `
                background: ${Colors.Gallery};
                border-color: #eee;
                color: ${Colors.Slate};
                cursor: not-allowed;
              `
              : ""
          }          
        }

        /* ACTIVE - Type Overides*/
        &:active {
          color: ${Colors.ResolutionBlue};

          ${
            type === "primary"
              ? `
                background: ${Colors.ResolutionBlue};
                border-color: ${Colors.ResolutionBlue};
                color: ${Colors.White};
              `
              : ""
          }

          ${
            type === "warning"
              ? `
                background: ${Colors.Cinnabar};
                border-color: ${Colors.Cinnabar};
                color: ${Colors.White};
              `
              : ""
          }

          ${
            type === "disabled"
              ? `
                background: ${Colors.Gallery};
                border-color: #eee;
                color: ${Colors.Slate};
                cursor: not-allowed;
              `
              : ""
          }          
        }
      }
    `}</style>
    <style>{` ${styleOverRide} `}</style>
  </button>
);

Button.propTypes = {
  /**
   * Button text or images
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Button type
   */
  type: PropTypes.oneOf([
    "default",
    "primary",
    "warning",
    "disabled",
    "left",
    "right"
  ]),
  /**
   * Button size
   */
  size: PropTypes.string,
  /**
   * StyleOveride Rule
   */

  styleOverRideRule: PropTypes.string,
  /**
   * StyleOverides
   */

  styleOverRide: PropTypes.string,
  /**
   * Button highlight for tavs
   */

  activeHighlight: PropTypes.bool
};

export default Button;
