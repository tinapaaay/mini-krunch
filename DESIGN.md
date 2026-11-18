---
version: alpha
name: Mini Krunch concept
description: An unofficial portfolio website concept for Konu's Mini Krunch cereal cups, where each flavor floods the first screen with its own color.

colors:
  primary: "#77197E"
  primary-soft: "#904A95"
  secondary: "#F6C55E"
  neutral: "#FBF1DF"
  surface: "#FBF6EE"
  surface-raised: "#FFFFFF"
  on-surface: "#531607"
  on-surface-soft: "#7A4B3F"
  on-surface-faint: "#8E6356"
  on-brown: "#F3E2D4"
  on-brown-soft: "#ECD3C1"
  on-primary: "#FFFFFF"
  lilac-50: "#FBEEFB"
  lilac-100: "#F8ECF7"
  lilac-200: "#F3DFF4"
  lilac-300: "#E8C9EA"
  navy: "#1F2456"
  flavor-cookies: "#9FA8E0"
  flavor-strawberry: "#F3AABB"
  on-flavor-strawberry: "#4A1F2B"
  flavor-matcha: "#5E7845"
  flavor-pistachio: "#E6D9A6"
  on-flavor-pistachio: "#3B3218"
  shop-shopee: "#D23C1E"
  shop-lazada: "#0F146D"
  shop-tiktok: "#111111"

typography:
  display-xl:
    fontFamily: Bagel Fat One
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.05
  display-lg:
    fontFamily: Bagel Fat One
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.12
  stat:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.03em
    fontFeature: "'tnum' 1"
  title-lg:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.35
  title-md:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.35
  body-lg:
    fontFamily: Montserrat
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.8
  body-md:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.75
  ui:
    fontFamily: Montserrat
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.22em
  button-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
  button-md:
    fontFamily: Montserrat
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.3
  button-lg:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3

rounded:
  sm: 10px
  md: 16px
  lg: 24px
  full: 999px

spacing:
  grid-phone: 12px
  grid: 20px
  section-head: 48px
  section-min: 72px
  section-max: 120px
  content-max: 1240px

components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  section-white:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
  section-story:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.neutral}"
  story-text:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.on-brown}"
    typography: "{typography.body-md}"
  story-intro:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.on-brown-soft}"
    typography: "{typography.body-lg}"
  section-stats:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
  stat-number:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.stat}"
  section-order:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section-max}"
  store-page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.lilac-200}"
  footer-tag:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.lilac-300}"
  footer-link:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.lilac-50}"
  concept-note:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
  section-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface-soft}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
  card-meta:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface-faint}"
    typography: "{typography.label}"
  about-card:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
  menu-option-hover:
    backgroundColor: "{colors.lilac-100}"
    textColor: "{colors.on-surface}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
  button-primary:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 30px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 30px
  button-accent:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 30px
  button-accent-hover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
  button-small:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.flavor-cookies}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
  button-large:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
  button-shop-shopee:
    backgroundColor: "{colors.shop-shopee}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
  button-shop-lazada:
    backgroundColor: "{colors.shop-lazada}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
  button-shop-tiktok:
    backgroundColor: "{colors.shop-tiktok}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
  flavor-card-cookies:
    backgroundColor: "{colors.flavor-cookies}"
    textColor: "{colors.navy}"
    rounded: "{rounded.lg}"
  flavor-card-strawberry:
    backgroundColor: "{colors.flavor-strawberry}"
    textColor: "{colors.on-flavor-strawberry}"
    rounded: "{rounded.lg}"
  flavor-card-matcha:
    backgroundColor: "{colors.flavor-matcha}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  flavor-card-choco:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  flavor-card-pistachio:
    backgroundColor: "{colors.flavor-pistachio}"
    textColor: "{colors.on-flavor-pistachio}"
    rounded: "{rounded.lg}"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
  toast:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
---

# Mini Krunch concept

## Overview

**Direction: Flavor Flood.** The first screen gives one flavor the entire window, then changes everything when you change the cup. The packaging supplies the personality, so the interface stays simple around it. The trade-off is subtlety: this system chooses loud, saturated color blocks over quiet editorial restraint.

