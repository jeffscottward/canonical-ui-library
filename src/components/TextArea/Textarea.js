import React from "react";
import PropTypes from "prop-types";
import { Typography, Colors, MarginPaddingSize } from "../vars";

const Textarea = ({
  className,
  label,
  placeholder,
  required,
  error,
  disabled
}) => (
  <div className={"Textarea-wrapper" + (className ? " " + className : "")}>
    {label ? (
      <label>
        {label} {required ? "*" : null}
      </label>
    ) : null}
    {error ? <label className="error">{error}</label> : null}
    <textarea placeholder={placeholder} disabled={disabled} />
    <style jsx>{`
      .Textarea-wrapper {
        border-radius: 2px;
        background-color: #ffffff;
        display: inline-block;
        position: relative;
        padding-bottom: calc(${MarginPaddingSize[1]} / 2);
        width: 100%;

        label {
          display: block;
          font-size: ${Typography.fontSize[4]};
          color: ${Colors.Slate};
          margin-bottom: calc(${MarginPaddingSize[0]} / 2);

          &.error {
            color: ${Colors.Cinnabar};
          }
        }

        textarea {
          display: block;
          width: 100%;
          font-size: ${Typography.fontSize[3]};
          color: ${Colors.Mirage};
          border: solid 1px ${Colors.Gallery};
          border-color: ${error ? Colors.Cinnabar : Colors.Gallery};
          padding: calc(${MarginPaddingSize[0]}) calc(${MarginPaddingSize[0]});
          outline: none;
          position: relative;
          resize: none;
          min-width: 100px;
          min-height: 100px;

          &::placeholder {
            color: ${Colors.Gallery};
          }

          &:active,
          &:focus {
            border: solid 1px ${Colors.Royal};
            border-color: ${error ? Colors.Cinnabar : Colors.Gallery};
          }
        }
      }
    `}</style>
  </div>
);

Textarea.propTypes = {
  /**
   * Field label
   */
  label: PropTypes.string,
  /**
   * PlaceHolder
   */
  placeholder: PropTypes.string,
  /**
   * Required? (*)
   */
  required: PropTypes.bool,
  /**
   * Error
   */
  error: PropTypes.string,
  /**
   * Required? (*)
   */
  disabled: PropTypes.bool
};

export default Textarea;
