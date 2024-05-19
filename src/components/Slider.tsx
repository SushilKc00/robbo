"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";

export interface SliderProps {
  Images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

function Slider({ Images }: SliderProps) {
  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={15}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={2}
        speed={600}
        autoplay={{
          delay: 1000,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 30,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="w-full mx-auto"
      >
        {Images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[4/5]">
              <Image src={item.src} alt="barbe" fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 
      <div className="absolute -top-16 left-0 z-20 w-full flex justify-end">
        <div className="flex gap-72 items-center w-[70%]">
          <div>
            <h2 className="text-white text-[1.2rem]">Lunar Palace: </h2>
            <span className="text-white">(ft. Kanye west)</span>
          </div>
          <div>
            <h2 className="text-white text-[1.2rem]">Lunar Palace: </h2>
            <span className="text-white">(ft. Kanye west)</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Slider;
