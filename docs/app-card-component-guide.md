# App Card Component - Implementation Guide

## Overview
Build a reusable app card component for displaying mini apps in the featured apps grid. Includes app icon, category badge, title, publisher, description, action button, and GitHub link with hover state.

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=154-2131`

---

## Component Preview

The App Card displays:
- **App Icon** (64×64px with border and shadow)
- **Category Badge** (top right)
- **Title** (20px, semibold)
- **Publisher Name** (12px, gray)
- **Description** (14px, 2 lines max, 40px height)
- **"Open in Spixi" Button** (white outline)
- **GitHub Icon** (32×32px, clickable link)

**States:**
- Default: Dark background (#0e1820)
- Hover: Lighter background (#172330)

---

## HTML Structure

```html
<!-- App Card Component -->
<div class="app-card">
  <!-- Header: Icon + Badge -->
  <div class="app-card__header">
    <img src="assets/img/app-icon.png" alt="App name" class="app-card__icon">
    <span class="app-card__badge">Category</span>
  </div>

  <!-- Content -->
  <div class="app-card__content">
    <!-- Meta: Title + Publisher -->
    <div class="app-card__meta">
      <h3 class="app-card__title">Title</h3>
      <p class="app-card__publisher">Publisher</p>
    </div>

    <!-- Description -->
    <p class="app-card__description">description</p>

    <!-- Actions: Button + GitHub Link -->
    <div class="app-card__actions">
      <button class="btn btn--secondary-outline btn--sm">Open in Spixi</button>
      <a href="#" class="app-card__github" aria-label="View on GitHub">
        <svg class="app-card__github-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 3C8.82 3 3 8.82 3 16C3 21.75 7.03 26.56 12.44 28.25C13.04 28.36 13.25 27.99 13.25 27.67C13.25 27.38 13.24 26.62 13.24 25.81C9.5 26.54 8.8 24.62 8.6 23.63C8.49 23.13 7.9 22.25 7.37 21.96C6.94 21.75 6.34 21.02 7.36 21.01C8.3 21 8.94 21.85 9.12 22.22C10.22 24.03 11.97 23.51 13.28 23.19C13.38 22.49 13.67 21.96 13.99 21.65C11.24 21.34 8.36 20.3 8.36 15.56C8.36 14.21 8.85 13.1 9.14 12.23C9.03 11.92 8.64 10.69 9.25 9.05C9.25 9.05 10.28 8.73 13.25 10.72C14.25 10.44 15.3 10.3 16.35 10.3C17.4 10.3 18.45 10.44 19.45 10.72C22.42 8.72 23.45 9.05 23.45 9.05C24.06 10.69 23.67 11.92 23.56 12.23C23.85 13.1 24.34 14.2 24.34 15.56C24.34 20.31 21.45 21.34 18.7 21.65C19.1 22 19.44 22.67 19.44 23.72C19.44 25.25 19.43 26.48 19.43 27.67C19.43 27.99 19.64 28.37 20.24 28.25C25.63 26.56 29.66 21.74 29.66 16C29.66 8.82 23.84 3 16.66 3H16Z" fill="#d4d4d8"/>
        </svg>
      </a>
    </div>
  </div>
</div>
```

---

## CSS Implementation

```css
/* ==========================================
   APP CARD COMPONENT
   ========================================== */

