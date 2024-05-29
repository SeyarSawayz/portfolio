import React from "react";
import Social from "./Social";
import Data from "./Data";
import { Link as LinkScroll } from "react-scroll";
import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = ({ activeNav, setActiveNav }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  const t1 = gsap.timeline();
  useGSAP(() => {
    t1.from("#home", {
      y: -200,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      delay: 1,
    });
    t1.from(".scroll", {
      y: 500,
      duration: 1.5,
      opacity: 0,
      stagger: 0.3,
      delay: 1,
    });
  });
  return (
    <section
      id="home"
      className={`w-full dark:bg-[#1F2A40] `}
      dir={`${farsi ? "rtl" : "ltr"}`}
    >
      <div
        className={`grid lg:grid-cols-12 grid-cols-12 items-center w-full  gap-4 
        }`}
      >
        <div className="social lg:py-20 py-10 ml-0 lg:col-span-2  col-span-2">
          <Social />
        </div>
        <div className="data order-3 lg:ml-0 lg:col-span-5  col-span-12 ">
          <Data />
        </div>
        <div className="image lg:order-3 order-1 lg:mx-auto  w-[250px] h-[250px] lg:col-span-5 col-span-10 shadow-2xl profileImg" />
      </div>
      <div className="scroll lg:ml-36 lg:mt-20 ml-1 mt-5  items-center gap-3  cursor-pointer lg:flex hidden">
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
            className={` font-bold text-gray-600 mx-2 dark:text-[#e0e0e0] ${
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
