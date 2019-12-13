import React from "react";
import {
  Colors as ColorVars,
  LayoutSizes as LSizes,
  MarginPaddingSize
} from "../vars";

/**
 * This is a size legend that is meant to be
 * sourced inside of components!
 */

const LayoutSizes = () => (
  <div className="LegendWrapper">
    <div className="Legend">
      <h4>LayoutSizes[0] = "320px""</h4>
      <div className="Size Size0" />
    </div>
    <div className="Legend">
      <h4>LayoutSizes[1] = "460px""</h4>
      <div className="Size Size1" />
    </div>
    <div className="Legend">
      <h4>LayoutSizes[2] = "600px""</h4>
      <div className="Size Size2" />
    </div>
    <div className="Legend">
      <h4>LayoutSizes[3] = "960px""</h4>
      <div className="Size Size3" />
    </div>
    <div className="Legend">
      <h4>LayoutSizes[4] = "1200px""</h4>
      <div className="Size Size4" />
    </div>
    <div className="Legend">
      <h4>LayoutSizes[5] = "1440px"</h4>
      <div className="Size Size5" />
    </div>
    <style jsx>{`
      h4 {
        margin-bottom: ${MarginPaddingSize[0]};
      }

      .Size {
        background: ${ColorVars.Cinnabar};
        opacity: 0.3;

        &.Size0 {
          width: ${LSizes[0]};
          height: 20px;
        }

        &.Size1 {
          width: ${LSizes[1]};
          height: 20px;
        }

        &.Size2 {
          width: ${LSizes[2]};
          height: 20px;
        }

        &.Size3 {
          width: ${LSizes[3]};
          height: 20px;
        }

        &.Size4 {
          width: ${LSizes[4]};
          height: 20px;
        }

        &.Size5 {
          width: ${LSizes[5]};
          height: 20px;
        }
      }
    `}</style>
  </div>
);

export default LayoutSizes;
