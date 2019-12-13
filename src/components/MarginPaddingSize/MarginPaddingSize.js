import React from "react";
import { Colors as ColorVars, MarginPaddingSize as MPSizes } from "../vars";

/**
 * This is a size legend that is meant to be
 * sourced inside of components!
 */
const MarginPaddingSize = () => (
  <div className="LegendWrapper">
    <div className="Legend">
      <h4>MarginPaddingSize[0] = "10px"</h4>
      <div className="Size Size0" />
    </div>
    <div className="Legend">
      <h4>MarginPaddingSize[1] = "20px"</h4>
      <div className="Size Size1" />
    </div>
    <div className="Legend">
      <h4>MarginPaddingSize[2] = "40px"</h4>
      <div className="Size Size2" />
    </div>
    <div className="Legend">
      <h4>MarginPaddingSize[3] = "80px"</h4>
      <div className="Size Size3" />
    </div>
    <div className="Legend">
      <h4>MarginPaddingSize[4] = "120px"</h4>
      <div className="Size Size4" />
    </div>
    <div className="Legend">
      <h4>MarginPaddingSize[5] = "240px"</h4>
      <div className="Size Size5" />
    </div>
    <style jsx>{`
      h4 {
        margin-bottom: ${MPSizes[0]};
      }

      .Size {
        background: ${ColorVars.Cinnabar};
        opacity: 0.3;

        &.Size0 {
          width: ${MPSizes[0]};
          height: ${MPSizes[0]};
        }

        &.Size1 {
          width: ${MPSizes[1]};
          height: ${MPSizes[1]};
        }

        &.Size2 {
          width: ${MPSizes[2]};
          height: ${MPSizes[2]};
        }

        &.Size3 {
          width: ${MPSizes[3]};
          height: ${MPSizes[3]};
        }

        &.Size4 {
          width: ${MPSizes[4]};
          height: ${MPSizes[4]};
        }

        &.Size5 {
          width: ${MPSizes[5]};
          height: ${MPSizes[5]};
        }
      }
    `}</style>
  </div>
);

export default MarginPaddingSize;
