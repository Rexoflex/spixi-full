# Mini Apps Page - Implementation Guide

## Overview
Build the complete Mini Apps landing page with hero, featured apps grid, developer section, resources, CTA, and footer.

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=252-5592`

---

## Page Structure

This page consists of 6 main sections:

1. **Hero Section** - Title, description, CTA buttons, app screenshots
2. **Featured Apps Section** - Grid of 4 mini app cards with pattern background  
3. **Developer Section** - Build mini apps content with 3 feature list items and illustration
4. **Resources Section** - 3 cards (Docs, GitHub, App Packer)
5. **CTA Band** - Download Spixi call-to-action with image
6. **Footer** - Standard footer component

---

## Section 1: Hero Section

### HTML Structure
```html
<section class="miniapps-hero">
  <!-- Navbar (reuse existing component) -->
  <nav class="navbar">
    <!-- Include navbar with "Mini Apps" active state -->
  </nav>

  <div class="miniapps-hero__container">
    <!-- Content -->
    <div class="miniapps-hero__content">
      <p class="miniapps-hero__subtitle">Browse Mini Apps, try them in Spixi, or build your own.</p>
      <h1 class="miniapps-hero__title">Apps that live where you already chat.</h1>
      <p class="miniapps-hero__description">Mini Apps add tools and games to Spixi without switching apps. Play with friends, share utilities in chat, or build custom experiences for your team or community.</p>
      
      <div class="miniapps-hero__cta">
        <button class="btn btn--primary btn--lg">
          <svg class="btn__icon"><!-- Icon --></svg>
          <span>Visit app directory</span>
        </button>
        <button class="btn btn--secondary btn--lg">
          <span>Build a Mini App</span>
        </button>
      </div>
    </div>

    <!-- Image -->
    <div class="miniapps-hero__image">
      <img src="assets/img/apps-front.png" alt="" class="miniapps-hero__img-front">
      <img src="assets/img/apps-back.png" alt="" class="miniapps-hero__img-back">
    </div>
  </div>
</section>
```

### CSS
```css
.miniapps-hero {
  background-color: var(--colors/surface/02, #081016);
  height: 581px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  position: relative;
  overflow: hidden;
}

.miniapps-hero__container {
  display: flex;
  align-items: center;
  padding: 0 var(--spacing/super-lg, 80px);
  height: 100%;
  position: relative;
}

.miniapps-hero__content {
  width: 628px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
}

.miniapps-hero__subtitle {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
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
  white-space: pre-wrap;
}

.miniapps-hero__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  white-space: pre-wrap;
}

.miniapps-hero__cta {
  width: 511px;
  display: flex;
  gap: var(--spacing/sm, 12px);
}

.miniapps-hero__image {
  position: absolute;
  right: 137px;
  top: 79px;
  width: 448px;
  height: 527px;
}

.miniapps-hero__img-back {
  position: absolute;
  right: 0;
  top: 77px;
  width: 192px;
  height: 430px;
  transform: scaleY(-1) rotate(180deg);
  opacity: 0.9;
}

.miniapps-hero__img-front {
  position: absolute;
  left: 0;
  top: 27px;
  width: 274px;
  height: 527px;
}
```

---

## Section 2: Featured Apps

### HTML Structure
```html
<section class="featured-apps">
  <div class="featured-apps__container">
    <!-- Pattern Background -->
    <div class="featured-apps__pattern">
      <img src="assets/img/pattern.png" alt="">
    </div>

    <!-- Header -->
    <div class="featured-apps__header">
      <p class="featured-apps__label">Community & IXI Labs</p>
      <h2 class="featured-apps__title">Featured Mini Apps</h2>
      <p class="featured-apps__description">Featured Mini Apps from IXI Labs and independent developers. Explore freely, but remember community apps aren't reviewed or verified by the Spixi team.</p>
    </div>

    <!-- Apps Grid -->
    <div class="featured-apps__grid">
      <!-- App Card 1: AI Assistant -->
      <div class="app-card">
        <div class="app-card__header">
          <img src="assets/img/app-ai.png" alt="" class="app-card__image">
          <span class="app-card__badge">Category</span>
        </div>
        <div class="app-card__content">
          <div class="app-card__meta">
            <h3 class="app-card__title">AI Assistant</h3>
            <p class="app-card__author">Serg</p>
          </div>
          <p class="app-card__description">Local LLM accessed and charged over Spixi and Ixian Platform.</p>
          <div class="app-card__actions">
            <button class="btn btn--secondary btn--sm">Try in Spixi</button>
            <a href="#" class="app-card__link">
              <svg><!-- GitHub icon --></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Repeat for 3 more apps -->
    </div>

    <button class="btn btn--primary btn--lg">
      <svg><!-- Icon --></svg>
      <span>View all apps</span>
    </button>
  </div>
