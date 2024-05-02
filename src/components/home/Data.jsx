import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useTranslationContext } from "../../context/TranslationProvider";

const Data = () => {
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
    <div className="flex flex-col gap-2 items-start justify-start w-full">
      <h1
        className={`font-bold text-gray-800 dark:text-[#e0e0e0] text-[40px] flex items-center justify-center gap-4 tracking-in-expand ${
          farsi ? "font-Amiri " : ""
        }`}
      >
        {t("SEYAR_SAWAYZ")}{" "}
        <span>
          <img src="/icons/hello.png" className="h-12 w-12 mt-2 ml-2" alt="" />
        </span>
      </h1>
      <div className="relative">
        <h1
          className={` text-gray-800 dark:text-[#70d8bd] before:block before:absolute before:w-[70px] before:h-[2px] before:bg-black md:before:top-[66%] ${
            farsi ? "md:before:left-0 before:left-0" : "md:before:left-50"
          } before:top-[50%] before:dark:bg-[#e0e0e0]`}
        >
          <span
            className={`${
              farsi ? "font-Amiri" : ""
            } ml-20 font-semibold tracking-in-expand`}
          >
            {t("Frontend_Developer")}
          </span>
        </h1>
      </div>
      <p
        className={`text-gray-500 dark:text-[#70d8bd] text-justify text-focus-in ${
          farsi ? "rtl font-Vazirmatn" : ""
        }`}
      >
        {t("data_paragraph")}
      </p>

      <LinkScroll
        to="contact"
        className="flex flex-col items-center cursor-pointer"
        spy={true}
        smooth={true}
        offset={-150}
        duration={100}
      >
        <button className="bg-zinc-900 hover:bg-zinc-800 text-xl mt-10 text-white px-8 py-4 rounded-2xl font-bold dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] rtl">
          {farsi && (
            <img
              src="/icons/send_fa.png"
              className="inline-block ml-3"
              alt=""
            />
          )}
          {t("Lets_work_together")}{" "}
          {!farsi && (
            <img src="/icons/send.png" className="inline-block ml-3" alt="" />
          )}
        </button>
      </LinkScroll>
    </div>
  );
};

export default Data;
