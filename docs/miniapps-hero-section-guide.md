# Mini Apps Hero Section - Implementation Guide

## Overview
Build the hero section for the Mini Apps page with navbar, headline content, CTA buttons, and layered phone mockup images.

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-14132`

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Apps - Spixi</title>
    <meta name="description" content="Browse and build mini apps for Spixi messenger">
    <link rel="stylesheet" href="variables.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<section class="miniapps-hero">
  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="navbar__container">
      <!-- Logo -->
      <a href="index.html" class="navbar__logo">
        <img src="assets/icons/spixi-logo.svg" alt="Spixi" class="navbar__logo-icon">
        <span class="navbar__logo-text">Spixi</span>
      </a>

      <!-- Navigation Links -->
      <div class="navbar__nav">
        <a href="index.html#features" class="navbar__link">Features</a>
        <a href="help.html" class="navbar__link">Help Center</a>
        <a href="mini-apps.html" class="navbar__link navbar__link--active">Mini Apps</a>
        <a href="technology.html" class="navbar__link">Technology</a>
      </div>

      <!-- CTA Button -->
      <div class="navbar__cta">
        <a href="#download" class="btn btn--secondary-outline btn--md">Download Spixi</a>
      </div>
    </div>
  </nav>

  <!-- Hero Content Container -->
  <div class="miniapps-hero__container">
    <!-- Left: Content -->
    <div class="miniapps-hero__content">
      <div class="miniapps-hero__text">
        <p class="miniapps-hero__subtitle">Browse Mini Apps, try them in Spixi, or build your own.</p>
        <h1 class="miniapps-hero__title">Apps that live where you already chat.</h1>
        <p class="miniapps-hero__description">Mini Apps add tools and games to Spixi without switching apps. Play with friends, share utilities in chat, or build custom experiences for your team or community.</p>
      </div>

      <div class="miniapps-hero__cta">
        <button class="btn btn--primary btn--lg">
          <svg class="btn__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="btn__label">Visit app directory</span>
        </button>
        <button class="btn btn--secondary btn--lg">
          <span class="btn__label">Build a Mini App</span>
        </button>
      </div>
    </div>

    <!-- Right: Phone Mockups -->
    <div class="miniapps-hero__images">
      <img src="assets/img/apps-front.png" alt="" class="miniapps-hero__img-front">
      <img src="assets/img/apps-back.png" alt="" class="miniapps-hero__img-back">
    </div>
  </div>
</section>

<script src="scripts.js"></script>
</body>
</html>
```

---

## CSS Implementation

