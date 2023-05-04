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
                src="https://lh3.googleusercontent.com/-2ABrXEcBGD3A7dr7y7tTKngvPSzeQqm9jPhTpMx8NgfP1KvjSfbbPY1UWl5hoPb9wWQ9nhFr4gbnfSKUeWdV3_880MdmV-rwtNkbSQG"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text" data-swiper-parallax="-100">
              <img
                src="https://lh3.googleusercontent.com/L15utYktdQ2JmaJ6VOIlUMnbfm8TPFtTh6z2sfsOpZQPTFMGdJO-H9_QWAvSZfEH8g4UMKv7-6V3REijypaf38fJ6CFTiOh4qImqbWrT"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text" data-swiper-parallax="-100">
              <img className='h-full'
                src="https://lh3.googleusercontent.com/gz2PkksBRxXPgP2qzWOzg0ZSvPV1Zy8icFUEIaZAvBUsUAaNxbbjJm-HmDIHr7YmgdIaLdqX4RKZj0Z_Dd0CrxYnbvTEJX7TChNAgj_I"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default ClientsSay;