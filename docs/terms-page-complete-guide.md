# Terms of Use Page - Implementation Guide

## Overview
Build the Terms of Use legal page with dark background, centered content layout, navbar, and footer. Simple, readable design focused on legal text presentation.

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=273-25648`

**Key Features:**
- Dark background theme (#04070b)
- Centered content column (798px width)
- White text on dark background
- Clean typography hierarchy
- Reuses navbar and footer components

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Use - Spixi</title>
    <meta name="description" content="Terms of Use for Spixi. Read our terms and conditions for using the Spixi website and software.">
    <link rel="stylesheet" href="variables.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="terms-page">

<!-- Reuse Global Navbar -->
<nav class="navbar navbar--dark">
    <div class="navbar__container">
      <a href="index.html" class="navbar__logo">
        <img src="assets/icons/spixi-logo.svg" alt="Spixi" class="navbar__logo-icon">
        <span class="navbar__logo-text">Spixi</span>
      </a>
      <div class="navbar__nav">
        <a href="index.html#features" class="navbar__link">Features</a>
        <a href="help.html" class="navbar__link">Help Center</a>
        <a href="mini-apps.html" class="navbar__link">Mini Apps</a>
      </div>
      <div class="navbar__cta">
        <a href="download.html" class="btn btn--secondary-outline btn--md">Download Spixi</a>
      </div>
    </div>
</nav>

<!-- Hero Section -->
<section class="terms-hero">
  <div class="terms-hero__container">
    <h1 class="terms-hero__title">Terms of Use</h1>
  </div>
</section>

<!-- Terms Content -->
<section class="terms-content">
  <div class="terms-content__container">
    
    <!-- Section 1: Important Notice -->
    <div class="terms-section">
      <h2 class="terms-section__heading">Important notice</h2>
      <p class="terms-section__text">
        www.spixi.io (the "Site") is a website operated by IXI Labs Ltd. ("We", "Us", "Our"). We are a private limited company registered in the UK. These Terms of Use (the "Agreement") defines the responsibility of Us and the person, persons or entity ("You" or "Your") using the Site. Please note that in order to use the Site, you must be of legal age and able to enter into a binding agreement, according to applicable law. We provide the Site solely on the terms and conditions set forth in this Agreement and on the condition that You accept and comply with everything in this Agreement.
      </p>
      <p class="terms-section__text">
        Before using the Site, please read this Agreement carefully, along with it You are required to read and agree with any other policies or notices on Our Site. Together all these materials contain terms, rules and guidelines related to Your use of the Site.
      </p>
      <p class="terms-section__text">
        Should You have any questions regarding this Agreement, please contact Us at <a href="mailto:support@spixi.io" class="terms-link">support@spixi.io</a>.
      </p>
    </div>

    <!-- Section 2: Changes to Agreement -->
    <div class="terms-section">
      <h2 class="terms-section__heading">Changes to this Agreement and to our Site</h2>
      <p class="terms-section__text">
        We amend these Terms from time to time. Please check these Terms to ensure you understand the provisions that apply. We may also update and change our Site from time to time. We do not guarantee that our Site, or any content on it, will always be available or be uninterrupted and we may suspend or withdraw or restrict the availability of all or any part of our Site at any time. You are responsible for ensuring that all persons accessing our Site through your internet connection are aware of these Terms of Use and other applicable terms and conditions, and that they comply with them.
      </p>
    </div>

    <!-- Section 3: Materials and Content -->
    <div class="terms-section">
      <h2 class="terms-section__heading">Materials and content available on our Site</h2>
      <p class="terms-section__text">
        We are the owner or the licensee of all intellectual property rights in our Site, and in the material published on it. Those works are protected by copyright laws and all such rights are reserved. You may print off one copy, and download extracts, of any page(s) for your personal use and you may draw the attention of others within your organisation to content posted on our Site.
      </p>
      <p class="terms-section__text">
        You must not modify materials you have printed off or downloaded, and you must not use illustrations, photographs, video or audio sequences separately from accompanying text. Our status (and that of any identified contributors) as authors of content on our Site must always be acknowledged.
      </p>
      <p class="terms-section__text">
        You must not use any part of the content on our Site for commercial purposes without obtaining a licence to do so from us or our licensors via <a href="mailto:support@spixi.io" class="terms-link">support@spixi.io</a>.
      </p>
      <p class="terms-section__text">
        Although we make reasonable efforts to update the information on our Site, we make no representations, warranties or guarantees, whether express or implied, that the content on our Site is accurate, complete or up to date.
      </p>
    </div>

    <!-- Section 4: Third Party Websites -->
    <div class="terms-section">
      <h2 class="terms-section__heading">Third party websites</h2>
      <p class="terms-section__text">
        Where our Site contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them. We have no control over the contents of those sites or resources. You are encouraged to inform yourself regarding the terms of use, privacy policy and other relevant policies of the websites you are linked to.
      </p>
    </div>

    <!-- Section 5: Disclaimer -->
    <div class="terms-section">
      <h2 class="terms-section__heading">Disclaimer and limitation of liability</h2>
      <p class="terms-section__text">
        We exclude all implied conditions, warranties, representations or other terms that may apply to our Site or any content on it. We will not be liable to you for loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, arising under or in connection with use of, or inability to use, our Site or use of or reliance on any content displayed on our Site. In particular, we will not be liable for loss of profits, sales, business, or revenue; business interruption; loss of anticipated savings; loss of business opportunity, goodwill or reputation; or any indirect or consequential loss or damage.
      </p>
      <p class="terms-section__text">
        Please note that we only provide our Site for domestic and private use. You agree not to use our Site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.
      </p>
      <p class="terms-section__text">
        We do not guarantee that our Site will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programs and platform to access our Site. You should use your own virus protection software.
      </p>
      <p class="terms-section__text">
        You must not misuse our Site by knowingly introducing viruses, trojan horses, worms, logic bombs or other malicious or technologically harmful material. You must not attempt to gain unauthorized access to our Site, the server on which our Site is stored or any server, computer or database connected to our Site. You must not attack our Site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under relevant laws and such breaches will be reported to the relevant law enforcement authorities. In the event of such a breach, your right to use our Site will cease immediately.
      </p>
    </div>

    <!-- Section 6: Use of Spixi Software -->
    <div class="terms-section">
      <h2 class="terms-section__heading">Use of Spixi software</h2>
      <p class="terms-section__text">
        Spixi and it's code is made available under the open source MIT license. The code is available for download on our Github page. You must read and agree with the license available on Github repository of Ixian.
      </p>
    </div>

    <!-- Section 7: Governing Law -->
    <div class="terms-section">
      <h2 class="terms-section__heading">Governing Law</h2>
      <p class="terms-section__text">
        This Agreement, its subject matter and its formation (and any non-contractual disputes or claims) are governed by the laws of the United Kingdom and the exclusive jurisdiction of the courts of the United Kingdom.
      </p>
    </div>

  </div>
</section>

<!-- Reuse Global Footer -->
<footer class="footer footer--dark">
  <!-- Use existing footer component -->
</footer>

</body>
</html>
```

