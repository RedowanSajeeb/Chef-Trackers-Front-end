import React from 'react';
import LazyLoad from 'react-lazy-load';

const SlidBannar = () => {
  return (
    <div className="side-container mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className=''>
          <h2 className="text-5xl mb-4">
            <span className="text-amber-700 fontStyle">Hey</span> Thare,
          </h2>
          <h3 className="fontStyle text-lg mb-5">
            We do not <span>cook ,</span>{" "}
            <span className="text-amber-900">we create your emotions!</span>
          </h3>
          <p className="text-base">
            "Get inspired and spice up your cooking with our handpicked
            selection of traditional and modern Australian dishes, created by
            the most talented chefs from all over the country!"
          </p>
        </div>
        <div>
          <LazyLoad>
            <img
              className="rounded-full  "
              src="https://purepng.com/public/uploads/large/purepng.com-chefmanpeoplepersonsmalechef-112152511022675y2z.png"
              alt="photo"
              data-aos="fade-left"
            />
          </LazyLoad>
          {/* <img
            className="rounded-full h-1/2 "
            src="https://starbelly.bslthemes.com/wp-content/uploads/2022/03/girl.png"
            alt="photo"
            data-aos="fade-left"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SlidBannar;