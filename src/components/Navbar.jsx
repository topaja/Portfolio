import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { logo } from "../assets/assets";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-full p-8">
        <div className="absolute z-10">
          <img src={logo} alt="logo" className="w-[60px] p-3" />
        </div>
        {/* Remove hidden from parent div and handle visibility in children */}
        <div className="relative w-[100%]">
          {/* Show menu icon only on mobile */}
          <div className="sm:hidden flex justify-end">
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
          {/* Show menu items on desktop or when menu is open */}
          <ul
            className={`${
              closeMenu ? "block" : "hidden"
            } z-10 text-light-text font-primary sm:flex sm:space-x-8 absolute sm:relative right-0 top-10 sm:top-0 bg-white sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none sm:justify-center sm:item-center w-[200px] sm:w-full text-center`}
          >
            <li className="py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              About
            </li>
            <li className="py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Skills
            </li>
            <li className="py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Projects
            </li>
            <li className="py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Experience
            </li>
            <li className="py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
