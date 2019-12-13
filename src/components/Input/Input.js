import React from "react";
import PropTypes from "prop-types";
import { Typography, Colors, MarginPaddingSize } from "../vars";
import { glyphsearch } from "../../asset-inliner";

const Input = ({
  className,
  type,
  label,
  placeholder,
  search,
  required,
  error,
  disabled
}) => (
  <div className={"input-wrapper" + (className ? " " + className : "")}>
    {label ? (
      <label>
        {label} {required ? "*" : null}
      </label>
    ) : null}
    {error ? <label className="error">{error}</label> : null}
    <input
      type={type || "text"}
      placeholder={placeholder}
      disabled={disabled}
    />
    <style jsx>{`
      .input-wrapper {
        border-radius: 2px;
        background-color: #ffffff;
        display: inline-block;
        min-width: 100px;
        position: relative;
        padding-bottom: calc(${MarginPaddingSize[1]} / 2);

        label {
          display: block;
          font-size: ${Typography.fontSize[4]};
          color: ${Colors.Slate};
          margin-bottom: calc(${MarginPaddingSize[0]} / 2);

          &.error {
            color: ${Colors.Cinnabar};
          }
        }

        input {
          display: block;
          width: 100%;
          font-size: ${Typography.fontSize[3]};
          color: ${error ? Colors.Cinnabar : Colors.Mirage};
          border: solid 1px ${Colors.Gallery};
          border-color: ${error ? Colors.Cinnabar : Colors.Gallery};
          padding: calc(${MarginPaddingSize[0]}) calc(${MarginPaddingSize[0]});
          outline: none;
          position: relative;
          border-radius: 2px;

          &::placeholder {
            color: #708090;
            opacity: 0.5;
            font-weight: normal;
          }

          &:active,
          &:focus {
            border-color: ${error ? Colors.Cinnabar : Colors.Royal};
          }
        }

        ::after {
          display: block;
          vertical-align: middle;
          content: "";
          background: ${search ? "url(" + glyphsearch + ")" : null};
          width: 14px;
          height: 14px;
          position: absolute;
          left: calc(100% - 20px - 5px);
          bottom: 24px;
        }
      }
    `}</style>
  </div>
);

Input.propTypes = {
  /**
   * Field label
   */
  label: PropTypes.string,
  /**
   * PlaceHolder
   */
  placeholder: PropTypes.string,
  /**
   * Search Icon
   */
  search: PropTypes.bool,
  /**
   * Required? (*)
   */
  required: PropTypes.bool,
  /**
   * Error
   */
  error: PropTypes.string,
  /**
   * Disabled
   */
  disabled: PropTypes.bool
};

export default Input;
