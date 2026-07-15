"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import ErrorBoundary from "@/components/ui/ErrorBoundary"

gsap.registerPlugin(ScrollTrigger)

const Scene3D = dynamic(() => import("@/components/home/Scene3D"), {
  ssr: false,
  loading: () => null,
})

const tunnelImages = [
  "https://wodohalroya.com/wp-content/uploads/2025/07/الدفاع-المدني.jpg",
  "https://wodohalroya.com/wp-content/uploads/2025/06/لقطة-شاشة-2025-04-13-183819.webp",
  "https://wodohalroya.com/wp-content/uploads/2025/04/لقطة-شاشة-2025-04-13-184030.png",
  "https://wodohalroya.com/wp-content/uploads/2025/04/لقطة-شاشة-2025-04-13-184250.png",
  "https://wodohalroya.com/wp-content/uploads/2025/04/لقطة-شاشة-2025-04-13-184434.png",
]

const rings = [
  { id: "r1", scale: 0.9, opacity: 0.06, img: tunnelImages[0] },
  { id: "r2", scale: 0.7, opacity: 0.1, img: tunnelImages[1] },
  { id: "r3", scale: 0.5, opacity: 0.14, img: tunnelImages[2] },
  { id: "r4", scale: 0.3, opacity: 0.18, img: tunnelImages[3] },
  { id: "r5", scale: 0.15, opacity: 0.24, img: tunnelImages[4] },
]

export default function Hero() {
  const locale = useLocale()
  const isRtl = locale === "ar"
  const tunnelRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          if (tunnelRef.current) {
            const scale = 1 + self.progress * 0.2
            const opacity = 1 - self.progress * 0.5
            tunnelRef.current.style.transform = `scale(${scale})`
            tunnelRef.current.style.opacity = String(opacity)
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100dvh-50px)] flex items-center justify-center overflow-hidden mx-2.5 md:mx-2.5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* SVG Photo Tunnel Background */}
      <div
        ref={tunnelRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {rings.map((ring, i) => {
              const s = ring.scale
              const margin = (1 - s) * 500
              const pts = [
                `${margin},${margin}`,
                `${1000 - margin},${margin}`,
                `${1000 - margin},${1000 - margin}`,
                `${margin},${1000 - margin}`,
              ]
              const nextMargin = i < rings.length - 1 ? (1 - rings[i + 1].scale) * 500 : 500
              const innerPts = [
                `${nextMargin},${nextMargin}`,
                `${1000 - nextMargin},${nextMargin}`,
                `${1000 - nextMargin},${1000 - nextMargin}`,
                `${nextMargin},${1000 - nextMargin}`,
              ]
              const polyPoints = [
                ...pts,
                ...innerPts.reverse(),
              ].join(" ")
              return (
                <clipPath id={`ring-clip-${i}`} key={ring.id}>
                  <polygon points={polyPoints} />
                </clipPath>
              )
            })}
            <clipPath id="center-clip">
              <circle cx="500" cy="500" r="75" />
            </clipPath>
          </defs>

          {rings.map((ring, i) => (
            <g key={ring.id} opacity={ring.opacity}>
              <image
                href={ring.img}
                x="0"
                y="0"
                width="1000"
                height="1000"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#ring-clip-${i})`}
              />
            </g>
          ))}

          <g opacity={0.18}>
            <image
              href={tunnelImages[4]}
              x="0"
              y="0"
              width="1000"
              height="1000"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#center-clip)"
            />
          </g>

          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180
            const x2 = 500 + Math.cos(rad) * 500
            const y2 = 500 + Math.sin(rad) * 500
            return (
              <line
                key={angle}
                x1="500"
                y1="500"
                x2={x2}
                y2={y2}
                stroke="#000"
                strokeOpacity={0.06}
                strokeWidth="1"
              />
            )
          })}

          {rings.map((_, i) => {
            const s = rings[i].scale
            const m = (1 - s) * 500
            const pts = [
              `${m},${m}`,
              `${1000 - m},${m}`,
              `${1000 - m},${1000 - m}`,
              `${m},${1000 - m}`,
            ]
            return (
              <polygon
                key={`border-${i}`}
                points={pts.join(" ")}
                fill="none"
                stroke="#000"
                strokeOpacity={0.04}
                strokeWidth="0.5"
              />
            )
          })}
        </svg>
      </div>

      {/* Themed WebGL 3D accent */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-60">
        <ErrorBoundary>
          <Scene3D />
        </ErrorBoundary>
      </div>

      {/* Theme-aware floating depth blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-blob absolute -top-24 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-blob-slow absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
      </div>

      {/* Dark overlay scrim */}
      <div className="absolute inset-0 z-[1] rounded-[inherit]" style={{ background: "rgba(0,0,0,.2)" }} />

      {/* Content — centered for Units.gr style */}
      <div className="relative z-10 w-full max-w-max-width mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className={`max-w-3xl mx-auto text-center ${isRtl ? "font-arabic-heading" : ""}`}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-sm text-white text-label-sm font-bold uppercase tracking-widest mb-6"
            style={{ borderRadius: "var(--radius-full)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-green animate-pulse" />
            {locale === "ar" ? "ريادة سعودية منذ 2009" : "Saudi leadership since 2009"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-display-lg font-black text-white mb-6 leading-none"
          >
            {locale === "ar" ? (
              <>وضوح<br />الرؤية</>
            ) : (
              <>Wodoh<br />Alroya</>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-body-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {locale === "ar"
              ? "شريكك في التميز والإبداع منذ 15 عاماً — حلول متكاملة في الدعاية والإعلان وإدارة الفعاليات والطباعة"
              : "Your partner in excellence and creativity for 15 years — integrated solutions in advertising, event management, and printing"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-vibrant-purple text-white px-8 py-4 font-bold uppercase text-sm group active:scale-[0.98] transition-all duration-300"
              style={{
                borderRadius: "var(--radius-xl)",
              }}
            >
              {locale === "ar" ? "اطلب استشارة مجانية" : "Get a Free Consultation"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all active:scale-[0.98]"
              style={{
                borderRadius: "var(--radius-xl)",
              }}
            >
              {locale === "ar" ? "استعرض أعمالنا" : "View Our Work"}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll cue — hidden on mobile to avoid overlapping CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-label-sm text-white/40 uppercase tracking-widest font-bold">
            {locale === "ar" ? "اسفل" : "SCROLL"}
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-2 rounded-full bg-white"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
