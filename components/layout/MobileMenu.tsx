"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  key: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <div
            className="absolute inset-0 bg-neutral-dark/90 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: locale === "ar" ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: locale === "ar" ? "100%" : "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`absolute top-0 bottom-0 w-72 bg-gradient-dark ${
              locale === "ar" ? "end-0" : "start-0"
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-white font-bold text-lg">
                {locale === "ar" ? "القائمة" : "Menu"}
              </span>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 flex flex-col gap-2">
              {links.map((link, index) => {
                const isActive = pathname === `/${locale}${link.href}`;
                return (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={onClose}
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all ${
                        isActive
                          ? "bg-primary-gold/20 text-primary-gold border border-primary-gold/30"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="absolute bottom-8 start-6 end-6">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "966592062706"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary-gold text-neutral-dark font-bold transition-all hover:bg-primary-gold-dark"
              >
                {locale === "ar" ? "تواصل عبر واتساب" : "WhatsApp"}
              </a>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
