import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import resume from "../assets/Myresume.pdf";
import pic from "../assets/pic3.png";

const Home = () => {
  
  return (
    <>
      <div id="home">
      
          <section className="xl:w-full h-auto mx-auto grid grid-flow-row md:w-full">
            <div className="w-1/2 text-2xl py-12 px-12 space-y-16 space-x-20 text-white mt-12">
              <motion.h1
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                Hi, I am Rohit kumar
              </motion.h1>

              <Typewriter
                options={{
                  strings: ["A Designer", "A Creater", "A Devloper"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: "text-[#2ee81a] w-1/2",
                }}
              />
            </div>
          </section>

          <section className="xl:w-full h-auto">
            <div className=" w-28 h-8 text-white outline-[#2ee81a] outline hover:outline-2 rounded text-center  font-serif cursor-pointer hover:transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110  duration-700 ... mx-12">
              <button>Hire me</button>
            </div>
            <div className="xl:w-full mx-auto h-auto">
              <div className="text-white  w-28 h-8 rounded text-center outline-[#2ee81a] outline hover:outline-2 font-serif cursor-pointer hover:transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110 duration-700 ... mx-52 mt-[-2rem]">
                <a
                  href={resume}
                  download={resume}
                  className="text-white docration-none"
                >
                  My Resume
                </a>
              </div>
            </div>

            <div className="xl:box-border h-72 w-72 p-4 border-4 ...  float-right mx-32 rounded-full  shadow-lg shadow-green-500/50 .. mt-[-16rem]">
              <img
                src={pic}
                alt="pic"
                className="drop-shadow-lg px-8 overflow-hidden w-full  md:filter-none border-[#2ee81a] md:w-full"
              ></img>
            </div>
          </section>
        </div>
      
    </>
  );
};

export default Home;
