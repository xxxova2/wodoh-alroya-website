"use client";

import { useCallback, useEffect, useState } from "react";
import { themes, STORAGE_KEY, DEFAULT_THEME, type ThemeId } from "@/lib/themes";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as ThemeId) || DEFAULT_THEME;
    setThemeState(current);
    // Allow theme transitions to kick in after the first paint (FOUC guard).
    document.documentElement.classList.remove("preload");
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    document.documentElement.dataset.theme = id;
    document.documentElement.classList.remove("preload");
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  return { theme, setTheme, themes };
}
