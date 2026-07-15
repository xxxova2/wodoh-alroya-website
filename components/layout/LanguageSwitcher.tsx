"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/lib/i18n/routing"
import { locales, localeNames } from "@/lib/i18n/config"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (l: string) => {
    router.push(pathname, { locale: l })
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 bg-black/90 backdrop-blur-md p-1 shadow-lg"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider transition-all ${
            locale === l
              ? "bg-white text-black shadow-sm"
              : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  )
}
