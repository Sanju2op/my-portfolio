// src/components/theme-provider.js
"use client";

import { useState, useEffect } from "react";

const ThemeProvider = ({
  children,
  defaultTheme = "light",
  enableSystem = false,
  attribute = "class",
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
  }, [enableSystem]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <div className={theme}>{children}</div>;
};

export { ThemeProvider };
