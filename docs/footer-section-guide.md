# Footer Section - Implementation Guide

## Overview
Build the footer with brand logo, tagline, social icons, navigation links (Product & Company), and copyright notice.

**Figma References:**
- Desktop: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-10788`
- Mobile: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-10822`

---

## HTML Structure

```html
<footer class="footer">
  <div class="footer__container">
    
    <!-- Content Wrapper -->
    <div class="footer__content">
      
      <!-- Left: Brand + Socials -->
      <div class="footer__left">
        <!-- Brand -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="assets/icons/spixi-logo.svg" alt="Spixi" class="footer__logo-icon">
            <span class="footer__logo-text">Spixi</span>
          </div>
          <p class="footer__tagline">Private messaging with IXI wallet and mini apps.</p>
        </div>
        
        <!-- Social Icons -->
        <div class="footer__socials">
          <a href="#" class="footer__social-link" aria-label="X (Twitter)">
            <svg class="footer__social-icon" width="32" height="32">
              <!-- X icon -->
            </svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="GitHub">
            <svg class="footer__social-icon" width="32" height="32">
              <!-- GitHub icon -->
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: Navigation Columns -->
      <div class="footer__nav">
        
        <!-- Product Column -->
        <div class="footer__nav-column">
          <h3 class="footer__nav-title">Product</h3>
          <ul class="footer__nav-list">
            <li><a href="#" class="footer__nav-link">Download Spixi</a></li>
            <li><a href="#" class="footer__nav-link">How it works</a></li>
            <li><a href="#" class="footer__nav-link">Mini Apps</a></li>
            <li><a href="#" class="footer__nav-link">Technology</a></li>
            <li><a href="#" class="footer__nav-link">Help Center</a></li>
          </ul>
        </div>

        <!-- Company & Legal Column -->
        <div class="footer__nav-column">
          <h3 class="footer__nav-title">Company & legal</h3>
          <ul class="footer__nav-list">
            <li><a href="#" class="footer__nav-link">Ixian Website</a></li>
            <li><a href="#" class="footer__nav-link">IXI Labs Website</a></li>
            <li><a href="#" class="footer__nav-link">Privacy Policy</a></li>
            <li><a href="#" class="footer__nav-link">Terms of Use</a></li>
          </ul>
        </div>
        
      </div>
      
    </div>

    <!-- Copyright -->
    <p class="footer__copyright">© 2025 IXI Labs. All rights reserved.</p>
    
  </div>
</footer>
```

---

## CSS Implementation

```css
/* ==========================================
   FOOTER SECTION
   ========================================== */

.footer {
  background-color: var(--colors/surface/01, #04070b);
  padding: var(--spacing/super-lg, 80px) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__container {
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/super-lg, 80px);
}

/* Content Area */
.footer__content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

/* Left Side: Brand + Socials */
.footer__left {
  width: 411px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xs, 8px);
  width: 100%;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing/xxs, 4px);
  height: 32px;
  width: 301px;
}

.footer__logo-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.footer__logo-text {
  font-family: var(--heading/md/font-family, 'Inter', sans-serif);
  font-weight: var(--heading/md/font-weight, 600);
  font-size: var(--heading/md/font-size, 24px);
  line-height: var(--heading/md/line-height, 36px);
  letter-spacing: var(--tracking/heading/heading-md, -1px);
  color: var(--colors/text/01, #f9fafb);
  text-align: center;
}

.footer__tagline {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/body-sm, 0px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  white-space: pre-wrap;
}

/* Social Icons */
.footer__socials {
  display: flex;
  align-items: center;
  gap: var(--spacing/xs, 8px);
  width: 204px;
}

.footer__social-link {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.footer__social-link:hover {
  opacity: 0.8;
}

.footer__social-icon {
  width: 32px;
  height: 32px;
  display: block;
  color: var(--colors/text/01, #f9fafb);
}

/* Right Side: Navigation */
.footer__nav {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing/xl, 24px);
}

.footer__nav-column {
  width: 193px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/sm, 12px);
  white-space: pre-wrap;
}

.footer__nav-title {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/action/disabled, #71717a);
  margin: 0;
}

.footer__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/sm, 12px);
}

.footer__nav-link {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/body-sm, 0px);
  color: var(--colors/text/01, #f9fafb);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer__nav-link:hover {
  opacity: 0.8;
}

/* Copyright */
.footer__copyright {
  font-family: var(--body/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--body/xs/font-weight, 400);
  font-size: var(--body/xs/font-size, 12px);
  line-height: var(--body/xs/line-height, 16px);
  letter-spacing: var(--tracking/global/body-xs, 0px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
  white-space: pre-wrap;
  width: 100%;
}

/* ==========================================
   MOBILE RESPONSIVE (≤768px)
   ========================================== */

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing/super-lg, 80px) var(--spacing/md, 16px);
  }

  .footer__container {
    gap: var(--spacing/super-lg, 80px);
  }

  .footer__content {
    flex-direction: column;
    gap: var(--spacing/xxl, 32px);
  }

  .footer__left {
    width: 100%;
    gap: var(--spacing/xxl, 32px);
  }

  .footer__nav {
    width: 100%;
    gap: var(--spacing/xl, 24px);
  }

  .footer__nav-column {
    flex: 1;
    min-width: 0;
    width: auto;
  }
}
```

