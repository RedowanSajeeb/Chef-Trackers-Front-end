import React from 'react';
import LazyLoad from 'react-lazy-load';

const SlidBannar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/blue-abstract-gradient-wave-wallpaper_53876-108364.jpg?w=1380&t=st=1683289461~exp=1683290061~hmac=f93f24db1a86005222cf677c12b5f97ff7b4bd5a7f70a62098324688d370083a)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="side-container  mt-10 mb-10 ms-3 me-3 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div data-aos="fade-right">
            <h2 className="text-5xl mt-5 mb-4">
              <span className="text-amber-700 fontStyle">Hey</span> Thare,
            </h2>
            <h3 className="fontStyle text-lg mb-5">
              We do not <span>cook ,</span>{" "}
              <span className="text-amber-900">we create your emotions!</span>
            </h3>
            <p className="text-base mb-10">
              "Get inspired and spice up your cooking with our handpicked
              selection of traditional and modern Australian dishes, created by
              the most talented chefs from all over the country!"
            </p>
            <div>
              <button className="btn btn-warning me-2 text-dark fontStyle">
                Our Menu
              </button>
              <button className="btn btn-outline">About Us</button>
            </div>
          </div>
          <div>
            <LazyLoad>
              <img
                className="rounded-full"
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
    </div>
  );
};

export default SlidBannar;