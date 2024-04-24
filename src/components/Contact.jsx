import React,  { useEffect, useState } from "react";
import ContactIllustration from "../assets/contact.jpg";
import AboutPic3 from "../assets/AboutPic3.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Contact() {
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
          <div className="animate-ping-slow">Connect with Me!</div>
        </div>
      ) : (
        <>
        <div className="w-full text-center text-3xl mt-20 underline ">Contact Me!</div>
          <div className="w-full h-full mt-4 flex justify-center items-center">
            <div className="fadeIn w-[90%] xl:w-[60%] flex group">
              <div className="w-[100%] xl:w-[50%] border flex flex-col p-4 items-center">
                <div className="w-[30%] overflow-hidden rounded-full border-4 border-purple">
                  <img src={AboutPic3} alt="image" />
                </div>
                <div className="w-full text-center my-4">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="outline-none text-black w-[80%] p-2 rounded-xl"
                  />
                </div>
                <div className="w-full text-center my-4">
                  <textarea
                    type="tel"
                    placeholder="Your Message!"
                    className=" resize-none outline-none text-black w-[80%] p-2 rounded-xl"
                  />
                </div>
                <button className="px-5 py-2 border border-purple rounded-xl hover:bg-purple hover:text-black duration-300">
                  send
                </button>

                <div className="flex flex-col justify-center md:flex-row md:justify-end items-center mt-10">
                  <div className="flex space-x-4 justify-center items-center md:text-xl">
                    <a
                      href="https://www.github.com"
                      target="_blank"
                      className="hover:text-purple hover:scale-110 duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      className="hover:text-purple hover:scale-110 duration-300"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      className="hover:text-purple hover:scale-110 duration-300"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="mailto:www.abhishekchavan940@gmail.com"
                      target="_blank"
                      className="hover:text-purple hover:scale-110 duration-300"
                    >
                      <MdOutlineAlternateEmail />
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden xl:block w-[50%]">
                <img src={ContactIllustration} alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
