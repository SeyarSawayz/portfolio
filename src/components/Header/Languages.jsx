import React, { useState } from "react";
import useTheme from "../../context/theme";

const Languages = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="bg-white absolute w-[200px] top-16 md:right-48  flex flex-col items-start rounded-lg p-4 border border-gray-600 fade-in-top z-[999]">
          <div
            className="flex w-full justify-between hover:bg-gray-200 cursor-pointer rounded-lg p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src="/icons/en_flag.png" alt="" />

            <h3 className="font-bold ">English</h3>
          </div>
          <div
            className="flex w-full justify-between hover:bg-gray-200 cursor-pointer rounded-lg p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src="/icons/af_flag.png" alt="" />
            <h3 className="font-bold ">دری/فارسی</h3>
          </div>
          <div
            className="flex w-full justify-between hover:bg-gray-200 cursor-pointer rounded-lg p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src="/icons/af_flag.png" alt="" />
            <h3 className="font-bold ">پشتو</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Languages;
