import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const farsi = currentLanguage === "fa" || currentLanguage === "ps";

  return (
    <TranslationContext.Provider value={{ t, i18n, currentLanguage, farsi }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => useContext(TranslationContext);
