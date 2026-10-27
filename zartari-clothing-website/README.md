# Zartari — Local VS Code Setup

This folder contains a **static HTTrack mirror** of the public-facing Zartari storefront. It is not the original Shopify source code, so there is no React/Vite build step and no Shopify backend running locally.

## Requirements

- macOS/Linux with Python 3 (`python3 --version`)
- VS Code

## Run locally

1. Open this `zartari-clothing-website` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Run:

   ```bash
   npm run dev
   ```

4. Open <http://127.0.0.1:8000> in your browser. The included HTTrack index redirects to `zartari.in/index.html`.
5. Stop the server with **Ctrl+C** in the terminal.

No `npm install` is needed because the preview server uses Python's built-in `http.server` and the npm script only launches it.

## Notes / known limitations

- The mirror download was interrupted and the HTTrack log records missing assets and some missing pages. A few images, fonts, or links may therefore be incomplete.
- Shopify-dependent features such as live inventory, cart persistence, customer accounts, wishlist integrations, payment/checkout, and admin operations cannot work as a real store without the original Shopify services/backend.
- This is a local preview server for development only, not a production server.
- Do not commit HTTrack cache files, cookies, or logs that may contain sensitive details.
