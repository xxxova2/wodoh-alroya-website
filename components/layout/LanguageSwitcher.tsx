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
    <div className="fixed top-4 right-4 z-50 flex gap-1 bg-surface/90 backdrop-blur-md border border-outline/20 rounded-lg p-1 shadow-lg">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`px-2.5 py-1 text-[11px] uppercase font-mono font-bold tracking-wider rounded-md transition-all ${
            locale === l
              ? "bg-primary text-on-primary shadow-sm"
              : "text-on-surface/40 hover:text-on-surface hover:bg-on-surface/5"
          }`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  )
}
