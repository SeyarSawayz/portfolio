import React from "react";
import useTheme from "../../context/theme";

const Social = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <div className="flex flex-col ml-4 justify-between gap-3 ">
      <a href="https://github.com/seyarsawayz" target="_blank">
        <img
          src={`/icons/${themeMode === "light" ? "github" : "githubWhite"}.png`}
          alt="Github"
          className="hover:scale-110 hover:transition-all hover:duration-300"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/seyar-sawayz-159119119/"
        target="_blank"
      >
        <img
          src={`/icons/${
            themeMode === "light" ? "linkedin" : "linkedin_white"
          }.png`}
          alt="LinkedIN"
          className="hover:scale-110 hover:transition-all hover:duration-300"
        />
      </a>

      <a href="https://instagram.com/kayhan_tech" target="_blank">
        <img
          src={`/icons/${
            themeMode === "light" ? "insta" : "instagram_white"
          }.png`}
          alt="instagram"
          className="hover:scale-110 hover:transition-all hover:duration-300"
        />
      </a>
      <a href="https://www.youtube.com/c/kayhantech" target="_blank">
        <img
          src={`/icons/${
            themeMode === "light" ? "youtube" : "youtube_white"
          }.png`}
          alt="Youtube"
          className="hover:scale-110 hover:transition-all hover:duration-300"
        />
      </a>
      <a href="https://twitter.com/seyarsawayz" target="_blank">
        <img
          src={`/icons/${themeMode === "light" ? "x" : "x_white"}.png`}
          className=" size-[16px] hover:scale-110 hover:transition-all hover:duration-300 ml-0.5"
          alt="twitter"
        />
      </a>
    </div>
  );
};

export default Social;
