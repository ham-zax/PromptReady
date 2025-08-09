# Landing Content — Business Analyst Review (Mary)

Inputs: `docs/landing-content.md`, `docs/vire-clean-structure-prd-backlog.md`, `docs/landing-flow-rationale.md`
Version: 0.1 (MVP)

## Executive Summary
PromptReady’s value is immediate time savings and higher‑quality pasted content for privacy‑conscious Developers and Researchers. Messaging should lead with outcome (clean Markdown in one click), then trust (privacy‑first, local), then proof (code/tables/citations preserved). Recommend A/B testing hero and tightening benefits.

## ICPs and Jobs-to-be-Done
- Developer (primary)
  - JTBD: Paste clean docs/issues/PRs/snippets; keep code fences and tables intact; cite sources in tickets/PRs.
  - Success: Reduced manual fixes; fewer formatting bugs; faster PR/spec writing.
- Researcher/Student (secondary)
  - JTBD: Structure articles into notes with headings/quotes; maintain canonical citation.
  - Success: Faster note‑taking; better citation integrity.

## Messaging Hierarchy (recommended)
1) Outcome: “One‑click clean Markdown from any page.”
2) Proof: “Code fences, tables, and citations preserved.”
3) Trust: “Privacy‑first. Runs locally.”
4) Upsell: “Pro adds optional validation with your key.”

## Hero Headline Variants (test 2–3)
- H1‑A (current): One‑click clean Markdown from any page.
- H1‑B: Stop fixing copy. Paste clean Markdown with citations.
- H1‑C: Turn any selection into prompt‑ready Markdown — instantly.
- H1‑D: Copy, clean, and cite — in one click.

## Subhead Variants
- S‑A (current): AI‑ready Markdown/JSON — code fences, tables, and citations preserved. Privacy‑first, runs locally. Pro adds optional validation with your own API key.
- S‑B: Clean and structure any selection into Markdown/JSON on your device. Keep code, tables, and citations. Pro uses your key for optional validation.

## Benefits (tightened bullets)
- Save time: Cut 30–90 seconds of clean‑up on every paste.
- Preserve structure: Headings, lists, tables, and code fences intact.
- Cite with confidence: Canonical URL + timestamp in every export.
- Work your way: Markdown/JSON exports; General or Code & Docs mode.
- Upgrade when ready: Pro Bundles and optional BYOK validation via OpenRouter.

## Differentiators (competitive angle)
- Local‑first by default (no server) vs. web tools that upload content.
- Code‑respecting output (fence/language inference) vs. generic cleaners.
- Cite‑first capture (URL/timestamp/selection hash) for reproducibility.
- Simple pricing and BYOK transparency.

## Objection Handling
- Privacy: Everything runs locally unless you explicitly use BYOK.
- Accuracy: Code fences and tables preserved; Code & Docs mode improves fidelity.
- Performance: Typical pages in <300ms; long docs <1.5s on mid‑tier laptops.
- Browser: Chrome MV3 and Chromium‑based (stable ~12 months back).
- Cost: Free forever for core; low‑cost Pro for power users.

## Social Proof Plan
- Early professional testimonials (dev + research); “security signed off” signal.
- Badges row: Privacy‑First • MV3‑Ready • Built for Developers & Researchers.
- Add lightweight logos of target ecosystems (GitHub, MDN, arXiv) as context cues (no endorsement claims).

## Pricing Positioning
- Free: Core clean/structure/export (most users). Risk‑free trial dynamic.
- Pro ($3/mo or $29/yr): Bundles editor, BYOK validation, power features.
- Copy: “Start free. Upgrade anytime. Your content stays on your device.”

## CTA Strategy
- Primary: Get Early Access (sticky in hero and bottom).
- Secondary: Watch 60‑sec Demo (above‑the‑fold and near Before/After).
- Mid‑page CTA after Proof/Before‑After to capture warmed intent.

