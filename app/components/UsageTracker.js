"use client";

import { useEffect } from "react";

const USAGE_DAYS_KEY = "rafikiUsageDays";

function safeParseJson(value, fallback) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export default function UsageTracker() {
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const storedDays = safeParseJson(
      localStorage.getItem(USAGE_DAYS_KEY) || "[]",
      [],
    );
    if (!storedDays.includes(today)) {
      localStorage.setItem(
        USAGE_DAYS_KEY,
        JSON.stringify([today, ...storedDays].slice(0, 365)),
      );
    }
  }, []);

  return null;
}
