# CTA Band Section - Implementation Guide

## Overview
Build the final call-to-action (CTA) section with app screenshot, headline, description, download button, and social proof.

**Figma References:**
- Desktop: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-8064`
- Mobile: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-8101`

---

## HTML Structure

```html
<section class="cta-band">
  <div class="cta-band__container">
    
    <!-- Desktop: Content Left, Image Right -->
    <!-- Mobile: Image Top, Content Bottom -->
    
    <div class="cta-band__content">
      <!-- Label -->
      <div class="cta-band__label-wrapper">
        <p class="cta-band__label">Start using Spixi today</p>
      </div>
      
      <!-- Heading & Description -->
      <div class="cta-band__text">
        <h2 class="cta-band__title">Take control of your chats, payments, and apps.</h2>
        <p class="cta-band__description">Get a private messenger with a built-in IXI wallet and mini apps, ready to use on desktop and mobile.</p>
      </div>
      
      <!-- CTA Button -->
      <div class="cta-band__cta">
        <button class="btn btn--primary btn--md">
          <svg class="btn__icon" width="24" height="24">
            <!-- Download icon SVG -->
          </svg>
          <span class="btn__label">Download Spixi</span>
        </button>
        <p class="cta-band__note">* Available for Android, iOS, MacOS & Windows</p>
      </div>
    </div>

    <!-- Image -->
    <div class="cta-band__image">
      <img src="assets/img/cta-image-desktop.png" alt="" class="cta-band__img-desktop">
      <img src="assets/img/cta-image-mobile.png" alt="" class="cta-band__img-mobile">
    </div>
    
  </div>

  <!-- Social Proof -->
  <div class="cta-band__proof">
    <svg class="proof__icon" width="16" height="16">
      <!-- Heart icon SVG -->
    </svg>
    <p class="proof__label">Loved by early users</p>
    <p class="proof__text">· 4.8 / 5 on Google Play (50+ reviews)</p>
  </div>
</section>
```

---

## CSS Implementation

```css
/* ==========================================
   CTA BAND SECTION
   ========================================== */

.cta-band {
  background: linear-gradient(to right, var(--colors/surface/01, #04070b), var(--colors/surface/01, #04070b));
  padding: var(--spacing/super-xxl, 120px) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing/xl, 24px);
}

.cta-band__container {
  max-width: 1344px;
  width: 100%;
  height: 474px;
  padding: 0 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing/3xl, 40px);
  border-radius: var(--corner-radius/xxl, 32px);
}

/* Content Area */
.cta-band__content {
  width: 628px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
}

.cta-band__label-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: var(--spacing/xs, 8px);
}

.cta-band__label {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/accent, #c987d9);
  margin: 0;
}

.cta-band__text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
  color: var(--colors/text/01, #f9fafb);
  white-space: pre-wrap;
}

.cta-band__title {
  font-family: var(--display/md/font-family, 'Sora', sans-serif);
  font-weight: var(--display/md/font-weight, 500);
  font-size: var(--display/md/font-size, 44px);
  line-height: var(--display/md/line-height, 52px);
  letter-spacing: var(--display/md/tracking, -2px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
}

.cta-band__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
}

/* CTA Area */
.cta-band__cta {
  width: 511px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/sm, 12px);
}

.cta-band__cta .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  height: 48px;
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
  background-color: var(--colors/surface/action/default, #0b70d5);
  color: var(--colors/text/on-action, #f9fafb);
  border: none;
  border-radius: var(--corner-radius/md, 12px);
  cursor: pointer;
}

.cta-band__cta .btn__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.cta-band__cta .btn__label {
  font-family: var(--label/md/font-family, 'Inter', sans-serif);
  font-weight: var(--label/md/font-weight, 600);
  font-size: var(--label/md/font-size, 16px);
  line-height: var(--label/md/line-height, 24px);
  letter-spacing: var(--tracking/global/label-md, -0.5px);
  text-align: center;
  padding: 0 var(--spacing/xs, 8px);
}

.cta-band__note {
  font-family: var(--body/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--body/xs/font-weight, 400);
  font-size: var(--body/xs/font-size, 12px);
  line-height: var(--body/xs/line-height, 16px);
  letter-spacing: var(--tracking/global/body-xs, 0px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
}

/* Image Area */
.cta-band__image {
  width: 540px;
  height: 632px;
  position: relative;
}

.cta-band__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}

.cta-band__img-desktop {
  display: block;
}

.cta-band__img-mobile {
  display: none;
}

/* Social Proof */
.cta-band__proof {
  display: flex;
  align-items: center;
  gap: var(--spacing/xxs, 4px);
  opacity: 0.75;
}

.proof__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.proof__label {
  font-family: var(--label/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--label/xs/font-weight, 600);
  font-size: var(--label/xs/font-size, 12px);
  line-height: var(--label/xs/line-height, 16px);
  letter-spacing: var(--tracking/global/label-xs, -0.5px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
}

.proof__text {
  font-family: var(--body/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--body/xs/font-weight, 400);
  font-size: var(--body/xs/font-size, 12px);
  line-height: var(--body/xs/line-height, 16px);
  letter-spacing: var(--tracking/global/body-xs, 0px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
}

/* ==========================================
   MOBILE RESPONSIVE (≤768px)
   ========================================== */

@media (max-width: 768px) {
  .cta-band {
    padding: var(--spacing/3xl, 40px) 0;
  }

  .cta-band__container {
    flex-direction: column-reverse;
    height: auto;
    padding: var(--spacing/xxl, 32px) var(--spacing/md, 16px);
    gap: var(--spacing/xl, 24px);
  }

  .cta-band__content {
    width: 100%;
    order: 2;
  }

  .cta-band__title {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.5px;
  }

  .cta-band__cta {
    width: 100%;
  }

  .cta-band__cta .btn {
    width: 100%;
  }

  .cta-band__image {
    width: 269px;
    height: 314px;
    order: 1;
  }

  .cta-band__img-desktop {
    display: none;
  }

  .cta-band__img-mobile {
    display: block;
  }
}
```

