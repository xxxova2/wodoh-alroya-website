import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/lib/i18n/routing"
import { locales, localeDirections } from "@/lib/i18n/config"
import Footer from "@/components/layout/Footer"
import LayoutWrapper from "@/components/layout/LayoutWrapper"
import "../globals.css"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const dir = localeDirections[locale as keyof typeof localeDirections] || "ltr"

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('wodoh-theme')||'warm';document.documentElement.dataset.theme=t;document.documentElement.classList.add('preload');}catch(e){}})();",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;600;700&family=Scheherazade+New:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body">
        <NextIntlClientProvider>
          <LayoutWrapper>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </LayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
