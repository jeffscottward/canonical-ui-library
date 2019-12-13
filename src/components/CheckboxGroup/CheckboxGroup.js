import React from "react";
import PropTypes from "prop-types";
import { Colors, MarginPaddingSize } from "../vars";
import { glyphcheck } from "../../asset-inliner";

const CheckboxGroup = ({ className, nameID, options, error, direction }) => (
  <div className={"CheckboxGroup" + (className ? " " + className : "")}>
    <form>
      {options.map((option, index) => {
        return (
          <div
            key={option.label + index}
            className={
              "checkbox-choice-wrap" +
              (option.disabled ? " disabled" : "") +
              (option.deactive ? " deactive" : "") +
              (option.error ? " error" : "")
            }
          >
            <input
              type="checkbox"
              id={option.label + index + nameID}
              name={nameID}
              disabled={option.disabled || option.error}
            />
            <label htmlFor={option.label + index + nameID}>
              {option.label}
            </label>
          </div>
        );
      })}
    </form>
    <style jsx>{`
      form {
        display: flex;
        flex-direction: ${direction || "column"};
      }

      .checkbox-choice-wrap {
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
            border: 1px solid ${Colors.Cinnabar};
            background: rgba(227, 66, 52, 0.1);
            cursor: not-allowed;
          }

          input:checked + label:after,
          input:not(:checked) + label:after {
            background-image: ${"url(" + glyphcheck + ")"};
          }
        }
      }

      [type="checkbox"] {
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
          line-height: 1.2 !important;
          display: inline-block;
          color: #666;
        }

        &:checked + label:before,
        &:not(:checked) + label:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          border: 1px solid #ddd;
          border-radius: 2px;
          background: #fff;
        }

        &:checked + label:after,
        &:not(:checked) + label:after {
          content: "";
          width: 15px;
          height: 16px;
          position: absolute;
          top: 2px;
          left: 1px;
          border-radius: 100%;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;
          background-image: ${error ? "none" : "url(" + glyphcheck + ")"};
          background-size: contain;
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

CheckboxGroup.propTypes = {
  /**
   * Field label
   */
  nameID: PropTypes.string.isRequired,
  /**
   * checkbox ID
   */
  options: PropTypes.array.isRequired,
  /**
   * Error
   */
  error: PropTypes.bool,
  /**
   * Disabled
   */
  disabled: PropTypes.bool
};

export default CheckboxGroup;
