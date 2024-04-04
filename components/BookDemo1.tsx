import Image from "next/image";
import React from "react";
import Button from "./Button";

const BookDemo1 = () => {
  return (
    <div className="flex flex-col items-center justify-center max-container relative">
      <div className="absolute w-6 h-6 bg-orange-600 rotate-45 moving-div bottom-0 right-[30%]"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center max-container padding-container mt-5 ">
        <div className="">
          <Image src="/bookdemo2.svg" alt="booking2" width={500} height={100} />
        </div>
        <div className="bg-[#fff0f0] p-[3rem] lg:w-[50%] rounded">
          <h3 className="font-bold">Run Payroll effortlessly</h3>{" "}
          <p>
            No payroll expertise? No problem. Our payroll solution is designed
            for small business owners, making it easy to use regardless of
            experience.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
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

export default BookDemo1;
