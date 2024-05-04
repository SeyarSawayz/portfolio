import Talk from "./Talk";
import ContactForm from "./ContactForm";
import useTheme from "../../context/theme";
import { useTranslationContext } from "../../context/TranslationProvider";

const ContactMe = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const { t, i18n, currentLanguage, farsi } = useTranslationContext();

  return (
    <section
      className="flex flex-col items-center justify-between gap-1  mb-10"
      id="contact"
      dir={`${farsi ? "rtl" : "ltr"}`}
    >
      <h1
        className={`font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0] ${
          farsi ? "font-Amiri text-2xl" : ""
        }`}
      >
        {t("Get_in_touch")}
      </h1>
      {!farsi && (
        <p
          className={`text-gray-500 font-semibold dark:text-[#70d8bd] farsi ? "font-Amiri text-2xl" : ""
        }`}
        >
          {t("Contact_Me")}
        </p>
      )}
      <div className="w-full grid md:grid-cols-2 items-center justify-center    gap-3 ">
        <div className="flex flex-col items-center justify-center gap-3  min-h-[500px] ">
          <h1
            className={`font-semibold text-lg text-zinc-800 dark:text-[#e0e0e0] ${
              farsi ? "font-Amiri" : ""
            }`}
          >
            {t("Talk_to_me")}
          </h1>
          <Talk
            platform={t("Email")}
            target={"sawayzseyar@gmail.com"}
            icon={`/icons/${
              themeMode === "light" ? "email" : "email_white"
            }.png`}
          />

          <Talk
            platform={t("WhatsApp")}
            target={"+91 974044 73043"}
            icon={`/icons/${
              themeMode === "light" ? "whatsapp" : "whatsapp_white"
            }.png`}
          />

          <Talk
            platform={t("Messenger")}
            target={"SeyarSawayz"}
            icon={`/icons/${
              themeMode === "light" ? "messenger" : "messenger_white"
            }.png`}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:mt-9 min-h-[500px]">
          <h1
            className={`font-semibold text-lg text-center text-zinc-800 dark:text-[#e0e0e0] ${
              farsi ? "font-Amiri text-xl" : ""
            }`}
          >
            {t("Write_me_your_project")}
          </h1>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
