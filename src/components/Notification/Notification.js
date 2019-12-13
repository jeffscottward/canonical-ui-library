import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import LinkText from "../LinkText";

const iconReducer = type => {
  switch (type) {
    case "success":
      return <Icon type="icon-success" size="small" />;
    case "wait":
      return <Icon type="icon-wait" size="small" />;
    case "alert":
      return <Icon type="icon-alert" size="small" />;
    case "error":
      return <Icon type="icon-error" size="small" />;
    case "warning":
      return <Icon type="icon-warning" size="small" />;
  }
};

const Notification = ({ className, type, headline, subheader, link }) => (
  <div className={"Notification" + (className ? " " + className : "")}>
    <div className="icon-area">{iconReducer(type)}</div>
    <div className="info-area">
      <div className="info-area-top">
        <h4>{headline}</h4>
      </div>
      <div className="info-area-bottom">
        <h5>{subheader}</h5>
        &nbsp;
        <LinkText>{link}</LinkText>
      </div>
    </div>
    <style jsx>{`
      .Notification {
        display: flex;
        width: 674px;
        height: 77px;
        border-radius: 2px;
        background-color: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(63, 63, 68, 0.15),
          0 0 0 1px rgba(63, 63, 68, 0.05);
      }

      .icon-area {
        margin: 20px;
      }

      .info-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      h4,
      h5 {
        display: inline-block;
        margin: 0;
        font-family: sans-serif;
      }

      h4 {
        font-size: 16px;
        font-weight: 500;
        color: #1e2837;
      }

      h5 {
        font-size: 14px;
        font-weight: normal;
        color: #708090;
      }
    `}</style>
  </div>
);

Notification.propTypes = {
  /**
   * Type
   */
  type: PropTypes.oneOf(["success", "wait", "alert", "error", "warning"])
    .isRequired,
  /**
   * Headline
   */
  headline: PropTypes.string.isRequired,
  /**
   * SubHeader
   */
  subheader: PropTypes.string,
  /**
   * Link
   */
  subheader: PropTypes.string
};

export default Notification;
