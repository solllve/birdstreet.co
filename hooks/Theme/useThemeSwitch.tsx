import { ThemeEnum } from "../../consts/types";
import { useLocalStorage } from "usehooks-ts";
import { siteTheme } from "../../consts/types";
import { useEffect, useState } from "react";

export const useThemeSwitch = () => {
  const [theme, setTheme] = useState(ThemeEnum.DARK);

  useEffect(() => {
    if ("siteTheme" in localStorage) {
      setTheme(localStorage.getItem("siteTheme") as ThemeEnum);
    } else {
      setTheme(ThemeEnum.LIGHT);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("siteTheme", theme);
  }, [theme]);

  return { theme, setTheme };
};
