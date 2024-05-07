// src/TextCarousel.js
import React, { useState } from "react";

const TextCarousel = ({ texts }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex((index + 1) % texts.length);
  };

  return (
    <div className="text-carousel w-[80%] p-4 ">
      <div className="text text-4xl pl-12">{texts[index]}</div>
      <div className="flex mt-10 pl-12">
        {texts.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
              i === index ? "bg-green-500" : "bg-black/10 hover:bg-black/20"
            }`}
            onClick={() => handleClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
