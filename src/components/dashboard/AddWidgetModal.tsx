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
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-xl bg-[#020617] p-6">
        <div className="mb-4 flex justify-between">
          <h2 className="text-lg text-white">Add New Widget</h2>
          <button onClick={onClose} className="text-gray-400">
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Widget Name</label>
            <input
              className="mt-1 w-full rounded bg-white/10 px-3 py-2 text-white"
              placeholder="Bitcoin"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">API URL</label>
            <div className="mt-1 flex gap-2">
              <input
                className="flex-1 rounded bg-white/10 px-3 py-2 text-white"
                placeholder="https://api.example.com"
              />
              <button
                onClick={testApi}
                disabled={loading}
                className="rounded bg-emerald-500 px-3 text-white"
              >
                {loading ? "Testing..." : "Test"}
              </button>
            </div>
          </div>

          {tested && (
            <div className="rounded bg-emerald-500/20 px-3 py-2 text-sm text-emerald-400">
              API tested successfully
            </div>
          )}

          {tested && (
            <div>
              <label className="text-sm text-gray-400">
                Refresh Interval
              </label>
              <input
                type="number"
                defaultValue={30}
                className="mt-1 w-full rounded bg-white/10 px-3 py-2 text-white"
              />
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button
            disabled={!tested}
            className="rounded bg-emerald-500 px-4 py-2 text-white disabled:opacity-50"
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}