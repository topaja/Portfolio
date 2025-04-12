import React from "react";
import SkillCard from "./SkillCard";
import { circle } from "../assets/assets";

const skills = [
  "html",
  "css",
  "javascript",
  "react",
  "tailwind",
  "redux",
  "git",
  "github",
  "figma",
];

const Skills = () => {
  return (
    <>
      <div className="py-10 relative">
        <img
          src={circle}
          alt="circle design"
          className="absolute right-10 md:right-20 top-[-50px] w-[100px]"
        />
        <div className="flex items-center justify-center w-full gap-6">
          <div className="w-30 bg-light-primary h-1 mt-2 rounded"></div>
          <p className="text-light-primary font-secondary font-bold text-[22px] w-fit">
            My Skills
          </p>
          <div className="w-30 bg-light-primary h-1 mr-3 mt-2 rounded"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 px-8 py-16 sm:mx-[10%]">
          {skills.map((skill, index) => {
            return <SkillCard name={skill} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
