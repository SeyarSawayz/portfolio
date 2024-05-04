import { useState } from "react";
import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";

const Talk = ({ platform, target, icon }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  const [hoverIcon, setHoverIcon] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 py-2 min-h-[110px] min-w-[250px] rounded-md border border-slate-300 dark:border-slate-600">
      <img src={icon} alt="" />
      <h1
        className={`font-semibold text-sm text-zinc-800 dark:text-[#e0e0e0] ${
          farsi ? "font-Amiri" : ""
        }`}
      >
        {platform}
      </h1>
      <h1 className="font-semibold text-sm text-slate-600 dark:text-[#70d8bd]">
        {target}
      </h1>
      <h1
        className={`font-semibold text-sm text-slate-600 flex items-center justify-center cursor-pointer mt-2 dark:text-[#70d8bd] ${
          farsi ? "font-Amiri" : ""
        }`}
        onMouseEnter={() => setHoverIcon(true)}
        onMouseLeave={() => setHoverIcon(false)}
      >
        {t("Write_me")}{" "}
        <img
          src={`/icons/${
            farsi
              ? themeMode === "light"
                ? "arrowLeft"
                : "arrowLeft_white"
              : themeMode === "light"
              ? "arrow"
              : "arrow_white"
          }.png`}
          alt=""
          className={`${
            hoverIcon ? (farsi ? "slide-left " : "slide-right") : undefined
          } `}
        />
      </h1>
    </div>
  );
};

export default Talk;