---

## CSS Variables Used

### Spacing
```css
--spacing/xxs: 4px
--spacing/xs: 8px
--spacing/sm: 12px
--spacing/md: 16px
--spacing/xl: 24px
--spacing/xxl: 32px
--spacing/3xl: 40px
--spacing/super-xxl: 120px
```

### Colors
```css
--colors/surface/01: #04070b       /* Background */
--colors/text/01: #f9fafb          /* Primary text */
--colors/text/02: #d4d4d8          /* Secondary text */
--colors/text/accent: #c987d9      /* Purple label */
--colors/text/on-action: #f9fafb   /* Button text */
--colors/surface/action/default: #0b70d5  /* Button blue */
```

### Typography
```css
/* Label Small */
--label/sm/font-family: 'Inter'
--label/sm/font-weight: 600
--label/sm/font-size: 14px
--label/sm/line-height: 20px
--tracking/global/label-sm: -0.5px

/* Display Medium */
--display/md/font-family: 'Sora'
--display/md/font-weight: 500
--display/md/font-size: 44px (desktop) / 28px (mobile)
--display/md/line-height: 52px (desktop) / 36px (mobile)
--display/md/tracking: -2px (desktop) / -1.5px (mobile)

/* Body Medium */
--body/md/font-family: 'Inter'
--body/md/font-weight: 400
--body/md/font-size: 16px
--body/md/line-height: 24px
--tracking/global/body-md: 0px

/* Label Medium */
--label/md/font-family: 'Inter'
--label/md/font-weight: 600
--label/md/font-size: 16px
--label/md/line-height: 24px
--tracking/global/label-md: -0.5px

/* Body Extra Small */
--body/xs/font-family: 'Inter'
--body/xs/font-weight: 400
--body/xs/font-size: 12px
--body/xs/line-height: 16px
--tracking/global/body-xs: 0px

/* Label Extra Small */
--label/xs/font-family: 'Inter'
--label/xs/font-weight: 600
--label/xs/font-size: 12px
--label/xs/line-height: 16px
--tracking/global/label-xs: -0.5px
```

### Border Radius
```css
--corner-radius/md: 12px   /* Button */
--corner-radius/xxl: 32px  /* Container */
```

---

## Design Specs

