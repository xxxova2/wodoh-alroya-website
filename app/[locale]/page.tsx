"use client"

import Hero from "@/components/home/Hero"
import MarqueeTicker from "@/components/home/MarqueeTicker"
import AboutLocation from "@/components/home/AboutLocation"
import ServicesGrid from "@/components/home/ServicesGrid"
import AllInclusiveSection from "@/components/home/AllInclusiveSection"
import StatsCounter from "@/components/home/StatsCounter"
import ValuesSection from "@/components/home/ValuesSection"
import CommunitySection from "@/components/home/CommunitySection"
import InstagramSection from "@/components/home/InstagramSection"
import ContactSection from "@/components/home/ContactSection"
import { useLocale } from "next-intl"

export default function HomePage() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  const marqueeItems = isRtl
    ? ["دعاية وإعلان", "طباعة متعددة", "فعاليات ومعارض", "هدايا ترويجية", "تعهدات فنية", "خدمات لوجستية"]
    : ["Advertising", "Multi-Printing", "Events & Exhibitions", "Promotional Gifts", "Technical", "Logistics"]

  const marqueeItems2 = isRtl
    ? ["عملاء حكوميون", "قطاع خاص", "مناسبات وطنية", "مهرجانات", "مؤتمرات", "معارض"]
    : ["Government Clients", "Private Sector", "National Events", "Festivals", "Conferences", "Exhibitions"]

  return (
    <>
      {/* 01 — Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Decorative marquee — red */}
      <MarqueeTicker items={marqueeItems} speed={28} className="bg-bright-red text-white" />

      {/* 04 — About */}
      <section id="about">
        <AboutLocation />
        <CommunitySection />
      </section>

      {/* 02 — Services */}
      <section id="services">
        <ServicesGrid />
        <AllInclusiveSection />
      </section>

      {/* 03 — Portfolio */}
      <section id="portfolio">
        <StatsCounter />
        <ValuesSection />
        <InstagramSection />
      </section>

      {/* Decorative marquee — blue */}
      <MarqueeTicker items={marqueeItems2} speed={32} className="bg-primary text-white" />

      {/* 05 — Contact */}
      <ContactSection />
    </>
  )
}
