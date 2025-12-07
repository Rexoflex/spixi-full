# Spixi hero section – spec

Component / frame: `hero` (desktop)

---

## 1. Background

- Element: `.hero`
- Full-width section at top of page, under the nav.
- Background color: base page background `var(--spixi-bg)`.
- **Gradient overlay** (must match Figma):

```css
background: radial-gradient(
  70.67% 60.46% at 71.44% 31.57%,
  rgba(59, 156, 255, 0.20) 0%,
  rgba(128, 101, 183, 0.05) 50%,
  rgba(2, 5, 19, 0.00) 100%
);
Vertical padding (desktop): use large section spacing

Top: var(--space-3xl)

Bottom: var(--space-3xl)

Horizontal padding of inner content (both desktop + mobile):

Left/right: spacing/super-lg → var(--space-2xl) (same as nav)

Wrapper element: .hero__inner

max-width: ~1120–1200px

margin: 0 auto;

All content (left column + right image) lives inside this.

2. Desktop layout (≥ 1024px)
2.1 Grid / columns

Element: .hero__inner

display: grid;

grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);

align-items: center;

Column gap: use one token, not hardcoded pixels:

gap: var(--space-2xl);

Left column: .hero__content
Right column: .hero__media

2.2 Left column – content stack

Element: .hero__content

display: flex;

flex-direction: column;

align-items: flex-start;

max-width: 640px;

Vertical spacing inside .hero__content:

Eyebrow → headline: spacing/md → var(--space-md)

Headline → body: spacing/md → var(--space-md)

Body → button group: spacing/3xl → var(--space-3xl)

Eyebrow

Element: .hero__eyebrow

Text: One private app for chat, payments, and mini apps.

Uses body-sm type.

Typography:

font-family: var(--font-sans);

font-size: var(--text-sm);

font-weight: 400;

color: var(--spixi-text-muted);

Layout:

align-self: stretch;

No extra margins beyond the stack spacing above.

Headline (display-lg)

Element: .hero__title

Text: Private chat, payments, and apps – under your control.

Typography:

Style: display-lg

font-family: var(--font-sans);

font-weight: 600;

font-size: var(--display-lg-size); (largest display token)

line-height: var(--display-lg-line-height);

color: var(--spixi-text-main);

Layout:

align-self: stretch;

Body text

Element: .hero__body

Text:
Spixi is a secure messenger with IXI wallet and mini apps. No phone number, no central servers – just encrypted communication from device to device.

Typography:

Style: body-md

font-family: var(--font-sans);

font-size: var(--text-md);

font-weight: 400;

color: var(--spixi-text-accent); (slightly softer white)

Layout:

align-self: stretch;

Max width similar to Figma (~628px).

Button group

Wrapper: .hero__actions

Layout:

display: flex;

flex-direction: row;

align-items: center;

gap: var(--space-sm); (Figma spacing/sm)

Buttons:

Left: primary solid – Download Spixi

Uses existing button component: .btn btn--primary btn--lg hero__cta-primary

Height: ~66px (from Figma btn-lg).

Contains icon on the left and text + subtext stacked.

Label: Download Spixi

Subtext: Available on desktop and mobile (smaller text inside the button).

Right: outline – Explore what you can do

Uses existing outline variant: .btn btn--outline-light btn--lg hero__cta-secondary

No new button styling: reuse global button CSS.

3. Right column – hero image (desktop)

Element: .hero__media

Align: center vertically with text.

Use auto width, no hard-coded horizontal offset.

Image element:

<img
  src="/assets/img/hero-img.png"
  alt="Spixi chat and wallet on mobile and desktop"
  class="hero__image"
/>


CSS:

.hero__image {
  width: 100%;
  max-width: 566px;
  aspect-ratio: 283 / 374;
  height: auto;
  display: block;
}


(Values are taken from Figma: width 566px, height 748px, aspect-ratio 283/374.)

4. Mobile layout (≤ 767px)

The mobile screenshot shows:

Nav bar with logo + outline “Download Spixi” + hamburger at the top.

Hero content stacked vertically:

Eyebrow

Headline

Body

Primary button (full width)

Secondary button (full width)

Hero image (full width) below buttons.

4.1 Section & padding

.hero

Keep same background gradient as desktop.

Reduce vertical padding slightly:

Top: var(--space-2xl)

Bottom: var(--space-2xl)

Horizontal padding:

Left/right: still spacing/super-lg mapped to var(--space-2xl) – visually matches nav.

.hero__inner

Switch to single-column layout:

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-2xl);
}


Order:

.hero__content

.hero__media (image)

4.2 Typography adjustments

Eyebrow .hero__eyebrow

Same as desktop or slightly reduced line height.

Left-aligned.

Headline .hero__title

Use one step smaller display token (display-md) to avoid wrapping every 2–3 words:

font-size: var(--display-md-size);

line-height: var(--display-md-line-height);

Left-aligned (as in screenshot).

Maintain same color.

Body .hero__body

Same as desktop (body-md).

Left-aligned; full width of container.

Vertical spacing inside .hero__content on mobile remains:

Eyebrow → headline: var(--space-md)

Headline → body: var(--space-md)

Body → button group: var(--space-2xl) to var(--space-3xl) (keep it airy like in Figma).

4.3 Buttons on mobile

.hero__actions

Layout changes from row to column:

@media (max-width: 767px) {
  .hero__actions {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-sm);
  }
}


Primary and secondary buttons:

Both full width inside the content container:

width: 100%;

justify-content: center;

Primary button is on top, outline second – matching screenshot.

Height still based on .btn--lg (around 56–66px depending on your tokens).

4.4 Image on mobile

.hero__media

Placed after buttons.

.hero__image

Same aspect-ratio rule as desktop.

Mobile behavior:

@media (max-width: 767px) {
  .hero__image {
    width: 100%;
    max-width: 100%;
    margin-top: var(--space-2xl);
  }
}


Image appears centered, filling the width of the content column.

Bottom of the hero image visually flows into the next section’s curved card (as in Figma; the bottom section will handle its own top radius).

5. HTML structure (for reference)

Copilot should aim to generate something like:

<section class="hero" id="top">
  <div class="hero__inner">
    <div class="hero__content">
      <p class="hero__eyebrow">One private app for chat, payments, and mini apps.</p>
      <h1 class="hero__title">
        Private chat, payments, and apps – under your control.
      </h1>
      <p class="hero__body">
        Spixi is a secure messenger with IXI wallet and mini apps. No phone number, no central servers – just encrypted communication from device to device.
      </p>
      <div class="hero__actions">
        <a href="/download" class="btn btn--primary btn--lg hero__cta-primary">
          <!-- icon + label + subtext according to existing button component -->
          Download Spixi
        </a>
        <a href="#features" class="btn btn--outline-light btn--lg hero__cta-secondary">
          Explore what you can do
        </a>
      </div>
    </div>

    <div class="hero__media">
      <img src="/assets/img/hero-img.png"
           alt="Spixi chat and wallet on mobile and desktop"
           class="hero__image">
    </div>
  </div>
</section>

6. Implementation notes for Copilot

Do not redefine typography or button styles inside hero; use existing tokens and .btn component classes.

Use class names exactly as listed:

.hero, .hero__inner, .hero__content, .hero__eyebrow, .hero__title, .hero__body, .hero__actions, .hero__media, .hero__image.

Respect spacing tokens:

spacing/super-lg → var(--space-2xl) for horizontal section padding.

spacing/md → var(--space-md) for text stack.

spacing/3xl → var(--space-3xl) for body → buttons on desktop.

spacing/sm → var(--space-sm) for button gap.

For mobile, use var(--space-2xl) as the main large gap between stacked elements.