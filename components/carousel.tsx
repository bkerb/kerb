"use client";

import { Children } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export const Carousel = ({
  children,
  slidesPerView,
  spaceBetween,
}: {
  children: React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
}) => {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        navigation={{
          nextEl: ".test-swiper-button-next",
          prevEl: ".test-swiper-button-prev",
        }}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="max-w-full relative"
      >
        {Children.map(children, (child, i) => {
          return <SwiperSlide key={i}>{child}</SwiperSlide>;
        })}
      </Swiper>
      <button className="hover:shadow-md hover:scale-105 transition-all test-swiper-button-prev absolute -left-16 top-1/2 -translate-y-1/2 rounded-full bg-background shadow">
        <ChevronLeft strokeWidth={1} className="w-12 h-12 p-2" />
      </button>
      <button className="hover:shadow-md hover:scale-105 transition-all test-swiper-button-next absolute -right-16 top-1/2 -translate-y-1/2 rounded-full bg-background shadow">
        <ChevronRight strokeWidth={1} className="w-12 h-12 p-2" />
      </button>
    </>
  );
};
