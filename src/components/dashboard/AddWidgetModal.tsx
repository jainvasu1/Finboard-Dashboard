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
  const [isApiVerified, setIsApiVerified] = useState(false);
  const [isTestingApi, setIsTestingApi] = useState(false);

  if (!isOpen) return null;

  const handleTestApi = () => {
    setIsTestingApi(true);

    setTimeout(() => {
      setIsTestingApi(false);
      setIsApiVerified(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative w-full rounded-xl border border-white/10 bg-[#020617] p-6 transition-all duration-300
        ${isApiVerified ? "max-w-xl" : "max-w-md"}`}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Add New Widget
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">
              Widget Name
            </label>
            <input
              placeholder="Bitcoin Price Tracker"
              className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              API URL
            </label>
            <div className="mt-1 flex gap-2">
              <input
                placeholder="https://api.example.com/data"
                className="flex-1 rounded-md bg-white/5 px-3 py-2 text-white outline-none"
              />
              <button
                onClick={handleTestApi}
                disabled={isTestingApi}
                className="rounded-md bg-emerald-500 px-3 text-sm text-white disabled:opacity-50"
              >
                {isTestingApi ? "Testing..." : "Test"}
              </button>
            </div>
          </div>

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

          {isApiVerified && (
            <>
              <div className="rounded-md bg-emerald-500/15 px-3 py-2 text-sm text-emerald-400">
                API connection verified successfully
              </div>

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

              <div className="rounded-md bg-white/5 px-3 py-2 text-sm text-gray-400">
                Field configuration options will appear here
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            disabled={!isApiVerified}
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm text-white disabled:opacity-50"
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}
