"use client";

import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig, services } from "@/lib/constants";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 start-20 w-96 h-96 bg-primary-gold rounded-full blur-3xl" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction={isRtl ? "right" : "left"}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary-green/10 flex items-center justify-center">
                      <Send className="w-10 h-10 text-secondary-green" />
                    </div>
                    <h3 className={`text-2xl font-bold text-primary-blue mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                      {t("form.success")}
                    </h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                        {t("form.name")}
                      </label>
                      <input
                        {...register("name", { required: true })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all"
                        placeholder={isRtl ? "أدخل اسمك" : "Your name"}
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
                        placeholder={isRtl ? "بريدك الإلكتروني" : "Your email"}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                        {t("form.phone")}
                      </label>
                      <input
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all"
                        placeholder={isRtl ? "رقم جوالك" : "Your phone"}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                        {t("form.service")}
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all bg-white"
                      >
                        <option value="">
                          {isRtl ? "اختر الخدمة" : "Select service"}
                        </option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {isRtl ? s.titleAr : s.titleEn}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-neutral-charcoal mb-2 ${isRtl ? "font-arabic" : "font-english"}`}>
                        {t("form.message")}
                      </label>
                      <textarea
                        {...register("message", { required: true })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/20 outline-none transition-all resize-none"
                        placeholder={isRtl ? "رسالتك" : "Your message"}
                      />
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

            <ScrollReveal direction={isRtl ? "left" : "right"} delay={200}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 border border-gray-100">
                  <h3 className={`text-xl font-bold text-primary-blue mb-6 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                    {isRtl ? "معلومات التواصل" : "Contact Info"}
                  </h3>
                  <div className="space-y-5">
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 text-neutral-charcoal/70 hover:text-primary-gold transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary-gold" />
                      </div>
                      <span dir="ltr">{siteConfig.phone}</span>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-neutral-charcoal/70 hover:text-primary-gold transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary-gold" />
                      </div>
                      <span>{siteConfig.email}</span>
                    </a>
                    <div className="flex items-center gap-4 text-neutral-charcoal/70">
                      <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-gold" />
                      </div>
                      <span>
                        {isRtl ? "المملكة العربية السعودية" : "Saudi Arabia"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <h3 className={`text-xl font-bold mb-4 ${isRtl ? "font-arabic-heading" : "font-english-heading"}`}>
                    {isRtl ? "تواصل عبر واتساب" : "WhatsApp"}
                  </h3>
                  <p className={`text-white/70 text-sm mb-6 ${isRtl ? "font-arabic" : "font-english-body"}`}>
                    {isRtl
                      ? "للرد السريع، يمكنك التواصل معنا عبر واتساب"
                      : "For quick response, contact us via WhatsApp"}
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    {isRtl ? "فتح واتساب" : "Open WhatsApp"}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
