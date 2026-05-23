# Halo Aurora — Bootstrap 5 theme for TradeZen

A drop-in Bootstrap 5.3 theme implementing the **Halo Aurora** direction:
a deep-navy dark UI with a soft purple→blue aurora halo, hairline borders,
DM Serif Display headlines and JetBrains Mono numerals. Light mode included.

## Files

```
halo-aurora/
├─ index.html              ← Full marketing home (drop-in reference page)
├─ css/
│  ├─ halo-tokens.css      ← Design tokens — colors, fonts, radii, motion
│  └─ halo-aurora.css      ← Bootstrap variable overrides + custom components
├─ js/
│  └─ halo-aurora.js       ← Theme toggle, language toggle, sparkline render
└─ README.md               ← This file
```

## Load order

Bootstrap reads `--bs-*` CSS variables at runtime, so **load tokens FIRST**,
then Bootstrap, then the override sheet. This lets `halo-aurora.css` re-skin
the entire framework just by reassigning `--bs-primary`, `--bs-body-bg` etc.

```html
<head>
  <link rel="stylesheet" href="halo-aurora/css/halo-tokens.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="halo-aurora/css/halo-aurora.css" />
</head>

<body>
  <!-- … your markup … -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="halo-aurora/js/halo-aurora.js"></script>
</body>
```

`index.html` is the full reference page — copy whole sections from it as a
starting point.

## Dark / light mode

Driven by `data-bs-theme` on `<html>` (the Bootstrap 5.3 convention).

```html
<html lang="en" data-bs-theme="dark">  <!-- default -->
<html lang="en" data-bs-theme="light"> <!-- light variant -->
```

The theme toggle button (anywhere with `data-theme-toggle`) flips the
attribute and persists choice to `localStorage`.

```html
<button class="btn-icon" data-theme-toggle aria-label="Toggle theme">…</button>
```

## Bilingual (EN ↔ தமிழ்)

Wrap any element with two text variants:

```html
<h1 data-en="Trade smarter" data-ta="நிதானமான வர்த்தகம்">Trade smarter</h1>
```

The toggle in the navbar (`.lang-toggle`) swaps `[data-en]` / `[data-ta]`
content. `[lang="ta"]` selectors automatically apply Noto Sans Tamil.

## Design tokens (the important ones)

All tokens are CSS custom properties on `:root`, redefined inside
`[data-bs-theme="light"]`. See `halo-tokens.css` for the full list.

| Token | Purpose | Dark | Light |
|---|---|---|---|
| `--tz-accent-1` / `--tz-accent-2` | Brand gradient endpoints | `#7c6af7` / `#5b8af5` | `#6451dc` / `#4373db` |
| `--tz-grad`                       | 135° accent gradient | linear-gradient(135°, –1, –2) | (light variant) |
| `--tz-bg`                         | Page background | `#06070f` | `#f6f4ff` |
| `--tz-surface`                    | Card / panel | `#0e1124` | `#ffffff` |
| `--tz-surface-2`                  | Elevated / hover | `#161a32` | `#f0eefb` |
| `--tz-border`                     | Hairline border | rgba(255,255,255,.07) | rgba(15,16,32,.08) |
| `--tz-border-accent`              | Highlighted border | rgba(124,106,247,.35) | rgba(100,81,220,.32) |
| `--tz-fg-1` / `–2` / `–3`         | Foreground steps | `#f0f1f8` / `#9ea3c0` / `#585d7e` | `#0f1020` / `#4a4f6e` / `#9ea3be` |
| `--tz-gain` / `–loss`             | Semantic | `#34d399` / `#f87171` | `#0e9966` / `#c43d3d` |
| `--tz-radius-md` / `–lg` / `–xl`  | Buttons / cards / panels | 8 / 12 / 16 px |
| `--tz-glow`                       | CTA glow shadow | `0 12px 36px rgba(124,106,247,.4)` |
| `--tz-font-display`               | Headlines | `DM Serif Display` |
| `--tz-font-ui`                    | Body / UI | `DM Sans` |
| `--tz-font-mono`                  | Numbers / tickers | `JetBrains Mono` |
| `--tz-font-tamil`                 | Tamil glyphs | `Noto Sans Tamil` |

