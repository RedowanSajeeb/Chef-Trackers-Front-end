import React, { useContext, useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { AuthContext } from "../../provider/AuthProvider";
import Loding from "../../pages/Loding";

const Chef = () => {
  const { setloding, loding } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloding(true);
        const response = await fetch(
          "https://chef-recipe-hunter-server-side-redowansajeeb.vercel.app/chef"
        );
        const json = await response.json();
        setData(json);
        setTimeout(() => {
          setloding(false);
        }, 1000); // add a delay of 1 second before setting loading to false
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setloding]);

  return (
    <div className="ms-5 me-5 side-container">
      <h1 className="md:mt-28 mt-14  divide-amber-800 text-amber-800 fontStyle text-center md:text-5xl text-4xl font-bold">
        Our <span className="fontStyle">Most</span> popular <br />{" "}
        <span className="mt-7  ">Talented Chefs</span>{" "}
        {/* <hr className="w-72 mt-3  mx-auto" /> */}
      </h1>
      {loding && <Loding />}
      { (
        <div
          className="grid grid-cols-1 gap-x-10 md:grid-cols-3 md:gap-y-7"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {data.map((chef) => (
            <ChefCard key={chef._id} chef={chef}></ChefCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chef;
