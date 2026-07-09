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

// Single accent per card: tinted neutral surface + one colored icon.
// Color now marks the action, not the whole block.
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
          const accent = accentColors[index % accentColors.length]
          return (
            <ScrollReveal key={service.id} delay={index * 80}>
              <TiltCard className="h-full">
                <Link
                  href={`/${locale}/services/${service.id}`}
                  className="group block bg-surface-container-lowest text-on-surface p-8 rounded-lg ring-1 ring-outline-variant transition-all duration-500 hover:-translate-y-1 hover:shadow-lg active:scale-[0.99] relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-3 leading-tight">
                      {isRtl ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                      {isRtl ? service.descAr : service.descEn}
                    </p>
                    <span className={`inline-flex items-center gap-2 font-label-sm uppercase tracking-wider ${accent}`}>
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