```css
/* ==========================================
   MINI APPS HERO SECTION
   ========================================== */

.miniapps-hero {
  background: linear-gradient(135deg, #2d1b5e 0%, #1a2847 50%, #0f3460 100%);
  height: 581px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Navigation Bar */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: var(--spacing/md, 16px) var(--spacing/super-lg, 80px);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing/xxs, 4px);
  text-decoration: none;
  flex: 1;
}

.navbar__logo-icon {
  width: 32px;
  height: 32px;
}

.navbar__logo-text {
  font-family: var(--heading/md/font-family, 'Inter', sans-serif);
  font-weight: var(--heading/md/font-weight, 600);
  font-size: var(--heading/md/font-size, 24px);
  line-height: var(--heading/md/line-height, 36px);
  letter-spacing: var(--tracking/heading/heading-md, -1px);
  color: var(--colors/text/01, #f9fafb);
  text-align: center;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing/super, 64px);
}

.navbar__link {
  padding: var(--spacing/xxs, 4px) var(--spacing/xs, 8px);
  border-radius: var(--corner-radius/lg, 16px);
  font-family: var(--label/md/font-family, 'Inter', sans-serif);
  font-weight: var(--label/md/font-weight, 600);
  font-size: var(--label/md/font-size, 16px);
  line-height: var(--label/md/line-height, 24px);
  letter-spacing: var(--tracking/global/label-md, -0.5px);
  color: var(--colors/text/01, #f9fafb);
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.navbar__link:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.navbar__link--active {
  background-color: var(--colors/surface/04, #172330);
  border-radius: var(--corner-radius/sm, 8px);
}

.navbar__cta {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

/* Hero Container */
.miniapps-hero__container {
  position: absolute;
  left: var(--spacing/super-lg, 80px);
  top: 50%;
  transform: translateY(calc(-50% + 40.5px));
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 160px);
  max-width: 1280px;
}

/* Hero Content */
.miniapps-hero__content {
  width: 628px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
}

.miniapps-hero__text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
  white-space: pre-wrap;
}

.miniapps-hero__subtitle {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/body-sm, 0px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
}

.miniapps-hero__title {
  font-family: var(--display/lg/font-family, 'Sora', sans-serif);
  font-weight: var(--display/lg/font-weight, 600);
  font-size: var(--display/lg/font-size, 56px);
  line-height: var(--display/lg/line-height, 64px);
  letter-spacing: var(--display/lg/tracking, -2px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
}

.miniapps-hero__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
}

/* Hero CTA Buttons */
.miniapps-hero__cta {
  width: 511px;
  display: flex;
  gap: var(--spacing/sm, 12px);
}

.miniapps-hero__cta .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
  border-radius: var(--corner-radius/md, 12px);
  font-family: var(--label/md/font-family, 'Inter', sans-serif);
  font-weight: var(--label/md/font-weight, 600);
  font-size: var(--label/md/font-size, 16px);
  line-height: var(--label/md/line-height, 24px);
  letter-spacing: var(--tracking/global/label-md, -0.5px);
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn--primary {
  background-color: var(--colors/surface/action/default, #0b70d5);
  color: var(--colors/text/on-action, #f9fafb);
}

.btn--primary:hover {
  background-color: #095ba8;
}

.btn--secondary {
  background-color: transparent;
  color: var(--colors/text/01, #f9fafb);
  border: 1px solid var(--colors/outline/action-secondary/default, #f9fafb);
  height: 66px;
}

.btn--secondary:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.btn--secondary-outline {
  background-color: transparent;
  color: var(--colors/text/on-action, #f9fafb);
  border: 2px solid var(--colors/outline/action-secondary/default, #f9fafb);
  border-radius: var(--corner-radius/lg, 16px);
}

.btn--secondary-outline:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.btn--lg {
  height: auto;
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
}

.btn--md {
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
}

.btn__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.btn__label {
  padding: 0 var(--spacing/xs, 8px);
}

/* Hero Images */
.miniapps-hero__images {
  position: absolute;
  right: 137px;
  top: 79px;
  width: 448px;
  height: 527px;
}

.miniapps-hero__img-front {
  position: absolute;
  left: 0;
  top: 27px;
  width: 274px;
  height: 527px;
  z-index: 2;
  pointer-events: none;
}

.miniapps-hero__img-back {
  position: absolute;
  right: 0;
  top: 77px;
  width: 192px;
  height: 430px;
  transform: scaleY(-1) rotate(180deg);
  opacity: 0.9;
  z-index: 1;
  pointer-events: none;
}

/* ==========================================
   RESPONSIVE (MOBILE)
   ========================================== */

@media (max-width: 768px) {
  .miniapps-hero {
    height: auto;
    min-height: 600px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px);
  }

  /* Navbar Mobile */
  .navbar {
    position: relative;
    padding: 0 0 var(--spacing/xl, 24px) 0;
  }

  .navbar__container {
    flex-wrap: wrap;
    gap: var(--spacing/md, 16px);
  }

  .navbar__logo {
    flex: none;
  }

  .navbar__nav {
    display: none; /* Use hamburger menu for mobile */
  }

  .navbar__cta {
    flex: 1;
  }

  /* Hero Container Mobile */
  .miniapps-hero__container {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: var(--spacing/3xl, 40px);
  }

  .miniapps-hero__content {
    width: 100%;
    order: 2;
  }

  .miniapps-hero__title {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.5px;
  }

  .miniapps-hero__cta {
    width: 100%;
    flex-direction: column;
  }

  .miniapps-hero__cta .btn {
    width: 100%;
  }

  /* Hero Images Mobile */
  .miniapps-hero__images {
    position: relative;
    right: auto;
    top: auto;
    width: 300px;
    height: 400px;
    order: 1;
  }

  .miniapps-hero__img-front {
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: auto;
    top: 0;
  }

  .miniapps-hero__img-back {
    right: 20px;
    width: 150px;
    height: auto;
    top: 50px;
  }
}
```

