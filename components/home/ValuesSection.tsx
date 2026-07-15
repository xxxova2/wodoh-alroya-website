"use client"

import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import { Heart, Award, Users, BookOpen, Headphones } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

const values = [
  {
    icon: Headphones,
    titleAr: "خدمة العملاء",
    titleEn: "Customer Service",
    descAr: "خدمة العملاء هي عنصر حيوي لأي عمل ناجح، تعكس قدرة الشركة على تلبية احتياجات العملاء",
    descEn: "Customer service reflects our ability to meet client needs and provide support",
    bg: "bg-vibrant-purple",
  },
  {
    icon: Award,
    titleAr: "الجودة",
    titleEn: "Quality",
    descAr: "الالتزام بالتميز ينعكس في كل تفصيل من التخطيط والتصميم إلى التنفيذ والتسليم",
    descEn: "Commitment to excellence reflected in every detail from planning to delivery",
    bg: "bg-action-orange",
  },
  {
    icon: Heart,
    titleAr: "الإخلاص",
    titleEn: "Sincerity",
    descAr: "الإخلاص هو جودة الصدق والأمانة والابتعاد عن الخداع في جميع تعاملاتنا",
    descEn: "Sincerity is the quality of being genuine and honest in all our dealings",
    bg: "bg-bright-red",
  },
  {
    icon: Users,
    titleAr: "الكوادر البشرية",
    titleEn: "Workforce",
    descAr: "نستثمر في فريق عمل محترف يمتلك المهارات والخبرات اللازمة لتقديم أفضل النتائج",
    descEn: "We invest in a professional workforce with skills and expertise for the best results",
    bg: "bg-primary-gold",
  },
  {
    icon: BookOpen,
    titleAr: "التعلم المستمر",
    titleEn: "Learning",
    descAr: "التعلم المستمر هو أساس التطور والنمو الشخصي والمهني لفريقنا",
    descEn: "Continuous learning is the foundation of our team's growth",
    bg: "bg-emerald-green",
  },
]

export default function ValuesSection() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <>
      {/* Section header */}
      <section className="bg-blue-700 py-6 overflow-hidden">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-6 sm:gap-12">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M4 36L20 4" stroke="#ffb200" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M12 36L28 4" stroke="#ffb200" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 36L36 4" stroke="#ffb200" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h2 className="text-headline-lg text-white text-center leading-tight font-black">
              {isRtl ? "ما يميزنا" : "What Defines Us"}
            </h2>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M36 36L20 4" stroke="#ffb200" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M28 36L12 4" stroke="#ffb200" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 36L4 4" stroke="#ffb200" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </ScrollReveal>
      </section>

      {/* Values cards — vibrant color blocks */}
      <section className="py-16 md:py-20 bg-surface-container px-2.5 md:px-2.5">
        <div className="max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <ScrollReveal key={v.titleEn} delay={i * 80}>
                  <motion.div
                    className={`${v.bg} p-6 md:p-8 text-white flex flex-col`}
                    style={{ borderRadius: "var(--radius-xl)" }}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-headline-md font-black mb-3 leading-tight">
                      {isRtl ? v.titleAr : v.titleEn}
                    </h3>
                    <p className="text-body-md text-white/80 leading-relaxed flex-1">
                      {isRtl ? v.descAr : v.descEn}
                    </p>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
