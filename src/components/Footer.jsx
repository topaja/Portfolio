import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="px-8 h-fit pt-15">
        <div className="w-[95%] h-full bg-[#DCDBF8] rounded-t-[100px] mx-auto p-4 flex flex-col gap-2">
          <ul className="text-light-text font-primary flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center mt-4">
            <li className="py-1 sm:py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              About
            </li>
            <li className="py-1 sm:py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Skills
            </li>
            <li className="py-1 sm:py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Projects
            </li>
            <li className="py-1 sm:py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Experience
            </li>
            <li className="py-1 sm:py-2 sm:py-0 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
              Contact
            </li>
          </ul>
          <div className="flex gap-8 text-light-text text-[23px] justify-center items-center mt-5">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <p className="text-light-text text-center mt-4">
            © Topaja Saha. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// <footer className="py-6 bg-gray-50 text-center text-gray-600">
// </footer>
