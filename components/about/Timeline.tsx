"use client";

import { useLocale } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

const milestones = [
  {
    year: 2010,
    titleAr: "تأسيس الشركة",
    titleEn: "Company Founded",
    descAr: "تأسست وضوح الرؤية للدعاية والإعلان في الرياض",
    descEn: "Wodoh Alroya was founded in Riyadh",
  },
  {
    year: 2013,
    titleAr: "أول مشروع حكومي",
    titleEn: "First Government Project",
    descAr: "بدء التعاون مع الجهات الحكومية في المملكة",
    descEn: "Started collaboration with government entities",
  },
  {
    year: 2016,
    titleAr: "التوسع في الخدمات",
    titleEn: "Service Expansion",
    descAr: "إضافة خدمات الطباعة المتعددة وإدارة الفعاليات",
    descEn: "Added multi-printing and event management services",
  },
  {
    year: 2019,
    titleAr: "100+ مشروع",
    titleEn: "100+ Projects",
    descAr: "إنجاز أكثر من 100 مشروع ناجح",
    descEn: "Completed over 100 successful projects",
  },
  {
    year: 2022,
    titleAr: "شراكات استراتيجية",
    titleEn: "Strategic Partnerships",
    descAr: "توقيع شراكات مع كبرى الجامعات والهيئات",
    descEn: "Signed partnerships with major universities and authorities",
  },
  {
    year: 2025,
    titleAr: "ريادة في المجال",
    titleEn: "Industry Leadership",
    descAr: "أكثر من 500 مشروع و 15 عاماً من التميز",
    descEn: "500+ projects and 15 years of excellence",
  },
];

export default function Timeline() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className={`text-4xl font-bold text-primary-blue text-center mb-16 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {isRtl ? "مسيرتنا" : "Our Journey"}
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute start-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-gold/20" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 100}>
                <div className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "text-end" : "text-start"}`}>
                    <div className={`inline-block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm max-w-md ${
                      index % 2 === 0 ? (isRtl ? "text-start" : "text-end") : ""
                    }`}>
                      <span className="text-primary-gold font-bold text-lg">{milestone.year}</span>
                      <h3 className={`text-xl font-bold text-primary-blue mt-1 mb-2 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                        {isRtl ? milestone.titleAr : milestone.titleEn}
                      </h3>
                      <p className={`text-neutral-charcoal/70 text-sm ${isRtl ? "font-arabic" : "font-english-body"}`}>
                        {isRtl ? milestone.descAr : milestone.descEn}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 w-6 h-6 rounded-full bg-primary-gold border-4 border-white shadow" />

                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
