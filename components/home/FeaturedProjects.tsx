"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturedProjects() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const featured = projects.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold text-primary-blue mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                {t("title")}
              </h2>
              <p className={`text-lg text-neutral-charcoal/70 max-w-2xl ${isRtl ? "font-arabic" : "font-english-body"}`}>
                {t("subtitle")}
              </p>
            </div>
            <Link
              href={`/${locale}/portfolio`}
              className="flex items-center gap-2 text-primary-gold font-medium hover:gap-3 transition-all shrink-0"
            >
              {isRtl ? "عرض الكل" : "View all"}
              <Arrow className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Link
                href={`/${locale}/portfolio/${project.id}`}
                className="group relative block h-80 rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/30 to-transparent" />
                <div className="absolute bottom-0 start-0 end-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-gold/90 text-neutral-dark text-xs font-bold mb-3">
                    {project.category === "government"
                      ? isRtl
                        ? "حكومي"
                        : "Government"
                      : project.category === "corporate"
                      ? isRtl
                        ? "شركات"
                        : "Corporate"
                      : isRtl
                      ? "فعاليات"
                      : "Events"}
                  </span>
                  <h3 className={`text-xl font-bold text-white mb-1 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                    {isRtl ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {project.client}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