### Desktop Layout
- **Container max-width:** 1344px
- **Container height:** 474px
- **Container padding:** 0 31px
- **Container gap:** 40px
- **Content width:** 628px
- **CTA width:** 511px
- **Image dimensions:** 540×632px
- **Section padding:** 120px (top/bottom), 0 (sides)

### Mobile Layout (≤768px)
- **Container:** Vertical stack, auto height
- **Container padding:** 32px 16px
- **Container gap:** 24px
- **Image first (order: 1), content second (order: 2)**
- **Image dimensions:** 269×314px
- **Button:** Full width
- **Section padding:** 40px (top/bottom), 0 (sides)

### Typography Adjustments (Mobile)
- **Title:** 44px → 28px
- **Line height:** 52px → 36px
- **Letter spacing:** -2px → -1.5px

---

## Assets Required

### Images
Place in `assets/img/`:
- `cta-image-desktop.png` (540×632px) - Phone mockup with app interface
- `cta-image-mobile.png` (269×314px) - Same mockup, smaller size

### Icons (SVG)
Inline SVGs needed:

**Download Icon (24×24px):**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
```

**Heart Icon (16×16px):**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 14.25s-5.25-3.5-5.25-7.5c0-2.5 1.75-3.5 3.25-3.5 1.25 0 2 .75 2 .75s.75-.75 2-.75c1.5 0 3.25 1 3.25 3.5 0 4-5.25 7.5-5.25 7.5z" 
        fill="#d4d4d8"/>
</svg>
```

---

## Content

### Label
"Start using Spixi today"

### Title
"Take control of your chats, payments, and apps."

### Description
"Get a private messenger with a built-in IXI wallet and mini apps, ready to use on desktop and mobile."

### Button
"Download Spixi"

### Note
"* Available for Android, iOS, MacOS & Windows"

### Social Proof
- Label: "Loved by early users"
- Text: "· 4.8 / 5 on Google Play (50+ reviews)"

---

## Button Reference

Use the existing button component from `styles.css`:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing/xs, 8px);
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
  border-radius: var(--corner-radius/md, 12px);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background-color: var(--colors/surface/action/default, #0b70d5);
  color: var(--colors/text/on-action, #f9fafb);
}

.btn--primary:hover {
  background-color: #095ba8;
}

.btn--md {
  height: 48px;
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
}
```

---

## Layout Behavior

### Desktop
1. **Horizontal layout:** Content left, image right
2. **Fixed container height:** 474px
3. **Content width:** 628px (fixed)
4. **Image width:** 540px (fixed)
5. **Centered container:** Max 1344px

### Mobile
1. **Vertical layout:** Image top, content bottom
2. **Auto height:** Content expands
3. **Full width:** Content and button stretch
4. **Image first:** Visual hierarchy
5. **Smaller image:** 269×314px

---

## Implementation Checklist

- [ ] Create HTML structure with section, container, content, image
- [ ] Add CSS with all variables
- [ ] Use existing button styles from `styles.css`
- [ ] Add 2 images to `assets/img/` (desktop and mobile)
- [ ] Add download icon SVG (inline or separate file)
- [ ] Add heart icon SVG (inline or separate file)
- [ ] Test desktop layout (side-by-side)
- [ ] Test mobile layout (stacked, image first)
- [ ] Verify typography matches design
- [ ] Verify button uses existing styles
- [ ] Verify social proof displays correctly
- [ ] Check responsive breakpoint at 768px

---

## Integration Notes

1. **Reuse existing button styles** - Don't recreate, reference `.btn--primary` and `.btn--md`
2. **Background gradient** - Simple horizontal gradient (barely visible, mostly solid)
3. **Order on mobile** - Image appears above content (use `flex-direction: column-reverse`)
4. **Image swap** - Desktop and mobile use different images
5. **Full-width button on mobile** - Button stretches to container width
6. **Social proof opacity** - Set to 75% for subtle appearance
7. **No JavaScript required** - Pure HTML/CSS responsive design

---

## Final Notes

- This is the **final section** of the homepage
- Background is **solid dark** with minimal gradient
- Button uses **existing component styles**
- Layout is **simple**: content + image (desktop), or image + content (mobile)
- Social proof is **centered below** the main container
- All spacing, colors, and typography use **CSS variables**
