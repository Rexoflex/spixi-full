# Featured Mini Apps Section - Implementation Guide

## Overview
Build the "Featured Mini Apps" section that displays 4 app cards in a single horizontal row with a header and "View all apps" button. This section sits below the hero section on the Mini Apps page.

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-16170`

**Container Reference:** This section follows the same container pattern as the homepage features section (max-width: 1280px, 32px padding, 32px border-radius).

---

## HTML Structure

```html
<section class="featured-apps">
  <div class="featured-apps__container">
    
    <!-- Section Header -->
    <div class="featured-apps__header">
      <div class="featured-apps__title-group">
        <div class="featured-apps__overline">
          <p class="featured-apps__label">Community & IXI Labs</p>
        </div>
        <h2 class="featured-apps__title">Featured Mini Apps</h2>
        <p class="featured-apps__description">Featured Mini Apps from IXI Labs and independent developers. Explore freely, but remember community apps aren't reviewed or verified by the Spixi team.</p>
      </div>
    </div>

    <!-- Apps Grid (4 Columns) -->
    <div class="featured-apps__grid">
      
      <!-- App Card 1: AI Assistant -->
      <div class="app-card">
        <div class="app-card__header">
          <img src="assets/img/app-ai.png" alt="AI Assistant" class="app-card__icon">
          <span class="app-card__badge">Category</span>
        </div>
        <div class="app-card__content">
          <div class="app-card__meta">
            <h3 class="app-card__title">AI Assistant</h3>
            <p class="app-card__publisher">Serg</p>
          </div>
          <p class="app-card__description">Local LLM accessed and charged over Spixi and Ixian Platform.</p>
          <div class="app-card__actions">
            <button class="btn btn--secondary-outline btn--sm">Try in Spixi</button>
            <a href="#" class="app-card__github" aria-label="View AI Assistant on GitHub">
              <svg class="app-card__github-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 3C8.82 3 3 8.82 3 16C3 21.75 7.03 26.56 12.44 28.25C13.04 28.36 13.25 27.99 13.25 27.67C13.25 27.38 13.24 26.62 13.24 25.81C9.5 26.54 8.8 24.62 8.6 23.63C8.49 23.13 7.9 22.25 7.37 21.96C6.94 21.75 6.34 21.02 7.36 21.01C8.3 21 8.94 21.85 9.12 22.22C10.22 24.03 11.97 23.51 13.28 23.19C13.38 22.49 13.67 21.96 13.99 21.65C11.24 21.34 8.36 20.3 8.36 15.56C8.36 14.21 8.85 13.1 9.14 12.23C9.03 11.92 8.64 10.69 9.25 9.05C9.25 9.05 10.28 8.73 13.25 10.72C14.25 10.44 15.3 10.3 16.35 10.3C17.4 10.3 18.45 10.44 19.45 10.72C22.42 8.72 23.45 9.05 23.45 9.05C24.06 10.69 23.67 11.92 23.56 12.23C23.85 13.1 24.34 14.2 24.34 15.56C24.34 20.31 21.45 21.34 18.7 21.65C19.1 22 19.44 22.67 19.44 23.72C19.44 25.25 19.43 26.48 19.43 27.67C19.43 27.99 19.64 28.37 20.24 28.25C25.63 26.56 29.66 21.74 29.66 16C29.66 8.82 23.84 3 16.66 3H16Z" fill="#04070b"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- App Card 2: IXIJump -->
      <div class="app-card">
        <div class="app-card__header">
          <img src="assets/img/app-ixijump.png" alt="IXIJump" class="app-card__icon">
          <span class="app-card__badge">Category</span>
        </div>
        <div class="app-card__content">
          <div class="app-card__meta">
            <h3 class="app-card__title">IXIJump</h3>
            <p class="app-card__publisher">Spoony</p>
          </div>
          <p class="app-card__description">A fast-paced tapping game built for Spixi. Simple and addictive.</p>
          <div class="app-card__actions">
            <button class="btn btn--secondary-outline btn--sm">Try in Spixi</button>
            <a href="#" class="app-card__github" aria-label="View IXIJump on GitHub">
              <svg class="app-card__github-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 3C8.82 3 3 8.82 3 16C3 21.75 7.03 26.56 12.44 28.25C13.04 28.36 13.25 27.99 13.25 27.67C13.25 27.38 13.24 26.62 13.24 25.81C9.5 26.54 8.8 24.62 8.6 23.63C8.49 23.13 7.9 22.25 7.37 21.96C6.94 21.75 6.34 21.02 7.36 21.01C8.3 21 8.94 21.85 9.12 22.22C10.22 24.03 11.97 23.51 13.28 23.19C13.38 22.49 13.67 21.96 13.99 21.65C11.24 21.34 8.36 20.3 8.36 15.56C8.36 14.21 8.85 13.1 9.14 12.23C9.03 11.92 8.64 10.69 9.25 9.05C9.25 9.05 10.28 8.73 13.25 10.72C14.25 10.44 15.3 10.3 16.35 10.3C17.4 10.3 18.45 10.44 19.45 10.72C22.42 8.72 23.45 9.05 23.45 9.05C24.06 10.69 23.67 11.92 23.56 12.23C23.85 13.1 24.34 14.2 24.34 15.56C24.34 20.31 21.45 21.34 18.7 21.65C19.1 22 19.44 22.67 19.44 23.72C19.44 25.25 19.43 26.48 19.43 27.67C19.43 27.99 19.64 28.37 20.24 28.25C25.63 26.56 29.66 21.74 29.66 16C29.66 8.82 23.84 3 16.66 3H16Z" fill="#04070b"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- App Card 3: Spixi Calculator -->
      <div class="app-card">
        <div class="app-card__header">
          <img src="assets/img/app-calculator.png" alt="Spixi Calculator" class="app-card__icon">
          <span class="app-card__badge">Category</span>
        </div>
        <div class="app-card__content">
          <div class="app-card__meta">
            <h3 class="app-card__title">Spixi Calculator</h3>
            <p class="app-card__publisher">Spoony</p>
          </div>
          <p class="app-card__description">Draw together in real time. Share doodles and notes with friends.</p>
          <div class="app-card__actions">
            <button class="btn btn--secondary-outline btn--sm">Try in Spixi</button>
            <a href="#" class="app-card__github" aria-label="View Spixi Calculator on GitHub">
              <svg class="app-card__github-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 3C8.82 3 3 8.82 3 16C3 21.75 7.03 26.56 12.44 28.25C13.04 28.36 13.25 27.99 13.25 27.67C13.25 27.38 13.24 26.62 13.24 25.81C9.5 26.54 8.8 24.62 8.6 23.63C8.49 23.13 7.9 22.25 7.37 21.96C6.94 21.75 6.34 21.02 7.36 21.01C8.3 21 8.94 21.85 9.12 22.22C10.22 24.03 11.97 23.51 13.28 23.19C13.38 22.49 13.67 21.96 13.99 21.65C11.24 21.34 8.36 20.3 8.36 15.56C8.36 14.21 8.85 13.1 9.14 12.23C9.03 11.92 8.64 10.69 9.25 9.05C9.25 9.05 10.28 8.73 13.25 10.72C14.25 10.44 15.3 10.3 16.35 10.3C17.4 10.3 18.45 10.44 19.45 10.72C22.42 8.72 23.45 9.05 23.45 9.05C24.06 10.69 23.67 11.92 23.56 12.23C23.85 13.1 24.34 14.2 24.34 15.56C24.34 20.31 21.45 21.34 18.7 21.65C19.1 22 19.44 22.67 19.44 23.72C19.44 25.25 19.43 26.48 19.43 27.67C19.43 27.99 19.64 28.37 20.24 28.25C25.63 26.56 29.66 21.74 29.66 16C29.66 8.82 23.84 3 16.66 3H16Z" fill="#04070b"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- App Card 4: IXI Pong -->
      <div class="app-card">
        <div class="app-card__header">
          <img src="assets/img/app-pong.png" alt="IXI Pong" class="app-card__icon">
          <span class="app-card__badge">Category</span>
        </div>
        <div class="app-card__content">
          <div class="app-card__meta">
            <h3 class="app-card__title">IXI Pong</h3>
            <p class="app-card__publisher">Baracuda</p>
          </div>
          <p class="app-card__description">Classic game of Pong, but this time play it in Spixi.</p>
          <div class="app-card__actions">
            <button class="btn btn--secondary-outline btn--sm">Try in Spixi</button>
            <a href="#" class="app-card__github" aria-label="View IXI Pong on GitHub">
              <svg class="app-card__github-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 3C8.82 3 3 8.82 3 16C3 21.75 7.03 26.56 12.44 28.25C13.04 28.36 13.25 27.99 13.25 27.67C13.25 27.38 13.24 26.62 13.24 25.81C9.5 26.54 8.8 24.62 8.6 23.63C8.49 23.13 7.9 22.25 7.37 21.96C6.94 21.75 6.34 21.02 7.36 21.01C8.3 21 8.94 21.85 9.12 22.22C10.22 24.03 11.97 23.51 13.28 23.19C13.38 22.49 13.67 21.96 13.99 21.65C11.24 21.34 8.36 20.3 8.36 15.56C8.36 14.21 8.85 13.1 9.14 12.23C9.03 11.92 8.64 10.69 9.25 9.05C9.25 9.05 10.28 8.73 13.25 10.72C14.25 10.44 15.3 10.3 16.35 10.3C17.4 10.3 18.45 10.44 19.45 10.72C22.42 8.72 23.45 9.05 23.45 9.05C24.06 10.69 23.67 11.92 23.56 12.23C23.85 13.1 24.34 14.2 24.34 15.56C24.34 20.31 21.45 21.34 18.7 21.65C19.1 22 19.44 22.67 19.44 23.72C19.44 25.25 19.43 26.48 19.43 27.67C19.43 27.99 19.64 28.37 20.24 28.25C25.63 26.56 29.66 21.74 29.66 16C29.66 8.82 23.84 3 16.66 3H16Z" fill="#04070b"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>

    <!-- View All Button -->
    <button class="btn btn--primary btn--lg featured-apps__cta">
      <svg class="btn__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="btn__label">View all apps</span>
    </button>

  </div>
