"use client";

import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="text-xl text-gray-300 hover:scale-110 transition-transform duration-200
        dark:text-gray-300 dark:hover:text-white
        text-gray-700 hover:text-gray-900"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
