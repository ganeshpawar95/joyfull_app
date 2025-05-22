import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";

// Import images
import OfferImageDesktop from "../../../assets/images/offerImageDesktop.jpg";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IMAGE_BASE_URL } from "../../../utils/constants";

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
  const { product_images } = props;
  const [nav1, setNav1] = useState(undefined);
  const [nav2, setNav2] = useState(undefined);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const settings = {
    dots: isMobile ? true : false,
    arrows: isMobile ? true : false,
    asNavFor: nav2,
    prevArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    nextArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="h-4 w-4 bg-brand/35 rounded-full inline-block customDots"></div>
    ),
  };

  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <Row>
        <Col xl={3}>
          <Slider
            className="leftSider !hidden sm:!block"
            asNavFor={nav1}
            ref={sliderRef2}
            slidesToShow={isMobile ? 3 : 3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={!isMobile}
            arrows={false}
            centerMode={true}
            infinite={true}
            centerPadding={isMobile ? "20px" : "100px"}
          >
            {product_images
              //   .sort((a: any, b: any) => a.priority - b.priority)
              .map((item, index) => (
                <div key={index}>
                  <img
                    className="sm:h-[150px] w-full rounded-md"
                    src={IMAGE_BASE_URL + item.images}
                    alt={`Product ${index + 1}`}
                    width={150}
                    height={150}
                  />
                </div>
              ))}
          </Slider>
        </Col>
        <Col xl={9}>
          <Slider {...settings} ref={sliderRef1}>
            {product_images.map((item, index) => (
              <div key={index}>
                <img
                  className="h-full w-full rounded-md"
                  src={IMAGE_BASE_URL + item.images}
                  alt={`Product ${index + 1}`}
                  width={800}
                  height={600}
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
        </Col>
      </Row>
    </div>
  );
}

export default DetailsSlider;
