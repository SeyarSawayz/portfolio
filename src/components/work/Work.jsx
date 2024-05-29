import { useState } from "react";
import WorkCardLeft from "./WorkCardLeft";
import WorkCardRight from "./WorkCardRight";
import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";

const Work = () => {
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [more, setMore] = useState(false);
  const [moreSecond, setMoreSecond] = useState(false);

  return (
    <>
      <section
        className="flex flex-col items-center justify-between  w-full gap-1 mt-[170px] slide-top"
        id="work"
        dir={`${farsi ? "rtl" : "ltr"}`}
      >
        <h1
          className={`font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0] ${
            farsi ? "font-Amiri lg:text-3xl" : ""
          }`}
        >
          {t("PROJECTS")}
        </h1>
        <p
          className={`"text-gray-500 font-semibold dark:text-[#70d8bd] ${
            farsi ? "font-Amiri" : ""
          }`}
        >
          {t("A Selection Of Stuff I've Built")}
        </p>
        <div className="w-full min-h-[400px] border dark:border-slate-600 border-gray-400 rounded-3xl  p-4 flex flex-col items-center  mt-4 shadow-2xl gap-3 overflow-hidden">
          <WorkCardRight
            title={t("MovieFlex")}
            content={t("movieFlix_pargraph")}
            icon1={`/SkillsIcons/${
              themeMode === "light" ? "html" : "html_white"
            }.png`}
            icon2={`/SkillsIcons/${
              themeMode === "light" ? "css" : "css_white"
            }.png`}
            icon3={`/SkillsIcons/${
              themeMode === "light" ? "js" : "js_white"
            }.png`}
            icon4={`/SkillsIcons/${
              themeMode === "light" ? "tailwind" : "tailwind_white"
            }.png`}
            icon5={`/SkillsIcons/${
              themeMode === "light" ? "react" : "react_white"
            }.png`}
            icon6={`/SkillsIcons/${
              themeMode === "light" ? "netlify" : "netlify_white"
            }.png`}
            photo={"/work/Movieflix.png"}
            webLink={"https://movieflexjoy.netlify.app/"}
            gitHub={"https://github.com/SeyarSawayz/MovieFlix.git"}
          />
          <WorkCardLeft
            title={t("Modern_Bank_App")}
            content={t("modern_bank_app_paragraph")}
            icon1={`/SkillsIcons/${
              themeMode === "light" ? "html" : "html_white"
            }.png`}
            icon2={`/SkillsIcons/${
              themeMode === "light" ? "css" : "css_white"
            }.png`}
            icon3={`/SkillsIcons/${
              themeMode === "light" ? "js" : "js_white"
            }.png`}
            icon4={`/SkillsIcons/${
              themeMode === "light" ? "tailwind" : "tailwind_white"
            }.png`}
            icon5={`/SkillsIcons/${
              themeMode === "light" ? "react" : "react_white"
            }.png`}
            icon6={`/SkillsIcons/${
              themeMode === "light" ? "netlify" : "netlify_white"
            }.png`}
            photo={"/work/bankapp.png"}
            webLink={"https://bankfolio.netlify.app/"}
            gitHub={"https://github.com/SeyarSawayz/ModernBankApp.git"}
          />
          <WorkCardRight
            title={t("Netflix_Landig_page_UI_Clone")}
            content={t("Netflix_Landig_page_UI_Clone_desc")}
            icon1={`/SkillsIcons/${
              themeMode === "light" ? "html" : "html_white"
            }.png`}
            icon2={`/SkillsIcons/${
              themeMode === "light" ? "css" : "css_white"
            }.png`}
            icon3={`/SkillsIcons/${
              themeMode === "light" ? "js" : "js_white"
            }.png`}
            icon4={`/SkillsIcons/${
              themeMode === "light" ? "tailwind" : "tailwind_white"
            }.png`}
            icon6={`/SkillsIcons/${
              themeMode === "light" ? "netlify" : "netlify_white"
            }.png`}
            photo={"/work/netlifx.png"}
            webLink={"https://streamscapes.netlify.app/"}
            gitHub={"https://github.com/SeyarSawayz/NetflixLandingPage.git"}
          />{" "}
          <button
            className={`bg-zinc-900 flex gap-2 items-center hover:bg-zinc-800 mt-4 text-lg text-white px-4 py-2 rounded-md font-bold dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] ${
              more ? "hidden" : "block"
            } ${farsi ? "font-Amiri text-xl" : ""}`}
            onClick={() => setMore((prev) => !prev)}
          >
            {t("see_more")}{" "}
            <img src="/icons/downWhite.png" className="slide-in-top" alt="" />
          </button>
          {more && (
            <div className="fade-in-top">
              <WorkCardLeft
                title={t("KayhanTech")}
                content={t("KayhanTech_desc")}
                icon1={`/SkillsIcons/${
                  themeMode === "light" ? "html" : "html_white"
                }.png`}
                icon2={`/SkillsIcons/${
                  themeMode === "light" ? "css" : "css_white"
                }.png`}
                icon3={`/SkillsIcons/${
                  themeMode === "light" ? "js" : "js_white"
                }.png`}
                icon4={`/SkillsIcons/${
                  themeMode === "light" ? "tailwind" : "tailwind_white"
                }.png`}
                icon5={`/SkillsIcons/${
                  themeMode === "light" ? "bootstrap" : "bootstrap_white"
                }.png`}
                icon6={`/SkillsIcons/${
                  themeMode === "light" ? "netlify" : "netlify_white"
                }.png`}
                photo={"/work/kayhantech.png"}
                webLink={"https://kayhantech.netlify.app/"}
                gitHub={"https://github.com/SeyarSawayz/MyWebsite.git"}
              />
              <WorkCardRight
                title={t("X_UI_Clone")}
                content={t("x_ui_clone_desc")}
                icon1={`/SkillsIcons/${
                  themeMode === "light" ? "html" : "html_white"
                }.png`}
                icon2={`/SkillsIcons/${
                  themeMode === "light" ? "css" : "css_white"
                }.png`}
                icon3={`/SkillsIcons/${
                  themeMode === "light" ? "js" : "js_white"
                }.png`}
                icon4={`/SkillsIcons/${
                  themeMode === "light" ? "tailwind" : "tailwind_white"
                }.png`}
                icon6={`/SkillsIcons/${
                  themeMode === "light" ? "netlify" : "netlify_white"
                }.png`}
                photo={"/work/xclone.png"}
                webLink={"https://xclonebyseyar.netlify.app/"}
                gitHub={"https://github.com/SeyarSawayz/XClone.git"}
              />
              <WorkCardLeft
                title={t("DoDay_Online_Task_Tracker")}
                content={t("DoDay_Online_Task_Tracker_desc")}
                icon1={`/SkillsIcons/${
                  themeMode === "light" ? "html" : "html_white"
                }.png`}
                icon2={`/SkillsIcons/${
                  themeMode === "light" ? "css" : "css_white"
                }.png`}
                icon3={`/SkillsIcons/${
                  themeMode === "light" ? "js" : "js_white"
                }.png`}
                icon4={`/SkillsIcons/${
                  themeMode === "light" ? "tailwind" : "tailwind_white"
                }.png`}
                icon5={`/SkillsIcons/${
                  themeMode === "light" ? "react" : "react_white"
                }.png`}
                icon6={`/SkillsIcons/${
                  themeMode === "light" ? "netlify" : "netlify_white"
                }.png`}
                photo={"/work/doday.png"}
                webLink={"https://dodaytasktracker.netlify.app/"}
                gitHub={"https://github.com/SeyarSawayz/DoDayTaskTracker.git"}
              />
              <WorkCardRight
                title={t("TechForge_Dashboard")}
                content={t("techforge_pargraph")}
                icon1={`/SkillsIcons/${
                  themeMode === "light" ? "html" : "html_white"
                }.png`}
                icon2={`/SkillsIcons/${
                  themeMode === "light" ? "css" : "css_white"
                }.png`}
                icon3={`/SkillsIcons/${
                  themeMode === "light" ? "js" : "js_white"
                }.png`}
                icon4={`/SkillsIcons/${
                  themeMode === "light" ? "tailwind" : "tailwind_white"
                }.png`}
                icon5={`/SkillsIcons/${
                  themeMode === "light" ? "react" : "react_white"
                }.png`}
                icon6={`/SkillsIcons/${
                  themeMode === "light" ? "netlify" : "netlify_white"
                }.png`}
                photo={"/work/TechForge.png"}
                webLink={"https://techforgedashboard.netlify.app/"}
                gitHub={"https://github.com/SeyarSawayz/TechForgeDashboard.git"}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Work;
