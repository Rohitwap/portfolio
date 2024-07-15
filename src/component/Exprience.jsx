import React, { useEffect } from "react";
import AOS from "aos";

import web from "../assets/rohit.jpg";
import "aos/dist/aos.css";

const Exprience = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div id="exp">
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-10">
          <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
            <p className="text-white text-xl mt-12 font-serif md:text-2xl text-center">
              Exprience
            </p>
            <div className="w-32 h-1 border-b-4 border-green-500 "></div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div data-aos="flip-left" data-aos-delay="200" className="text-white">
            <div className="box-border mx-12 h-72 w-72 p-4 border-4 ... shadow-lg shadow-green-500/50 ..">
              <img src={web} alt="web" className="w-full h-64" />
            </div>
          </div>
            
          <div className="flex justify-center  box-border  h-72 w-1/2 p-4 border-4 ... overflow-hidden md:mx-auto shadow-2xl shadow-white items-center px-6  hover:shadow-2xl hover:shadow-[#2ee81a]">
            <span className="text-white text-xl text-center">
              Marn Stack <span className="text-[#2ee81a] ">Devloper</span>
              <p className="text-white mt-6 text-sm text-balance space-x-4">
                MERN stack developer with 1 Year of hands-on experience in
                developing and maintaining dynamic web applications. Proficient
                in MongoDB, Express.js, React, and Node.js. Adept at working in
                fast-paced environments and committed to continuous learning and
                improvement. Demonstrated ability to collaborate effectively in
                team settings and deliver high-quality, user-friendly solutions.
                Completed training at Karmick Institute in Kolkata, gaining
                practical experience in full-stack development.
              </p>
              <p className="text-white mt-6 text-sm space-x-4">
                Recent Poject Complited
                <ol>
                  <li>Tech Star</li>
                  <li>Doctor Plus</li>
                  <li>Ai (Tailwind Css)</li>
                </ol>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exprience;
