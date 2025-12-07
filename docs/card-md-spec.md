# Card-MD Component - GitHub Copilot Instructions

## Component Overview
Build a medium-sized card component (`card-md`) for the Spixi website design system. This is a dark-themed card with an icon, title, and body text, designed for feature displays.

## Visual Reference
![Card-MD Component](https://www.figma.com/api/mcp/asset/400f77ed-a27b-4a2f-8a25-8c4e24deb3b2)

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=56-723`

---

## Technology Stack
- **Framework:** Plain HTML/CSS (NO frameworks, NO Tailwind)
- **Structure:** `/components/card-md/` folder
- **Files Required:**
  - `card-md.html` - Component markup
  - `card-md.css` - Component styles
  - `README.md` - Usage documentation

---

## Component Specifications

### 1. Container
```
Dimensions: 394.5px × 276px
Background: var(--colors/surface/02, #081016)
Border: 1px solid var(--colors/outline/02, #172330)
Border Radius: var(--corner-radius/xxl, 32px)
Padding: var(--spacing/xl, 24px)
Display: flex
Flex Direction: column
Gap: var(--spacing/xl, 24px)
```

### 2. Icon Container
```
Background: var(--colors/surface/01, #04070b)
Padding: var(--spacing/sm, 12px)
Border Radius: var(--corner-radius/xxl, 32px)
Box Shadow: 0px 0px 12px 0px rgba(216, 182, 250, 0.25)
Width: 56px (12px padding × 2 + 32px icon)
Height: 56px (12px padding × 2 + 32px icon)
Flex Shrink: 0
```

### 3. Icon (SVG or Image)
```
Size: 32px × 32px
Display: block
Object Fit: contain
```

**Default Icon Color:** `#ad4fc4` (purple accent)

### 4. Text Container
```
Display: flex
Flex Direction: column
Gap: 16px
Width: 100%
Color: var(--colors/text/01, #f9fafb)
```

### 5. Title
```
Font Family: var(--heading/md/font-family, 'Inter', sans-serif)
Font Weight: var(--heading/md/font-weight, 600)
Font Size: var(--heading/md/font-size, 24px)
Line Height: var(--heading/md/line-height, 36px)
Letter Spacing: var(--tracking/heading/heading-md, -1px)
Color: var(--colors/text/01, #f9fafb)
White Space: pre-wrap
```

### 6. Body Text
```
Font Family: var(--body/md/font-family, 'Inter', sans-serif)
Font Weight: var(--body/md/font-weight, 400)
Font Size: var(--body/md/font-size, 16px)
Line Height: var(--body/md/line-height, 24px)
Letter Spacing: var(--tracking/global/body-md, 0px)
Color: var(--colors/text/01, #f9fafb)
White Space: pre-wrap
```

---

## Component Props / Attributes

### Required Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data-icon` | string | (required) | Icon identifier or SVG path |
| `data-title` | string | (required) | Card title text |
| `data-body` | string | (required) | Card body/description text |

### Optional Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data-icon-color` | string | `#ad4fc4` | Icon fill color |
| `data-theme` | string | `dark` | Color theme (only dark supported) |

---

## HTML Structure

```html
<div class="card-md" 
     data-icon="chat"
     data-title="Privacy First"
     data-body="End-to-end encrypted messaging with no phone number required">
  
  <div class="card-md__icon-container">
    <img class="card-md__icon" 
         src="/assets/icons/chat-icon.svg" 
         alt="">
  </div>
  
  <div class="card-md__text">
    <h3 class="card-md__title">Privacy First</h3>
    <p class="card-md__body">End-to-end encrypted messaging with no phone number required</p>
  </div>
  
</div>
```

---

## CSS Implementation

```css
/* Card Container */
.card-md {
  width: 394.5px;
  height: 276px;
  background-color: var(--colors/surface/02, #081016);
  border: 1px solid var(--colors/outline/02, #172330);
  border-radius: var(--corner-radius/xxl, 32px);
  padding: var(--spacing/xl, 24px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xl, 24px);
  overflow: hidden;
}

/* Icon Container with Glow */
.card-md__icon-container {
  background-color: var(--colors/surface/01, #04070b);
  padding: var(--spacing/sm, 12px);
  border-radius: var(--corner-radius/xxl, 32px);
  box-shadow: 0px 0px 12px 0px rgba(216, 182, 250, 0.25);
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icon */
.card-md__icon {
  width: 32px;
  height: 32px;
  display: block;
  object-fit: contain;
}

/* Text Container */
.card-md__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  color: var(--colors/text/01, #f9fafb);
}

/* Title */
.card-md__title {
  font-family: var(--heading/md/font-family, 'Inter', sans-serif);
  font-weight: var(--heading/md/font-weight, 600);
  font-size: var(--heading/md/font-size, 24px);
  line-height: var(--heading/md/line-height, 36px);
  letter-spacing: var(--tracking/heading/heading-md, -1px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  white-space: pre-wrap;
}

/* Body Text */
.card-md__body {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  white-space: pre-wrap;
}
```

---

## Responsive Behavior

### Desktop (Default)
- Width: 394.5px (fixed)
- Height: 276px (fixed)
- All specs as above

### Mobile (≤768px)
```css
@media (max-width: 768px) {
  .card-md {
    width: 100%;
    height: auto;
    min-height: 276px;
  }
}
```

---

## Usage Examples

### Example 1: Privacy Card
```html
<div class="card-md">
  <div class="card-md__icon-container">
    <img class="card-md__icon" src="/assets/icons/privacy-icon.svg" alt="">
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Privacy First</h3>
    <p class="card-md__body">End-to-end encrypted messaging with no phone number required</p>
  </div>
</div>
```

### Example 2: Mini Apps Card
```html
<div class="card-md">
  <div class="card-md__icon-container">
    <img class="card-md__icon" src="/assets/icons/apps-icon.svg" alt="">
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Mini Apps</h3>
    <p class="card-md__body">Decentralized apps integrated directly into your messenger</p>
  </div>
</div>
```

### Example 3: IXI Wallet Card
```html
<div class="card-md">
  <div class="card-md__icon-container">
    <img class="card-md__icon" src="/assets/icons/wallet-icon.svg" alt="">
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">IXI Wallet</h3>
    <p class="card-md__body">Built-in cryptocurrency wallet for seamless transactions</p>
  </div>
</div>
```

### Example 4: Security Card
```html
<div class="card-md">
  <div class="card-md__icon-container">
    <img class="card-md__icon" src="/assets/icons/security-icon.svg" alt="">
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Security</h3>
    <p class="card-md__body">Military-grade encryption protecting your communications</p>
  </div>
</div>
```

---

## Icon Requirements

### Supported Icons
Create SVG icons in `/assets/icons/` with these names:
- `privacy-icon.svg` (lock or shield)
- `apps-icon.svg` (grid or app squares)
- `wallet-icon.svg` (wallet or coin)
- `security-icon.svg` (shield with checkmark)
- `chat-icon.svg` (chat bubbles - default)

### Icon Specifications
```
Size: 32px × 32px viewBox
Fill Color: #ad4fc4 (purple accent) or customizable
Stroke: None (filled icons)
Format: Optimized SVG
```

### Default Icon SVG Template
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="[ICON PATH DATA]" fill="#ad4fc4"/>
</svg>
```

---

## Layout Context

### Used In Homepage Features Section
The card-md component is used in a **2×2 grid layout**:

```css
.features__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing/xxl, 32px);
  max-width: 1280px;
}
```

### Grid Behavior
- Desktop: 2 columns, 2 rows
- Mobile (≤768px): 1 column, 4 rows

---

## Design System Integration

### CSS Variables Required
Ensure these variables are defined in `variables.css`:

```css
/* Spacing */
--spacing/sm: 12px;
--spacing/xl: 24px;
--spacing/xxl: 32px;

/* Colors */
--colors/surface/01: #04070b;
--colors/surface/02: #081016;
--colors/text/01: #f9fafb;
--colors/outline/02: #172330;

/* Border Radius */
--corner-radius/xxl: 32px;

/* Typography */
--heading/md/font-family: 'Inter';
--heading/md/font-weight: 600;
--heading/md/font-size: 24px;
--heading/md/line-height: 36px;
--tracking/heading/heading-md: -1px;

--body/md/font-family: 'Inter';
--body/md/font-weight: 400;
--body/md/font-size: 16px;
--body/md/line-height: 24px;
--tracking/global/body-md: 0px;
```

---

## Accessibility Requirements

### Semantic HTML
- Use `<article>` or `<div>` for card container
- Use `<h3>` for title (heading hierarchy)
- Use `<p>` for body text
- Use `alt=""` for decorative icons (meaningful text already in title)

### ARIA Attributes
```html
<div class="card-md" role="article">
  <div class="card-md__icon-container" aria-hidden="true">
    <img class="card-md__icon" src="..." alt="">
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title" id="card-title-1">Title</h3>
    <p class="card-md__body" id="card-body-1">Body text</p>
  </div>
</div>
```

### Keyboard Navigation
- Card should be focusable if interactive: `tabindex="0"`
- Add `:hover` and `:focus` states if clickable
- Ensure sufficient color contrast (already meets WCAG AA)

---

## Testing Checklist

- [ ] Component renders with all required props
- [ ] CSS variables fallback to hardcoded values
- [ ] Icon displays correctly (32×32px)
- [ ] Icon glow effect is visible (purple shadow)
- [ ] Title uses correct typography (24px, -1px tracking)
- [ ] Body text uses correct typography (16px, 24px line-height)
- [ ] Card maintains 394.5×276px dimensions on desktop
- [ ] Card becomes full-width on mobile (≤768px)
- [ ] Border and border-radius render correctly
- [ ] Dark theme colors apply properly
- [ ] Text wraps correctly (white-space: pre-wrap)
- [ ] Grid layout works with 2×2 cards on desktop
- [ ] Grid stacks to 1 column on mobile
- [ ] Component works without JavaScript

---

## File Structure

```
/components/card-md/
├── card-md.html          # Component markup
├── card-md.css           # Component styles
├── README.md             # This documentation
└── examples.html         # Usage examples

/assets/icons/
├── privacy-icon.svg
├── apps-icon.svg
├── wallet-icon.svg
├── security-icon.svg
└── chat-icon.svg
```

---

## Integration Instructions

### 1. Include CSS
```html
<link rel="stylesheet" href="/variables.css">
<link rel="stylesheet" href="/components/card-md/card-md.css">
```

### 2. Use Component
```html
<div class="card-md">
  <div class="card-md__icon-container">
    <img class="card-md__icon" src="/assets/icons/privacy-icon.svg" alt="">
  </div>
  <div class="card-md__text">
    <h3 class="card-md__title">Your Title</h3>
    <p class="card-md__body">Your description</p>
  </div>
</div>
```

### 3. Grid Layout
```html
<div class="features__grid">
  <!-- Card 1 -->
  <div class="card-md">...</div>
  
  <!-- Card 2 -->
  <div class="card-md">...</div>
  
  <!-- Card 3 -->
  <div class="card-md">...</div>
  
  <!-- Card 4 -->
  <div class="card-md">...</div>
</div>
```

---

## Design Tokens Summary

| Token | Value | Usage |
|-------|-------|-------|
| Card Width | 394.5px | Container width |
| Card Height | 276px | Container height |
| Card Padding | 24px | Inner spacing |
| Card Gap | 24px | Space between icon and text |
| Icon Container Size | 56px | 32px icon + 12px padding × 2 |
| Icon Size | 32px | Actual icon dimensions |
| Icon Padding | 12px | Padding around icon |
| Text Gap | 16px | Space between title and body |
| Title Font Size | 24px | Heading size |
| Title Line Height | 36px | Heading line height |
| Title Tracking | -1px | Letter spacing |
| Body Font Size | 16px | Body text size |
| Body Line Height | 24px | Body line height |
| Border Width | 1px | Card border |
| Border Radius | 32px | Corner radius |
| Glow Blur | 12px | Icon shadow blur |
| Glow Color | rgba(216,182,250,0.25) | Purple glow |

---

## Known Variants

### Current Status
- ✅ **Default Dark Theme** - Implemented
- ⏸️ Light Theme - Not in design system yet
- ⏸️ Interactive/Hover States - Not specified in design
- ⏸️ Compact Size - Only medium size exists

### Future Variants (Not Implemented)
If additional variants are needed:
1. Add size modifiers: `.card-md--compact`, `.card-md--large`
2. Add theme modifiers: `.card-md--light`
3. Add state modifiers: `.card-md--hover`, `.card-md--active`

---

## Common Issues & Solutions

### Issue 1: Icon not displaying
**Solution:** Check icon path and ensure SVG is properly formatted

### Issue 2: Box shadow not visible
**Solution:** Ensure parent container doesn't have `overflow: hidden`

### Issue 3: Text overflow
**Solution:** Card height should be `auto` with `min-height: 276px` for long text

### Issue 4: CSS variables not working
**Solution:** Ensure `variables.css` is loaded before `card-md.css`

### Issue 5: Card not responsive
**Solution:** Add mobile media query and set width to `100%`

---

## Performance Notes

- ✅ No JavaScript required
- ✅ Pure CSS implementation
- ✅ Lightweight (< 2KB CSS)
- ✅ SVG icons for scalability
- ✅ Hardware-accelerated box-shadow
- ✅ No external dependencies

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**CSS Features Used:**
- CSS Variables (custom properties)
- Flexbox
- Border-radius
- Box-shadow
- Media queries

---

## Version History

**v1.0.0** (Current)
- Initial release
- Dark theme only
- Fixed dimensions (394.5×276px)
- Icon + Title + Body layout
- Responsive mobile support

---

## Questions for Designer/PM

1. Should cards be clickable/interactive?
2. Are hover states needed?
3. Will a light theme be added?
4. Can card height be flexible for longer text?
5. Are additional icon styles needed beyond default purple?

---

## Copilot Instructions Summary

**Build a card-md component with:**
1. Fixed 394.5×276px container (desktop)
2. Dark background (#081016) with border (#172330)
3. Icon container (56×56px) with purple glow shadow
4. 32×32px icon space
5. Title (24px, weight 600, -1px tracking)
6. Body text (16px, weight 400)
7. Use CSS variables with fallbacks
8. Make responsive (full-width on mobile)
9. No JavaScript required
10. Follow BEM naming convention

**Key Files to Create:**
- `/components/card-md/card-md.html`
- `/components/card-md/card-md.css`
- `/components/card-md/README.md`
- `/assets/icons/*.svg` (icon assets)

**Critical Specs:**
- Container: 394.5×276px, padding 24px, gap 24px
- Icon: 32×32px with 12px padding (56×56px total)
- Typography: Inter font, heading 24px/-1px, body 16px/24px
- Colors: Use CSS variables with fallbacks
- Shadow: 0px 0px 12px rgba(216,182,250,0.25)
