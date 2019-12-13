import React from "react";
import { Colors, Typography, MarginPaddingSize } from "../vars";

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalTypography = () => (
  <style jsx global>{`
    * {
      color: ${Colors.Mirage};
      font-family: ${Typography.typePrimaryStack} !important;
      font-size: ${Typography.fontSize[3]};
    }

    h1,
    h2,
    h3,
    h4,
    p {
      margin-top: 0 !important;
      margin-bottom: ${MarginPaddingSize[2]};
    }

    h1 {
      font-weight: ${Typography.typePrimaryWeight.regular};
      font-size: ${Typography.fontSize[0]};
    }

    h2 {
      font-weight: ${Typography.typePrimaryWeight.regular};
      font-size: ${Typography.fontSize[1]};
    }

    h3 {
      font-weight: ${Typography.typePrimaryWeight.medium};
      font-size: ${Typography.fontSize[2]};
    }

    h4 {
      font-weight: ${Typography.typePrimaryWeight.medium};
      font-size: ${Typography.fontSize[3]};
    }

    p {
      font-weight: ${Typography.typePrimaryWeight.normal};
      font-size: ${Typography.fontSize[3]};
    }

    label {
      font-weight: ${Typography.typePrimaryWeight.medium};
      font-size: ${Typography.fontSize[4]};
    }

    small {
      font-weight: ${Typography.typePrimaryWeight.light};
      font-size: ${Typography.fontSize[5]};
    }

    li,
    span,
    p {
      line-height: 1.56;
    }

    html {
      background: inherit;
    }
  `}</style>
);

export default GlobalTypography;
