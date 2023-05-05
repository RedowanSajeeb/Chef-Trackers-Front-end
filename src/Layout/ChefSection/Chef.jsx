import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://chef-recipe-hunter-server-side-redowansajeeb.vercel.app/chef"
          );
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);


  return (
    <div className="grid grid-cols-1  ms-5 me-5 md:grid-cols-3 md:gap-y-7">
      {data.map((chef) => (
        <ChefCard key={chef._id} chef={chef}></ChefCard>
      ))}
    </div>
  );
};

export default Chef;
