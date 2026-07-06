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
    color: "bg-primary",
  },
  {
    icon: Award,
    titleAr: "الجودة",
    titleEn: "Quality",
    descAr: "الالتزام بالتميز ينعكس في كل تفصيل من التخطيط والتصميم إلى التنفيذ والتسليم",
    descEn: "Commitment to excellence reflected in every detail from planning to delivery",
    color: "bg-emerald-green",
  },
  {
    icon: Heart,
    titleAr: "الإخلاص",
    titleEn: "Sincerity",
    descAr: "الإخلاص هو جودة الصدق والأمانة والابتعاد عن الخداع في جميع تعاملاتنا",
    descEn: "Sincerity is the quality of being genuine and honest in all our dealings",
    color: "bg-vibrant-purple",
  },
  {
    icon: Users,
    titleAr: "الكوادر البشرية",
    titleEn: "Workforce",
    descAr: "نستثمر في فريق عمل محترف يمتلك المهارات والخبرات اللازمة لتقديم أفضل النتائج",
    descEn: "We invest in a professional workforce with skills and expertise for the best results",
    color: "bg-action-orange",
  },
  {
    icon: BookOpen,
    titleAr: "التعلم المستمر",
    titleEn: "Learning",
    descAr: "التعلم المستمر هو أساس التطور والنمو الشخصي والمهني لفريقنا",
    descEn: "Continuous learning is the foundation of our team's growth",
    color: "bg-on-background",
  },
]

export default function ValuesSection() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <>
      {/* Section header with decorative dividers */}
      <section className="bg-primary py-6 overflow-hidden">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-6 sm:gap-12">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M4 36L20 4" stroke="#ffb204" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M12 36L28 4" stroke="#ffb204" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 36L36 4" stroke="#ffb204" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h2 className="font-headline-lg text-headline-lg text-white text-center leading-tight">
              {isRtl ? "ما يميزنا" : "What Defines Us"}
            </h2>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M36 36L20 4" stroke="#ffb204" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M28 36L12 4" stroke="#ffb204" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 36L4 4" stroke="#ffb204" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </ScrollReveal>
      </section>

      {/* Values cards */}
      <section className="py-16 md:py-20 bg-surface-container px-margin-mobile md:px-margin-desktop">
        <div className="max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <ScrollReveal key={v.titleEn} delay={i * 80}>
                  <motion.div
                    className={`${v.color} p-6 md:p-8 rounded-lg text-white flex flex-col`}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline-md text-[22px] md:text-headline-md font-bold mb-3 leading-tight">
                      {isRtl ? v.titleAr : v.titleEn}
                    </h3>
                    <p className="font-body-md text-white/80 leading-relaxed flex-1">
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
