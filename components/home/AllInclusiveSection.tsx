"use client"

import { useLocale } from "next-intl"
import {
  Megaphone,
  Users,
  TrendingUp,
  Printer,
  FileText,
  LayoutDashboard,
  CalendarDays,
  UserCheck,
  PartyPopper,
  Truck,
  Handshake,
  Construction,
  type LucideIcon,
} from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

type Row = { icon: LucideIcon; labelAr: string; labelEn: string }

const categories: { titleAr: string; titleEn: string; rows: Row[] }[] = [
  {
    titleAr: "إعلانات",
    titleEn: "Advertising",
    rows: [
      { icon: Megaphone, labelAr: "حملات إعلانية", labelEn: "Ad campaigns" },
      { icon: Users, labelAr: "استهداف الجمهور", labelEn: "Audience targeting" },
      { icon: TrendingUp, labelAr: "تحليل النتائج", labelEn: "Results analysis" },
    ],
  },
  {
    titleAr: "طباعة",
    titleEn: "Printing",
    rows: [
      { icon: Printer, labelAr: "طباعة رقمية", labelEn: "Digital printing" },
      { icon: FileText, labelAr: "طباعة أوفست", labelEn: "Offset printing" },
      { icon: LayoutDashboard, labelAr: "لوحات إعلانية", labelEn: "Billboards" },
    ],
  },
  {
    titleAr: "فعاليات",
    titleEn: "Events",
    rows: [
      { icon: CalendarDays, labelAr: "تخطيط الفعاليات", labelEn: "Event planning" },
      { icon: UserCheck, labelAr: "إدارة الحضور", labelEn: "Attendance management" },
      { icon: PartyPopper, labelAr: "تنفيذ احترافي", labelEn: "Professional execution" },
    ],
  },
  {
    titleAr: "لوجستيات",
    titleEn: "Logistics",
    rows: [
      { icon: Truck, labelAr: "خدمات لوجستية", labelEn: "Logistics services" },
      { icon: Handshake, labelAr: "ضيافة احترافية", labelEn: "Professional hospitality" },
      { icon: Construction, labelAr: "تجهيزات فنية", labelEn: "Technical setups" },
    ],
  },
]

export default function AllInclusiveSection() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="py-24 md:py-32 bg-surface-container px-2.5 md:px-2.5">
      <div className="max-w-max-width mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 mb-16">
          <ScrollReveal direction={isRtl ? "right" : "left"} className="lg:w-1/2">
            <div>
              <span
                className="inline-block border border-on-surface/20 text-label-sm text-on-surface uppercase tracking-widest font-bold mb-4"
                style={{ borderRadius: "var(--radius-full)", padding: "8px 21px" }}
              >
                {isRtl ? "خدمات متكاملة" : "All-Inclusive Services"}
              </span>
              <h2 className="text-headline-lg text-on-surface mb-8 leading-tight font-black">
                {isRtl ? "حلول متكاملة. عالم كامل من الإبداع." : "Complete Solutions. A Universe of Creativity."}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction={isRtl ? "left" : "right"} className="lg:w-1/2">
            <p className="text-body-lg text-on-surface/60 mb-6">
              {isRtl
                ? "كل ما تحتاجه في مكان واحد. من الفكرة إلى التنفيذ، نقدم حلولاً متكاملة تجعل علامتك التجارية تبرز."
                : "Everything you need in one place. From idea to execution, we deliver integrated solutions that make your brand stand out."}
            </p>
            <div className="flex gap-3 items-center flex-wrap">
              <span
                className="bg-emerald-green text-on-emerald-green text-label-sm font-bold uppercase"
                style={{ borderRadius: "var(--radius-full)", padding: "8px 21px" }}
              >
                {isRtl ? "لا رسوم خفية" : "No hidden fees"}
              </span>
              <span
                className="bg-emerald-green text-on-emerald-green text-label-sm font-bold uppercase"
                style={{ borderRadius: "var(--radius-full)", padding: "8px 21px" }}
              >
                {isRtl ? "لا مفاجآت" : "No surprises"}
              </span>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category, ci) => (
            <ScrollReveal key={ci} delay={ci * 100}>
              <div>
                <h4 className="text-headline-md text-on-surface mb-6 pb-4 border-b-2 border-on-surface/10 font-black">
                  {isRtl ? category.titleAr : category.titleEn}
                </h4>
                <ul className="space-y-4">
                  {category.rows.map((row, ri) => {
                    const Icon = row.icon
                    return (
                      <li key={ri} className="flex items-center gap-3 text-body-md text-on-surface/70">
                        <Icon className="w-5 h-5 text-primary shrink-0" />
                        {isRtl ? row.labelAr : row.labelEn}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