</section>
```

### CSS
```css
.featured-apps {
  background-color: var(--colors/surface/01, #04070b);
  border-top: 1px solid var(--colors/outline/02, #172330);
  padding: var(--spacing/super-xxl, 120px) 0;
}

.featured-apps__container {
  max-width: 1344px;
  margin: 0 auto;
  padding: var(--spacing/super-lg, 80px) var(--spacing/xxl, 32px);
  border-radius: var(--corner-radius/xxl, 32px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing/super, 64px);
  position: relative;
  overflow: hidden;
}

.featured-apps__pattern {
  position: absolute;
  right: 0;
  top: 0;
  width: 509px;
  height: 316px;
  pointer-events: none;
}

.featured-apps__header {
  max-width: 845px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
}

.featured-apps__label {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/accent, #c987d9);
  padding-bottom: var(--spacing/xs, 8px);
  margin: 0;
}

.featured-apps__title {
  font-family: var(--display/md/font-family, 'Sora', sans-serif);
  font-weight: var(--display/md/font-weight, 500);
  font-size: var(--display/md/font-size, 44px);
  line-height: var(--display/md/line-height, 52px);
  letter-spacing: var(--display/md/tracking, -2px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  white-space: pre-wrap;
}

.featured-apps__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
  white-space: pre-wrap;
}

.featured-apps__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing/xl, 24px);
  width: 100%;
}

/* App Card Component */
.app-card {
  background-color: var(--colors/surface/02, #081016);
  border: 1px solid var(--colors/outline/02, #172330);
  border-radius: var(--corner-radius/lg, 16px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xs, 8px);
  height: 100%;
}

.app-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing/xs, 8px);
}

.app-card__image {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid var(--colors/outline/03, #3f3f46);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.app-card__badge {
  background-color: var(--colors/surface/04, #172330);
  padding: var(--spacing/xxs, 4px) var(--spacing/xs, 8px);
  border-radius: var(--corner-radius/sm, 8px);
  font-family: var(--label/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--label/xs/font-weight, 600);
  font-size: var(--label/xs/font-size, 12px);
  line-height: var(--label/xs/line-height, 16px);
  letter-spacing: var(--tracking/global/label-xs, -0.5px);
  color: var(--colors/text/01, #f9fafb);
}

.app-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xl, 24px);
  flex: 1;
}

.app-card__meta {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xxs, 4px);
}

