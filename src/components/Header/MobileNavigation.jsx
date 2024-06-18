import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";

const MobileNavigation = () => {
  const { t, farsi } = useTranslationContext();

  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="w-[95%] lg:hidden fixed  bottom-0 z-40 ">
        {toggle && (
          <div className="sticky bottom-0 w-full ml-3 p-4 bg-white dark:bg-[#1F2A40]  border-t border-gray-400 rounded-3xl fade-in-bottom">
            <ul className="flex items-center justify-center gap-x-20 mb-4 dark:bg-inherit bg-white">
              <LinkScroll
                to="home"
                className="flex text-center  flex-col items-center cursor-pointer"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
                onClick={() => setToggle((prev) => !prev)}
              >
                <img
                  src={`/icons/${
                    themeMode === "light" ? "home" : "home_white"
                  }.png`}
                  alt=""
                />
                <li className="font-semibold mt-1 dark:text-[#e0e0e0]">
                  {t("HOME")}
                </li>
              </LinkScroll>
              <LinkScroll
                to="about"
                className="flex text-center flex-col items-center cursor-pointer dark:text-[#e0e0e0]"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setToggle((prev) => !prev)}
              >
                <img
                  src={`/icons/${
                    themeMode === "light" ? "user" : "user_white"
                  }.png`}
                  alt=""
                />
                <li className="font-semibold mt-1">{t("ABOUT ME")}</li>
              </LinkScroll>
              <LinkScroll
                to="skills"
                className="flex text-center  flex-col items-center cursor-pointer dark:text-[#e0e0e0]"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setToggle((prev) => !prev)}
              >
                <img
                  src={`/icons/${
                    themeMode === "light" ? "skills" : "skills_white"
                  }.png`}
                  alt=""
                />
                <li className="font-semibold mt-1">{t("SKILLS")}</li>
              </LinkScroll>
            </ul>
            <ul
              className={`flex items-center justify-center ${
                farsi ? "gap-24" : "gap-20"
              } h-[120px] dark:bg-inherit bg-white`}
            >
              <LinkScroll
                to="services"
                className="flex flex-col items-center cursor-pointer dark:text-[#e0e0e0]"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setToggle((prev) => !prev)}
              >
                <img
                  src={`/icons/${
                    themeMode === "light" ? "services" : "services_white"
                  }.png`}
                  alt=""
                />
                <li className="font-semibold mt-1">{t("SERVICES")}</li>
              </LinkScroll>
              <LinkScroll
                to="work"
                className="flex flex-col items-center cursor-pointer dark:text-[#e0e0e0]"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setToggle((prev) => !prev)}
              >
                <img
                  src={`/icons/${
                    themeMode === "light" ? "work" : "work_white"
                  }.png`}
                  alt=""
                />
                <li className="font-semibold mt-1">{t("PROJECTS")}</li>
              </LinkScroll>
              <LinkScroll
                to="contact"
                className="flex flex-col items-center cursor-pointer dark:text-[#e0e0e0]"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={() => setToggle((prev) => !prev)}
              >
                <img
                  src={`/icons/${
                    themeMode === "light" ? "contact" : "contact_white"
                  }.png`}
                  alt=""
                />
                <li className="font-semibold mt-1">{t("CONTACT")}</li>
              </LinkScroll>
            </ul>
          </div>
        )}
      </div>
      <div className=" w-full lg:hidden absolute">
        {!toggle && (
          <h1 className="fixed bottom-5 left-5 font-bold text-gray-800 text-[20px] dark:text-[#e0e0e0] ">
            SEYAR
          </h1>
        )}
        <img
          src={
            toggle
              ? `/icons/${themeMode === "light" ? "close" : "close_white"}.png`
              : `/icons/${
                  themeMode === "light" ? "dashboard" : "dashboard_white"
                }.png`
          }
          alt="close icon"
          onClick={() => setToggle(!toggle)}
          className="fixed bottom-5 right-5 cursor-pointer z-50"
        />
      </div>
    </div>
  );
};

export default MobileNavigation;
