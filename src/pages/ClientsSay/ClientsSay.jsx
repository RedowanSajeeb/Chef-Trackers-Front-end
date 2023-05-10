import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ClientsSay.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
const ClientsSay = () => {
    return (
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#df0000",
            "--swiper-pagination-color": "#df0000",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage: "url()",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="text " data-swiper-parallax="-100">
              <img
                src="https://danivalent.com/wp-content/uploads/2018/11/DANI-VALENT-Cooking-Class-Testimonial-Nicola-B.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text" data-swiper-parallax="-100">
              <img
                src="https://uploads-ssl.webflow.com/5e3de80322b300854230f11f/5ec5dcd02a878549d71d57fe_testimonial-4.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text" data-swiper-parallax="-100">
              <img
                className="h-full"
                src="https://www.vandelaydesign.com/wp-content/uploads/upflow-615x275.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default ClientsSay;