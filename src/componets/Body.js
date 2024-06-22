import React from "react";

import SideBar from "./SideBar";
import { Outlet } from "react-router";

const Body = () => {
  return (
    // <div className="flex ">
    <div className="flex flex-col lg:flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