---

## CSS Variables Used

### Spacing
```css
--spacing/xxs: 4px       /* Logo gap */
--spacing/xs: 8px        /* Brand gap, social gap */
--spacing/sm: 12px       /* Nav items gap */
--spacing/md: 16px       /* Left section gap */
--spacing/xl: 24px       /* Nav columns gap */
--spacing/xxl: 32px      /* Mobile stacking gap */
--spacing/super-lg: 80px /* Section padding, content gap */
```

### Colors
```css
--colors/surface/01: #04070b          /* Background */
--colors/text/01: #f9fafb             /* Primary text */
--colors/text/02: #d4d4d8             /* Copyright text */
--colors/text/action/disabled: #71717a /* Nav titles */
```

### Typography
```css
/* Heading Medium (Logo) */
--heading/md/font-family: 'Inter'
--heading/md/font-weight: 600
--heading/md/font-size: 24px
--heading/md/line-height: 36px
--tracking/heading/heading-md: -1px

/* Body Small (Tagline, Nav Links) */
--body/sm/font-family: 'Inter'
--body/sm/font-weight: 400
--body/sm/font-size: 14px
--body/sm/line-height: 20px
--tracking/global/body-sm: 0px

/* Label Small (Nav Titles) */
--label/sm/font-family: 'Inter'
--label/sm/font-weight: 600
--label/sm/font-size: 14px
--label/sm/line-height: 20px
--tracking/global/label-sm: -0.5px

/* Body Extra Small (Copyright) */
--body/xs/font-family: 'Inter'
--body/xs/font-weight: 400
--body/xs/font-size: 12px
--body/xs/line-height: 16px
--tracking/global/body-xs: 0px
```

---

## Design Specs

### Desktop Layout
- **Container max-width:** 1280px
- **Section padding:** 80px (top/bottom), 0 (sides)
- **Content gap:** 80px (between content and copyright)
- **Left width:** 411px
- **Nav column width:** 193px each
- **Logo height:** 32px
- **Social icons:** 32×32px
- **Gap between columns:** 24px

### Mobile Layout (≤768px)
- **Section padding:** 80px (top/bottom), 16px (sides)
- **Content:** Stacks vertically
- **Left section:** Full width
- **Nav columns:** Side-by-side, equal flex
- **Gap adjustments:** 32px between left and nav, 24px between nav columns

---

## Assets Required

### Logo Icon
Place in `assets/icons/`:
- `spixi-logo.svg` (32×32px)

### Social Icons (SVG)
Inline or separate files:

**X (Twitter) Icon:**
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.9 14.3L26.6 5.5H24.9L18.1 13.1L12.7 5.5H6L14.1 17.3L6 26.5H7.7L14.9 18.4L20.6 26.5H27.3L18.9 14.3ZM15.9 17.3L15.1 16.2L8.3 6.8H11.8L17.2 14.3L18 15.4L24.9 25.2H21.4L15.9 17.3Z" fill="#f9fafb"/>
</svg>
```

**GitHub Icon:**
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 3C8.82 3 3 8.82 3 16C3 21.75 7.03 26.56 12.44 28.25C13.04 28.36 13.25 27.99 13.25 27.67C13.25 27.38 13.24 26.62 13.24 25.81C9.5 26.54 8.8 24.62 8.6 23.63C8.49 23.13 7.9 22.25 7.37 21.96C6.94 21.75 6.34 21.02 7.36 21.01C8.3 21 8.94 21.85 9.12 22.22C10.22 24.03 11.97 23.51 13.28 23.19C13.38 22.49 13.67 21.96 13.99 21.65C11.24 21.34 8.36 20.3 8.36 15.56C8.36 14.21 8.85 13.1 9.14 12.23C9.03 11.92 8.64 10.69 9.25 9.05C9.25 9.05 10.28 8.73 13.25 10.72C14.25 10.44 15.3 10.3 16.35 10.3C17.4 10.3 18.45 10.44 19.45 10.72C22.42 8.72 23.45 9.05 23.45 9.05C24.06 10.69 23.67 11.92 23.56 12.23C23.85 13.1 24.34 14.2 24.34 15.56C24.34 20.31 21.45 21.34 18.7 21.65C19.1 22 19.44 22.67 19.44 23.72C19.44 25.25 19.43 26.48 19.43 27.67C19.43 27.99 19.64 28.37 20.24 28.25C25.63 26.56 29.66 21.74 29.66 16C29.66 8.82 23.84 3 16.66 3H16Z" fill="#f9fafb"/>
</svg>
```