</section>
```

---

## CSS Implementation

```css
/* ==========================================
   FEATURED MINI APPS SECTION
   ========================================== */

.featured-apps {
  /* CRITICAL: Match homepage features section container behavior */
  background: linear-gradient(135deg, #1a1147 0%, #0a2540 50%, #0f3460 100%);
  padding: var(--spacing/super-lg, 80px) var(--spacing/xxl, 32px);
  border-radius: var(--corner-radius/xxl, 32px);
  position: relative;
  overflow: hidden;
}

.featured-apps__container {
  /* CRITICAL: Same as homepage features section */
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/super, 64px);
  position: relative;
}

/* ==========================================
   SECTION HEADER
   ========================================== */

.featured-apps__header {
  width: 845px;
  max-width: 100%;
}

.featured-apps__title-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
}

.featured-apps__overline {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 var(--spacing/xs, 8px) 0;
  width: fit-content;
}

.featured-apps__label {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/accent, #ad4fc4);
  margin: 0;
}

.featured-apps__title {
  font-family: var(--display/md/font-family, 'Sora', sans-serif);
  font-weight: var(--display/md/font-weight, 500);
  font-size: var(--display/md/font-size, 44px);
  line-height: var(--display/md/line-height, 52px);
  letter-spacing: var(--display/md/tracking, -2px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
  white-space: pre-wrap;
}

.featured-apps__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
  white-space: pre-wrap;
}

