# Vite to Next.js SSG Migration Plan

Below is a concise, end-to-end plan to migrate your Vite React app to Next.js using Static Site Generation only (no dynamic content). I’m aligning this with the “Vite → Next.js SSG (App Router, static export)” target and your current components in `src/components/Features.tsx`, `Hero.tsx`, and `Pricing.tsx`.

## 🎯 Recommendation

*   **Target:** Next.js 15.x (App Router).
*   **Strategy:** Use Next.js App Router with SSG + static export for a fully static site.
*   **Enforcement:** Enforce static rendering (no dynamic APIs, cookies, headers).
*   **Output:** A pure static bundle for any static hosting (Netlify, GitHub Pages, S3/CloudFront, etc).

## 🗺️ High-Level Steps

1.  **Audit current app:**
    *   Identify routes (if using `react-router-dom`, list each path).
    *   Inventory assets under `src/assets/` or `public/`.
    *   Note styling system (Tailwind/CSS Modules/Global CSS).
    *   Note env usage (`import.meta.env.VITE_*`), SVG usage (SVGR), and images.
2.  **Scaffold Next.js (App Router + TS):**
    *   **Command:** `npx create-next-app@latest` — with TypeScript & App Router. Include Tailwind if used now.
    *   **Best Practice:** Keep it in a new folder to migrate incrementally and compare parity.
3.  **Configure static export in `next.config.ts`:**
    *   `output: 'export'`
    *   `images: { unoptimized: true }` if you want to keep `next/image` with the export (or use `<img>`).
    *   **Optional:** `trailingSlash: true` for static hosts that prefer directory indexes.
    *   **Optional:** `basePath`/`assetPrefix` if deploying to a subpath (e.g., GitHub Pages).
    
    ```ts
    // next.config.ts
    import type { NextConfig } from 'next';
    
    const nextConfig: NextConfig = {
      output: 'export',
      images: { unoptimized: true },
      trailingSlash: true,
    };
    
    export default nextConfig;
    ```
    > **Note:** As of Next.js 14+, the `next export` command was removed. With `output: 'export'`, run `next build` to emit a static site in the `out/` directory.

4.  **Structure and routing (App Router):**
    *   `app/layout.tsx`: Root `<html>`/`<body>`, global CSS import, fonts, metadata.
    *   `app/page.tsx`: Your home page; compose `Hero`, `Features`, `Pricing`.
    *   For more pages, create `app/<route>/page.tsx`. For dynamic routes, add `generateStaticParams()` to pre-render all segments at build time.
    *   **Enforce static:** In each page where you want hard static, `export const dynamic = 'error'`.
    *   Avoid `cookies()`, `headers()`, or dynamic fetch patterns.

5.  **Move components:**
    *   Copy `src/components/Features.tsx`, `Hero.tsx`, `Pricing.tsx` to `components/` (or `app/_components/`) and update imports.
    *   If any component uses browser-only APIs at the module scope, gate it with `'use client'` at the top or move the logic into effects.

6.  **Assets and images:**
    *   Move static files (images, fonts, icons) to the `public/` directory.
    *   Replace asset imports with absolute paths from the root (e.g., `/my-image.png`).
    *   For images, either use a standard `<img>` tag or `next/image` with the `images.unoptimized: true` setting for static exports.

7.  **Styling and fonts:**
    *   **Global CSS:** `app/globals.css`, imported in `app/layout.tsx`.
    *   **CSS Modules:** Work unchanged (`*.module.css`).
    *   **Tailwind:**
        *   Ensure `tailwind.config.ts` and `postcss.config.js` were created by the scaffold.
        *   Update `content` globs to include `./app/**/*.{ts,tsx}` and `./components/**/*.{ts,tsx}`.
    *   **Fonts:** Use `next/font` (for Google or local fonts) in `app/layout.tsx`.

