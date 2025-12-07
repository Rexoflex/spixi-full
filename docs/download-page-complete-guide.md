# Download Page - Complete Implementation Guide

## Overview
Build the complete Download page for Spixi with three main sections: Hero with smart platform detection, Choose your platform cards, and Info blocks. Includes global navbar and footer.

**Figma References:**
- Hero: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=273-23870`
- Platforms: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=273-23886`
- Info Blocks: `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=273-24691`

---

## File Structure

```
download.html          # Main download page
download.js            # Platform detection + interactions
styles.css             # Global styles (add download styles)
variables.css          # Design tokens (already exists)
```

---

## HTML Structure - Complete Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Spixi - Private Messaging & Crypto Wallet</title>
    <meta name="description" content="Download Spixi for Windows, macOS, iOS, and Android. Private chat, IXI wallet, and Mini Apps in one secure app.">
    <link rel="stylesheet" href="variables.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<!-- ========================================
     SECTION 1: HERO WITH PLATFORM DETECTION
     ======================================== -->
<section class="download-hero">
  <!-- Reuse Global Navbar -->
  <nav class="navbar">
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
        <a href="download.html" class="btn btn--secondary-outline btn--md navbar__link--active">Download Spixi</a>
      </div>
    </div>
  </nav>

  <!-- Hero Content -->
  <div class="download-hero__container">
    <div class="download-hero__content">
      <div class="download-hero__text">
        <p class="download-hero__subtitle">Download</p>
        <h1 class="download-hero__title">Get Spixi for mobile and desktop</h1>
        <p class="download-hero__description">Private chat, IXI wallet, and Mini Apps in one secure app. No sign-up, no phone number, no tracking.</p>
      </div>

      <!-- CTA Buttons (Dynamic based on platform) -->
      <div class="download-hero__cta">
        <div class="download-hero__buttons">
          <!-- Primary button (changes based on detected platform) -->
          <a href="#" id="primary-download-btn" class="btn btn--primary btn--lg">
            <svg class="btn__icon" id="primary-btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <!-- Download icon (default) -->
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="btn__label" id="primary-btn-text">Download for Windows</span>
          </a>

          <!-- Secondary button (always "More platforms") -->
          <a href="#platform-section" class="btn btn--secondary btn--lg">
            <span class="btn__label">More platforms</span>
          </a>
        </div>

        <!-- Version info (hidden for mobile stores) -->
        <div class="download-hero__version" id="version-info">
          <p class="download-hero__version-text">Current version: v0.9.14</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================
     SECTION 2: CHOOSE YOUR PLATFORM
     ======================================== -->
