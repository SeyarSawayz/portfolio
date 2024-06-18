import React from "react";
import ServicesCard from "./ServicesCard";
import { useTranslationContext } from "../../context/TranslationProvider";

const Services = () => {
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
    <section
      className="flex flex-col items-center justify-between gap-1 mt-[105px]"
      id="services"
    >
      <h1
        className={`font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0] ${
          farsi ? "font-Amiri md:text-2xl mx-3" : ""
        }`}
      >
        {t("SERVICES")}
      </h1>
      <p
        className={`text-gray-500 font-semibold dark:text-[#70d8bd] ${
          farsi ? "font-Amiri" : ""
        }`}
      >
        {t("What_i_offer")}
      </p>
      <div className="md:min-w-[500px] md:w-[600px] w-[400px] min-h-[400px] border dark:border-slate-600 border-gray-400 rounded-3xl p-0  md:p-4 flex flex-col items-center  mt-4 shadow-2xl gap-3 ">
        <h1
          className={`font-bold text-xl my-3 text-slate-600 dark:text-[#e0e0e0]  ${
            farsi ? "font-Amiri" : ""
          }`}
        >
          {t("Web_designer")}
        </h1>
        <div className="flex  justify-center w-full">
          <p
            className={`max-w-[300px] text-center text-slate-600 dark:text-[#70d8bd] ${
              farsi ? "font-Vazirmatn" : ""
            }`}
          >
            {t("service_text")}
          </p>
        </div>
        <div
          className=" p-4 flex flex-col self-start items-center justify-start gap-3 "
          dir={`${farsi ? "rtl" : "ltr"}`}
        >
          <ServicesCard content={t("service_1")} />
          <ServicesCard content={t("service_2")} />
          <ServicesCard content={t("service_3")} />
          <ServicesCard content={t("service_4")} />
          <ServicesCard content={t("service_5")} />
        </div>
      </div>
    </section>
  );
};

export default Services;
