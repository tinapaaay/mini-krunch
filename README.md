# Mini Krunch by Konu

A product website for Konu's Mini Krunch solo cups and cereal jar.

## Pages

- `index.html`: home page with the flavor slider, flavor cards, best seller, Our Story, stats, cart and contact.
- `stores.html`: store finder for the Philippines and Canada.
- `404.html`: friendly "page not found" page (GitHub Pages uses it automatically).

## Features

- Full-screen flavor slider (arrows, swipe or keyboard)
- Cart with quantities, saved in the browser, with "Order on Shopee / Lazada / TikTok" buttons
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
- Styles: `assets/site.css`

## Images

Product photos are WebP files in `assets/` (about 90% smaller than PNG). To add a new photo, export it as PNG, then convert it to WebP (for example at squoosh.app) and save it next to the others.

`assets/og-image.jpg` is the picture shown when the link is shared on Messenger, Facebook or iMessage. Once the site is live, change the `og:image` tags in `index.html` and `stores.html` to the full address (like `https://<your-site>/assets/og-image.jpg`), since some apps need that.

