import React from "react";

const PrimaryButton = ({text}) => {
  return (
    <div>
      <button className="border-2 border-black/10 p-5 px-8 rounded-full bg-black text-white text-lg tracking-wide transition ease-in-out  hover:bg-black/65 duration-150">
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
