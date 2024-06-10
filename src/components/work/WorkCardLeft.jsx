import { useState } from "react";
import { useTranslationContext } from "../../context/TranslationProvider";

const WorkCardLeft = ({
  photo,
  title,
  content,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  webLink,
  gitHub,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isGitHoverred, setisGitHoverred] = useState(false);
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
    <div className="grid lg:grid-cols-2 items-center justify-between my-10">
      <div className="lg:hover:scale-105  duration-300 ease-in-out cursor-pointer">
        <img src={photo} alt="" />
      </div>
      <div className="flex items-center lg:justify-start lg:items-center justify-center flex-col">
        <h1
          className={`font-bold text-xl mb-3 text-slate-600 dark:text-[#e0e0e0] ${
            farsi ? " font-Amiri" : ""
          }`}
        >
          {title}
        </h1>
        <p
          className={`max-w-[350px] text-justify text-slate-600 lg:px-0 px-4 dark:text-[#70d8bd] ${
            farsi ? "font-Amiri" : ""
          }`}
        >
          {content}
        </p>
        <div className="flex flex-row items-center mt-4 gap-2">
          <img
            src={icon1}
            alt=""
            className="hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer"
          />
          <img
            src={icon2}
            alt=""
            className="hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer"
          />
          <img
            src={icon3}
            alt=""
            className="hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer"
          />
          <img
            src={icon4}
            alt=""
            className="hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer"
          />
          <img
            src={icon5}
            alt=""
            className="hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer"
          />
          <img
            src={icon6}
            alt=""
            className="hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer"
          />
          <img
            src={icon7}
            alt=""
            className="hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`bg-zinc-900 hover:bg-zinc-800 text-lg mt-10  text-white py-2 rounded-md cursor-pointer font-bold flex items-center justify-center gap-2 transition-all ease-in duration-200 dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] ${
              isHovered ? "w-40" : "w-36"
            } ${farsi ? "font-Amiri" : ""}`}
            href={webLink}
            target="_blank"
          >
            {t("View_It_Here")} {isHovered && <img src="/work/arrows.png" />}
          </a>

          <a
            onMouseEnter={() => setisGitHoverred(true)}
            onMouseLeave={() => setisGitHoverred(false)}
            className={`bg-zinc-900 hover:bg-zinc-800 text-lg mt-10  text-white py-2 rounded-md cursor-pointer font-bold flex items-center justify-center gap-2 transition-all ease-in duration-200 dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] ${
              isGitHoverred ? "w-52" : "w-48"
            } ${farsi ? "font-Amiri" : ""}`}
            href={gitHub}
            target="_blank"
          >
            {t("View_Github_Repo")}{" "}
            {isGitHoverred && <img src="/work/arrows.png" />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCardLeft;
