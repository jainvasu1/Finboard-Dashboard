"use client";

import { useState } from "react";

interface AddWidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddWidgetModal({
  isOpen,
  onClose,
}: AddWidgetModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  if (!isOpen) return null;

  const handleTestApi = () => {
    setIsTesting(true);

    // fake API test
    setTimeout(() => {
      setIsTesting(false);
      setIsExpanded(true); // 🔥 EXPAND MODAL
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full transition-all duration-300 
        ${isExpanded ? "max-w-xl" : "max-w-md"}
        rounded-xl border border-white/10 bg-[#020617] p-6`}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Add New Widget
          </h2>
          <button onClick={onClose} className="text-gray-400">✕</button>
        </div>

        {/* BASIC SECTION (ALWAYS VISIBLE) */}
        <div className="space-y-4">
          {/* Widget Name */}
          <div>
            <label className="text-sm text-gray-400">Widget Name</label>
            <input
              placeholder="e.g. Bitcoin Price Tracker"
              className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none"
            />
          </div>

          {/* API URL */}
          <div>
            <label className="text-sm text-gray-400">API URL</label>
            <div className="mt-1 flex gap-2">
              <input
                placeholder="https://api.coinbase.com/..."
                className="flex-1 rounded-md bg-white/5 px-3 py-2 text-white outline-none"
              />
              <button
                onClick={handleTestApi}
                disabled={isTesting}
                className="rounded-md bg-emerald-500 px-3 text-sm text-white"
              >
                {isTesting ? "Testing..." : "Test"}
              </button>
            </div>
          </div>

          {/* Refresh Interval */}
          <div>
            <label className="text-sm text-gray-400">
              Refresh Interval (seconds)
            </label>
            <input
              type="number"
              defaultValue={30}
              className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none"
            />
          </div>

          {/* 🔽 EXPANDED SECTION (ONLY AFTER TEST) */}
          {isExpanded && (
            <>
              {/* Success */}
              <div className="rounded-md bg-emerald-500/15 px-3 py-2 text-sm text-emerald-400">
                ✅ API connection successful | Top-level fields found
              </div>

              {/* Display Mode */}
              <div>
                <label className="text-sm text-gray-400">
                  Display Mode
                </label>
                <div className="mt-2 flex gap-2">
                  <button className="rounded bg-emerald-500 px-3 py-1 text-sm text-white">
                    Card
                  </button>
                  <button className="rounded bg-white/10 px-3 py-1 text-sm text-gray-300">
                    Table
                  </button>
                  <button className="rounded bg-white/10 px-3 py-1 text-sm text-gray-300">
                    Chart
                  </button>
                </div>
              </div>

              {/* Placeholder */}
              <div className="rounded-md bg-white/5 px-3 py-2 text-sm text-gray-400">
                Field selection UI will appear here…
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button
            disabled={!isExpanded}
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm text-white disabled:opacity-50"
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}
