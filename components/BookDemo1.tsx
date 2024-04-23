"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const BookDemo1 = () => {
  return (
    <div className="flex flex-col dm-sans items-center justify-center max-container relative">
      {/* <div className="absolute w-6 h-6 bg-orange-600 rotate-45 moving-div bottom-0 right-[30%]"></div> */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-container padding-container mt-5 ">
        <div className="lg:w-6/12 h-fit lg:shadow  lg:p-5">
          <img
            src="/bkdemo1.svg"
            alt="booking2"
            className=" w-[100%] h-auto relative z-10 hidden lg:flex"
          />
          <img
            src="/bkdemo1mv.svg"
            alt="booking2"
            className=" w-[100%]  h-auto relative z-10 lg:hidden flex "
          />
          {/* <img
            src="/bkdemomv2.svg"
            alt="booking2"
            className=" w-[90%] h-auto ml-[10%] relative z-10 lg:hidden flex   left-[15%] top-[2rem]"
          /> */}
        </div>
        <div className="bg-[#fff0f0] lg:min-h-[18.5rem] min-h-[10rem] text-center flex flex-col justify-center lg:p-[3rem] p-[1rem] lg:w-[50%] rounded-r-xl rounded-t-2xl w-[90%] mb-3">
          <h3 className="font-bold duru-sans  text-2xl lg:text-3xl">
            Run Payroll effortlessly
          </h3>{" "}
          <p className="mt-4 text-xl font-[500]">
            No payroll expertise? No problem. Our payroll solution is designed
            for small business owners, making it easy to use regardless of
            experience.
          </p>
        </div>
      </div>
      {/* <div className="flex items-center justify-center mt-16">
        <Button
          type="button"
          title="Book a demo"
          icon="/arrowblue.svg"
          variant="btn_plain_white"
        />
      </div> */}

      <img
        src="/vector2.svg"
        className="absolute -bottom-10 w-8 h-4 right-[50%] icon"
      />
      {/* <img src="/vector3.svg" className="absolute -bottom-10 right-[30%]"/> */}
      <img src="/vector7.svg" className="absolute -bottom-28 -left-64" />
    </div>
  );
};

export default BookDemo1;
