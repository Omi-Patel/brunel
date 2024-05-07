import React from "react";
import { NavLink } from "react-router-dom";

const SecondaryButton = ({navigate, text}) => {
  return (
    <div>
      <NavLink to={navigate}>
      <button className="border-2 border-black/10 p-5 px-8 rounded-full text-lg tracking-wide  transition ease-in-out  hover:bg-black/5 duration-150">
        {text}
      </button>
      </NavLink>
    </div>
  );
};

export default SecondaryButton;
