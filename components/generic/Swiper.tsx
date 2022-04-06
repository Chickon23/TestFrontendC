import React, { ReactNode } from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type SliderProps = {
  slidesPerView: number;
  children: ReactNode;
};

const Slider = ({ slidesPerView, children }: SliderProps) => {
  const breakpoints = {
    250: {
      slidesPerView: 1,
      spaceBetween: 64,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: slidesPerView,
      spaceBetween: 32,
    },
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      navigation
      breakpoints={breakpoints}
      loop
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
