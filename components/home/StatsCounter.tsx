"use client"

import { useEffect, useRef, useState } from "react"
import { useLocale } from "next-intl"
import { useInView } from "framer-motion"
import { stats } from "@/lib/constants"

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setCount(value)
      return
    }
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const stepTime = duration / steps
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>
}

export default function StatsCounter() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="py-16 md:py-24 bg-neutral-dark px-2.5 md:px-2.5">
      <div className="max-w-max-width mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.labelAr} className="text-center text-white">
              <div className="text-[48px] md:text-[64px] font-black mb-2 leading-none tracking-tight">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-label-sm text-white/50 uppercase tracking-wider font-bold">
                {isRtl ? stat.labelAr : stat.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
