import React from "react";
import SkillCard from "./SkillCard";
import { circle } from "../assets/assets";

const skills = [
  "html",
  "css",
  "javascript",
  "React JS",
  "tailwind",
  "bootstrap",
  "redux",
  "git",
  "github",
  "c++",
  "figma",
];

const Skills = () => {
  return (
    <>
      <div className="py-10 relative bg-[#F2F1F7] max-[560px]:overflow-hidden">
        <img
          src={circle}
          alt="circle design"
          className="absolute max-[560px]:-right-10  max-[560px]:top-[-45px] right-5 md:right-20 top-[-50px] w-[100px]"
        />
        <div className="flex items-center justify-center w-full gap-6">
          <div className="max-[420px]:w-10 w-20 sm:w-30 bg-light-primary h-1 mt-2 rounded"></div>
          <p className="text-light-primary font-secondary font-bold text-[22px] w-fit">
            My Skills
          </p>
          <div className="max-[420px]:w-10 w-20 sm:w-30 bg-light-primary h-1 mr-3 mt-2 rounded"></div>
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
