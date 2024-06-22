import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOPen = useSelector((store) => store.app.isMenuOPen);
  if (!isMenuOPen) return null;
  return (
    // <div className="p-5 shadow-lg w-48 ">
    <div className="p-5 shadow-lg w-48 lg:w-64">
      <h1 className="font-medium">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
      </h1>
      <h1 className="font-bold">SubScription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold">Watch_Later</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default SideBar;
