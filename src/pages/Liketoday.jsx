import React from 'react';

const Liketoday = () => {
    return (
      <div className="side-container ms-5 me-5 mt-14 md:mt-24">
        <h1 className=" text-amber-800 text-5xl md:mb-10 mb-5 font-bold  fontStyle">
          What do you like today?
        </h1>
        <p className="text-gray-600 ">
          Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
        </p>
        <div className="md:grid grid-cols-2 gap-5 md:mt-16 mt-10  ">
          <div className="bg-gray-50  p-5 mt-5 ">
            <h3 className="text-2xl font-bold mb-3"> Starters</h3>
            <p className="text-gray-600">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo
              modi
            </p>
          </div>
          <div className="bg-gray-50 p-5 mt-5 ">
            <h3 className="text-2xl font-bold mb-3">Main dishes</h3>
            <p className="text-gray-600">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo
              modi
            </p>
          </div>
          <div className="bg-gray-50 p-5 mt-5">
            <h3 className="text-2xl font-bold mb-3">Drink</h3>
            <p className="text-gray-600">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo
              modi
            </p>
          </div>
          <div className="bg-gray-50 p-5 mt-5 ">
            <h3 className="text-2xl font-bold mb-3">Desserts</h3>
            <p className="text-gray-600">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo
              modi
            </p>
          </div>
        </div>
      </div>
    );
};

export default Liketoday;