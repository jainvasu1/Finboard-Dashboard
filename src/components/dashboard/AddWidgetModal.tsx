"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddWidgetModal({ isOpen, onClose }: Props) {
  const [tested, setTested] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const testApi = () => {
    setLoading(true);

    setTimeout(() => {
      setTested(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed insert-0 z-50 flex items-center justify-center">
    <div
    onClick={onClose}
    className="absolute insert-0 bg-black/60 backdrop-blur-sm"/>

    <div className="relative z-10 w-full max-w-md rounded-xl border border-white/10 bg-[#020617] p-6">
    <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Add New Widget
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
    <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Widget Name</label>
            <input
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white"
              placeholder="Bitcoin Price"
            />
          </div>
                <div>
            <label className="text-sm text-gray-400">API URL</label>
            <div className="mt-1 flex gap-2">
              <input
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                className="flex-1 rounded-md bg-white/5 px-3 py-2 text-white"
                placeholder="https://api.example.com/data"
              />
              <button
                onClick={handleTestApi}
                disabled={isTestingApi}
                className="rounded-md bg-emerald-500 px-3 text-white disabled:opacity-50"
              >
                {isTestingApi ? "Testing..." : "Test"}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p className="text-sm text-red-400">{errorMessage}</p>
          )}

          {isApiVerified && (
            <div className="rounded-md bg-emerald-500/15 px-3 py-2 text-sm text-emerald-400">
               API connection successful
            </div>
          )}


           {isApiVerified && (
            <>
              <div>
                <label className="text-sm text-gray-400">
                  Refresh Interval (seconds)
                </label>
                <input
                  type="number"
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(Number(e.target.value))}
                  className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Display Mode
                </label>
                <div className="mt-2 flex gap-2">
                  {["card", "table", "chart"].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setDisplayMode(mode as DisplayMode)}
                      className={`rounded px-3 py-1 text-sm ${
                        displayMode === mode
                          ? "bg-emerald-500 text-white"
                          : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-md bg-white/5 px-3 py-2 text-sm text-gray-400">
                Field selection will appear here…
              </div>
            </>
          )}
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button
            onClick={handleAddWidget}
            disabled={!isApiVerified}
            className="rounded-md bg-emerald-500 px-4 py-2 text-white disabled:opacity-50"
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );

      
  

  


  