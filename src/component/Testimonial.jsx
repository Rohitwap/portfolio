import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";

import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div id="testimonial">
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
          <p className="text-white text-xl mt-20 font-serif md:text-2xl text-center">
            Testimonial
          </p>
          <div className="w-32 h-1 border-b-4 border-green-500"></div>
        </div>

        <div>
          <Carousel>
            <div className="flex justify-evenly text-center">
              <div
                data-aos="flip-left"
                data-aos-delay="200"
                className="text-white"
              >
                <div className="w-72 h-96 shadow-2xl shadow-white items-center px-6 hover:shadow-2xl hover:shadow-[#2ee81a] text-center">
                  <img
                    class="rounded"
                    src="/src/assets/googleceo.webp"
                    alt="small avatar"
                    className="mt-[-12px] w-20 h-20"
                  ></img>
                  <span className="text-white text-11  mt-[-2rem] absolute">
                    Google CEO
                  </span>
                  <p className="text-white mt-4">
                    ''Sundar Pichai, CEO of Google, likely emphasizes the
                    company's commitment to innovation, technological
                    advancement, and its impact on global connectivity. He may
                    highlight Google's achievements in AI, cloud
                    computing,Google's ongoing mission to organize the world's
                    information and make it universally accessible and useful.''
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="200"
                className="text-white"
              >
                <div className="w-72 h-96 mx-12 shadow-2xl shadow-white items-center px-6  hover:shadow-2xl hover:shadow-[#2ee81a]">
                  <img
                    class="rounded"
                    src="/src/assets/microsoft.jpeg"
                    alt="small avatar"
                    className="mt-[-12px] w-20 h-20"
                  ></img>
                  <span className="text-white text-11  mt-[-2rem] absolute">
                    Microsoft CEO
                  </span>
                  <p className="text-white mt-4">
                    ''Satya Nadella, CEO of Microsoft, would likely emphasize
                    Microsoft's transformation into a leading cloud computing
                    and AI powerhouse. He might highlight the company's focus on
                    empowering every person and organization on the planet to
                    achieve more through their products and services.''
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="200"
                className="text-white"
              >
              <div className="w-72 h-96 mx-12  shadow-2xl shadow-white items-center px-6  hover:shadow-2xl hover:shadow-[#2ee81a]">
                <img
                  class="rounded"
                  src="/src/assets/rohit.jpg"
                  alt="small avatar"
                  className="mt-[-12px] w-20 h-20"
                ></img>
                <span className="text-white text-11  mt-[-2rem] absolute">
                  Mern Stack Devlper
                </span>
                <p className="text-white mt-4">
                  "In my first year as a MERN stack developer, I've gained
                  valuable experience in building modern web applications using
                  MongoDB, Express.js, React.js, and Node.js. I've been involved
                  in projects where I've contributed to both frontend and
                  backend development, allowing me to develop a comprehensive
                  understanding of full-stack development.
                </p>
              </div>
            </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
