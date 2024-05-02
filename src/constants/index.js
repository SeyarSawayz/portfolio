import { useTranslation } from "react-i18next";

export const getMenu = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const farsi = currentLanguage === "fa" || currentLanguage === "ps";

  const menu = [
    {
      id: "home",
      title: t("HOME"),
    },
    {
      id: "about",
      title: t("ABOUT ME"),
    },
    {
      id: "skills",
      title: t("SKILLS"),
    },
    {
      id: "services",
      title: t("SERVICES"),
    },
    {
      id: "work",
      title: t("PROJECTS"),
    },
    {
      id: "contact",
      title: t("CONTACT"),
    },
  ];

  return menu;
};
