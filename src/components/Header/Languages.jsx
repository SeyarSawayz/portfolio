import React, { useState } from "react";
import useTheme from "../../context/theme";
import i18n from "i18next";
import { useTranslationContext } from "../../context/TranslationProvider";
const Languages = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n, farsi } = useTranslationContext();

  const languages = [
    {
      code: "en",
      name: "English",
      country_flag: "en",
    },
    {
      code: "ps",
      name: "پشتو",
      country_flag: "af",
    },
    {
      code: "fa",
      name: "دری/فارسی",
      country_flag: "af",
    },
  ];

  const changLng = () => {
    setIsOpen((prev) => !prev);
    i18n.changeLanguage();
  };
  return (
    <>
      <div className="relative  flex flex-col items-center  w-[90px] rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-transparent p-2 flex items-center justify-center gap-3 rounded-md"
        >
          <img
            src={`/icons/${
              themeMode === "light" ? "earth" : "earth_white"
            }.png`}
            alt=""
          />
          {!isOpen ? (
            <img
              src={`/icons/${
                themeMode === "light" ? "downArrow" : "downArrow_white"
              }.png`}
              alt=""
            />
          ) : (
            <img
              src={`/icons/${
                themeMode === "light" ? "upArrow" : "upArrow_white"
              }.png`}
              alt=""
            />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className={`bg-white absolute w-[200px] top-16  ${
            farsi ? "md:left-48" : "md:right-48"
          } flex flex-col items-start rounded-lg p-4 border border-gray-600 fade-in-top z-[999]`}
        >
          {languages.map((item, i) => (
            <div
              className={`flex w-full justify-between hover:bg-gray-200 cursor-pointer rounded-lg p-2 ${
                farsi ? "font-Amiri text-lg" : ""
              }`}
              onClick={() => {
                setIsOpen((prev) => !prev);
                i18n.changeLanguage(item.code);
              }}
              key={i}
            >
              <img src={`/icons/${item.country_flag}_flag.png`} alt="" />

              <h3 className="font-bold ">{item.name}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Languages;
