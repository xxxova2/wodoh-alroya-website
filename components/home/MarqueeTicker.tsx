"use client"

import { Zap } from "lucide-react"

interface MarqueeTickerProps {
  items: string[]
  speed?: number
  className?: string
}

export default function MarqueeTicker({
  items,
  speed = 30,
  className = "bg-bright-red text-white",
}: MarqueeTickerProps) {
  if (!items.length) return null

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-6 mx-6">
          <span className="text-[15px] md:text-[18px] font-bold uppercase whitespace-nowrap tracking-wider">
            {item}
          </span>
          <Zap className="w-[18px] h-[18px] fill-current opacity-70" />
        </span>
      ))}
    </>
  )

  return (
    <div className={`py-4 overflow-hidden ${className}`}>
      <div
        className="flex animate-marquee"
        style={{ width: "max-content", animationDuration: `${speed}s` }}
      >
        <div className="flex items-center">{content}</div>
        <div className="flex items-center">{content}</div>
      </div>
    </div>
  )
}
