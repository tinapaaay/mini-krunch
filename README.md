# Mini Krunch website concept

An unofficial portfolio concept by Tinapay for Konu's Mini Krunch solo cups and cereal jar. It is not affiliated with Konu, does not sell anything, and its prices are samples.

## Pages

- `index.html`: home page with the flavor slider, flavor cards, best seller, Our Story, stats, cart and contact.
- `stores.html`: store finder for the Philippines and Canada.
- `404.html`: friendly "page not found" page (GitHub Pages uses it automatically).

## Features

- Full-screen flavor slider (arrows, swipe or keyboard)
- Cart with quantities, saved in the browser, with "Look on Shopee / Lazada / TikTok" buttons
- Add-to-cart animation and sounds (with a mute button)
- English and Korean
- Prices in Philippine peso, Canadian dollar or South Korean won

## Run it locally

From this folder:

```bash
python3 -m http.server 5174
```

Then open http://localhost:5174.

## Where to edit things

- Flavors, prices (in pesos) and hero text: the `flavors` list in `index.html`
- Cereal Jar price: `CEREAL_JAR` in `index.html`
- Shop links for checkout: `SHOPS` in `index.html`
- Exchange rates and Korean translations: `assets/site.js`
- Store list: `assets/stores.js`
- Styles: `assets/site.css` (all colors, sizes and shadows are tokens at the top; see `DESIGN.md`)

## Images

Product photos are WebP files in `assets/` (about 90% smaller than PNG). To add a new photo, export it as PNG, then convert it to WebP (for example at squoosh.app) and save it next to the others.

`assets/og-image.jpg` is the picture shown when the link is shared on Messenger, Facebook or iMessage. The `og:image` tags use its full live address, since some apps require that.


## Design system

See [DESIGN.md](DESIGN.md) for colors, type, components and the rules for keeping the look consistent. After editing it, run:

```bash
npx -y @google/design.md@0.4.0 lint --format json DESIGN.md
```

## Development guide

See [Development and maintenance](docs/DEVELOPMENT.md) for setup, source files, implementation limits, editing instructions, verification, and deployment.
