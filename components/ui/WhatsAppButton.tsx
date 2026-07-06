"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = "السلام عليكم، أرغب في الاستفسار عن خدماتكم";
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-105 glow-gold"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
}
