import React from "react";
import PropTypes from "prop-types";

const Glyph = ({ className, type, size }) => (
  <img
    className={"Glyph" + (className ? " " + className : "")}
    alt={"Glyph " + type}
    src={require("../../asset-inliner/inlined/glyphs/" + type + ".svg.js")}
    style={{
      width: Glyph.sizes[size] || Glyph.sizes["large"],
      height: Glyph.sizes[size] || Glyph.sizes["large"]
    }}
  />
);

Glyph.propTypes = {
  /*
  * Glyph type
  */
  type: PropTypes.string.isRequired,
  /*
  * Glyph size
  */
  size: PropTypes.string.isRequired
};

Glyph.sizes = {
  small: "24px",
  large: "40px"
};

export default Glyph;
