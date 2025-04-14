import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hero } from "../assets/assets";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="px-8 relative bg-[#F2F1F7]">
        {/* side links */}
        <div className="fixed flex flex-col item-center justify-center gap-4 top-50 left-10 z-20">
          <a href="https://www.linkedin.com/in/topajas/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-light-primary fa-lg hover:scale-120 transition-transform duration-300 hover:text-black"
            />
          </a>
          <a href="mailto:topaja.daily08@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-light-primary text-[17px] hover:scale-120 transition-transform duration-300 hover:text-black"
            />
          </a>
          <a href="https://github.com/topaja" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-light-primary fa-lg hover:scale-120 transition-transform duration-300 hover:text-black"
            />
          </a>
          <div className="w-[2px] h-[120px] bg-light-primary mx-auto rounded"></div>
        </div>

        <div className="flex flex-col justify-center sm:flex-row">
          <div className="w-full sm:w-2/5 flex flex-col gap-2 sm:ml-[10%] pt-20 items-center sm:items-start">
            <p className="font-primary text-sm text-light-text pl-2">
              Hello I'm
            </p>
            <p className="text-[40px] md:text-[50px] lg:text-[64px] font-bold font-primary">
              Topaja <span className="text-light-primary">Saha</span>
            </p>
            <p className="font-primary pl-2 text-[#212121]">
              FrontEnd Developer
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:bg-black hover:text-white hover:border-black ease-in-out duration-300 mt-10 text-start w-fit px-10 py-3 rounded-lg border-light-primary border-2 text-light-primary font-semibold text-md"
            >
              Contact Me
            </button>
          </div>
          <div className="w-full pt-5 sm:w-3/5 flex justify-center items-center">
            <img src={hero} alt="hero image" className="w-[60%] sm:w-[80%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
