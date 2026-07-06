"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ThreeBackground from "@/components/ui/ThreeBackground";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      <ThreeBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-dark/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-6 py-2 rounded-full border border-primary-gold/30 bg-primary-gold/10 text-primary-gold text-sm font-medium mb-6">
            {locale === "ar" ? "منذ 15 عاماً في خدمتكم" : "Serving you since 15 years"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${
            isRtl ? "font-arabic-heading" : "font-english-heading"
          }`}
        >
          <span className="text-gradient-gold">{t("title")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto ${
            isRtl ? "font-arabic" : "font-english"
          }`}
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className={`text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-10 ${
            isRtl ? "font-arabic" : "font-english-body"
          }`}
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`/${locale}/contact`}
            className="px-8 py-4 rounded-xl bg-gradient-gold text-neutral-dark font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all glow-gold"
          >
            {t("cta_primary")}
          </a>
          <a
            href={`/${locale}/portfolio`}
            className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
          >
            {t("cta_secondary")}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
