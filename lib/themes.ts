export type ThemeId = "warm" | "ocean" | "sunset" | "violet" | "midnight";

export interface ThemeDef {
  id: ThemeId;
  labelAr: string;
  labelEn: string;
  swatch: string;
}

// Single source of truth — the CSS [data-theme] blocks in globals.css must
// match these ids. "warm" equals the site's existing brand (no override needed).
export const themes: ThemeDef[] = [
  { id: "warm", labelAr: "دافئ", labelEn: "Warm", swatch: "linear-gradient(135deg,#005ab5,#2b59ff)" },
  { id: "ocean", labelAr: "محيطي", labelEn: "Ocean", swatch: "linear-gradient(135deg,#0e7490,#38bdf8)" },
  { id: "sunset", labelAr: "غروبي", labelEn: "Sunset", swatch: "linear-gradient(135deg,#f97316,#fb923c)" },
  { id: "violet", labelAr: "بنفسجي", labelEn: "Violet", swatch: "linear-gradient(135deg,#6d28d9,#a78bfa)" },
  { id: "midnight", labelAr: "ليلي", labelEn: "Midnight", swatch: "linear-gradient(135deg,#22d3ee,#0b0f14)" },
];

export const STORAGE_KEY = "wodoh-theme";
export const DEFAULT_THEME: ThemeId = "warm";
