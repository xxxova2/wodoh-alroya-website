"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tunnelImages = [
  "https://wodohalroya.com/wp-content/uploads/2025/07/الدفاع-المدني.jpg",
  "https://wodohalroya.com/wp-content/uploads/2025/06/لقطة-شاشة-2025-04-13-183819.webp",
  "https://wodohalroya.com/wp-content/uploads/2025/04/لقطة-شاشة-2025-04-13-184030.png",
  "https://wodohalroya.com/wp-content/uploads/2025/04/لقطة-شاشة-2025-04-13-184250.png",
  "https://wodohalroya.com/wp-content/uploads/2025/04/لقطة-شاشة-2025-04-13-184434.png",
]

const rings = [
  { id: "r1", scale: 0.9, opacity: 0.15, img: tunnelImages[0] },
  { id: "r2", scale: 0.7, opacity: 0.25, img: tunnelImages[1] },
  { id: "r3", scale: 0.5, opacity: 0.35, img: tunnelImages[2] },
  { id: "r4", scale: 0.3, opacity: 0.45, img: tunnelImages[3] },
  { id: "r5", scale: 0.15, opacity: 0.6, img: tunnelImages[4] },
]

export default function Hero() {
  const locale = useLocale()
  const isRtl = locale === "ar"
  const tunnelRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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
      className="relative min-h-screen flex items-center overflow-hidden bg-on-background"
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
            {/* Center circle clip for innermost */}
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

          {/* Center circle */}
          <g opacity={0.6}>
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

          {/* Diagonal converging lines */}
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
                stroke="white"
                strokeOpacity={0.12}
                strokeWidth="1"
              />
            )
          })}

          {/* Ring border lines */}
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
                stroke="white"
                strokeOpacity={0.08}
                strokeWidth="0.5"
              />
            )
          })}
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/60 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className={`max-w-3xl ${isRtl ? "text-right" : "text-left"}`}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary text-label-sm font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-green animate-pulse" />
            {locale === "ar" ? "ريادة سعودية منذ 2009" : "Saudi leadership since 2009"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-display-lg font-display font-extrabold text-white mb-6 leading-tight"
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
            className="text-body-lg text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            {locale === "ar"
              ? "شريكك في التميز والإبداع منذ 15 عاماً — حلول متكاملة في الدعاية والإعلان وإدارة الفعاليات والطباعة"
              : "Your partner in excellence and creativity for 15 years — integrated solutions in advertising, event management, and printing"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container px-8 py-4 font-bold uppercase rounded-lg hover:bg-white hover:text-primary transition-all duration-300 text-sm group"
            >
              {locale === "ar" ? "اطلب استشارة مجانية" : "Get a Free Consultation"}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              {locale === "ar" ? "استعرض أعمالنا" : "View Our Work"}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className={`absolute bottom-8 ${isRtl ? "right-margin-desktop" : "left-margin-desktop"} flex flex-col items-center gap-2`}
        >
          <span className="font-label-sm text-white/40 uppercase tracking-widest">
            {locale === "ar" ? "اسفل" : "SCROLL"}
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-2 rounded-full bg-secondary-container"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
