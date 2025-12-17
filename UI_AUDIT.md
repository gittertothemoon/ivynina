# UI Audit (Portfolio Creator / Ivy & Nina)

## Design direction (keep brand, upgrade finish)
Warm “coffee + blush” dark luxury with crisp editorial typography, calmer glass surfaces, and consistent component rhythm. Reduce heavy shadows/over-blur, standardize spacing/controls, and ensure mobile layouts feel intentionally composed (no overflow, no clipped hero content).

## Top issues (location-based)
1) `src/components/UniversalFooter.jsx`: uses `w-screen` + `px-20` and hard left/center/right layout → causes mobile overflow, cramped alignment, and inconsistent spacing; social icon hover color becomes low-contrast.
2) `src/components/HeroSection.jsx`: `h-screen` + large negative margins (`-mt-44/-mt-48`) → content can clip on short viewports; logos are absolutely positioned and may overlap/shift at small widths.
3) Cross-app: buttons/links have inconsistent heights/radius/hover/focus styles; multiple CTAs miss `focus-visible` ring and consistent tap target sizing.
4) `src/components/MainNav.jsx`: nav pills are dense on mobile; `aria-current` is set to a boolean; join CTA lacks consistent focus treatment.
5) `src/pages/ScenesPage.jsx`: modal is not constrained to viewport height and isn’t scroll-safe on small screens; close button lacks an accessible label and consistent focus ring.
6) `src/pages/ConnectPage.jsx`: form controls vary in sizing; checkboxes are below recommended tap targets; focus styles vary between controls.
7) `src/components/animations/ScrollAnimations.jsx` + `src/index.css`: long animation durations don’t respect reduced-motion preferences; perceived “slowness” on mobile.
8) `src/components/Layout.jsx`: invalid Tailwind class `-z-9` risks incorrect stacking (even if pointer events are disabled).
9) Cross-app: container widths and paddings vary (`max-w-4xl/6xl/7xl`, repeated `px-6 sm:px-10`) → inconsistent gutters and line lengths.
10) Cross-app: typography scale is inconsistent (very large headings + `text-xl` body on mobile) → hierarchy feels less controlled and can overflow/wrap awkwardly.

## Proposed fixes (what/why)
- Add a small set of shared Tailwind component classes (buttons, inputs, cards, containers) in `src/index.css` to standardize rhythm without changing structure.
- Refine global base styles: tighter heading tracking, consistent focus-visible rings, better selection/scroll behavior, and reduced-motion safeguards.
- Make `UniversalFooter` fully responsive (replace `w-screen`, reduce padding on mobile, allow wrapping) while keeping the same content and layout intent.
- Make hero layout resilient: use safer viewport units (`svh`) and remove reliance on large negative offsets so content never clips at 320–414px widths/heights.
- Fix `MainNav` ergonomics: slightly larger tap targets, consistent focus rings, correct `aria-current` token usage.
- Make the Scenes modal viewport-safe: add max-height + internal scroll, accessible close label, and stable padding for small screens.
- Normalize form controls (Connect): consistent heights/radius, clearer focus, and more comfortable spacing on small screens.
- Correct `-z-9` to an explicit z-index value to guarantee overlay layering.

## Verification Notes (to be updated after changes)
- Build: `npm run build` (passes)
- Lint: `npm run lint` (passes)
- Dev/preview run: blocked here because Vite cannot bind to a local port (`listen EPERM: operation not permitted`)
- Reviewed for responsive safety (code-level): hero safe viewport units, footer no `w-screen`, modal `max-h` + scroll, tap targets and focus-visible rings