<section class="platform-section" id="platform-section">
  <div class="platform-section__container">
    
    <!-- Section Header -->
    <div class="platform-section__header">
      <div class="platform-section__overline">
        <p class="platform-section__label">Download Options</p>
      </div>
      <h2 class="platform-section__title">Choose your platform</h2>
      <p class="platform-section__description">Spixi runs on mobile and desktop. Pick your device to get the right download.</p>
    </div>

    <!-- Platform Cards Grid -->
    <div class="platform-section__grid">
      
      <!-- Row 1: Mobile -->
      <div class="platform-section__row">
        
        <!-- Android Card - REUSE card-md component -->
        <div class="card-md platform-card">
          <div class="card-md__text">
            <p class="card-md__category">Mobile/Tablet</p>
            <h3 class="card-md__title">Android</h3>
            <p class="card-md__body">Get Spixi from Google Play or install the APK directly.</p>
          </div>
          <div class="platform-card__actions">
            <div class="platform-card__buttons">
              <a href="https://play.google.com/store/apps/details?id=com.spixi" target="_blank" rel="noopener">
                <img src="assets/img/google-play-badge.png" alt="Get it on Google Play" class="platform-card__store-badge">
              </a>
              <a href="https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi.apk" class="platform-card__download-link">
                <svg class="platform-card__icon" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Download APK</span>
              </a>
            </div>
            <p class="platform-card__requirement">Android 10 or newer</p>
          </div>
        </div>

        <!-- iOS Card - REUSE card-md component -->
        <div class="card-md platform-card">
          <div class="card-md__text">
            <p class="card-md__category">Mobile/Tablet</p>
            <h3 class="card-md__title">iOS</h3>
            <p class="card-md__body">Install Spixi from the App Store on your iPhone or iPad.</p>
          </div>
          <div class="platform-card__actions">
            <a href="https://apps.apple.com/app/spixi/id123456789" target="_blank" rel="noopener">
              <img src="assets/img/app-store-badge.png" alt="Download on the App Store" class="platform-card__store-badge">
            </a>
            <p class="platform-card__requirement">iOS 15 or newer</p>
          </div>
        </div>

      </div>

      <!-- Row 2: Desktop -->
      <div class="platform-section__row">
        
        <!-- Windows Card - REUSE card-md component -->
        <div class="card-md platform-card">
          <div class="card-md__text">
            <p class="card-md__category">Desktop</p>
            <h3 class="card-md__title">Windows</h3>
            <p class="card-md__body">Desktop Spixi with all key features, including chat, wallet and Mini Apps.</p>
          </div>
          <div class="platform-card__actions">
            <a href="https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-windows.exe" class="platform-card__download-link">
              <svg class="platform-card__icon" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Download for Windows</span>
            </a>
          </div>
        </div>

        <!-- macOS Card - REUSE card-md component -->
        <div class="card-md platform-card">
          <div class="card-md__text">
            <p class="card-md__category">Desktop</p>
            <h3 class="card-md__title">Mac</h3>
            <p class="card-md__body">Use Spixi on your Mac with desktop integration.</p>
          </div>
          <div class="platform-card__actions">
            <a href="https://apps.apple.com/app/spixi/id123456789" target="_blank" rel="noopener">
              <img src="assets/img/app-store-badge.png" alt="Download on the App Store" class="platform-card__store-badge">
            </a>
            <p class="platform-card__requirement">macOS 12 or newer</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

<!-- ========================================
     SECTION 3: INFO BLOCKS
     ======================================== -->
<section class="info-blocks">
  <div class="info-blocks__container">
    
    <!-- Block 1: What's Included -->
    <div class="info-blocks__block">
      <div class="info-blocks__header">
        <h2 class="info-blocks__title">What's included in Spixi</h2>
      </div>
      
      <div class="info-blocks__list">
        <!-- List Item 1 - REUSE list-item component -->
        <div class="list-item">
          <div class="list-item__icon-container">
            <svg class="list-item__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 21v-8m0 0l-3 3m3-3l3 3" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="11" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">Secure chat</h3>
            <p class="list-item__description">One-to-one encrypted messaging and calls.</p>
          </div>
        </div>

        <!-- List Item 2 - REUSE list-item component -->
        <div class="list-item">
          <div class="list-item__icon-container">
            <svg class="list-item__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="8" y="8" width="16" height="16" rx="2" stroke="#ad4fc4" stroke-width="2"/>
              <path d="M16 12v8m-4-4h8" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">Built-in IXI wallet</h3>
            <p class="list-item__description">Send and receive IXI directly in the app.</p>
          </div>
        </div>

        <!-- List Item 3 - REUSE list-item component -->
        <div class="list-item">
          <div class="list-item__icon-container">
            <svg class="list-item__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="6" y="6" width="8" height="8" rx="1" stroke="#ad4fc4" stroke-width="2"/>
              <rect x="18" y="6" width="8" height="8" rx="1" stroke="#ad4fc4" stroke-width="2"/>
              <rect x="6" y="18" width="8" height="8" rx="1" stroke="#ad4fc4" stroke-width="2"/>
              <rect x="18" y="18" width="8" height="8" rx="1" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">Mini Apps</h3>
            <p class="list-item__description">Try tools and games without leaving Spixi.</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="info-blocks__divider">

    <!-- Block 2: First Time Using -->
    <div class="info-blocks__block">
      <div class="info-blocks__header">
        <h2 class="info-blocks__title">First time using Spixi?</h2>
        <p class="info-blocks__subtitle">A quick overview before you start.</p>
      </div>
      
      <div class="info-blocks__cards">
        <!-- Card 1 - REUSE card-md component -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <svg class="card-md__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 8v8l4 4" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="11" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">Create your account</h3>
            <p class="card-md__body">Set a nickname and password. No phone number or email is required.</p>
          </div>
        </div>

        <!-- Card 2 - REUSE card-md component -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <svg class="card-md__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 8v8l4 4" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="11" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">Back up your account</h3>
            <p class="card-md__body">Create a backup file and store it safely. It's the only way to restore access.</p>
          </div>
        </div>

        <!-- Card 3 - REUSE card-md component -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <svg class="card-md__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 8v8l4 4" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="11" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">Add your first contact</h3>
            <p class="card-md__body">Share your Spixi address or IXI Name and start your first secure chat.</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="info-blocks__divider">

    <!-- Block 3: Open Source -->
    <div class="info-blocks__block">
      <div class="info-blocks__header">
        <h2 class="info-blocks__title">Open source & Ixian platform</h2>
        <p class="info-blocks__subtitle">Spixi is open source and built on the Ixian platform.</p>
      </div>
      
      <div class="info-blocks__cards">
        <!-- Card 1 - REUSE card-md component -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <svg class="card-md__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 8v8l4 4" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="11" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">View source code on GitHub</h3>
            <p class="card-md__body">Review the Spixi codebase and contribute on GitHub.</p>
          </div>
        </div>

        <!-- Card 2 - REUSE card-md component -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <svg class="card-md__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 8v8l4 4" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="11" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">See latest releases</h3>
            <p class="card-md__body">Check changelogs and download builds from the official releases.</p>
          </div>
        </div>

        <!-- Card 3 - REUSE card-md component -->
        <div class="card-md">
          <div class="card-md__icon-container">
            <svg class="card-md__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 8v8l4 4" stroke="#ad4fc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="11" stroke="#ad4fc4" stroke-width="2"/>
            </svg>
          </div>
          <div class="card-md__text">
            <h3 class="card-md__title">Read Ixian documentation</h3>
            <p class="card-md__body">Learn more about the Ixian platform that powers Spixi.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- Reuse Global Footer -->
