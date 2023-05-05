import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
 
  CardBody,
  
  Typography,

} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import ViewRecipeOne from './ViewRecipeOne';
const ViewRecipes = () => {
    const {
      name,
      picture,
      short_bio,
      likes,
      number_of_recipes,
      years_of_experience,
      recipes
    } = useLoaderData();
    return (
      <div className="mt-10 side-container">
        <div>
          {/* ------ */}
          <div className="card mb-10 lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img className="h-96" src={picture} alt="Album" />
            </figure>
            <div className="mt-20 ms-10 me-5">
              <h2 className="card-title fontStyle mt-5 text-2xl font-bold text-amber-700">
                {name}
              </h2>
              <p>{short_bio}</p>
              <div className="mt-5">
                <h1 className="fontStyle mt-5 text-2xl font-bold ">
                  {likes} likes
                </h1>
                <h1 className="fontStyle mt-5 text-2xl font-bold ">
                  number of recipes: {number_of_recipes}
                </h1>
                <h1 className="fontStyle mt-5 text-2xl font-bold mb-10 ">
                  years of experience:{years_of_experience}
                </h1>
              </div>
            </div>
          </div>

          <div className=" md:grid grid-cols-3   mt-10 gap-4 mb-40 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 ">
            {recipes.map((recipe, indx) => (
              <ViewRecipeOne key={indx} recipe={recipe}></ViewRecipeOne>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ViewRecipes;