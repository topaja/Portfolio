import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ data }) => {
  const { title, tag, image, area, code, preview } = data;
  return (
    <>
      <div className="w-[350px] h-96 shadow-sm hover:shadow-xl rounded-lg bg-white">
        <div className="h-1/2 relative">
          <img
            src={image}
            alt="project image"
            className="rounded-t-lg h-full w-full object-cover"
          />
        </div>
        <div className="px-4 flex flex-col gap-4 h-1/2 justify-center">
          <p className="font-primary text-xl">{title}</p>
          <div className="flex gap-2">
            {tag.map((item, index) => {
              return (
                <p
                  key={index}
                  className="font-primary w-fit px-2 py-1 text-xs text-light-text bg-slate-200 rounded-md"
                >
                  {item}
                </p>
              );
            })}
          </div>
          <div className="flex gap-3 items-center">
            <a href={code} target="_blank">
              <button
                className={
                  area === "design"
                    ? "hidden"
                    : "flex justify-center items-center px-4 py-2 text-sm rounded-full border-light-primary border-1 text-light-primary hover:bg-[#CFCFCF] hover:border-[#CFCFCF] ease-in-out duration-300"
                }
              >
                <FontAwesomeIcon icon={faCode} />
              </button>
            </a>
            <a href={preview} target="_blank">
              <button className="px-4 py-1 text-sm rounded-full border-light-primary border-1 text-light-primary hover:bg-[#CFCFCF] hover:border-[#CFCFCF] ease-in-out duration-300">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
