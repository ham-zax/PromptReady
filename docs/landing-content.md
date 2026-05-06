# Landing Page Content — PromptReady

Author: Sally (UX Expert)
Inputs: `docs/vire-clean-structure-prd-backlog.md`, `docs/landing-flow-rationale.md`, `docs/seo-updates.md`
Version: 0.1 (MVP)

## Hero

- Headline: One-click clean Markdown for AI context.
- Subhead: Turn messy pages, selections, docs, and Reddit threads into prompt-ready Markdown with structure and source details preserved. Core capture runs locally; optional AI cleanup can help when enabled.
- Primary CTA: Get PromptReady free
- Secondary CTA: Watch Demo
- Trust badges: One-Click Clean Copy • Docs, Articles & Reddit • Private Local Parsing

### Above‑the‑fold proof points

- For Developers: Preserve code blocks, API tables, and stack traces.
- For Researchers: Keep quotes, headings, and canonical citations.
- For Everyone: Faster copy, paste, save, and reuse with less clean-up.

## Social Proof (seed)

- Use product-proof cards instead of fake testimonials.
- Suggested proof cards:
  - Everyday sources: clean articles, research pages, docs, and Reddit-style discussions.
  - Structure preservation: keep headings, code fences, tables, links, and source details close.
  - Honest boundaries: app-heavy, lazy, and social pages remain explicit hard cases.

## Problem → Solution

- Problem title: The copy‑paste clean‑up tax
- Problem copy: You copy text, then spend minutes fixing broken lines, tables, and code. It kills focus and flow.
- Solution title: One click, clean output
- Solution copy: PromptReady structures captured source into Markdown with headings, lists, code fences, and source metadata so it is ready for AI prompts, notes, or export.

## Before / After

- Before (caption): Messy page selection with broken formatting.
- After (caption): Clean, structured Markdown ready to paste into ChatGPT/Claude or your notes.

## How It Works

1. Select page or source content
2. Click to clean and structure it
3. Copy or download Markdown/JSON with source details

## Core Features

- One‑Click Clean Copy: Selection → clean → structure → export
- Code & Docs Mode: Preserves code fences, API tables, and stack traces
- Cite‑First Capture: Canonical URL, timestamp, selection hash, quoted snippets
- Exports: Copy to clipboard, download `.md` and `.json`
- Fast & Local: Offline capture and Markdown export run locally by default
- Optional AI Cleanup: Deterministic local cleaning plus optional OpenRouter BYOK cleanup that can fall back when fidelity drops.

## Why Privacy‑First Matters

- Everything runs locally unless you explicitly use BYOK
- Clear consent dialog and visible network indicator for any BYOK call
- Your content never leaves your machine without your say‑so

## Pricing (MVP)

- Free: Core clean/structure/export forever
- Optional BYOK AI cleanup: OpenRouter only, 5 successful cleanups per local day.

## FAQ

- What runs locally? Offline capture and Markdown export run locally. BYOK AI cleanup sends captured content and the user's OpenRouter API key directly to OpenRouter for that request.
- Do I need an API key? No. BYOK is optional for AI cleanup.
- Which browsers are supported? Chrome MV3 and Chromium‑based browsers (targeting stable from ~12 months ago).
- Will it preserve code and tables? Yes — use Code & Docs Mode for best results.
- Does it work on every site? Not perfectly. Articles, docs, long-form pages, and Reddit-style discussions are target sources; app-heavy, lazy, and social pages can still need site-specific handling.
- How are files named? `<title>__YYYY-MM-DD__hhmm__hash.(md|json)` for easy sorting.

## CTA Blocks

- Above the fold: Get PromptReady free • Watch Demo
- Mid‑page (after Before/After): Try PromptReady — Get clean Markdown
- Bottom: Ready to clean your copy‑paste flow? Get PromptReady free
- Community prompt: Help shape PromptReady — follow the product as it improves.

## SEO (Home)

- Title: PromptReady — One-click clean Markdown for AI context
- Meta Description: Browser extension that turns messy pages, docs, articles, and Reddit threads into clean Markdown for prompts, notes, and LLM workflows.
- Target Keywords: AI text cleaning, prompt ready, LLM text formatting, Chrome extension Markdown

## SEO (Demo)

- Title: PromptReady Demo — One‑Click Clean & Export
- Meta Description: See PromptReady turn messy page selections into clean Markdown/JSON with citations. Offline capture and export run locally.

## SEO (Pricing)

- Title: PromptReady Pricing — Get PromptReady free
- Meta Description: Get PromptReady free for core Markdown capture and export. Optional AI cleanup can use your own OpenRouter key.

## Microcopy

- Button: Clean & Export
- Hint (no selection): Select content on the page, then try again.
- Toast (success): Export ready — copied to clipboard.
- Toast (error): Something went wrong. Please try again.
- Consent (BYOK): Using your key to format/validate. Visible network indicator. Continue?

## Footer Copy

- Privacy‑First • MV3‑Ready • Built for Developers & Researchers
- Links: Privacy Policy • Terms • Contact

## Section Order (Home)

1. Hero
2. Problem → Solution
3. Before/After
4. How It Works
5. Features
6. Social Proof
7. Pricing
8. FAQ
9. Final CTA

---

## Hero Variants (for A/B testing)

- Variant A — Direct: Copy clean, AI‑ready text. Instantly.
- Variant B — Outcome: One-click clean Markdown for AI context.
