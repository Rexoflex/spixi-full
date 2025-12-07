# Help Center Hero Section - Implementation Guide

## Overview
Build the hero section for the Help Center page with navbar, headline content, search input, and layered phone mockup images showing chat, wallet, and apps screens.

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-15340`

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help Center - Spixi</title>
    <meta name="description" content="Learn how Spixi works, FAQ, and support resources">
    <link rel="stylesheet" href="variables.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<section class="help-hero">
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
        <a href="help.html" class="navbar__link navbar__link--active">Help Center</a>
        <a href="mini-apps.html" class="navbar__link">Mini Apps</a>
      </div>

      <!-- CTA Button -->
      <div class="navbar__cta">
        <a href="#download" class="btn btn--secondary-outline btn--md">Download Spixi</a>
      </div>
    </div>
  </nav>

  <!-- Hero Content Container -->
  <div class="help-hero__container">
    <!-- Left: Content -->
    <div class="help-hero__content">
      <div class="help-hero__text">
        <p class="help-hero__subtitle">How it works and FAQ</p>
        <h1 class="help-hero__title">Help Center</h1>
        <p class="help-hero__description">Learn how Spixi works, how to keep your account safe, and how to get the most out of chat, wallet and Mini Apps.</p>
      </div>

      <!-- Search Input -->
      <div class="help-hero__search">
        <div class="search-input">
          <input 
            type="text" 
            class="search-input__field" 
            placeholder="Search help topics..."
            aria-label="Search help topics"
          >
          <div class="search-input__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="6" stroke="#04070b" stroke-width="2"/>
              <path d="M20 20L17 17" stroke="#04070b" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Phone Mockups -->
    <div class="help-hero__images">
      <img src="assets/img/wallet-2.png" alt="" class="help-hero__img-wallet">
      <img src="assets/img/chats-1.png" alt="" class="help-hero__img-chats">
      <img src="assets/img/apps-1.png" alt="" class="help-hero__img-apps">
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
   HELP CENTER HERO SECTION
   ========================================== */

.help-hero {
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
  cursor: pointer;
}

.navbar__cta {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

/* Hero Container */
.help-hero__container {
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
.help-hero__content {
  width: 628px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
}

.help-hero__text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
  white-space: pre-wrap;
}

.help-hero__subtitle {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/body-sm, 0px);
  color: var(--colors/text/02, #172330);
  margin: 0;
}

.help-hero__title {
  font-family: var(--display/lg/font-family, 'Sora', sans-serif);
  font-weight: var(--display/lg/font-weight, 600);
  font-size: var(--display/lg/font-size, 56px);
  line-height: var(--display/lg/line-height, 64px);
  letter-spacing: var(--display/lg/tracking, -2px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
}

.help-hero__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
}

/* Search Input */
.help-hero__search {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/sm, 12px);
}

.search-input {
  background-color: var(--colors/surface/03, #e5e7eb);
  border-radius: var(--corner-radius/lg, 16px);
  padding: var(--spacing/md, 16px);
  display: flex;
  align-items: center;
  gap: var(--spacing/xs, 8px);
  width: 100%;
}

.search-input__field {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #04070b);
  white-space: pre-wrap;
  min-width: 0;
}

.search-input__field::placeholder {
  color: var(--colors/text/02, #172330);
}

.search-input__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input__icon svg {
  width: 24px;
  height: 24px;
  display: block;
}

/* Hero Images */
.help-hero__images {
  position: absolute;
  right: 53px;
  top: 104px;
  width: 626px;
  height: 606px;
}

.help-hero__img-wallet {
  position: absolute;
  left: 0;
  top: 57px;
  width: 220px;
  height: 493px;
  z-index: 1;
  pointer-events: none;
}

.help-hero__img-chats {
  position: absolute;
  left: 151px;
  top: 0;
  width: 315px;
  height: 606px;
  z-index: 3;
  pointer-events: none;
}

.help-hero__img-apps {
  position: absolute;
  right: 0;
  top: 57px;
  width: 220px;
  height: 493px;
  transform: scaleY(-1) rotate(180deg);
  opacity: 0.9;
  z-index: 2;
  pointer-events: none;
}

/* Button Styles */
.btn--secondary-outline {
  background-color: transparent;
  color: var(--colors/text/on-action, #f9fafb);
  border: 2px solid var(--colors/outline/action-secondary/default, #f9fafb);
  border-radius: var(--corner-radius/lg, 16px);
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
  font-family: var(--label/md/font-family, 'Inter', sans-serif);
  font-weight: var(--label/md/font-weight, 600);
  font-size: var(--label/md/font-size, 16px);
  line-height: var(--label/md/line-height, 24px);
  letter-spacing: var(--tracking/global/label-md, -0.5px);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
}

.btn--secondary-outline:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.btn--md {
  padding: var(--spacing/sm, 12px) var(--spacing/md, 16px);
}

/* ==========================================
   RESPONSIVE (MOBILE)
   ========================================== */

@media (max-width: 768px) {
  .help-hero {
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
  .help-hero__container {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: var(--spacing/3xl, 40px);
  }

  .help-hero__content {
    width: 100%;
    order: 2;
  }

  .help-hero__title {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.5px;
  }

  .help-hero__search {
    width: 100%;
  }

  /* Hero Images Mobile */
  .help-hero__images {
    position: relative;
    right: auto;
    top: auto;
    width: 320px;
    height: 450px;
    order: 1;
  }

  .help-hero__img-wallet {
    left: 0;
    top: 40px;
    width: 170px;
    height: auto;
  }

  .help-hero__img-chats {
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    height: auto;
    top: 0;
  }

  .help-hero__img-apps {
    right: 0;
    width: 170px;
    height: auto;
    top: 40px;
  }
}
```

