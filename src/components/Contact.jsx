import React from "react";
import { contact } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="px-4 lg:px-8 py-15 md:mx-[10%] mx-[4%]">
        <div className="flex flex-col items-center">
          <p className="font-primary text-xs sm:text-sm text-light-text pr-4">
            Get in Touch
          </p>
          <div className="flex items-center justify-center w-full gap-6">
            <div className="w-20 sm:w-30 bg-light-primary h-1 mt-2 rounded"></div>
            <p className="text-light-primary font-secondary font-bold sm:text-[18px] sm:text-[22px] w-fit">
              Contact Me
            </p>
            <div className="w-20 sm:w-30 bg-light-primary h-1 mr-3 mt-2 rounded"></div>
          </div>
        </div>
        <div className="flex gap-8 text-light-text text-[23px] justify-center items-center mt-5">
          <a href="https://www.linkedin.com/in/topajas/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:scale-140 transition-transform duration-300 hover:text-light-primary"
            />
          </a>
          <a href="mailto:topaja.daily08@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="hover:scale-140 transition-transform duration-300 hover:text-black"
            />
          </a>
          <a href="https://github.com/topaja" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:scale-140 transition-transform duration-300 hover:text-black"
            />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center mt-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={contact} alt="image" className="w-[75%] sm:w-[95%]" />
          </div>
          <form className="w-full md:w-1/2 lg:w-2/5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border-gray-300 border-2 rounded-lg mb-6 text-md text-light-text pl-4 focus:border-dark-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border-gray-300 border-2 rounded-lg mb-6 text-md text-light-text pl-4 focus:border-dark-primary focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-2 pt-6 h-25 border-gray-300 border-2 rounded-lg mb-4 text-md text-light-text pl-4 focus:border-dark-primary focus:outline-none"
            ></textarea>
            <button className="w-1/4 px-4 py-2 font-primary bg-light-primary text-white rounded-lg hover:bg-black ease-in-out duration-300 text-sm lg:text-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
