import React from "react";
import PropTypes from "prop-types";

const Seal = ({ className, type }) => (
  <img
    className={"Seal" + (className ? " " + className : "")}
    alt={"seal " + type}
    src={require("../../asset-inliner/inlined/seals/seal-" + type + ".svg.js")}
    style={{
      width: Seal.sizes["large"],
      height: Seal.sizes["large"]
    }}
  />
);

Seal.propTypes = {
  /*
  * Seal type
  */
  type: PropTypes.string.isRequired
};

Seal.sizes = {
  large: "160px"
};

export default Seal;