---

## CSS Implementation

```css
/* ==========================================
   TERMS PAGE - DARK THEME
   ========================================== */

.terms-page {
  background-color: var(--colors/surface/01, #04070b);
  color: var(--colors/text/01, #f9fafb);
  min-height: 100vh;
}

/* ==========================================
   NAVBAR - DARK VARIANT
   ========================================== */

.navbar--dark {
  background-color: var(--colors/surface/01, #04070b);
}

/* ==========================================
   TERMS HERO
   ========================================== */

.terms-hero {
  padding: var(--spacing/super-xxl, 120px) var(--spacing/super-lg, 80px) var(--spacing/3xl, 40px);
  background-color: var(--colors/surface/01, #04070b);
}

.terms-hero__container {
  max-width: 798px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.terms-hero__title {
  font-family: var(--display/lg/font-family, 'Sora', sans-serif);
  font-weight: var(--display/lg/font-weight, 600);
  font-size: var(--display/lg/font-size, 56px);
  line-height: var(--display/lg/line-height, 64px);
  letter-spacing: var(--display/lg/tracking, -2px);
  color: var(--colors/text/01, #f9fafb);
  text-align: center;
  margin: 0;
}

/* ==========================================
   TERMS CONTENT
   ========================================== */

.terms-content {
  padding: var(--spacing/super, 64px) var(--spacing/super-lg, 80px) var(--spacing/super-xxl, 120px);
  background-color: var(--colors/surface/01, #04070b);
}

.terms-content__container {
  max-width: 798px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ==========================================
   TERMS SECTIONS
   ========================================== */

.terms-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
  color: var(--colors/text/01, #f9fafb);
  white-space: pre-wrap;
}

.terms-section__heading {
  font-family: var(--label/lg/font-family, 'Inter', sans-serif);
  font-weight: var(--label/lg/font-weight, 600);
  font-size: var(--label/lg/font-size, 18px);
  line-height: var(--label/lg/line-height, 28px);
  letter-spacing: var(--tracking/global/label-lg, -0.5px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  width: 100%;
}

.terms-section__text {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  width: 100%;
}

.terms-link {
  color: #60a5fa; /* Light blue for links on dark background */
  text-decoration: none;
  transition: color 0.2s ease;
}

.terms-link:hover {
  color: #93c5fd;
  text-decoration: underline;
}

/* ==========================================
   FOOTER - DARK VARIANT
   ========================================== */

.footer--dark {
  background-color: var(--colors/surface/01, #04070b);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* ==========================================
   RESPONSIVE (MOBILE)
   ========================================== */

@media (max-width: 768px) {
  .terms-hero {
    padding: var(--spacing/super, 64px) var(--spacing/md, 16px) var(--spacing/xl, 24px);
  }

  .terms-hero__title {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.5px;
  }

  .terms-content {
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px) var(--spacing/super, 64px);
  }

  .terms-section__heading {
    font-size: 16px;
    line-height: 24px;
  }

  .terms-section__text {
    font-size: 14px;
    line-height: 20px;
  }
}
```

