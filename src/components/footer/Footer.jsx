import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black/5 m-5 mt-12 p-10 py-14 rounded-[40px]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">&copy; Talup 2023. All rights reserved</h2>
        <div className="flex justify-center items-center gap-10 underline text-xl">
          <NavLink>Terms & Conditions</NavLink>
          <NavLink>Privacy Policy</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
