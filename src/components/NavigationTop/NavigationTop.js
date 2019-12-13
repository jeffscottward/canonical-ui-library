import React from "react";
import PropTypes from "prop-types";
import { MarginPaddingSize } from "../vars";
import LayoutWrapper from "../LayoutWrapper";
import Logo from "../Logo";

const NavigationTop = ({ className, children }) => (
  <React.Fragment>
    <header className={"NavigationTop" + (className ? " " + className : "")}>
      <LayoutWrapper>
        <nav>
          <div className="nav-left">
            <Logo height="40px" />
          </div>
          <div className="nav-right">
            <ul className="nav-items">{children}</ul>
          </div>
        </nav>
      </LayoutWrapper>
      <style jsx>{`
        .NavigationTop {
          display: flex;
          height: 100px;
          border-bottom: 1px solid #e4e4e4;
          background-image: linear-gradient(to bottom, #f8f8f8, #ffffff);

          nav {
            display: flex;
            justify-content: space-between;
          }

          .nav-right {
            text-align: right;
          }

          .nav-items {
            display: flex;
            height: 100%;

            > :global(*) {
              padding: 0 ${MarginPaddingSize[1]};
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              &:last-child {
                padding-right: 0;
              }
            }
          }
        }
      `}</style>
    </header>
  </React.Fragment>
);

NavigationTop.propTypes = {
  /**
   * Nav Elements
   */
  children: PropTypes.array.isRequired
};

export default NavigationTop;
