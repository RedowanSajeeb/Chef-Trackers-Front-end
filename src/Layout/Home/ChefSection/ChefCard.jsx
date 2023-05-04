import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const { picture, name, years_of_experience, number_of_recipes, likes ,_id } =
      chef;
    // console.log(chef);
    return (
      <div className="md:mb-20">
        <div className=" md:mt-20  card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img className='w-fit h-96' src={picture} alt="chef" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h4>Experience : {years_of_experience} Years</h4>
            <h5>Numbers of recipes : {number_of_recipes}</h5>
            <h5>Likes: {likes}</h5>
            <Link to={`/chef/${_id}`}>
              <button className="btn btn-outline btn-warning ">
                <div className="card-actions justify-end">
                  <div className="badge text-slate-100">View Recipes</div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ChefCard;