"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/contact", key: "contact" },
  { href: "/careers", key: "careers" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 end-0 start-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-white font-bold text-lg">و</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold leading-tight transition-colors ${
                    isScrolled ? "text-primary-blue" : "text-white"
                  }`}
                >
                  {locale === "ar" ? "وضوح الرؤية" : "Wodoh Alroya"}
                </span>
                <span
                  className={`text-[10px] tracking-wider transition-colors ${
                    isScrolled ? "text-primary-gold" : "text-white/80"
                  }`}
                >
                  {locale === "ar" ? "للدعاية والإعلان" : "Advertising"}
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === `/${locale}${link.href}` || 
                  (link.href !== "/" && pathname.startsWith(`/${locale}${link.href}`));
                return (
                  <Link
                    key={link.key}
                    href={`/${locale}${link.href}`}
                    className={`relative text-sm font-medium transition-colors py-2 ${
                      isActive
                        ? "text-primary-gold"
                        : isScrolled
                        ? "text-neutral-charcoal hover:text-primary-gold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {t(link.key)}
                    {isActive && (
                      <span className="absolute bottom-0 start-0 end-0 h-0.5 bg-primary-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <LocaleSwitcher isScrolled={isScrolled} />
              <button
                onClick={() => setIsMobileOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-neutral-charcoal hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
