import React from 'react';

const SlidBannar = () => {
  return (
    <div className="side-container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <h2>
            <span>hey</span> Thare
          </h2>
          <h3>
            We do not <span>cook,</span> we create your emotions!
          </h3>
          <p>
            "Get inspired and spice up your cooking with our handpicked
            selection of traditional and modern Australian dishes, created by
            the most talented chefs from all over the country!"
          </p>
        </div>
        <div>
          <img
            className="rounded-full h-1/2 "
            src="https://starbelly.bslthemes.com/wp-content/uploads/2022/03/girl.png"
            alt="photo"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default SlidBannar;