import React from "react";
import PropTypes from "prop-types";
import { LayoutSizes, MarginPaddingSize } from "../vars";

/**
 * This is a column layout block
 */
const LayoutGrid = ({ className, children, offset }) => (
  <div className={"LayoutGrid" + (className ? " " + className : "")}>
    {children}
    <style jsx>{`
      .LayoutGrid {
        margin: auto;
        max-width: ${LayoutSizes[3]};
        display: flex;
        justify-content: space-between;
        width: 100%;

        /* 
          TODO: For some reason global flags are needed?
          Shouldn't nesting "just work"?
        */
        > :global(*) {
          ${children.length > 1
            ? "width: calc( (" +
              LayoutSizes[3] +
              "/" +
              children.length +
              ") - (" +
              MarginPaddingSize[2] +
              "/" +
              children.length +
              ") );"
            : "width: 100%;"} ${offset
            ? offset === "left"
              ? "&:first-child { width: " +
                LayoutSizes[2] +
                "};" +
                "&:nth-child(2) { width: " +
                LayoutSizes[0] +
                "};"
              : offset === "right"
                ? "&:first-child { width: " +
                  LayoutSizes[0] +
                  "};" +
                  "&:nth-child(2) { width: " +
                  LayoutSizes[2] +
                  "};"
                : ""
            : ""};
        }

        > :global(*:first-child) {
          ${offset && children.length === 2
            ? offset === "left"
              ? "width: " + LayoutSizes[2] + ";"
              : ""
            : ""} ${offset && children.length === 2
            ? offset === "right"
              ? "width: " + LayoutSizes[0] + ";"
              : ""
            : ""};
        }

        > :global(*:nth-child(2)) {
          ${offset && children.length === 2
            ? offset === "left"
              ? "width: " + LayoutSizes[0] + ";"
              : ""
            : ""} ${offset && children.length === 2
            ? offset === "right"
              ? "width: " + LayoutSizes[2] + ";"
              : ""
            : ""};
        }
      }
      @media (width <= 500px) {
        flex-direction: column;
        /* 
          This is nutty but it worked
          Probably some sort of transpiling madness PR needed to submit upstream 
        */
        :global(*[class*="LayoutGrid"] *) {
          width: 100% !important;
        }
        :global(*[class*="LayoutGrid"] *:first-child) {
          width: 100% !important;
        }
        :global(*[class*="LayoutGrid"] *:nth-child(2)) {
          width: 100% !important;
        }
      }
    `}</style>
  </div>
);

LayoutGrid.propTypes = {
  /**
   * LayoutGrid block
   */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  /**
   * LayoutGrid offset
   */
  offset: PropTypes.oneOf(["left", "right"])
};

export default LayoutGrid;
