import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper";

import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Img1 from "../assets/img/restaSlider/1.jpg"; // Ensure this path is correct
import Img2 from "../assets/img/restaSlider/2.png"; // Ensure this path is correct
import Img3 from "../assets/img/restaSlider/3.jpg"; // Ensure this path is correct

const images = [Img1, Img2, Img3];

const SampleRoom = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <div className="container mx-auto py-12 flex">
        {/* Left-side image section */}
        <div className="w-1/2 pr-8 relative">
          <Swiper
            modules={[EffectFade, Autoplay, Navigation]}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true} // Enable navigation
            className="h-[500px] lg:h-[500px]"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Restaurant ${index + 1}`}
                  className="object-cover h-full w-full cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right-side about section */}
        <div className="w-1/2 pl-8">
          <div className="text-3xl font-bold mb-4 text-primary">Our ROoom</div>
          <p className="text-lg mb-4 leading-relaxed">
            Welcome to our restaurant! We offer a variety of delicious dishes
            made from the freshest ingredients. Our mission is to provide an
            exceptional dining experience for all our guests.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Whether you are here for a casual meal or a special occasion, we
            strive to make your visit memorable. Our friendly staff is here to
            assist you with any special requests or dietary needs.
          </p>
          <button className="text-white bg-primary py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
            View Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleRoom;
