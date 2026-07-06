"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { Megaphone, Printer, CalendarCheck, Gift, Settings2, Truck } from "lucide-react"
import { services } from "@/lib/constants"
import ScrollReveal from "@/components/ui/ScrollReveal"

const iconMap: Record<string, React.ElementType> = {
  Megaphone, Printer, CalendarCheck, Gift, Settings2, Truck,
}

const bgColors = [
  "bg-primary",
  "bg-secondary-container",
  "bg-vibrant-purple",
  "bg-emerald-green",
  "bg-action-orange",
  "bg-on-background",
]

const textColors = [
  "text-on-primary",
  "text-on-secondary-container",
  "text-white",
  "text-white",
  "text-white",
  "text-surface",
]

export default function ServicesGrid() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="font-label-sm text-primary uppercase tracking-widest block mb-4">
            {isRtl ? "خدماتنا" : "Our Services"}
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-4 leading-tight">
            {isRtl ? "خدمات متكاملة" : "Complete Services"}
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            {isRtl
              ? "نقدم مجموعة شاملة من الخدمات الإعلانية والتسويقية"
              : "We offer a comprehensive range of advertising and marketing services"}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Megaphone
          const bg = bgColors[index % bgColors.length]
          const tc = textColors[index % textColors.length]
          return (
            <ScrollReveal key={service.id} delay={index * 80}>
              <Link
                href={`/${locale}/services/${service.id}`}
                className={`group block ${bg} ${tc} p-8 rounded-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-3 leading-tight">
                    {isRtl ? service.titleAr : service.titleEn}
                  </h3>
                  <p className={`font-body-md leading-relaxed mb-6 ${tc}/80`}>
                    {isRtl ? service.descAr : service.descEn}
                  </p>
                  <span className="inline-flex items-center gap-2 font-label-sm uppercase tracking-wider">
                    {isRtl ? "اعرف المزيد" : "Learn more"}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              </Link>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
