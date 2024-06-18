import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";

const ServicesCard = ({ content }) => {
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <div
      className="flex flex-row items-center justify-start gap-2 min-w-[400px] md:min-w-[550px] pr-8 lg:pr-0 "
      dir={`${farsi ? "rtl" : "ltr"}`}
    >
      <img
        src={`/icons/${
          themeMode === "light" ? "checkmark" : "checkmark_white"
        }.png`}
        className="size-5"
        alt=""
      />
      <h1 className="text-slate-600 font-normal md:text-lg text-sm dark:text-[#70d8bd]">
        {content}
      </h1>
    </div>
  );
};

export default ServicesCard;
