# Mini Krunch design system

How the Mini Krunch site looks, sounds and behaves, and the rules for keeping it that way. Every value below lives in the `design tokens` block at the top of [`assets/site.css`](assets/site.css). When you add something new, reuse a token instead of typing a new value.

*Unofficial concept by Tinapay. Konu and Mini Krunch belong to their owners.*

---

## 1. Principles

1. **The product is the hero.** Cup and jar photos are the biggest, first thing on every screen. Layouts make room for them.
2. **One flavor, one color.** Each flavor has its own background and text color, and the hero recolors itself when you switch flavors.
3. **Playful, but readable.** Chunky headings and bouncy animations are fine; body text, contrast and tap sizes still meet accessibility minimums.
4. **Konu colors everywhere else.** Outside the hero, use only the brand purple, yellow and brown plus their tints.
5. **Built for two languages.** Every label works in English and Korean, so layouts can't depend on exact text length.

## 2. Voice

| Do | Don't |
|---|---|
| Short, casual, snack-talk: "Crunch for your cravings", "Let's talk krunch" | Corporate or formal wording |
| Sentence case for headings and buttons: "Find a store" | Title Case or ALL CAPS (uppercase is a style, applied with CSS only on small labels) |
| US spelling: "flavor", "favorite" | Mixing in "flavour", "favourite" |
| "krunch" wordplay in headings | Wordplay in buttons and error messages; keep those plain |
| Describe what happens: "Add to cart", "Show more stores" | "Click here", "Submit" |

---

## 3. Color

### Brand
| Token | Value | Use |
|---|---|---|
| `--konu-purple` | `#77197e` | Marquee, purple band, footer, badges, top bar on the stores page |
| `--konu-purple-soft` | `#904a95` | Choco Crunch flavor background |
| `--konu-yellow` | `#f6c55e` | Stats section, accent buttons, highlights on dark backgrounds |
| `--konu-brown` | `#531607` | Main text on light backgrounds, Our Story section, primary buttons |

### Surfaces
| Token | Value | Use |
|---|---|---|
| `--white` | `#fff` | Best seller section, cards on cream |
| `--cream` | `#fbf6ee` | Default section background |
| `--cream-warm` | `#fbf1df` | Store finder page, hover tints |
| `--navy` | `#1f2456` | Unofficial-concept bar |

### Lilac ramp (text and tints on purple)
`--lilac-50` `#fbeefb` · `--lilac-100` `#f8ecf7` · `--lilac-200` `#f3dff4` · `--lilac-300` `#e8c9ea` · `--lavender` `#b48cf1`

### Text
| Token | Value | Use | Contrast |
|---|---|---|---|
| `--konu-brown` | `#531607` | Headings and body on light backgrounds | 13.1:1 on cream |
| `--text-soft` | `#7a4b3f` | Secondary paragraphs | 7.2:1 on white, 6.7:1 on cream |
| `--text-faint` | `#8e6356` | Small labels and meta | 4.5:1 or more on every light background |
| `--text-disabled` | `#b3968d` | "No phone listed" and similar | Decorative only |
| `--on-brown`, `--on-brown-soft` | `#f3e2d4`, `#ecd3c1` | Text on the brown Our Story section | |

### See-through colors
For shadows, borders and overlays, use the RGB channel tokens with `rgba()`: `rgba(var(--brown-rgb), .1)`. Available: `--brown-rgb`, `--yellow-rgb`, `--white-rgb`, `--shadow-rgb` (the cool shadow under cups in the hero).

### Flavor themes
Set in the `flavors` list in `index.html`, not in CSS. The hero reads them into `--bg`, `--ink` and `--muted`.

| Flavor | Background | Text | Contrast |
|---|---|---|---|
| Cookies & Cream | `#9fa8e0` | `#1f2456` | 6.3:1 |
| Strawberry Krunch | `#f3aabb` | `#4a1f2b` | 7.4:1 |
| Matcha Crunch | `#5e7845` | `#ffffff` | 4.9:1 |
| Choco Crunch | `#904a95` | `#ffffff` | 5.8:1 |
| Pistachio Knafeh | `#e6d9a6` | `#3b3218` | 9.0:1 |

