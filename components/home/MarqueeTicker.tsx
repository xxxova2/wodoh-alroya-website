"use client"

import { Star, Gem } from "lucide-react"

interface MarqueeTickerProps {
  items: string[]
  speed?: number
  className?: string
}

export default function MarqueeTicker({
  items,
  speed = 30,
  className = "",
}: MarqueeTickerProps) {
  if (!items.length) return null

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-6 mx-6">
          <span className="text-[15px] md:text-[18px] font-bold uppercase whitespace-nowrap tracking-wider">
            {item}
          </span>
          <Star className="w-[18px] h-[18px] opacity-60" />
          <Gem className="w-[14px] h-[14px] opacity-40" />
        </span>
      ))}
    </>
  )

  return (
    <div className={`bg-on-background text-emerald-green py-4 overflow-hidden ${className}`}>
      <div
        className="flex animate-marquee"
        style={{ width: "max-content", animationDuration: `${speed}s` }}
      >
        {/* First copy */}
        <div className="flex items-center">{content}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center">{content}</div>
      </div>
    </div>
  )
}
