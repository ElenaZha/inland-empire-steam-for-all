# Private Coaching Page Overrides

> **PROJECT:** Inland Empire STEAM for All
> **Page Type:** Program detail page (services/roster variant)
> ⚠️ Rules here override `design-system/MASTER.md`. Only deviations are documented; for
> everything else, follow the Master.

This page was added after the initial four-page build to stress-test the component
system: **can a new page type (a coach roster + rates page, rather than a program-with-one-
partner page) be assembled purely from existing components plus one new card variant?**
The answer documented below is yes — see "Second Proof Point" at the bottom.

---

## Page-Specific Rules

### Layout Overrides
- Hero uses `.hero--split` (like Home), not `.hero--full-bleed` — this page is framed as a
  service offering rather than a single flagship program, so it borrows the Home hero
  treatment. Photo: `picsum.photos/seed/private-coaching-session/900/700`.
- Section order: Header → split hero → short intro paragraph (`.max-prose`) → `.bento`
  grid of 4 `.coach-card`s → rates/scheduling filler note (plain `.card`, `.span-4`) → CTA
  button matching `.btn-primary` used everywhere else.
- No `.partner-credit` on this page — coaching is run directly by the org, not through an
  external partner, so the slot is simply omitted (per the recommendation left in
  `math-club.md`).

### Color Overrides
- Program accent tag color is **desert gold** (`.tag--gold`) — the third and final hue in
  the accent rotation (terracotta = Chess, green = Math Club, gold = Coaching), so all
  four current program-ish pages are visually distinguishable at a glance without adding a
  fourth hue.

### Component Overrides — New: `.coach-card`
A person-card variant of `.card`: square photo, name (serif), one specialty `.tag--gold`
pill (e.g. "Algebra Readiness," "Chess Strategy," "Competition Math"), a mono credentials
line (e.g. "B.S. Mathematics, UC Riverside · 6 yrs tutoring"), and a one-line bio. Defined
in `components.css` §11 as `.coach-card__image`, `.coach-card h3`,
`.coach-card__credentials` — extends `.card`'s padding/border/radius/shadow/hover rather
than redefining them.

## Page-Specific Components
- `.coach-card` (new, documented above and in `components.css`).

## Recommendations / Second Proof Point
Alongside `.partner-credit` (reused identically on Chess Program and Math Club), this page
is the system's second proof point: a page type never anticipated in the original four-page
brief was assembled using the *existing* `.hero`, `.bento`, `.card`, `.tag`, and `.btn`
primitives, plus exactly one small, additive card variant (`.coach-card`) rather than a
one-off page-specific stylesheet. No token was added, no existing component was modified,
and no page's visual language had to change to accommodate it — which is the scalability
property the whole system was built for.
