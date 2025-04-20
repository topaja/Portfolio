import React from "react";

const ExperienceItem = ({ year, title, company, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div
        className="bg-dark-primary text-white font-semibold max-[460px]:mr-0 max-[460px]:px-4 max-[460px]:text-xs px-5 py-2 w-fit text-center text-sm font-secondary mr-2"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
        }}
      >
        {year}
      </div>

      <div className="flex flex-col items-center mt-1">
        <div className="w-5 h-5 rounded-full bg-light-primary shadow-[0_0px_20px_rgba(0,0,0,1)] shadow-light-primary"></div>
      </div>

      <div className="mb-16">
        <p className="max-[460px]:text-base font-primary text-bold text-lg">
          {title}
        </p>
        <p className="max-[460px]:text-sm text-base">{company}</p>
        <p className="mt-5 text-light-text w-full md:w-[80%] text-left text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