---

## CSS Variables Used

### Spacing
```css
--spacing/xxs: 4px       /* Logo gap, navbar link padding */
--spacing/xs: 8px        /* Button label padding */
--spacing/sm: 12px       /* Button padding */
--spacing/md: 16px       /* Navbar padding, text gap */
--spacing/lg: 20px       /* CTA gap */
--spacing/xl: 24px       /* Mobile spacing */
--spacing/3xl: 40px      /* Content gap */
--spacing/super: 64px    /* Nav link gap */
--spacing/super-lg: 80px /* Hero side padding */
```

### Colors
```css
--colors/text/01: #f9fafb                /* Primary text (white) */
--colors/text/02: #d4d4d8                /* Secondary text (gray) */
--colors/text/on-action: #f9fafb        /* Button text */
--colors/surface/04: #172330            /* Active nav background */
--colors/surface/action/default: #0b70d5 /* Primary button blue */
--colors/outline/action-secondary/default: #f9fafb /* Button borders */
```

### Typography
```css
/* Body Small (Subtitle) */
--body/sm/font-family: 'Inter'
--body/sm/font-weight: 400
--body/sm/font-size: 14px
--body/sm/line-height: 20px
--tracking/global/body-sm: 0px

/* Display Large (Title) */
--display/lg/font-family: 'Sora'
--display/lg/font-weight: 600
--display/lg/font-size: 56px (desktop) / 36px (mobile)
--display/lg/line-height: 64px (desktop) / 44px (mobile)
--display/lg/tracking: -2px (desktop) / -1.5px (mobile)

/* Body Medium (Description) */
--body/md/font-family: 'Inter'
--body/md/font-weight: 400
--body/md/font-size: 16px
--body/md/line-height: 24px
--tracking/global/body-md: 0px

/* Label Medium (Buttons, Nav) */
--label/md/font-family: 'Inter'
--label/md/font-weight: 600
--label/md/font-size: 16px
--label/md/line-height: 24px
--tracking/global/label-md: -0.5px

/* Heading Medium (Logo) */
--heading/md/font-family: 'Inter'
--heading/md/font-weight: 600
--heading/md/font-size: 24px
--heading/md/line-height: 36px
--tracking/heading/heading-md: -1px
```

### Border Radius
```css
--corner-radius/sm: 8px   /* Active nav link */
--corner-radius/md: 12px  /* Buttons */
--corner-radius/lg: 16px  /* Nav links, Download button */
```

---

## Design Specifications

### Layout
- **Hero height:** 581px (desktop), auto (mobile)
- **Content width:** 628px (desktop), 100% (mobile)
- **CTA width:** 511px (desktop), 100% (mobile)
- **Side padding:** 80px (desktop), 16px (mobile)
- **Bottom radius:** 40px (desktop), 24px (mobile)

### Background Gradient
```css
background: linear-gradient(135deg, #2d1b5e 0%, #1a2847 50%, #0f3460 100%);
```
- **Direction:** 135deg (diagonal)
- **Colors:** Purple → Dark blue → Medium blue

### Images
- **Front mockup:** 274×527px, positioned left
- **Back mockup:** 192×430px, positioned right, transformed
- **Transform:** `scaleY(-1) rotate(180deg)` + 90% opacity

