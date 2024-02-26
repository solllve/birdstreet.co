export const fadeInAnimation = {
  hidden: {
    y: "-6vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 3,
      type: "spring",
      damping: 65,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};

export enum ThemeEnum {
  DARK = "dark",
  LIGHT = "light",
}

export interface ThemeContextTypes {
  theme: ThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
}

export const siteTheme = "siteTheme";
