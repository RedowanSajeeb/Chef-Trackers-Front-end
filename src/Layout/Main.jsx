import React from "react";
import Navbar from "../pages/Navbar";
import "../../src/index.css";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
const Main = () => {
  return (
    <div className="side-container">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