## SEO Focus
- Primary: AI text cleaning, prompt ready, Markdown cleaner, Chrome extension Markdown
- Secondary: copy paste cleaner, preserve code blocks, citation exporter
- Titles/Descriptions align with `docs/landing-content.md` updates.

## KPIs & Experiments
- KPIs: Hero CTR, scroll to Problem→Solution, Demo CTR, Waitlist conversion, return rate.
- Experiments (week 1–2):
  - H1 variants (A vs B), measure hero CTR and overall conversion.
  - Add a mini visual in hero (Before/After micro‑preview) vs control.
  - Move trust badges above vs below fold.
  - Pro mention in subhead vs deferred to features.

## OMTM & Benchmarks (Lean)
- OMTM (current 2‑week focus): Waitlist signup conversion rate.
- Benchmarks (freemium extensions, early traffic): 5–10% conversion; stretch: 12%.
- Secondary: Hero CTR ≥ 18–25%; Demo CTR ≥ 8–12% among scrollers; Return visitor rate ≥ 15%.

## Hypotheses (explicit) → Metrics → Success Criteria
1) Problem resonance (H1): If we lead with outcome (clean Markdown in one click), hero CTR increases.
   - Measure: Hero CTR and Waitlist conversion vs control.
   - Success: +20% relative lift vs baseline; maintain signup ≥ 5%.
2) Proof early reduces friction: Showing a hero micro Before/After increases conversion.
   - Measure: Waitlist conversion.
   - Success: +10% relative lift with neutral bounce.
3) Trust emphasis: Surfacing Privacy‑First badges above the fold increases conversion for privacy‑sensitive users.
   - Measure: Conversion by traffic segment; overall conversion.
   - Success: +5–10% lift overall; no drop in non‑privacy segments.
4) Pro mention timing: Deferring Pro to features increases top‑of‑funnel conversions.
   - Measure: Waitlist conversion, Demo CTR.
   - Success: +5% conversion with stable Demo CTR.

## Experiment Backlog (prioritized)
1) H1‑A vs H1‑B (current copy vs “Stop fixing copy…”)
2) Hero micro‑preview (small animated Before/After) vs none
3) Trust badges position (above fold vs below)
4) Pro mention: subhead vs features only
5) Demo CTA label test: “Watch 60‑sec Demo” vs “See it in action”

## Pre‑Sell Validation Plan (Viability)
- Step 1: Add optional “Interested in Pro?” checkbox on waitlist; capture model/provider interest.
- Step 2: If demand ≥ threshold (e.g., 15–20% of signups), email a limited early‑bird pre‑order (e.g., $19/yr first year, limited slots) to test willingness to pay.
- Step 3: Measure conversion and refund requests; use as stronger validation than signups alone.

## Community‑Led Growth (CLG) Hooks
- Waitlist opt‑in: “Keep me updated and invite me to provide feedback.”
- Post‑signup: Offer early access to templates/bundles; request short quotes for testimonials.
- Add subtle social cue: “Join developers and researchers reclaiming their copy‑paste flow.”

## Recommended Edits (public copy)
- Introduce the term “Smart Hybrid Engine” under Features to articulate local deterministic cleaning + optional BYOK validation (Pro).
- Add a community prompt near CTAs: “Help shape PromptReady — join the early community.”
- Strengthen Pro value line to frame support of continued innovation.

## Recommended Edits to `docs/landing-content.md`
- Keep current H1; add H1‑B as variant for A/B.
- Tighten Social Proof quotes (done); consider adding one dev tool context logo row.
- Reorder sections: Hero → Before/After → Problem→Solution → How It Works → Features → Social Proof → Pricing → FAQ → Final CTA (small swap to show proof earlier).

## Next Steps
1) Implement A/B for hero (H1‑A vs H1‑B) with 50/50 split and event tracking.
2) Add hero micro‑preview image/animation (small Before/After inline) and test.
3) Wire landing copy into `HomePage.tsx`; confirm analytics events exist for KPIs.
