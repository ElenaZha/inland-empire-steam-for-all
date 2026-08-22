# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Inland Empire STEAM for All
**Category:** Nonprofit / Community STEAM Education
**Generated:** 2026-08-22 (via `ui-ux-pro-max` search.py `--design-system --persist`, then
hand-tuned — the raw BM25 match skewed toward "kids app" and "countdown landing page"
patterns from the tool's corpus; those were replaced below with a considered editorial
nonprofit direction, per the `frontend-design` skill's guidance to treat generic defaults
as a starting point to critique, not a final answer.)

---

## Global Rules

### Design Rationale

Synthesizes three references into one voice: the confident whitespace/bold-serif hero of a
Squarespace-style homepage, the warm cream editorial tone and rounded photo crops of a
beige portfolio site, and the structured full-bleed-hero + 3-col card grid of a bordered
ecommerce layout. The result reads as **warm, editorial, trustworthy nonprofit** — not
SaaS-blue, not a children's app, not a literal ecommerce store. Two brand accents pull from
the Inland Empire's own landscape: **orange grove** (terracotta) and **citrus leaf**
(green), so the palette is regionally specific rather than generic.

### Color Palette

| Role | Hex | CSS Variable | Notes |
|------|-----|--------------|-------|
| Canvas / background | `#F7F3EC` | `--color-bg` | warm bone, never stark white |
| Surface (cards) | `#FFFFFF` | `--color-surface` | |
| Surface alt | `#FDFBF7` | `--color-surface-alt` | alternating sections, partner-credit bg |
| Ink (headings/body) | `#221F1B` | `--color-ink` | never pure `#000` |
| Ink muted (secondary text) | `#5C574E` | `--color-ink-muted` | meets 4.5:1 on bone |
| Border / divider | `#E5DFD3` | `--color-border` | warm hairline, not cold gray |
| **Primary accent — orange grove** | `#A8431F` | `--color-terracotta` | CTA fill; dark enough for white text at 4.5:1+ |
| Terracotta pale tag bg / text | `#F6E4DB` / `#8C3A20` | `--color-terracotta-pale-bg/-text` | Chess Program tag |
| **Secondary accent — citrus leaf** | `#3D6B3F` | `--color-green` | swapped in from an earlier teal draft per regional-identity review |
| Green pale tag bg / text | `#E7F0E2` / `#2E4E2B` | `--color-green-pale-bg/-text` | Math Club tag |
| Tertiary accent — desert gold | `#8A6511` | `--color-gold` | general/impact/coaching tag |
| Gold pale tag bg / text | `#FAF0D8` / `#6B4E0C` | `--color-gold-pale-bg/-text` | Private Coaching tag |
| Focus ring | `#1F6C9F` | `--color-focus` | intentionally distinct from brand hues so focus is unambiguous |

**Color Notes:** the brand pairing is "orange grove + citrus leaf," not "terracotta +
teal" — the green family was deliberately retuned from an earlier teal draft to the
`#3D6B3F` range to read as citrus foliage, matching Redlands/Inland Empire's orange-grove
heritage. Both accent hues hold the same contrast bar as before: base hue + white text
≥ 4.5:1, pale-bg + pale-text pairing ≥ 4.5:1.

### Typography

- **Display font (headlines):** Fraunces — warm editorial serif, used with tight tracking
  (`-0.01em`) at hero/section-title scale only.
- **Body/UI font:** Work Sans — humanist geometric sans for body copy, nav, buttons.
  Nav links render uppercase + wide letter-spacing for a small-caps effect.
- **Meta/data font:** Space Mono — used only for stat numerals, schedule/meta rows, and
  credential lines, to give data-like credibility without switching families constantly.
- **Accent font:** Caveat — used *only* inside `.sticky-note`, nowhere else.
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Caveat:wght@600&display=swap`

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | tight gaps (icon + text) |
| `--space-sm` | `8px` / `0.5rem` | inline spacing |
| `--space-md` | `16px` / `1rem` | standard padding |
| `--space-lg` | `24px` / `1.5rem` | card padding, grid gap |
| `--space-xl` | `32px` / `2rem` | card padding (roomy), button padding |
| `--space-2xl` | `48px` / `3rem` | hero column gap |
| `--space-3xl` | `64px` / `4rem` | section vertical padding |
| `--space-4xl` | `96px` / `6rem` | reserved for largest hero breathing room |

### Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | buttons corners fallback, tags corner base, inputs |
| `--radius-md` | `12px` | cards, program images |
| `--radius-lg` | `20px` | hero photo crops (generous, editorial) |
| `--radius-pill` | `9999px` | CTA buttons, tags (Squarespace/ecommerce-inspired pill) |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(34,31,27,0.06)` | resting card lift |
| `--shadow-md` | `0 6px 16px rgba(34,31,27,0.08)` | card hover |
| `--shadow-lg` | `0 20px 40px rgba(34,31,27,0.14)` | hero images, sticky note |

