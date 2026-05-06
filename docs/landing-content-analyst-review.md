# Landing Content — Business Analyst Review (Mary)

Inputs: `docs/landing-content.md`, `docs/vire-clean-structure-prd-backlog.md`, `docs/landing-flow-rationale.md`
Version: 0.1 (MVP)

## Executive Summary

PromptReady’s value is immediate time savings and higher-quality pasted content for privacy-conscious Developers and Researchers. Messaging should lead with outcome (clean Markdown in one click), then trust (offline capture/export runs locally), then proof (code/tables/citations preserved). Recommend A/B testing hero and tightening benefits.

## ICPs and Jobs-to-be-Done

- Developer (primary)
  - JTBD: Paste clean docs/issues/PRs/snippets; keep code fences and tables intact; cite sources in tickets/PRs.
  - Success: Reduced manual fixes; fewer formatting bugs; faster PR/spec writing.
- Researcher/Student (secondary)
  - JTBD: Structure articles into notes with headings/quotes; maintain canonical citation.
  - Success: Faster note‑taking; better citation integrity.

## Messaging Hierarchy (recommended)

1. Outcome: “One-click clean Markdown for AI context.”
2. Proof: “Code fences, tables, and citations preserved.”
3. Trust: “Offline capture and export run locally.”
4. Optional AI: “OpenRouter BYOK cleanup is available when configured.”

## Hero Headline Variants (test 2–3)

- H1-A (current): One-click clean Markdown for AI context.
- H1‑B: Stop fixing copy. Paste clean Markdown with citations.
- H1‑C: Turn any selection into prompt‑ready Markdown — instantly.
- H1‑D: Copy, clean, and cite — in one click.

## Subhead Variants

- S‑A (current): AI‑ready Markdown/JSON — code fences, tables, and citations preserved. Offline capture and export run locally.
- S‑B: Clean and structure any selection into Markdown/JSON on your device. Optional OpenRouter BYOK AI cleanup uses your key when enabled.

## Benefits (tightened bullets)

- Save time: Cut 30–90 seconds of clean‑up on every paste.
- Preserve structure: Headings, lists, tables, and code fences intact.
- Cite with confidence: Canonical URL + timestamp in every export.
- Work your way: Markdown/JSON exports; General or Code & Docs mode.
- Optional AI when ready: OpenRouter BYOK cleanup with a 5-successful-cleanups-per-local-day limit.

## Differentiators (competitive angle)

- Offline capture/export runs locally vs. web tools that upload content.
- Code‑respecting output (fence/language inference) vs. generic cleaners.
- Cite‑first capture (URL/timestamp/selection hash) for reproducibility.
- Simple pricing and BYOK transparency.

## Objection Handling

- Privacy: Offline capture/export runs locally. BYOK AI cleanup sends captured content and the user's OpenRouter API key directly to OpenRouter for that request.
- Accuracy: Code fences and tables preserved; Code & Docs mode improves fidelity.
- Performance: Typical pages in <300ms; long docs <1.5s on mid‑tier laptops.
- Browser: Chrome MV3 and Chromium‑based (stable ~12 months back).
- Cost: Free core export; optional BYOK AI cleanup is locally limited.

## Social Proof Plan

- Early professional testimonials (dev + research); “security signed off” signal.
- Badges row: Offline Export • MV3-Ready • Built for Developers & Researchers.
- Add lightweight logos of target ecosystems (GitHub, MDN, arXiv) as context cues (no endorsement claims).

## Pricing Positioning

- Free: Core clean/structure/export for most users.
- Optional BYOK AI: OpenRouter cleanup, 5 successful cleanups per local day.
- Copy: “Start free. Use OpenRouter BYOK AI cleanup only when you choose.”

## CTA Strategy

- Primary: Get PromptReady free (sticky in hero and bottom).
- Secondary: Watch 60‑sec Demo (above‑the‑fold and near Before/After).
- Mid‑page CTA after Proof/Before‑After to capture warmed intent.

