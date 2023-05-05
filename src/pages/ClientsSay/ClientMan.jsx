import React from 'react';
import ClientsSay from './ClientsSay';
import LazyLoad from 'react-lazy-load';

const ClientMan = () => {
    return (
      <div className="md:grid grid-cols-2 items-center">
        <div>
          <LazyLoad>
            <img
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/men-1.png"
              alt=""
            />
          </LazyLoad>
        </div>
        <div>
          <h2 className="text-4xl text-orange-900 mb-2">Our Testimonial</h2>
          <h1 className="text-lg">
            What Clients Say About <span>Chef Trackers</span>
          </h1>
          <div>
            <ClientsSay></ClientsSay>
          </div>
        </div>
      </div>
    );
};

export default ClientMan;