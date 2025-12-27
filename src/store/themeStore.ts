import { create } from "zustand";

interface ThemeState {
  theme: string;
  toggleTheme: () => void;
  setTheme: (value: string) => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "dark",

  toggleTheme: () => {
    if (get().theme === "dark") {
      set({ theme: "light" });
    } else {
      set({ theme: "dark" });
    }
  },

  setTheme: (value) => {
    set({ theme: value });
  },
}));