---

## CSS Variables Used

### Spacing
```css
--spacing/xxs: 4px       /* Logo gap, navbar link padding */
--spacing/xs: 8px        /* Search input gap, navbar link padding */
--spacing/sm: 12px       /* Search gap, button padding */
--spacing/md: 16px       /* Navbar padding, text gap, search padding, button padding */
--spacing/xl: 24px       /* Mobile spacing */
--spacing/3xl: 40px      /* Content gap, mobile padding */
--spacing/super: 64px    /* Nav link gap */
--spacing/super-lg: 80px /* Hero side padding */
```

### Colors
```css
--colors/text/01: #f9fafb                /* Navbar logo, button text (white) */
--colors/text/01: #04070b                /* Hero title, description (dark) */
--colors/text/02: #172330                /* Subtitle, placeholder (gray) */
--colors/text/on-action: #f9fafb        /* Button text */
--colors/surface/03: #e5e7eb            /* Search input background (light gray) */
--colors/surface/04: #172330            /* Active nav background */
--colors/outline/action-secondary/default: #f9fafb /* Button border */
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

/* Body Medium (Description, Search Input) */
--body/md/font-family: 'Inter'
--body/md/font-weight: 400
--body/md/font-size: 16px
--body/md/line-height: 24px
--tracking/global/body-md: 0px

/* Label Medium (Nav Links, Button) */
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
--corner-radius/lg: 16px  /* Nav links, Search input, Button */
```

---

## Design Specifications

### Layout
- **Hero height:** 581px (desktop), auto (mobile)
- **Content width:** 628px (desktop), 100% (mobile)
- **Side padding:** 80px (desktop), 16px (mobile)
- **Bottom radius:** 40px (desktop), 24px (mobile)
- **Content vertical position:** `top: 50%; transform: translateY(calc(-50% + 40.5px))`

### Background Gradient
```css
background: linear-gradient(135deg, #2d1b5e 0%, #1a2847 50%, #0f3460 100%);
```
- **Direction:** 135deg (diagonal)
- **Colors:** Purple → Dark blue → Medium blue

### Search Input
- **Background:** #e5e7eb (light gray)
- **Border radius:** 16px
- **Padding:** 16px
- **Gap:** 8px (between input and icon)
- **Icon size:** 24×24px
- **Placeholder color:** #172330 (gray)

### Phone Mockup Images
- **Container:** 626×606px, positioned absolute
- **Wallet (left):** 220×493px, top: 57px, z-index: 1
- **Chats (center):** 315×606px, top: 0, z-index: 3 (highest)
- **Apps (right):** 220×493px, top: 57px, transformed, opacity: 0.9, z-index: 2

### Image Transformations
- **Apps image:** `transform: scaleY(-1) rotate(180deg)` + `opacity: 0.9`
- Wallet and Chats: No transformation

