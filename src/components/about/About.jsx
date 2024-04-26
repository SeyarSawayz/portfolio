import AboutMeCard from "./AboutMeCard";
import useTheme from "../../context/theme";
import cv from "../../../src/assets/seyar.pdf";

const About = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <section
      id="about"
      className="mt-[102px] flex flex-col items-center justify-center "
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0]">
          ABOUT ME
        </h1>
        <p className="text-gray-500 font-semibold dark:text-[#70d8bd]">
          My Introduction
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-20 md:mt-5 my-10 rounded-2xl  border border-gray-200 p-6 dark:border-slate-600 shadow-2xl">
        <div>
          <img
            src="/passport.png"
            alt="My Images"
            className="size-[250px] rounded-full shadow-2xl"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-between">
            <AboutMeCard
              icon={`/icons/${
                themeMode === "light" ? "medal" : "medal_white"
              }.png`}
              title={"Experience"}
              subtitle={"2 years working"}
            />
            <AboutMeCard
              icon={`/icons/${
                themeMode === "light" ? "completed" : "completed_white"
              }.png`}
              title={"Completed"}
              subtitle={"10+ projects"}
            />

            <AboutMeCard
              icon={`/icons/${
                themeMode === "light" ? "support" : "support_white"
              }.png`}
              title={"Support"}
              subtitle={"online 24/7"}
            />
          </div>
          <p className="max-w-[390px] mt-4 text-justify text-slate-600 dark:text-[#70d8bd]">
            As a proficient frontend developer, I specialize in HTML, CSS,
            JavaScript, React, and Tailwind CSS, with extensive experience in
            version control using Git and GitHub. With a passion for crafting
            dynamic and responsive user interfaces, I bring creativity and
            technical expertise to every project I undertake. My portfolio
            showcases a diverse range of projects that demonstrate my skills and
            dedication to delivering high-quality web solutions.
          </p>

          <a
            className="flex gap-2 self-start mt-4 bg-zinc-900 hover:bg-zinc-800 text-white px-12 py-4 rounded-2xl cursor-pointer dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0]"
            download=""
            href={cv}
            target="_blank"
          >
            Download CV <img src="/icons/cv.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
