import React, { useState } from "react";
import { getMenu } from "../../constants";
import { Link as LinkScroll } from "react-scroll";
import ThemeBtn from "../themeBtn/ThemeBtn";
import useTheme from "../../context/theme";
import Languages from "./Languages";
import { useTranslationContext } from "../../context/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileNavigation from "./MobileNavigation";

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
      className={`lg:sticky top-0  bg-white dark:bg-[#1F2A40] z-50 w-full `}
      dir={`${farsi ? "rtl" : "ltr"}`}
    >
      <div className="lg:hidden flex items-center justify-between mt-4 mr-8 w-full">
        <div className="ml-10">
          <Languages />
        </div>
        <div className={`${farsi ? "ml-10" : "ml-0 mr-10"}`}>
          <ThemeBtn />
        </div>
      </div>
      <nav className="p-4 px-36  lg:flex hidden  lg:items-center lg:justify-between   ">
        <div className="flex items-center justify-center logo lg:mr-5">
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
              activeClass="active"
              onSetActive={() => setActiveNav(menuItem.id)}
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
      <MobileNavigation />
    </div>
  );
};

export default Header;
