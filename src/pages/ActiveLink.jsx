import React from 'react';
import { NavLink } from "react-router-dom";
const ActiveLink = ({ to }) => {
    return (
      <div>
        <NavLink
          to={to}
          className={`underline decoration-red-900 ${(isActive) =>
            isActive ? "active" : ""}`}
        ></NavLink>
      </div>
    );
};

export default ActiveLink;