# STELLA — MVP starter

A lightweight bilingual (Arabic/English) responsive front-end starter for Stella.

## Run locally
Open `index.html` in a modern browser. No build tools or dependencies are required.

## Deploy free with Cloudflare Pages
1. Create a GitHub account/repository and upload these files to the repository root.
2. In Cloudflare, open Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. For this static starter, leave the build command empty and set the output directory to `/` (or the repository root, depending on the dashboard UI).
5. Deploy. Your free `*.pages.dev` address is assigned by Cloudflare; choose an available project subdomain such as `stella`.

## Important implementation notes
- This is a front-end MVP, not the complete production platform.
- The newsletter form is a visual prototype and does not store email addresses.
- Content cards are sample placeholders. YouTube auto-sync requires the channel URL/ID and a backend/API integration.
- Accounts, course reviews, paid supporter membership, payment processing, admin dashboard, application uploads, notifications, legal consent storage, analytics and backup automation are not connected yet. They require backend services and careful provider/security configuration.
- Do not collect payment details directly in this static site. Use a reputable hosted payment provider if/when available in the user's country.
- Replace the Salam portrait placeholder and social links with approved assets and URLs.
- Update SEO descriptions, social metadata, privacy/legal pages and sitemap before public launch.
- Fonts are loaded from Google Fonts; self-host them if you need to avoid third-party font requests.
