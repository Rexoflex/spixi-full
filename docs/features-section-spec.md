# Features Section - Implementation Guide

## Overview
Build the "Why people use Spixi" features section with 4 cards in a 2×2 grid layout, with decorative illustrations on the left side.

**Figma References:**
- Desktop: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=249-4798`
- Mobile: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=252-3318`

---

## HTML Structure

```html
<section class="features">
  <div class="features__container">
    
    <!-- Left: Header -->
    <div class="features__header">
      <p class="features__label">Why people use Spixi</p>
      <h2 class="features__title">Do more in one private app.</h2>
    </div>

    <!-- Right: Cards Grid -->
    <div class="features__cards">
      
      <!-- Row 1 -->
      <div class="features__row">
        
        <!-- Card 1: Privacy -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <img src="assets/icons/chat-icon.svg" alt="" class="card-md__icon">
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">Privacy by design</h3>
            <p class="card-md__body">Talk to friends, family, or your team without sharing a phone number or email. Your Spixi ID is all you need, and messages stay end-to-end encrypted.</p>
          </div>
        </div>

        <!-- Card 2: Mini Apps -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <img src="assets/icons/apps-icon.svg" alt="" class="card-md__icon">
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">Mini apps you can build & use</h3>
            <p class="card-md__body">Use mini apps for everyday things like gate access, local AI chat, 2FA tools, or games. Add your own for your community or company.</p>
          </div>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="features__row">
        
        <!-- Card 3: Wallet -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <img src="assets/icons/wallet-icon.svg" alt="" class="card-md__icon">
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">IXI wallet built in</h3>
            <p class="card-md__body">Send IXI in the same place you chat. Pay for services, apps, or tip creators, and see everything in one secure wallet inside Spixi.</p>
          </div>
        </div>

        <!-- Card 4: Security -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <img src="assets/icons/security-icon.svg" alt="" class="card-md__icon">
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">Future-ready security</h3>
            <p class="card-md__body">Spixi's encryption uses post-quantum-ready cryptography to stay secure as computers get more powerful. You get long-term protection without extra effort.</p>
          </div>
        </div>
      </div>
      
    </div>

    <!-- Decorative Illustrations (Desktop Only) -->
    <div class="features__illustrations">
      <img src="assets/img/illustration-vr.png" alt="" class="features__illustration features__illustration--top">
      <img src="assets/img/illustration-newsletter.png" alt="" class="features__illustration features__illustration--middle">
      <img src="assets/img/illustration-payment.png" alt="" class="features__illustration features__illustration--bottom">
    </div>
    
  </div>
</section>
```

---

## CSS Implementation

```css
/* ==========================================
   FEATURES SECTION
   ========================================== */

.features {
  background: linear-gradient(135deg, #1a1147 0%, #0a2540 50%, #0f3460 100%);
  padding: var(--spacing/super-xxl, 120px) var(--spacing/xxl, 32px) var(--spacing/super-lg, 80px);
  border-radius: var(--corner-radius/xxl, 32px);
  position: relative;
  overflow: hidden;
  margin-bottom: calc(-1 * var(--spacing/super-lg, 80px));
  z-index: 1;
}

.features__container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: var(--spacing/super, 64px);
  position: relative;
}

/* Header (Left Side) */
.features__header {
  width: 379px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xs, 2px);
}

.features__label {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/accent, #c987d9);
  padding-bottom: var(--spacing/xs, 8px);
  margin: 0;
}

.features__title {
  font-family: var(--display/md/font-family, 'Sora', sans-serif);
  font-weight: var(--display/md/font-weight, 500);
  font-size: var(--display/md/font-size, 44px);
  line-height: var(--display/md/line-height, 52px);
  letter-spacing: var(--display/md/tracking, -2px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  white-space: pre-wrap;
}

/* Cards Grid (Right Side) */
.features__cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xxl, 32px);
}

.features__row {
  display: flex;
  gap: var(--spacing/xxl, 32px);
  height: 340px;
}

.features__row .card-md {
  flex: 1;
  min-width: 0;
}

/* Decorative Illustrations (Desktop Only) */
.features__illustrations {
  position: absolute;
  left: -32.5px;
  top: 168px;
  width: 444px;
  height: 624px;
  pointer-events: none;
}

.features__illustration {
  position: absolute;
  opacity: 0.4;
}

.features__illustration--top {
  width: 270px;
  height: 270px;
  left: 13px;
  top: 0;
}

.features__illustration--middle {
  width: 224px;
  height: 224px;
  right: 0;
  top: 246px;
}

.features__illustration--bottom {
  width: 223px;
  height: 223px;
  left: 0;
  top: 428px;
}

/* ==========================================
   MOBILE RESPONSIVE (≤768px)
   ========================================== */

@media (max-width: 768px) {
  .features {
    padding: var(--spacing/super-lg, 80px) var(--spacing/md, 16px);
    margin-bottom: 0;
  }

  .features__container {
    flex-direction: column;
    gap: var(--spacing/xxl, 32px);
  }

  .features__header {
    width: 100%;
  }

  .features__title {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.5px;
  }

  .features__cards {
    gap: var(--spacing/xxl, 32px);
  }

  .features__row {
    flex-direction: column;
    height: auto;
    gap: var(--spacing/xxl, 32px);
  }

  /* Hide illustrations on mobile */
  .features__illustrations {
    display: none;
  }
}
```

