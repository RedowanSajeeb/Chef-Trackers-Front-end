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
      <div className='md:mt-5'>
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
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/gallery-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/gallery-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/gallery-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/gallery-3.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};
// /
export default SlidBannar;