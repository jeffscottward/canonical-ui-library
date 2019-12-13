import React from "react";
import PropTypes from "prop-types";
import LinkText from "../LinkText";
import { MarginPaddingSize, Colors } from "../vars";

const CalloutCard = ({ className, img, title, linkText }) => (
  <div className={"CalloutCard" + (className ? " " + className : "")}>
    <img src={img} alt="call out card" />
    <h2>{title}</h2>
    <div className="callout-bottom">
      <LinkText arrow>{linkText}</LinkText>
    </div>
    <style jsx>{`
      .CalloutCard {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 150px;
        max-width: 300px;
        width: 100%;
        height: 100%;
        text-align: center;
        border: 1px solid #eee;
        padding: ${MarginPaddingSize[1]} 0 0 0;
        border-radius: 2px;
        box-shadow: 0 1px 3px 0 rgba(63, 63, 68, 0.15);

        .callout-bottom {
          background: #f9f9f9;
          padding: 12px 0 calc(${MarginPaddingSize[0]}) 0;
          text-align: center;
          width: 100%;
        }

        h2 {
          margin-top: 10px !important;
          margin-bottom: ${MarginPaddingSize[1]};
          color: ${Colors.Royal};
          font-weight: normal;
        }
        img {
          border-radius: 50%;
          width: 70px;
          height: 70px;
          border: 1px solid #e4e4e4;
          margin-bottom: ${MarginPaddingSize[0]};
        }
      }
    `}</style>
  </div>
);

CalloutCard.propTypes = {
  /**
   * Image
   */
  img: PropTypes.string.isRequired,
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Link text
   */
  linkText: PropTypes.string.isRequired,
  /**
   * Link URL
   */
  link: PropTypes.string.isRequired
};

export default CalloutCard;