---

## Background Gradient Details

**Desktop Gradient:**
```css
background: linear-gradient(135deg, #1a1147 0%, #0a2540 50%, #0f3460 100%);
```

This creates a diagonal gradient from:
- Top-left: Dark purple `#1a1147`
- Center: Dark blue `#0a2540`
- Bottom-right: Medium blue `#0f3460`

**Alternative (if gradient doesn't match):**
```css
background: linear-gradient(135deg, 
  rgba(26, 17, 71, 1) 0%,
  rgba(10, 37, 64, 1) 50%,
  rgba(15, 52, 96, 1) 100%
);
```

---

## Design Specs

### Desktop Layout
- **Container max-width:** 1280px
- **Padding:** 120px (top), 80px (bottom), 32px (sides)
- **Border radius:** 32px
- **Gap between header and cards:** 64px
- **Gap between card rows:** 32px
- **Gap between cards in row:** 32px
- **Header width:** 379px (fixed)
- **Card height:** 340px (fixed)

### Mobile Layout (≤768px)
- **Padding:** 80px (top/bottom), 16px (sides)
- **All elements stack vertically**
- **Cards:** Full width, auto height
- **Title font size:** 28px (from 44px)
- **Illustrations:** Hidden

### Typography
- **Label:** 14px, 600 weight, -0.5px tracking, purple accent
- **Title:** 44px desktop / 28px mobile, 500 weight, -2px / -1.5px tracking
- **Card title:** 24px, 600 weight, -1px tracking
- **Card body:** 16px, 400 weight, 24px line-height

### Colors
- **Gradient:** `linear-gradient(135deg, #1a1147 0%, #0a2540 50%, #0f3460 100%)`
- **Label:** `var(--colors/text/accent, #c987d9)`
- **Title:** `var(--colors/text/01, #f9fafb)`
- **Cards:** Use existing card-md styles

---

## Assets Required

### Icons (SVG)
Place in `assets/icons/`:
- `chat-icon.svg` (Privacy card)
- `apps-icon.svg` (Mini Apps card)
- `wallet-icon.svg` (Wallet card)
- `security-icon.svg` (Security card)

### Illustrations (PNG - Desktop Only)
Place in `assets/img/`:
- `illustration-vr.png` (270×270px, top-left, VR/technology theme)
- `illustration-newsletter.png` (224×224px, middle-right, newsletter/product theme)
- `illustration-payment.png` (223×223px, bottom-left, payment/card theme)

**Note:** Illustrations have 40% opacity applied via CSS

---

## Integration Notes

1. **Use existing card-md component** - Don't recreate, just use the markup
2. **Gradient is critical** - Ensure the diagonal gradient matches design
3. **Z-index:** Set to 1 (hero section should be z-index: 2)
4. **Negative margin bottom:** `-80px` to overlap with next section
5. **Illustrations are decorative** - Hide on mobile, `pointer-events: none`
6. **Border radius:** 32px only on desktop

---

## Card Content

### Card 1: Privacy by design
- **Icon:** `chat-icon.svg`
- **Title:** "Privacy by design"
- **Body:** "Talk to friends, family, or your team without sharing a phone number or email. Your Spixi ID is all you need, and messages stay end-to-end encrypted."

### Card 2: Mini apps you can build & use
- **Icon:** `apps-icon.svg`
- **Title:** "Mini apps you can build & use"
- **Body:** "Use mini apps for everyday things like gate access, local AI chat, 2FA tools, or games. Add your own for your community or company."

### Card 3: IXI wallet built in
- **Icon:** `wallet-icon.svg`
- **Title:** "IXI wallet built in"
- **Body:** "Send IXI in the same place you chat. Pay for services, apps, or tip creators, and see everything in one secure wallet inside Spixi."

### Card 4: Future-ready security
- **Icon:** `security-icon.svg`
- **Title:** "Future-ready security"
- **Body:** "Spixi's encryption uses post-quantum-ready cryptography to stay secure as computers get more powerful. You get long-term protection without extra effort."

---

## Implementation Checklist

- [ ] Create HTML structure with features section
- [ ] Add CSS with gradient background
- [ ] Use existing card-md component (4 times)
- [ ] Add 4 icon SVGs to `assets/icons/`
- [ ] Add 3 illustration PNGs to `assets/img/` (desktop only)
- [ ] Apply CSS variables for spacing, colors, typography
- [ ] Set proper z-index and negative bottom margin
- [ ] Test desktop layout (2×2 grid)
- [ ] Test mobile layout (stacked cards)
- [ ] Verify gradient displays correctly
- [ ] Verify illustrations show on desktop, hide on mobile
- [ ] Verify text content matches exactly

---

## Final Notes

- **No JavaScript required** - Pure HTML/CSS
- **Reuse card-md component** - Already built, just copy HTML
- **Gradient angle:** 135 degrees (diagonal from top-left to bottom-right)
- **Illustrations opacity:** 40% via CSS
- **Mobile breakpoint:** 768px