## SEO Focus

- Primary: AI text cleaning, prompt ready, Markdown cleaner, Chrome extension Markdown
- Secondary: copy paste cleaner, preserve code blocks, citation exporter
- Titles/Descriptions align with `docs/landing-content.md` updates.

## KPIs & Experiments

- KPIs: Hero CTR, scroll to Problem→Solution, Demo CTR, Chrome Store install intent, return rate.
- Experiments (week 1–2):
  - H1 variants (A vs B), measure hero CTR and overall conversion.
  - Add a mini visual in hero (Before/After micro‑preview) vs control.
  - Move trust badges above vs below fold.
  - Optional BYOK mention in subhead vs deferred to features.

## OMTM & Benchmarks (Lean)

- OMTM (current 2-week focus): Chrome Store install intent.
- Benchmarks (freemium extensions, early traffic): 5-10% install intent; stretch: 12%.
- Secondary: Hero CTR ≥ 18–25%; Demo CTR ≥ 8–12% among scrollers; Return visitor rate ≥ 15%.

## Hypotheses (explicit) → Metrics → Success Criteria

1. Problem resonance (H1): If we lead with outcome (clean Markdown in one click), hero CTR increases.
   - Measure: Hero CTR and install intent vs control.
   - Success: +20% relative lift vs baseline; maintain install intent >= 5%.
2. Proof early reduces friction: Showing a hero micro Before/After increases conversion.
   - Measure: install intent.
   - Success: +10% relative lift with neutral bounce.
3. Trust emphasis: Surfacing offline-export badges above the fold increases conversion for privacy-sensitive users.
   - Measure: Conversion by traffic segment; overall conversion.
   - Success: +5–10% lift overall; no drop in non‑privacy segments.
4. Optional BYOK mention timing: Deferring BYOK to features increases top-of-funnel conversions.
   - Measure: install intent, Demo CTR.
   - Success: +5% conversion with stable Demo CTR.

## Experiment Backlog (prioritized)

1. H1‑A vs H1‑B (current copy vs “Stop fixing copy…”)
2. Hero micro‑preview (small animated Before/After) vs none
3. Trust badges position (above fold vs below)
4. Optional BYOK mention: subhead vs features only
5. Demo CTA label test: “Watch 60‑sec Demo” vs “See it in action”

## Pre‑Sell Validation Plan (Viability)

- Step 1: Track opt-in feedback and BYOK settings interest after install.
- Step 2: If demand meets threshold, test paid workflow interest separately from the public release.
- Step 3: Measure conversion and refund requests; use as stronger validation than signups alone.

## Community‑Led Growth (CLG) Hooks

- Feedback opt-in: “Keep me updated and invite me to provide feedback.”
- Post‑signup: Offer product updates and optional template/bundle interest; request short quotes only after real usage.
- Add subtle social cue: “Join developers and researchers reclaiming their copy‑paste flow.”

## Recommended Edits (public copy)

- Introduce a plain feature line that explains deterministic local cleaning plus optional OpenRouter BYOK AI cleanup.
- Add a community prompt near CTAs: “Help shape PromptReady — join the early community.”
- Strengthen optional BYOK value line without implying paid access.

## Recommended Edits to `docs/landing-content.md`

- Keep current H1; add H1‑B as variant for A/B.
- Tighten Social Proof quotes (done); consider adding one dev tool context logo row.
- Reorder sections: Hero → Before/After → Problem→Solution → How It Works → Features → Social Proof → Pricing → FAQ → Final CTA (small swap to show proof earlier).

## Next Steps

1. Implement A/B for hero (H1‑A vs H1‑B) with 50/50 split and event tracking.
2. Add hero micro‑preview image/animation (small Before/After inline) and test.
3. Wire landing copy into `HomePage.tsx`; confirm analytics events exist for KPIs.
