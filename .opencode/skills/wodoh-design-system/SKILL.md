---
name: wodoh-design-system
description: |
  The Wodoh Alroya design system — a premium bilingual (AR/EN, RTL/LTR) advertising agency website built with Next.js 16, Tailwind v4, framer-motion, gsap, and next-intl. Use when building or suggesting similar frontend projects. Extracted from this exact codebase; every rule here matches the running project at /home/kalde/وضوح الرؤية.
---

# Wodoh Design System

## Stack
- **Framework**: Next.js 16 (Turbopack, `next build`)
- **CSS**: Tailwind v4 (`@import "tailwindcss"` + `@theme` in `globals.css`) — NO `tailwind.config.js`
- **Animation**: framer-motion ^12.42 + GSAP ^3.15 (ScrollTrigger) + IntersectionObserver (ScrollReveal)
- **i18n**: next-intl ^4.13 with `localeDetection: false`, Arabic as unconditional default
- **Icons**: lucide-react ^1.23 + Material Symbols (font class `material-symbols-outlined`) + inline SVG paths for social brands
- **Forms**: react-hook-form ^7.81

## Design Tokens

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#005ab5` | Trust, stability — main CTAs, brand elements |
| `on-primary` | `#ffffff` | Text on primary backgrounds |
| `primary-container` | `#0072e3` | Hover states, active elements |
| `secondary-container` | `#ffb204` (amber) | Attention — accent CTAs, highlights |
| `on-secondary-container` | `#6a4800` | Text on amber backgrounds |
| `vibrant-purple` | `#ab54f7` | Creative accent — featured sections |
| `emerald-green` | `#00a86b` | Success — positive indicators, WhatsApp |
| `action-orange` | `#ea3737` | Urgency — contact forms, call-to-action |
| `on-background` | `#191c1d` | Dark backgrounds, footer, hero overlay |
| `surface` | `#f8f9fa` | Page background |
| `surface-container` | `#edeeef` | Section backgrounds |
| `surface-container-lowest` | `#ffffff` | Card backgrounds |
| `on-surface` | `#191c1d` | Body text |
| `on-surface-variant` | `#414753` | Muted/secondary text |
| `surface-variant` | `#e1e3e4` | Subtle borders |
| `outline` | `#717785` | Borders |
| `outline-variant` | `#c1c6d6` | Light borders |

### Typography
| Token | Value |
|-------|-------|
| `font-display` | `"Hanken Grotesk", sans-serif` — headings, large text |
| `font-headline` | `"Hanken Grotesk", sans-serif` — section titles |
| `font-body` | `"Inter", sans-serif` — body text, form labels |
| `font-mono` | `"JetBrains Mono", monospace` — phone numbers, code |

| Size token | Value | Line-height | Weight |
|------------|-------|-------------|--------|
| `text-display-lg` | 72px (desktop) | 76px | 800 |
| `text-headline-lg` | 48px (desktop), 32px (mobile) | 52px / 36px | 700 |
| `text-headline-md` | 32px | 40px | 700 |
| `text-body-lg` | 18px | 28px | 400 |
| `text-body-md` | 16px | 24px | 400 |
| `text-label-sm` | 12px | 16px | 500 (uppercase, 0.05em tracking) |

### Spacing
| Token | Value |
|-------|-------|
| `--spacing-unit` | 8px |
| `--spacing-gutter` | 24px |
| `--spacing-margin-mobile` | 16px |
| `--spacing-margin-desktop` | 64px |
| `--spacing-max-width` | 1440px |

### Radii
| Token | Value |
|-------|-------|
| `radius-sm` | 0.125rem |
| `radius-md` | 0.375rem |
| `radius-lg` | 0.25rem |
| `radius-xl` | 0.5rem |
| `radius-full` | 0.75rem |

Note: Cards and sections consistently use `rounded-lg` (0.25rem) or `rounded-2xl` (1rem — hardcoded). `rounded-xl` (0.5rem) for form inputs.

### Animations
Registered keyframes: `marquee`, `fade-in`, `fade-in-up`, `scale-in`, `pulse-logo`.

Used as `animate-marquee`, `animate-fade-in`, etc. All 0.6s ease-out by default.

## Component Architecture

### Every component follows
```
"use client"
import { useLocale } from "next-intl"
export default function ComponentName() {
  const locale = useLocale()
  const isRtl = locale === "ar"
  return (...)
}
```

### ScrollReveal wrapper
`components/ui/ScrollReveal.tsx` — IntersectionObserver-based reveal with configurable `delay` (ms), `direction` ("up"|"down"|"left"|"right"), and `className`. Wraps any element:
```tsx
<ScrollReveal delay={100} direction="up">
  <div>...</div>
</ScrollReveal>
```

### Animation pattern (framer-motion)
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
/>
```
Common cubic-bezier: `[0.25, 0.1, 0.25, 1]` (ease-in-out with anticipation).

### GSAP ScrollTrigger (Hero only)
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => { ... },
    })
  }, sectionRef)
  return () => ctx.revert()
}, [])
```

