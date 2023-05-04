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
              src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-cartoon-chef-hiring-cartoon-background-image_186777.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://claudecolliot.fr/wp-content/uploads/2022/08/food-bg-4-1200x699.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.insider.com/56f1a96352bcd066018b81f0?width=1200&format=jpeg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default SlidBannar;