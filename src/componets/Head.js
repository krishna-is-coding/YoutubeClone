import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { You_Tube_Search_Api } from "../utils/constains";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState("");
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    console.log("Api-call-" + searchQuery);
    const data = await fetch(You_Tube_Search_Api + searchQuery);
    // console.log(data);
    const json = await data.json();
    setSuggestion(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid-flow-col p-2 m-0 shadow-lg flex justify-between">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="h-12 w-8 ml-5 cursor-pointer"
        />
        <a href="/">
          <img
            className="h-12 mx-3"
            alt="you-log"
            src="https://indianexpress.com/wp-content/uploads/2017/08/youtube_logo_new-759.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 h-12">
        <div>
          <input
            className=" px-6 w-1/2 sm:w-96 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed  bg-white py-2 px-5 w-[24rem] shadow-lg rounded-lg border border-gray-100  ">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 px-3 hover:bg-gray-100  ">
                  {" "}
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 mr-8">
        <FaUserCircle className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Head;