### Z-Index Scale

`--z-base: 10` · `--z-overlay: 30` · `--z-dropdown: 40` · `--z-nav: 50`

---

## Logo / Brand Assets

Real logo artwork was supplied after the initial build and wired in as a component-level
change (not a one-off page edit), replacing the placeholder hand-drawn "spark" SVG that
previously stood in for a mark.

| Asset | File | Source size | Notes |
|---|---|---|---|
| Badge mark (source) | `assets/logo-mark.png` | 6250 × 2344 | Delivered as a very wide **transparent** canvas (alpha = 0 outside the badge) with the actual circular orange-citrus badge occupying only a ~1696×1712px region near center. Verified via pixel sampling — it is **not** a white-background PNG, despite appearances in a plain image viewer. Kept as-is, untouched, as the canonical source file. |
| Badge mark (derived, nav/footer use) | `assets/logo-mark-nav.png` | 1872 × 1872 | Generated from `logo-mark.png` by cropping tightly to the badge with ~80px of padding on each side, preserving transparency. This derived crop — not the raw source file — is what `.brand__mark` actually references, because the source canvas is too wide/sparse to size sensibly at nav height (sizing the raw file to 38px tall would render the badge as an illegible speck). |
| Wordmark banner | `assets/logo-wordmark-banner.png` | 6250 × 2344 | Sunset rays + mountain silhouette + orange badge + baked-in "INLAND EMPIRE STEAM FOR ALL" wordmark. Also a **transparent** PNG (verified: corner/edge pixels have alpha = 0). Used once, as a homepage masthead brand moment (see below) — not tiled into the header/footer, to avoid brand-mark overload. |

**Header/footer usage (`.brand__mark`):** `<img src="assets/logo-mark-nav.png" alt="Inland
Empire STEAM for All logo" class="brand__mark">` at 38×38px in the header, `.brand__mark--sm`
(28×28px) in the footer, `object-fit: contain`, plus a very low-opacity `drop-shadow` filter
(the one deliberate exception to the "no heavy shadow" rule, since the badge would otherwise
sit flush against the bone background with zero separation). Because the badge already bakes
in the full org name as curved text-in-image (illegible at 38px, which is expected and normal
for a small mark), the adjacent `<span>IE STEAM for All</span>` next to it is a deliberately
**abbreviated** wordmark, not a second full repetition of the name — this was a conscious
call, not an oversight, to avoid saying "Inland Empire STEAM for All" twice at small sizes
while still giving screen-space-constrained visitors readable brand text next to the icon.

**Homepage masthead usage (`.brand-banner`):** the wordmark banner is placed once, directly
below the header and above the hero on `index.html` only, using the `.brand-banner` component
in `components.css`. Updated per explicit request from a contained `max-w-xl` treatment to
**full-bleed, edge-to-edge** — `.brand-banner` no longer constrains `max-width`, and the
`<img>` is `width:100%; height:auto; object-fit:contain` so the source aspect ratio (~2.67:1)
still isn't distorted, it just now spans the full viewport width instead of sitting in a
centered card. Not repeated in the footer or on program pages, to keep it a singular,
deliberate brand moment rather than a repeated design element.

**Transparency finding:** both supplied PNGs already have real alpha transparency (confirmed
by sampling corner/edge pixels: `A = 0` outside the artwork, `A = 255` inside it) — the
apparent white background is just how they render in a viewer over a white canvas. No card,
shadow-box, or background-color treatment was needed to avoid a "jarring white square"
against the `--color-bg` bone background; the subtle `drop-shadow` on `.brand__mark` is purely
a depth touch, not a fix for a transparency problem.

---

## Component Specs

All components live in `components.css` and are reused verbatim (same classes, same
markup shape) across every page. Tailwind utility classes (via CDN) are layered on top for
layout mechanics only — grid/flex placement and responsive breakpoints — never for color,
radius, or shadow, so visual identity can't drift page-to-page.

### `.site-header` / nav
Sticky, translucent-blur bone background, bottom hairline border. Brand slot is the real
`.brand__mark` logo image (see "Logo / Brand Assets" above) plus an abbreviated
`<span>IE STEAM for All</span>` wordmark — this replaced an earlier placeholder hand-drawn
SVG "spark" mark once real artwork was supplied. Small-caps nav links (`.nav-link`), 44px
min height, `aria-current="page"` + terracotta underline on the active page. Below 1080px,
collapses to a `.nav-toggle` hamburger button (`aria-label`, `aria-expanded`) revealing a
`.mobile-menu` list — widened from an initial 900px breakpoint once "Private Coaching" was
added as a 5th nav label, to keep the desktop row from feeling cramped. Nav order (all 5
pages): Home → Chess Program → Math Club → Private Coaching → About Us → **Donate** (CTA
button).

