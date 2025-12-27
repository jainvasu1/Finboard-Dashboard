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
  