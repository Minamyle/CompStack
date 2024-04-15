"use client";
import React, { useState } from "react";

const CheckboxGroup = () => {
  return (
    <div className="grid grid-cols-2  gap-5 gap-x-0 lg:w-[60%] mt-6">
      {/* <div className="lg:flex gap-5 lg:mb-5"> */}
      <label className="flex items-center gap-2 ">
        <img src="/tick.svg" />

        <span className="">Time saving</span>
      </label>

      <label className="flex items-center gap-2  ">
        <img src="/tick.svg" />
        <span>Hassle free</span>
      </label>
      {/* </div> */}

      {/* <div className="lg:flex gap-5"> */}
      <label className="flex items-center gap-2  ">
        <img src="/tick.svg" />
        <span>Convinient</span>
      </label>

      <label className="flex items-center  gap-2 ">
        <img src="/tick.svg" />
        <span>Data security</span>
      </label>
      {/* </div> */}
    </div>
  );
};

export default CheckboxGroup;
