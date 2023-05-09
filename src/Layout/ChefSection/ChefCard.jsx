import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const { picture, name, years_of_experience, short_bio , number_of_recipes, likes ,_id } =
      chef;
    // console.log(chef);
    return (
      <div className=" mt-16 md:mt-20">
        <div className="card h-full  w-auto glass">
          <figure>
            <LazyLoad>
              <img
                className="h-96   hover:opacity-40 transition duration-300 ease-in-out hover:scale-110"
                src={picture}
                alt="car!"
              />
            </LazyLoad>
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-4 ">{name}</h2>
            <h4>
              <span className="font-bold">Experience :</span>{" "}
              <span className="fontStyle"> {years_of_experience} Years</span>
            </h4>
            <h5>
              <span className="font-bold">Numbers of recipes :</span>{" "}
              <span className="fontStyle">{number_of_recipes}</span>
            </h5>
            <h5>
              <span className="font-bold">Likes:</span>{" "}
              <span className="fontStyle">{likes}</span>
            </h5>
            <p className="mt-4">{short_bio}</p>
            <div className="card-actions justify-end">
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
      </div>
    );
};

export default ChefCard;