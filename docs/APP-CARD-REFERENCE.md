# App Card Component - Quick Reference

## Overview
Reusable component for displaying mini apps with icon, badge, title, publisher, description, and action buttons.

## HTML Structure

```html
<article class="app-card">
  <!-- Header: Icon + Badge -->
  <div class="app-card__header">
    <img src="path/to/icon.png" alt="App Name" class="app-card__image">
    <span class="badge">Category</span>
  </div>

  <!-- Content -->
  <div class="app-card__content">
    <div class="app-card__details">
      <!-- Title + Author -->
      <div class="app-card__meta">
        <h3 class="app-card__title">App Name</h3>
        <p class="app-card__author">by Publisher Name</p>
      </div>
      <!-- Description (2 lines max) -->
      <p class="app-card__description">Brief description of the app...</p>
    </div>
  </div>

  <!-- Footer: Button + GitHub -->
  <div class="app-card__footer">
    <a href="#" class="btn btn-sm btn-outlined">
      <span class="btn__label">Try in Spixi</span>
      <span class="btn__icon btn__icon--trailing">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"/>
        </svg>
      </span>
    </a>
    <a href="https://github.com/..." class="app-card__github" aria-label="View on GitHub">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3C8.82 3 3 8.82..." fill="currentColor"/>
      </svg>
    </a>
  </div>
</article>
```

## CSS Variables Used

### Background & Borders
- `--color-surface-03` - Card default background (#0e1820)
- `--color-surface-04` - Card hover background (#172330)
- `--color-outline-02` - Card border (#172330)
- `--color-outline-03` - Icon border (#3f3f46)

### Spacing
- `--spacing-xxs` (4px) - Meta gap
- `--spacing-xs` (8px) - Card gap, details gap
- `--spacing-md` (16px) - Card padding
- `--spacing-xl` (24px) - Content gap

### Typography
- `--heading-sm-*` - Title (20px, semibold)
- `--body-xs-*` - Author (12px, regular)
- `--body-sm-*` - Description (14px, regular)

### Border Radius
- `--corner-radius-lg` (16px) - Card and icon corners

## Component Features

✅ **Responsive** - Adapts to grid layouts
✅ **Hover State** - Background changes on hover
✅ **2-Line Clamp** - Description limited to 2 lines
✅ **Icon Border & Shadow** - 64×64px with border and drop shadow
✅ **GitHub Link** - Clickable GitHub icon with hover opacity
✅ **Badge Support** - Category badge with variants
✅ **Button Integration** - Uses existing button component

## Badge Variants

```html
<span class="badge">Default</span>
<span class="badge badge--accent">Accent</span>
<span class="badge badge--info">Info</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--error">Error</span>
```

## Usage in Grids

### 4-Column Grid (Desktop)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
```

### 2-Column Grid (Tablet)
```css
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### 1-Column Grid (Mobile)
```css
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

## Class Reference

| Class | Purpose |
|-------|---------|
| `.app-card` | Card container |
| `.app-card__header` | Icon + badge wrapper |
| `.app-card__image` | App icon (64×64px) |
| `.app-card__content` | Content wrapper |
| `.app-card__details` | Meta + description wrapper |
| `.app-card__meta` | Title + author wrapper |
| `.app-card__title` | App title |
| `.app-card__author` | Publisher name |
| `.app-card__description` | App description (2-line) |
| `.app-card__footer` | Button + GitHub wrapper |
| `.app-card__github` | GitHub link icon |

## Live Example

See `docs/app-card-example.html` for a working demonstration.
