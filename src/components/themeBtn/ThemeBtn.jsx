import React from "react";
import { useState } from "react";
import useTheme from "../../context/theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [dark, setDark] = useState(themeMode === "dark");

  const handleToggleTheme = () => {
    if (dark) {
      lightTheme();
    } else {
      darkTheme();
    }
    setDark((prevDark) => !prevDark);
  };

  return (
    <div className="cursor-pointer" onClick={handleToggleTheme}>
      <img
        src={`/icons/${dark ? "dark" : "light"}.png`}
        className="h-7 w-7"
        alt=""
      />
    </div>
  );
}
