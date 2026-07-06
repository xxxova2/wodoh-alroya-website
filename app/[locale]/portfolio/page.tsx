"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";
import { projects } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project } from "@/types";

const categories = [
  { key: "all", labelAr: "الكل", labelEn: "All" },
  { key: "government", labelAr: "حكومي", labelEn: "Government" },
  { key: "corporate", labelAr: "شركات", labelEn: "Corporate" },
  { key: "events", labelAr: "فعاليات", labelEn: "Events" },
];

export default function PortfolioPage() {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered: Project[] =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 end-20 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {isRtl ? "أعمالنا" : "Our Portfolio"}
          </h1>
          <p className={`text-lg text-white/60 max-w-2xl mx-auto ${isRtl ? "font-arabic" : "font-english-body"}`}>
            {isRtl
              ? "نفخر بتقديم أفضل الحلول لعملائنا في القطاعين الحكومي والخاص"
              : "We pride ourselves on delivering the best solutions for our clients"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary-gold text-neutral-dark"
                    : "bg-white text-neutral-charcoal/70 hover:bg-primary-gold/10 border border-gray-200"
                }`}
              >
                {isRtl ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 80}>
                <Link
                  href={`/${locale}/portfolio/${project.id}`}
                  className="group relative block h-80 rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
                  <div className="absolute bottom-0 start-0 end-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-gold/90 text-neutral-dark text-xs font-bold mb-3">
                      {project.category === "government"
                        ? isRtl ? "حكومي" : "Government"
                        : project.category === "corporate"
                        ? isRtl ? "شركات" : "Corporate"
                        : isRtl ? "فعاليات" : "Events"}
                    </span>
                    <h3 className={`text-xl font-bold text-white mb-1 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                      {isRtl ? project.titleAr : project.titleEn}
                    </h3>
                    <p className="text-white/70 text-sm">{project.client}</p>
                    <p className="text-primary-gold text-xs mt-2">{project.year}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
