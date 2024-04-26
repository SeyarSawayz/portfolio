import { useState } from "react";
import WorkCardLeft from "./WorkCardLeft";
import WorkCardRight from "./WorkCardRight";
import useTheme from "../../context/theme";

const Work = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [more, setMore] = useState(false);
  const [moreSecond, setMoreSecond] = useState(false);

  return (
    <>
      <section
        className="flex flex-col items-center justify-between w-full gap-1 mt-[170px] slide-top"
        id="work"
      >
        <h1 className="font-bold text-[30px] text-zinc-800 dark:text-[#e0e0e0]">
          PROJECTS
        </h1>
        <p className="text-gray-500 font-semibold dark:text-[#70d8bd]">
          A Selection Of Stuff I've Built
        </p>
        <div className="w-full min-h-[400px] border dark:border-slate-600 border-gray-400 rounded-3xl  p-4 flex flex-col items-center  mt-4 shadow-2xl gap-3 overflow-hidden">
          <WorkCardRight
            title={"TechForge Dashboard"}
            content={
              "A responsive dashboard, built with Material-UI (MUI), featuring both dark and light modes. Utilizes libraries such as react-pro-sidebar and nivo charts. Form validation is implemented using Yup and Formik."
            }
            icon1={`/SkillsIcons/${
              themeMode === "light" ? "html" : "html_white"
            }.png`}
            icon2={`/SkillsIcons/${
              themeMode === "light" ? "css" : "css_white"
            }.png`}
            icon3={`/SkillsIcons/${
              themeMode === "light" ? "js" : "js_white"
            }.png`}
            icon4={`/SkillsIcons/${
              themeMode === "light" ? "tailwind" : "tailwind_white"
            }.png`}
            icon5={`/SkillsIcons/${
              themeMode === "light" ? "react" : "react_white"
            }.png`}
            icon6={`/SkillsIcons/${
              themeMode === "light" ? "netlify" : "netlify_white"
            }.png`}
            photo={"/work/TechForge.png"}
            webLink={"https://techforgedashboard.netlify.app/"}
            gitHub={"https://github.com/SeyarSawayz/TechForgeDashboard.git"}
          />
          <WorkCardLeft
            title={"Modern Bank App"}
            content={
              "Developed with React and Tailwind CSS, the Single Page Application (SPA) boasts a cutting-edge design, ensuring responsiveness across various devices. Embracing modern web development practices, the application offers a seamless user experience while harnessing the power of React's dynamic components and Tailwind CSS's utility-first approach to styling."
            }
            icon1={`/SkillsIcons/${
              themeMode === "light" ? "html" : "html_white"
            }.png`}
            icon2={`/SkillsIcons/${
              themeMode === "light" ? "css" : "css_white"
            }.png`}
            icon3={`/SkillsIcons/${
              themeMode === "light" ? "js" : "js_white"
            }.png`}
            icon4={`/SkillsIcons/${
              themeMode === "light" ? "tailwind" : "tailwind_white"
            }.png`}
            icon5={`/SkillsIcons/${
              themeMode === "light" ? "react" : "react_white"
            }.png`}
            icon6={`/SkillsIcons/${
              themeMode === "light" ? "netlify" : "netlify_white"
            }.png`}
            photo={"/work/bankapp.png"}
            webLink={"https://bankfolio.netlify.app/"}
            gitHub={"https://github.com/SeyarSawayz/ModernBankApp.git"}
          />
          <WorkCardRight
            title={"Netflix Landiga page UI Clone"}
            content={
              "The Netflix landing page UI, meticulously crafted using HTML and Tailwind CSS, exemplifies a harmonious blend of aesthetics and functionality. Tailored to adapt seamlessly to various devices, its responsive design ensures an optimal viewing experience across different screen sizes. xt"
            }
            icon1={`/SkillsIcons/${
              themeMode === "light" ? "html" : "html_white"
            }.png`}
            icon2={`/SkillsIcons/${
              themeMode === "light" ? "css" : "css_white"
            }.png`}
            icon3={`/SkillsIcons/${
              themeMode === "light" ? "js" : "js_white"
            }.png`}
            icon4={`/SkillsIcons/${
              themeMode === "light" ? "tailwind" : "tailwind_white"
            }.png`}
            icon6={`/SkillsIcons/${
              themeMode === "light" ? "netlify" : "netlify_white"
            }.png`}
            photo={"/work/netlifx.png"}
            webLink={"https://streamscapes.netlify.app/"}
            gitHub={"https://github.com/SeyarSawayz/NetflixLandingPage.git"}
          />{" "}
          <button
            className={`bg-zinc-900 flex gap-2 items-center hover:bg-zinc-800 mt-4 text-lg text-white px-4 py-2 rounded-md font-bold dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] ${
              more ? "hidden" : "block"
            }`}
            onClick={() => setMore((prev) => !prev)}
          >
            See more{" "}
            <img src="/icons/downWhite.png" className="slide-in-top" alt="" />
          </button>
          {more && (
            <div className="fade-in-top">
              <WorkCardLeft
                title={"KayhanTech"}
                content={
                  "The website for Kayhan Tech's YouTube channel has been meticulously crafted using the versatile styling capabilities of Bootstrap. By leveraging Bootstrap's extensive framework, the website is not only aesthetically pleasing but also highly functional, with a layout that dynamically adjusts to different screen sizes and devices. "
                }
                icon1={`/SkillsIcons/${
                  themeMode === "light" ? "html" : "html_white"
                }.png`}
                icon2={`/SkillsIcons/${
                  themeMode === "light" ? "css" : "css_white"
                }.png`}
                icon3={`/SkillsIcons/${
                  themeMode === "light" ? "js" : "js_white"
                }.png`}
                icon4={`/SkillsIcons/${
                  themeMode === "light" ? "tailwind" : "tailwind_white"
                }.png`}
                icon5={`/SkillsIcons/${
                  themeMode === "light" ? "bootstrap" : "bootstrap_white"
                }.png`}
                icon6={`/SkillsIcons/${
                  themeMode === "light" ? "netlify" : "netlify_white"
                }.png`}
                photo={"/work/kayhantech.png"}
                webLink={"https://kayhantech.netlify.app/"}
                gitHub={"https://github.com/SeyarSawayz/MyWebsite.git"}
              />
              <WorkCardRight
                title={"X UI Clone"}
                content={
                  "X (Twitter) Landing page clone has been meticulously crafted using Tailwind CSS. This clone ensures full responsiveness across a wide range of devices, guaranteeing an optimal viewing experience regardless of screen size or device type. "
                }
                icon1={`/SkillsIcons/${
                  themeMode === "light" ? "html" : "html_white"
                }.png`}
                icon2={`/SkillsIcons/${
                  themeMode === "light" ? "css" : "css_white"
                }.png`}
                icon3={`/SkillsIcons/${
                  themeMode === "light" ? "js" : "js_white"
                }.png`}
                icon4={`/SkillsIcons/${
                  themeMode === "light" ? "tailwind" : "tailwind_white"
                }.png`}
                icon6={`/SkillsIcons/${
                  themeMode === "light" ? "netlify" : "netlify_white"
                }.png`}
                photo={"/work/xclone.png"}
                webLink={"https://xclonebyseyar.netlify.app/"}
                gitHub={"https://github.com/SeyarSawayz/XClone.git"}
              />
              <WorkCardLeft
                title={"DoDay Online Task Tracker"}
                content={
                  "Built with React and styled using Tailwind CSS, this task tracker offers seamless task management. With local storage integration, users can efficiently store and access their tasks, enhancing productivity."
                }
                icon1={`/SkillsIcons/${
                  themeMode === "light" ? "html" : "html_white"
                }.png`}
                icon2={`/SkillsIcons/${
                  themeMode === "light" ? "css" : "css_white"
                }.png`}
                icon3={`/SkillsIcons/${
                  themeMode === "light" ? "js" : "js_white"
                }.png`}
                icon4={`/SkillsIcons/${
                  themeMode === "light" ? "tailwind" : "tailwind_white"
                }.png`}
                icon5={`/SkillsIcons/${
                  themeMode === "light" ? "react" : "react_white"
                }.png`}
                icon6={`/SkillsIcons/${
                  themeMode === "light" ? "netlify" : "netlify_white"
                }.png`}
                photo={"/work/doday.png"}
                webLink={"https://dodaytasktracker.netlify.app/"}
                gitHub={"https://github.com/SeyarSawayz/DoDayTaskTracker.git"}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Work;
