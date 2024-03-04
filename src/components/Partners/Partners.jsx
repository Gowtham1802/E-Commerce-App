import React from "react";
import Slider from "react-slick";
import brand1 from "../../../src/assets/images/brand/br-1.png";
import brand2 from "../../../src/assets/images/brand/br-2.png";
import brand3 from "../../../src/assets/images/brand/br-3.png";
import brand4 from "../../../src/assets/images/brand/br-4.png";
import brand5 from "../../../src/assets/images/brand/br-5.png";
import Heading from "../Shared/Heading";

const Partners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <Heading title="Our Partners" />
      <div
        data-aos="zoom-out"
        className="py-8 mt-4  md:block bg-gray-200 dark:bg-white/10"
      >
        <div className="container">
          <Slider {...settings}>
            <img
              src={brand1}
              alt="brand"
              className="w-[80px] h-[80px] object-contain dark:invert"
            />
            <img
              src={brand2}
              alt="brand"
              className="w-[80px] h-[80px] object-contain dark:invert"
            />
            <img
              src={brand3}
              alt="brand"
              className="w-[80px] h-[80px] object-contain dark:invert"
            />
            <img
              src={brand4}
              alt="brand"
              className="w-[80px] h-[80px] object-contain dark:invert"
            />
            <img
              src={brand5}
              alt="brand"
              className="w-[80px] h-[80px] object-contain dark:invert"
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Partners;
