import Image from "next/image";
import React from "react";
import Checkbox from "./CheckBox";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container dm-sans padding-container flex flex-col gap-10 py-5 pb-10 md:gap-28 lg:py-20 xl:flex-row mt-[1.5rem] ">
      <div className="order-2 lg:order-1 mx-5 lg:w-5/12">
        <h1 className="font-DuplicateSans duru-sans font-medium text-4xl lg:text-7xl leading-[3rem] lg:leading-[5rem] tracking-tighter break-words ">
          Your Solution For
          <span className="text-[#004bad] underline ml-3">Simplified</span>{" "}
          Payroll Management
        </h1>
        <p className="mt-5 mb-5">
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
          />
          <Button
            type="button"
            title="Book a demo"
            icon="/arrowblue.svg"
            variant="btn_plain_white"
          />
        </div>
      </div>

      <div className="order-1 lg:order-2  lg:w-6/12 ">
        <Image
          src="/payroll-manager-illustration.svg"
          alt="payroll"
          width={1200}
          height={200}
          className="mt-5 pt-0"
        />
      </div>
    </section>
  );
};

export default Hero;
