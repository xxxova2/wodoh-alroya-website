# Review — وضوح الرؤية / Wodoh Alroya

**Mode:** review
**Date:** 2026-07-09
**Surface:** Landing page (`/ar`, `/en`) — single-page agency site for a Saudi advertising / events / printing company
**Register:** Brand (marketing landing)
**Stack observed:** Next 16, Tailwind v4 (`@theme` tokens), framer-motion, GSAP, three.js (decorative WebGL), next-intl, React 19

---

## Verdict

**Score: 35 / 50** — A confident, bilingual, RTL-aware build with a real design system and good motion/state hygiene. It is undermined by a few specific, verifiable defects: Arabic display type is not using the declared Arabic fonts (it silently falls back), there is no primary navigation on a long one-page site, and one stat label references a color token that does not exist. These are fixable, not structural. Most real work lives in the middle here.

---

## Heuristic Scores

| # | Lens | Score | Key finding |
|---|------|-------|-------------|
| 1 | First impression | 8 | Distinctive photo-tunnel hero, bilingual, branded. Under-cut slightly by a 3.2s preloader gate and a busy accent palette. |
| 2 | Hierarchy | 7 | Clear section rhythm and generous scale. No persistent nav means wayfinding depends on the footer on a long scroll. |
| 3 | Color voice | 7 | Cohesive warm system with 60–30–10 mostly intact, but 6+ saturated accent hues dilute the brand-blue anchor. |
| 4 | Type voice | 6 | **Defect:** the most prominent Arabic text (hero H1, footer wordmark) is set in `font-display` (Latin Hanken Grotesk) and falls back to a system Arabic face, not the declared `font-arabic-heading`. |
| 5 | Interaction feel | 7 | Strong states (form errors, focus ring, reduced-motion). Gated by `display:none` preloader, theme menu is Arabic-only, no top nav. |

---

## First Impression

The hero makes a promise and keeps it: a low-opacity "tunnel" of real project photography frames a text panel, the logo sits in a beige chip top-corner, a beige scrim pulls focus to the copy, and the brand name "وضوح الرؤية / Wodoh Alroya" lands large. It reads as a specific Saudi agency, not a template. That impression is real, not generic.

Two things soften it. First, the entire page is hidden behind a 2.6s animated preloader (`LayoutWrapper` renders `display:none` until the loader finishes, plus a 0.6s fade ≈ 3.2s of blank brand-blue before any content). For a marketing site that is a conversion and LCP cost. Second, the hero stacks three decorative systems at once — SVG tunnel, a `Scene3D` WebGL layer at `opacity-60`, and floating blur blobs — which is cohesive but heavy.

## Hierarchy

Section order is logical: Hero → marquee → About/Community → Services → Portfolio (Stats, Values, Instagram) → marquee → Contact → Footer. Scale contrast is healthy and the squint test passes. The gap is **wayfinding**: there is no sticky header or primary nav anywhere. The only always-visible chrome is the floating language switcher (top-right) and theme switcher (top-left). On a page this long, a visitor who scrolls into Services or Contact has no in-page nav except the footer quick links. That is the single biggest structural omission.

## Color Voice

The `warm` default (beige canvas `#f5f0e6`, charcoal text, brand blue `#005ab5`) is tasteful, and the five selectable theme colorways are a genuine system, not a gimmick. The 60-30-10 intent mostly holds (beige dominates, blue is the action anchor). The risk is **accent sprawl**: the services grid cycles six accent colors per card, the Values section is five solid-colored cards (blue, emerald, purple, orange, near-black), Community is bright-red, Instagram bar bright-red, footer red+gold. Individually fine, together they read as a generic "agency rainbow" that dilutes the blue anchor. Intentional, but worth tightening.

## Type Voice

This is the weakest lens and the defects are concrete:

- **`components/home/Hero.tsx` (line ~228):** the H1 uses `text-display-lg font-display font-extrabold`. `font-display` is Hanken Grotesk (Latin). Arabic "وضوح الرؤية" therefore renders in whatever system Arabic face the browser substitutes — **not** the project's declared `font-arabic-heading` (Scheherazade New / Amiri serif). The single most important piece of Arabic copy on the site is not in its brand Arabic type.
- **Footer wordmark (`components/layout/Footer.tsx`):** the giant `وضوح الرؤية` wordmark also uses `font-display` → same fallback.
- **Body Arabic:** paragraphs use `font-body` (Inter, Latin) and are not wrapped in the `.font-arabic` (Amiri) utility, so all Arabic body also relies on fallback.
- The Latin/English side is correct and well-set. The mismatch is Arabic-only.

## Interaction Feel

Good fundamentals: form has visible labels, `aria-invalid`, inline error copy, a success state, and a disabled/submitting state; there is a global `:focus-visible` ring; `prefers-reduced-motion` is honored across marquee, blobs, and preloader. Three interaction gaps:

- **No primary nav** (covered under Hierarchy).
- **Preloader gates all content** via `display:none` — see First impression.
- **`ThemeSwitcher` is Arabic-only** (`components/layout/ThemeSwitcher.tsx`): the menu title "اختر اللون", the theme names (`labelAr`), and the `aria-label` are hardcoded Arabic even when `locale === "en"`. A real bilingual-fidelity break.

---

## What's Working

- **Bilingual + RTL is genuinely first-class.** Every section branches on `locale`/`isRtl`, uses logical positioning, and `dir` is set from locale config. Rare to see this done cleanly.
- **Honest motion system.** Spring physics, staggered `ScrollReveal`, `prefers-reduced-motion` guards, and a `pulse-logo`/`marquee` stop under reduced motion. Not robotic.
- **Form completeness.** Validation, error states, loading, and success are all real, not stubbed.
- **Themeable tokens.** Five colorways recolor chrome + content by overriding semantic `--color-*` only — zero component edits. That is disciplined systems work.
- **Visual variety across sections.** Each section has its own composition (split, band, grid, marquee) rather than repeated cards.

---

## Priority Issues

### P1 — Arabic display type silently falls back to a system font
**Evidence:** `Hero.tsx` H1 uses `font-display` (Hanken Grotesk, Latin) with no `font-arabic-heading`; footer wordmark same. The declared Arabic serif (`--font-arabic-heading`) is never applied to the two most prominent Arabic strings, so they render in an unstyled system Arabic face.
**Fix:** Apply `font-arabic-heading` to the hero H1 (Arabic branch) and the footer wordmark; apply `.font-arabic` to Arabic body paragraphs. → `/design typeset`

### P1 — No primary navigation on a long one-page site
**Evidence:** `LayoutWrapper` renders only floating LanguageSwitcher + ThemeSwitcher. No header, no in-page anchor nav. Footer quick links are the only section jump.
**Fix:** Add a sticky, bilingual, RTL-aware header with brand + section anchors (#about/#services/#portfolio/#contact) and the lang/theme controls. → `/design relayout` or `/design create`

### P1 — Stat labels reference a non-existent color token
**Evidence:** `StatsCounter.tsx` line 58 uses `text-surface-variant/60`. No `--color-surface-variant` token exists anywhere in `globals.css` (only `on-surface-variant`, `surface-container-*`). Tailwind cannot generate the utility, so the class is dropped and the label inherits full-opacity white instead of a dimmed 60% variant on the dark band.
**Fix:** Use `text-surface/60` (or define `--color-surface-variant` and apply it). → `/design recolor` / quick fix

### P2 — Theme switcher menu is Arabic-only
**Evidence:** `ThemeSwitcher.tsx` title "اختر اللون", theme names `labelAr`, and `aria-label` are hardcoded Arabic regardless of locale.
**Fix:** Branch label/aria on `locale`; add `labelEn`. → `/design interaction`

### P2 — Preloader hides all content for ~3.2s
**Evidence:** `LayoutWrapper` sets `display:none` until `Preloader` completes (2.6s + 0.6s fade). Hurts first-contentful paint and conversion; content is invisible on first paint.
**Fix:** Render content immediately and overlay the loader (or cap at ~1.2s), or show skeleton behind it. → `/design interaction`

### P2 — Accent palette sprawl dilutes the brand anchor
**Evidence:** Six accent colors cycle through services cards; five solid-colored value cards; bright-red Community/Instagram; gold footer. Cohesive individually, busy together.
**Fix:** Designate brand-blue as the single action anchor; reserve gold/orange/purple/emerald as rare secondary marks, not per-card rainbows. → `/design recolor`

### P3 — Dead utilities and an irrelevant scroll offset
**Evidence:** `bg-gradient-dark`, `bg-gradient-gold`, `bg-gradient-primary` are defined in `globals.css` but never used. `scroll-padding-bottom: 88px` assumes a sticky header that does not exist.
**Fix:** Remove unused utilities; revisit scroll offset once a header exists. → `/design refine`

---

## Recommendations (by impact)

1. **`/design typeset`** — Fix Arabic display + body fonts (P1). Highest visual impact, lowest risk.
2. **`/design relayout`** (or `create`) — Add a sticky bilingual header/nav (P1). Biggest structural win for wayfinding.
3. **`/design recolor`** — Tighten accent discipline + fix the `surface-variant` token (P1/P2).
4. **`/design interaction`** — i18n the theme menu, shorten/split the preloader gate (P2).
5. **`/design refine`** — Remove dead utilities, reconcile scroll offset (P3).

No technical-health issues were treated as design quality. No claims are made about states, motion, or responsiveness that were not read in code; live rendering was not executed, so motion/responsive behavior is assessed from implementation, not a running browser.