.app-card {
  background-color: var(--colors/surface/03, #0e1820);
  border: 1px solid var(--colors/outline/02, #172330);
  border-radius: var(--corner-radius/lg, 16px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xs, 8px);
  width: 100%;
  max-width: 410.667px;
  transition: background-color 0.2s ease;
  cursor: pointer;
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
}

.app-card__actions .btn--sm {
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
   RESPONSIVE
   ========================================== */

@media (max-width: 768px) {
  .app-card {
    max-width: 100%;
  }
}
```

---

## CSS Variables Used

### Spacing
```css
--spacing/xxs: 4px    /* Badge padding, meta gap */
--spacing/xs: 8px     /* Badge padding, card gap, button padding */
--spacing/sm: 12px    /* Button padding */
--spacing/xl: 24px    /* Content gap */
```

### Colors
```css
--colors/surface/03: #0e1820      /* Card default background */
--colors/surface/04: #172330      /* Card hover background, badge */
--colors/outline/02: #172330      /* Card border */
--colors/outline/03: #3f3f46      /* Icon border */
--colors/text/01: #fafafa         /* Title, description, badge */
--colors/text/02: #d4d4d8         /* Publisher, GitHub icon */
--colors/text/on-action: #f9fafb  /* Button text */
--colors/outline/action-secondary/default: #f9fafb /* Button border */
```

### Typography
```css
/* Label Extra Small (Badge) */
--label/xs/font-family: 'Inter'
--label/xs/font-weight: 600
--label/xs/font-size: 12px
--label/xs/line-height: 16px
--tracking/global/label-xs: -0.5px

/* Heading Small (Title) */
--heading/sm/font-family: 'Inter'
--heading/sm/font-weight: 600
--heading/sm/font-size: 20px
--heading/sm/line-height: 28px
--tracking/heading/heading-sm: -0.5px

/* Body Extra Small (Publisher) */
--body/xs/font-family: 'Inter'
--body/xs/font-weight: 400
--body/xs/font-size: 12px
--body/xs/line-height: 16px
--tracking/global/body-xs: 0px

/* Body Small (Description) */
--body/sm/font-family: 'Inter'
--body/sm/font-weight: 400
--body/sm/font-size: 14px
--body/sm/line-height: 20px
--tracking/global/body-sm: 0px

/* Label Small (Button) */
--label/sm/font-family: 'Inter'
--label/sm/font-weight: 600
--label/sm/font-size: 14px
--label/sm/line-height: 20px
--tracking/global/label-sm: -0.5px
```

### Border Radius
```css
--corner-radius/sm: 8px   /* Badge */
--corner-radius/md: 12px  /* Button */
--corner-radius/lg: 16px  /* Card */
```

---

## Design Specifications

### Card
- **Width:** 410.667px (max-width, flexible in grid)
- **Padding:** 16px all sides
- **Border:** 1px solid #172330
- **Border radius:** 16px
- **Background:** #0e1820 (default), #172330 (hover)
- **Gap:** 8px (between header and content)

### App Icon
- **Size:** 64×64px
- **Border:** 1px solid #3f3f46
- **Border radius:** 16px
- **Box shadow:** 0px 4px 4px 0px rgba(0, 0, 0, 0.25)

### Badge
- **Background:** #172330
- **Padding:** 4px (vertical) × 8px (horizontal)
- **Border radius:** 8px
- **Font:** 12px semibold

### Description
- **Height:** 40px (fixed)
- **Line clamp:** 2 lines max
- **Overflow:** Hidden with ellipsis

### Button
- **Padding:** 8px × 12px
- **Border:** 2px solid white
- **Border radius:** 12px
- **Font:** 14px semibold
- **Width:** Auto (content-based)

### GitHub Icon
- **Size:** 32×32px
- **Color:** #d4d4d8
- **Hover:** 80% opacity

---

## Usage Examples

### Example 1: AI Assistant
```html
<div class="app-card">
  <div class="app-card__header">
    <img src="assets/img/app-ai.png" alt="AI Assistant" class="app-card__icon">
    <span class="app-card__badge">Productivity</span>
  </div>
  <div class="app-card__content">
    <div class="app-card__meta">
      <h3 class="app-card__title">AI Assistant</h3>
      <p class="app-card__publisher">Serg</p>
    </div>
    <p class="app-card__description">Local LLM accessed and charged over Spixi and Ixian Platform.</p>
    <div class="app-card__actions">
      <button class="btn btn--secondary-outline btn--sm">Open in Spixi</button>
      <a href="https://github.com/example/ai-assistant" class="app-card__github">
        <svg><!-- GitHub icon --></svg>
      </a>
    </div>
  </div>
</div>
```

### Example 2: IXIJump
```html
<div class="app-card">
  <div class="app-card__header">
    <img src="assets/img/app-ixijump.png" alt="IXIJump" class="app-card__icon">
    <span class="app-card__badge">Games</span>
  </div>
  <div class="app-card__content">
    <div class="app-card__meta">
      <h3 class="app-card__title">IXIJump</h3>
      <p class="app-card__publisher">Spoony</p>
    </div>
    <p class="app-card__description">A fast-paced tapping game built for Spixi. Simple and addictive.</p>
    <div class="app-card__actions">
      <button class="btn btn--secondary-outline btn--sm">Open in Spixi</button>
      <a href="https://github.com/example/ixijump" class="app-card__github">
        <svg><!-- GitHub icon --></svg>
      </a>
    </div>
  </div>
</div>
```

---

## Grid Layout Usage

When used in the featured apps section:

```html
<div class="featured-apps__grid">
  <!-- App Card 1 -->
  <div class="app-card">...</div>
  
  <!-- App Card 2 -->
  <div class="app-card">...</div>
  
  <!-- App Card 3 -->
  <div class="app-card">...</div>
  
  <!-- App Card 4 -->
  <div class="app-card">...</div>
</div>
```

```css
.featured-apps__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing/xl, 24px);
  width: 100%;
}

@media (max-width: 1024px) {
  .featured-apps__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .featured-apps__grid {
    grid-template-columns: 1fr;
  }
}
```

---

## GitHub Icon SVG

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 3C8.82 3 3 8.82 3 16C3 21.75 7.03 26.56 12.44 28.25C13.04 28.36 13.25 27.99 13.25 27.67C13.25 27.38 13.24 26.62 13.24 25.81C9.5 26.54 8.8 24.62 8.6 23.63C8.49 23.13 7.9 22.25 7.37 21.96C6.94 21.75 6.34 21.02 7.36 21.01C8.3 21 8.94 21.85 9.12 22.22C10.22 24.03 11.97 23.51 13.28 23.19C13.38 22.49 13.67 21.96 13.99 21.65C11.24 21.34 8.36 20.3 8.36 15.56C8.36 14.21 8.85 13.1 9.14 12.23C9.03 11.92 8.64 10.69 9.25 9.05C9.25 9.05 10.28 8.73 13.25 10.72C14.25 10.44 15.3 10.3 16.35 10.3C17.4 10.3 18.45 10.44 19.45 10.72C22.42 8.72 23.45 9.05 23.45 9.05C24.06 10.69 23.67 11.92 23.56 12.23C23.85 13.1 24.34 14.2 24.34 15.56C24.34 20.31 21.45 21.34 18.7 21.65C19.1 22 19.44 22.67 19.44 23.72C19.44 25.25 19.43 26.48 19.43 27.67C19.43 27.99 19.64 28.37 20.24 28.25C25.63 26.56 29.66 21.74 29.66 16C29.66 8.82 23.84 3 16.66 3H16Z" fill="#d4d4d8"/>
</svg>
```

---

## Component Behavior

### Hover State
- **Entire card** changes background color
- **Button** shows slight white overlay
- **GitHub icon** reduces opacity to 80%
- All transitions: 0.2s ease

### Click Interactions
- **Card click:** Opens app details (implement via JavaScript)
- **Button click:** Opens app in Spixi
- **GitHub icon:** Opens GitHub repository in new tab

### Description Overflow
- Uses `-webkit-line-clamp: 2` to limit to 2 lines
- Adds ellipsis (...) when text overflows
- Fixed height of 40px ensures consistent card height

---

## JavaScript Enhancement (Optional)

```javascript
// Make entire card clickable
document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Ignore if clicking button or GitHub link
        if (e.target.closest('.btn, .app-card__github')) {
            return;
        }
        
        const title = card.querySelector('.app-card__title').textContent;
        console.log(`Opening ${title}`);
        // Navigate to app details page
        // window.location.href = `app-details.html?app=${title}`;
    });
});

// Open in Spixi button
document.querySelectorAll('.app-card__actions .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Opening in Spixi');
        // Deep link to Spixi app
    });
});

// GitHub link - open in new tab
document.querySelectorAll('.app-card__github').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});
```

---

## Accessibility

### ARIA Labels
```html
<a href="#" class="app-card__github" aria-label="View AI Assistant on GitHub">
  <svg role="img" aria-hidden="true">...</svg>
</a>
```

### Semantic HTML
- Use `<h3>` for title (proper heading hierarchy)
- Use `<button>` for "Open in Spixi" (not `<div>`)
- Use `<a>` for GitHub link (proper link semantics)

### Keyboard Navigation
- Card is focusable (add `tabindex="0"` if making it clickable)
- Button is naturally focusable
- GitHub link is naturally focusable
- All interactive elements have visible focus states

---

## Implementation Checklist

- [ ] Create app card HTML structure
- [ ] Add CSS styles with all variables
- [ ] Create GitHub icon SVG
- [ ] Test default state (dark background)
- [ ] Test hover state (lighter background)
- [ ] Test with different content lengths (2-line clamp)
- [ ] Test button hover state
- [ ] Test GitHub icon hover state
- [ ] Test in 4-column grid layout
- [ ] Test responsive (2-column, 1-column)
- [ ] Add ARIA labels for accessibility
- [ ] Test keyboard navigation
- [ ] Verify all spacing matches design
- [ ] Verify typography matches design
- [ ] Test with real app data

---

## Real App Data Examples

### App 1: AI Assistant
- **Icon:** `app-ai.png`
- **Title:** "AI Assistant"
- **Publisher:** "Serg"
- **Badge:** "Productivity"
- **Description:** "Local LLM accessed and charged over Spixi and Ixian Platform."
- **GitHub:** `https://github.com/...`

### App 2: IXIJump
- **Icon:** `app-ixijump.png`
- **Title:** "IXIJump"
- **Publisher:** "Spoony"
- **Badge:** "Games"
- **Description:** "A fast-paced tapping game built for Spixi. Simple and addictive."
- **GitHub:** `https://github.com/...`

### App 3: Spixi Calculator
- **Icon:** `app-calculator.png`
- **Title:** "Spixi Calculator"
- **Publisher:** "Spoony"
- **Badge:** "Utilities"
- **Description:** "Draw together in real time. Share doodles and notes with friends."
- **GitHub:** `https://github.com/...`

### App 4: IXI Pong
- **Icon:** `app-pong.png`
- **Title:** "IXI Pong"
- **Publisher:** "Baracuda"
- **Badge:** "Games"
- **Description:** "Classic game of Pong, but this time play it in Spixi."
- **GitHub:** `https://github.com/...`

---

## Final Notes

- This is a **reusable component** used throughout the site
- **Hover state** provides visual feedback
- **Line clamp** ensures consistent card heights
- **Flexible width** adapts to grid layout
- All colors, spacing, and typography use **CSS variables**
- Component is **fully accessible** with proper ARIA labels
- **Mobile responsive** through grid parent
- **GitHub link** opens in new tab for better UX
