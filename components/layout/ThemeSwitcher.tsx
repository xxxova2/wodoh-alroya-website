"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "next-intl";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="fixed top-4 left-4 z-50" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={isRtl ? "تغيير اللون" : "Change color"}
        title={isRtl ? "تغيير اللون" : "Change color"}
        className="flex items-center gap-1.5 bg-surface/90 backdrop-blur-md border border-outline/20 rounded-lg p-1.5 shadow-lg text-on-surface hover:text-primary transition-colors"
      >
        <Palette className="w-4 h-4" />
      </button>

      <AnimatePresence>
      {open && (
        <motion.div
          role="menu"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-full mt-2 left-0 w-40 rounded-xl bg-surface-container-lowest border border-outline/30 shadow-xl p-2 origin-top"
        >
          <p className="text-[11px] font-semibold text-on-surface/50 px-2 py-1">
            اختر اللون
          </p>
          {themes.map((t) => (
            <button
              key={t.id}
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
                theme === t.id
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface hover:bg-surface-container"
              }`}
            >
              <span
                className="w-5 h-5 rounded-full ring-2 ring-outline/30"
                style={{ background: t.swatch }}
              />
              <span className="font-medium">{isRtl ? t.labelAr : t.labelEn}</span>
              {theme === t.id && <span className="mr-auto text-primary">✓</span>}
            </button>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
