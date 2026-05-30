# HH88TRANCE

Vercel-ready static React site for the HH88TRANCE adult audio/video brand.

The first implementation follows the provided PDF references from `/Users/colinvargas/Downloads/HH88Trance-Web` for page structure, dark starfield styling, neon navigation, card density, and adult-brand tone. Public copy is intentionally sanitized for Vercel hosting risk.

## Tech Stack

- Vite
- React
- TypeScript
- Vitest and Testing Library
- ESLint
- Vercel static hosting with SPA rewrites

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Vite server.
- `npm test` runs the focused unit and interaction tests.
- `npm run lint` runs ESLint.
- `npm run build` type-checks and builds the production bundle.
- `npm run preview` serves the production build locally.

## Project Structure

- `src/App.tsx` contains the route shell, shared components, and page views.
- `src/content.ts` contains navigation, video cards, findom plans, contact links, and accordion copy.
- `src/styles.css` contains the full visual system and responsive layout.
- `tests/` contains route/content model tests and key interaction coverage.
- `assets/README.md` documents where production logo, banner, background, and thumbnail assets should be placed when available.
- `docs/hosting-note.md` documents Vercel policy considerations and intentional deviations from the PDF references.

## Routes

- `/`
- `/videos`
- `/videos/customs`
- `/videos/main`
- `/findom`
- `/findom/auto-drains`
- `/findom/contracts`
- `/about`
- `/contact`
- `/privacy`

The site uses client-side routing with `vercel.json` rewrites so deep links load through `index.html`.

## Content And Hosting Notes

The source PDFs include explicit and protected-class hate references. The public site copy has been neutralized so it is more suitable for Vercel review and public hosting. Do not reintroduce protected-class slurs, extremist praise, or demeaning protected-class content into a Vercel production deployment.

All payment and commission actions are external links or pending placeholders. Version 1 does not process payments, collect card data, store files, or manage user accounts.

## Deployment

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Use the default Vite build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Keep `.vercel/`, local `.env` files, and provider secrets out of git.
5. Replace pending payment/social placeholders before a production launch.
6. Review `docs/hosting-note.md` before publishing any less-sanitized copy.

## Next Steps

1. Replace CSS-generated media with original production assets:
   - Logo and money-banner header art.
   - Starfield/ring background art.
   - Video stills or short preview clips for every card.
2. Update `src/content.ts` with real external URLs:
   - Stripe payment links.
   - Cash App.
   - Throne.
   - Patreon.
   - Social/DM profiles.
   - Commission email or form destination.
3. Decide the final hosting platform:
   - Use Vercel only with sanitized public copy.
   - Choose a more adult-content-tolerant host if the final brand requires explicit copy that Vercel may reject.
4. Add production QA:
   - Verify every route on desktop and mobile.
   - Confirm the 18+ gate persists as expected.
   - Confirm all external links open correctly.
   - Confirm preview media loads and is framed correctly.
5. Add stronger tests after URLs and assets are final:
   - Link integrity tests.
   - Accessibility checks.
   - Visual regression snapshots for the PDF-inspired layout.
6. Prepare launch metadata:
   - Final page titles and descriptions.
   - Social preview image.
   - Favicon and app icons.
   - Privacy/contact details with real business contact information.
