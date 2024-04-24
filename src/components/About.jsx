import React, { useEffect, useState } from "react";
import scribble from "../assets/Scribble.png";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function About() {
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
          <div className="animate-ping-slow">About ME!</div>
        </div>
      ) : (
        <>
          <div className="fadeIn flex flex-col justify-center shadow-custom-sm items-center space-y-10 xl:flex-row xl:mx-10 p-3 xl:p-10 my-5">
            <div className="w-[100%] xl:w-[70%] flex flex-col">
              <div className="flex flex-col  xl:flex-row justify-center items-center mb-10 xl:justify-around h-[50%]">
                <div className="w-full xl:w-[60%] shadow-inner shadow-black border-8 rounded-xl border-orange-800 bg-green-800 relative">
                  <div className=" text-3xl underline text-center mb-1">
                    Education
                  </div>
                  <div className=" p-4 text-center text-lg">
                    Shri Guru Gobind Singhji Institute of
                    <span className="text-orange-400 "> Engineering</span> and
                    Technology, Nanded
                    <h1>B.Tech. Computer Science and Engineering </h1>
                    <h1>Final Year CGPA: 8.41/10</h1>
                  </div>
                  <div className=" p-4 text-center text-lg mb-2">
                    Z.P. Aagarkar{" "}
                    <span className="text-orange-400">Junior College</span>,
                    Akola
                    <h1>Higher Secondary Schooling</h1>
                    <h1>percentage: 88.6%</h1>
                  </div>
                  <div className="absolute bottom-0 right-3 flex justify-end items-end">
                    <img src={scribble} alt="" className="w-20 -rotate-12" />
                    <div className=" w-0 md:w-8 h-1 rounded bg-white"></div>
                  </div>
                </div>
                <div className="xl:border-r-2 border-purple w-full xl:w-[30%]  text-2xl text-center xl:text-end pr-2 flex items-center pt-2 ">
                  " While my resume might lack the battle scars of experience,
                  it's brimming with tales of late-night coding sessions,
                  triumphs over tricky algorithms, and the thrill of conquering
                  new technologies. "
                </div>
              </div>
              <div className="h-[50%]  flex flex-col xl:flex-row items-center xl:items-stretch justify-center">
                <div className="flex flex-col w-[60%] xl:flex-row justify-center text-center">
                  <div className="xl:hidden text-xl">Certificates</div>
                  <CertificateContainer cloudUrl="https://res.cloudinary.com/duxvkrrpm/image/upload/v1713966894/certi1_mmwzf5.png" />
                  <CertificateContainer cloudUrl="https://res.cloudinary.com/duxvkrrpm/image/upload/v1713966895/certi2_igzaox.png" />
                  <CertificateContainer cloudUrl="https://res.cloudinary.com/duxvkrrpm/image/upload/v1713966895/certi3_ozjjve.png" />
                  <CertificateContainer cloudUrl="https://res.cloudinary.com/duxvkrrpm/image/upload/v1713966895/certi4_xxv3rx.png" />
                  <CertificateContainer cloudUrl="https://res.cloudinary.com/duxvkrrpm/image/upload/v1713966895/certi5_oiz42c.png" />
                </div>
                <div className="w-full xl:w-[30%] mt-4 xl:mt-0 px-4">
                  <div className="text-center text-xl mb-2 border-b border-purple">
                    <h1>Tech Skills</h1>
                  </div>
                  <div className="grid grid-flow-col grid-rows-4 gap-x-5 gap-y-2 text-center">
                    <SkillContainer skill="C++"/>
                    <SkillContainer skill="SQL"/>
                    <SkillContainer skill="HTML"/>
                    <SkillContainer skill="CSS"/>
                    <SkillContainer skill="Javascript"/>
                    <SkillContainer skill="ReactJS"/>
                    <SkillContainer skill="TailwindCSS"/>
                    <SkillContainer skill="Figma"/>
                    <SkillContainer skill="DSA"/>
                    <SkillContainer skill="DBMS"/>
                    <SkillContainer skill="OS"/>
                    <SkillContainer skill="OOPs"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-red-600 xl:w-[30%] flex justify-end">
              <img
                src="https://res.cloudinary.com/duxvkrrpm/image/upload/v1713966895/AboutPic2_gltnad.jpg"
                alt="My Picture"
                className="w-32 xl:w-64 border rounded-3xl"
              />
              <div className=" flex justify-end flex-col px-2">
                <div>Born on 1st Feb 2002 🐣</div>
                <div>Loves to play 🏀</div>
                <div>Based in Akola 📍</div>
                <div>That's me! ✨</div>
                <a
                  href="https://www.linkedin.com/in/abhichavan14/"
                  target="_blank"
                  className="text-purple"
                >
                  Connect with me!
                </a>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="border border-purple px-1 py-4 lg:px-2 lg:py-5 rounded-2xl animate-bounce-slow cursor-pointer hover:border-white hover:text-purple duration-300">
              <Link to="/projects" className="duration-300 border-b hover:pb-1">
                <FaArrowDownLong className="lg:scale-150" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

const CertificateContainer = ({ cloudUrl }) => {
  return (
    <>
      <div className="w-full xl:w-10  mx-2 xl:opacity-50 hover:w-[50%] hover:opacity-100 hover:shadow-md hover:shadow-white duration-700 text-center overflow-hidden p-1 rounded-xl border border-purple">
        <img
          src={cloudUrl}
          alt="certificate"
          className="h-full object-cover rounded-lg"
        />
      </div>
    </>
  );
};

const SkillContainer = ({ skill }) => {
  return (
    <>
      <div className="border p-1 rounded-lg hover:bg-purple duration-300">
        {skill}
      </div>
    </>
  );
};
