import Image from "next/image";
import React from "react";
import Button from "./Button";

const BookDemo2 = () => {
  return (
    <div className="flex dm-sans flex-col items-center justify-center max- relative">
      <div className="absolute icon bg-purple-300 opacity-50 -left-20 h-40 rounded-full w-40 top-[50%]"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center pt-[4rem] max-container padding-container mt-5 ">
        <div className="bg-[#fff0f0] mb-4 lg:mb-0 relative flex flex-col items-center justify-center min-h-[300px] lg:w-6/12 p-[3rem] lg:bottom-12 rounded-2xl lg:left-12">
          <h3 className="font-bold duru-sans text-center text-3xl">Ready to run StressFree Payroll?</h3>{" "}
          <p className="text-xl lg:text-center mt-3 text-slate-700">
            Stay updated with the latest legislation and report on time, as our
            tax integration efficiently handles your remittances and reporting
            before deadlines.
          </p>
        </div>

        <div className="lg:w-5/12">
          <Image src="/bookdemo1.svg" alt="booking1" width={500} height={100} className="w-[100%]"/>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          type="button"
          title="Book a demo"
          icon="/arrowblue.svg"
          variant="btn_plain_white"
        />
      </div>
    </div>
  );
};

export default BookDemo2;
