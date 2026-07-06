"use client";

import { useLocale } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

const clients = [
  { nameAr: "الدفاع المدني", nameEn: "Civil Defense" },
  { nameAr: "جامعة الإمام", nameEn: "Imam University" },
  { nameAr: "جامعة سطام", nameEn: "Prince Sattam University" },
  { nameAr: "جامعة الباحة", nameEn: "Al-Baha University" },
  { nameAr: "وزارة النقل", nameEn: "Ministry of Transport" },
  { nameAr: "وزارة البيئة", nameEn: "Ministry of Environment" },
  { nameAr: "الهيئة العامة للترفيه", nameEn: "General Entertainment Authority" },
  { nameAr: "إمارة المنطقة الشرقية", nameEn: "Eastern Province Emirate" },
];

export default function ClientLogos() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="py-20 bg-neutral-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-primary-blue mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
              {isRtl ? "عملاؤنا" : "Our Clients"}
            </h2>
            <p className={`text-lg text-neutral-charcoal/70 ${isRtl ? "font-arabic" : "font-english-body"}`}>
              {isRtl ? "نفخر بثقة عملائنا من القطاعين الحكومي والخاص" : "We pride ourselves on the trust of our clients"}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.nameAr}
                className="group bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-primary-gold/30 transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {client.nameAr.charAt(0)}
                  </span>
                </div>
                <p className={`text-sm font-medium text-neutral-charcoal ${isRtl ? "font-arabic" : "font-english"}`}>
                  {isRtl ? client.nameAr : client.nameEn}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-16 relative">
        <div className="flex animate-marquee gap-12" style={{ animation: "marquee 30s linear infinite" }}>
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className={`text-lg font-bold text-primary-blue/20 whitespace-nowrap ${isRtl ? "font-arabic" : "font-english-heading"}`}
            >
              {isRtl ? client.nameAr : client.nameEn} •
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
