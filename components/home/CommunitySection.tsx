"use client"

import { useLocale } from "next-intl"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function CommunitySection() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <section className="bg-bright-red text-white overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <ScrollReveal direction={isRtl ? "right" : "left"}>
          <div className="px-margin-mobile md:px-margin-desktop py-20 md:py-32 flex flex-col justify-center">
            <span className="font-label-sm uppercase tracking-widest block mb-4 opacity-80">
              {isRtl ? "مجتمعنا" : "Our Community"}
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
              {isRtl ? "طريقة مشتركة للعمل" : "A Shared Way of Working"}
            </h2>
            <p className="font-body-lg mb-10 max-w-md leading-relaxed opacity-90">
              {isRtl
                ? "في وضوح الرؤية، نؤمن بأن النجاح الحقيقي يأتي من التعاون مع عملائنا كشركاء حقيقيين، نبني علاقات طويلة الأمد مبنية على الثقة والاحترام المتبادل."
                : "At Wodoh Alroya, we believe true success comes from collaborating with our clients as true partners, building lasting relationships based on trust and mutual respect."}
            </p>
            <a
              href={`/${locale}/#about`}
              className="inline-flex items-center gap-3 border-2 border-white px-8 py-4 font-bold uppercase rounded-lg hover:bg-white hover:text-bright-red transition-all w-fit"
            >
              {isRtl ? "اعرف المزيد" : "Learn More"}
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal direction={isRtl ? "left" : "right"}>
          <div className="relative min-h-[400px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-on-background opacity-80" />
            <div className="dot-grid absolute inset-0 opacity-30" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <span className="font-display text-[64px] md:text-[96px] font-extrabold text-white/10 leading-none">
                15+
              </span>
              <p className="font-body-md text-white/60 mt-2">
                {isRtl ? "سنوات من الشراكة والتميز" : "Years of partnership & excellence"}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
