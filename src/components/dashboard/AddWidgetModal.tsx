"use client";

import { useState } from "react";

interface AddWidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DisplayMode = "card" | "table" | "charts";

export default function AddWidgetModal({
  isOpen,
  onClose,
};
AddWidgetModalProps ) {
  const [widgetName, setWidgetName] = useState("");
  const [apiurl, setApiUrl] = useState("");
  const [refreshinterval, setRefreshInterval] = useState(30);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("card");
  const [isTesting, setIsTesting] = useState(false);
  const [isApiVerified, setIsApiVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleTestApi = async () => {
    if (!apiurl.trim()) { setErrorMessage("API URL is required");
      return ;
    }

    setErrorMessage("");
    setIsTesting(true);


    setTimeout(() => {
      setIsApiVerified(true);
      setIsTesting(false);
    }, 2000);
      
    };

    console.log("WIDGET ADDED:", payload);
    onClose();
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
  

  


  )