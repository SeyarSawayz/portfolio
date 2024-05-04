import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { useTranslationContext } from "../../context/TranslationProvider";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  const scrollUp = () => {
    if (window.scrollY >= 560) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);
  return (
    <div
      className="border-t-2 border-gray-200 dark:border-slate-600 w-full flex flex-col items-center justify-center gap-4 py-4 md:mb-0 mb-20"
      dir={`${farsi ? "rtl" : "ltr"}`}
    >
      <h1
        className={`font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0] ${
          farsi ? "font-Amiri" : ""
        }`}
      >
        {t("SEYAR")}
      </h1>
      <div className="">
        <ul className="flex items-center justify-center gap-10 ">
          <LinkScroll
            to="home"
            className="flex flex-col items-center cursor-pointer dark:text-[#e0e0e0] hover:text-zinc-600"
            spy={true}
            smooth={true}
            offset={-150}
            duration={100}
          >
            <li className={`font-semibold mt-1 ${farsi ? "font-Amiri" : ""}`}>
              {t("HOME")}
            </li>
          </LinkScroll>
          <LinkScroll
            to="about"
            className="flex flex-col items-center cursor-pointer hover:text-zinc-600 dark:text-[#e0e0e0]"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <li className={`font-semibold mt-1 ${farsi ? "font-Amiri" : ""}`}>
              {t("ABOUT ME")}
            </li>
          </LinkScroll>
          <LinkScroll
            to="skills"
            className="flex flex-col items-center cursor-pointer hover:text-zinc-600 dark:text-[#e0e0e0]"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <li className={`font-semibold mt-1 ${farsi ? "font-Amiri" : ""}`}>
              {t("SKILLS")}
            </li>
          </LinkScroll>
        </ul>
      </div>
      <div className="flex items-center justify-between gap-4 my-2">
        <a
          className="size-9 rounded-md  cursor-pointer bg-black border border-gray-400 flex items-center justify-center hover:bg-zinc-600"
          href="https://instagram.com/kayhan_tech"
          target="_blank"
        >
          <img src="/icons/instawhite.png" alt="" />
        </a>

        <a
          className="size-9 rounded-md cursor-pointer bg-black border border-gray-400 flex items-center justify-center hover:bg-zinc-600"
          href="https://github.com/seyarsawayz"
          target="_blank"
        >
          <img src="/icons/githubWhite.png" alt="" />
        </a>

        <a
          className="size-9 rounded-md  cursor-pointer bg-black border border-gray-400 flex items-center justify-center hover:bg-zinc-600"
          href="https://www.linkedin.com/in/seyar-sawayz-159119119/"
          target="_blank"
        >
          <img src="/icons/linkedinWhite.png" alt="" />
        </a>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center mb-4">
        <p
          className={`text-lg dark:text-[#e0e0e0] ${farsi ? "font-Amiri" : ""}`}
        >
          &copy;{t("copyright")}
        </p>
        <p
          className={`text-sm mt-2 dark:text-[#e0e0e0] ${
            farsi ? "font-Amiri" : ""
          }`}
        >
          {t("Powered_by")}{" "}
          <a
            href="https://kayhantech.netlify.app/"
            target="_blank"
            className="underline hover:text-zinc-700 dark:text-[#e0e0e0]"
          >
            KayhanTech Technologies
          </a>
        </p>
      </div>
      {showScroll && (
        <div className=" fixed size-9 rounded-md  cursor-pointer bg-black border border-gray-400  bottom-0 md:bottom-0 flex items-center justify-center right-4 md:right-20 hover:bg-zinc-600 slide-top">
          <LinkScroll
            to="home"
            className="flex flex-col items-center cursor-pointer hover:text-zinc-600"
            spy={true}
            smooth={true}
            offset={-150}
            duration={100}
          >
            <img src="/icons/top.png" alt="" />
          </LinkScroll>
        </div>
      )}
    </div>
  );
};

export default Footer;
