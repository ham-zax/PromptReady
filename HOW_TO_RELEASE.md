# How To Release PromptReady

This repo is the public website. The Chrome Web Store upload artifact is built from the extension repo, not this website repo.

## Release Contract

- Core offline capture and Markdown export are free.
- Offline capture and Markdown export run locally by default.
- Optional BYOK AI cleanup uses OpenRouter only.
- BYOK AI cleanup sends captured content and the user's OpenRouter API key directly to OpenRouter for that request.
- PromptReady does not proxy or store BYOK AI cleanup requests.
- BYOK AI cleanup is limited to 5 successful cleanups per local day.
- Failed OpenRouter calls do not count.
- Production must not expose checkout, unlock-code, trial-credit, or unlimited BYOK language.

## Extension Release

Run these from `/home/hamza/repo/promptready_extension`:

```bash
npm run compile
npm run build:prod
npm run zip
npm run test -- tests/entitlement-policy.test.ts tests/byok-client.fallback.test.ts tests/background.byok-usage-idempotency.test.ts tests/ProStatusSettings.test.tsx tests/no-legacy-copy.test.tsx tests/manifest-permissions.test.ts
git diff --check
```

Upload the production zip produced by `npm run zip` to the Chrome Web Store. Do not upload the website `dist/` folder, and do not use a development extension build as the store artifact.

## Website Release

Set the Chrome Store URL before publishing the website:

```bash
VITE_CHROME_STORE_URL=https://chromewebstore.google.com/detail/<extension-id>
```

Then run these from this repo:

```bash
npm run lint
npm run build
npm run format:check
```

Preview the production build before deploying:

```bash
npm run preview
```

## Copy Gates

Run these before release from this repo:

```bash
! rg -n "api/proxy|proxy.*OpenRouter|forwards to OpenRouter|server proxy" src docs readme.md index.html public functions
! rg -n "go to checkout|checkout page|billing checkout|unlock code|unlimited BYOK|waitlist|early access|150 free monthly credits|using our API key|No data sharing with third parties|encrypted API key|manual provider|Everything stays local" src docs readme.md index.html public functions
```

The broad words `checkout`, `unlock`, and `beta` can appear in historical or technical notes only if the release gate is narrowed enough to avoid false positives. Do not split legitimate technical strings just to pass a grep.
