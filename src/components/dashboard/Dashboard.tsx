"use client";

import { useState } from "react";
import Header from "./Header";
import AddWidgetModal from "./AddWidgetModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black
      dark:from-[#020617] dark:via-[#020617] dark:to-black
      bg-white transition-colors duration-200">
      <Header onAddWidget={() => setIsModalOpen(true)} />

      <main className="flex h-[calc(100vh-72px)] items-center justify-center px-4">
        <div className="text-center max-w-xl">
         
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10
            dark:bg-white/5 dark:border-white/10
            bg-gray-100 border-gray-200">
            📊
          </div>
          <h2 className="text-2xl font-semibold text-white dark:text-white text-gray-900">
            Build Your Finance Dashboard
          </h2>
          <p className="mt-3 text-sm text-gray-400 dark:text-gray-400 text-gray-600 leading-relaxed">
            Create custom widgets by connecting to any finance API.
            Track stocks, crypto, forex, or economic indicators — all
            in real-time.
          </p>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500 text-gray-600">
            Click{" "}
            <span className="text-emerald-400 dark:text-emerald-400 text-emerald-600 font-medium">
              &ldquo;Add Widget&rdquo;
            </span>{" "}
            to get started 🚀
          </p>
        </div>
      </main>

      <AddWidgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