---

## CSS Variables Used

### Spacing
```css
--spacing/md: 16px          /* Section gap */
--spacing/xl: 24px          /* Mobile hero padding */
--spacing/3xl: 40px         /* Hero bottom padding, mobile content padding */
--spacing/super: 64px       /* Content padding, mobile hero padding */
--spacing/super-lg: 80px    /* Hero/content side padding */
--spacing/super-xxl: 120px  /* Hero top padding, content bottom padding */
```

### Colors
```css
--colors/surface/01: #04070b          /* Dark background */
--colors/text/01: #f9fafb             /* White text */
--colors/text/02: #d4d4d8             /* Light gray (footer) */
--colors/text/action/disabled: #71717a /* Gray (footer headings) */
```

### Typography
```css
/* Display Large (Title) */
--display/lg/font-family: 'Sora'
--display/lg/font-weight: 600
--display/lg/font-size: 56px (desktop) / 36px (mobile)
--display/lg/line-height: 64px (desktop) / 44px (mobile)
--display/lg/tracking: -2px (desktop) / -1.5px (mobile)

/* Label Large (Section Headings) */
--label/lg/font-family: 'Inter'
--label/lg/font-weight: 600
--label/lg/font-size: 18px (desktop) / 16px (mobile)
--label/lg/line-height: 28px (desktop) / 24px (mobile)
--tracking/global/label-lg: -0.5px

/* Body Medium (Body Text) */
--body/md/font-family: 'Inter'
--body/md/font-weight: 400
--body/md/font-size: 16px (desktop) / 14px (mobile)
--body/md/line-height: 24px (desktop) / 20px (mobile)
--tracking/global/body-md: 0px
```

---

## Design Specifications

### Page Layout
- **Background:** #04070b (dark)
- **Content width:** 798px (centered)
- **Side padding:** 80px (desktop), 16px (mobile)

