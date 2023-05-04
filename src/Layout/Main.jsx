import React from "react";

import "../../src/index.css";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbarf from "../pages/Navbar/Navbarf";

const Main = () => {
  return (
    <div className="side-container">
     
     <Navbarf></Navbarf>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
