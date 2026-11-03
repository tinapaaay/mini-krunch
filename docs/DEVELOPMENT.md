# Development and maintenance

## Run locally

From the repository root, run `python3 -m http.server 5500`, then open [localhost:5500](http://localhost:5500). Python 3 is only a development-server option; VS Code Live Server also works. Stop the server with Ctrl+C. No package installation or build is required to serve this checkout.

## Implementation and boundaries

Static product site with inline flavor/cart logic, shared language/currency helpers, and a separate store finder. Cart, sound, and language preferences use browser storage. Marketplace actions open external shop/search destinations; cart quantities are not submitted to an internal checkout. Currency conversion uses configured rates rather than a live exchange-rate API.

## Make changes

Edit `flavors`, `CEREAL_JAR`, and `SHOPS` in `index.html`, translations/rates in `assets/site.js`, store records in `assets/stores.js`, filtering in `assets/store-finder.js`, and styles in `assets/site.css`.

## Colors (design tokens)

All site colors are defined once, in the `design tokens` block at the top of `assets/site.css`. In rules, use `var(--name)` instead of typing a hex code:

| Group | Tokens |
|---|---|
| Konu brand | `--konu-purple`, `--konu-purple-soft`, `--konu-yellow`, `--konu-brown` |
| Surfaces | `--white`, `--cream` (section background), `--cream-warm`, `--navy` (concept note bar) |
| Lilac ramp (text and tints on purple) | `--lilac-50`, `--lilac-100`, `--lilac-200`, `--lilac-300`, `--lavender` |
| Text on light backgrounds | `--text-soft`, `--text-faint`, `--text-disabled` |
| Text on the brown Our Story section | `--on-brown`, `--on-brown-soft` |
| See-through shadows and borders | `rgba(var(--brown-rgb), .1)`; also `--yellow-rgb`, `--white-rgb`, `--shadow-rgb` |

The hero's `--bg`, `--ink` and `--muted` change per flavor; set them in the `flavors` list in `index.html`, not in CSS. Product data colors (flavor backgrounds, store chain chips, contact icon tiles) stay with their data. `404.html` has a small copy of the brand tokens because it does not load `site.css`.

## Sizes, corners, shadows, motion and breakpoints

These also live in the `design tokens` block at the top of `assets/site.css`. Pick the nearest step instead of typing a new value:

| Scale | Tokens |
|---|---|
| Font size (8) | `--fs-label` 12px · `--fs-sm` 13px · `--fs-body` 15px · `--fs-lg` 17px · `--fs-xl` 22px · `--fs-2xl` 22–28px · `--fs-display` 32–56px · `--fs-hero` 40–72px |
| Corner radius (4) | `--radius-sm` 10px · `--radius-md` 16px · `--radius-lg` 24px · `--radius-full` (pills and circles) |
| Shadow (3) | `--shadow-sm` sticky bars · `--shadow-md` floating buttons and toast · `--shadow-lg` hovered cards, menus, cart drawer |
| Easing (2) | `--ease` slides and color fades · `--ease-bounce` playful pops |
| Breakpoints (3) | phone `max-width: 680px` · tablet `max-width: 900px` · laptop `max-width: 1100px` (CSS can't use variables in `@media`, so use these exact numbers) |

Two shapes stay at `border-radius: 50%` on purpose because they are ovals, not rounded corners: the shadow under the hero cup and the hill in the stats section. The small rings around timeline and stat dots are outlines, not elevation, so they aren't on the shadow scale.

## Buttons

Every button and button-styled link uses one component, `.btn`, defined at the end of `assets/site.css`. Full documentation (variants, states, accessibility, do's and don'ts, known gaps): [components/button.md](components/button.md). Combine the base class with one variant and, optionally, a size:

| Class | Looks like | Used for |
|---|---|---|
| `btn btn--primary` | Filled brown, turns purple on hover | Main action in a section (Find a store, Browse flavors, best-seller Add to cart) |
| `btn btn--secondary` | Outline, fills on hover | Second action next to a primary (All flavors, Show more stores) |
| `btn btn--accent` | Yellow, turns white on hover | Actions on dark backgrounds (Shop Konu, Shop flavors) |
| `btn btn--icon` | Round, icon only; needs an `aria-label` | Slider arrows, close cart |
| `btn--sm` / `btn--lg` | Smaller (hero) / larger (best seller) | Size modifiers |
| `btn--block` | Full width | Shop buttons in the cart |

All buttons lift on hover, press down slightly when clicked, and fade out when `disabled` (or `aria-disabled="true"` on a link).

To recolor buttons in a section, set these variables on the buttons instead of writing new button styles: `--btn-main` (fill/outline color), `--btn-on-main` (text on a filled button) and `--btn-main-hover`. For example, the hero uses the current flavor's colors and the purple order band uses white outlines. The shop buttons set `--btn-main` to each shop's brand color.

## Source map

- [`404.html`](../404.html)
- [`favicon.ico`](../favicon.ico)
- [`index.html`](../index.html)
- [`stores.html`](../stores.html)

## Verification

No automated test command is provided by this repository. The following manual checks are a checklist, not a claim that browser QA has been completed.

1. Cycle the hero with arrows, keyboard, and swipe; add/remove items and change quantities, then refresh.
2. Switch English/Korean and PHP/CAD/KRW; check labels, prices, and narrow-screen layout.
3. Filter stores by available location controls, check empty results and map links, and inspect marketplace destinations.
4. Open `404.html` directly and check the home link; verify share-image URLs against the final host.
5. Inspect the browser console and Network panel for missing assets or script errors; check keyboard access, phone width, and 200% zoom.

## Deployment

Serve the tracked HTML, CSS, JavaScript, and required assets from a static host, preserving relative paths and filename case. There is no application server or environment-variable configuration in this checkout. Verify the actual deployment URL, external resources, and the checks below after publishing. A repository existing on GitHub does not by itself prove Pages is enabled.

## Keep documentation current

Update the README and this guide when entry points, dependencies, behavior, or deployment steps change. Record commands actually run and distinguish them from pending manual checks.
