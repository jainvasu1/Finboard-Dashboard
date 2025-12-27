"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-xl text-gray-300 hover:scale-110 transition"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
