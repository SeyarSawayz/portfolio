import React from "react";

const SkillsCard = ({ icons, title, subtitle }) => {
  return (
    <div className="flex items-center flex-col px-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800  rounded-lg p-2">
      <div className="flex flex-row gap-2 items-center justify-start min-w-[150px] ">
        <img src={icons} alt="" className="" />
        <h1 className="font-semibold text-lg text-slate-600 dark:text-[#e0e0e0]">
          {title}
        </h1>
      </div>
      <div className="flex flex-row gap-2 items-center  justify-start min-w-[170px]">
        <h1></h1>
        <p className="text-sm text-slate-600 self-end  mt-3 dark:text-[#70d8bd]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
