import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
    data-aos="fade-zoom-out"
    data-aos-delay="200"
    className="text-white"
  >
    <div id="contact">
      <main>
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center bg-white">
          <p className="text-black text-xl mt-20 font-serif md:text-2xl text-center bg-white">
            Contact
          </p>
            <div className="w-32 h-1 border-b-4 border-green-500"></div>
          </div>
        
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="abc"></input>
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="abc@gmail.com"></input>
          </div>
          <div>
            <label>Massage</label>
            <input type="text" placeholder="Tall us about queary..."></input>
          </div>
        </form>
        <div className="bg-white flex justify-center">
          <div className="w-20 h-8 inline-block text-white outline-[#2ee81a] outline hover:outline-2 rounded text-center  font-serif cursor-pointer hover:transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110  duration-700 ... items-center">
            <button className="">Send</button>
          </div>
        </div>
        S
      </main>
    </div>
    </div>
  );
};

export default Contact;
