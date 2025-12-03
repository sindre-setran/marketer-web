"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Apply theme class to body element with RAF for better performance
    requestAnimationFrame(() => {
      const body = document.body;
      if (theme === "dark") {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    });
  }, [theme]);

  const updateTheme = useCallback((newTheme: Theme) => {
    setTheme((currentTheme) => {
      // Prevent unnecessary updates
      if (currentTheme === newTheme) return currentTheme;
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

