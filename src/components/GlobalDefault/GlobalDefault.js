import React from "react";
import { Colors } from "../vars";

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalDefault = () => (
  <style jsx global>{`
    *,
    *::before,
    *::after {
      box-sizing: border-box !important;
    }

    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    html,
    body {
      height: 100%;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }

    a {
      cursor: pointer;
    }

    figure {
      margin: 0;
    }

    body {
      background: ${Colors.Alabaster};
    }
  `}</style>
);

export default GlobalDefault;
