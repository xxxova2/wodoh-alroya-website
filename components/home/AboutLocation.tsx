"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function AboutLocation() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <div className="grid md:grid-cols-2 gap-gutter items-center">
        <ScrollReveal direction={isRtl ? "right" : "left"}>
          <div>
            <span className="font-label-sm text-primary uppercase tracking-widest block mb-4">
              {locale === "ar" ? "من نحن" : "About Us"}
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
              {locale === "ar" ? (
                <>شريكك في<br />التميز والإبداع</>
              ) : (
                <>Your Partner in<br />Excellence & Creativity</>
              )}
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-md leading-relaxed">
              {locale === "ar"
                ? "شركة وضوح الرؤية للدعاية والإعلان شريك موثوق منذ 15 عاماً، متخصصة في تقديم حلول متكاملة في الدعاية والإعلان وإدارة الفعاليات والطباعة والخدمات اللوجستية. نعمل مع نخبة من العملاء في القطاعين الحكومي والخاص."
                : "Wodoh Alroya Advertising is a trusted partner for 15 years, specializing in integrated advertising, event management, printing and logistics solutions. We work with top clients in both government and private sectors."}
            </p>
            <div className="mt-8">
              <Link
                href={`/${locale}/#about`}
                className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 font-bold uppercase tracking-wider text-primary hover:text-primary-container hover:border-primary-container transition-colors"
              >
                {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                <span className="material-symbols-outlined text-lg">north_east</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction={isRtl ? "left" : "right"}>
          <motion.div
            className="bg-primary p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px] rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="relative z-10">
              <span className="text-white/60 font-label-sm uppercase tracking-widest">
                {locale === "ar" ? "منذ 2009" : "Since 2009"}
              </span>
              <h3 className="font-headline-md text-headline-md mt-2 mb-4">
                {locale === "ar" ? "فريق محترف. حلول مبتكرة." : "Professional Team. Innovative Solutions."}
              </h3>
              <p className="font-body-md opacity-80">
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
