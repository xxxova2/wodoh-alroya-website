"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
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

export default function ServicesPage() {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 start-20 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {isRtl ? "خدماتنا المتكاملة" : "Our Services"}
          </h1>
          <p className={`text-lg text-white/60 max-w-2xl mx-auto ${isRtl ? "font-arabic" : "font-english-body"}`}>
            {isRtl
              ? "نقدم مجموعة شاملة من الخدمات الإعلانية والتسويقية لتلبية جميع احتياجاتك"
              : "Comprehensive advertising and marketing services to meet all your needs"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Megaphone;
              return (
                <ScrollReveal key={service.id} delay={index * 100}>
                  <Link
                    href={`/${locale}/services/${service.id}`}
                    className="group flex gap-6 bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-gold/30 transition-all hover:shadow-xl"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 group-hover:bg-primary-gold/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold text-primary-blue mb-2 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                        {isRtl ? service.titleAr : service.titleEn}
                      </h3>
                      <p className={`text-neutral-charcoal/70 text-sm leading-relaxed ${isRtl ? "font-arabic" : "font-english-body"}`}>
                        {isRtl ? service.descAr : service.descEn}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary-gold font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                        {isRtl ? "اعرف المزيد" : "Learn more"}
                        <Arrow className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
