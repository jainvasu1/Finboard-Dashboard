"use client";

import { useState } from "react";
import Header from "./Header";
import AddWidgetModal from "./AddWidgetModal";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black text-gray-200">
      <Header onAddWidget={() => setOpen(true)} />

      <main className="flex h-[calc(100vh-72px)] items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10">
            📊
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Build Your Finance Dashboard
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Create custom widgets by connecting to any finance API.
            Track stocks, crypto, forex, or economic indicators — all in real-time.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Click{" "}
            <span className="text-emerald-400 font-medium">
              Add Widget
            </span>{" "}
            to get started 🚀
          </p>
        </div>
      </main>

      <AddWidgetModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
