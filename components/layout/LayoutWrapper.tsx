"use client"

import { useState, ReactNode } from "react"
import Preloader from "@/components/home/Preloader"
import LanguageSwitcher from "@/components/layout/LanguageSwitcher"

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const [preloaderDone, setPreloaderDone] = useState(false)

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <div style={{ display: preloaderDone ? "block" : "none" }}>
        <LanguageSwitcher />
        {children}
      </div>
    </>
  )
}