<footer class="footer">
  <!-- Use existing footer component -->
</footer>

<script src="download.js"></script>
</body>
</html>
```

---

## CSS Implementation

```css
/* ==========================================
   SECTION 1: DOWNLOAD HERO
   ========================================== */

.download-hero {
  background: linear-gradient(135deg, #2d1b5e 0%, #1a2847 50%, #0f3460 100%);
  min-height: 400px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.download-hero__container {
  padding: var(--spacing/super, 64px) var(--spacing/super-lg, 80px);
  display: flex;
  align-items: center;
  gap: 86px;
  width: 100%;
}

.download-hero__content {
  width: 628px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
}

.download-hero__text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
  white-space: pre-wrap;
}

.download-hero__subtitle {
  font-family: var(--body/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--body/sm/font-weight, 400);
  font-size: var(--body/sm/font-size, 14px);
  line-height: var(--body/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/body-sm, 0px);
  color: var(--colors/text/02, #172330);
  margin: 0;
}

.download-hero__title {
  font-family: var(--display/lg/font-family, 'Sora', sans-serif);
  font-weight: var(--display/lg/font-weight, 600);
  font-size: var(--display/lg/font-size, 56px);
  line-height: var(--display/lg/line-height, 64px);
  letter-spacing: var(--display/lg/tracking, -2px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
}

.download-hero__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
}

.download-hero__cta {
  width: 511px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/lg, 20px);
}

.download-hero__buttons {
  display: flex;
  gap: var(--spacing/sm, 12px);
  width: 100%;
}

.download-hero__buttons .btn {
  height: 66px;
}

.download-hero__version {
  padding: 0 var(--spacing/sm, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.download-hero__version-text {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/01, #04070b);
  text-align: center;
  margin: 0;
}

/* Hide version for mobile stores */
.download-hero__version.hidden {
  display: none;
}

/* ==========================================
   SECTION 2: PLATFORM SELECTION
   ========================================== */

.platform-section {
  padding: var(--spacing/super-xxl, 120px) var(--spacing/super-lg, 80px) var(--spacing/super-lg, 80px);
  background-color: transparent;
}

.platform-section__container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/super, 64px);
}

.platform-section__header {
  display: flex;
  gap: var(--spacing/md, 16px);
  width: 100%;
  max-width: 100%;
}

.platform-section__overline {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 var(--spacing/xs, 8px) 0;
  width: fit-content;
}

.platform-section__label {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/accent, #ad4fc4);
  margin: 0;
}

.platform-section__title {
  font-family: var(--display/md/font-family, 'Sora', sans-serif);
  font-weight: var(--display/md/font-weight, 500);
  font-size: var(--display/md/font-size, 44px);
  line-height: var(--display/md/line-height, 52px);
  letter-spacing: var(--display/md/tracking, -2px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
  white-space: pre-wrap;
}

.platform-section__description {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
  white-space: pre-wrap;
}

.platform-section__grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xxl, 32px);
}

