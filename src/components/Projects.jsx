import React, { useEffect, useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
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
          <div className="animate-ping-slow">My Projects!</div>
        </div>
      ) : (
        <>
          <div className="fadeIn">
            <div className="flex flex-col xl:flex xl:flex-row items-center xl:justify-around mx-10 mt-5">
              <div className="w-[70%] xl:w-[35%] xl:mb-10 mt-10 xl:mt-0 relative group overflow-hidden shadow-custom-white rounded-xl duration-500">
                <div>
                  <img src={project1} alt="" />
                </div>
                <div className="absolute bottom-[-100%] right-[-100%] w-full h-full bg-white text-black p-10 opacity-100 duration-1000 group-hover:right-0 group-hover:bottom-0">
                  <p>
                    A classic puzzle where players flip pairs of cards in search
                    of matching pairs. The goal is to uncover all pairs with the
                    fewest attempts or in the shortest time. The game is
                    designed to work seamlessly on both desktop and mobile
                    devices, ensuring an optimal experience for all players.
                  </p>
                  <div className="flex space-x-4 font-semibold">
                    <p className="border border-black px-4 ">HTML</p>
                    <p className="border border-black px-4 ">CSS</p>
                    <p className="border border-black px-4 ">JavaScript</p>
                  </div>
                  <button className="px-4 my-4 bg-purple rounded-lg text-center hover:scale-110 duration-500">
                    <a
                      href="https://abhishekchavan14.github.io/Memory-Game/"
                      target="_blank"
                    >
                      <p className="flex justify-center items-center text-lg">
                        Open
                        <FaExternalLinkAlt className="ml-2 text-sm" />
                      </p>
                    </a>
                  </button>
                </div>
              </div>
              <div className="xl:hidden mb-10 mt-2 text-center flex flex-col justify-center items-center ">
                <p>
                  A classic puzzle where players flip pairs of cards in search
                  of matching pairs. The goal is to uncover all pairs with the
                  fewest attempts or in the shortest time. The game is designed
                  to work seamlessly on both desktop and mobile devices,
                  ensuring an optimal experience for all players.
                </p>
                <div className="flex space-x-4 font-semibold">
                  <p className="border border-white px-2">HTML</p>
                  <p className="border border-white px-2">CSS</p>
                  <p className="border border-white px-2">JavaScript</p>
                </div>
                <button className="px-4 bg-purple rounded-lg text-center mt-2 hover:scale-110 duration-500">
                  <a
                    href="https://abhishekchavan14.github.io/Memory-Game/"
                    target="_blank"
                  >
                    <p className="flex justify-center items-center text-sm">
                      Open
                      <FaExternalLinkAlt className="ml-2 text-sm" />
                    </p>
                  </a>
                </button>
              </div>
              <div className="w-[70%] xl:w-[35%] xl:mb-10 mt-10 xl:mt-0 relative group overflow-hidden shadow-custom-white rounded-xl duration-500">
                <div>
                  <img src={project3} alt="" />
                </div>
                <div className="absolute bottom-[-100%] left-[-100%] w-full h-full bg-white text-black p-10 opacity-100 duration-1000 group-hover:left-0 group-hover:bottom-0">
                  <p>
                    This portfolio is my first Figma project, designed to
                    showcase my UI skills and creativity. The use of neon-themed
                    purple, against a predominantly black and white background,
                    that is visually appealing with interactive elements, such
                    as hover effects and animations. This project has attracted
                    over 3,000 views and nearly 2,000 copies from Figma
                    Community.
                  </p>
                  <div className="flex space-x-4 font-semibold">
                    <p className="border border-black px-4 ">Figma</p>
                  </div>
                  <button className="px-4 my-4 bg-purple rounded-lg hover:scale-110 duration-500">
                    <a
                      href="https://www.figma.com/community/file/1321077505629927349/neon-themed-interactive-portfolio"
                      target="_blank"
                    >
                      <p className="flex justify-center items-center text-lg">
                        Open
                        <FaExternalLinkAlt className="ml-2 text-sm" />
                      </p>
                    </a>
                  </button>
                </div>
              </div>
              <div className="xl:hidden mb-10 mt-2 text-center flex flex-col justify-center items-center ">
                <p>
                  This portfolio is my first Figma project, designed to showcase
                  my UI skills and creativity. The use of neon-themed purple,
                  against a predominantly black and white background, that is
                  visually appealing with interactive elements, such as hover
                  effects and animations. This project has attracted over 3,000
                  views and nearly 2,000 copies from Figma Community.
                </p>
                <div className="flex space-x-4 font-semibold">
                  <p className="border border-white px-2">Figma</p>
                </div>
                <button className="px-4 bg-purple rounded-lg text-center mt-2 hover:scale-110 duration-500">
                  <a
                    href="https://abhishekchavan14.github.io/Memory-Game/"
                    target="_blank"
                  >
                    <p className="flex justify-center items-center text-sm">
                      Open
                      <FaExternalLinkAlt className="ml-2 text-sm" />
                    </p>
                  </a>
                </button>
              </div>
            </div>
            <div className="flex flex-col xl:flex xl:flex-row items-center xl:justify-around mx-10 mt-5">
              <div className="w-[70%] xl:w-[35%] xl:mb-10 mt-10 xl:mt-0 relative group overflow-hidden shadow-custom-white rounded-xl duration-500">
                <div>
                  <img src={project2} alt="" />
                </div>
                <div className="absolute top-[-100%] right-[-100%] w-full h-full bg-white text-black p-10 opacity-100 duration-1000 group-hover:right-0 group-hover:top-0">
                  <p>
                    This application provides a simple and intuitive way to get
                    weather information for any city. With a clean and
                    responsive design, the app allows users to search for a city
                    and instantly retrieve key weather details, such as
                    temperature, humidity, wind speed, and more.
                  </p>
                  <div className="flex space-x-4 font-semibold">
                    <p className="border border-black px-4 ">ReactJS</p>
                    <p className="border border-black px-4 ">TailwindCSS</p>
                    <p className="border border-black px-4 ">API</p>
                  </div>
                  <button className="px-4 my-4 bg-purple rounded-lg hover:scale-110 duration-500">
                    <a
                      href="https://abhishekchavan14.github.io/WeatherApp/"
                      target="_blank"
                    >
                      <p className="flex justify-center items-center text-lg">
                        Open
                        <FaExternalLinkAlt className="ml-2 text-sm" />
                      </p>
                    </a>
                  </button>
                </div>
              </div>
              <div className="xl:hidden mb-10 mt-2 text-center flex flex-col justify-center items-center ">
                <p>
                  This application provides a simple and intuitive way to get
                  weather information for any city. With a clean and responsive
                  design, the app allows users to search for a city and
                  instantly retrieve key weather details, such as temperature,
                  humidity, wind speed, and more.
                </p>
                <div className="flex space-x-4 font-semibold">
                  <p className="border border-white px-2 ">ReactJS</p>
                  <p className="border border-white px-2 ">TailwindCSS</p>
                  <p className="border border-white px-2 ">API</p>
                </div>
                <button className="px-4 bg-purple rounded-lg text-center mt-2 hover:scale-110 duration-500">
                  <a
                    href="https://abhishekchavan14.github.io/Memory-Game/"
                    target="_blank"
                  >
                    <p className="flex justify-center items-center text-sm">
                      Open
                      <FaExternalLinkAlt className="ml-2 text-sm" />
                    </p>
                  </a>
                </button>
              </div>
              <div className="w-[70%] xl:w-[35%] xl:mb-10 mt-10 xl:mt-0 relative group overflow-hidden shadow-custom-white rounded-xl duration-500 ">
                <div>
                  <img src={project4} alt="" />
                </div>
                <div className="absolute top-[-100%] left-[-100%] w-full h-full bg-white text-black p-10 opacity-100 duration-1000 group-hover:left-0 group-hover:top-0">
                  <p>
                    This application, allows authenticated users to review
                    movies, engage in discussions, and rate or react to other
                    users' reviews. The inclusion of Screenpal, a chatbot, for
                    personalized recommendations, and senitmental analysis on
                    comments, adds an innovative twist to the traditional movie
                    review platform.
                  </p>
                  <div className="flex flex-wrap space-x-4 font-semibold">
                    <p className="border border-black px-4 m-1">MongoDB</p>
                    <p className="border border-black px-4 m-1">ExpressJS</p>
                    <p className="border border-black px-4 m-1">ReactJS</p>
                    <p className="border border-black px-4 m-1">NodeJS</p>
                    <p className="border border-black px-4 m-1">TailwindCSS</p>
                    <p className="border border-black px-4 m-1">AI</p>
                    <p className="border border-black px-4 m-1">Cloudinary</p>
                  </div>
                  <button className="px-4 my-4 bg-purple rounded-lg hover:scale-110 duration-500">
                    <a
                      href="https://github.com/abhishekchavan14/PopcornPal---Movie-Review-System"
                      target="_blank"
                    >
                      <p className="flex justify-center items-center text-lg">
                        Open
                        <FaExternalLinkAlt className="ml-2 text-sm" />
                      </p>
                    </a>
                  </button>
                </div>
              </div>
              <div className="xl:hidden mb-10 mt-2 text-center flex flex-col justify-center items-center ">
                <p>
                  This application, allows authenticated users to review movies,
                  engage in discussions, and rate or react to other users'
                  reviews. The inclusion of Screenpal, a chatbot, for
                  personalized recommendations, and senitmental analysis on
                  comments, adds an innovative twist to the traditional movie
                  review platform.
                </p>
                <div className="flex flex-wrap space-x-4 font-semibold">
                  <p className="border border-white px-2 m-1">MongoDB</p>
                  <p className="border border-white px-2 m-1">ExpressJS</p>
                  <p className="border border-white px-2 m-1">AI</p>
                  <p className="border border-white px-2 m-1">NodeJS</p>
                  <p className="border border-white px-2 m-1">TailwindCSS</p>
                  <p className="border border-white px-2 m-1">ReactJS</p>
                  <p className="border border-white px-2 m-1">Cloudinary</p>
                </div>
                <button className="px-4 bg-purple rounded-lg text-center mt-2 hover:scale-110 duration-500">
                  <a
                    href="https://github.com/abhishekchavan14/PopcornPal---Movie-Review-System"
                    target="_blank"
                  >
                    <p className="flex justify-center items-center text-sm">
                      Open
                      <FaExternalLinkAlt className="ml-2 text-sm" />
                    </p>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="border border-purple px-1 py-4 lg:px-2 lg:py-5 rounded-2xl animate-bounce-slow cursor-pointer hover:border-white hover:text-purple duration-300">
              <Link
                to="/contact-me"
                className="duration-300 border-b hover:pb-1"
              >
                <FaArrowDownLong className="lg:scale-150" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
