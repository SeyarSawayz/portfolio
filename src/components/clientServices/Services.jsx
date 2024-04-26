import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section
      className="flex flex-col items-center justify-between gap-1 mt-[105px]"
      id="services"
    >
      <h1 className="font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0]">
        SERVICES
      </h1>
      <p className="text-gray-500 font-semibold dark:text-[#70d8bd]">
        What i offer
      </p>
      <div className="md:min-w-[500px] min-w-[150px] min-h-[400px] border dark:border-slate-600 border-gray-400 rounded-3xl  p-4 flex flex-col items-center  mt-4 shadow-2xl gap-3">
        <h1 className="font-bold text-xl mb-3 text-slate-600 dark:text-[#e0e0e0] ">
          Web Designer
        </h1>
        <div className="flex  justify-center w-full">
          <p className=" max-w-[300px] text-center text-slate-600 dark:text-[#70d8bd]">
            Services with more than 2 years of experience providing quality work
            to clients and companies
          </p>
        </div>
        <div className=" p-4 flex flex-col self-start items-center justify-start gap-3">
          <ServicesCard
            content={"Specializes in crafting compelling user interfaces"}
          />
          <ServicesCard
            content={"Experienced in developing dynamic and static web pages"}
          />
          <ServicesCard
            content={"Skilled in creating engaging UX element interactions"}
          />
          <ServicesCard
            content={"Expertise in effectively positioning company brands"}
          />
          <ServicesCard
            content={
              "Delivers high-quality designs and mockups for client satisfaction"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
