# Design System — DataWithAnas Portfolio

> **Source of truth.** When building any page or component, read this file first.
> Page-specific deviations (if any) live in `design-system/pages/<page>.md` and override this file.
> Tokens are implemented in `src/styles/global.css` via Tailwind v4 `@theme`. Keep this doc and that file in sync.

---

## 1. Product & Pattern

- **Product type:** Personal portfolio — Data Scientist / Data Analyst (Muhammad Anas).
- **Audience:** Recruiters and hiring managers at tech / cloud / data-driven companies. They skim. They want proof of impact in seconds.
- **Pattern:** **Single-page Portfolio Grid** with anchored scroll navigation.
  - Section order: Hero → About → Skills → Experience → Projects → Certifications → Stats → Contact.
  - **Conversion focus:** credibility first. Impact numbers (30%, 35%, 50%) must be visually prominent.
  - **CTA placement:** Hero primary CTAs (View Projects / Contact) + project-card links + footer contact. One primary CTA per section.
  - **Color strategy:** Neutral dark canvas lets content and metrics shine; accent used sparingly for emphasis and interaction only.

---

## 2. Style

- **Name:** Dark, minimal, data/tech aesthetic (minimalism + restrained data-dashboard density).
- **Mode:** Dark-only (intentional — matches the data/tech brand). No light mode.
- **Principles:**
  - Clean, uncluttered, generous whitespace; let metrics and headings carry the page.
  - Data-inspired texture (dot-grid backdrop, mono labels, subtle gradients) — never stock photos or emoji.
  - Density rises only in Skills / Stats / Experience where data-dashboard compactness reads as expertise.
- **Performance:** Excellent (static Astro, system fonts fallback). **Accessibility:** target WCAG AA.

---

## 3. Color Tokens

Implemented as `--color-*` in `global.css`. **Never hardcode hex in components — use the token.**

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--color-bg` | `#0a0e14` | Page canvas |
| Surface | `--color-surface` | `#11161f` | Cards, panels |
| Elevated | `--color-elevated` | `#161c27` | Hover/raised surfaces, popovers |
| Border | `--color-border` | `#1e2530` | Default dividers, card edges |
| Border strong | `--color-border-strong` | `#2a3340` | Emphasized borders, scrollbar |
| Text | `--color-text` | `#e6edf3` | Primary text (≥ 4.5:1 on bg/surface) |
| Muted | `--color-muted` | `#9aa7b4` | Secondary text (≥ 4.5:1 on bg) |
| Faint | `--color-faint` | `#64727f` | Tertiary / captions — **headings & labels only, not body** |
| Accent | `--color-accent` | `#2dd4bf` | Primary accent (teal), links, focus ring, gradient start |
| Accent soft | `--color-accent-soft` | `#14b8a6` | Hover/pressed accent, solid CTA fill |
| Accent 2 | `--color-accent-2` | `#38bdf8` | Gradient end (sky), secondary highlight |

