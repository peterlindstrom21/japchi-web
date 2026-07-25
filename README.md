# JapChi marketing site

Static Astro site for JapChi, a cosmic dual-word puzzle game for iOS.

## Schedule

JapChi runs **two games per day** in US Eastern time:

- **Morning Game 1:** 12:00 AM – 11:59 AM ET
- **Evening Game 2:** 12:00 PM – 11:59 PM ET

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Project structure

- `src/pages/` — site pages
- `src/layouts/` — shared layout and design system
- `public/` — static assets, GitHub Pages files, and AASA

## Deploying to GitHub Pages

1. Push the repository to GitHub and enable **Pages** for the repo.
2. Set the Pages source to **GitHub Actions**.
3. In the repo settings, add the custom domain:
   - `playjapchi.online`
4. In Spaceship DNS, point the apex domain to GitHub Pages:
   - `A` records for `@`:
	 - `185.199.108.153`
	 - `185.199.109.153`
	 - `185.199.110.153`
	 - `185.199.111.153`
   - `AAAA` records for `@`:
	 - `2606:50c0:8000::153`
	 - `2606:50c0:8001::153`
	 - `2606:50c0:8002::153`
	 - `2606:50c0:8003::153`
5. Wait for GitHub Pages to verify the custom domain, then the site will serve at `https://playjapchi.online`.

Notes:

- The `public/CNAME` file is already set to `playjapchi.online`.
- The GitHub Actions workflow in `.github/workflows/deploy.yml` builds on push to `main` and deploys the `dist/` artifact.
- If you also want `www.playjapchi.online`, add a `CNAME` record for `www` pointing to the GitHub Pages host you choose and redirect it to the apex domain.

