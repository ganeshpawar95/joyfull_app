import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Import images
import OfferImageDesktop from "../../../assets/images/offerImageDesktop.jpg";

import { IMAGE_BASE_URL } from "../../../utils/constants";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-2 h-10 w-10 bg-black/50 !flex justify-center items-center z-[999999999] rounded-lg text-center"
      style={{ ...style }}
      onClick={onClick}
    >
      <IoIosArrowBack size={23} className="text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-2 h-10 w-10 bg-black/50 !flex justify-center items-center z-[999999999] rounded-lg text-center"
      style={{ ...style }}
      onClick={onClick}
    >
      <IoIosArrowForward size={23} className="text-white" />
    </div>
  );
}

function DetailsSlider(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const { product_images } = props;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <>
      <div className="slider-container">
        <div className="flex sm:gap-x-2">
          <div className="w-[15%]">
            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              infinite={false}
              className="slider-vertical !hidden sm:!block"
            >
              {[1, 2, 3, 4].map((index) => (
                <div key={index}>
                  <img
                    src={`https://placehold.co/1080x1080?text=${index}`}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full sm:w-[85%]">
            <Slider
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              dots={false}
              arrows={isMobile ? true : false}
              prevArrow={
                <SampleNextArrow
                  className={undefined}
                  style={undefined}
                  onClick={undefined}
                />
              }
              nextArrow={
                <SamplePrevArrow
                  className={undefined}
                  style={undefined}
                  onClick={undefined}
                />
              }
            >
              {[1, 2, 3, 4].map((index) => (
                <div key={index}>
                  <img
                    src={`https://placehold.co/1080x1080?text=${index}`}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
            <div className="mt-2">
              <img
                className="mb-3"
                src={OfferImageDesktop}
                alt="Offer"
                width={1200}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsSlider;
