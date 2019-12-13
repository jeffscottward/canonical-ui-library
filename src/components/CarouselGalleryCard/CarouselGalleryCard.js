import React from "react";
import PropTypes from "prop-types";
import { MarginPaddingSize, Colors } from "../vars";

const CarouselGalleryCard = ({
  className,
  children,
  imgSrc,
  title,
  subText
}) => (
  <figure
    className={"CarouselGalleryCard" + (className ? " " + className : "")}
  >
    <div className="CarouselGalleryCard-header">
      <img src={imgSrc} />
      <div className="CarouselGalleryCard-header-text">
        <h3>{title}</h3>
        <h4>{subText}</h4>
      </div>
    </div>
    <div className="CarouselGalleryCard-content">{children}</div>
    <style jsx>{`
      .CarouselGalleryCard {
        width: 470px;
        height: 450px;
        padding: ${MarginPaddingSize[2]};
        background: ${Colors.White};
        box-shadow: 0 5px 20px 0 rgba(63, 63, 68, 0.1);
        border-radius: 2px;
        border-color: #c4cdd5;
        margin: 0;

        @media (width <= 500px) {
          height: auto;
          max-height: 430px;
          width: auto;
          display: flex;
          flex-direction: column;
        }

        :global(p) {
          line-height: 1.56;
        }

        .CarouselGalleryCard-header {
          display: flex;
          width: 100%;
          padding: 0 ${MarginPaddingSize[1]} ${MarginPaddingSize[1]} 0;

          img {
            display: block;
            margin-right: ${MarginPaddingSize[1]};
            max-width: 120px;
            height: 120px;
          }

          .CarouselGalleryCard-header-text {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            h3 {
              margin-bottom: ${MarginPaddingSize[1]};
            }

            * {
              display: block;

              &:last-child {
                margin-bottom: 0;
                color: #708090;
              }
            }
          }
        }
      }
    `}</style>
  </figure>
);

CarouselGalleryCard.propTypes = {
  /**
   * Nav Elements
   */
  children: PropTypes.object.isRequired
};

export default CarouselGalleryCard;
