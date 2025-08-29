'use client';
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from '../../../../public/Images/slider-image-1.jpeg'
import image2 from '../../../../public/Images/slider-image-2.jpeg'
import image3 from '../../../../public/Images/slider-image-3.jpeg'
import { Autoplay } from 'swiper/modules';

export default function MainSlider() {
  return (
    <div className='w-[80%] my-4 mx-auto flex flex-wrap'>
        <div className='lg:w-3/4 w-full'>
            
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules ={[Autoplay]}
            autoplay ={{delay:3000}}

            >
                <SwiperSlide><Image className='w-full h-[400px] object-cover' src={image1} alt=''></Image></SwiperSlide>
                <SwiperSlide><Image className='w-full h-[400px] object-cover' src={image2} alt=''></Image></SwiperSlide>
                <SwiperSlide><Image className='w-full h-[400px] object-cover' src={image3} alt=''></Image></SwiperSlide>
            </Swiper>
            
        </div>
        <div className='lg:w-1/4 w-full flex flex-wrap'>
            <Image className='lg:w-full w-1/2 h-[200px] object-cover' src={image2} alt=''></Image>
            <Image className='lg:w-full w-1/2 h-[200px] object-cover' src={image3} alt=''></Image>
        </div>
    </div>
  )
}
