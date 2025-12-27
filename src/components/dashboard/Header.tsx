"use client";

import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header(props: any) {
  return (
    <header className="w-full border-b border-white/10 bg-black">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-white text-lg">
          Finance Dashboard
        </h1>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => props.onAddWidget()}
            className="rounded bg-emerald-500 px-3 py-2 text-sm text-white"
          >
            Add Widget
          </button>
        </div>
      </div>
    </header>
  );
}
