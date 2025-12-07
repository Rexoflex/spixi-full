# Nav bar / desktop – spec

Component name in Figma: `nav-bar/desktop`

Layout:
- Full-width bar, centered content.
- Content max width: 1120–1440px.
- Height: 80px including vertical padding.
- Background when on top of page: `transparent` 
- background when scrolling up --surface01
- hidden when scrolling down

Structure:
- Left: logo lockup (icon + text “Spixi”).
- Middle: nav links (Features, How it works, Mini Apps, Technology, FAQ).
- Right: primary outline button from styles.css “Download Spixi”.

Spacing:
- Horizontal padding of container: `spacing/super-lg`
- Gap between nav items: `spacing/md`
- navbar links are centered, logo is left aligned, download button is right aligned.

Typography:
- Nav links: text button without icon
- Logo text: font-family: var(--heading-md-font-family, Inter);
font-size: var(--heading-md-font-size, 24px);
font-style: normal;
font-weight: 600;
- Hover state: taken from button component

CTA button:
- Uses global `.btn` styles.
- Variant: `.btn--outline-light`:
  - Border: 1px solid `rgba(255, 255, 255, 0.6)`.
  - Background: transparent.
  - Text color: `--spixi-text-main`.
  - Hover: slightly brighter border + soft background.

Behavior:
- Links are plain anchors.
- Active section can optionally use `.nav-link--active` (bolder or accent color).
