"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { Megaphone, Printer, CalendarCheck, Gift, Settings2, Truck, ArrowRight, type LucideIcon } from "lucide-react"
import { services } from "@/lib/constants"
import ScrollReveal from "@/components/ui/ScrollReveal"
import TiltCard from "@/components/ui/TiltCard"

const iconMap: Record<string, LucideIcon> = {
  Megaphone, Printer, CalendarCheck, Gift, Settings2, Truck,
}

const accentColors = [
  "text-primary",
  "text-primary-gold",
  "text-vibrant-purple",
  "text-emerald-green",
  "text-action-orange",
  "text-electric-blue",
]

export default function ServicesGrid() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="py-24 md:py-32 px-2.5 md:px-2.5 max-w-max-width mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span
            className="inline-block border border-on-surface/20 text-label-sm text-on-surface uppercase tracking-widest font-bold mb-4"
            style={{ borderRadius: "var(--radius-full)", padding: "8px 21px" }}
          >
            {isRtl ? "خدماتنا" : "Our Services"}
          </span>
          <h2 className="text-headline-lg text-on-surface mb-4 leading-tight font-black">
            {isRtl ? "خدمات متكاملة" : "Complete Services"}
          </h2>
          <p className="text-body-lg text-on-surface/70 max-w-xl mx-auto leading-relaxed">
            {isRtl
              ? "نقدم مجموعة شاملة من الخدمات الإعلانية والتسويقية"
              : "We offer a comprehensive range of advertising and marketing services"}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Megaphone
          const accent = accentColors[index % accentColors.length]
          return (
            <ScrollReveal key={service.id} delay={index * 80}>
              <TiltCard className="h-full">
                <Link
                  href={`/${locale}/services/${service.id}`}
                  className="group block bg-white text-on-surface px-6 py-8 md:p-8 transition-all duration-[600ms] hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] relative overflow-hidden"
                  style={{ borderRadius: "var(--radius-xl)" }}
                >
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${accent}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-headline-md mb-3 leading-tight font-black">
                      {isRtl ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-body-md text-on-surface/60 leading-relaxed mb-6">
                      {isRtl ? service.descAr : service.descEn}
                    </p>
                    <span className={`inline-flex items-center gap-2 text-label-sm uppercase tracking-wider font-bold ${accent}`}>
                      {isRtl ? "اعرف المزيد" : "Learn more"}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-current/10" />
                </Link>
              </TiltCard>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