### `.hero`
Two modifiers on one base class:
- `.hero--split` — headline + subcopy + CTA pair on the left, rounded photo frame on the
  right (Home, Private Coaching).
- `.hero--full-bleed` — full-bleed photo, dark gradient overlay, white headline + CTA
  pinned bottom-left (Chess Program, Math Club, About).

### `.bento` + `.card`
CSS grid, 4-column base, collapsing to 2 then 1 column responsively. Span utilities
(`.span-2`, `.span-3`, `.span-4`, `.row-span-2`) let content blocks of different shapes sit
in the same grid without custom CSS per block — this is the mechanism that lets future
programs/pages drop in without a redesign.

### `.program-card` (extends `.card`)
Image → pastel `.tag` (color keyed to the program's accent) → serif title → blurb → mono
meta row (ages/schedule) → "Learn more" link with an animating arrow icon. Used today for
Chess Program + Math Club on Home; a `.card--ghost` (dashed border) sits in the same grid
as a literal "more programs coming soon" placeholder.

### `.partner-credit`
Bordered strip: monogram mark, "In partnership with" eyebrow, partner name (serif), one-
line description, terracotta text link. Identical instantiation on `chess-program.html`
(Redlands Boys & Girls Club) and `math-club.html` (Cope Middle School Math Club) — same
classes, only the text/link content differs.

### `.coach-card` (person-card variant of `.card`)
Square photo → name (serif) → specialty `.tag` (pale-accent, reuses the same tag system as
program tags) → mono credentials line → one-line bio. New for Private Coaching; proves the
card system extends to a third content shape (person bios) beyond programs and partners.

### `.stat-card`
Mono numeral (`--font-mono`, terracotta) + label. Arranged in a `.bento` row for the Home
impact strip.

### Buttons
```css
.btn-primary { background: var(--color-terracotta); color: #fff; border-radius: var(--radius-pill); min-height: 44px; }
.btn-primary:hover { background: var(--color-terracotta-dark); }
.btn-outline { border: 2px solid var(--color-ink); color: var(--color-ink); border-radius: var(--radius-pill); }
.btn-outline:hover { background: var(--color-ink); color: #fff; }
```
No scale-based hover (avoids layout shift) — only color/background transitions plus a
2px `translateY` lift on `.card`, which does not affect surrounding layout flow.

### `.sticky-note`
Small rotated white card, `Caveat` handwriting, `--shadow-lg`, overlapping a photo. Used
sparingly (About page team photo) as the one deliberate "editorial" accent.

### `.site-footer`
Ink background, 3–4 link columns, newsletter field with a real `<label for>` (not just a
placeholder), mailto contact link, map-pin location line. No fabricated social-media brand
icons (avoids guessing incorrect logos) — uses email + location instead.

---

## Page Pattern (shared skeleton)

**Section order:** Header → Hero → primary content (bento/cards) → secondary content →
CTA band or partner credit → Footer.

**CTA placement:** always visible in the header (Donate) and repeated once more in-page
(hero and/or bottom CTA band).

**Stack guidance applied** (from `search.py --stack html-tailwind`): semantic CSS-variable
naming instead of raw Tailwind color utilities in components; `aria-label` on every icon-
only button (hamburger, close); consistent `gap-*`/CSS `gap` for grid spacing instead of
per-item margins.

---

## Anti-Patterns (Do NOT Use)

- ❌ Default purple/blue SaaS gradients
- ❌ Inter-everywhere generic AI-template look
- ❌ Emojis as icons — use inline SVG (Heroicons/Lucide-style outline paths) only
- ❌ Missing `cursor: pointer` on clickable elements
- ❌ Layout-shifting hover transforms (scale that resizes the box in flow)
- ❌ Low-contrast text (below 4.5:1)
- ❌ Instant state changes — always transition 150–300ms
- ❌ Invisible focus states
- ❌ Guessed/incorrect brand logos (no fabricated social icons)
- ❌ "Kids app" bubble-shadow style or countdown/waitlist landing pattern (the tool's raw
  match for this query — explicitly overridden by this document)

---

## Pre-Delivery Checklist

- [x] No emojis used as icons (inline SVG only)
- [x] Consistent icon set/sizing (24x24 viewBox, hand-drawn contextual marks for chess/math/coaching)
- [x] `cursor-pointer` on all clickable elements
- [x] Hover states with smooth transitions (200ms)
- [x] Light mode text contrast 4.5:1 minimum (ink/bone, white/terracotta, pale-tag pairs)
- [x] Visible `:focus-visible` outlines on all interactive elements
- [x] `prefers-reduced-motion` respected (global override in `components.css`)
- [x] Responsive: 375px / 768px / 1024px / 1440px (bento collapses 4→2→1 columns)
- [x] No content hidden behind the sticky header (header is in normal flow, not overlapping)
- [x] No horizontal scroll on mobile
- [x] Real `<label for>` on the footer newsletter input
- [x] Descriptive `alt` text on every image
