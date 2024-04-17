"use client";
import Image from "next/image";
import React from "react";
import Checkbox from "./CheckBox";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container lg:items-center lg:px-[5rem]  flex flex-col gap-10 py-5 pb-10 md:gap-28 lg:py-20 xl:flex-row mt-[1.5rem] pt-[5rem] lg:pt-[6rem]">
      <div className="  lg:mx-[4rem] mx-5 lg:w-7/12">
        <div className=" Duplicate-sans flex flex-row flex-wrap   text-4xl lg:text-4xl leading-[3rem] lg:leading-[3rem] tracking-tighter break-words mt-5 ">
          <span>Your Solution for </span>
          <div className="flex flex-wrap">
            <span></span>
            <div className="text-[#004bad] w-fit  lg:ml-0 relative px-0 overflow-hidden">
              Simplified
              <img
                src="/horizontal.svg"
                alt=""
                className="absolute -bottom-1 lg:-bottom-2 h-5 lg:h-8 w-[100%] left-0"
              />
            </div>
            {/* <span className="text-black">Payroll</span> */}
            <span className="ml-2"> Payroll</span>
            Management
          </div>
        </div>
        <p className="mt-5 text-xl mb-5">
          Streamline your payroll effortlessly with Compstack, <br />
          eliminating repetitive tasks and deadlines.
        </p>
        <div>
          <Checkbox />
        </div>
        <div className=" flex gap-3 mt-12 whitespace-nowrap">
          <Button
            type="button"
            title="Join waitlist"
            icon="/arrow.svg"
            variant="btn_dark_blue"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdKLcXNDxNZUStPkOXVOtv5HoypsI71b3HGYAkPGxWor-DIbA/viewform?embedded=true",
                "_blank"
              )
            }
          />
          <Button
            type="button"
            title="Book a demo"
            icon="/arrowblue.svg"
            variant="btn_plain_white"
          />
        </div>
      </div>

      <div className=" mt-5 lg:w-12/12">
        <Image
          src="/payroll-manager-illustration.svg"
          alt="payroll"
          width={2000}
          height={400}
          className=" lg:w-[fit] pt-0"
        />
      </div>

      <img
        src="/Vector9.png"
        className="absolute top-10 opacity-20 right-[15%] w-8 hidden  h-12 icon border lg:flex "
      />
      <img
        src="/Vector10.png"
        className="absolute top-16 icon opacity-20 left-15 w-12 hidden  h-12 border lg:flex mt-5 "
      />
    </section>
  );
};

export default Hero;
