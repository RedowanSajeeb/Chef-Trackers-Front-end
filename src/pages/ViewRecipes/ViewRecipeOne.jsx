import React, { useState } from "react";

import { useAlert } from "react-alert";
const ViewRecipeOne = ({ recipe }) => {
  const alert = useAlert();
  const [favorit, Setfavorit] = useState(false);
  // console.log(recipe);
  const { name, ingredients, cooking_method, rating } = recipe;
  // console.log(ingredients);

  const favoriteBtnHandel = () => {
    Setfavorit(true);
    alert.success("Recipe added Happy Cooking!");
  };
  return (
    <div>
      <div>
        <div
          className="grid  mt-10 w-full  
         mb-40 border  border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 "
        >
          <figure
            className=" p-8  bg-white
           border-gray-200 rounded-b-lg md:rounded-lg pb-14  dark:border-gray-700"
          >
            <blockquote className="  mb-4  lg:mb-8 ">
              <h3 className="text-lg text-center font-semibold text-deep-orange-700">
                {name}
              </h3>
              <p className="my-4">
                <span className="text-2xl text-deep-orange-700">
                  Ingredients:
                </span>
              </p>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <div className="font-medium text-left">
                <p>
                  <span className="text-2xl text-deep-orange-700 mb-5">
                    Cooking method
                  </span>{" "}
                  <br className="mt-1 mb-5" />
                  {cooking_method}
                </p>
              </div>
            </figcaption>
            <div>
              <h1 className="text-xl mt-3">rating {rating}</h1>
            </div>

            {favorit ? (
              <>
                <button
                  onClick={favoriteBtnHandel}
                  className="btn btn-outline btn-warning mt-6"
                  disabled
                >
                  <div className="card-actions  justify-end">
                    <div className="badge text-slate-100">
                      Favorite &#10084;&#65039;
                    </div>
                  </div>
                </button>
                {}
              </>
            ) : (
              <>
                <button
                  onClick={favoriteBtnHandel}
                  className="btn btn-outline btn-warning mt-6"
                >
                  <div className="card-actions  justify-end">
                    <div className="badge text-slate-100">
                      Favorite &#10084;&#65039;
                    </div>
                  </div>
                </button>
              </>
            )}
          </figure>
        </div>
      </div>
    </div>
  );
};
// -
export default ViewRecipeOne;