### Hero Section
- **Top padding:** 120px (desktop), 64px (mobile)
- **Bottom padding:** 40px (desktop), 24px (mobile)
- **Title alignment:** Center
- **Title size:** 56px (desktop), 36px (mobile)

### Content Section
- **Top padding:** 64px (desktop), 40px (mobile)
- **Bottom padding:** 120px (desktop), 64px (mobile)
- **Section gap:** 24px between sections

### Typography Hierarchy
- **Page title:** 56px Sora Semibold (white)
- **Section headings:** 18px Inter Semibold (white)
- **Body text:** 16px Inter Regular (white)
- **Links:** Light blue (#60a5fa) with hover state

### Text Spacing
- **Heading to text:** 16px gap
- **Between paragraphs:** 16px gap
- **Between sections:** 24px gap

---

## Content Structure

### 7 Main Sections:

1. **Important notice**
   - Site operator information
   - Agreement definition
   - Contact information

2. **Changes to this Agreement and to our Site**
   - Terms amendment policy
   - Site availability disclaimer

3. **Materials and content available on our Site**
   - Intellectual property rights
   - Usage permissions
   - Commercial use restrictions

4. **Third party websites**
   - External links disclaimer
   - No endorsement policy

5. **Disclaimer and limitation of liability**
   - Liability exclusions
   - Intended use
   - Security responsibilities
   - Misuse prohibitions

6. **Use of Spixi software**
   - MIT license information
   - GitHub reference

7. **Governing Law**
   - UK jurisdiction statement

---

## Component Reuse

### ✅ **Reused Components:**

1. **Navbar** - Global component with dark variant
2. **Footer** - Global component with dark variant
3. **Button styles** - Secondary outline variant

### **Custom Additions:**

- `.terms-page` - Dark page background
- `.terms-hero` - Centered title section
- `.terms-content` - Centered content wrapper
- `.terms-section` - Individual content sections
- `.terms-link` - Email links with hover

---

## Email Links

All email links in the terms:
```html
<a href="mailto:support@spixi.io" class="terms-link">support@spixi.io</a>
```

**Styling:**
- Color: #60a5fa (light blue)
- Hover: #93c5fd (lighter blue) + underline
- Smooth transition: 0.2s ease

---

## Responsive Behavior

### Desktop (>768px)
- Content width: 798px centered
- Side padding: 80px
- Large title: 56px
- Body text: 16px
- Generous vertical spacing

### Mobile (≤768px)
- Content width: 100% (16px padding)
- Side padding: 16px
- Smaller title: 36px
- Body text: 14px
- Reduced vertical spacing
- Smaller section headings: 16px

---

## Dark Theme Implementation

### Background Colors
```css
body: #04070b
navbar: #04070b
hero: #04070b
content: #04070b
footer: #04070b
```

### Text Colors
```css
primary: #f9fafb (white)
secondary: #d4d4d8 (light gray)
disabled: #71717a (gray)
links: #60a5fa (light blue)
```

### Contrast
- White text on dark background
- High contrast for readability
- Subtle border on footer (rgba(255, 255, 255, 0.1))

---

## Accessibility

### Text Readability
- ✅ High contrast (white on dark)
- ✅ Generous line height (1.5)
- ✅ Readable font sizes (16px+)
- ✅ Clear hierarchy

### Links
- ✅ Distinct color (blue)
- ✅ Hover states
- ✅ Underline on hover
- ✅ Email links with mailto:

### Semantic HTML
- ✅ Proper heading hierarchy (h1, h2)
- ✅ Paragraph tags
- ✅ Section landmarks
- ✅ Navigation landmarks

---

## SEO & Meta Tags

```html
<head>
    <title>Terms of Use - Spixi</title>
    <meta name="description" content="Terms of Use for Spixi. Read our terms and conditions for using the Spixi website and software.">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Terms of Use - Spixi">
    <meta property="og:description" content="Terms and conditions for using Spixi">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://spixi.io/terms">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://spixi.io/terms">
</head>
```

---

## Legal Content Management

### Content Updates
To update terms:
1. Edit HTML content in `.terms-section` blocks
2. Maintain paragraph structure
3. Update copyright year in footer
4. Keep email links current

### Structure
Each section follows this pattern:
```html
<div class="terms-section">
  <h2 class="terms-section__heading">Section Title</h2>
  <p class="terms-section__text">Paragraph 1...</p>
  <p class="terms-section__text">Paragraph 2...</p>
  <!-- More paragraphs as needed -->
</div>
```

---

## Implementation Checklist

### Structure
- [ ] Create `terms.html` file
- [ ] Add navbar with dark variant
- [ ] Add hero section with title
- [ ] Add 7 content sections
- [ ] Add footer with dark variant

### Styling
- [ ] Add dark page background
- [ ] Style hero section
- [ ] Style content sections
- [ ] Style email links
- [ ] Add responsive styles
- [ ] Verify CSS variables exist

### Content
- [ ] Add all 7 sections of legal text
- [ ] Add email links (support@spixi.io)
- [ ] Verify paragraph breaks
- [ ] Check content accuracy
- [ ] Update copyright year

### Testing
- [ ] Test desktop layout (798px centered)
- [ ] Test mobile layout (responsive)
- [ ] Test email links work
- [ ] Test navbar links work
- [ ] Test footer links work
- [ ] Test contrast/readability
- [ ] Test on dark mode devices
- [ ] Validate HTML
- [ ] Check accessibility

---

## Alternative: Privacy Policy Page

To create a Privacy Policy page, duplicate this structure:

```html
<!-- privacy.html -->
<h1 class="terms-hero__title">Privacy Policy</h1>

<!-- Update content sections with privacy policy text -->
<div class="terms-section">
  <h2 class="terms-section__heading">Information We Collect</h2>
  <p class="terms-section__text">...</p>
</div>
<!-- etc. -->
```

**Same CSS works for:**
- Terms of Use
- Privacy Policy
- Cookie Policy
- Disclaimer
- Any legal/policy page

---

## Footer Integration

The footer on Terms page:
- Same structure as global footer
- Dark background variant (`.footer--dark`)
- White text on dark background
- Subtle top border
- All footer links functional

Update footer to include Terms link:
```html
<div class="footer__column">
  <p class="footer__heading">Company & legal</p>
  <a href="terms.html" class="footer__link">Terms of Use</a>
  <a href="privacy.html" class="footer__link">Privacy Policy</a>
</div>
```

---

## Print Styles (Optional)

Add print-friendly styles:

```css
@media print {
  .navbar,
  .footer {
    display: none;
  }

  .terms-page {
    background: white;
    color: black;
  }

  .terms-section__heading,
  .terms-section__text {
    color: black;
  }

  .terms-link {
    color: blue;
    text-decoration: underline;
  }
}
```

---

## Page Performance

### Optimization
- ✅ Minimal CSS (reuses global styles)
- ✅ No JavaScript required
- ✅ No images (except navbar logo)
- ✅ Fast page load
- ✅ Static content (SEO-friendly)

### File Size
- HTML: ~8-10KB
- CSS: Uses existing global styles
- Total: Very lightweight page

---

## Final Notes

### Key Features
- ✅ **Dark theme** throughout
- ✅ **Centered layout** (798px)
- ✅ **Clean typography** hierarchy
- ✅ **Reuses navbar/footer**
- ✅ **Responsive design**
- ✅ **High contrast** for readability
- ✅ **Simple structure** (7 sections)
- ✅ **Easy to update** content

### Best Practices
- ✅ Semantic HTML
- ✅ CSS variables for consistency
- ✅ Mobile-first approach
- ✅ Accessible markup
- ✅ SEO-optimized
- ✅ Print-friendly (optional)

### Maintenance
- Update legal text as needed
- Keep copyright year current
- Verify email links
- Test responsive layout after updates
- Check cross-browser compatibility

This Terms page provides a professional, readable legal document with consistent dark theme and proper typography! 📄
