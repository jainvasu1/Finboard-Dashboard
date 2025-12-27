"use client";

import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm 
      bg-white/5 text-gray-200 hover:bg-white/10
      dark:bg-white/10 dark:text-white"
    >
      {theme === "dark" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}
