import React from "react";
import { circle } from "../assets/assets";
import { experienceData } from "../data/experience";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <>
      <div className="w-full h-10 bg-[#F2F1F7]"></div>
      <p className="font-secondary text-light-primary font-bold text-[22px] mt-[-19px] sm:mx-[10%] px-8">
        Experience
      </p>
      <div className="px-2 md:px-8 py-2 sm:py-15 sm:mx-[10%]">
        <div className="mt-10 ml-6 sm:ml-12 flex gap-4 items-start relative">
          <img
            src={circle}
            alt="circle design"
            className="rotate-90 absolute -left-25 top-[80px] sm:-left-35 md:-left-45 lg:-left-50 md:top-[60px] w-[90px]"
          />

          {/* Timeline Container */}
          <div className="flex flex-col">
            {/* Single vertical line */}
            <div className="absolute left-[108px] top-[15px] w-[2px] h-full bg-light-primary rounded max-[460px]:left-[85px]"></div>

            {/* Map through experience data */}
            {experienceData.map((experience, index) => (
              <ExperienceItem
                key={index}
                year={experience.year}
                title={experience.title}
                company={experience.company}
                description={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;