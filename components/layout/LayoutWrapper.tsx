"use client"

import { useState, ReactNode } from "react"
import Preloader from "@/components/home/Preloader"
import LanguageSwitcher from "@/components/layout/LanguageSwitcher"
import ThemeSwitcher from "@/components/layout/ThemeSwitcher"

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const [preloaderDone, setPreloaderDone] = useState(false)

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <div>
        <LanguageSwitcher />
        <ThemeSwitcher />
        {children}
      </div>
    </>
  )
}
