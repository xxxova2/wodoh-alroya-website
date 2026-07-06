"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Building2 } from "lucide-react";
import { projects } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProjectDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">
          {isRtl ? "المشروع غير موجود" : "Project not found"}
        </h1>
        <Link href={`/${locale}/portfolio`} className="text-primary-gold mt-4 inline-block">
          {isRtl ? "العودة للأعمال" : "Back to portfolio"}
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-dark overflow-hidden min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <Link
            href={`/${locale}/portfolio`}
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary-gold transition-colors mb-6"
          >
            <Arrow className="w-4 h-4" />
            {isRtl ? "العودة للأعمال" : "Back to portfolio"}
          </Link>
          <span className="inline-block px-4 py-1 rounded-full bg-primary-gold/90 text-neutral-dark text-sm font-bold mb-4">
            {project.category === "government"
              ? isRtl ? "حكومي" : "Government"
              : project.category === "corporate"
              ? isRtl ? "شركات" : "Corporate"
              : isRtl ? "فعاليات" : "Events"}
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {isRtl ? project.titleAr : project.titleEn}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {project.client}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className={`text-lg leading-relaxed text-neutral-charcoal/80 ${isRtl ? "font-arabic" : "font-english-body"}`}>
              {isRtl ? project.descAr : project.descEn}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={isRtl ? project.titleAr : project.titleEn}
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-primary-blue text-center mb-12 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {isRtl ? "مشاريع مشابهة" : "Related Projects"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/${locale}/portfolio/${p.id}`}
                  className="group relative block h-64 rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/30 to-transparent" />
                  <div className="absolute bottom-0 start-0 end-0 p-6">
                    <h3 className={`text-lg font-bold text-white ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                      {isRtl ? p.titleAr : p.titleEn}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
