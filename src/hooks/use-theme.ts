"use client";

import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const getInitial = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return stored || (prefersDark ? "dark" : "light");
  };

  useEffect(() => {
    setTheme(getInitial());
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return { theme, toggle, resolved: mounted };
}
