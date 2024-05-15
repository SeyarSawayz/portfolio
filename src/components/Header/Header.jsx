import React, { useState } from "react";
import { getMenu } from "../../constants";
import { Link as LinkScroll } from "react-scroll";
import ThemeBtn from "../themeBtn/ThemeBtn";
import useTheme from "../../context/theme";
import Languages from "./Languages";
import { useTranslationContext } from "../../context/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = ({ activeNav, setActiveNav }) => {
  const menu = getMenu();
  const { t, farsi } = useTranslationContext();

  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [toggle, setToggle] = useState(false);

  //Animation using GSAP

  const t1 = gsap.timeline();
  useGSAP(() => {
    t1.from(".logo, .navbar, .langmode", {
      y: -200,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    });
  });
  return (
    <div
      className={`md:sticky top-0  bg-white dark:bg-[#1F2A40] z-50 `}
      dir={`${farsi ? "rtl" : "ltr"}`}
    >
      <div className="md:hidden  flex items-center justify-between mt-4 mr-8">
        <div className="ml-10">
          <Languages />
        </div>
        <div className={`${farsi ? "ml-10" : "ml-0"}`}>
          <ThemeBtn />
        </div>
      </div>
      <nav className="p-4 px-36  md:flex hidden  md:items-center md:justify-between   ">
        <div className="flex items-center justify-center logo">
          <LinkScroll
            to="home"
            className="flex gap-3 items-center cursor-pointer"
            spy={true}
            smooth={true}
            offset={-150}
            duration={100}
            onClick={() => {
              setToggle((prev) => !prev);
              setActiveNav("home");
            }}
          >
            <img
              src={`/icons/${
                themeMode === "light" ? "logo_white" : "logo"
              }.png`}
              alt=""
              className="size-8"
            />

            <h1 className="font-bold text-gray-800 dark:text-[#e0e0e0] text-[26px] font-Amiri">
              {t("SEYAR")}
            </h1>
          </LinkScroll>
        </div>
        <ul className="flex navbar  items-center justify-center gap-8 ">
          {menu.map((menuItem, index) => (
            <LinkScroll
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={() => setActiveNav(menuItem.id)}
              className={`cursor-pointer font-semibold dark:text-[#e0e0e0]  text-gray-700 ${
                activeNav === menuItem.id
                  ? "border-b-2 border-zinc-600 dark:border-white transition-all ease-in duration-200"
                  : ""
              } ${farsi ? "font-Amiri" : ""}`}
              key={index}
              to={menuItem.id}
            >
              {menuItem.title}
            </LinkScroll>
          ))}
        </ul>
        <div className="flex  items-center justify-between gap-4">
          <div className="langmode">
            <Languages />
          </div>
          <div className="langmode">
            <ThemeBtn />
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <div className="w-[95%] md:hidden fixed  bottom-0 z-40 ">
        {toggle && (
          <div className="sticky bottom-0 w-full ml-3 p-4 bg-white dark:bg-[#1F2A40]  border-t border-gray-400 rounded-3xl fade-in-bottom">
            <ul className="flex items-center justify-center gap-x-20 mb-4 dark:bg-inherit bg-white">
              <LinkScroll
                to="home"
                className="flex flex-col items-center cursor-pointer"
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
                className="flex flex-col items-center cursor-pointer dark:text-[#e0e0e0]"
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
                className="flex flex-col items-center cursor-pointer dark:text-[#e0e0e0]"
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
      <div className=" w-full md:hidden absolute">
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

export default Header;
