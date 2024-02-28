import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderOne from "../../../src/assets/images/carousel-img/slider5.jpg";
import SliderTwo from "../../../src/assets/images/carousel-img/slide-2.png";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2500}
        autoPlay={true}
      >
        <div className="relative ">
          <img src={SliderOne} alt="" className="w-screen h-[850px]" />
          <div className="absolute top-[5rem] left-4 w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="container">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                {/* <div className="flex flex-col gap-4">
                  <h5 className="uppercase text-lg font-bold mb-3 text-[#1DC1D1]">
                    Explore, Learn, Excel.
                  </h5>
                  <h1 className="text-6xl font-extrabold">
                    Your Passport to Knowledge
                  </h1>
                  <p className="text-lg mb-4 pb-2">
                    In a rapidly evolving world, learning is the key to
                    unlocking new horizons and realizing your full potential.
                    With our innovative platform, we offer you a personalized
                    passport to explore the vast landscape of knowledge, at your
                    own pace and on your terms.
                  </p>
                  <div className="flex gap-4">
                    <button className="h-[3.5rem] w-[9rem] bg-[#1DC1D1]">
                      Read More
                    </button>
                    <button className="h-[3.5rem] w-[9rem] bg-[#fff] text-black">
                      Join Now
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img src={SliderTwo} alt="" className="w-screen h-[850px]" />
          <div className="absolute top-[5rem] left-4 w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="container">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                {/* <div className="flex flex-col gap-4">
                  <h5 className="uppercase text-lg font-bold mb-3 text-[#1DC1D1]">
                    Best Online Courses
                  </h5>
                  <h1 className="text-6xl font-extrabold">
                    Learning Made Personal, Results Made Remarkable.
                  </h1>
                  <p className="text-lg mb-4 pb-2">
                    Together, we'll explore, learn, and grow, all while
                    redefining the way education is experienced.
                  </p>
                  <div className="flex gap-4">
                    <button className="h-[3.5rem] w-[9rem] bg-[#1DC1D1]">
                      Read More
                    </button>
                    <button className="h-[3.5rem] w-[9rem] bg-[#fff] text-black">
                      Join Now
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img src={SliderOne} alt="" className="w-screen h-[850px]" />
          <div className="absolute top-[5rem] left-4 w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="container">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                {/* <div className="flex flex-col gap-4">
                  <h5 className="uppercase text-lg font-bold mb-3 text-[#1DC1D1]">
                    Explore, Learn, Excel.
                  </h5>
                  <h1 className="text-6xl font-extrabold">
                    Your Passport to Knowledge
                  </h1>
                  <p className="text-lg mb-4 pb-2">
                    In a rapidly evolving world, learning is the key to
                    unlocking new horizons and realizing your full potential.
                    With our innovative platform, we offer you a personalized
                    passport to explore the vast landscape of knowledge, at your
                    own pace and on your terms.
                  </p>
                  <div className="flex gap-4">
                    <button className="h-[3.5rem] w-[9rem] bg-[#1DC1D1]">
                      Read More
                    </button>
                    <button className="h-[3.5rem] w-[9rem] bg-[#fff] text-black">
                      Join Now
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
