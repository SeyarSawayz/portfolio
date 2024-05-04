import React from "react";
import Social from "./Social";
import Data from "./Data";
import { Link as LinkScroll } from "react-scroll";
import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";

const Home = ({ activeNav, setActiveNav }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
    <section
      id="home"
      className={`w-full dark:bg-[#1F2A40] `}
      dir={`${farsi ? "rtl" : "ltr"}`}
    >
      <div
        className={`grid md:grid-cols-12 grid-cols-12 items-center w-full  gap-4 
        }`}
      >
        <div className="social md:py-20 py-10 ml-0 md:col-span-2  col-span-2">
          <Social />
        </div>
        <div className="data order-3 md:ml-0 md:col-span-5  col-span-12 ">
          <Data />
        </div>
        <div className="image md:order-3 order-1 md:mx-auto  w-[250px] h-[250px] md:col-span-5 col-span-10 shadow-2xl profileImg" />
      </div>
      <div className="md:ml-36 md:mt-20 ml-1 mt-5  items-center gap-3  cursor-pointer md:flex hidden">
        <LinkScroll
          to="about"
          className="flex"
          spy={true}
          smooth={true}
          offset={-150}
          duration={100}
          onClick={() => setActiveNav("about")}
        >
          <img
            src={`/icons/${themeMode === "dark" ? "mouse_white" : "mouse"}.png`}
            className=""
            alt=""
          />
          <h1
            className={`font-bold text-gray-600 mx-2 dark:text-[#e0e0e0] ${
              farsi ? "font-Amiri text-xl mx-3" : ""
            }`}
          >
            {t("Scroll_Down")}
          </h1>
          <img
            src={`/icons/${themeMode === "dark" ? "downWhite" : "down"}.png`}
            className="slide-in-top"
            alt=""
          />
        </LinkScroll>
      </div>
    </section>
  );
};

export default Home;