8.  **Links and navigation:**
    *   Replace `react-router-dom`: File-based routing handles pages automatically.
    *   Use `<Link>` from `next/link` for all internal navigation.

9.  **Environment Variables:**
    *   Replace `import.meta.env.VITE_FOO` with `process.env.NEXT_PUBLIC_FOO` for client-side variables.
    *   Ensure values are present at build time; static export will inline them.

10. **TypeScript and paths:**
    *   Port `tsconfig.json` path aliases (`@/*`) if used:
        ```json
        {
          "compilerOptions": {
            "baseUrl": ".",
            "paths": { "@/*": ["./*"] }
          }
        }
        ```
    *   Update imports accordingly.

11. **SVGs and other bundler-specifics:**
    *   If you used `vite-plugin-svgr` (importing SVGs as React components), either:
        *   Use inline `<svg>` or plain file refs.
        *   Add SVGR via Next.js webpack config if truly needed.
    *   Remove any Vite-specific code (`import.meta`, vite-specific plugins, `vite.config.ts`).

12. **Metadata, favicon, and 404:**
    *   Use `export const metadata = { ... }` in `app/layout.tsx` (and per-page overrides if needed).
    *   Place `favicon.ico`, `site.webmanifest` etc. in the `public/` directory.
    *   Create `app/not-found.tsx` for your 404 page.

13. **Build, verify, and deploy:**
    *   **Dev:** `npm run dev`.
    *   **Build:** `npm run build`. With `output: 'export'`, Next.js writes the static site to the `out/` directory.
    *   **Verify Locally:** Use a simple static server against the `out/` directory to verify the build.
    *   **Deploy:** Upload the contents of the `out/` directory to any static host.
    > If on Vercel, you don’t need `output: 'export'`; a pure SSG `next build` is fine, as Vercel serves it as static automatically.

---

## 🔁 Directory Mapping

*   `src/main.tsx` (Vite entry) → Handled by Next.js automatically.
*   `index.html` → Removed; use `app/layout.tsx` + `app/page.tsx`.
*   `src/components/*` → `components/*` (or `app/_components/*`), imported by `app/page.tsx`.
*   `src/assets/*` → `public/*`.
*   Global styles → `app/globals.css`.
*   Pages/routes (if any in Vite) → Folders under `app/` with a `page.tsx`.

## ✅ Parity Checklist

- [ ] **Components render:** Hero, Features, Pricing on `app/page.tsx`.
- [ ] **Assets:** All images, SVGs, and fonts render correctly.
- [ ] **Links:** All internal links work with `next/link`.
- [ ] **Errors:** No runtime errors in dev console or after export.
- [ ] **Performance:** Lighthouse metrics are comparable or better.
- [ ] **Static:** No dynamic APIs, `cookies()`, or `headers()` used.

## ⚠️ Gotchas to Avoid

*   `next/image` with `output: 'export'` requires `images.unoptimized: true` or a switch to `<img>`.
*   Do not use `cookies()`, `headers()`, or server-only APIs—this will break the static export.
*   Rewrites, redirects, and custom headers are not supported with `output: 'export'`.
*   Ensure environment variables are prefixed with `NEXT_PUBLIC_` for client-side usage and are present at build time.
*   Beware of using `window` at the module scope; use `'use client'` and effects for browser-only code.

---

### What I need from you to proceed:

1.  Confirm **App Router + static export** is acceptable.
2.  Confirm styling stack (Tailwind/CSS Modules/other).
3.  Hosting target (Vercel vs static host), and whether you need `basePath`/`assetPrefix`.
4.  Any routes beyond the homepage to map from Vite.
5.  If you want, I can scaffold the Next app and port Hero, Features, and Pricing into `app/page.tsx` next.

**Summary:** Drafted a complete, SSG-only migration plan from Vite to Next.js (App Router, static export), covering setup, structure, assets, styling, routing, envs, build/export, and deployment. Ready to execute once you confirm the choices above.