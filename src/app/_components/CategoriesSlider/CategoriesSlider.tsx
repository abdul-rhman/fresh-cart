"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function CategoriesSlider({ data }: { data: CategoryType[] }) {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-slate-800">Show popular Categories</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {data.map((category) => (
          <SwiperSlide key={category._id}>
            <Image
              width={120}
              height={120}
              className="w-full h-[150px] object-cover"
              src={category.image}
              alt=""
            />
            <p className="font-bold text-center">{category.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
