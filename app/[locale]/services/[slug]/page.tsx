"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/constants";
import {
  Megaphone,
  Printer,
  CalendarCheck,
  Gift,
  Settings2,
  Truck,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Megaphone,
  Printer,
  CalendarCheck,
  Gift,
  Settings2,
  Truck,
};

const serviceFeatures: Record<string, { ar: string[]; en: string[] }> = {
  advertising: {
    ar: [
      "حملات إعلانية متكاملة",
      "إدارة وسائل التواصل الاجتماعي",
      "تصميم الهويات البصرية",
      "إنتاج المحتوى الإعلاني",
      "خطط تسويقية مخصصة",
      "تحليل وقياس الأداء",
    ],
    en: [
      "Integrated advertising campaigns",
      "Social media management",
      "Visual identity design",
      "Ad content production",
      "Custom marketing plans",
      "Performance analysis",
    ],
  },
  printing: {
    ar: [
      "طباعة رقمية عالية الجودة",
      "طباعة أوفست",
      "طباعة البنرات واللوحات",
      "طباعة الكتيبات والبروشورات",
      "تغليف وتجليد",
      "طباعة ثلاثية الأبعاد",
    ],
    en: [
      "High-quality digital printing",
      "Offset printing",
      "Banner and signage printing",
      "Brochure and booklet printing",
      "Packaging and binding",
      "3D printing",
    ],
  },
  events: {
    ar: [
      "تخطيط الفعاليات",
      "إدارة المؤتمرات",
      "تنظيم المعارض",
      "الإضاءة والصوتيات",
      "تقديم الضيافة",
      "إدارة الميزانية",
    ],
    en: [
      "Event planning",
      "Conference management",
      "Exhibition organization",
      "Lighting and sound",
      "Hospitality services",
      "Budget management",
    ],
  },
  gifts: {
    ar: [
      "هدايا مخصصة للشركات",
      "الهدايا الترويجية",
      "ساعات وأقلام مخصصة",
      "حقائب الهدايا",
      "هدايا الفعاليات",
      "تغليف فاخر",
    ],
    en: [
      "Custom corporate gifts",
      "Promotional merchandise",
      "Custom watches and pens",
      "Gift bags",
      "Event giveaways",
      "Luxury packaging",
    ],
  },
  technical: {
    ar: [
      "تركيب الشاشات الإعلانية",
      "نظم الصوتيات",
      "الإضاءة المسرحية",
      "شاشات العرض LED",
      "أنظمة البث المباشر",
      "الصيانة والدعم الفني",
    ],
    en: [
      "Advertising screen installation",
      "Sound systems",
      "Stage lighting",
      "LED display screens",
      "Live streaming systems",
      "Maintenance and support",
    ],
  },
  logistics: {
    ar: [
      "النقل والتوصيل",
      "التخزين",
      "خدمات الضيافة",
      "تنظيم الرحلات",
      "الإقامة",
      "خدمات التموين",
    ],
    en: [
      "Transportation and delivery",
      "Storage",
      "Hospitality services",
      "Trip organization",
      "Accommodation",
      "Catering services",
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const service = services.find((s) => s.id === params.slug);
  const features = serviceFeatures[params.slug as string];
  const Icon = service ? iconMap[service.icon] || Megaphone : Megaphone;

  if (!service) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">
          {isRtl ? "الخدمة غير موجودة" : "Service not found"}
        </h1>
        <Link href={`/${locale}/services`} className="text-primary-gold mt-4 inline-block">
          {isRtl ? "العودة للخدمات" : "Back to services"}
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 end-20 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary-gold transition-colors mb-6"
          >
            <Arrow className="w-4 h-4" />
            {isRtl ? "العودة للخدمات" : "Back to services"}
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-primary-gold/20 flex items-center justify-center">
              <Icon className="w-10 h-10 text-primary-gold" />
            </div>
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                {isRtl ? service.titleAr : service.titleEn}
              </h1>
              <p className={`text-lg text-white/60 max-w-2xl ${isRtl ? "font-arabic" : "font-english-body"}`}>
                {isRtl ? service.descAr : service.descEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className={`text-3xl font-bold text-primary-blue mb-8 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                  {isRtl ? "وصف الخدمة" : "Service Description"}
                </h2>
                <p className={`text-neutral-charcoal/70 leading-relaxed text-lg ${isRtl ? "font-arabic" : "font-english-body"}`}>
                  {isRtl
                    ? `نقدم في وضوح الرؤية خدمات ${service.titleAr} بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يضم خبراء في هذا المجال لضمان تقديم أفضل النتائج لعملائنا.`
                    : `At Wodoh Alroya, we offer ${service.titleEn} services with the highest quality and professional standards. Our specialized team includes experts in this field to ensure the best results for our clients.`}
                </p>
              </div>
            </ScrollReveal>

            {features && (
              <ScrollReveal delay={200}>
                <div className="bg-neutral-light rounded-2xl p-8">
                  <h2 className={`text-2xl font-bold text-primary-blue mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                    {isRtl ? "مميزات الخدمة" : "Service Features"}
                  </h2>
                  <ul className="space-y-4">
                    {(isRtl ? features.ar : features.en).map((feature: string) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary-green/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-secondary-green" />
                        </div>
                        <span className={`text-neutral-charcoal/80 ${isRtl ? "font-arabic" : "font-english"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold text-white mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {isRtl ? "هل تحتاج هذه الخدمة؟" : "Need this service?"}
          </h2>
          <p className={`text-white/70 mb-8 ${isRtl ? "font-arabic" : "font-english-body"}`}>
            {isRtl
              ? "تواصل معنا للحصول على استشارة مجانية وعرض سعر"
              : "Contact us for a free consultation and quote"}
          </p>
          <Link
            href={`/${locale}/contact?service=${service.id}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-gold text-neutral-dark font-bold text-lg hover:shadow-xl transition-all"
          >
            {isRtl ? "اطلب الخدمة" : "Request service"}
          </Link>
        </div>
      </section>
    </>
  );
}
