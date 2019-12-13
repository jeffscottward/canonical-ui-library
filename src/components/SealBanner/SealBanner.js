import React from "react";
import PropTypes from "prop-types";
import LinkText from "../LinkText";
import { MarginPaddingSize, Typography } from "../vars";
import { sealblue } from "../../asset-inliner";

const SealBanner = ({ className, type, title, date, url }) => (
  <div className={"SealBanner" + (className ? " " + className : "")}>
    <div className={"SealBannerInner " + type}>
      <img className="sealImg" alt={"seal " + "blue"} src={sealblue} />
      <div className="info-box">
        <h1 className="title">{title}</h1>
        <span className="date">{"Verified on " + date}</span>
        <a className="certificate-link" href={url} target="_blank">
          <LinkText>View the Certificate</LinkText>
        </a>
      </div>
    </div>
    {type === "vertical" ? (
      <div className="tail-feather">
        <div className="triangle-topleft" />
        <div className="triangle-topright" />
      </div>
    ) : null}
    <style jsx>{`
      .SealBanner {
        padding: ${MarginPaddingSize[1]};
        max-width: 420px;
        font-family: ${Typography.typePrimaryStack};

        .sealImg {
          padding: ${MarginPaddingSize[1]};
          width: 130px;
          height: 130px;
        }

        .SealBannerInner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #edeff7;

          .info-box {
            padding-right: ${MarginPaddingSize[1]};
          }

          &.vertical {
            flex-direction: column;
            text-align: center;
            max-width: 200px;

            .sealImg {
              width: 160px;
              height: 160px;
            }

            .info-box {
              padding-bottom: ${MarginPaddingSize[1]};
              padding-right: 0;
            }
          }
        }

        .title {
          font-size: 18px;
          margin: 0;
        }

        .date {
          display: block;
          font-size: 14px;
          padding: 10px 0;
        }

        .certificate-link {
          display: block;
        }
      }

      .tail-feather {
        display: flex;
      }

      .triangle-topleft {
        width: 0;
        height: 0;
        border-top: 100px solid #edeff7;
        border-right: 100px solid transparent;
      }

      .triangle-topright {
        width: 0;
        height: 0;
        border-top: 100px solid #edeff7;
        border-left: 100px solid transparent;
      }
    `}</style>
  </div>
);

SealBanner.propTypes = {
  /*
  * SealBanner type
  */
  type: PropTypes.string.isRequired,
  /*
  * SealBanner type
  */
  title: PropTypes.string.isRequired,
  /*
  * SealBanner type
  */
  date: PropTypes.string.isRequired,
  /*
  * SealBanner type
  */
  url: PropTypes.string.isRequired
};

export default SealBanner;
