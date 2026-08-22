# Chess Program Page Overrides

> **PROJECT:** Inland Empire STEAM for All
> **Page Type:** Program detail page
> ⚠️ Rules here override `design-system/MASTER.md`. Only deviations are documented; for
> everything else, follow the Master.

*(Note: the raw `search.py` output for this page originally suggested a "countdown /
waitlist / email capture" landing pattern — that's a generic match from the tool's corpus
for a query like "youth program," not a fit for a real program detail page. It has been
replaced below with the pattern actually built.)*

---

## Page-Specific Rules

### Layout Overrides
- Hero uses `.hero--full-bleed` (photo: `picsum.photos/seed/chess-program-students/1600/900`),
  not the split hero used on Home/Private Coaching.
- Section order: Header → full-bleed hero → program overview (prose, `.max-prose`) →
  `.partner-credit` (Redlands Boys & Girls Club) → `.bento` of schedule / what-they-learn /
  quote / photo cards → secondary CTA band ("Bring Chess to Your School").

### Color Overrides
- Program accent tag color is **terracotta** (`.tag--terracotta`) — chess reuses the
  primary brand accent rather than getting a unique hue, since it's positioned as the
  flagship program alongside Math Club (green) and Private Coaching (gold).

### Component Overrides
- `.partner-credit` instance: monogram "RB" mark, name "Redlands Boys & Girls Club," one
  line on hosting weekly sessions, link out (`href="#"` placeholder — no real partner URL
  asserted since this is filler content).

## Page-Specific Components
- None beyond Master — this page is built entirely from `.hero--full-bleed`,
  `.max-prose`, `.partner-credit`, and `.bento`/`.card`, proving those components need no
  page-specific CSS to support a program page.

## Recommendations
- Keep the `.partner-credit` markup byte-for-byte identical in structure to
  `math-club.md`'s instance (only text content should differ) so the pattern reads as one
  system across both partner pages.
