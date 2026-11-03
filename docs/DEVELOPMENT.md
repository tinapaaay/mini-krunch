# Development and maintenance

## Run locally

From the repository root, run `python3 -m http.server 5500`, then open [localhost:5500](http://localhost:5500). Python 3 is only a development-server option; VS Code Live Server also works. Stop the server with Ctrl+C. No package installation or build is required to serve this checkout.

## Implementation and boundaries

Static product site with inline flavor/cart logic, shared language/currency helpers, and a separate store finder. Cart, sound, and language preferences use browser storage. Marketplace actions open external shop/search destinations; cart quantities are not submitted to an internal checkout. Currency conversion uses configured rates rather than a live exchange-rate API.

## Make changes

Edit `flavors`, `CEREAL_JAR`, and `SHOPS` in `index.html`, translations/rates in `assets/site.js`, store records in `assets/stores.js`, filtering in `assets/store-finder.js`, and styles in `assets/site.css`.

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