This file records the site as built. Tokens in the YAML are the rules. `assets/site.css` exposes them as CSS custom properties, which are named values reused across the code (a **design token** in code form).

Five ideas guide decisions:

1. **The product leads.** A cup or jar is the largest thing in a product section.
2. **One flavor, one color.** The hero reads `--bg`, `--ink` and `--muted` from the current flavor, so anything inside it recolors together.
3. **Konu's colors everywhere else.** Purple, yellow and brown carry the page after the hero.
4. **Playful does not excuse hard reading.** Text keeps a 4.5:1 **contrast ratio**, the measured difference between text and background.
5. **Two languages are normal.** English and Korean must both fit, so layouts cannot depend on exact text length.

### Voice and honesty

This is an unofficial concept. The site talks *about* Konu, never *as* Konu.

- Use "Konu" or "Mini Krunch", not "we", "our" or "us".
- Attribute claims: "Konu says", "These figures come from Konu".
- Call every price a sample. Never imply checkout, ordering or customer support here.
- Send real questions to Konu's official pages. Do not publish its email, phone or address as a contact route.
- Write short, casual sentence case with US spelling. Keep "krunch" wordplay for headings; buttons say exactly what happens.

## Colors

Purple `primary`, yellow `secondary` and brown `on-surface` are the Konu brand colors. Flavor colors sit beside them because they belong to the cups, not to the page chrome.

| YAML token | CSS variable | Job |
|---|---|---|
| `primary` | `--konu-purple` | Marquee, order band, footer, badges, section labels |
| `primary-soft` | `--konu-purple-soft` | Choco Crunch and the stats hill |
| `secondary` | `--konu-yellow` | Stats section and the accent button on dark color |
| `on-surface` | `--konu-brown` | Main text, Our Story, primary buttons |
| `surface` | `--cream` | Default section background |
| `surface-raised` | `--white` | Cards and the best seller section |
| `neutral` | `--cream-warm` | Store page, text on brown, quiet hover tint |
| `on-surface-soft` | `--text-soft` | Secondary paragraphs |
| `on-surface-faint` | `--text-faint` | Small meta text on light backgrounds |
| `on-brown`, `on-brown-soft` | same names | Text on Our Story |
| `lilac-50` to `lilac-300` | same names | Footer text and menu hover |
| `navy` | `--navy` | Disclaimer bar and Cookies & Cream text |

Use `rgba(var(--brown-rgb), .1)` for see-through borders and shadows. The matching channel tokens are `--yellow-rgb`, `--white-rgb` and `--shadow-rgb`.

### Flavor themes

| Flavor | Background | Text | Contrast |
|---|---|---|---|
| Cookies & Cream | `flavor-cookies` | `navy` | 6.3:1 |
| Strawberry Krunch | `flavor-strawberry` | `on-flavor-strawberry` | 7.4:1 |
| Matcha Crunch | `flavor-matcha` | `on-primary` | 4.9:1 |
| Choco Crunch | `primary-soft` | `on-primary` | 5.8:1 |
| Pistachio Knafeh | `flavor-pistachio` | `on-flavor-pistachio` | 9.0:1 |

Flavor values live in the `flavors` list in `index.html`. New flavors must pass 4.5:1 for both their title color and softer description color.

Store-chain dots and stat dots use flavor-family accents stored with their data. They are decorative and must never be the only way to understand something.

## Typography

**Bagel Fat One** does the talking: logo, hero title, section headings and timeline tags. It has one weight, so never fake bold. **Montserrat** handles reading and controls. **Noto Sans KR** follows both in every font stack so Korean text has a matching fallback.

The CSS scale is `--fs-label` 12px, `--fs-sm` 13px, `--fs-body` 15px, `--fs-lg` 17px, `--fs-xl` 22px, `--fs-2xl` 22 to 28px, `--fs-display` 32 to 56px and `--fs-hero` 40 to 72px. The YAML lists each fluid size at its largest value. A **type scale** is a short set of agreed sizes, which is why similar content looks related.

