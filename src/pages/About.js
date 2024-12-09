import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper";
 import GlobalHeader from "../components/GlobalHeader";
// import HeroSlider from '../components/HeroSlider';

import Img1 from "../assets/img/aboutSlider/1.png";
import Img2 from "../assets/img/aboutSlider/2.png";
import Img3 from "../assets/img/aboutSlider/3.png";
const images = [Img1, Img2, Img3];

const AboutPage = () => {
  return (
    <div>
      <GlobalHeader />
      {/* <HeroSlider /> */}
      <div className="container mx-auto py-24 flex">
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
            className="h-[500px] lg:h-[600px]"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`About ${index + 1}`}
                  className="object-cover h-full w-full cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right-side about section */}
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            Oak by Signature Group Airport Zone shamshabad Hyderabad, You have a
            choice of superbly done up 45 rooms, which are the ultimate in
            comfort and elegance. The 22 Signature Comfort, 17 Signature
            Superior, 6 Signature Suits are ultimate in comfort and elegance.
          </p>
          <p className="text-lg mb-4">
            Oak by Signature Group Airport Zone shamshabad Hyderabad is the
            right choice for who are searching for a combination of charm, peace
            and quiet, and a convenient position from which to explore
            Shamshabad Airport and Hyderabad. It is well designed, comfortable
            hotel, situated on the Shamshabad International Airport Zone. The
            Signature hotel staff offer an attentive, personalized service and
            are always available to offer any help to guests.
          </p>
          <p>
            Oak by Signature Group is arranged on five floors, with a lift. On
            the ground floor, apart from the reception, there is a comfortable
            lounge where you can sit and have drinks and food, or just read
            books and newels. There is also a splendid terrace, where, you can
            relax and immerge yourself from morning onwards in the atmosphere of
            daily life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
