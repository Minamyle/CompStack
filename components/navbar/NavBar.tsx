"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constant/index";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center px-[1rem] lg:px-[5%] max-w-[100vw]  relative z-30 py-3">
      <Link href="/">
        <Image
          src="/compstack-slim-2.svg"
          alt="logo"
          width={180}
          height={180}
        />
      </Link>

      <ul className={`h-fit hidden lg:flex gap-12 `}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flex justify-between hover:text-blue-500 cursor-pointer items-center text-gray-50 px-[2rem] font-[500] pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <ul
        className={`h-fit border absolute lg:hidden left-0 bg-white w-[100vw] pb-4 top-[5rem] gap-6  ${
          showMenu ? "flex lg:hidden flex-col " : "hidden"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flex justify-between hover:text-blue-500 cursor-pointer items-center text-gray-50 px-[2rem] cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
            <FaArrowRight />
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Join waitlist"
          icon="/arrow.svg"
          variant="btn_dark_blue"
        />
      </div>

      <Image
        src="/navbar.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block  cursor-pointer lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      />
    </nav>
  );
};

export default NavBar;
