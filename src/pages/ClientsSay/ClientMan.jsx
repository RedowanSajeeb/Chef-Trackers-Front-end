import React from 'react';
import ClientsSay from './ClientsSay';
import LazyLoad from 'react-lazy-load';

const ClientMan = () => {
    return (
      <div className=" sm:mt-48 md:grid grid-cols-2   items-center">
        <div data-aos="fade-up-right">
          <LazyLoad>
            <img
              className=""
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/men-1.png"
              alt=""
            />
          </LazyLoad>
        </div>
        <div data-aos="fade-up-left">
          <h2 className="text-amber-700 md:mt-28 text-font text-7xl">
            Our Testimonial
          </h2>
          <h1 className="text-lg fontStyle ">
            What{" "}
            <span className="fontStyle text-4xl text-amber-700">
              Clients Say
            </span>{" "}
            About{" "}
            <span className="text-amber-900 fontStyle">Chef Trackers</span>
          </h1>
          <div>
            <ClientsSay></ClientsSay>
          </div>
        </div>
      </div>
    );
};

export default ClientMan;