---

## Content

### Brand
- **Logo:** Spixi icon + "Spixi" text
- **Tagline:** "Private messaging with IXI wallet and mini apps."

### Social Links
- **X (Twitter):** Link to X profile
- **GitHub:** Link to GitHub repository

### Product Navigation
- Download Spixi
- How it works
- Mini Apps
- Technology
- Help Center

### Company & Legal Navigation
- Ixian Website
- IXI Labs Website
- Privacy Policy
- Terms of Use

### Copyright
"© 2025 IXI Labs. All rights reserved."

---

## Link Destinations

Update these `href` attributes:

```html
<!-- Social Links -->
<a href="https://x.com/spixi" class="footer__social-link">X</a>
<a href="https://github.com/ProjectIxian/Spixi" class="footer__social-link">GitHub</a>

<!-- Product Links -->
<a href="#download">Download Spixi</a>
<a href="#how-it-works">How it works</a>
<a href="#mini-apps">Mini Apps</a>
<a href="#technology">Technology</a>
<a href="#help">Help Center</a>

<!-- Company Links -->
<a href="https://ixian.io">Ixian Website</a>
<a href="https://ixilabs.io">IXI Labs Website</a>
<a href="/privacy">Privacy Policy</a>
<a href="/terms">Terms of Use</a>
```

---

## Layout Behavior

### Desktop
1. **Horizontal layout:** Brand/socials left (411px), navigation right (2 columns)
2. **Fixed widths:** Left section and nav columns have fixed widths
3. **Gap between sections:** 80px vertical gap before copyright
4. **Navigation columns:** Side-by-side with 24px gap

### Mobile
1. **Vertical stack:** All sections stack vertically
2. **Full width:** Left section takes full width
3. **Navigation columns:** Remain side-by-side but flexible width
4. **Increased gaps:** 32px between left and nav sections
5. **Padding:** 16px horizontal added to container

---

## Accessibility

### Semantic HTML
- Use `<footer>` element
- Use `<nav>` or semantic structure for links
- Use `<h3>` for navigation titles
- Use `<ul>` and `<li>` for link lists

### ARIA Labels
```html
<a href="#" class="footer__social-link" aria-label="X (Twitter)">
  <svg>...</svg>
</a>
<a href="#" class="footer__social-link" aria-label="GitHub">
  <svg>...</svg>
</a>
```

### Link Hover States
- Links have `opacity: 0.8` on hover
- Smooth transition: `transition: opacity 0.2s ease`

---

## Implementation Checklist

- [ ] Create HTML structure with footer, container, content, navigation
- [ ] Add CSS with all variables
- [ ] Add Spixi logo SVG to `assets/icons/`
- [ ] Add social icon SVGs (inline or separate files)
- [ ] Update link destinations (social, product, company)
- [ ] Test desktop layout (horizontal, fixed widths)
- [ ] Test mobile layout (vertical stack, flexible nav)
- [ ] Verify typography matches design
- [ ] Verify spacing uses variables
- [ ] Verify colors use variables
- [ ] Test hover states on links and social icons
- [ ] Verify responsive breakpoint at 768px
- [ ] Add ARIA labels for accessibility

---

## Integration Notes

1. **Background color** - Solid dark `#04070b` matches site theme
2. **Logo** - Reuse existing Spixi logo from navbar/header
3. **Social icons** - White fill `#f9fafb` with hover opacity
4. **Navigation** - Simple link structure with hover states
5. **Mobile behavior** - Left section full width, nav columns flexible
6. **No JavaScript required** - Pure HTML/CSS
7. **Hover effects** - Simple opacity transitions

---

## Final Notes

- This is the **final element** of the page
- Background matches the **site background** for seamless integration
- All links should be **functional** (update hrefs)
- Social icons should **open in new tabs** (`target="_blank" rel="noopener noreferrer"`)
- Copyright year should be **dynamic** if possible (JavaScript or server-side)
- All spacing, colors, and typography use **CSS variables**
