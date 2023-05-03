import React from "react";

const ViewRecipeOne = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, cooking_method, rating } = recipe;
  console.log(ingredients);
  return (
    <div>
      <div>
        <div class="grid mt-10 w-full  
         mb-40 border  border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 ">
          <figure class=" p-8  bg-white
           border-gray-200 rounded-b-lg md:rounded-lg pb-14  dark:border-gray-700">
            <blockquote class=" mb-4  lg:mb-8 ">
              <h3 class="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="my-4">Ingredients:</p>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <div class="font-medium text-left">
                <p>
                  cooking_method <br />
                  {cooking_method}
                </p>
              </div>
            </figcaption>
            <div>
              <h1>rating {rating}</h1>
            </div>
            <button className="btn-primary btn">Favorite button</button>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeOne;
