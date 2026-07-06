"use client";

import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { Upload, Send, Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useState } from "react";

const benefits = [
  {
    icon: TrendingUp,
    titleAr: "فرص نمو مهني",
    titleEn: "Career Growth",
    descAr: "نساعدك على تطوير مهاراتك والارتقاء بمسيرتك المهنية",
    descEn: "We help you develop your skills and advance your career",
  },
  {
    icon: Users,
    titleAr: "بيئة عمل إيجابية",
    titleEn: "Positive Culture",
    descAr: "فريق عمل متعاون وبيئة تشجع على الإبداع والابتكار",
    descEn: "Collaborative team environment that encourages creativity",
  },
  {
    icon: Heart,
    titleAr: "مزايا تنافسية",
    titleEn: "Great Benefits",
    descAr: "حزمة مزايا تنافسية تشمل التأمين الصحي والإجازات",
    descEn: "Competitive benefits including health insurance and leave",
  },
];

const positions = [
  {
    titleAr: "مصمم جرافيك",
    titleEn: "Graphic Designer",
    deptAr: "الإبداع",
    deptEn: "Creative",
    locationAr: "الرياض",
    locationEn: "Riyadh",
  },
  {
    titleAr: "أخصائي تسويق",
    titleEn: "Marketing Specialist",
    deptAr: "التسويق",
    deptEn: "Marketing",
    locationAr: "الرياض",
    locationEn: "Riyadh",
  },
  {
    titleAr: "منسق فعاليات",
    titleEn: "Event Coordinator",
    deptAr: "الفعاليات",
    deptEn: "Events",
    locationAr: "الرياض",
    locationEn: "Riyadh",
  },
  {
    titleAr: "مدير حسابات",
    titleEn: "Account Manager",
    deptAr: "خدمة العملاء",
    deptEn: "Client Services",
    locationAr: "الرياض",
    locationEn: "Riyadh",
  },
];

export default function CareersPage() {
  const t = useTranslations("careers");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 end-20 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
            {t("title")}
          </h1>
          <p className={`text-lg text-white/60 max-w-2xl mx-auto ${isRtl ? "font-arabic" : "font-english-body"}`}>
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.titleAr} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-primary-gold/30 transition-all hover:shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-gold/10 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary-gold" />
                  </div>
                  <h3 className={`text-xl font-bold text-primary-blue mb-3 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                    {isRtl ? benefit.titleAr : benefit.titleEn}
                  </h3>
                  <p className={`text-neutral-charcoal/70 text-sm ${isRtl ? "font-arabic" : "font-english-body"}`}>
                    {isRtl ? benefit.descAr : benefit.descEn}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mb-20">
            <h2 className={`text-3xl font-bold text-primary-blue text-center mb-12 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
              {isRtl ? "الوظائف المتاحة" : "Open Positions"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((pos) => (
                <ScrollReveal key={pos.titleAr}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-gold/30 transition-all hover:shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold text-primary-blue mb-1 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                          {isRtl ? pos.titleAr : pos.titleEn}
                        </h3>
                        <p className="text-primary-gold text-sm">
                          {isRtl ? pos.deptAr : pos.deptEn}
                        </p>
                      </div>
                      <Briefcase className="w-6 h-6 text-primary-gold/50" />
                    </div>
                    <p className="text-neutral-charcoal/60 text-sm mb-4">
                      📍 {isRtl ? pos.locationAr : pos.locationEn}
                    </p>
                    <button
                      onClick={() => {
                        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-gold/10 text-primary-gold font-medium text-sm hover:bg-primary-gold/20 transition-all"
                    >
                      {t("apply")}
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div id="application-form">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
                <h2 className={`text-3xl font-bold text-primary-blue text-center mb-8 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                  {isRtl ? "تقديم طلب" : "Submit Application"}
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary-green/10 flex items-center justify-center">
                      <Send className="w-10 h-10 text-secondary-green" />
                    </div>
                    <h3 className={`text-2xl font-bold text-primary-blue mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                      {t("form.success")}
                    </h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                          {t("form.name")}
                        </label>
                        <input
                          {...register("name", { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                          {t("form.email")}
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                          {t("form.phone")}
                        </label>
                        <input
                          {...register("phone")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                          {t("form.position")}
                        </label>
                        <select
                          {...register("position")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all bg-white"
                        >
                          <option value="">
                            {isRtl ? "اختر" : "Select"}
                          </option>
                          {positions.map((p) => (
                            <option key={p.titleAr} value={isRtl ? p.titleAr : p.titleEn}>
                              {isRtl ? p.titleAr : p.titleEn}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                        {t("form.message")}
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                        {t("form.upload_cv")}
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-primary-gold/50 transition-all cursor-pointer">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="cv-upload"
                          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                        />
                        <label htmlFor="cv-upload" className="cursor-pointer">
                          <Upload className="w-8 h-8 text-primary-gold mx-auto mb-2" />
                          <p className="text-sm text-neutral-charcoal/60">
                            {selectedFile
                              ? selectedFile.name
                              : isRtl
                              ? "اضغط لرفع السيرة الذاتية (PDF, DOC)"
                              : "Click to upload CV (PDF, DOC)"}
                          </p>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-gold text-neutral-dark font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50"
                    >
                      {isSubmitting
                        ? isRtl ? "جاري الإرسال..." : "Sending..."
                        : t("form.submit")}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
