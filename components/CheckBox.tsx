"use client";
import React, { useState } from "react";

const CheckboxGroup = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (name: string) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: !prevState[name as keyof typeof prevState],
    }));
  };

  return (
    <div className="grid grid-cols-2  gap-5 gap-y-10 mt-6">
      {/* <div className="lg:flex gap-5 lg:mb-5"> */}
      <label className="flex items-center space-x-6 ">
        <input
          type="checkbox"
          name="checkbox1"
          onChange={() => handleCheckboxChange("checkbox1")}
          className="h-5 w-5 rounded-12 styled-checkbox border-gray-300 focus:ring-gray-400 checked:bg-black checked:border-transparent"
        />
        <span className="">Time saving</span>
      </label>

      <label className="flex items-center space-x-6 ">
        <input
          type="checkbox"
          name="checkbox2"
          onChange={() => handleCheckboxChange("checkbox2")}
          className="h-5 styled-checkbox w-5 rounded-full border-gray-300 focus:ring-gray-400 checked:bg-black checked:border-transparent"
        />
        <span>Hassle free</span>
      </label>
      {/* </div> */}

      {/* <div className="lg:flex gap-5"> */}
      <label className="flex items-center space-x-6 ">
        <input
          type="checkbox"
          name="checkbox3"
          onChange={() => handleCheckboxChange("checkbox3")}
          className="h-5 w-5 styled-checkbox rounded-full border-gray-300 focus:ring-gray-400 checked:bg-black checked:border-transparent"
        />
        <span>Convinient</span>
      </label>

      <label className="flex items-center space-x-6 ">
        <input
          type="checkbox"
          name="checkbox4"
          onChange={() => handleCheckboxChange("checkbox4")}
          className="h-5 w-5 styled-checkbox rounded-full border-gray-300 focus:ring-gray-400 checked:bg-black checked:border-transparent"
        />
        <span>Data security</span>
      </label>
      {/* </div> */}
    </div>
  );
};

export default CheckboxGroup;
