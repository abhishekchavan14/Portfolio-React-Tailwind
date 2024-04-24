import React, { useState } from "react";
import CustomLink from "./CustomLink";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

export default function Navbar() {
  const [nav, setNav] = useState(true);
  const [rotate, setRotate] = useState(true);

  const handleClick = () => {
    setNav(!nav);
    setRotate(!rotate)
  };
  return (
    <div className="flex justify-between py-5 px-5 md:px-10 items-center shadow-md shadow-purple text-2xl">
      <div className="text-purple text-3xl ">Welcome!</div>
      <div className="hidden md:block">
        <ul className="space-x-16">
          <CustomLink title="Home" path="/" />
          <CustomLink title="About" path="/about" />
          <CustomLink title="Projects" path="/projects" />
          <CustomLink title="Contact" path="/contact-me" />
        </ul>
      </div>
      <button className="block md:hidden border rounded-lg p-1" onClick={handleClick}>
        {nav ? <RiMenu3Fill /> : <RiCloseFill className="animated-spin-once"/>}
      </button>
      <div className={nav?"fixed top-20 -right-[100%] duration-300":"fixed top-20 right-0 duration-300 p-2 border-l w-36 h-screen bg-[#ffffff] text-black z-10"}>
        <ul className="flex flex-col space-y-2">
          <CustomLink title="Home" path="/" isIcon={false}/>
          <CustomLink title="About" path="/about" isIcon={false}/>
          <CustomLink title="Projects" path="/projects" isIcon={false}/>
          <CustomLink title="Contact" path="/contact-me" />
        </ul>
      </div>
    </div>
  );
}
