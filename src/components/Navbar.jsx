import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { logo } from "../assets/assets";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    setCloseMenu(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center w-full p-8 bg-[#F2F1F7]">
        <div
          className={` ${
            closeMenu ? "fixed" : "absolute"
          } absolute z-[60]`}
        >
          <a href="https://topaja.github.io/Portfolio/">
            <img
              src={logo}
              alt="logo"
              className="w-[55px] md:w-[60px] mt-6 sm:mt-0 p-3 cursor-pointer"
            />
          </a>
        </div>
        <div className="relative w-[100%]">
          <div
            className={`${
              closeMenu ? "fixed right-8" : "right-0"
            } sm:hidden absolute sm:right-0 z-[60]`}
          >
            {closeMenu ? (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setCloseMenu(!closeMenu)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                onClick={() => setCloseMenu(!closeMenu)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
          <ul
            className={`${
              closeMenu ? "block" : "hidden"
            } z-50 text-light-text font-primary sm:flex sm:space-x-8 fixed sm:relative left-0 top-0 sm:top-0 bg-[#F2F1F7]/95 sm:bg-transparent h-screen sm:h-auto w-full sm:w-full text-center flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0`}
          >
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className="cursor-pointer py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("experience")}
              className="cursor-pointer py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Experience
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
