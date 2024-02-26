"use client";
import { Hero } from "@/components/Hero/Hero";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { ThemeEnum } from "@/consts/types";
import { useThemeSwitch } from "@/hooks/Theme/useThemeSwitch";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const { theme, setTheme } = useThemeSwitch();
  return (
    <main
      className={`flex h-full w-full flex-col items-center justify-center transition ease-in-out delay-150 ${
        theme === ThemeEnum.DARK ? "bg-black" : "bg-white"
      }`}
    >
      <div className="fixed top-6 right-6">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      <Hero theme={theme} />
    </main>
  );
}
