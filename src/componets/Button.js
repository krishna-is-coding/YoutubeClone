import React from "react";

const Button = ({ name }) => {
  return (
    // <div className="px-5 py-2 m-2 bg-gray-500 rounded-lg   text-white   ">
    <div className="px-5 py-2 m-2 bg-gray-500 rounded-lg text-white ">
      {name}
    </div>
  );
};

export default Button;
