"use client"

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
          <span className="material-symbols-outlined text-[18px] opacity-60">star</span>
          <span className="material-symbols-outlined text-[14px] opacity-40">diamond</span>
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
