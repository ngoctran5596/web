import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container fixed top-0 z-50 h-[65px] bg-[#22185c17] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <a
          href="#about-me"
          className="flex h-auto w-auto flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="hover:animate-slowspin cursor-pointer"
          />

          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-3xl font-semibold text-transparent">
            Châu Ngọc
          </span>
        </a>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
