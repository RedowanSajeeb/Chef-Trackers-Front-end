import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsFillBookmarkCheckFill, BsFillBookmarkHeartFill } from "react-icons/bs";
const ViewRecipeOne = ({ recipe }) => {
  const alert = useAlert();
  const [favorit, setFavorit] = useState(false);
  const [showFullMethod, setShowFullMethod] = useState(false);

  const { name, ingredients, cooking_method, rating } = recipe;

  const favoriteBtnHandle = () => {
    setFavorit(true);
    alert.success("Recipe added Happy Cooking!");
  };

  const toggleFullMethod = () => {
    setShowFullMethod(!showFullMethod);
  };

  return (
    <div>
      <div className="card w-auto mt-5 glass">
        <div className="card-body">
          <h2 className="card-title fontStyle text-4xl text-amber-700">
            {name}
          </h2>
          <p className="my-4">
            <span className="fontStyle mt-5 text-2xl font-bold ">
              Ingredients:
            </span>
          </p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <figcaption className="flex items-center justify-center ">
            <div className="font-medium text-left">
              <p className="w-auto">
                <span className="fontStyle mt-5 text-2xl font-bold">
                  Cooking method:
                </span>
                <br className="mt-3 mb-5" />
                {showFullMethod
                  ? cooking_method
                  : `${cooking_method.slice(0, 240)}...`}
                <button
                  className="text-deep-orange-700 ml-1"
                  onClick={toggleFullMethod}
                >
                  {showFullMethod ? "See Less" : "See More"}
                </button>
              </p>
            </div>
          </figcaption>
          <div>
            <h1 className="fontStyle mt-5 flex gap-2 items-center text-2xl font-bold text-amber-600">
              rating: <span className="text-font">{rating}</span>
              <Rating
                style={{ maxWidth: 90, color: " #ffe234" }}
                value={Math.round(rating || 0)}
                readOnly
              />
            </h1>
          </div>
          <div className="card-actions">
            {favorit ? (
              <button
                onClick={favoriteBtnHandle}
                className="btn btn-outline btn-warning mt-6"
                disabled
              >
                <div className="card-actions justify-end">
                  <div className="flex items-center ">
                    Favorite{" "}
                    <BsFillBookmarkCheckFill className="ms-1 text-2xl"></BsFillBookmarkCheckFill>
                  </div>
                </div>
              </button>
            ) : (
              <button
                onClick={favoriteBtnHandle}
                className="btn btn-outline  mt-6"
              >
                <div className="card-actions justify-end">
                  <div className=" flex items-center text-slate-100">
                    Favorite{" "}
                    <BsFillBookmarkHeartFill className="ms-1 text-2xl"></BsFillBookmarkHeartFill>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeOne;
