import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SlidBnar.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SlidBannar = () => {
    return (
      <div>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.shutterstock.com/image-photo/facebook-cover-autumn-background-yellow-260nw-1223596375.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/736x/29/cb/89/29cb89853973a4fa21895b29f4f92cd1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.shutterstock.com/image-photo/facebook-cover-autumn-background-yellow-260nw-1223596375.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default SlidBannar;