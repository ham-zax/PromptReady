# Front-End UX Specification — PromptReady Extension (MVP)

Author: Sally (UX Expert)
Inputs: `docs/vire-clean-structure-prd-backlog.md`
Version: 0.1 (MVP)

## 1. Product Context

PromptReady is a Chrome MV3 extension that cleans, structures, and exports selected page content into Markdown/JSON with citations. The published release keeps core offline capture/export free and adds optional OpenRouter BYOK AI cleanup with a 5-successful-cleanups-per-local-day limit.

### 1.1 Tooling & Conventions (MVP)

- Framework: React 18 (React 19 acceptable if supported by WXT)
- Builder: WXT (MV3) with TypeScript
- Styling: TailwindCSS with `@tailwind base; @tailwind components; @tailwind utilities;`
- MV3 constraints: no inline scripts/styles; use HTML entrypoints and bundled JS/CSS
- WXT entrypoints (expected):
  - `entrypoints/popup.html` + `entrypoints/popup.tsx`
  - `entrypoints/options.html` + `entrypoints/options.tsx`
  - Background and content scripts live under `entrypoints/` (not part of this UX deliverable)

## 2. Personas & Primary Jobs-To-Be-Done (JTBD)

- Developer
  - Turn API docs, issues/PRs, and blog posts into clean MD with preserved code blocks.
  - Export JSON for downstream tooling/tests.
  - Maintain citations for reproducibility.
- Researcher/Student
  - Extract article content into structured notes with headings and quotes.
  - Keep canonical URL and timestamp for proper referencing.

## 3. Information Architecture (MVP)

- Popup (primary quick actions)
  - Mode toggle: General | Code & Docs
  - Primary CTA: Clean & Export
  - Secondary: Copy to Clipboard (MD/JSON), Download (MD/JSON)
  - Status strip: last action, processing state, and errors
  - BYOK status badge: indicates optional OpenRouter AI cleanup state when configured
- Settings (secondary, persistent)
  - General: default mode, hotkey info, file naming convention
  - BYOK: OpenRouter key (masked), model dropdown or manual name, local daily success counter
  - Privacy: telemetry toggle (opt-in) and BYOK network disclosure

## 4. Global Interaction Patterns

- Default hotkey: Ctrl/Cmd+Shift+P (user-configurable post-MVP)
- Keyboard-first: All controls tabbable; visible focus; ESC closes modals
- Feedback: Non-blocking toasts for success/error; inline validation where applicable
- File naming: `<title>__YYYY-MM-DD__hhmm__hash.(md|json)` with sanitization

## 5. Primary Flows (Step-by-Step)

### 5.1 Clean & Export (Popup)

1. User presses Ctrl/Cmd+Shift+P or clicks extension icon to open popup
2. Selects Mode (General | Code & Docs) if needed
3. Clicks Clean & Export
4. Content script captures selection, performs cleaning/structuring
5. Popup renders result summary and provides two actions:
   - Copy Markdown | Download Markdown
   - Copy JSON | Download JSON
6. Toast: “Export ready” + file name preview

Edge cases:

- No selection detected → show inline hint: “Select content on the page, then try again.” with a Try Again button
- Very large selection → show progress indicator with yielding; allow Cancel

### 5.2 Optional BYOK AI Cleanup

1. In Settings -> BYOK, user enters an OpenRouter API key
2. Model dropdown shows known models; user can type a model name
3. User explicitly runs AI cleanup on captured Markdown
4. UI states that captured content and the user's OpenRouter API key are sent directly to OpenRouter for that request
5. On success: decrement the local daily successful-cleanup allowance; on failure: keep the local output and do not count the attempt

### 5.3 Settings Update

- Changes persist immediately to `chrome.storage.local`
- Secret fields masked; reveal-on-press eye icon
- Telemetry is off by default; opt-in CTA explains minimal event schema

## 6. Wireframe Specs (Textual)

### Popup Layout

- Header: Logo + Mode Toggle segmented control
- Body: Description line; large CTA “Clean & Export”
- Actions: Two split buttons
  - Copy (dropdown: Markdown, JSON)
  - Download (dropdown: Markdown, JSON)
- Footer: Status strip (icon + short text), BYOK status badge
  Notes: fixed width ~360–400px; keyboard-first focus order; high-contrast theme via Tailwind utilities

### Settings Layout

- Tabs (left rail or top): General | Templates | BYOK | Privacy
- General: Mode default selector; hotkey info (read-only for MVP)
- Templates: Table of bundles (name, updatedAt) with View/Edit (MVP simple)
- BYOK: OpenRouter API key (password), model (select + free text), local daily success counter
- Privacy: Telemetry toggle with consent copy; link to privacy policy

## 7. Component Inventory (MVP)

- ModeToggle (General | Code & Docs)
- PrimaryButton (Clean & Export)
- SplitButton (Copy/Download with menu)
- Toast / InlineAlert (success, error, info)
- SecretInput (apiKey), SelectWithFreeEntry (model)
- Tabs, Badge (BYOK), StatusStrip
- ModalDialog (consent)

## 8. States & Validation

- Loading: spinner and descriptive verb (“Cleaning…”, “Structuring…”, “Exporting…”) with p95 under 1.5s
- Errors: permission denied (clipboard/downloads), network error (BYOK), no selection, malformed content
- Recovery: retry, fall back to local, instructions for permissions

## 9. Accessibility (MVP)

- Tab order defined: Logo → ModeToggle → Clean & Export → Copy → Download → Footer links
- Focus trap in popup; ESC closes dropdowns/modals
- ARIA labels for buttons and inputs; live region for toasts
- Contrast ≥ 4.5:1; visible focus ring

## 10. Telemetry (opt-in)

- Events (if enabled):
  - clean: { mode, durationMs }
  - export: { type: "md" | "json", fileName }
  - bundle_use: { action: "validate" | "export", model }

## 11. Acceptance Criteria (UX)

- Popup usable entirely via keyboard; screen-reader announcements for state changes
- Clean & Export produces usable output on 85% of pages in the matrix without manual edits
- BYOK consent required before any network call; visible indicator during call
- File names follow convention and are sanitized

## 12. Out of Scope (MVP)

- i18n; advanced templates; multi-page binder; OCR; pipelines

## 13. Open Questions

- Minimum Chromium version to pin at release (target ~12 months back)
- Exact model list to seed for OpenRouter
