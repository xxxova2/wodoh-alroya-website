"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  Image,
  X,
  Briefcase,
  Play,
  Music2,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";

const socialLinks = [
  { icon: Image, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: X, href: siteConfig.social.twitter, label: "X" },
  { icon: Briefcase, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Play, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: Music2, href: siteConfig.social.tiktok, label: "TikTok" },
  { icon: MessageCircle, href: siteConfig.social.snapchat, label: "Snapchat" },
];

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 end-10 w-64 h-64 bg-primary-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 start-10 w-48 h-48 bg-primary-blue-light rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-white font-bold text-xl">و</span>
              </div>
              <div>
                <h3 className="font-arabic-heading text-xl font-bold text-white">
                  {locale === "ar" ? "وضوح الرؤية" : "Wodoh Alroya"}
                </h3>
                <p className="text-primary-gold text-xs tracking-wider">
                  {locale === "ar" ? "للدعاية والإعلان" : "Advertising"}
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {locale === "ar"
                ? "شريكك الموثوق في عالم الدعاية والإعلان وإدارة الفعاليات منذ 15 عاماً"
                : "Your trusted partner in advertising and event management for over 15 years"}
            </p>
          </div>

          <div>
            <h4 className="font-arabic-heading font-bold text-lg mb-6 text-primary-gold">
              {t("quick_links")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "", key: "home" },
                { href: "about", key: "about" },
                { href: "services", key: "services" },
                { href: "portfolio", key: "portfolio" },
                { href: "contact", key: "contact" },
                { href: "careers", key: "careers" },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-white/60 hover:text-primary-gold transition-colors text-sm"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-arabic-heading font-bold text-lg mb-6 text-primary-gold">
              {t("contact_info")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-gold shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  {locale === "ar"
                    ? "المملكة العربية السعودية"
                    : "Saudi Arabia"}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-primary-gold transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-primary-gold shrink-0" />
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-primary-gold transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-primary-gold shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-arabic-heading font-bold text-lg mb-6 text-primary-gold">
              {t("follow_us")}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary-gold hover:text-neutral-dark transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {locale === "ar" ? "وضوح الرؤية للدعاية والإعلان" : "Wodoh Alroya"}.{" "}
            {t("rights")}.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-primary-gold transition-colors text-sm"
          >
            <ArrowUp className="w-4 h-4" />
            {locale === "ar" ? "العودة للأعلى" : "Back to top"}
          </button>
        </div>
      </div>
    </footer>
  );
}
