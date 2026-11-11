# Beewings Travel — Premium Website Demo

A five-page responsive static website concept for Beewings Travel.

## Pages
- `index.html` — Home
- `about.html` — About us
- `destinations.html` — Destinations
- `packages.html` — Packages with category filters
- `contact.html` — Contact form demo

## Run locally
Open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a new GitHub repository (for example `beewings-travel`).
2. Upload all files and folders in this project to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. GitHub Pages will provide a public demo URL.

## Before production launch
- Replace sample email, phone, WhatsApp number and office address.
- Replace illustrative packages, prices and company claims with verified details.
- Connect the enquiry form to a real email service or backend; it is currently a front-end demo only.
- Replace sample social links and add verified Google Maps location.
- Confirm image licensing/usage and consider moving images to the client's own media storage.
- Add privacy policy, terms, cookie notice (if applicable), SEO metadata and analytics as required.
- For client-editable packages/photos, connect a CMS or WordPress admin; GitHub Pages alone does not provide an admin panel or database.

Images are loaded from Unsplash URLs and Google Fonts from Google Fonts, so internet access is needed for those assets.
