import React from "react";
import { skillsImg } from "../assets/assets";

const SkillCard = ({ name }) => {
  return (
    <>
      <div className="w-[140px] h-[160px] rounded-lg border-2 border-light-primary flex flex-col gap-4 justify-center items-center">
        <img src={skillsImg[name]} alt={name} className="w-[40%]" />
        <p className="text-light-text text-sm font-medium font-primary uppercase">{name}</p>
      </div>
    </>
  );
};

export default SkillCard;
