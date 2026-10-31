# Mini Krunch by Konu

A product website for Konu's Mini Krunch solo cups and cereal jar.

## Pages

- `index.html`: home page with the flavor slider, flavor cards, best seller, Our Story, stats, cart and contact.
- `stores.html`: store finder for the Philippines and Canada.

## Features

- Full-screen flavor slider (arrows, swipe or keyboard)
- Cart with quantities, saved in the browser, and checkout by email
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
- Exchange rates and Korean translations: `assets/site.js`
- Store list: `assets/stores.js`
- Styles: `assets/site.css`
