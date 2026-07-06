import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "وضوح الرؤية للدعاية والإعلان | Wodoh Alroya",
  description: "شركة وضوح الرؤية للدعاية والإعلان - حلول متكاملة في الدعاية والإعلان وإدارة الفعاليات والطباعة",
  keywords: ["دعاية وإعلان", "فعاليات", "طباعة", "هدايا ترويجية", "تعهدات فنية", "خدمات لوجستية"],
  authors: [{ name: "Wodoh Alroya" }],
  openGraph: {
    title: "وضوح الرؤية للدعاية والإعلان",
    description: "شريكك في التميز والإبداع منذ 15 عاماً",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "وضوح الرؤية للدعاية والإعلان",
    description: "شريكك في التميز والإبداع منذ 15 عاماً",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
