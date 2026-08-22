# Math Club Page Overrides

> **PROJECT:** Inland Empire STEAM for All
> **Page Type:** Program detail page
> ⚠️ Rules here override `design-system/MASTER.md`. Only deviations are documented; for
> everything else, follow the Master.

---

## Page-Specific Rules

### Layout Overrides
- Same skeleton as `chess-program.md`: `.hero--full-bleed`
  (photo: `picsum.photos/seed/math-club-students/1600/900`) → prose overview →
  `.partner-credit` → `.bento` of schedule / what-they-learn / quote / photo cards →
  secondary CTA band ("Start a Math Club at Your School").

### Color Overrides
- Program accent tag color is **citrus-leaf green** (`.tag--green`) — visually
  distinguishes Math Club from Chess Program (terracotta) while sharing every other style
  rule, so a reader can tell programs apart at a glance without a legend.

### Component Overrides
- `.partner-credit` instance: monogram "CM" mark, name "Cope Middle School Math Club," one
  line about the weekly on-campus problem-solving sessions, link out (`href="#"`
  placeholder).

## Page-Specific Components
- None — deliberately reuses `.hero--full-bleed`, `.partner-credit`, and `.bento`/`.card`
  with zero one-off CSS, confirming the component set generalizes across program pages.

## Recommendations
- If a future program has no single external partner (e.g., a self-run program), the
  `.partner-credit` block should simply be omitted from that page rather than forced —
  it's an optional slot in the shared page skeleton, not a mandatory one.
