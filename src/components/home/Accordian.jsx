import React from "react";

const Accordian = ({ que, ans }) => {
  return (
    <div>
      <div className="collapse collapse-plus py-4 border-b-2 border-gray-300 rounded-none">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">{que}</div>
        <div className="collapse-content">
          <p className="text-[16px] text-gray-600">{ans}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Accordian;
