import React from 'react';

const ChefCard = ({chef}) => {
    const { picture, name, years_of_experience, number_of_recipes, likes } =
      chef;
    console.log(chef);
    return (
      <div className="md:mb-20">
        <div className=" md:mt-20 card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="chef" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h4>Experience : {years_of_experience} Years</h4>
            <h5>Numbers of recipes : {number_of_recipes}</h5>
            <h5>Likes: {likes}</h5>
            <button className="btn btn-outline btn-warning ">
              <div className="card-actions justify-end">
                <div className="badge text-slate-100">View Recipes</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
};

export default ChefCard;