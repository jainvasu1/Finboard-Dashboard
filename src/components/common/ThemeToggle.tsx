"use client";

import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={() => toggleTheme()}
      className="rounded border border-white/10 px-3 py-2 text-sm text-white"
    >
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
