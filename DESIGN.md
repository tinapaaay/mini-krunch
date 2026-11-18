---
version: alpha
name: Mini Krunch concept
description: An unofficial portfolio website concept for Konu's Mini Krunch cereal cups, built like a snack aisle of full-height flavor shelves.

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
  poster:
    fontFamily: Bagel Fat One
    fontSize: 124px
    fontWeight: 400
    lineHeight: 0.94
  display-xl:
    fontFamily: Bagel Fat One
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1
  display-lg:
    fontFamily: Bagel Fat One
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.12
  display-sm:
    fontFamily: Bagel Fat One
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
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
  section-crunch:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.poster}"
  story-close:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.poster}"
  solo-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-sm}"
  section-reach:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.section-max}"
  stat-number:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.display-xl}"
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
  shelf-cookies:
    backgroundColor: "{colors.flavor-cookies}"
    textColor: "{colors.navy}"
    rounded: "{rounded.lg}"
  shelf-strawberry:
    backgroundColor: "{colors.flavor-strawberry}"
    textColor: "{colors.on-flavor-strawberry}"
    rounded: "{rounded.lg}"
  shelf-matcha:
    backgroundColor: "{colors.flavor-matcha}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  shelf-choco:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  shelf-pistachio:
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

**Direction: Flavor Aisle.** The home page opens like a snack aisle: five full-height color shelves, with one flavor pulled forward. The packaging supplies the personality, while the page uses large color fields and oversized Bagel Fat One type instead of repeating cards. The trade-off is quiet symmetry. This system accepts bold, uneven compositions so it feels specific to a snack brand.

Tokens in the YAML are the rules. `assets/site.css` exposes them as CSS custom properties, which are reusable named values in the code.

Five ideas guide decisions:

1. **The shelf is the signature.** Choosing a flavor is the main interaction, so it gets the strongest motion and most screen space.
2. **The product leads.** A cup or jar is the largest image in a product section.
3. **Each section gets one idea.** Use one strong composition instead of a label, heading, paragraph and card grid every time.
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
| `primary` | `--konu-purple` | Header, reach section, footer, badges |
| `primary-soft` | `--konu-purple-soft` | Choco Crunch shelf |
| `secondary` | `--konu-yellow` | Crunch section, big numbers and accents on dark color |
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

Store-chain dots on the store page use accents stored with their data. They are decorative and must never be the only way to understand something.

## Typography

**Bagel Fat One** does the talking: logo, shelf names, shelf titles, section headings, big numbers and the poster-size moments. It has one weight, so never fake bold. **Montserrat** handles reading and controls. **Noto Sans KR** follows both in every font stack so Korean text has a matching fallback.

The CSS scale is `--fs-label` 12px, `--fs-sm` 13px, `--fs-body` 15px, `--fs-lg` 17px, `--fs-xl` 22px, `--fs-2xl` 22 to 28px, `--fs-display` 32 to 56px, `--fs-hero` 40 to 72px and `--fs-poster` 56 to 124px. The YAML lists each fluid size at its largest value. A **type scale** is a short set of agreed sizes, which makes related content look related.

Use poster type once per section at most. Paragraphs stay near 520px wide or less. Use sentence case for labels; the logo is the only uppercase brand text.

## Layout

Content sits in a centered 1240px `.wrap`, with 6% side gutters. Sections use `clamp(72px, 10vw, 120px)` top and bottom. The aisle fills the first screen on desktop. Other sections choose a composition that suits their content.

| Breakpoint | Rule | Main change |
|---|---|---|
| Phone | `max-width: 680px` | Header tightens and other grids use one column |
| Tablet | `max-width: 900px` | Shelves stack as an accordion; crunch, solo cup, story and reach simplify |
| Laptop | `max-width: 1100px` | About and store grids use two columns |

CSS media queries cannot read custom properties, so these numbers must be typed exactly.

## Elevation & Depth

Depth stays warm because shadows use brand brown rather than neutral black.

- `--shadow-sm`: sticky bars.
- `--shadow-md`: floating cart and toast.
- `--shadow-lg`: menus and cart drawer.
- Product photos use `filter: drop-shadow()` so the shadow follows the cup outline.

## Shapes

Use `rounded.lg` for cards, `rounded.md` for menus and image tiles, `rounded.sm` for small rows and icons, and `rounded.full` for pills and circles. Shelves and major section bands stay square so their colors meet edge to edge.

## Components

The site has one button system: `.btn` with `--primary`, `--secondary`, `--accent` or `--icon`, plus `--sm`, `--lg`, `--block` and `--loading`. Its full reference is [docs/components/button.md](docs/components/button.md).

- **Flavor shelf (`.shelf`)**: a button-controlled accordion. Closed shelves show a vertical name and small cup; the open shelf shows a large cup, title, sample price and Add to cart. On tablets and phones, shelves stack.
- **Crunch feature (`.crunch`)**: yellow section with poster type and a jar cropped by the section edge.
- **Solo map (`.solo-map`)**: one cup with three connected notes.
- **Reach (`.reach`)**: Bagel number row followed by store chains and one store action.
- **About card (`.ccard.about`)**: brown credit card explaining who made the concept.
- **Konu links (`.konu-card`)**: official social links.
- **Chip (`.chip`)**: pill with a colored dot; selected store filters use `aria-pressed`.
- **Cart (`.cart`)**: keeps keyboard focus inside while open and closes with Escape, the close button or overlay. Its shop buttons say "Look on", because no order happens here.
- **Toast (`.toast`)**: confirms an added item and stays out of the tab order while hidden.

### Motion

`--ease` handles shelf changes. `--ease-bounce` handles small pops. Cups rise once when the aisle loads, and opening a shelf is the signature motion. Cart feedback answers a person's action. Sections do not fade in on scroll, and there is no autoplaying marquee. Every animation needs a `prefers-reduced-motion` fallback.

### Imagery

Use transparent WebP product cutouts around 600px wide. The current jar source is 742px wide, so do not stretch it into a full-width texture. Keep icons simple with round caps. The share image is `assets/og-image.jpg` at 1200 by 630 and must identify the site as an unofficial concept.

### Known gaps

- Product drop shadows are not tokenized.
- Spacing tokens describe the page structure, but component padding is still local.
- A true full-bleed cereal texture needs a photo at least 1600px wide. A real spoon photo would strengthen the solo cup section.
- "Over 400 stores", "12k locations" and the 258 listed stores have not been reconciled.

## Do's and Don'ts

- Do keep exactly one shelf open. Don't add a second competing action inside the aisle.
- Do reuse a token before adding a value. If a new value is truly needed, update this file in the same change.
- Do use the accent button only on brown or purple. Don't use it as a general highlight on cream.
- Do spend poster type on one idea per section. Don't turn every heading into a poster.
- Don't bring back scroll fade-ins, marquees or repeated icon-card grids without a specific reason.
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
