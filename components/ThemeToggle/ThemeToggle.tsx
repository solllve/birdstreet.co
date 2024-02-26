import { ThemeEnum } from "../../consts/types";
import { Moon } from "../svgs/Moon";
import { Sun } from "../svgs/Sun";
import { motion } from "framer-motion";

interface ThemeToggleTypes {
  setTheme: (theme: ThemeEnum) => void;
  theme: ThemeEnum;
}

export const ThemeToggle = ({ setTheme, theme }: ThemeToggleTypes) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() =>
        setTheme(theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK)
      }
    >
      {theme === ThemeEnum.DARK ? (
        <Sun theme={theme} />
      ) : (
        <Moon theme={theme} />
      )}
    </motion.button>
  );
};
