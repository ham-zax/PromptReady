## Landing page visual and aesthetic improvement plan

### High-level direction
- **Unify the look**: Lean into the brand palette (`persian-green`, `saffron`, `burnt-sienna`) and avoid mixing unrelated blues/purples.
- **Typography-first**: Confident headings, relaxed body line-height, consistent rhythm.
- **Minimal, tasteful motion**: Subtle parallax, soft fade/slide; keep transitions 200–350ms.

### Global system (tokens, rhythm, components)
- **Colors**
  - Primary: `persian-green` for CTAs and key accents
  - Secondary/attention: `saffron`
  - Highlight: `burnt-sienna` sparingly
  - Desaturate tints for backgrounds; keep content on `bg-white`
- **Typography**
  - H1: 44–64px (mobile→desktop); H2: 28–36px; body: 18–20px
  - Body copy `leading-relaxed`, weight `font-normal`/`font-medium`
  - Optional: add a modern sans (e.g., Inter/Geist) and set as Tailwind `font-sans`
- **Spacing + layout**
  - Standard section spacing: `py-20 lg:py-32`
  - Container: `max-w-7xl px-4 sm:px-6 lg:px-8`
  - Consider a `Section` wrapper to enforce spacing consistently
- **Buttons**
  - Use the shared `Button` component everywhere; size `lg`
  - Strong contrast; generous padding; rounded if used in hero
- **Cards**
  - `rounded-xl border border-slate-200 bg-white shadow-sm`
  - Use brand tints (`-50`/`-100`) only for emphasis blocks
- **Dark mode (optional)**
  - Add `dark:` variants for key text/surfaces if enabling

### Backgrounds and gradients (unify in `src/App.tsx`)
Replace non-brand gradients with brand-tinted progression:
- Hero: `from-white to-persian-green-50`
- Light sections: `bg-persian-green-50`
- Accent transition: `from-persian-green-50 to-saffron-50`
- Accent section: `bg-saffron-50`
- Keep the fade-to-dark before footer

Edits in `src/App.tsx`:
- `from-white to-blue-50` → `from-white to-persian-green-50`
- `from-blue-50` → `from-persian-green-50`
- `bg-blue-50` → `bg-persian-green-50`
- `from-blue-50 to-purple-50` → `from-persian-green-50 to-saffron-50`
- `bg-purple-50` → `bg-saffron-50`

### Hero (`src/components/Hero.tsx`)
- **Typography**: Slightly lower heading tracking; keep paragraph `max-w-3xl leading-relaxed`.
- **Chips**: Retint to brand hues (`bg-persian-green-600`, `bg-saffron-500`, `bg-burnt-sienna-500`) with 10–15% darker hover.
- **CTA**: Use shared `Button` for consistency.

```tsx
// Replace the inline <button> with the shared Button
import { Button } from './ui/button';

<Button
  onClick={() => {
    trackHeroCtaClick({ placement: 'hero_button' });
    onPrimaryAction();
  }}
  size="lg"
  className="rounded-full bg-persian-green-600 px-6 py-6 text-base font-semibold text-white shadow-lg hover:bg-persian-green-700"
>
  Join the early access <ArrowRight className="h-4 w-4" />
</Button>
```

- **Background**: Keep `RetroGrid`, reduce visual weight, and mask with a soft radial fade in a brand hue (e.g., `rgba(42,157,143,0.10)`).

### Video demo
- Wrap media in a clean card: `rounded-2xl border border-ui-border bg-white shadow-sm ring-1 ring-black/5`.
- Optional caption under media; play button using `Button variant="secondary"`.

### How it works (`src/components/ui/ComparativeDisplay.tsx` usage)
- Add small step labels in `bg-persian-green-100 text-persian-green-800`.
- “Before” uses desaturated alert tints; “After” on `bg-white border-slate-200`.
- Increase spacing between before/after blocks.

### Problem/Solution
- Two-column layout: left problem on subtle tint, right solution on white with a soft top gradient (`from-persian-green-50 to-transparent`).
- One supporting icon/illustration; avoid busy art.

### Features
- 6-card grid. Icon in soft brand circle (`bg-persian-green-100 text-persian-green-700`).
- Title 18px, body 16px, clear spacing.
- Hover affordance: `transition-all hover:-translate-y-0.5 hover:shadow-md`.

### Testimonials
- Keep improved rating presentation.
- Add optional avatar/logo.
- Slightly increase card padding; add a small top quote icon in brand tint.
- Auto-advance every 6–8s; pause on hover.

### Pricing
- Two tiers (Free vs Pro). Emphasize Pro with slightly thicker border or subtle glow.
- Guarantee/subtext under CTA.
- Checkmark list in brand color.

### Footer
- 3 columns: brand blurb, nav links, social.
- Dark background (`bg-slate-900 text-slate-100`), ensure AA+ contrast.

### Motion guidelines
- Entrances: fade + 12–16px slide using spring (200–350ms).
- Hover: 150–200ms color/shadow transitions.
- Keep to ≤1 animated layer per section.

### Quick wins (60–90 minutes)
- Unify gradients in `src/App.tsx` to brand tints.
- Swap Hero CTA to `Button` and retint chips.
- Ensure sections use `py-20 lg:py-32` and consistent containers.
- Standardize card borders: `border-slate-200` and `shadow-sm`.
- Add short reassurance microcopy under the primary CTA.

### Stretch goals
- Add Google Font and set `font-sans`.
- Create `Section` and `SectionHeading` primitives.
- Gentle parallax on Hero background grid.
- Dark mode styling pass with `dark:` variants.
