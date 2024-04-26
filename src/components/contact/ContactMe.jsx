import Talk from "./Talk";
import ContactForm from "./ContactForm";
import useTheme from "../../context/theme";

const ContactMe = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <section
      className="flex flex-col items-center justify-between gap-1  mb-10"
      id="contact"
    >
      <h1 className="font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0] ">
        Get in touch
      </h1>
      <p className="text-gray-500 font-semibold dark:text-[#70d8bd]">
        Contact Me
      </p>
      <div className="w-full grid md:grid-cols-2 items-center justify-center    gap-3 ">
        <div className="flex flex-col items-center justify-center gap-3  min-h-[500px] ">
          <h1 className="font-semibold text-lg text-zinc-800 dark:text-[#e0e0e0]">
            Talk to me
          </h1>
          <Talk
            platform={"Email"}
            target={"sawayzseyar@gmail.com"}
            icon={`/icons/${
              themeMode === "light" ? "email" : "email_white"
            }.png`}
          />

          <Talk
            platform={"WhatsApp"}
            target={"+91 974044 73043"}
            icon={`/icons/${
              themeMode === "light" ? "whatsapp" : "whatsapp_white"
            }.png`}
          />

          <Talk
            platform={"Messenger"}
            target={"SeyarSawayz"}
            icon={`/icons/${
              themeMode === "light" ? "messenger" : "messenger_white"
            }.png`}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:mt-9 min-h-[500px]">
          <h1 className="font-semibold text-lg text-center text-zinc-800 dark:text-[#e0e0e0]">
            Write me your project
          </h1>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
