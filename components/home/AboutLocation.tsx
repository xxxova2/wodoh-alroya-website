"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function AboutLocation() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="py-24 md:py-32 px-2.5 md:px-2.5 max-w-max-width mx-auto">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <ScrollReveal direction={isRtl ? "right" : "left"}>
          <div>
            <span
              className="inline-block border border-on-surface/20 text-label-sm text-on-surface uppercase tracking-widest font-bold mb-4"
              style={{ borderRadius: "var(--radius-full)", padding: "8px 21px" }}
            >
              {locale === "ar" ? "من نحن" : "About Us"}
            </span>
            <h2 className="text-headline-lg text-on-surface mb-8 leading-tight font-black">
              {locale === "ar" ? (
                <>شريكك في<br />التميز والإبداع</>
              ) : (
                <>Your Partner in<br />Excellence & Creativity</>
              )}
            </h2>
            <p className="text-body-lg text-on-surface/60 max-w-md leading-relaxed">
              {locale === "ar"
                ? "شركة وضوح الرؤية للدعاية والإعلان شريك موثوق منذ 15 عاماً، متخصصة في تقديم حلول متكاملة في الدعاية والإعلان وإدارة الفعاليات والطباعة والخدمات اللوجستية."
                : "Wodoh Alroya Advertising is a trusted partner for 15 years, specializing in integrated advertising, event management, printing and logistics solutions."}
            </p>
            <div className="mt-8">
              <Link
                href={`/${locale}/#about`}
                className="inline-flex items-center gap-2 border-b-2 border-on-surface pb-1 font-bold uppercase tracking-wider text-label-sm hover:opacity-70 transition-all active:scale-[0.98] origin-bottom"
              >
                {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction={isRtl ? "left" : "right"}>
          <motion.div
            className="bg-primary p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            style={{ borderRadius: "var(--radius-xl)" }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="relative z-10">
              <span className="text-white/60 text-label-sm uppercase tracking-widest font-bold">
                {locale === "ar" ? "منذ 2009" : "Since 2009"}
              </span>
              <h3 className="text-headline-md mt-2 mb-4 font-black">
                {locale === "ar" ? "فريق محترف. حلول مبتكرة." : "Professional Team. Innovative Solutions."}
              </h3>
              <p className="text-body-md opacity-80">
                {locale === "ar"
                  ? "نحن هنا لتحويل أفكارك إلى واقع ملموس"
                  : "We're here to turn your ideas into reality"}
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
