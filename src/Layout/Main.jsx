import React from "react";
import Navbar from "../pages/Navbar";
import "../../src/index.css";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="side-container">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
