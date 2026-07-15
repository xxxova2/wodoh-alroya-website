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
        className="flex items-center gap-1.5 bg-black/90 backdrop-blur-md p-2 shadow-lg text-white hover:text-primary-gold transition-colors"
        style={{ borderRadius: "var(--radius-xl)" }}
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
          className="absolute top-full mt-2 left-0 w-40 bg-white border border-on-surface/10 shadow-xl p-2 origin-top"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          <p className="text-[11px] font-bold text-on-surface/40 px-2 py-1">
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
              className={`w-full flex items-center gap-3 px-2 py-2 text-sm transition-colors ${
                theme === t.id
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface hover:bg-surface-container"
              }`}
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <span
                className="w-5 h-5 ring-2 ring-on-surface/10"
                style={{ background: t.swatch, borderRadius: "var(--radius-xl)" }}
              />
              <span className="font-bold">{isRtl ? t.labelAr : t.labelEn}</span>
              {theme === t.id && <span className="mr-auto text-primary">✓</span>}
            </button>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
