import React from "react";
import { skillsImg } from "../assets/assets";

const SkillCard = ({ name }) => {
  return (
    <>
      <div className="max-[385px]:w-[110px] max-[385px]:h-[120px] w-[140px] h-[160px] rounded-lg border-2 border-light-primary flex flex-col gap-4 justify-center items-center hover:scale-110 transition-transform duration-300 hover:shadow-xl">
        <img src={skillsImg[name]} alt={name} className="w-[40%]" />
        <p className="text-light-text text-sm font-medium font-primary uppercase">
          {name}
        </p>
      </div>
    </>
  );
};

export default SkillCard;