.app-card__title {
  font-family: var(--heading/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--heading/sm/font-weight, 600);
  font-size: var(--heading/sm/font-size, 20px);
  line-height: var(--heading/sm/line-height, 28px);
  letter-spacing: var(--tracking/heading/heading-sm, -0.5px);
  color: var(--colors/text/01, #fafafa);
  margin: 0;
}

.app-card__author {
  font-family: var(--body/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--body/xs/font-weight, 400);
  font-size: var(--body/xs/font-size, 12px);
  line-height: var(--body/xs/line-height, 16px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
}

.app-card__description {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  color: var(--colors/text/01, #fafafa);
  margin: 0;
  white-space: pre-wrap;
  height: 40px;
  overflow: hidden;
}

.app-card__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.app-card__link {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## Section 3: Developer Section

### HTML Structure
```html
<section class="developer-section">
  <div class="developer-section__container">
    <!-- Content Left -->
    <div class="developer-section__content">
      <div class="developer-section__header">
        <p class="developer-section__label">For Developers</p>
        <h2 class="developer-section__title">Build Mini Apps for Spixi</h2>
        <p class="developer-section__description">Use HTML, CSS, and JavaScript or TypeScript with the Spixi Mini Apps SDK to add tools and games directly to chats. Ship fast, host code your way, and reach users where conversations already happen.</p>
      </div>

      <!-- Feature List -->
      <div class="developer-section__features">
        <!-- Feature 1 -->
        <div class="list-item">
          <div class="list-item__icon-container">
            <svg class="list-item__icon"><!-- Code icon --></svg>
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">Familiar stack</h3>
            <p class="list-item__description">Build with standard web tech and the Spixi Mini Apps SDK. No custom runtime or exotic tooling.</p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="list-item">
          <div class="list-item__icon-container">
            <svg class="list-item__icon"><!-- Chat icon --></svg>
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">Deep chat integration</h3>
            <p class="list-item__description">Run your app inside chats, share results into the conversation, and optionally connect to the IXI wallet.</p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="list-item">
          <div class="list-item__icon-container">
            <svg class="list-item__icon"><!-- Share icon --></svg>
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">Simple distribution</h3>
            <p class="list-item__description">Share apps via links or chat, then submit them to the Spixi Mini Apps gallery when you're ready.</p>
          </div>
        </div>
      </div>

      <button class="btn btn--primary btn--lg">
        <svg><!-- Icon --></svg>
        <span>Submit Mini App</span>
      </button>
    </div>

    <!-- Illustration Right -->
    <div class="developer-section__illustration">
      <img src="assets/img/vr-illustration.png" alt="" style="opacity: 0.75">
    </div>
  </div>
</section>
```

### CSS
```css
.developer-section {
  background-color: var(--colors/surface/01, #04070b);
  padding: var(--spacing/super-lg, 80px) var(--spacing/xxl, 32px);
}

.developer-section__container {
  max-width: 1344px;
  margin: 0 auto;
  border-radius: var(--corner-radius/xxl, 32px);
  padding: var(--spacing/super-lg, 80px) var(--spacing/xxl, 32px);
  display: flex;
  gap: 26px;
  align-items: center;
  position: relative;
}

.developer-section__content {
  width: 834px;
  padding-left: 0;
  padding-right: var(--spacing/super, 64px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
}

.developer-section__header {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.developer-section__label {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/accent, #c987d9);
  padding-bottom: var(--spacing/xs, 8px);
  margin: 0;
}

.developer-section__title {
  font-family: var(--display/md/font-family, 'Sora', sans-serif);
  font-weight: var(--display/md/font-weight, 500);
  font-size: var(--display/md/font-size, 44px);
  line-height: var(--display/md/line-height, 52px);
  letter-spacing: var(--display/md/tracking, -2px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0 0 var(--spacing/md, 16px) 0;
}

.developer-section__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
}

.developer-section__features {
  width: 445px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xxl, 32px);
}

/* Reuse list-item component styles */
.list-item {
  display: flex;
  gap: var(--spacing/lg, 20px);
  align-items: center;
}

.list-item__icon-container {
  background-color: var(--colors/surface/02, #081016);
  padding: var(--spacing/sm, 12px);
  border-radius: var(--corner-radius/xxl, 32px);
  flex-shrink: 0;
}

.list-item__icon {
  width: 32px;
  height: 32px;
  color: var(--colors/text/accent, #c987d9);
}

.list-item__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xs, 8px);
  white-space: pre-wrap;
}

.list-item__title {
  font-family: var(--label/lg/font-family, 'Inter', sans-serif);
  font-weight: var(--label/lg/font-weight, 600);
  font-size: var(--label/lg/font-size, 18px);
  line-height: var(--label/lg/line-height, 28px);
  letter-spacing: var(--tracking/global/label-lg, -0.5px);
  color: var(--colors/text/01, #f9fafb);
  margin: 0;
}

.list-item__description {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
}

.developer-section__illustration {
  position: absolute;
  right: 0;
  width: 587px;
  height: 587px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.developer-section__illustration img {
  width: 594px;
  height: 594px;
}
```

---

## Section 4: Resources Section

### HTML Structure
```html
<section class="resources-section">
  <div class="resources-section__container">
    <div class="resources-section__grid">
      
      <!-- Resource Card 1: Docs -->
      <div class="card-md">
        <div class="card-md__icon-container">
          <svg class="card-md__icon"><!-- Doc icon --></svg>
        </div>
        <div class="card-md__text">
          <h3 class="card-md__title">Read the Mini Apps docs</h3>
          <p class="card-md__body">Learn how Mini Apps work, integrate with chats and the IXI wallet, and publish in Spixi.</p>
        </div>
        <button class="btn btn--secondary btn--sm">
          <span>Open docs</span>
          <svg><!-- External icon --></svg>
        </button>
      </div>

      <!-- Resource Card 2: GitHub -->
      <div class="card-md">
        <div class="card-md__icon-container">
          <svg class="card-md__icon" style="width: 128px; height: 128px;"><!-- GitHub large --></svg>
        </div>
        <div class="card-md__text">
          <h3 class="card-md__title">View example apps on GitHub</h3>
          <p class="card-md__body">Clone sample Mini Apps and reuse their UI and messaging flows for your own ideas.</p>
        </div>
        <button class="btn btn--secondary btn--sm">
          <span>Open GitHub</span>
          <svg><!-- External icon --></svg>
        </button>
      </div>

      <!-- Resource Card 3: App Packer -->
      <div class="card-md">
        <div class="card-md__icon-container">
          <svg class="card-md__icon"><!-- Package icon --></svg>
        </div>
        <div class="card-md__text">
          <h3 class="card-md__title">Use the App Packer</h3>
          <p class="card-md__body">Bundle your Mini App for Spixi, test it locally, and prepare it for the gallery.</p>
        </div>
        <button class="btn btn--secondary btn--sm">
          <span>Open App Packer</span>
          <svg><!-- External icon --></svg>
        </button>
      </div>

    </div>
  </div>
</section>
```

### CSS
```css
.resources-section {
  background-color: var(--colors/surface/01, #04070b);
  padding: var(--spacing/super-lg, 80px) var(--spacing/xxl, 32px);
}

.resources-section__container {
  max-width: 1344px;
  margin: 0 auto;
  padding: var(--spacing/super-lg, 80px) var(--spacing/xxl, 32px);
  border-radius: var(--corner-radius/xxl, 32px);
}

.resources-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing/xl, 24px);
  height: 340px;
}

/* Card-md already defined, just add button at bottom */
.resources-section .card-md {
  background-color: var(--colors/surface/01, #04070b);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

---

## Section 5: CTA Band

(Reuse existing CTA Band component from previous guide)

---

## Section 6: Footer

(Reuse existing Footer component)

---

## Assets Required

### Images
Place in `assets/img/`:
- `apps-front.png` (274×527px) - Front phone mockup
- `apps-back.png` (192×430px) - Back phone mockup  
- `pattern.png` (509×316px) - Decorative pattern
- `app-ai.png` (64×64px) - AI Assistant app icon
- `app-ixijump.png` (64×64px) - IXIJump app icon
- `app-calculator.png` (64×64px) - Calculator app icon
- `app-pong.png` (64×64px) - Pong app icon
- `vr-illustration.png` (594×594px) - VR illustration
- `cta-image-desktop.png` (540×632px) - CTA image

### Icons (SVG)
- Code icon (32×32px)
- Chat icon (32×32px)
- Share icon (32×32px)
- Document icon (32×32px)
- GitHub icon (32×32px, 128×128px)
- Package icon (32×32px)
- External link icon (16×16px)
- Arrow right icon (24×24px)

---

## App Card Data

### App 1: AI Assistant
- **Icon:** `app-ai.png`
- **Title:** "AI Assistant"
- **Author:** "Serg"
- **Description:** "Local LLM accessed and charged over Spixi and Ixian Platform."
- **Badge:** "Category"

### App 2: IXIJump
- **Icon:** `app-ixijump.png`
- **Title:** "IXIJump"
- **Author:** "Spoony"
- **Description:** "A fast-paced tapping game built for Spixi. Simple and addictive."
- **Badge:** "Category"

### App 3: Spixi Calculator
- **Icon:** `app-calculator.png`
- **Title:** "Spixi Calculator"
- **Author:** "Spoony"
- **Description:** "Draw together in real time. Share doodles and notes with friends."
- **Badge:** "Category"

### App 4: IXI Pong
- **Icon:** `app-pong.png`
- **Title:** "IXI Pong"
- **Author:** "Baracuda"
- **Description:** "Classic game of Pong, but this time play it in Spixi."
- **Badge:** "Category"

---

## Responsive Design (Mobile)

```css
@media (max-width: 768px) {
  /* Hero */
  .miniapps-hero {
    height: auto;
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px);
  }

  .miniapps-hero__container {
    flex-direction: column;
    gap: var(--spacing/3xl, 40px);
  }

  .miniapps-hero__content {
    width: 100%;
  }

  .miniapps-hero__title {
    font-size: 36px;
    line-height: 44px;
  }

  .miniapps-hero__cta {
    width: 100%;
    flex-direction: column;
  }

  .miniapps-hero__image {
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
    height: auto;
  }

  /* Featured Apps */
  .featured-apps__grid {
    grid-template-columns: 1fr;
  }

  /* Developer Section */
  .developer-section__container {
    flex-direction: column;
  }

  .developer-section__content {
    width: 100%;
    padding-right: 0;
  }

  .developer-section__features {
    width: 100%;
  }

  .developer-section__illustration {
    position: relative;
    width: 100%;
    height: auto;
  }

  /* Resources */
  .resources-section__grid {
    grid-template-columns: 1fr;
    height: auto;
  }
}
```

---

## Implementation Checklist

- [ ] Create HTML structure with all 6 sections
- [ ] Add CSS with all variables
- [ ] Download all image assets (apps, illustrations, patterns)
- [ ] Create/download all icon SVGs
- [ ] Reuse existing navbar component with "Mini Apps" active
- [ ] Reuse existing button styles
- [ ] Implement 4 app cards with proper data
- [ ] Add 3 list items in developer section
- [ ] Add 3 resource cards
- [ ] Reuse existing CTA band component
- [ ] Reuse existing footer component
- [ ] Test desktop layout (all sections)
- [ ] Test mobile responsive (stacked layouts)
- [ ] Verify all typography matches design
- [ ] Verify all spacing uses variables
- [ ] Test all buttons and links

---

## Key Variables Used

```css
/* Spacing */
--spacing/xxs: 4px
--spacing/xs: 8px
--spacing/sm: 12px
--spacing/md: 16px
--spacing/lg: 20px
--spacing/xl: 24px
--spacing/xxl: 32px
--spacing/3xl: 40px
--spacing/super: 64px
--spacing/super-lg: 80px
--spacing/super-xxl: 120px

/* Colors */
--colors/surface/01: #04070b
--colors/surface/02: #081016
--colors/surface/04: #172330
--colors/text/01: #f9fafb
--colors/text/02: #d4d4d8
--colors/text/accent: #c987d9
--colors/outline/02: #172330
--colors/outline/03: #3f3f46

/* Typography */
--body/sm/*, --body/md/*, --body/xs/*
--label/sm/*, --label/md/*, --label/lg/*, --label/xs/*
--heading/sm/*, --heading/md/*
--display/md/*, --display/lg/*

/* Border Radius */
--corner-radius/sm: 8px
--corner-radius/md: 12px
--corner-radius/lg: 16px
--corner-radius/xxl: 32px
```

---

## Final Notes

- This is a **complete landing page** with 6 distinct sections
- Reuse **existing components**: navbar, buttons, footer, card-md, list-item
- All images should be **downloaded** from Figma asset URLs (7-day expiry)
- Pattern background has **low opacity** (visible but subtle)
- Hero images are **positioned absolutely** and layered
- Featured apps use a **4-column grid** on desktop, **1-column** on mobile
- Developer section has **illustration positioned absolutely** on the right
- Resources section uses **3-column grid** on desktop, **stacks** on mobile
- All sections use **CSS variables** consistently
- Mobile breakpoint: **768px**
