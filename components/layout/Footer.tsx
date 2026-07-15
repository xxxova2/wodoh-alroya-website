"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/constants"

const socials = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "X",
    href: siteConfig.social.twitter,
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "TikTok",
    href: siteConfig.social.tiktok,
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
]

const quickLinks = [
  { href: "", key: "home" },
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#portfolio", key: "portfolio" },
  { href: "#contact", key: "contact" },
  { href: "careers", key: "careers" },
]

export default function Footer() {
  const locale = useLocale()
  const isRtl = locale === "ar"

  return (
    <footer className="bg-surface text-on-surface">
      {/* Newsletter split — Units.gr two-tone bar */}
      <div className="flex flex-col md:flex-row mx-2.5 md:mx-2.5 overflow-hidden" style={{ borderRadius: "var(--radius-xl)" }}>
        <div className="bg-bright-red text-white px-6 md:px-12 py-10 md:py-12 flex items-center md:w-1/2">
          <div>
            <h3 className="text-headline-md font-black mb-2">
              {isRtl ? "انضم للنشرة البريدية" : "Join our newsletter"}
            </h3>
            <p className="text-white/80 text-body-md">
              {isRtl ? "اشترك لتصلك آخر أخبارنا وعروضنا" : "Get our latest news and offers in your inbox"}
            </p>
          </div>
        </div>
        <div className="bg-primary-gold px-6 md:px-12 py-10 md:py-12 flex items-center md:w-1/2">
          <form
            className="flex items-center gap-2 w-full"
            action={`mailto:${siteConfig.email}`}
            method="post"
          >
            <input
              className="w-full bg-white/90 border-none focus:ring-0 px-4 py-3 text-body-md outline-none text-on-surface placeholder:text-on-surface/50"
              style={{ borderRadius: "var(--radius-xl)" }}
              placeholder={isRtl ? "بريدك الإلكتروني" : "Your email here"}
              type="email"
              name="email"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="shrink-0 w-12 h-12 bg-on-surface text-surface flex items-center justify-center hover:bg-neutral-dark transition-colors active:scale-95"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <span className="sr-only">Subscribe</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="px-6 md:px-2.5 py-16 max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center" style={{ borderRadius: "var(--radius-xl)" }}>
                <img src="/logo.jpg" alt="وضوح الرؤية" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <h3 className="text-headline-md font-black">
                  {locale === "ar" ? "وضوح الرؤية" : "Wodoh Alroya"}
                </h3>
                <p className="text-on-surface/40 text-label-sm uppercase tracking-wider mt-0.5 font-bold">
                  {locale === "ar" ? "للدعاية والإعلان" : "Advertising"}
                </p>
              </div>
            </div>
            <p className="text-on-surface/60 text-body-md leading-relaxed max-w-xs">
              {locale === "ar"
                ? "شريكك الموثوق في عالم الدعاية والإعلان وإدارة الفعاليات منذ 15 عاماً"
                : "Your trusted partner in advertising and event management for over 15 years"}
            </p>
            <div className="flex gap-2 mt-8">
              {socials.slice(0, 5).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-neutral-dark flex items-center justify-center hover:bg-primary transition-all"
                  style={{ borderRadius: "var(--radius-xl)" }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label-sm text-on-surface/40 uppercase tracking-widest mb-6 font-bold">
              {isRtl ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-body-md text-on-surface/60 hover:text-primary transition-colors"
                  >
                    {link.key === "home"
                      ? isRtl ? "الرئيسية" : "Home"
                      : link.key === "about"
                        ? isRtl ? "من نحن" : "About"
                        : link.key === "services"
                          ? isRtl ? "خدماتنا" : "Services"
                          : link.key === "portfolio"
                            ? isRtl ? "أعمالنا" : "Portfolio"
                            : link.key === "contact"
                              ? isRtl ? "اتصل بنا" : "Contact"
                              : isRtl ? "الوظائف" : "Careers"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-label-sm text-on-surface/40 uppercase tracking-widest mb-6 font-bold">
              {isRtl ? "معلومات التواصل" : "Contact Info"}
            </h4>
            <ul className="space-y-4 text-body-md text-on-surface/60">
              <li>{isRtl ? "المملكة العربية السعودية" : "Saudi Arabia"}</li>
              <li className="font-mono" dir="ltr">{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-6 flex flex-col justify-between" style={{ borderRadius: "var(--radius-xl)" }}>
            <p className="text-body-md leading-relaxed">
              {isRtl ? "لنتحدث عن مشروعك القادم" : "Let's talk about your next project"}
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 bg-primary-gold text-on-primary-gold px-5 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors active:scale-[0.98] w-fit"
              style={{ borderRadius: "var(--radius-full)" }}
            >
              {isRtl ? "اطلب استشارة" : "Get a quote"}
            </a>
          </div>
        </div>
      </div>

      {/* Big wordmark — Units.gr signature */}
      <div className="border-t border-on-surface/10 relative overflow-hidden dot-grid">
        <div className="px-6 md:px-2.5 py-10 max-w-max-width mx-auto">
          <p className={`font-black leading-none tracking-tight text-[14vw] md:text-[10vw] text-on-surface/90 select-none ${isRtl ? "font-arabic-heading" : ""}`}>
            {locale === "ar" ? "وضوح الرؤية" : "Wodoh Alroya"}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-on-surface/10">
        <div className="px-6 md:px-2.5 py-6 max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-on-surface/30 tracking-wide font-bold">
            &copy; {new Date().getFullYear()} {locale === "ar" ? "وضوح الرؤية للدعاية والإعلان" : "Wodoh Alroya Advertising"}
          </p>
          <div className="flex gap-6 text-label-sm text-on-surface/30 font-bold">
            <a href="#" className="hover:text-primary transition-colors">
              {isRtl ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {isRtl ? "شروط الخدمة" : "Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
