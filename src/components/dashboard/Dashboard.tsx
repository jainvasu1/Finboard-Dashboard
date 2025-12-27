"use client";

import { useState } from "react";
import Header from "./Header";
import AddWidgetModal from "./AddWidgetModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617]">
      <Header onAddWidget={() => setIsModalOpen(true)} />

      <main className="p-6">
        <div className="border-2 border-dashed border-white/15 rounded-xl h-[65vh] flex items-center justify-center bg-white/5">
          <p className="text-gray-300 text-sm">
            No widgets added yet. Click{" "}
            <span className="text-emerald-400 font-medium">
              “Add Widget”
            </span>{" "}
            to start 🚀
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
