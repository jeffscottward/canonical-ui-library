import React from "react";
import PropTypes from "prop-types";
import { Colors, MarginPaddingSize } from "../vars";

const RadioGroup = ({ className, nameID, options, direction }) => (
  <div className={"RadioGroup" + (className ? " " + className : "")}>
    <form>
      {options.map((option, index) => {
        return (
          <div
            key={option.label + index}
            className={
              "radio-choice-wrap" +
              (option.disabled ? " disabled" : "") +
              (option.deactive ? " deactive" : "") +
              (option.error ? " error" : "")
            }
          >
            <input
              type="radio"
              id={option.label + index}
              name={nameID}
              disabled={option.disabled || option.error}
            />
            <label htmlFor={option.label + index}>{option.label}</label>
          </div>
        );
      })}
    </form>
    <style jsx>{`
      form {
        display: flex;
        flex-direction: ${direction || "column"};
      }

      .radio-choice-wrap {
        display: flex;
        align-items: ${direction === "row" ? "center" : ""};
        margin-bottom: ${!direction || direction === "column"
          ? MarginPaddingSize[1]
          : "0"};
        margin-right: ${direction === "row" ? MarginPaddingSize[1] : "0"};

        &.disabled {
          input:checked + label:before,
          input:not(:checked) + label:before {
            cursor: not-allowed;
          }
        }

        &.deactive label::after {
          filter: saturate(0%) opacity(20%);
        }

        &.error {
          input:checked + label:before,
          input:not(:checked) + label:before {
            border: 2px solid ${Colors.Cinnabar};
            background: rgba(227, 66, 52, 0.1);
            cursor: not-allowed;
          }

          input:checked + label:after,
          input:not(:checked) + label:after {
            background: ${Colors.Cinnabar};
          }
        }
      }
      [type="radio"] {
        &:checked,
        &:not(:checked) {
          position: absolute;
          left: -9999px;
        }

        &:checked + label,
        &:not(:checked) + label {
          position: relative;
          padding-left: 28px;
          cursor: pointer;
          line-height: 20px;
          display: inline-block;
          color: #666;
        }

        &:checked + label:before,
        &:not(:checked) + label:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          border: 1px solid #ddd;
          border-radius: 100%;
          background: #fff;
        }

        &:checked + label:after,
        &:not(:checked) + label:after {
          content: "";
          width: 10px;
          height: 10px;
          background: ${Colors.Royal};
          position: absolute;
          top: 5px;
          left: 5px;
          border-radius: 100%;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;
        }

        &:not(:checked) + label:after {
          opacity: 0;
          -webkit-transform: scale(0);
          transform: scale(0);
        }

        &:checked + label:after {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    `}</style>
  </div>
);

RadioGroup.propTypes = {
  /**
   * Field label
   */
  nameID: PropTypes.string.isRequired,
  /**
   * Radio ID
   */
  options: PropTypes.array.isRequired
};

export default RadioGroup;
