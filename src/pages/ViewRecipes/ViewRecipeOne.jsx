import React from "react";

const ViewRecipeOne = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, cooking_method, rating } = recipe;
  console.log(ingredients);
  return (
    <div>
      <div>
        <div
          class="grid  mt-10 w-full  
         mb-40 border  border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 "
        >
          <figure
            class=" p-8  bg-white
           border-gray-200 rounded-b-lg md:rounded-lg pb-14  dark:border-gray-700"
          >
            <blockquote class="  mb-4  lg:mb-8 ">
              <h3 class="text-lg text-center font-semibold text-deep-orange-700">
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
            <figcaption class="flex items-center justify-center ">
              <div class="font-medium text-left">
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
            <button className="btn btn-outline btn-warning mt-6 ">
              <div className="card-actions justify-end">
                <div className="badge text-slate-100">
                  Favorite &#10084;&#65039;
                </div>
              </div>
            </button>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeOne;
