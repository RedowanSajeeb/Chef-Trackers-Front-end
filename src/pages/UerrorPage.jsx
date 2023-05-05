import React from 'react';
import { Link } from 'react-router-dom';

const UerrorPage = () => {
    return (
      <div className="mx-auto">
        <img
          className="mx-auto"
          src="https://cdn.dribbble.com/users/605899/screenshots/4144886/pikabu_still_2x.gif?compress=1&resize=400x300"
          alt=""
        />
        <Link  to={"/"} className="btn btn-outline text-center md:ms-96 mb-24 btn-warning mt-4 ">
          <div className="card-actions justify-end">
            <div className="badge text-slate-100">Go back Bro </div>
          </div>
        </Link>
      </div>
    );
};

export default UerrorPage;