## Custom components

Built on top of Bootstrap. Anything not listed here is a normal Bootstrap
class (`.container`, `.row`, `.col-md-6`, `.accordion`, `.btn`, etc.).

### Buttons

```html
<button class="btn btn-aurora">Open dashboard</button>     <!-- gradient CTA -->
<button class="btn btn-aurora btn-sm">…</button>            <!-- compact -->
<button class="btn btn-ghost">…</button>                    <!-- outlined -->
<button class="btn btn-quiet">…</button>                    <!-- secondary -->
<button class="btn-icon">…</button>                          <!-- 34×34 round -->
```

### Typography utilities

```html
<h1 class="font-display">Serif headline</h1>
<span class="font-display-i">Italic accent</span>
<span class="font-mono">22,847.40</span>
<span class="text-gradient fst-italic">aurora text</span>
<span class="text-fg-1 / -fg-2 / -fg-3">foreground steps</span>
```

### Eyebrows / pills

```html
<span class="eyebrow"><span class="dot"></span>TOOLS · LIVE</span>

<span class="eyebrow-hero">
  <span class="badge-new">NEW</span>
  AI option-chain copilot
</span>
```

### Hero

```html
<section class="halo-hero">
  <div class="halo-bg"></div>     <!-- two radial halos -->
  <div class="halo-grid"></div>   <!-- masked grid -->

  <div class="container hero-content">
    <h1 class="hero-title">
      Trade smarter with
      <span class="hl-italic">AI-powered</span>      <!-- adds gradient underline -->
      signals.
    </h1>
    <p class="hero-sub">…</p>
    <div class="hero-cta">…</div>
    <div class="hero-trust">…</div>
  </div>
</section>
```

### Tools grid (3-column)

```html
<div class="row g-3">
  <div class="col-lg-4 col-md-6">
    <a href="#" class="tool-card is-featured">         <!-- omit is-featured for default -->
      <div class="tool-head">
        <div class="tool-icon"><!-- svg --></div>
        <span class="tool-num">01</span>
      </div>
      <h3>Trade Flow</h3>
      <p>…</p>
      <div class="tool-foot">
        <div class="tool-tags">
          <span class="tool-tag">CPR</span>
          <span class="tool-tag">ORB</span>
        </div>
        <span class="arrow">→</span>
      </div>
    </a>
  </div>
  …
</div>
```

### Dashboard glimpse

A complete sidebar + main + AI-rail layout. See `index.html` for the full
markup; the classes are:

- `.dashboard-frame` / `.dashboard-halo` / `.dashboard-wrap`
- `.dash-topbar` / `.dash-traffic` / `.dash-url` / `.dash-live-chip`
- `.dash-grid` (3-col) → `.dash-sidebar` + `.dash-main` + `.dash-rail`
- `.dash-nav-item.is-active` (gradient pill)
- `.index-card.is-featured`
- `.cpr-card` + `.cpr-canvas` with `.level.is-pivot / .is-cpr`
- `.rail-bubble` / `.rail-stats` / `.rail-stat` / `.rail-action`

### Learn cards

```html
<a href="#" class="learn-card from-tl">           <!-- or from-br for the second card -->
  <span class="learn-tag">EN · English</span>
  <h3>Reading the market without a chart</h3>
  <p>…</p>
  <div class="learn-foot">
    <span class="learn-meta">28 lessons · 4 h 20 m</span>
    <span class="learn-cta">Start course →</span>
  </div>
</a>
```

### FAQ — uses Bootstrap accordion as-is

Wrap the accordion in `.halo-faq` to pick up our styling:

```html
<section class="halo-faq">
  <div class="accordion" id="haloFaq">
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">…</button>
      </h3>
      <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#haloFaq">
        <div class="accordion-body">…</div>
      </div>
    </div>
  </div>
</section>
```

### Sparkline

Drop an empty SVG; the script paints it on load and on resize.

```html
<svg class="spark" data-points="0.4,0.5,0.55,…" data-color="#34d399"></svg>
```

Points are 0..1, comma-separated. The script auto-sizes from the SVG's
client width × height (default 36px tall).

## Production checklist

