"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  HeadphonesIcon,
  Award,
  Heart,
  Users,
  BookOpen,
} from "lucide-react";
import { values } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Timeline from "@/components/about/Timeline";

const iconMap: Record<string, React.ElementType> = {
  HeadphonesIcon,
  Award,
  Heart,
  Users,
  BookOpen,
};

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 end-20 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className={`text-lg leading-relaxed text-neutral-charcoal/80 ${isRtl ? "font-arabic" : "font-english-body"}`}>
              {t("story")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <ScrollReveal direction={isRtl ? "right" : "left"}>
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className={`text-2xl font-bold mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                  {t("vision.title")}
                </h3>
                <p className={`text-white/80 leading-relaxed ${isRtl ? "font-arabic" : "font-english-body"}`}>
                  {t("vision.desc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction={isRtl ? "left" : "right"}>
              <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-2xl p-8">
                <h3 className={`text-2xl font-bold text-primary-blue mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                  {t("mission.title")}
                </h3>
                <p className={`text-neutral-charcoal/80 leading-relaxed ${isRtl ? "font-arabic" : "font-english-body"}`}>
                  {t("mission.desc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className={`text-4xl font-bold text-primary-blue text-center mb-16 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
              {t("values.title")}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = iconMap[value.icon] || Heart;
              return (
                <ScrollReveal key={value.titleAr} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-gold/30 transition-all hover:shadow-lg">
                    <div className="w-14 h-14 rounded-xl bg-primary-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary-gold" />
                    </div>
                    <h3 className={`text-xl font-bold text-primary-blue mb-3 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                      {isRtl ? value.titleAr : value.titleEn}
                    </h3>
                    <p className={`text-neutral-charcoal/70 text-sm leading-relaxed ${isRtl ? "font-arabic" : "font-english-body"}`}>
                      {isRtl ? value.descAr : value.descEn}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Timeline />
    </>
  );
}
