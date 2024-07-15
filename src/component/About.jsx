import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div id="about">
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
        <p className="text-white text-xl mt-20 font-serif md:text-2xl text-center">
          About
        </p>
        <div className="w-32 h-1 border-b-4 border-green-500"></div>
      </div>
      <div
          data-aos="fade-zoom-out"
          data-aos-delay="200"
          className="text-black"
        >
      <div className="w-full h-auto flex justify-evenly mx-auto">
        
        <div className="box-border w-1/2 h-1/2 border-4 border-[#2ee81a] mt-12 rounded-s-2xl items-ceneter text-center bg-white px-12 shadow-2xl shadow-white hover:shadow-2xl hover:shadow-[#2ee81a]">
          <h1 className="text-black bg-transparent text-2xl font-serif mt-6">
            Rohit <span className="text-red-500 bg-white">Kumar chouhan</span>
          </h1>
          <div>
            <h1 className="bg-white text-cyan-500 text-xl float-start mt-6">
              Marn Stack Devloper
            </h1>
          </div>
          <div className="text-justify">
            <p className="bg-white float-start mt-3">
              Welcome! I'm Marn Stack, a passionate full-stack developer
              dedicated to crafting clean, efficient, and user-friendly web
              applications. With a background in computer science and years of
              hands-on experience, I thrive on solving complex problems with
              simple solutions. Creating responsive, pixel-perfect UIs using
              React.js and ensuring a seamless user experience.
              <li className="bg-white mt-3 float-start">
                Front-End Development: Creating responsive, pixel-perfect UIs
                using React.js and ensuring a seamless user experience.
              </li>
              <li className="bg-white">
                Back-End Development:Designing RESTful APIs with Node.js and
                Express.js, integrating with databases like MongoDB for
                efficient data management.
              </li>
              <li className="bg-white">
                Database Management:Developing schemas, querying databases, and
                optimizing performance using MongoDB.
              </li>{" "}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
