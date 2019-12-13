import React from "react";
import PropTypes from "prop-types";

const Icon = ({ className, type, size }) => (
  <img
    className={"Icon" + (className ? " " + className : "")}
    alt={"icon " + type}
    src={require("../../asset-inliner/inlined/icons/" + type + ".svg.js")}
    style={{
      width: Icon.sizes[size] || Icon.sizes["small"],
      height: Icon.sizes[size] || Icon.sizes["small"]
    }}
  />
);

Icon.propTypes = {
  /*
  * Icon type
  */
  type: PropTypes.string.isRequired,
  /*
  * Icon size
  */
  size: PropTypes.string.isRequired
};

Icon.sizes = {
  small: "40px",
  large: "70px"
};

export default Icon;
