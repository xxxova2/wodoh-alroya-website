"use client"

import { useLocale } from "next-intl"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function AllInclusiveSection() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="py-24 md:py-32 bg-surface-container px-margin-mobile md:px-margin-desktop">
      <div className="max-w-max-width mx-auto">
        <div className="flex flex-col lg:flex-row gap-gutter mb-16">
          <ScrollReveal direction={isRtl ? "right" : "left"} className="lg:w-1/2">
            <div>
              <span className="font-label-sm text-primary uppercase tracking-widest block mb-4">
                {isRtl ? "خدمات متكاملة" : "All-Inclusive Services"}
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
                {isRtl ? "حلول متكاملة. عالم كامل من الإبداع." : "Complete Solutions. A Universe of Creativity."}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction={isRtl ? "left" : "right"} className="lg:w-1/2">
            <p className="font-body-lg text-on-surface-variant mb-6">
              {isRtl
                ? "كل ما تحتاجه في مكان واحد. من الفكرة إلى التنفيذ، نقدم حلولاً متكاملة تجعل علامتك التجارية تبرز."
                : "Everything you need in one place. From idea to execution, we deliver integrated solutions that make your brand stand out."}
            </p>
            <div className="flex gap-4 items-center">
              <span className="bg-emerald-green text-white px-3 py-1 font-label-sm rounded uppercase">
                {isRtl ? "لا رسوم خفية" : "No hidden fees"}
              </span>
              <span className="bg-emerald-green text-white px-3 py-1 font-label-sm rounded uppercase">
                {isRtl ? "لا مفاجآت" : "No surprises"}
              </span>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Category 1 — Advertising */}
          <ScrollReveal delay={0}>
            <div>
              <h4 className="font-headline-md text-headline-md mb-6 pb-4 border-b-2 border-outline-variant">
                {isRtl ? "إعلانات" : "Advertising"}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">campaign</span>
                  {isRtl ? "حملات إعلانية" : "Ad campaigns"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">diversity_3</span>
                  {isRtl ? "استهداف الجمهور" : "Audience targeting"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                  {isRtl ? "تحليل النتائج" : "Results analysis"}
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Category 2 — Printing */}
          <ScrollReveal delay={100}>
            <div>
              <h4 className="font-headline-md text-headline-md mb-6 pb-4 border-b-2 border-outline-variant">
                {isRtl ? "طباعة" : "Printing"}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">print</span>
                  {isRtl ? "طباعة رقمية" : "Digital printing"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">description</span>
                  {isRtl ? "طباعة أوفست" : "Offset printing"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">dashboard</span>
                  {isRtl ? "لوحات إعلانية" : "Billboards"}
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Category 3 — Events */}
          <ScrollReveal delay={200}>
            <div>
              <h4 className="font-headline-md text-headline-md mb-6 pb-4 border-b-2 border-outline-variant">
                {isRtl ? "فعاليات" : "Events"}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">event</span>
                  {isRtl ? "تخطيط الفعاليات" : "Event planning"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  {isRtl ? "إدارة الحضور" : "Attendance management"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">celebration</span>
                  {isRtl ? "تنفيذ احترافي" : "Professional execution"}
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Category 4 — Logistics */}
          <ScrollReveal delay={300}>
            <div>
              <h4 className="font-headline-md text-headline-md mb-6 pb-4 border-b-2 border-outline-variant">
                {isRtl ? "لوجستيات" : "Logistics"}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  {isRtl ? "خدمات لوجستية" : "Logistics services"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">handshake</span>
                  {isRtl ? "ضيافة احترافية" : "Professional hospitality"}
                </li>
                <li className="flex items-center gap-3 font-body-md">
                  <span className="material-symbols-outlined text-primary">construction</span>
                  {isRtl ? "تجهيزات فنية" : "Technical setups"}
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
