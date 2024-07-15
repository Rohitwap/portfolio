import React from "react";

const Navbar = () => {
  return (
    <>
      <section>
        <nav className="hidden md:block">
          <div className="text-white text-2xl mt-4 px-6">
            Rohit<span className="text-[#2ee81a]">Kumar</span>
          </div>
          <div className="text-white flex justify-center mt-[-1.5rem]">
            <ul className="flex justify-center mx-32">
              <li>
                <a
                  href="#home"
                  className="mx-[10px] cursor-pointer hover:text-[#2ee81a]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#exp"
                  className="mx-[10px] cursor-pointer hover:text-[#2ee81a]"
                >
                  Exprience
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="mx-[10px] cursor-pointer hover:text-[#2ee81a]"
                >
                  Service
                </a>
              </li>

              <li>
                <a
                  href="#testimonial"
                  className="mx-[10px] cursor-pointer hover:text-[#2ee81a]"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mx-[10px] cursor-pointer hover:text-[#2ee81a]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="mx-[10px] cursor-pointer hover:text-[#2ee81a]"
                >
                  About Us
                </a>
              </li>
            </ul>
            <button className="text-white outline-[#2ee81a] h-8 outline hover:outline-2 w-28 rounded float-right transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700 ...">
              Email
            </button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