.platform-section__row {
  display: flex;
  gap: var(--spacing/xxl, 32px);
}

/* Platform Card Specific Styling */
.platform-card {
  width: 394.5px;
  flex: none;
}

.card-md__category {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #04070b);
  margin: 0 0 16px 0;
}

.platform-card__actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xs, 8px);
  width: 100%;
}

.platform-card__buttons {
  display: flex;
  gap: 24px;
  align-items: center;
}

.platform-card__store-badge {
  height: 48px;
  width: auto;
  display: block;
}

.platform-card__download-link {
  display: flex;
  align-items: center;
  gap: var(--spacing/none, 0);
  padding: var(--spacing/xxs, 4px) var(--spacing/xs, 8px);
  border-radius: var(--corner-radius/lg, 16px);
  font-family: var(--label/md/font-family, 'Inter', sans-serif);
  font-weight: var(--label/md/font-weight, 600);
  font-size: var(--label/md/font-size, 16px);
  line-height: var(--label/md/line-height, 24px);
  letter-spacing: var(--tracking/global/label-md, -0.5px);
  color: var(--colors/text/01, #04070b);
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.platform-card__download-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.platform-card__icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.platform-card__requirement {
  font-family: var(--body/xs/font-family, 'Inter', sans-serif);
  font-weight: var(--body/xs/font-weight, 400);
  font-size: var(--body/xs/font-size, 12px);
  line-height: var(--body/xs/line-height, 16px);
  letter-spacing: var(--tracking/global/body-xs, 0px);
  color: var(--colors/text/02, #172330);
  margin: 0;
  white-space: pre-wrap;
}

/* ==========================================
   SECTION 3: INFO BLOCKS
   ========================================== */

.info-blocks {
  background-color: var(--colors/surface/02, #f3f4f6);
  border-bottom: 1px solid var(--colors/outline/02, #a1a1aa);
  padding: var(--spacing/super-xxl, 120px) var(--spacing/super-lg, 80px);
}

.info-blocks__container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/super, 64px);
}

.info-blocks__block {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
  padding: 0 var(--spacing/super, 64px);
}

.info-blocks__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/md, 16px);
}

.info-blocks__title {
  font-family: var(--heading/lg/font-family, 'Sora', sans-serif);
  font-weight: var(--heading/lg/font-weight, 600);
  font-size: var(--heading/lg/font-size, 32px);
  line-height: var(--heading/lg/line-height, 44px);
  letter-spacing: var(--tracking/heading/heading-lg, -1px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
  white-space: pre-wrap;
}

.info-blocks__subtitle {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
}

.info-blocks__list {
  display: flex;
  gap: var(--spacing/xl, 24px);
  width: 100%;
}

.info-blocks__list .list-item {
  flex: 1;
}

.info-blocks__cards {
  display: flex;
  gap: var(--spacing/xxl, 32px);
  height: 340px;
}

.info-blocks__cards .card-md {
  flex: 1;
  min-width: 0;
}

.info-blocks__divider {
  border: none;
  border-top: 1px solid var(--colors/outline/02, #a1a1aa);
  margin: 0;
}

/* ==========================================
   RESPONSIVE (MOBILE)
   ========================================== */

@media (max-width: 768px) {
  .download-hero {
    min-height: auto;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  .download-hero__container {
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px);
    flex-direction: column;
    gap: var(--spacing/3xl, 40px);
  }

  .download-hero__content {
    width: 100%;
  }

  .download-hero__title {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.5px;
  }

  .download-hero__cta {
    width: 100%;
  }

  .download-hero__buttons {
    flex-direction: column;
  }

  .download-hero__buttons .btn {
    width: 100%;
  }

  /* Platform Section Mobile */
  .platform-section {
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px);
  }

  .platform-section__title {
    font-size: 32px;
    line-height: 40px;
  }

  .platform-section__row {
    flex-direction: column;
  }

  .platform-card {
    width: 100%;
  }

  /* Info Blocks Mobile */
  .info-blocks {
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px);
  }

  .info-blocks__block {
    padding: 0;
  }

  .info-blocks__list {
    flex-direction: column;
  }

  .info-blocks__cards {
    flex-direction: column;
    height: auto;
  }
}
```

---

## JavaScript Implementation - Platform Detection

Create `download.js`:

```javascript
// ==========================================
// PLATFORM DETECTION & DYNAMIC BUTTONS
// ==========================================

class DownloadPage {
  constructor() {
    this.platform = this.detectPlatform();
    this.init();
  }

  // Detect user's operating system
  detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();
    
    // iOS detection
    if (/iphone|ipad|ipod/.test(userAgent)) {
      return 'ios';
    }
    
    // Android detection
    if (/android/.test(userAgent)) {
      return 'android';
    }
    
    // macOS detection
    if (/mac/.test(platform)) {
      return 'macos';
    }
    
    // Windows detection
    if (/win/.test(platform)) {
      return 'windows';
    }
    
    // Linux detection
    if (/linux/.test(platform) && !/android/.test(userAgent)) {
      return 'linux';
    }
    
    // Default fallback
    return 'windows';
  }

  // Initialize page
  init() {
    this.updatePrimaryButton();
    this.setupSmoothScroll();
    console.log('Detected platform:', this.platform);
  }

  // Update primary button based on detected platform
  updatePrimaryButton() {
    const button = document.getElementById('primary-download-btn');
    const buttonText = document.getElementById('primary-btn-text');
    const buttonIcon = document.getElementById('primary-btn-icon');
    const versionInfo = document.getElementById('version-info');

    if (!button || !buttonText || !buttonIcon) return;

    const config = this.getButtonConfig();
    
    // Update button text
    buttonText.textContent = config.text;
    
    // Update button link
    button.href = config.url;
    
    // Update icon
    buttonIcon.innerHTML = config.icon;
    
    // Show/hide version info
    if (config.hideVersion) {
      versionInfo.classList.add('hidden');
    } else {
      versionInfo.classList.remove('hidden');
    }

    // Add target="_blank" for store links
    if (config.isStoreLink) {
      button.setAttribute('target', '_blank');
      button.setAttribute('rel', 'noopener noreferrer');
    }
  }

  // Get button configuration for detected platform
  getButtonConfig() {
    const configs = {
      windows: {
        text: 'Download for Windows',
        url: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-windows.exe',
        icon: this.getDownloadIcon(),
        hideVersion: false,
        isStoreLink: false
      },
      macos: {
        text: 'Download for macOS',
        url: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-macos.dmg',
        icon: this.getDownloadIcon(),
        hideVersion: false,
        isStoreLink: false
      },
      linux: {
        text: 'Download for Linux',
        url: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-linux.AppImage',
        icon: this.getDownloadIcon(),
        hideVersion: false,
        isStoreLink: false
      },
      ios: {
        text: 'Download on App Store',
        url: 'https://apps.apple.com/app/spixi/id123456789',
        icon: this.getAppStoreIcon(),
        hideVersion: true,
        isStoreLink: true
      },
      android: {
        text: 'Get it on Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.spixi',
        icon: this.getPlayStoreIcon(),
        hideVersion: true,
        isStoreLink: true
      }
    };

    return configs[this.platform] || configs.windows;
  }

  // SVG Icons
  getDownloadIcon() {
    return `<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" 
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  getAppStoreIcon() {
    return `<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>`;
  }

  getPlayStoreIcon() {
    return `<path d="M3.609 1.814L13.792 12 3.61 22.186a1 1 0 01-.1-.485V2.299a1 1 0 01.099-.485zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626c.591.342.591 1.156 0 1.497l-2.808 1.626-2.564-2.564 2.565-2.185zm-3.199-.694L5.864 0l10.937 6.333-2.302 2.482z" fill="currentColor"/>`;
  }

  // Smooth scroll for "More platforms" button
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new DownloadPage();
});
```

---

## CSS Variables Used

### Spacing
```css
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
```

### Colors
```css
--colors/text/01: #04070b           /* Primary text (dark) */
--colors/text/02: #172330           /* Secondary text (gray) */
--colors/text/accent: #ad4fc4       /* Purple accent */
--colors/text/on-action: #f9fafb    /* Button text (white) */
--colors/surface/01: #f9fafb        /* Light background */
--colors/surface/02: #f3f4f6        /* Light gray background */
--colors/surface/action/default: #0b70d5  /* Primary button blue */
--colors/outline/02: #a1a1aa        /* Border gray */
--colors/outline/action-secondary/default: #f9fafb  /* Button border */
```

### Typography
```css
/* Body Small */
--body/sm/font-family: 'Inter'
--body/sm/font-weight: 400
--body/sm/font-size: 14px
--body/sm/line-height: 20px

/* Display Large */
--display/lg/font-family: 'Sora'
--display/lg/font-weight: 600
--display/lg/font-size: 56px (desktop) / 36px (mobile)
--display/lg/line-height: 64px (desktop) / 44px (mobile)
--display/lg/tracking: -2px (desktop) / -1.5px (mobile)

/* Display Medium */
--display/md/font-family: 'Sora'
--display/md/font-weight: 500
--display/md/font-size: 44px (desktop) / 32px (mobile)
--display/md/line-height: 52px (desktop) / 40px (mobile)
--display/md/tracking: -2px

/* Body Medium */
--body/md/font-family: 'Inter'
--body/md/font-weight: 400
--body/md/font-size: 16px
--body/md/line-height: 24px

/* Heading Large */
--heading/lg/font-family: 'Sora'
--heading/lg/font-weight: 600
--heading/lg/font-size: 32px
--heading/lg/line-height: 44px
--tracking/heading/heading-lg: -1px

/* Heading Medium */
--heading/md/font-family: 'Inter'
--heading/md/font-weight: 600
--heading/md/font-size: 24px
--heading/md/line-height: 36px

/* Label Small */
--label/sm/font-family: 'Inter'
--label/sm/font-weight: 600
--label/sm/font-size: 14px
--label/sm/line-height: 20px

/* Label Medium */
--label/md/font-family: 'Inter'
--label/md/font-weight: 600
--label/md/font-size: 16px
--label/md/line-height: 24px

/* Body Extra Small */
--body/xs/font-family: 'Inter'
--body/xs/font-weight: 400
--body/xs/font-size: 12px
--body/xs/line-height: 16px
```

---

## Component Reuse

### ✅ **Reused Components:**

1. **Navbar** - Global component (already exists)
2. **Footer** - Global component (already exists)
3. **card-md** - Used for platform cards and info cards
4. **list-item** - Used for "What's included" section
5. **Button styles** - Primary, secondary, outline variants

### **Custom Additions:**

- `.platform-card` - Extension of card-md with specific actions
- `.info-blocks` - New section wrapper
- `.download-hero` - Hero variant for download page

---

## Assets Required

### Store Badges
Place in `assets/img/`:
- `google-play-badge.png` (162×48px)
- `app-store-badge.png` (144×48px)

### Icons
All icons are inline SVG (no additional assets needed)

### Download Links
Update these URLs in the code:
```javascript
// Desktop
Windows: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-windows.exe'
macOS: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-macos.dmg'
Linux: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-linux.AppImage'

// Mobile
iOS: 'https://apps.apple.com/app/spixi/id123456789'
Android Play: 'https://play.google.com/store/apps/details?id=com.spixi'
Android APK: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi.apk'
```

---

## Platform Detection Logic

### **How It Works:**

1. **Page loads** → JavaScript detects platform
2. **Primary button updates**:
   - Text changes (e.g., "Download for Windows")
   - Icon changes (download icon vs store icon)
   - Link changes (direct download vs store)
   - Version info shows/hides
3. **Fallback:** Defaults to Windows if detection fails
4. **Progressive enhancement:** Works without JS (shows Windows button)

### **Detected Platforms:**

| Platform | Detection Method | Primary Button |
|----------|-----------------|----------------|
| **iOS** | `/iphone\|ipad\|ipod/` in userAgent | "Download on App Store" |
| **Android** | `/android/` in userAgent | "Get it on Google Play" |
| **macOS** | `/mac/` in platform | "Download for macOS" |
| **Windows** | `/win/` in platform | "Download for Windows" |
| **Linux** | `/linux/` in platform (not Android) | "Download for Linux" |

---

## Responsive Behavior

### Desktop (>768px)
- Hero: Content left, potential for image right
- Platform cards: 2 per row (side-by-side)
- Info blocks: 3 cards per row
- List items: Horizontal layout

### Mobile (≤768px)
- Hero: Vertical stack, buttons full-width
- Platform cards: 1 per row (stacked)
- Info blocks: 1 card per row (stacked)
- List items: Vertical stack
- Reduced padding and font sizes

---

## Implementation Checklist

### Structure
- [ ] Create `download.html` file
- [ ] Add HTML structure for all 3 sections
- [ ] Include navbar and footer
- [ ] Add platform detection script

### Styling
- [ ] Add download-hero CSS
- [ ] Add platform-section CSS
- [ ] Add info-blocks CSS
- [ ] Verify all CSS variables exist
- [ ] Test responsive breakpoints

### JavaScript
- [ ] Create `download.js` file
- [ ] Implement platform detection
- [ ] Test button updates for each platform
- [ ] Implement smooth scroll
- [ ] Test version info show/hide

### Assets
- [ ] Download Google Play badge
- [ ] Download App Store badge
- [ ] Update all download URLs
- [ ] Test all download links

### Testing
- [ ] Test on Windows (shows Windows button)
- [ ] Test on macOS (shows macOS button)
- [ ] Test on iOS (shows App Store button)
- [ ] Test on Android (shows Play Store button)
- [ ] Test "More platforms" scroll
- [ ] Test all download links work
- [ ] Test mobile responsive layout
- [ ] Test without JavaScript (progressive enhancement)

---

## Download URLs Configuration

### Current Version
Update this in multiple places:
- Hero: `v0.9.14`
- JavaScript: Version detection (optional)

### Platform-Specific URLs

```javascript
const DOWNLOAD_URLS = {
  windows: {
    direct: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-windows.exe',
    version: 'v0.9.14'
  },
  macos: {
    direct: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-macos.dmg',
    store: 'https://apps.apple.com/app/spixi/id123456789',
    version: 'v0.9.14'
  },
  linux: {
    direct: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi-linux.AppImage',
    version: 'v0.9.14'
  },
  ios: {
    store: 'https://apps.apple.com/app/spixi/id123456789',
    minVersion: 'iOS 15 or newer'
  },
  android: {
    store: 'https://play.google.com/store/apps/details?id=com.spixi',
    apk: 'https://github.com/ProjectIxian/Spixi/releases/latest/download/spixi.apk',
    minVersion: 'Android 10 or newer'
  }
};
```

---

## SEO & Meta Tags

```html
<head>
    <title>Download Spixi - Private Messaging & Crypto Wallet</title>
    <meta name="description" content="Download Spixi for Windows, macOS, iOS, and Android. Private chat, IXI wallet, and Mini Apps in one secure app. No sign-up required.">
    <meta name="keywords" content="Spixi, download, private messaging, crypto wallet, IXI, mini apps, encrypted chat">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Download Spixi">
    <meta property="og:description" content="Private chat, IXI wallet, and Mini Apps in one secure app.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://spixi.io/download">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Download Spixi">
    <meta name="twitter:description" content="Private chat, IXI wallet, and Mini Apps in one secure app.">
</head>
```

---

## Final Notes

### **Component Reuse Strategy**
- ✅ **card-md:** Used for all platform and info cards
- ✅ **list-item:** Used for features list
- ✅ **Buttons:** Reuse primary, secondary, outline variants
- ✅ **Navbar/Footer:** Global components

### **Platform Detection Benefits**
- ✅ One-click download for user's platform
- ✅ Better conversion rates
- ✅ Fewer steps to download
- ✅ Still provides all platform options below

### **Progressive Enhancement**
- ✅ Works without JavaScript (shows Windows by default)
- ✅ Smooth scroll enhances UX
- ✅ Platform detection adds convenience

### **Maintenance**
- Update version number in ONE place (hero section)
- Update download URLs as needed
- Store badges can be replaced easily
- All styling uses CSS variables for easy updates

This complete implementation provides a professional, user-friendly download experience with smart platform detection while maintaining consistency with the rest of the Spixi website! 🚀
