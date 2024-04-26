import React from "react";
import { Link as LinkScroll } from "react-scroll";

const Data = () => {
  return (
    <div className="flex flex-col gap-2 items-start justify-start w-full">
      <h1 className="font-bold text-gray-800 dark:text-[#e0e0e0] text-[40px] flex items-center justify-center gap-4 tracking-in-expand">
        SEYAR SAWAYZ{" "}
        <span>
          <img src="/icons/hello.png" className="h-12 w-12 mt-2 ml-2" alt="" />
        </span>
      </h1>
      <div className="relative">
        <h1 className=" text-gray-800 dark:text-[#70d8bd] before:block before:absolute before:w-[70px] before:h-[2px] before:bg-black md:before:top-[66%] md:before:left-50 before:top-[92%] before:dark:bg-[#e0e0e0]  ">
          <span className="ml-20 font-semibold tracking-in-expand">
            Frontend Developer
          </span>
        </h1>
      </div>
      <p className="text-gray-500 dark:text-[#70d8bd] text-justify text-focus-in ">
        I like to code things from scratch, and enjoy bringing ideas to life in
        the browser.
      </p>

      <LinkScroll
        to="contact"
        className="flex flex-col items-center cursor-pointer"
        spy={true}
        smooth={true}
        offset={-150}
        duration={100}
      >
        <button className="bg-zinc-900 hover:bg-zinc-800 text-xl mt-10 text-white px-8 py-4 rounded-2xl font-bold dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] ">
          Lets work together{" "}
          <img src="/icons/send.png" className="inline-block ml-3" alt="" />
        </button>
      </LinkScroll>
    </div>
  );
};

export default Data;