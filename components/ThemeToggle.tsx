"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  console.log("theme:", theme);
  return (
    <button
      className="relative p-2 inline-flex bg-slate-950 dark:bg-slate-50 rounded-sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        size="18"
        className="transition-all text-slate-50 scale-100 rotate-0 dark:-rotate-90 dark:scale-0 mr-2"
      />
      <Moon
        size="18"
        className="absolute text-slate-900 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 mr-2"
      />
      <span className="transition-all text-slate-50 scale-100 dark:scale-0 block dark:hidden">
        Toggle theme
      </span>
      <span className="transition-all text-slate-900 hidden dark:block scale-0 dark:scale-100">
        Toggle theme
      </span>
    </button>
  );
};

export default ThemeToggle;
