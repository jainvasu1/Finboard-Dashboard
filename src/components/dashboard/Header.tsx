"use client";

import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header({ onAddWidget }: { onAddWidget: () => void }) {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a]">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
            📊
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white">
              Finance Dashboard
            </h1>
            <p className="text-sm text-gray-400">
              Connect to APIs and build your custom dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={onAddWidget}
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
          >
            + Add Widget
          </button>
        </div>
      </div>
    </header>
  );
}
