import React from 'react';
import { Link } from 'react-router-dom';

const UerrorPage = () => {
    return (
      <div className="mx-auto">
        <img
          className="mx-auto h-96 mt-40"
          src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
          alt=""
        />
        <Link
          to={"/"}
          className="btn btn-outline text-center md:ms-96 mb-24 btn-warning mt-4 "
        >
          <div className="card-actions justify-end">
            <div className="badge text-slate-100">Go back Bro </div>
          </div>
        </Link>
      </div>
    );
};

export default UerrorPage;