**Contrast rules**
- `--color-text` and `--color-muted` on `--color-bg`/`--color-surface` meet AA (4.5:1).
- `--color-faint` (#64727f on #0a0e14 ≈ 4.0:1) is **large-text / label only** — never body copy or essential small text.
- Accent teal/sky are bright enough for large text and UI glyphs (≥3:1); for accent text smaller than 18px, prefer `--color-text` and reserve accent for emphasis spans, icons, and borders.
- Never convey meaning by color alone — pair with icon, label, or weight.

---

## 4. Typography

| Role | Family | Token |
|------|--------|-------|
| Display / headings | Space Grotesk | `--font-display` |
| Body / UI | Inter Variable | `--font-sans` |
| Code / data labels / metrics | JetBrains Mono Variable | `--font-mono` |

**Type scale** (use consistently; clamp for fluid hero):
| Step | Size | Line-height | Usage |
|------|------|-------------|-------|
| Display | `clamp(2.5rem, 6vw, 4.5rem)` | 1.05 | Hero name |
| H1 | 2.25rem (36px) | 1.15 | Section heading |
| H2 | 1.5rem (24px) | 1.25 | Subsection / card title |
| H3 | 1.25rem (20px) | 1.3 | Card heading |
| Body | 1rem (16px) | **1.6** | Paragraphs (min 16px — avoids iOS zoom) |
| Small | 0.875rem (14px) | 1.5 | Captions, meta |
| Mono label | 0.75–0.875rem | 1.4 | Tags, kicker labels, uppercase tracking |

**Rules**
- Headings: Space Grotesk, weight 600–700, slight negative tracking (`-0.02em`) on large sizes.
- Body: Inter 400, line-height 1.6, max line length ~65–75ch on desktop.
- Metrics (the "35% faster" numbers): JetBrains Mono with **tabular figures**, large + accent or gradient, with a muted descriptor beneath.
- Mono kicker labels (e.g. `// experience`) for section eyebrows — reinforces the data aesthetic.

---

## 5. Spacing, Layout & Radius

- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px (Tailwind `1 2 3 4 6 8 12 16 24`). Stay on the scale.
- **Section vertical rhythm:** `py-24` desktop / `py-16` mobile between major sections.
- **Container:** `max-w-6xl` (1152px) centered, `px-6` mobile / `px-8` desktop gutters.
- **Card radius:** `--radius-card` = 14px. Buttons/tags: 8–10px / pill for tags.
- **Breakpoints:** 375 / 768 (`md`) / 1024 (`lg`) / 1440. Mobile-first. No horizontal scroll. `min-h-dvh` over `100vh`.
- **Z-index scale:** 0 base · 10 sticky nav · 20 dropdowns · 40 overlays · 100 modals.

---

## 6. Effects & Texture

Defined in `global.css`:
- **Dot-grid backdrop** (`.bg-dotgrid`) — subtle data-paper texture behind hero/sections.
- **Gradient text** (`.text-gradient`) — teal→sky, reserved for the name and 1–2 key emphasis words. Don't overuse.
- **Reveal-on-scroll** (`.reveal` / `.is-visible`) — fade + 18px rise, 0.7s ease-out; auto-disabled under `prefers-reduced-motion`.
- **Custom scrollbar** — themed to border-strong.
- **Cards:** surface fill + 1px border; on hover lift to `--color-elevated`, border → border-strong, optional accent glow. **Transform must not shift surrounding layout.**
- **Shadows:** keep flat/subtle on dark; prefer border + elevation-color change over heavy drop shadows.

---

## 7. Motion Tokens

- **Micro-interactions:** 150–250ms. **Section reveals:** ≤ 700ms.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out) for entrances; ease-in for exits; exit ~60–70% of enter duration.
- **Animate `transform` / `opacity` only** — never width/height/top/left (avoids reflow/CLS).
- Every animation conveys cause→effect; max 1–2 animated elements per view.
- **Always** honor `prefers-reduced-motion: reduce` (already wired in base CSS).

---

## 8. Component Specs

**Buttons**
- Primary CTA: accent-soft fill, `--color-bg` text, radius 10px, ≥44px tall, hover → accent, 150ms.
- Secondary: transparent fill, 1px border-strong, text color; hover border→accent.
- All clickable elements: `cursor: pointer`, visible `:focus-visible` ring (2px accent, 3px offset — already global).

**Tags / chips** (project & skill tags)
- Mono, small, pill radius, surface/elevated fill, 1px border, muted text. Consistent across Skills & Projects.

**Cards** (projects, certs, experience)
- Surface bg, 14px radius, 1px border, `p-6`. Title (H3) + mono tag row + muted description + link.
- Hover state as §6. Entire card not a link unless it has one clear target; otherwise explicit "View on GitHub →" link.

**Metric / KPI block** (Stats, Experience impact)
- Big mono tabular number (accent or gradient) + muted label. Reserve space to avoid layout shift.

**Nav**
- Sticky top, ≤7 anchor links, active section highlighted (color + weight). Mobile: collapse to menu. Icon+label, never icon-only.

**Forms (Contact)**
- Visible labels (not placeholder-only). Semantic input types (`email`). Error below field. Loading→success/error on submit. Min 44px input height.

**Icons**
- SVG only (Heroicons / Lucide). One family, consistent stroke (1.5–2px) and size tokens. **No emoji as icons.** ≥44×44px tap area.

---

## 9. Anti-Patterns (Avoid)

- Emoji as structural icons; raster/PNG icons that pixelate.
- Hardcoded hex in components instead of tokens.
- `--color-faint` for body copy (fails AA at small sizes).
- Layout-shifting hover transforms; animating width/height.
- Cluttered data / competing accents — keep accent rare.
- Color-only status meaning; placeholder-only form labels.
- Generic corporate-template feel; stock photos.

---

## 10. Pre-Delivery Checklist

- [ ] No emoji icons — SVG (Heroicons/Lucide), one family, consistent stroke
- [ ] All colors via tokens, no raw hex in components
- [ ] `cursor-pointer` + visible focus ring on every interactive element
- [ ] Hover/active/disabled states distinct, 150–250ms transitions
- [ ] Body text ≥16px, line-height 1.6; primary/secondary text meet 4.5:1
- [ ] Touch targets ≥44×44px, ≥8px apart
- [ ] `transform`/`opacity` animations only; `prefers-reduced-motion` respected
- [ ] No horizontal scroll; verified at 375 / 768 / 1024 / 1440px
- [ ] Metrics use tabular mono figures; reserved space (no CLS)
- [ ] One primary CTA per section; nav active state shown
