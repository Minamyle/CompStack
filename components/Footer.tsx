import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="border mt-[5rem]">
      <hr />
      <div className="flex flex-col px-[1rem] lg:grid gap-12 py-16 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-container">
        <div className="w-[100%]">
          <h1 className="font-bold">COMPANY</h1>
          <p className="mt-3">Privacy</p>
          <p className="mt-3">Terms of use</p>
          <p className="mt-3">Licence</p>
          <p className="mt-3">Website editor</p>
        </div>
        <div>
          <h1 className="font-bold">REGISTERED ADDRESS</h1>
          <p className="mt-3">8 Godwin Osadebe Street, Akiti Avenue Okota, Lagos, Nigeria.</p>
        </div>
        <div className="w-[100%]">
          <h1 className="font-bold">CONTACT</h1>
          <p className="mt-3">Support@compstack..com</p>
          <p>+2347070986778</p>
        </div>
        <div className="w-[100%]">
          <div className="flex gap-5 ">
            <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
            <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
            <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
          </div>
          <p className="mt-3">2024 compstack Inc.</p>
          <div className="mt-3">
            <Image
              src="/compstack-slim-2.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
