"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-24 bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 start-10 w-72 h-72 bg-primary-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 end-10 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
      </div>

      <ScrollReveal>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {isRtl
              ? "هل لديك مشروع تريد تحويله إلى واقع؟"
              : "Have a project you want to bring to life?"}
          </h2>
          <p className={`text-lg text-white/70 mb-10 max-w-2xl mx-auto ${isRtl ? "font-arabic" : "font-english-body"}`}>
            {isRtl
              ? "فريقنا مستعد لتحويل أفكارك إلى حملات إعلانية وفعاليات مبهرة. تواصل معنا اليوم."
              : "Our team is ready to turn your ideas into stunning campaigns and events. Get in touch today."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="px-10 py-4 rounded-xl bg-gradient-gold text-neutral-dark font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all glow-gold"
            >
              {t("cta_primary")}
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="px-10 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              <span className="flex items-center gap-2">
                {isRtl ? "استعرض أعمالنا" : "View our work"}
                <Arrow className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
