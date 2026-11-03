# Component: Button

## Description

The one button style for the whole site. Use it for every clickable action that looks like a button, whether the element is a `<button>` (does something on this page, like adding to cart) or an `<a>` (goes somewhere, like the store finder).

Code lives in the `button component` block at the end of [`assets/site.css`](../../assets/site.css). It uses the site's design tokens for color, type size and corner radius.

Don't use it for text links inside paragraphs, the header icons (sound, cart, language), the small `+` add buttons on flavor cards, or the store-chain chips. Those are separate controls.

## Variants

| Variant | Class | Looks like | Use when | Example on the site |
|---|---|---|---|---|
| Primary | `btn btn--primary` | Filled brown, cream text. Turns purple on hover. | The main action in a section. One per section. | Best seller "Add to cart", cart "Browse flavors" |
| Secondary | `btn btn--secondary` | Brown outline, transparent. Fills brown on hover. | A second action next to a primary or accent one. | Hero "All flavors", "Show more stores" |
| Accent | `btn btn--accent` | Filled Konu yellow, brown text. Turns white on hover. | The main action on a dark background (brown or purple). | "Shop Konu" in Our Story, "Shop flavors" in the purple band |
| Icon | `btn btn--icon` | Round, outline, icon only. Fills on hover. | A familiar action that an icon shows clearly. Always add an `aria-label`. | Slider arrows, close cart |

### Sizes

| Class | Size | Use for |
|---|---|---|
| `btn--sm` | 12px text, about 42px tall (40px on phones). Icon: 36px circle. | The hero, where buttons sit beside the big product photo |
| *(none)* | 13px text, about 47px tall. Icon: 40px circle. | Everywhere else |
| `btn--lg` | 15px bold text, about 53px tall | A single standout action, like the best seller |
| `btn--block` | Full width of its container | Stacked choices in narrow spaces, like the shop buttons in the cart |

## Properties

The button is plain HTML and CSS, so its "props" are classes, attributes and CSS variables.

| Property | Type | Default | Description |
|---|---|---|---|
| `btn--primary` / `--secondary` / `--accent` / `--icon` | class | none (bare outline) | Picks the variant. Always use exactly one. |
| `btn--sm` / `btn--lg` | class | medium | Picks the size. |
| `btn--block` | class | off | Stretches to full width. |
| `disabled` | attribute on `<button>` | off | Fades the button to 45% and blocks clicks. |
| `aria-disabled="true"` | attribute on `<a>` | off | Same look as `disabled`, for links. See the note under Accessibility. |
| `aria-label` | attribute | none | Required on `btn--icon`, since it has no visible text. |
| `--btn-main` | CSS variable (color) | `var(--konu-brown)` | Fill color (primary, icon hover) or outline and text color (secondary). |
| `--btn-on-main` | CSS variable (color) | `var(--cream)` | Text color on a filled button. |
| `--btn-main-hover` | CSS variable (color) | `var(--konu-purple)` | Primary's fill on hover. |
| `--btn-border` | CSS variable (color) | same as `--btn-main` | Override just the outline, e.g. a fainter ring on the cart's close button. |

### Recoloring for a section

Don't write a new button style for a new background. Set the variables on the buttons in that section instead:

```css
/* hero: buttons follow the current flavor's colors */
.card .btn:not(.btn--accent) { --btn-main: var(--ink); --btn-on-main: var(--bg); --btn-main-hover: var(--ink); }

/* purple band: white outline that fills white with purple text */
.order .btn--secondary { --btn-main: var(--white); --btn-on-main: var(--konu-purple); }
```

Set them on the `.btn` elements, not on the section itself, because `.btn` sets its own defaults.

## States

| State | Visual | Behavior |
|---|---|---|
| Default | As described per variant | — |
| Hover | Lifts 2px. Primary turns purple, secondary and icon fill in, accent turns white. Colors fade in over 0.3s. | Mouse only |
| Active (pressed) | Drops back down and shrinks to 97% | While the mouse or finger is held down |
| Focus | 2px outline in the text color, 4px away from the button | Shown when reached by keyboard (`:focus-visible`), not on mouse click |
| Disabled | 45% opacity, no lift, "not allowed" cursor | Can't be clicked or tapped |
| Loading | Not supported yet | — |

## Accessibility

- **Role:** a `<button>` is announced as "button"; an `<a href>` as "link". Pick the element by what it does, not how it looks: actions on this page are `<button>`, going somewhere is `<a>`.
- **Keyboard:** Tab moves to the button and shows the focus outline. Enter activates both buttons and links. Space activates `<button>` only.
- **Screen reader:** reads the visible text, or the `aria-label` on icon buttons. In Korean, labels switch through `data-i18n` (text) and `data-i18n-aria` (icon labels).
- **Contrast:** every variant passes 4.5:1 on its own background: primary 13.1:1, primary hover 8.8:1, secondary on cream 13.1:1, accent 8.8:1, white outline on the purple band 9.4:1.
- **Tap size:** text buttons are 40px or taller; icon buttons 36–40px.

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| Use one primary (or accent on dark backgrounds) per section, plus secondaries | Put two filled buttons side by side, so neither stands out |
| Use accent on brown and purple backgrounds | Use primary (brown) on the brown Our Story section, where it disappears |
| Recolor a section's buttons with `--btn-main` and friends | Copy the button CSS into a new class like `.pill` or `.shop-btn` |
| Give every `btn--icon` an `aria-label`, plus `data-i18n-aria` for Korean | Ship an icon button with no label |
| Use `<button>` for actions and `<a href>` for navigation | Use `<a href="#">` with a click handler as a button |
| Use `disabled` on `<button>` | Fake a disabled look with opacity alone |
| Keep labels short and in sentence case: "Find a store" | Write "FIND A STORE" or "Click here" |

## Code examples

```html
<!-- main action + supporting action -->
<button class="btn btn--primary" id="bestAdd">Add to cart</button>
<a class="btn btn--secondary" href="stores.html">Find a store</a>

<!-- on a dark (brown or purple) background -->
<a class="btn btn--accent" href="#flavors">Shop flavors</a>

<!-- icon only: label is required -->
<button class="btn btn--icon btn--sm" id="next" aria-label="Next flavor" data-i18n-aria="aria.next">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 6 6 6-6 6"/></svg>
</button>

<!-- full width, custom brand color -->
<a class="btn btn--primary btn--block" href="https://shopee.ph/..." target="_blank" rel="noopener" style="--btn-main: #ee4d2d">Order on Shopee</a>

<!-- disabled -->
<button class="btn btn--primary" disabled>Sold out</button>
```

## Known gaps

| Gap | Impact | Suggested fix |
|---|---|---|
| The Shopee button (white on Shopee orange `#ee4d2d`) is 3.7:1 | Below the 4.5:1 minimum for 15px text | Use a darker orange like `#c73a1e`, or dark text on the orange |
| Hover lift and press shrink ignore "reduce motion" | Small movement for people who turned motion off | Add `.btn { transition: none; } .btn:hover, .btn:active { transform: none; }` inside the existing `prefers-reduced-motion` block |
| `aria-disabled="true"` on a link blocks mouse clicks but not the keyboard | Enter still follows the link | Also add `tabindex="-1"`, or remove the `href` while disabled |
| No loading state | Not needed today; would matter if an action ever waits on a server | Add `btn--loading` with a spinner and `aria-busy="true"` |
| Icon buttons in the hero are 36px | Below the 44px touch guideline (above the 24px minimum) | Use the default 40px icon size on phones |
