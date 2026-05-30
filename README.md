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

These steps assume this is your first time using Vercel and that you want the simplest path: connect GitHub, import the site, and let Vercel publish it for you.

### Before You Start

You need:

- A GitHub account.
- A Vercel account. You can sign up at https://vercel.com with the same GitHub account.
- The finished version of this repository pushed to GitHub.
- Final links for any payment, social, email, or commission buttons you want visitors to use.

### First-Time Vercel Steps

1. Create or sign in to your Vercel account at https://vercel.com.
2. Choose **Add New...** and then **Project**.
3. Connect your GitHub account if Vercel asks for permission.
4. Select the GitHub repository for this website.
5. On the import screen, Vercel should detect this as a Vite project. Keep these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Leave environment variables blank unless a future feature specifically requires them.
7. Click **Deploy**.
8. Wait for Vercel to finish the build. If it succeeds, Vercel will show a live preview URL.
9. Open the preview URL and click through every page before sharing it publicly.

### After Deployment

- If the site looks right, use the Vercel dashboard to add a custom domain when ready.
- If Vercel reports a build error, read the first red error message in the deployment log and fix that issue before redeploying.
- Every time you push a new change to the GitHub repository, Vercel will automatically build and publish a fresh version.
- Keep `.vercel/`, local `.env` files, and provider secrets out of git.
- Replace pending payment/social placeholders before a production launch.
- Review `docs/hosting-note.md` before publishing any less-sanitized copy.

## Next Steps

For a non-technical owner, the safest workflow is to finish content first, then assets, then links, then launch checks.

1. Finalize the words on the site:
   - Read every page in the Vercel preview.
   - Note any wording that should change.
   - Ask a developer to update the matching text in `src/content.ts` or `src/App.tsx`.
2. Replace CSS-generated media with original production assets:
   - Logo and money-banner header art.
   - Starfield/ring background art.
   - Video stills or short preview clips for every card.
   - Ask a developer to place the files under `assets/` or `public/`, then connect them in the site.
3. Update `src/content.ts` with real external URLs:
   - Stripe payment links.
   - Cash App.
   - Throne.
   - Patreon.
   - Social/DM profiles.
   - Commission email or form destination.
4. Decide the final hosting platform:
   - Use Vercel only with sanitized public copy.
   - Choose a more adult-content-tolerant host if the final brand requires explicit copy that Vercel may reject.
5. Run a simple launch check in the Vercel preview:
   - Verify every route on desktop and mobile.
   - Confirm the 18+ gate persists as expected.
   - Confirm all external links open correctly.
   - Confirm preview media loads and is framed correctly.
6. Add stronger tests after URLs and assets are final:
   - Link integrity tests.
   - Accessibility checks.
   - Visual regression snapshots for the PDF-inspired layout.
7. Prepare launch metadata:
   - Final page titles and descriptions.
   - Social preview image.
   - Favicon and app icons.
   - Privacy/contact details with real business contact information.
8. After the preview is approved, share the Vercel URL or connect a custom domain from the Vercel dashboard.
