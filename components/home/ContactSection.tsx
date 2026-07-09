"use client"

import { useLocale } from "next-intl"
import { useForm } from "react-hook-form"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { siteConfig, services } from "@/lib/constants"
import { useState } from "react"

export default function ContactSection() {
  const locale = useLocale()
  const isRtl = locale === "ar"
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm()

  const err = (msg: string) =>
    isRtl ? msg : msg

  const fieldBase =
    "w-full px-4 py-3 rounded-xl border bg-surface-container focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md"
  const inputCls = (hasError: boolean) =>
    `${fieldBase} ${hasError ? "border-bright-red focus:border-bright-red" : "border-outline-variant focus:border-primary"}`
  const selectCls = (hasError: boolean) =>
    `${fieldBase} ${hasError ? "border-bright-red focus:border-bright-red" : "border-outline-variant focus:border-primary"}`

  const ErrorText = ({ children }: { children: string }) => (
    <p className="mt-1.5 font-label-sm text-bright-red" role="alert">
      {children}
    </p>
  )

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-container px-margin-mobile md:px-margin-desktop">
      <div className="max-w-max-width mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-label-sm text-action-orange uppercase tracking-widest block mb-4">
              {isRtl ? "اتصل بنا" : "Contact Us"}
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-4 leading-tight text-on-surface">
              {isRtl ? "تواصل معنا" : "Get in Touch"}
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              {isRtl
                ? "نحن هنا للإجابة على استفساراتك وتحويل أفكارك إلى واقع"
                : "We're here to answer your questions and turn your ideas into reality"}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <ScrollReveal direction={isRtl ? "right" : "left"}>
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-green/10 flex items-center justify-center">
                    <Send className="w-10 h-10 text-emerald-green" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    {isRtl ? "تم إرسال رسالتك" : "Message Sent!"}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    {isRtl ? "سنعود إليك في أقرب وقت ممكن" : "We'll get back to you shortly"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="font-label-sm text-on-surface block mb-1.5">
                      {isRtl ? "الاسم" : "Name"}
                    </label>
                    <input
                      {...register("name", { required: true })}
                      aria-invalid={errors.name ? "true" : "false"}
                      className={inputCls(!!errors.name)}
                      placeholder={isRtl ? "أدخل اسمك" : "Your name"}
                    />
                    {errors.name && (
                      <ErrorText>{isRtl ? "الرجاء إدخال الاسم" : "Please enter your name"}</ErrorText>
                    )}
                  </div>
                  <div>
                    <label className="font-label-sm text-on-surface block mb-1.5">
                      {isRtl ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      className={inputCls(!!errors.email)}
                      placeholder={isRtl ? "بريدك الإلكتروني" : "Your email"}
                    />
                    {errors.email && (
                      <ErrorText>{isRtl ? "الرجاء إدخال بريد صحيح" : "Please enter a valid email"}</ErrorText>
                    )}
                  </div>
                  <div>
                    <label className="font-label-sm text-on-surface block mb-1.5">
                      {isRtl ? "رقم الجوال" : "Phone"}
                    </label>
                    <input
                      {...register("phone")}
                      className={inputCls(!!errors.phone)}
                      placeholder={isRtl ? "رقم جوالك" : "Your phone"}
                    />
                  </div>
                  <div>
                    <label className="font-label-sm text-on-surface block mb-1.5">
                      {isRtl ? "الخدمة" : "Service"}
                    </label>
                    <select
                      {...register("service")}
                      className={selectCls(!!errors.service)}
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
                    <label className="font-label-sm text-on-surface block mb-1.5">
                      {isRtl ? "الرسالة" : "Message"}
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows={5}
                      aria-invalid={errors.message ? "true" : "false"}
                      className={`${inputCls(!!errors.message)} resize-none`}
                      placeholder={isRtl ? "رسالتك" : "Your message"}
                    />
                    {errors.message && (
                      <ErrorText>{isRtl ? "الرجاء كتابة رسالتك" : "Please write a message"}</ErrorText>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-action-orange text-white font-bold text-base hover:bg-action-orange/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 font-body"
                  >
                    {isSubmitting
                      ? isRtl ? "جاري الإرسال..." : "Sending..."
                      : isRtl ? "إرسال الرسالة" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction={isRtl ? "left" : "right"} delay={200}>
            <div className="space-y-6">
              <div className="bg-surface-container-lowest rounded-2xl p-8">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-6">
                  {isRtl ? "معلومات التواصل" : "Contact Info"}
                </h3>
                <div className="space-y-5">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-action-orange/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-action-orange" />
                    </div>
                    <span dir="ltr" className="font-body-md">{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-action-orange/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-action-orange" />
                    </div>
                    <span className="font-body-md">{siteConfig.email}</span>
                  </a>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <div className="w-12 h-12 rounded-xl bg-action-orange/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-action-orange" />
                    </div>
                    <span className="font-body-md">
                      {isRtl ? "المملكة العربية السعودية" : "Saudi Arabia"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-action-orange rounded-2xl p-8 text-white">
                <h3 className="font-headline-md text-headline-md mb-4">
                  {isRtl ? "تواصل عبر واتساب" : "WhatsApp"}
                </h3>
                <p className="font-body-md text-white/70 mb-6">
                  {isRtl
                    ? "للرد السريع، يمكنك التواصل معنا عبر واتساب"
                    : "For quick response, contact us via WhatsApp"}
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-green text-white font-bold hover:bg-emerald-green/90 transition-all active:scale-[0.98]"
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
  )
}
