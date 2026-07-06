import { redirect } from "next/navigation"

export default async function PortfolioRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  redirect(`/${locale}/#portfolio`)
}