### Navbar
- **Height:** Auto
- **Logo:** 32×32px icon + 24px text
- **Nav gap:** 64px between links
- **Active state:** "Help Center" has dark background (#172330)

### Buttons
- **Secondary outline:** Transparent with 2px white border
- **Padding:** 12px × 16px
- **Border radius:** 16px

---

## Assets Required

### Icons
Place in `assets/icons/`:
- `spixi-logo.svg` (32×32px) - Spixi logo icon

### Images
Place in `assets/img/`:
- `wallet-2.png` (220×493px) - Wallet screen mockup
- `chats-1.png` (315×606px) - Chat screen mockup (center, tallest)
- `apps-1.png` (220×493px) - Apps screen mockup (will be flipped)

### Search Icon (SVG)
Magnifying glass icon inline in HTML:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="11" r="6" stroke="#04070b" stroke-width="2"/>
  <path d="M20 20L17 17" stroke="#04070b" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## Content

### Navigation
- **Logo:** "Spixi"
- **Links:** Features, Help Center (active), Mini Apps
- **CTA:** "Download Spixi"

### Hero Content
- **Subtitle:** "How it works and FAQ"
- **Title:** "Help Center"
- **Description:** "Learn how Spixi works, how to keep your account safe, and how to get the most out of chat, wallet and Mini Apps."
- **Search placeholder:** "Search help topics..."

---

## Text Color Notes

**CRITICAL:** This hero section uses **dark text on light gradient** (opposite of other hero sections):

- **Subtitle:** `#172330` (dark gray) - NOT white
- **Title:** `#04070b` (near black) - NOT white
- **Description:** `#04070b` (near black) - NOT white
- **Search placeholder:** `#172330` (dark gray) - NOT white
- **Navbar text:** `#f9fafb` (white) - remains white

The gradient background is lighter in this section, making dark text readable.

---

## Responsive Behavior

### Desktop (>768px)
- Horizontal layout
- Content left, images right (absolute positioned)
- Full navbar with all links visible
- Fixed hero height: 581px
- Search input: Full width of content area

### Mobile (≤768px)
- Vertical layout (images top, content bottom)
- Navbar simplified (hide nav links, show hamburger menu)
- Search input: Full width
- Auto height
- Smaller images (scaled down)
- Smaller title font (36px → 44px line height)
- Images arranged in compact layout

---

## Search Input Behavior

### HTML
```html
<input 
  type="text" 
  class="search-input__field" 
  placeholder="Search help topics..."
  aria-label="Search help topics"
>
```

### JavaScript (Optional)
```javascript
// Search functionality
const searchInput = document.querySelector('.search-input__field');
const searchIcon = document.querySelector('.search-input__icon');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value;
  console.log('Searching for:', query);
  // Implement search functionality here
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value;
    console.log('Search submitted:', query);
    // Navigate to search results page
    // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
});

// Icon click
searchIcon.addEventListener('click', () => {
  const query = searchInput.value;
  if (query) {
    console.log('Search via icon:', query);
    // Submit search
  }
});
```

---

## Image Layering

The three phone mockups are layered with specific z-index values:

```css
/* Z-index layering (front to back) */
.help-hero__img-chats {
  z-index: 3;  /* Front (center phone) */
}

.help-hero__img-apps {
  z-index: 2;  /* Middle (right phone, flipped) */
}

.help-hero__img-wallet {
  z-index: 1;  /* Back (left phone) */
}
```

This creates depth with the center chat screen appearing in front.

---

## Implementation Checklist

- [ ] Create `help.html` file
- [ ] Add CSS to `styles.css`
- [ ] Ensure `variables.css` has all required variables
- [ ] Download Spixi logo SVG
- [ ] Download 3 phone mockup images
- [ ] Create search icon SVG (or inline)
- [ ] Set up navbar with active state on "Help Center"
- [ ] Implement search input with proper styling
- [ ] Test desktop layout (side-by-side)
- [ ] Test mobile layout (stacked, images first)
- [ ] Test navbar link hover states
- [ ] Test search input focus states
- [ ] Verify gradient background renders correctly
- [ ] Verify images are layered properly (chats on top)
- [ ] Verify apps image is flipped correctly
- [ ] Verify text colors are DARK (not white)
- [ ] Test responsive breakpoint at 768px
- [ ] Test all navigation links work
- [ ] Test search input placeholder color
- [ ] Add search functionality (optional)

---

## Critical Differences from Other Hero Sections

### 1. Text Colors
- Uses **dark text** (#04070b, #172330) instead of white
- Background gradient is lighter to support dark text

### 2. Search Input
- Unique to this section
- Light gray background (#e5e7eb)
- Replaces CTA buttons from other hero sections

### 3. Image Layout
- 3 images instead of 2
- Different sizes (315px center, 220px sides)
- Center image is tallest and has highest z-index
- Right image is flipped/transformed

### 4. Content Focus
- Help/support oriented
- Search-first design
- No action buttons in hero

---

## Integration with Help Center Page

This section appears at the top of the help center page:

```html
<!-- help.html -->
<body>
  <!-- Hero Section with Search -->
  <section class="help-hero">
    <!-- ... hero content ... -->
  </section>

  <!-- Help Topics Section -->
  <section class="help-topics">
    <!-- ... topics/categories ... -->
  </section>

  <!-- FAQ Section -->
  <section class="faq">
    <!-- ... frequently asked questions ... -->
  </section>

  <!-- Footer -->
  <footer class="footer">
    <!-- ... footer content ... -->
  </footer>
</body>
```

---

## Final Notes

- This hero section uses **DARK TEXT** on a gradient background
- **Search input** is the primary interaction element
- **Three phone mockups** create visual depth
- **Apps image is flipped** (scaleY + rotate)
- **Center chat image** has highest z-index (appears in front)
- All spacing, colors, and typography use **CSS variables**
- Section height is **fixed on desktop**, **flexible on mobile**
- Gradient matches brand but is lighter than other sections
- Search icon uses **dark color** (#04070b) to match text
- Input placeholder is **gray** (#172330) not black
