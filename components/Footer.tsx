import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="border dm-sans mt-[5rem] ">
      <hr />
      <div className="flex flex-col px-[1rem] lg:grid gap-12 py-16 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-container">
        <div className="w-[100%]">
          <h1 className="font-bold duru-sans">COMPANY</h1>
          <p className="mt-3">Privacy</p>
          <p className="mt-3">Terms of use</p>
          <p className="mt-3">Licence</p>
        </div>
        <div>
          <h1 className="font-bold duru-sans">REGISTERED ADDRESS</h1>
          <p className="mt-3">
            Rue Soumaya Résidence Shehrazade 3, 5ème étage, no22 Palmiers -
            Casablanca
          </p>
        </div>
        <div className="w-[100%]">
          <h1 className="font-bold duru-sans">CONTACT</h1>
          <p className="mt-3">Support@compstack..com</p>
          <p> +212 623-539422</p>
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