/* ==========================================
   APPS GRID (4 COLUMNS)
   ========================================== */

.featured-apps__grid {
  display: flex;
  gap: var(--spacing/xl, 24px);
  width: 100%;
}

.featured-apps__grid .app-card {
  flex: 1 0 0;
  min-width: 0;
  /* Override app-card background for this section */
  background-color: var(--colors/surface/02, #081016);
}

/* ==========================================
   APP CARD COMPONENT (Used in Grid)
   ========================================== */

.app-card {
  background-color: var(--colors/surface/02, #081016);
  border: 1px solid var(--colors/outline/02, #172330);
  border-radius: var(--corner-radius/lg, 16px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xs, 8px);
  transition: background-color 0.2s ease;
  cursor: pointer;
  height: 100%;
}

.app-card:hover {
  background-color: var(--colors/surface/04, #172330);
}

/* Header: Icon + Badge */
.app-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.app-card__icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid var(--colors/outline/03, #3f3f46);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  object-fit: cover;
  flex-shrink: 0;
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
  text-align: center;
  flex-shrink: 0;
}

/* Content Area */
.app-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xl, 24px);
  width: 100%;
  flex: 1;
}

/* Meta: Title + Publisher */
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

.app-card__publisher {
  font-family: var(--body/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--body/xs/font-weight, 400);
  font-size: var(--body/xs/font-size, 12px);
  line-height: var(--body/xs/line-height, 16px);
  letter-spacing: var(--tracking/global/body-xs, 0px);
  color: var(--colors/text/02, #d4d4d8);
  margin: 0;
}

/* Description */
.app-card__description {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/body-sm, 0px);
  color: var(--colors/text/01, #fafafa);
  margin: 0;
  white-space: pre-wrap;
  height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Actions: Button + GitHub */
.app-card__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
}

.app-card__actions .btn--sm {
  width: 123px;
  padding: var(--spacing/xs, 8px) var(--spacing/sm, 12px);
  border: 2px solid var(--colors/outline/action-secondary/default, #f9fafb);
  border-radius: var(--corner-radius/md, 12px);
  background-color: transparent;
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/on-action, #f9fafb);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.app-card__actions .btn--sm:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.app-card__github {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.app-card__github:hover {
  opacity: 0.8;
}

.app-card__github-icon {
  width: 32px;
  height: 32px;
  display: block;
}

/* ==========================================
   VIEW ALL BUTTON
   ========================================== */

.featured-apps__cta {
  height: 66px;
  align-self: flex-start;
}

.btn--primary {
  background-color: var(--colors/surface/action/default, #0b70d5);
  color: var(--colors/text/on-action, #f9fafb);
  border: none;
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
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary:hover {
  background-color: #095ba8;
}

.btn__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.btn__label {
  padding: 0 var(--spacing/xs, 8px);
}

/* ==========================================
   RESPONSIVE (MOBILE)
   ========================================== */

@media (max-width: 1024px) {
  .featured-apps__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .featured-apps {
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px);
    border-radius: var(--corner-radius/xl, 24px);
  }

  .featured-apps__container {
    gap: var(--spacing/3xl, 40px);
  }

  .featured-apps__header {
    width: 100%;
  }

  .featured-apps__title {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.5px;
  }

  .featured-apps__grid {
    grid-template-columns: 1fr;
  }

  .featured-apps__cta {
    width: 100%;
  }
}
```

---

## Design Specifications

### Section Container
- **Max-width:** 1280px (matches homepage features section)
- **Padding:** 80px (vertical) × 32px (horizontal)
- **Border radius:** 32px
- **Background:** Gradient `linear-gradient(135deg, #1a1147 0%, #0a2540 50%, #0f3460 100%)`
- **Gap between elements:** 64px

### Header
- **Width:** 845px (desktop), 100% (mobile)
- **Label color:** #ad4fc4 (purple accent)
- **Title:** 44px Sora Medium, 52px line-height
- **Description:** 16px Inter Regular, 24px line-height
- **Gap:** 16px between label, title, and description

### Apps Grid
- **Layout:** Flexbox, 4 equal columns
- **Gap:** 24px
- **Card flex:** `flex: 1 0 0` (equal width columns)
- **Card min-width:** 0 (allows flex shrink)

### App Cards
- **Background:** #081016 (darker than card-md component)
- **Border:** 1px solid #172330
- **Padding:** 16px
- **Border radius:** 16px
- **Height:** 100% (equal heights in row)
- **Hover:** Background changes to #172330

### Card Components
- **Icon:** 64×64px, 16px border-radius, 1px border, shadow
- **Badge:** 4px × 8px padding, 8px border-radius
- **Title:** 20px semibold, 28px line-height
- **Publisher:** 12px regular, gray color
- **Description:** 14px regular, 40px fixed height, 2-line clamp
- **Button:** 123px width, 2px white border
- **GitHub icon:** 32×32px

### View All Button
- **Height:** 66px
- **Background:** #0b70d5 (primary blue)
- **Icon:** 24×24px arrow
- **Label:** 16px semibold
- **Hover:** Darker blue (#095ba8)

---

## CSS Variables Used

### Spacing
```css
--spacing/xxs: 4px      /* Badge padding, meta gap */
--spacing/xs: 8px       /* Badge padding, overline padding, card gap */
--spacing/sm: 12px      /* Button padding */
--spacing/md: 16px      /* Title group gap, button padding */
--spacing/xl: 24px      /* Grid gap, content gap */
--spacing/3xl: 40px     /* Mobile section padding */
--spacing/super: 64px   /* Container gap */
--spacing/super-lg: 80px /* Section padding */
--spacing/xxl: 32px     /* Section horizontal padding */
```

### Colors
```css
--colors/text/accent: #ad4fc4         /* Label purple */
--colors/text/01: #04070b             /* Title, description (dark) */
--colors/text/01: #fafafa             /* Card title, description (light) */
--colors/text/02: #d4d4d8             /* Card publisher */
--colors/text/on-action: #f9fafb      /* Button text */
--colors/surface/02: #081016          /* Card background */
--colors/surface/04: #172330          /* Card hover, badge */
--colors/outline/02: #172330          /* Card border */
--colors/outline/03: #3f3f46          /* Icon border */
--colors/surface/action/default: #0b70d5 /* Button blue */
--colors/outline/action-secondary/default: #f9fafb /* Button border */
```

### Typography
```css
/* Label Small (Section Label) */
--label/sm/font-family: 'Inter'
--label/sm/font-weight: 600
--label/sm/font-size: 14px
--label/sm/line-height: 20px
--tracking/global/label-sm: -0.5px

/* Display Medium (Section Title) */
--display/md/font-family: 'Sora'
--display/md/font-weight: 500
--display/md/font-size: 44px (desktop) / 36px (mobile)
--display/md/line-height: 52px (desktop) / 44px (mobile)
--display/md/tracking: -2px (desktop) / -1.5px (mobile)

/* Body Medium (Section Description) */
--body/md/font-family: 'Inter'
--body/md/font-weight: 400
--body/md/font-size: 16px
--body/md/line-height: 24px
--tracking/global/body-md: 0px

/* Label Extra Small (Badge) */
--label/xs/font-family: 'Inter'
--label/xs/font-weight: 600
--label/xs/font-size: 12px
--label/xs/line-height: 16px
--tracking/global/label-xs: -0.5px

/* Heading Small (Card Title) */
--heading/sm/font-family: 'Inter'
--heading/sm/font-weight: 600
--heading/sm/font-size: 20px
--heading/sm/line-height: 28px
--tracking/heading/heading-sm: -0.5px

/* Body Extra Small (Card Publisher) */
--body/xs/font-family: 'Inter'
--body/xs/font-weight: 400
--body/xs/font-size: 12px
--body/xs/line-height: 16px
--tracking/global/body-xs: 0px

/* Body Small (Card Description) */
--body/sm/font-family: 'Inter'
--body/sm/font-weight: 400
--body/sm/font-size: 14px
--body/sm/line-height: 20px
--tracking/global/body-sm: 0px

/* Label Medium (Button) */
--label/md/font-family: 'Inter'
--label/md/font-weight: 600
--label/md/font-size: 16px
--label/md/line-height: 24px
--tracking/global/label-md: -0.5px
```

### Border Radius
```css
--corner-radius/sm: 8px   /* Badge */
--corner-radius/md: 12px  /* Button, card button */
--corner-radius/lg: 16px  /* App card */
--corner-radius/xl: 24px  /* Section (mobile) */
--corner-radius/xxl: 32px /* Section (desktop) */
```

---

## Content

### Section Header
- **Label:** "Community & IXI Labs"
- **Title:** "Featured Mini Apps"
- **Description:** "Featured Mini Apps from IXI Labs and independent developers. Explore freely, but remember community apps aren't reviewed or verified by the Spixi team."

### App Data

#### App 1: AI Assistant
- **Icon:** `app-ai.png`
- **Title:** "AI Assistant"
- **Publisher:** "Serg"
- **Badge:** "Category"
- **Description:** "Local LLM accessed and charged over Spixi and Ixian Platform."
- **Button:** "Try in Spixi"

#### App 2: IXIJump
- **Icon:** `app-ixijump.png`
- **Title:** "IXIJump"
- **Publisher:** "Spoony"
- **Badge:** "Category"
- **Description:** "A fast-paced tapping game built for Spixi. Simple and addictive."
- **Button:** "Try in Spixi"

#### App 3: Spixi Calculator
- **Icon:** `app-calculator.png`
- **Title:** "Spixi Calculator"
- **Publisher:** "Spoony"
- **Badge:** "Category"
- **Description:** "Draw together in real time. Share doodles and notes with friends."
- **Button:** "Try in Spixi"

#### App 4: IXI Pong
- **Icon:** `app-pong.png`
- **Title:** "IXI Pong"
- **Publisher:** "Baracuda"
- **Badge:** "Category"
- **Description:** "Classic game of Pong, but this time play it in Spixi."
- **Button:** "Try in Spixi"

### View All Button
- **Label:** "View all apps"
- **Icon:** Arrow right (24×24px)

---

## Assets Required

### App Icons
Place in `assets/img/`:
- `app-ai.png` (64×64px) - AI Assistant icon
- `app-ixijump.png` (64×64px) - IXIJump game icon
- `app-calculator.png` (64×64px) - Calculator icon
- `app-pong.png` (64×64px) - Pong game icon

### Icons (SVG)
- Arrow right (24×24px) - for "View all apps" button
- GitHub icon (32×32px) - included inline in HTML

---

## Responsive Behavior

### Desktop (>1024px)
- 4 equal columns in flexbox
- Header width: 845px
- Section padding: 80px vertical, 32px horizontal
- Border radius: 32px

### Tablet (768px - 1024px)
- Grid: 2 columns (2×2 layout)
- Header width: 100%
- Cards wrap to two rows

### Mobile (≤768px)
- Grid: 1 column (stacked)
- Section padding: 40px vertical, 16px horizontal
- Border radius: 24px
- Title: 36px (reduced from 44px)
- Button: Full width
- Gap: 40px (reduced from 64px)

---

## CRITICAL Implementation Notes

### 1. Container Matching
This section MUST match the homepage features section container:
- **Max-width:** 1280px
- **Padding:** 80px × 32px
- **Border-radius:** 32px
- **Gradient background:** Same purple to blue gradient

### 2. Card Background Override
App cards in this section use `#081016` (darker) instead of the default `#0e1820` from the standalone app-card component. This is specified in `.featured-apps__grid .app-card`.

### 3. Equal Height Cards
Cards use `height: 100%` and `flex: 1` to ensure equal heights in the row. The description uses fixed 40px height with line-clamp to maintain consistency.

### 4. Flex vs Grid
- **Desktop (>1024px):** Use flexbox with `flex: 1 0 0` for 4 equal columns
- **Tablet (768px-1024px):** Switch to CSS Grid with 2 columns
- **Mobile (≤768px):** Switch to CSS Grid with 1 column

### 5. Button Width
The "Try in Spixi" button has a fixed width of 123px to maintain consistency across all cards.

### 6. GitHub Icon Color
The GitHub icon uses `fill="#04070b"` (dark color) instead of gray to match the design specification.

### 7. Section Spacing
- Gap between header and grid: 64px
- Gap between grid and button: Inherits from container gap (64px)

---

## Implementation Checklist

- [ ] Create section HTML structure
- [ ] Add CSS with all variables
- [ ] Ensure container matches homepage features (1280px max-width)
- [ ] Add gradient background (purple to blue)
- [ ] Download 4 app icon images
- [ ] Add GitHub icon SVG (inline)
- [ ] Add arrow icon SVG (inline)
- [ ] Set up 4-column flexbox grid
- [ ] Override app-card background for this section
- [ ] Test equal height cards
- [ ] Test card hover states
- [ ] Test button hover states
- [ ] Test GitHub icon hover
- [ ] Test responsive: 4 → 2 → 1 columns
- [ ] Test mobile layout (stacked, full-width button)
- [ ] Verify gradient background matches features section
- [ ] Verify spacing matches design (64px gaps)
- [ ] Verify typography matches design
- [ ] Test with real app data
- [ ] Verify ARIA labels on GitHub links

---

## Integration with Mini Apps Page

This section appears directly below the hero section:

```html
<!-- mini-apps.html -->
<body>
  <!-- Hero Section -->
  <section class="miniapps-hero">
    <!-- ... hero content ... -->
  </section>

  <!-- Featured Apps Section -->
  <section class="featured-apps">
    <!-- ... featured apps content ... -->
  </section>

  <!-- Additional sections... -->
</body>
```

---

## Final Notes

- This section uses the **same container pattern** as homepage features
- Cards are **darker (#081016)** than the standalone component
- **4 columns on desktop**, 2 on tablet, 1 on mobile
- All cards have **equal heights** using flexbox
- Description is **fixed at 40px** with 2-line clamp
- Button has **fixed width (123px)** for consistency
- GitHub icon is **dark (#04070b)** not gray
- **Purple accent color** (#ad4fc4) for the label
- **Gradient background** matches homepage features
- **64px gap** between all major elements
- Section is **pixel-perfect** to Figma design
