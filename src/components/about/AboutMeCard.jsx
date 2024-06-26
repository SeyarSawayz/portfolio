import { useTranslationContext } from "../../context/TranslationProvider";

const AboutMeCard = ({ icon, title, subtitle }) => {
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
    <div className="flex flex-col items-center justify-between gap-2 dark:border-slate-700 dark:bg-slate-800 border border-gray-200 p-3 rounded-md bg-white max-w-[150px] cursor-pointer hover:translate-y-1 hover:scale-105 transition-all ease-in-out duration-200">
      <img src={icon} alt="" />
      <h1
        className={`font-bold text-[16px] text-slate-600 dark:text-[#e0e0e0] ${
          farsi ? "font-Amiri text-xl" : ""
        }`}
      >
        {title}
      </h1>
      <p
        className={`font-semibold text-slate-500 text-sm dark:text-[#70d8bd] ${
          farsi ? "font-Vazirmatn" : ""
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default AboutMeCard;
