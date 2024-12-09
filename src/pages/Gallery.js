import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';


import Header from '../components/Header';

import HeroSlider from '../components/HeroSlider';
import room1Img1 from '../assets/img/gallSlider/1.png';
import room1Img2 from '../assets/img/gallSlider/2.png';
import room1Img3 from '../assets/img/gallSlider/3.png';

import room2Img1 from '../assets/img/gallSlider/4.png';
import room2Img2 from '../assets/img/gallSlider/5.png';
import room2Img3 from '../assets/img/gallSlider/6.png';

import room3Img1 from '../assets/img/gallSlider/7.png';
import room3Img2 from '../assets/img/gallSlider/8.png';
import room3Img3 from '../assets/img/gallSlider/9.png';

const Gallery = () => {
  return (
    <div>
    
      <Header />
      <HeroSlider />
      <div className="container mx-auto py-12">
        {/* Suit Rooms */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Suit Rooms</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="h-[400px] lg:h-[500px]"
          >
            <SwiperSlide>
              <img src={room1Img1} alt="Suite Room 1" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room1Img2} alt="Suite Room 2" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room1Img3} alt="Suite Room 3" className="object-cover h-full w-full" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Queen Rooms */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Queen Rooms</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="h-[400px] lg:h-[500px]"
          >
            <SwiperSlide>
              <img src={room2Img1} alt="Queen Room 1" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room2Img2} alt="Queen Room 2" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room2Img3} alt="Queen Room 3" className="object-cover h-full w-full" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Superior Rooms */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Superior Rooms</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="h-[400px] lg:h-[500px]"
          >
            <SwiperSlide>
              <img src={room3Img1} alt="Superior Room 1" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room3Img2} alt="Superior Room 2" className="object-cover h-full w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room3Img3} alt="Superior Room 3" className="object-cover h-full w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
