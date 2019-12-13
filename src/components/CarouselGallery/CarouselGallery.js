import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { MarginPaddingSize, Colors } from "../vars";

import Carousel from "nuka-carousel";

const CarouselGallery = ({ className, children, type, label, bottomLabel }) => (
  <div className={"CarouselGallery" + (className ? " " + className : "")}>
    {type === "A" ? (
      <React.Fragment>
        <div className="CarouselGallery-offset-bg" />
        <Carousel
          slidesToShow={window.innerWidth >= 500 ? 3 : 1}
          heightMode="first"
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
          renderTopLeftControls={({ previousSlide, nextSlide }) => (
            <React.Fragment>
              <Button
                bgColor={"rgba(215, 214, 215, 1.0)"}
                type="left"
                onClick={previousSlide}
                size={MarginPaddingSize[3]}
                styleOverRideRule={"override-1"}
                styleOverRide={`
                    .override-1 { 
                      border: none !important;
                    }
                  `}
              />
              <Button
                bgColor={"rgba(215, 214, 215, 1.0)"}
                type="right"
                onClick={nextSlide}
                size={MarginPaddingSize[3]}
                styleOverRideRule={"override-2"}
                styleOverRide={`
                    .override-2 {
                      border: none !important;
                      border-left: 1px solid ${Colors.Alabaster} !important;
                    }
                  `}
              />
              <h3 className="CarouselGallery-label">{label}</h3>
            </React.Fragment>
          )}
          renderBottomLeftControls={() => (
            <div className="CarouselGallery-bottomLabel">{bottomLabel}</div>
          )}
        >
          {children}
        </Carousel>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Carousel
          slidesToShow={3}
          heightMode="first"
          cellSpacing={10}
          renderCenterLeftControls={({ previousSlide }) => (
            <Button
              type="left"
              onClick={previousSlide}
              styleOverRideRule={"override-3"}
              styleOverRide={`
                  .override-3 {
                    background-color: white !important;
                  }
                `}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Button
              type="right"
              onClick={nextSlide}
              styleOverRideRule={"override-4"}
              styleOverRide={`
                  .override-4 {
                    background-color: white !important;
                  }
                `}
            />
          )}
          renderBottomCenterControls={() => null}
        >
          {children}
        </Carousel>
      </React.Fragment>
    )}
    <style jsx>{`
      .CarouselGallery {
        padding: ${type === "A" ? MarginPaddingSize[3] + " 0 0 0" : ""};
        position: relative;
        overflow: hidden;

        .CarouselGallery-offset-bg {
          background: #eeeeee;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: calc(${MarginPaddingSize[3]} * 3);

          @media (width <= 500px) {
            left: 0;
          }
        }

        :global(.slider-control-topleft) {
          display: flex;
          top: ${type === "A"
            ? "calc(-2px + " + "-" + MarginPaddingSize[3] + ") !important"
            : ""};
          left: ${type === "A"
            ? "calc( " + MarginPaddingSize[3] + " * 3) !important"
            : ""};

          @media (width <= 500px) {
            left: 0 !important;
          }
        }

        :global(.slider-control-bottomleft) {
          left: ${type === "A"
            ? "calc( " + MarginPaddingSize[3] + " * 3) !important"
            : ""};

          @media (width <= 500px) {
            left: 0 !important;
          }
        }

        :global(.slider-frame) {
          overflow: visible !important;
        }

        .CarouselGallery-label,
        .CarouselGallery-bottomLabel {
          display: inline-block;
          margin: 0 0 0 ${MarginPaddingSize[2]};
          line-height: ${MarginPaddingSize[3]};
        }
      }
    `}</style>
  </div>
);

CarouselGallery.propTypes = {
  /**
   * Children
   */
  children: PropTypes.array.isRequired
};

export default CarouselGallery;
