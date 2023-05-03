import React from "react";

const ViewRecipeOne = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, cooking_method, rating } = recipe;
  console.log(ingredients);
  return (
    <div>
      <div>
        <div class="grid mt-10 w-full   mb-40 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 ">
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg  dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
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
