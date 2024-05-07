import React from "react";
import PrimaryButton from "../assests/PrimaryButton";
import SecondaryButton from "../assests/SecondaryButton";

const Navbar = () => {
  return (
    <div className=" border-2 border-black/10  flex justify-between items-center rounded-full p-5">
      <h1 className="text-4xl font-bold tracking-wider pl-5">Brunel</h1>
      <div className="flex justify-between items-center gap-4">
        <SecondaryButton navigate={"/contact"} text={"Get Projects"} />
        <PrimaryButton text={"Onboard Talent"} />
      </div>
    </div>
  );
};

export default Navbar;