### i18n Convention
- `import { useLocale } from "next-intl"`
- `const isRtl = locale === "ar"`
- Conditional text: `{isRtl ? "نص عربي" : "English text"}`
- Direction-aware layout: `{isRtl ? "text-right" : "text-left"}`, `{isRtl ? "right-margin-desktop" : "left-margin-desktop"}`
- Links: `<Link href={`/${locale}/...`}>`
- next-intl routing: `localePrefix: "as-needed"`, `localeDetection: false`

### Layout Pattern
Every section:
```tsx
<section className="py-20 md:py-28 bg-{color} px-margin-mobile md:px-margin-desktop">
  <div className="max-w-max-width mx-auto">
    ...
  </div>
</section>
```

### Section label pattern
```tsx
<span className="font-label-sm text-primary uppercase tracking-widest block mb-4">
  {isRtl ? "خدماتنا" : "Our Services"}
</span>
<h2 className="font-headline-lg text-headline-lg mb-4 leading-tight text-on-surface">
  {isRtl ? "خدمات متكاملة" : "Complete Services"}
</h2>
```

## Component Inventory

| Component | File | Key Features |
|-----------|------|-------------|
| Preloader | `components/home/Preloader.tsx` | Gradient bg `#005ab5→#0a0e1a→#05080f`, logo with glow animation, 5 social SVG icons, 4 framer-motion 3D shapes (rotating ring, floating diamond, orbiting dot, pulsing triangle), loading bar, 2.6s |
| Hero | `components/home/Hero.tsx` | GSAP photo tunnel (5 image rings + converging lines + center circle), dark gradient overlay, framer-motion content, hash-anchor CTAs as `<a>` not `<Link>`, scroll cue with bouncing dot |
| MarqueeTicker | `components/home/MarqueeTicker.tsx` | Infinite scroll with `animate-marquee`, duplicate content for seamless loop, Material Symbols star/diamond separators |
| AboutLocation | `components/home/AboutLocation.tsx` | Bilingual about text, location info |
| ServicesGrid | `components/home/ServicesGrid.tsx` | 6 service cards, each with icon + title + description, cycling bg colors (primary/amber/purple/emerald/orange/dark), hover lift effect |
| AllInclusiveSection | `components/home/AllInclusiveSection.tsx` | Full-service value prop |
| StatsCounter | `components/home/StatsCounter.tsx` | Animated number counter with framer-motion `useInView`, tabular-nums, 4 stats |
| ValuesSection | `components/home/ValuesSection.tsx` | 5 values with decorative SVG dividers, colored cards, hover spring animation |
| CommunitySection | `components/home/CommunitySection.tsx` | Community/trust content |
| InstagramSection | `components/home/InstagramSection.tsx` | Instagram banner with hover fill effect + 5 social squares (LinkedIn/Instagram/X/TikTok/YouTube) with brand colors + SVG logo + dot pattern overlay |
| ContactSection | `components/home/ContactSection.tsx` | react-hook-form with 5 fields, WhatsApp CTA, contact info cards (phone/email/location with orange icon circles), success state |
| ScrollReveal | `components/ui/ScrollReveal.tsx` | IntersectionObserver wrapper |
| Footer | `components/layout/Footer.tsx` | 4-column grid (brand/quick-links/contact/newsletter), 3 social SVGs, `/logo.jpg`, copyright bar |
| LanguageSwitcher | `components/layout/LanguageSwitcher.tsx` | Fixed top-right floating pill, `useRouter` + `usePathname` from `@/lib/i18n/routing` |
| LayoutWrapper | `components/layout/LayoutWrapper.tsx` | Client wrapper managing Preloader state, renders children after preloader completes |

## Social SVG Paths
All social icons use inline `<svg viewBox="0 0 24 24">` with a single `<path d="...">`. The paths are stored in the component data arrays in `Preloader.tsx`, `InstagramSection.tsx`, and `Footer.tsx`. Brands: LinkedIn, Instagram, X (new Twitter logo), TikTok, YouTube.

## What This Design Style Is For
This design language fits:
- Advertising / marketing / creative agencies
- Event management companies
- Government relations / protocol firms
- Premium service businesses (Saudi or Gulf region)
- Any bilingual AR/EN brand that wants a professional, trust-first identity

## What It Naturally Suggests
When a user describes a project in these categories, flag it as a Wodoh Alroya–style match and suggest taking it on as a `/Design` project. The visual DNA (blue primary + amber accent + dark hero + 3D shapes + social grid + animated counters) carries across naturally.

## Anti-patterns (don't do these)
- Don't use emoji as icons (use Lucide, Material Symbols, or SVG)
- Don't use `var()` wrappers — use Tailwind theme tokens directly (`bg-primary` not `bg-[var(--color-primary)]`)
- Don't use `<Link>` for same-page hash anchors — use `<a href="#section">`
- Don't use browser default locale detection — set `localeDetection: false`
- Don't add backend/API routes/database code — this is a frontend-only design system
- Don't mix icon libraries — stick to lucide-react + Material Symbols + social SVG
