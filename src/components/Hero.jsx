import React, { useEffect, useState } from "react";
import lightbulb from "../assets/LightBulb.png";
import glow from "../assets/Glow.png";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import resume from "../assets/Abhishek_chavan_resume.pdf";

export default function Hero() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      {loader ? (
        <div className="absolute h-full w-screen animate-top-to-bottom bg-purple z-20 flex justify-center items-center text-black text-6xl space-x-2">
          <div className="animate-ping-slow">Namaste!</div>
        </div>
      ) : (
        <>
          <div className="block md:flex justify-between">
            <div className="flex justify-center p-2 md:w-1/2 ">
              <div className="fadeIn w-[80%] md:w-[70%]">
                <img
                  src="https://res.cloudinary.com/duxvkrrpm/image/upload/v1713966893/ProfilePic_dw92og.png"
                  alt="Profile Picture"
                  className="z-[-10]"
                />
              </div>
              <div className=" hidden xl:w-[30%] xl:flex">
                <img
                  src={lightbulb}
                  alt=""
                  className="h-[40%] relative -top-2 z-[-5]"
                />
                <img
                  src={glow}
                  alt=""
                  className="h-[40%] xl:relative xl:-left-[8.1rem] xl:top-[4.3rem] duration-2000 animate-pulse-slow scale-150"
                />
              </div>
            </div>
            <div className="fadeIn flex flex-col justify-center py-4 px-5 text-center md:w-1/2 md:px-10">
              <p className="caveat text-3xl md:text-6xl text-shadow md:text-right">
                "Hello There !"
              </p>
              <p className="md:text-right text-3xl md:text-8xl">
                <span>I AM</span>
                <span className="text-purple"> ABHISHEK CHAVAN</span>
              </p>
              <div className="md:text-right md:text-lg text-center text-sm .open-sans">
                " I am a quick and self-learning individual seeking a role at a
                leading organization, to utilize my technical knowledge,
                problem-solving skills, teamwork capabilities and analytical
                thinking for contributing towards company's visions and goals
                and enhance myself. "
              </div>
              <div className="flex flex-col justify-center md:flex-row md:justify-end items-center mt-10">
                <button>
                  <a
                    href={resume}
                    target="_blank"
                    className="hover-text-purple rounded-xl px-3 py-1 mb-5 md:mr-12 md:mb-0 md:text-xl shadow-custom duration-300 flex items-center justify-center"
                  >
                    Resume
                    <FaFileDownload className="ml-2" />
                  </a>
                </button>
                <div className="flex space-x-4 justify-center items-center md:text-xl">
                  <a
                    href="https://github.com/abhishekchavan14"
                    target="_blank"
                    className="hover:text-purple hover:scale-110 duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/abhishek.chavan.14/"
                    target="_blank"
                    className="hover:text-purple hover:scale-110 duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhichavan14/"
                    target="_blank"
                    className="hover:text-purple hover:scale-110 duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:abhishekchavan940@gmail.com"
                    target="_blank"
                    className="hover:text-purple hover:scale-110 duration-300"
                  >
                    <MdOutlineAlternateEmail />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="border border-purple px-1 py-4 lg:px-2 lg:py-5 rounded-2xl animate-bounce-slow cursor-pointer hover:border-white hover:text-purple duration-300">
              <Link to="/about" className="duration-300 border-b hover:pb-1">
                <FaArrowDownLong className="lg:scale-150" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// todo
// learn group and peer and apply on the resume button
