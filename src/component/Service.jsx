import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div id="service">
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
          <p className="text-white text-xl mt-12 font-serif md:text-2xl text-center">
            Service
          </p>
          <div className="w-32 h-1 border-b-4 border-green-500"></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div className="w-1/2 h-52 mx-12 mt-12 shadow-2xl shadow-white items-center px-6 flex flex-wrap hover:shadow-2xl hover:shadow-[#2ee81a]">
          <div data-aos="flip-left" data-aos-delay="200" className="text-white">
            <span className="text-white text-7xl">1 Years Exprience</span>
          </div>
        </div>
        <div className="w-1/3 h-52 mx-12 mt-12 shadow-2xl shadow-white items-center px-6 flex flex-wrap hover:shadow-2xl hover:shadow-[#2ee81a]">
          <div
            data-aos="flip-right"
            data-aos-delay="200"
            className="text-white"
          >
            <span className="text-white text-5xl">FrontEnd Devloper</span>
          </div>
        </div>
        <div className="w-1/2 h-52 mx-12 mt-12 shadow-2xl shadow-white items-center px-32 flex flex-wrap hover:shadow-2xl hover:shadow-[#2ee81a]">
          <div data-aos="zoom-out" data-aos-delay="200" className="text-white">
            <span className="text-white text-5xl">Backend Devloper</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
