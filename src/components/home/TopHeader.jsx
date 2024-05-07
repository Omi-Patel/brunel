import React from "react";

const TopHeader = ({ first, second, third }) => {
  return (
    <div>
      <div className=" m-5 mt-16 flex flex-col justify-center items-center text-center">
        <h2 className="text-green-600 font-medium success text-3xl ">
          {first}
        </h2>
        <h1 className="mt-2 text-6xl font-medium">
          {second} <br /> <span>{third}</span>
        </h1>
      </div>
    </div>
  );
};

export default TopHeader;