New flavor rule: light background → dark text, dark background → white text, and check that **both** the title color and the 80–90% "muted" color reach 4.5:1.

### Page rhythm
Sections alternate light and colored so the page never feels like one long block:

hero (flavor color) → flavors (cream) → marquee (purple) → best seller (white) → why (cream) → Our Story (brown) → stats (yellow) → order band (purple) → contact (cream) → footer (purple)

Avoid putting two colored sections next to each other unless one is the thin marquee.

---

## 4. Typography

### Fonts
| Font | Use |
|---|---|
| **Bagel Fat One** | Logo, hero title, section headings, timeline years. Always weight 400 (it's already heavy). |
| **Montserrat** | Everything else: body, buttons, labels, prices. Weights 400–700. |
| **Noto Sans KR** | Korean text. Listed second in every font stack so it takes over for Korean characters. |

### Scale (8 sizes)
| Token | Size | Use |
|---|---|---|
| `--fs-label` | 12px | Uppercase labels, meta lines, chips, small buttons |
| `--fs-sm` | 13px | Navigation, buttons, small UI text |
| `--fs-body` | 15px | Paragraphs |
| `--fs-lg` | 17px | Lead paragraphs, card titles, prices |
| `--fs-xl` | 22px | Small headings, big prices |
| `--fs-2xl` | 22–28px | Logos, marquee, the address in Contact |
| `--fs-display` | 32–56px | Section headings and the hero title |
| `--fs-hero` | 40–72px | Stat numbers, the "Grab a cup" title |

The three largest sizes grow with the screen width (`clamp()`), so they don't need phone overrides.

### Rules
- **Labels** (`.eyebrow`, `.kicker`): 12px, uppercase, weight 600, letter spacing 0.22em. In Korean the spacing drops to 0.04em, since Korean doesn't need tracking.
- **Paragraph line height:** 1.7–1.85. Headings: 1.05–1.12.
- Keep paragraphs under about 520px wide.

---

## 5. Layout and spacing

| Thing | Value |
|---|---|
| Content width | `.wrap`, max 1240px, centered |
| Side gutters | 6% of the screen |
| Section padding | `clamp(72px, 10vw, 120px)` top and bottom |
| Section header to content | 48px |
| Card grid gaps | 12–20px |

### Breakpoints (3)
| Name | Rule | What changes |
|---|---|---|
| Phone | `max-width: 680px` | Hero stacks, flavor grid 2 columns, one-column contact and stores, bigger tap areas |
| Tablet | `max-width: 900px` | Nav links hide, best seller and Our Story stack, stats 2 columns |
| Laptop | `max-width: 1100px` | Flavor grid 3 columns, contact and stores 2 columns |

CSS can't use variables inside `@media`, so type these exact numbers.

---

## 6. Shape, depth and motion

### Corner radius (4)
`--radius-sm` 10px (small tiles, menu rows) · `--radius-md` 16px (icon tiles, images, menus) · `--radius-lg` 24px (cards) · `--radius-full` (pills and circles)

Exception: two shapes keep `border-radius: 50%` because they're ovals, not rounded corners: the shadow under the hero cup and the stats hill.

### Elevation (3)
| Token | Use |
|---|---|
| `--shadow-sm` | Sticky bars |
| `--shadow-md` | Floating cart button, toast |
| `--shadow-lg` | Hovered cards, menus, cart drawer |

Product photos use `filter: drop-shadow()` instead, so the shadow follows the cup's shape.

### Motion
| Token / value | Use |
|---|---|
| `--ease` `cubic-bezier(.7, 0, .2, 1)` | Slides, color fades, the hero switching flavors |
| `--ease-bounce` `cubic-bezier(.3, 1.5, .5, 1)` | Playful pops: cart count, items landing in the cart, headings appearing word by word |
| `--speed` 900ms | Hero background color fade |
| 0.2–0.3s | Hovers |

With **reduce motion** turned on, there's no word animation, parallax, button lift or slide timing, and the cart animation is skipped. Every new animation needs a `prefers-reduced-motion` fallback.

---

## 7. Components

| Component | Class | Notes |
|---|---|---|
| **Button** | `.btn` + `--primary` / `--secondary` / `--accent` / `--icon` | Full spec: [docs/components/button.md](docs/components/button.md) |
| Flavor card | `.fcard` | Background is the flavor color, cup photo tilted −6°, straightens and lifts on hover. Add button (`.fadd`) bottom right. |
| Feature card | `.feature` | White card on cream, 58px tinted icon tile, title + one short paragraph |
| Contact card | `.ccard` | Same card shape as features; the address variant is brown with a map |
| Chip | `.chip` | Pill with a colored dot for store chains. `aria-pressed="true"` shows the selected state. |
| Section header | `.section-head` | Label (`.kicker`) → heading → optional intro paragraph, stacked and left-aligned |
| Cart drawer | `.cart` | Slides in from the right; keyboard focus stays inside while it's open; closes with Escape, the × button or the overlay |
| Toast | `.toast` | Brown pill at the bottom center after adding to cart; hidden and out of the tab order the rest of the time |
| Language and currency menu | `.prefs-menu` | Dropdown from the header; the selected options show a checkmark |
| Badge | `.badge` | Purple pill, uppercase label ("Best seller") |

---

## 8. Patterns

**Per-flavor theming.** The hero sets `--bg`, `--ink` and `--muted` from the current flavor. Anything inside the hero uses those variables, never fixed colors, so it recolors automatically.

**Add-to-cart feedback.** Three layers, every time:
1. The cup flies to the cart icon.
2. A soft pop and chime play; the sound can be muted from the header.
3. The cart count bounces and the toast appears.

**Scroll reveals.** Sections fade up once as they enter the screen; big headings appear word by word. Each section animates only the first time. A tiny script in each page's `<head>` adds a `js` class to `<html>`, and sections are only hidden while that class is there, so if scripts fail to load, everything is still visible.

**Two languages, three currencies.** English text lives in the HTML; Korean in `assets/site.js`. Mark translatable text with `data-i18n` (text), `data-i18n-html`, `data-i18n-aria` (labels), `data-i18n-ph` (placeholders) or `data-i18n-alt` (image descriptions). Prices are stored in pesos and converted on screen.

**Store finder.** Search, country tabs, chain chips and "Show more" (12 at a time). On the home page, store chains appear as chips inside the purple band.

---

## 9. Accessibility checklist

- Text contrast is at least **4.5:1** (3:1 for text 24px+). Check both the normal and hover colors.
- Every interactive element is reachable by keyboard and shows the 2px focus outline.
- Icon-only buttons have an `aria-label` (and `data-i18n-aria` for Korean).
- Tap areas are at least 40px on phones.
- Images have `alt` text; decorative ones use `alt=""` or `aria-hidden="true"`.
- Animations respect `prefers-reduced-motion`.
- Nothing scrolls sideways at 375px.

---

## 10. Imagery

- **Product photos:** clean cutouts on transparent backgrounds, WebP, about 600px wide, with a soft drop shadow. Cups lean a little (around −6°) at rest.
- **Group shots:** the five-cup row (purple band) and the three-cup trio (Our Story), slightly overlapping, with the middle cup in front.
- **Share image:** `assets/og-image.jpg`, 1200×630, purple with the five cups on a yellow hill.
- **Icons:** simple line icons with round caps, drawn in `currentColor` or brown: 1.7px stroke in icon tiles, 1.8px for the cart, 2–2.6px for small arrows and close icons.

---

## 11. Known inconsistencies

| Item | Note |
|---|---|
| Four one-off colors | Two brown text shades (best seller and stats intros), the map placeholder, and the glow behind the jar. Merging them into tokens would slightly change the look. |
| Image drop shadows | Several slightly different `drop-shadow()` values on product photos; not on the elevation scale yet. |
| Spacing | No spacing tokens yet; paddings and gaps are set per component. |
| Store numbers | Copy says "over 400 stores" and "12k locations"; the finder lists 258. Needs confirmed numbers. |