- [ ] Self-host the Google Fonts (DM Serif Display, DM Sans, JetBrains Mono,
      Noto Sans Tamil) — current `@import` in `halo-tokens.css` is fine for
      dev, slower in production.
- [ ] Replace the inline TZ logo SVGs with `<img src="assets/logo-…svg">`
      pointing to the brand assets.
- [ ] Use Bootstrap's PurgeCSS / `bootstrap.css` build to drop unused
      utilities — Halo Aurora only needs: grid, utilities, accordion,
      collapse JS.
- [ ] `aria-live` on any block that updates from your data feed.

## Bootstrap version

Tested against **Bootstrap 5.3.3**. Earlier 5.x versions lack
`data-bs-theme` colour-mode variables; 5.3+ required.

## Responsive system

Halo Aurora is built mobile-first and tested from **320px through 4K**.

| Breakpoint | Width | Layout shift |
|---|---|---|
| `xs`   | `< 576px`  | 1-column tools, stacked-full-width CTAs, footer 2-up, dashboard glimpse fully stacks |
| `sm`   | `≥ 576px`  | 2-column tools, footer columns regain widths |
| `md`   | `≥ 768px`  | Section spacing relaxes, hero scales up, dashboard rail returns under main panel |
| `lg`   | `≥ 992px`  | Full desktop nav appears, dashboard returns to 3-column (side + main + rail) |
| `xl`   | `≥ 1200px` | Container widens to 1140px |
| `xxl`  | `≥ 1400px` | Container widens to **1320px** |
| 4K     | `≥ 1800px` | Container widens to **1440px**, hero headline reaches 108px |

### Mobile navbar (hamburger + offcanvas)

Below `lg` the inline nav is replaced by a hamburger button (`.halo-burger`)
that opens a slide-in drawer (`.halo-offcanvas`). The drawer is a Bootstrap
`offcanvas` styled to match the Aurora system. The desktop "Open dashboard"
CTA collapses on mobile and reappears at the bottom of the drawer.

```html
<button class="halo-burger" data-bs-toggle="offcanvas" data-bs-target="#haloMenu">…</button>

<aside class="offcanvas offcanvas-end halo-offcanvas" id="haloMenu" tabindex="-1">
  <div class="offcanvas-header">…</div>
  <div class="offcanvas-body">
    <a class="nav-link" href="#tools" data-bs-dismiss="offcanvas">Tools <svg>…</svg></a>
    …
    <div class="offcanvas-divider"></div>
    <a class="nav-link">Sign in</a>
  </div>
  <div class="offcanvas-footer">
    <button class="btn btn-aurora">Open dashboard</button>
  </div>
</aside>
```

### Mobile sticky CTA bar (optional)

On phones (`< sm`) you can surface the primary action at thumb-reach with a
fixed bar at the bottom of the viewport. Disabled on tablet and up.

```html
<body class="has-mobile-cta">   <!-- adds bottom padding so footer text isn't covered -->
  …
  <div class="halo-mobile-cta">
    <button class="btn btn-aurora">Open dashboard</button>
  </div>
</body>
```

### Touch refinements

When the device reports no hover capability (touchscreens), all interactive
elements (`.btn`, `.btn-icon`, `.lang-toggle button`, `.dash-nav-item`,
filter chips, CPR timeframe chips) get `min-height: 44px` and the hover-lift
on tool cards is disabled. Targets meet WCAG AAA at 44×44px.

### Reduced motion

`prefers-reduced-motion: reduce` kills transitions and animations
project-wide.

### Print

The hero halo, grid, footer halo, theme toggle, and language toggle are
hidden when printing. Cards drop to white-on-black with light borders. The
hero headline drops to 48px so the first page reads cleanly.

### Container widths

```css
@media (min-width: 1400px) { .container { max-width: 1320px; } }
@media (min-width: 1800px) { .container { max-width: 1440px; } }
```

Override these in your own CSS if you want narrower layouts.

## Tested viewports

- **iPhone SE** 375 × 667
- **iPhone 14 Pro** 393 × 852
- **iPad Mini** 768 × 1024
- **iPad Pro 11"** 1024 × 1366
- **Laptop** 1440 × 900
- **Desktop** 1920 × 1080
- **4K** 3840 × 2160
