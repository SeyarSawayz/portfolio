import React, { useEffect } from "react";
import SkillsCard from "./SkillsCard";
import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";
import { Element } from "react-scroll";

const Skills = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
    <section
      className=" skills flex flex-col items-center justify-between gap-1 mt-[80px]"
      id="skills"
    >
      <h1
        className={`font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0] ${
          farsi ? "font-Amiri lg:text-2xl mx-3" : ""
        }`}
      >
        {t("SKILLS")}
      </h1>
      <p
        className={`text-gray-500 font-semibold dark:text-[#70d8bd] ${
          farsi ? "font-Amiri" : ""
        }`}
      >
        {t("My_technical_level")}
      </p>
      <div className="grid lg:grid-cols-2 items-center justify-center gap-3 ">
        <div className="min-w-[400px] h-[400px] border border-gray-400 dark:border-slate-600 rounded-3xl  p-4 flex flex-col items-center mt-4 shadow-2xl gap-3">
          <h1
            className={`font-bold text-xl mb-3 text-slate-600 dark:text-[#e0e0e0] ${
              farsi ? "font-Amiri" : ""
            }`}
          >
            {t("Frontend_developer")}
          </h1>
          <div className="grid grid-cols-2 items-center justify-between gap-2 ">
            <SkillsCard
              title={"HTML"}
              subtitle={t("Advance")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "html" : "html_white"
              }.png`}
            />
            <SkillsCard
              title={"Tailwind"}
              subtitle={t("Intermediate")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "tailwind" : "tailwind_white"
              }.png`}
            />
            <SkillsCard
              title={"CSS"}
              subtitle={t("Intermediate")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "css" : "css_white"
              }.png`}
            />
            <SkillsCard
              title={"Javascript"}
              subtitle={t("Intermediate")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "js" : "js_white"
              }.png`}
            />
            <SkillsCard
              title={"React"}
              subtitle={t("Intermediate")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "react" : "react_white"
              }.png`}
            />
            <SkillsCard
              title={"Solidity"}
              subtitle={t(t("Basic"))}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "sol" : "sol_white"
              }.png`}
            />
            <SkillsCard
              title={"Web3"}
              subtitle={t("Basic")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "web3" : "web3_white"
              }.png`}
            />
            <SkillsCard
              title={"Blockchain"}
              subtitle={t("Basic")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "blockchain" : "blockchain_white"
              }.png`}
            />
          </div>
        </div>
        <div className="min-w-[400px] h-[400px] border border-gray-400 dark:border-slate-600 rounded-3xl  p-4 flex flex-col items-center mt-4 shadow-2xl gap-3">
          <h1
            className={`font-bold text-xl mb-3 text-slate-600 dark:text-[#e0e0e0] ${
              farsi ? "font-Amiri" : ""
            }`}
          >
            {t("Other_Tools")}
          </h1>
          <div className="grid grid-cols-2 items-center justify-center gap-2">
            <SkillsCard
              title={"Github"}
              subtitle={t("Intermediate")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "github" : "github_white"
              }.png`}
            />
            <SkillsCard
              title={"Netlify"}
              subtitle={t("Basic")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "netlify" : "netlify_white"
              }.png`}
            />
            <SkillsCard
              title={"VSCode"}
              subtitle={t("Intermediate")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "vs" : "vs_white"
              }.png`}
            />
            <SkillsCard
              title={"Responsive Websites"}
              subtitle={t("Basic")}
              icons={"/SkillsIcons/devices.png"}
            />
            <SkillsCard
              title={"Command Line"}
              subtitle={t("Basic")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "cli" : "cli_white"
              }.png`}
            />
            <SkillsCard
              title={"Adobe Premier"}
              subtitle={t("Basic")}
              icons={`/SkillsIcons/${
                themeMode === "light" ? "adobe" : "adobe_white"
              }.png`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
