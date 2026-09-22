# JopChi marketing site

Static Astro site for JopChi, a cosmic dual-word puzzle game for iOS.

## Schedule

JopChi runs **two games per day** in US Pacific time:

- **Morning Game 1:** 12:00 AM – 11:59 AM PT
- **Evening Game 2:** 12:00 PM – 11:59 PM PT

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
   - `jopchi.com`
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
5. Wait for GitHub Pages to verify the custom domain, then the site will serve at `https://jopchi.com`.

Notes:

- The `public/CNAME` file is already set to `jopchi.com`.
- The GitHub Actions workflow in `.github/workflows/deploy.yml` builds on push to `main` and deploys the `dist/` artifact.
- If you also want `www.jopchi.com`, add a `CNAME` record for `www` pointing to the GitHub Pages host you choose and redirect it to the apex domain.

## Universal links (apple-app-site-association)

`public/.well-known/apple-app-site-association` declares which app may open
`jopchi.com` links. Its `appIDs` entry is `<TeamID>.<BundleID>` and must match
the app exactly — currently `37E9ED67YU.online.playjapchi.japchi`, taken from
`DEVELOPMENT_TEAM` and `PRODUCT_BUNDLE_IDENTIFIER` in the iOS project.

The bundle id keeps the old `japchi` spelling on purpose. It is an immutable
store key: renaming it would create a new app in App Store Connect and orphan
the existing TestFlight build and the `japchi_remove_ads` purchase. Match it,
do not correct it.

Two things this file cannot fix on its own:

1. **The app needs the Associated Domains entitlement.** Until
   `ios/japchi/japchi.entitlements` declares
   `com.apple.developer.associated-domains` with `applinks:jopchi.com`, iOS
   never fetches this file, so universal links do not work no matter how
   correct it is. Today that file only declares Sign in with Apple.

2. **GitHub Pages serves it as `application/octet-stream`.** Apple documents
   `application/json`, and Pages offers no way to set a per-file content type
   (it has no equivalent of a `_headers` file). Fixing it means fronting the
   site with something that can set headers, or hosting on a platform that
   can. Verify with:

   ```sh
   curl -sI https://jopchi.com/.well-known/apple-app-site-association | grep -i content-type
   ```