Paragraphs stay near 520px wide or less. Uppercase labels use 0.22em tracking in English and 0.04em in Korean.

## Layout

Content sits in a centered 1240px `.wrap`, with 6% side gutters. Sections use `clamp(72px, 10vw, 120px)` top and bottom. Section headers stack label, heading and intro on the left, followed by 48px of space.

| Breakpoint | Rule | Main change |
|---|---|---|
| Phone | `max-width: 680px` | Hero stacks; flavors use two columns; other grids use one |
| Tablet | `max-width: 900px` | Header links hide; best seller, story and stats simplify |
| Laptop | `max-width: 1100px` | Flavors use three columns; about and store grids use two |

CSS media queries cannot read custom properties, so these numbers must be typed exactly.

## Elevation & Depth

Depth stays warm because shadows use brand brown rather than neutral black.

- `--shadow-sm`: sticky bars.
- `--shadow-md`: floating cart and toast.
- `--shadow-lg`: menus, cart drawer and hovered flavor cards.
- Product photos use `filter: drop-shadow()` so the shadow follows the cup outline.
- Timeline and stat rings are outlines, not elevation.

## Shapes

Use `rounded.lg` for cards, `rounded.md` for menus and image tiles, `rounded.sm` for small rows and icons, and `rounded.full` for pills and circles. The hero floor shadow and stats hill keep `border-radius: 50%` because they are ovals.

## Components

The site has one button system: `.btn` with `--primary`, `--secondary`, `--accent` or `--icon`, plus `--sm`, `--lg`, `--block` and `--loading`. Its full reference is [docs/components/button.md](docs/components/button.md).

- **Flavor card (`.fcard`)**: flavor background, tilted cup, name, sample price and add button.
- **Feature card (`.feature`)**: white card with a tinted icon tile.
- **About card (`.ccard.about`)**: brown credit card explaining who made the concept.
- **Konu links (`.konu-card`)**: official social links.
- **Chip (`.chip`)**: pill with a colored dot; selected store filters use `aria-pressed`.
- **Cart (`.cart`)**: keeps keyboard focus inside while open and closes with Escape, the close button or overlay. Its shop buttons say "Look on", because no order happens here.
- **Toast (`.toast`)**: confirms an added item and stays out of the tab order while hidden.

### Motion

`--ease` handles slides and color changes. `--ease-bounce` handles small pops. The flavor change is the signature motion; cart feedback answers a person's action. Every animation needs a `prefers-reduced-motion` fallback. Scroll reveals hide content only after the page script has added the `js` class.

### Imagery

Use transparent WebP product cutouts around 600px wide unless a larger crop is needed. Keep icons simple with round caps. The share image is `assets/og-image.jpg` at 1200 by 630 and must identify the site as an unofficial concept.

### Known gaps

- `.best p`, `.stats .section-head p` and the jar glow still use one-off colors.
- Product drop shadows are not tokenized.
- Spacing tokens describe the page structure, but component padding is still local.
- The site repeats uppercase labels, reveal animations and card grids more than the direction needs. Reduce these in the redesign.
- "Over 400 stores", "12k locations" and the 258 listed stores have not been reconciled.

## Do's and Don'ts

- Do let one flavor color own the full hero. Don't add a competing background shape behind it.
- Do reuse a token before adding a value. If a new value is truly needed, update this file in the same change.
- Do use the accent button only on brown or purple. Don't use it as a general highlight on cream.
- Do keep one primary or accent action per section.
- Do show prices as samples. Don't write "buy", "checkout" or "order here".
- Do write about Konu in the third person. Don't use "our story" or "contact us".
- Do link to Konu's official pages. Don't add Konu's email, phone or address as support details.
- Do test contrast on hover too. Don't rely on a brand color passing automatically.
- Do check English and Korean at 375px. Don't fit a layout to one language.

Lint after every edit:

```bash
npx -y @google/design.md@0.4.0 lint --format json DESIGN.md
```
