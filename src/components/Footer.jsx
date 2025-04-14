import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="px-2 sm:px-8 h-fit pt-15">
        <div className="h-full bg-[#DCDBF8] rounded-t-[80px] mx-auto p-4 flex flex-col gap-2">
          <ul className="text-light-text font-primary flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-4 text-lg">
            <li
              onClick={() => scrollToSection("about")}
              className="hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className="hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("experience")}
              className="hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Experience
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="py-1 sm:py-2 hover:font-medium hover:text-light-primary delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out"
            >
              Contact
            </li>
          </ul>
          <div className="flex gap-8 text-light-text text-[23px] justify-center items-center mt-5">
            <a href="https://www.linkedin.com/in/topajas/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:scale-120 transition-transform duration-300 hover:text-black"
              />
            </a>
            <a href="mailto:topaja.daily08@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="hover:scale-120 transition-transform duration-300 hover:text-black"
              />
            </a>
            <a href="https://github.com/topaja" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:scale-120 transition-transform duration-300 hover:text-black"
              />
            </a>
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
