import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { projectData } from "../data/project";
import ProjectCard from "./ProjectCard";
import { designData } from "../data/design";

const Project = () => {
  const [selected, setSelected] = useState("development");
  return (
    <>
      <div className="bg-[#F2F1F7] w-full">
        <div className="px-8 py-6 sm:mx-[4%]">
          {/* heading */}
          <div className="flex items-center justify-center w-full gap-6 mb-10">
            <div className="max-[420px]:w-10 w-20 sm:w-30 bg-light-primary h-1 mt-2 rounded"></div>
            <p className="text-light-primary font-secondary font-bold text-[22px] w-fit">
              Projects
            </p>
            <div className="max-[420px]:w-10 w-20 sm:w-30 bg-light-primary h-1 mr-3 mt-2 rounded"></div>
          </div>

          {/* option */}
          <div className="flex justify-center items-center gap-8 text-light-text font-secondary text-base">
            <p
              className={`${
                selected === "development"
                  ? "bg-light-primary text-white"
                  : "bg-transparent"
              } w-fit px-4 py-2 rounded hover:bg-dark-background ease-in-out duration-300 hover:text-white shadow-md`}
              onClick={() => setSelected("development")}
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Development
            </p>
            <p
              className={`${
                selected === "design"
                  ? "bg-light-primary text-white"
                  : "bg-transparent"
              } w-fit  px-4 py-2 rounded hover:bg-dark-background ease-in-out duration-300 hover:text-white shadow-md`}
              onClick={() => setSelected("design")}
            >
              <FontAwesomeIcon icon={faPenNib} className="mr-2" />
              Design
            </p>
          </div>

          <div className="flex gap-6 w-full flex-wrap mt-15 justify-center items-center">
            {selected === "design"
              ? designData.map((data, key) => {
                  return <ProjectCard data={data} key={key} />;
                })
              : projectData.map((data, key) => {
                  return <ProjectCard data={data} key={key} />;
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
