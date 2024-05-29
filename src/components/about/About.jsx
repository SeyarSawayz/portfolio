import AboutMeCard from "./AboutMeCard";
import useTheme from "../../context/theme";
import cv from "../../../src/assets/seyar.pdf";
import { useTranslationContext } from "../../context/TranslationProvider";
import { Element } from "react-scroll";

const About = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
   
      <section
        id="about"
        className="mt-[102px] flex flex-col items-center justify-center "
        dir={`${farsi ? "rtl" : "ltr"}`}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <h1
            className={`font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0] ${
              farsi ? "font-Amiri" : ""
            }`}
          >
            {t("about_me")}
          </h1>
          <p
            className={`text-gray-500 font-semibold dark:text-[#70d8bd] ${
              farsi ? "font-Amiri text-xl" : ""
            }`}
          >
            {t("my_introduction")}
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between gap-20 lg:mt-5 my-10 rounded-2xl  border border-gray-200 p-6 dark:border-slate-600 shadow-2xl">
          <div>
            <img
              src="/passport.png"
              alt="My Images"
              className="size-[250px] rounded-full shadow-2xl"
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-between">
              <AboutMeCard
                icon={`/icons/${
                  themeMode === "light" ? "medal" : "medal_white"
                }.png`}
                title={t("Experience")}
                subtitle={t("2_years_working")}
              />
              <AboutMeCard
                icon={`/icons/${
                  themeMode === "light" ? "completed" : "completed_white"
                }.png`}
                title={t("Completed")}
                subtitle={t("10+_projects")}
              />

              <AboutMeCard
                icon={`/icons/${
                  themeMode === "light" ? "support" : "support_white"
                }.png`}
                title={t("Support")}
                subtitle={t("online_24/7")}
              />
            </div>
            <p
              className={`max-w-[390px] mt-4 text-justify text-slate-600 dark:text-[#70d8bd] ${
                farsi ? "font-Vazirmatn" : ""
              }`}
            >
              {t("about_me_paragraph")}
            </p>

            <a
              className={`flex gap-2 self-start mt-4 bg-zinc-900 hover:bg-zinc-800 text-white px-12 py-4 rounded-2xl cursor-pointer dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] ${
                farsi ? "font-Amiri lg:text-lg" : ""
              }`}
              download=""
              href={cv}
              target="_blank"
            >
              {t("Download_CV")} <img src="/icons/cv.png" alt="" />
            </a>
          </div>
        </div>
      </section>
  
  );
};

export default About;
