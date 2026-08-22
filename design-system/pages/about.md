# About Us Page Overrides

> **PROJECT:** Inland Empire STEAM for All
> **Page Type:** Org story / team page
> ⚠️ Rules here override `design-system/MASTER.md`. Only deviations are documented; for
> everything else, follow the Master.

---

## Page-Specific Rules

### Layout Overrides
- Hero uses `.hero--full-bleed` (photo: `picsum.photos/seed/about-team-photo/1600/900`)
  with a shorter headline than the program pages (mission-statement tone, not a program
  pitch).
- Section order: Header → hero → mission statement (`.max-prose`) → "Our Story" section
  with one `.sticky-note` annotation overlapping a photo → team/volunteers `.bento` of
  `.card`s (reusing the same card shell as `.program-card`/`.coach-card`, just with a
  person photo + name + role + one-line bio, no tag/meta row needed) → values strip
  (`.bento` of small `.card`s) → shared `.cta-band` (same component instantiated on Home).

### Typography Overrides
- `.sticky-note` (Caveat) is used here — nowhere else on the site — as the one deliberate
  handwritten-annotation accent per the Clare-Butler-style reference. Keeping it isolated
  to this single page/section prevents the handwriting accent from becoming visual noise.

### Component Overrides
- Team cards are plain `.card` (not `.program-card` or `.coach-card`) since they need no
  pastel tag or meta row — proof the base `.card` alone is reusable for a third content
  shape (staff bios) without a dedicated subclass.

## Recommendations
- Fictional team names/roles only (no real people) since this is filler content for a
  hypothetical org.
