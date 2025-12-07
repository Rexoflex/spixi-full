# Spixi mobile nav – spec

Component: `nav-bar/mobile`
Breakpoint: applies at viewport width **≤ 768px** (or same breakpoint you use for other mobile layouts).

---

## 1. Header bar (closed state)

- **Position**
  - Full width, pinned to top of page. hides when scrolling down, appears when scrolling up.
  - `position: sticky; top: 0; z-index` above content.
  - Background: same as desktop

- **Layout**
  - Single row with three zones:
    - **Left:** Spixi logo mark.
    - **Right:** Primary CTA button “Download Spixi”. and list.svg from assets/icons/
  - Row uses flexbox: `display: flex; align-items: center; justify-content: space-between;`
  - Horizontal padding between button and icon: `spacing/lg` 

- **Logo**
  - Same logo mark as desktop spixi-logo.svg, no “Spixi” text.
  - Size 32px high.

- **CTA button**
  - Uses global button styles: `.btn.btn--outline-light`.
  - Stretches to fill remaining horizontal space between logo and hamburger.
  - Max height ~44px–48px.
  - Left/right padding inside button follows existing button tokens.
  - Text: `Download Spixi`.

- **Hamburger icon**
  - Touch target: at least 40x40px.
  - Placed on the far right, aligned vertically with the button.
  - Spacing between button and hamburger: `spacing/lg` → `var(--space-lg)`.

- **Behavior**
  - Tapping hamburger opens the full-screen menu overlay.
  - Hamburger toggles to a close icon (`X`) in the open state.

---

## 2. Menu overlay (open state)

Shown when hamburger is active.

- **Position & size**
  - `position: fixed; inset: 0;` (full-screen overlay).
  - Background: `var(--spixi-bg)` or slightly elevated surface.
  - Sits above header; z-index higher than header.

- **Top bar**
  - Small top strip with logo on the left and close (`X`) icon on the right.
  - Same horizontal padding as header: `var(--space-sm)`.
  - Vertical padding: `spacing/xs` top/bottom.
  - Background can be same as body or a subtle contrast strip.

- **Layout of menu content**
  - Column layout, centered vertically between top bar and bottom CTA.
  - Container has horizontal padding: `var(--space-md)` to `var(--space-lg)`.
  - Menu links stacked vertically:
    - “Features”
    - “How it works”
    - “Mini Apps”
    - “Technology”
    - “FAQ”
  - Vertical spacing between each link: `spacing/xxl` → `var(--space-2xl)` (matches Figma).

- **Typography for menu items**
    - same style as on desktop

- **Bottom CTA**
  - Same “Download Spixi” button used in header:
    - `.btn.btn--outline-light`.
    - Full width or nearly full width inside menu container.
    - Placed at the bottom with extra spacing above:
      - Top margin above button: `spacing/xxl`.
      - Bottom padding to screen edge: `spacing/super-lg` → `var(--space-2xl)` or similar.

- **Interactions**
  - Tapping any menu item:
    - Closes the overlay.
    - Scrolls smoothly to the corresponding section (`#features`, `#how-it-works`, etc.) or corresponding page
  - Tapping the CTA:
    - Navigates to download page .
  - Tapping the close icon or outside the menu:
    - Closes the overlay. with a smooth transition

- **Accessibility**
  - Hamburger button:
    - `aria-label="Open navigation"` when closed.
    - `aria-label="Close navigation"` when open.
    - Use `aria-expanded="false"` / `"true"` and `aria-controls` pointing to the menu container.
  - Menu overlay:
    - `role="dialog"` or `nav` with `aria-modal="true"`.
    - Focus should move into the menu when opened and return to hamburger when closed.
  - Prevent background scroll while menu is open (e.g. add `overflow: hidden` to `<body>`).

---

## 3. Shared rules with desktop

- Same link order and anchors as desktop nav.
- Same color tokens and button styles (no special mobile-only colors).
- Active section highlighting can use `.nav-link--active` class if needed, but not required for first version.

---

## 4. Implementation hints for Copilot

- Create BEM-ish classes:
  - `.site-header`, `.nav-bar`, `.nav-bar__logo`, `.nav-bar__cta`, `.nav-bar__toggle`.
  - `.mobile-menu`, `.mobile-menu--open`, `.mobile-menu__list`, `.mobile-menu__item`, `.mobile-menu__cta`.
- Use a single JS file (e.g. `nav.js`) with:
  - Toggle function for `.nav-bar__toggle`.
  - Add/remove `.mobile-menu--open` on the overlay.
  - Add/remove `body--menu-open` on `<body>` for scroll lock.
