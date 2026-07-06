"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  Megaphone,
  Printer,
  CalendarCheck,
  Gift,
  Settings2,
  Truck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Megaphone,
  Printer,
  CalendarCheck,
  Gift,
  Settings2,
  Truck,
};

export default function ServicesGrid() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-primary-blue mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
              {t("title")}
            </h2>
            <p className={`text-lg text-neutral-charcoal/70 max-w-2xl mx-auto ${isRtl ? "font-arabic" : "font-english-body"}`}>
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Megaphone;
            return (
              <ScrollReveal key={service.id} delay={index * 100}>
                <Link
                  href={`/${locale}/services/${service.id}`}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-gold/10 flex items-center justify-center mb-6 group-hover:bg-primary-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary-gold" />
                  </div>
                  <h3 className={`text-xl font-bold text-primary-blue mb-3 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                    {isRtl ? service.titleAr : service.titleEn}
                  </h3>
                  <p className={`text-neutral-charcoal/70 text-sm leading-relaxed mb-4 ${isRtl ? "font-arabic" : "font-english-body"}`}>
                    {isRtl ? service.descAr : service.descEn}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary-gold font-medium text-sm group-hover:gap-3 transition-all">
                    {isRtl ? "اعرف المزيد" : "Learn more"}
                    <Arrow className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
