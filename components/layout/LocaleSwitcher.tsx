"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/routing";
import { Languages } from "lucide-react";

export default function LocaleSwitcher({
  isScrolled = false,
}: {
  isScrolled?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
        isScrolled
          ? "border-gray-200 text-[#0072E3] hover:bg-blue-50"
          : "border-white/30 text-white hover:bg-white/10"
      }`}
    >
      <Languages className="w-4 h-4" />
      <span>{locale === "ar" ? "EN" : "عربي"}</span>
    </button>
  );
}
