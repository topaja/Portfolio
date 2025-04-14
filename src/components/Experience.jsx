import React from "react";
import { circle } from "../assets/assets";

const Experience = () => {
  return (
    <>
      <div className="w-full h-10 bg-[#F2F1F7]"></div>
      {/* heading */}
      <p className="font-secondary text-light-primary font-bold text-[22px] mt-[-19px] sm:mx-[10%] px-8">
        Experience
      </p>
      <div className="px-2 md:px-8 py-2 sm:py-15 sm:mx-[10%]">
        <div className="mt-10 ml-6 sm:ml-12 flex gap-4 items-start relative ">
          <img
            src={circle}
            alt="circle design"
            className="rotate-90 absolute -left-25 top-[80px] sm:-left-35 md:-left-45 lg:-left-50 md:top-[60px] w-[90px]"
          />
          <div
            className="bg-dark-primary text-white font-semibold max-[460px]:mr-0 max-[460px]:px-4 max-[460px]:text-xs px-5 py-2 w-fit text-center text-sm font-secondary mr-2"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
            }}
          >
            2023
          </div>

          <div className="flex flex-col mt-1">
            <div className="w-5 h-5 rounded-full bg-light-primary shadow-[0_0px_20px_rgba(0,0,0,1)] shadow-light-primary"></div>
            <div className="w-[2px] h-[130px] bg-light-primary mx-auto rounded"></div>
          </div>

          <div>
            <p className="max-[460px]:text-base font-primary text-bold text-lg">
              UX Designer & Developer Intern
            </p>
            <p className="max-[460px]:text-sm text-base">Leadcoding</p>
            <p className="mt-5 text-light-text w-full md:w-[80%] text-left text-sm sm:text-base">
              Developed user-centered interfaces, logos, and visuals for
              websites Collaborated with teams, contributing technical expertise
              in C++ and GitHub to streamline development and improve design
              implementation
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
