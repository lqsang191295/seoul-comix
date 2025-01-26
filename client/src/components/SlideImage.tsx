"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

interface SliderProps {
  data: string[];
}

const SlideImage: React.FC<SliderProps> = ({ data }) => {
  if (!data) return;

  return (
    <section className="w-full h-full">
      <Swiper
        pagination={{
          type: "bullets",
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: function (_, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        autoplay={true}
        loop={true}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {data.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={image}
              alt="Responsive Image"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}

        <div className="absolute flex w-full bottom-1 left-0 right-0 justify-center">
          <div className="swiper-pagination slider-image rounded-xl flex gap-[5] p-2"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default SlideImage;