### Navbar
- **Height:** Auto
- **Logo:** 32×32px icon + 24px text
- **Nav gap:** 64px between links
- **Active state:** Dark background (#172330)

### Buttons
- **Primary:** Blue background (#0b70d5)
- **Secondary:** Transparent with white border
- **Height:** 66px (secondary large)
- **Icon:** 24×24px (primary only)

---

## Assets Required

### Icons
Place in `assets/icons/`:
- `spixi-logo.svg` (32×32px) - Spixi logo icon

### Images
Place in `assets/img/`:
- `apps-front.png` (274×527px) - Front phone mockup showing app gallery
- `apps-back.png` (192×430px) - Back phone mockup showing mini app

### Button Icon (SVG)
Arrow right icon for "Visit app directory" button:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12h14m-7-7l7 7-7 7" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
```

---

## Content

### Navigation
- **Logo:** "Spixi"
- **Links:** Features, Help Center, Mini Apps (active), Technology
- **CTA:** "Download Spixi"

### Hero Content
- **Subtitle:** "Browse Mini Apps, try them in Spixi, or build your own."
- **Title:** "Apps that live where you already chat."
- **Description:** "Mini Apps add tools and games to Spixi without switching apps. Play with friends, share utilities in chat, or build custom experiences for your team or community."
- **Primary CTA:** "Visit app directory"
- **Secondary CTA:** "Build a Mini App"

---

## Link Destinations

```html
<!-- Navbar Links -->
<a href="index.html">Home</a>
<a href="index.html#features">Features</a>
<a href="help.html">Help Center</a>
<a href="mini-apps.html" class="navbar__link--active">Mini Apps</a>
<a href="technology.html">Technology</a>
<a href="#download">Download Spixi</a>

<!-- Hero Buttons -->
<a href="app-directory.html">Visit app directory</a>
<a href="build-mini-app.html">Build a Mini App</a>
```

---

## Responsive Behavior

### Desktop (>768px)
- Horizontal layout
- Content left, images right (absolute positioned)
- Full navbar with all links visible
- Fixed hero height: 581px

### Mobile (≤768px)
- Vertical layout (images top, content bottom)
- Navbar simplified (hide nav links, show hamburger menu)
- Buttons stack vertically (full width)
- Auto height
- Smaller images (scaled down)
- Smaller title font (36px → 44px line height)

---

## Implementation Checklist

- [ ] Create `mini-apps.html` file
- [ ] Add CSS to `styles.css`
- [ ] Ensure `variables.css` has all required variables
- [ ] Download Spixi logo SVG
- [ ] Download phone mockup images (2 files)
- [ ] Create arrow icon SVG (or inline)
- [ ] Set up navbar with active state on "Mini Apps"
- [ ] Test desktop layout (side-by-side)
- [ ] Test mobile layout (stacked)
- [ ] Test button hover states
- [ ] Test navbar link hover states
- [ ] Verify gradient background renders correctly
- [ ] Verify images are layered properly (front on top)
- [ ] Verify responsive breakpoint at 768px
- [ ] Test all navigation links work

---

## Integration Notes

1. **Gradient Background** - Diagonal gradient creates visual depth, matches brand
2. **Layered Images** - Front image has higher z-index, back image is flipped
3. **Button Styles** - Primary has icon, secondary is outline only
4. **Active Nav State** - "Mini Apps" link has dark background
5. **Positioning** - Hero content positioned absolutely for precise control
6. **Border Radius** - Bottom corners rounded for modern look
7. **White Space** - 40px gap between text and buttons
8. **Mobile First** - Stack vertically, images appear first for visual impact

---

## JavaScript (Optional)

For smooth scroll to download section:
```javascript
// scripts.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
```

---

## Final Notes

- This is the **first section** of the Mini Apps page
- **Reuse existing button styles** from homepage
- All text content is **exact copy from design**
- Images are **positioned absolutely** for precise placement
- **Gradient background** is critical to visual design
- Mobile layout **prioritizes images** (shown first)
- All spacing, colors, and typography use **CSS variables**
- Section height is **fixed on desktop**, **flexible on mobile**
