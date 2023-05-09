import React from "react";

const WeAreDoing = () => {
  return (
    <div className="side-container  md:mt-28 mt-10 ms-3 me-3">
      <div className="md:flex ">
        <div data-aos="fade-right">
          <img
            className=" mb-10 rounded-lg Right-to-left md:ms-28 h-full"
            src="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2021/04/18050226/Sky-Garden.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div className="md:ms-48">
            <h1 className="md:text-5xl text-4xl   font-bold mb-14">
              We are doing more than you{" "}
              <span className="text-amber-700 mt-10 fontStyle">
                expect <hr className="w-28 ms-60  " />
              </span>
            </h1>
            <div className="flex">
              <h1 className="text-font text-6xl me-5 text-amber-700 ">01</h1>
              <div>
                <h1 className="mb-4 font-bold text-2xl">
                  We are located in the city center
                </h1>
                <p className="text-gray-500">
                  {" "}
                  Being located in the city center offers convenient access to
                  local attractions, shopping, and dining options. It also
                  provides easy transportation access to other parts of the
                  city, making it a desirable location for visitors.
                </p>
              </div>
            </div>
          </div>
          <div className="md:ms-48">
            <div className="flex mt-14">
              <h1 className="text-font text-6xl me-5 text-amber-700 ">02</h1>
              <div>
                <h1 className="mb-4 font-bold text-2xl">
                  Fresh, organic ingredients
                </h1>
                <p className="text-gray-500">
                  {" "}
                  Fresh, organic ingredients are natural and free of harmful
                  chemicals, providing optimal nutrition and flavor. They are
                  often preferred by health-conscious individuals and are used
                  in many recipes to create delicious and wholesome meals.
                </p>
              </div>
            </div>
          </div>
          <div className="md:ms-48 mt-14">
            <div className="flex">
              <h1 className="text-font text-6xl me-5 text-amber-700 ">03</h1>
              <div>
                <h1 className="mb-4 font-bold text-2xl">Own fast delivery</h1>
                <p className="text-gray-500">
                  {" "}
                  Fast delivery is a convenient and efficient service that
                  provides customers with their orders in a timely manner. It is
                  often appreciated for its convenience, especially for
                  time-sensitive purchases. Companies that offer fast delivery
                  can gain a competitive advantage in the marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreDoing;
