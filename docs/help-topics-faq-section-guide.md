# Help Topics FAQ Section - Implementation Guide

## Overview
Build an interactive FAQ section with category navigation on the left and expandable Q&A items on the right. Powered by YAML data with search functionality and smooth accordion animations. Only one question can be expanded at a time.

**Figma Reference:** `https://www.figma.com/design/vbQCPz3r1LHLDnTJ1z6cZd/Spixi-Website-v2?node-id=267-15368`

**Key Features:**
- Left sidebar navigation (6 categories)
- Right content area (expandable Q&A items)
- YAML-powered content (searchable)
- Accordion behavior (one open at a time)
- Active category highlighting
- Search integration with hero section

---

## HTML Structure

```html
<section class="help-topics">
  <div class="help-topics__container">
    
    <!-- Section Header -->
    <div class="help-topics__header">
      <div class="help-topics__overline">
        <p class="help-topics__label">How to use and FAQ</p>
      </div>
      <h2 class="help-topics__title">Help Topics</h2>
    </div>

    <!-- Main Content Area -->
    <div class="help-topics__content">
      
      <!-- Left: Category Navigation -->
      <nav class="help-topics__nav">
        <button class="help-topics__category" data-category="getting-started">
          Getting started
        </button>
        <button class="help-topics__category help-topics__category--active" data-category="account-security">
          Account, identity & security
        </button>
        <button class="help-topics__category" data-category="chats-contacts">
          Chats, contacts & communities
        </button>
        <button class="help-topics__category" data-category="wallet-payments">
          Wallet & IXI payments
        </button>
        <button class="help-topics__category" data-category="mini-apps">
          Mini Apps
        </button>
        <button class="help-topics__category" data-category="troubleshooting">
          Troubleshooting & support
        </button>
      </nav>

      <!-- Right: FAQ Items (Accordion) -->
      <div class="help-topics__faq">
        
        <!-- FAQ Item 1 (Expanded) -->
        <div class="faq-item faq-item--expanded" data-question-id="account-restore">
          <button class="faq-item__question">
            How do I create or restore my Spixi account?
          </button>
          <div class="faq-item__answer">
            <div class="faq-item__content">
              <h3 class="faq-item__subtitle">Create a new account</h3>
              <ol class="faq-item__list">
                <li>Download and open Spixi.</li>
                <li>Tap Create new account.</li>
                <li>Choose a nickname and (optionally) a profile picture.</li>
                <li>Set a strong password – this protects both your wallet and your messages.</li>
                <li>Finish setup, then go to Settings → Backup and create a backup file so you can restore your account later.</li>
              </ol>
            </div>
            <div class="faq-item__content">
              <h3 class="faq-item__subtitle">Restore an existing account</h3>
              <ol class="faq-item__list">
                <li>Install and open Spixi on the new device.</li>
                <li>Tap Restore account.</li>
                <li>Select your backup file.</li>
                <li>Enter the password you used when creating that backup.</li>
                <li>After restore, your account and wallet will be available on this device.</li>
              </ol>
              <p class="faq-item__note">If the backup file or password is wrong or lost, the account cannot be recovered.</p>
            </div>
          </div>
        </div>

        <!-- FAQ Item 2 (Collapsed) -->
        <div class="faq-item" data-question-id="backup-safely">
          <button class="faq-item__question">
            How do I back up my Spixi account safely?
          </button>
          <div class="faq-item__answer">
            <div class="faq-item__content">
              <p class="faq-item__text">Your backup contains your private keys and wallet. Store it securely:</p>
              <ul class="faq-item__list">
                <li>Keep the backup file in a secure location (encrypted USB drive, password manager).</li>
                <li>Never share your backup file or password with anyone.</li>
                <li>Make multiple backups and store them in different secure locations.</li>
                <li>Test your backup by restoring on a secondary device to ensure it works.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- FAQ Item 3 (Collapsed) -->
        <div class="faq-item" data-question-id="spixi-address">
          <button class="faq-item__question">
            What is my Spixi address and when do I use it?
          </button>
          <div class="faq-item__answer">
            <div class="faq-item__content">
              <p class="faq-item__text">Your Spixi address is a unique identifier that others use to add you as a contact or send you IXI payments.</p>
              <p class="faq-item__text">You can find it in Settings → Profile → Share Address.</p>
              <p class="faq-item__text">Share it when someone needs to add you on Spixi or send you cryptocurrency.</p>
            </div>
          </div>
        </div>

        <!-- Additional FAQ items... -->

      </div>

    </div>

  </div>
</section>
```

---

## CSS Implementation

```css
/* ==========================================
   HELP TOPICS FAQ SECTION
   ========================================== */

.help-topics {
  background-color: var(--colors/surface/01, #f9fafb);
  border-top: 1px solid var(--colors/outline/02, #a1a1aa);
  padding: var(--spacing/super-lg, 80px);
  position: relative;
}

.help-topics__container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing/3xl, 40px);
}

/* ==========================================
   SECTION HEADER
   ========================================== */

.help-topics__header {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
}

.help-topics__overline {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 var(--spacing/xs, 8px) 0;
  width: fit-content;
}

.help-topics__label {
  font-family: var(--label/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--label/sm/font-weight, 600);
  font-size: var(--label/sm/font-size, 14px);
  line-height: var(--label/sm/line-height, 20px);
  letter-spacing: var(--tracking/global/label-sm, -0.5px);
  color: var(--colors/text/accent, #ad4fc4);
  margin: 0;
}

.help-topics__title {
  font-family: var(--heading/lg/font-family, 'Sora', sans-serif);
  font-weight: var(--heading/lg/font-weight, 600);
  font-size: var(--heading/lg/font-size, 32px);
  line-height: var(--heading/lg/line-height, 44px);
  letter-spacing: var(--tracking/heading/heading-lg, -1px);
  color: var(--colors/text/01, #04070b);
  margin: 0;
  white-space: pre-wrap;
}

/* ==========================================
   MAIN CONTENT (NAV + FAQ)
   ========================================== */

.help-topics__content {
  display: flex;
  gap: var(--spacing/super-xl, 100px);
  width: 100%;
  align-items: flex-start;
}

/* ==========================================
   LEFT: CATEGORY NAVIGATION
   ========================================== */

.help-topics__nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xl, 24px);
  flex-shrink: 0;
}

.help-topics__category {
  background: transparent;
  border: none;
  padding: var(--spacing/xxs, 4px) var(--spacing/xs, 8px);
  border-radius: var(--corner-radius/lg, 16px);
  font-family: var(--label/md/font-family, 'Inter', sans-serif);
  font-weight: var(--label/md/font-weight, 600);
  font-size: var(--label/md/font-size, 16px);
  line-height: var(--label/md/line-height, 24px);
  letter-spacing: var(--tracking/global/label-md, -0.5px);
  color: var(--colors/text/01, #04070b);
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: left;
  white-space: nowrap;
}

.help-topics__category:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.help-topics__category--active {
  background-color: var(--colors/surface/04, #d4d4d8);
  border-radius: var(--corner-radius/sm, 8px);
  cursor: pointer;
}

/* ==========================================
   RIGHT: FAQ ITEMS (ACCORDION)
   ========================================== */

.help-topics__faq {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
}

/* FAQ Item */
.faq-item {
  border-top: 1px solid var(--colors/outline/02, #a1a1aa);
  border-bottom: 1px solid var(--colors/outline/02, #a1a1aa);
  display: flex;
  flex-direction: column;
  width: 100%;
}

.faq-item + .faq-item {
  border-top: none;
}

/* First item with expanded state gets special border */
.faq-item.faq-item--expanded {
  border-top: 1px solid var(--colors/outline/action-primary/default, #003d7a);
  border-bottom: 1px solid var(--colors/outline/action-primary/default, #003d7a);
}

/* Question Button */
.faq-item__question {
  background: transparent;
  border: none;
  padding: var(--spacing/xl, 24px) var(--spacing/super-lg, 80px);
  font-family: var(--heading/sm/font-family, 'Inter', sans-serif);
  font-weight: var(--heading/sm/font-weight, 600);
  font-size: var(--heading/sm/font-size, 20px);
  line-height: var(--heading/sm/line-height, 28px);
  letter-spacing: var(--tracking/heading/heading-sm, -0.5px);
  color: var(--colors/text/02, #172330);
  cursor: pointer;
  text-align: left;
  width: 100%;
  white-space: pre-wrap;
  transition: color 0.2s ease;
}

.faq-item--expanded .faq-item__question {
  color: var(--colors/text/01, #04070b);
}

.faq-item__question:hover {
  color: var(--colors/text/01, #04070b);
}

/* Answer Container */
.faq-item__answer {
  display: none;
  padding: 0 var(--spacing/super-lg, 80px) var(--spacing/xl, 24px);
  overflow: hidden;
}

.faq-item--expanded .faq-item__answer {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/xxl, 32px);
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 2000px;
  }
}

/* Content Blocks */
.faq-item__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing/sm, 12px);
  color: var(--colors/text/02, #172330);
}

.faq-item__subtitle {
  font-family: var(--label/md/font-family, 'Inter', sans-serif);
  font-weight: var(--label/md/font-weight, 600);
  font-size: var(--label/md/font-size, 16px);
  line-height: var(--label/md/line-height, 24px);
  letter-spacing: var(--tracking/global/label-md, -0.5px);
  color: var(--colors/text/02, #172330);
  margin: 0;
  white-space: pre-wrap;
}

.faq-item__text {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/02, #172330);
  margin: 0;
  white-space: pre-wrap;
}

.faq-item__list {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/02, #172330);
  margin: 0;
  padding-left: 24px;
  white-space: pre-wrap;
}

.faq-item__list li {
  margin-bottom: 0;
}

.faq-item__note {
  font-family: var(--body/md/font-family, 'Inter', sans-serif);
  font-weight: var(--body/md/font-weight, 400);
  font-size: var(--body/md/font-size, 16px);
  line-height: var(--body/md/line-height, 24px);
  letter-spacing: var(--tracking/global/body-md, 0px);
  color: var(--colors/text/02, #172330);
  margin: 16px 0 0 0;
  white-space: pre-wrap;
}

/* ==========================================
   RESPONSIVE (MOBILE)
   ========================================== */

@media (max-width: 768px) {
  .help-topics {
    padding: var(--spacing/3xl, 40px) var(--spacing/md, 16px);
  }

  .help-topics__content {
    flex-direction: column;
    gap: var(--spacing/3xl, 40px);
  }

  .help-topics__nav {
    width: 100%;
    overflow-x: auto;
    flex-direction: row;
    gap: var(--spacing/sm, 12px);
    padding-bottom: var(--spacing/xs, 8px);
  }

  .help-topics__category {
    white-space: nowrap;
  }

  .faq-item__question {
    padding: var(--spacing/lg, 20px) var(--spacing/md, 16px);
    font-size: 18px;
    line-height: 26px;
  }

  .faq-item__answer {
    padding: 0 var(--spacing/md, 16px) var(--spacing/lg, 20px);
  }
}
```

---

## YAML Data Structure

Create `help-topics.yaml`:

```yaml
categories:
  - id: getting-started
    name: Getting started
    questions:
      - id: account-restore
        question: How do I create or restore my Spixi account?
        answer:
          - subtitle: Create a new account
            type: ordered-list
            items:
              - Download and open Spixi.
              - Tap Create new account.
              - Choose a nickname and (optionally) a profile picture.
              - Set a strong password – this protects both your wallet and your messages.
              - Finish setup, then go to Settings → Backup and create a backup file so you can restore your account later.
          - subtitle: Restore an existing account
            type: ordered-list
            items:
              - Install and open Spixi on the new device.
              - Tap Restore account.
              - Select your backup file.
              - Enter the password you used when creating that backup.
              - After restore, your account and wallet will be available on this device.
            note: If the backup file or password is wrong or lost, the account cannot be recovered.

  - id: account-security
    name: Account, identity & security
    questions:
      - id: backup-safely
        question: How do I back up my Spixi account safely?
        answer:
          - type: paragraph
            text: Your backup contains your private keys and wallet. Store it securely:
          - type: unordered-list
            items:
              - Keep the backup file in a secure location (encrypted USB drive, password manager).
              - Never share your backup file or password with anyone.
              - Make multiple backups and store them in different secure locations.
              - Test your backup by restoring on a secondary device to ensure it works.
      
      - id: spixi-address
        question: What is my Spixi address and when do I use it?
        answer:
          - type: paragraph
            text: Your Spixi address is a unique identifier that others use to add you as a contact or send you IXI payments.
          - type: paragraph
            text: You can find it in Settings → Profile → Share Address.
          - type: paragraph
            text: Share it when someone needs to add you on Spixi or send you cryptocurrency.

  - id: chats-contacts
    name: Chats, contacts & communities
    questions:
      - id: add-contact
        question: How do I add a contact?
        answer:
          - type: ordered-list
            items:
              - Tap the + icon in your contacts list.
              - Enter or scan their Spixi address.
              - Send a contact request.
              - Once they accept, you can start chatting.

  - id: wallet-payments
    name: Wallet & IXI payments
    questions:
      - id: send-ixi
        question: How do I send IXI to someone?
        answer:
          - type: ordered-list
            items:
              - Open your wallet in Spixi.
              - Tap Send.
              - Enter the recipient's address and amount.
              - Confirm the transaction.
              - Wait for network confirmation.

  - id: mini-apps
    name: Mini Apps
    questions:
      - id: install-app
        question: How do I install a Mini App?
        answer:
          - type: ordered-list
            items:
              - Go to the Mini Apps directory in Spixi.
              - Browse or search for an app.
              - Tap Install or Open in Spixi.
              - Grant any required permissions.
              - The app will appear in your Mini Apps list.

  - id: troubleshooting
    name: Troubleshooting & support
    questions:
      - id: cant-send-message
        question: Why can't I send messages?
        answer:
          - type: paragraph
            text: Common reasons and solutions:
          - type: unordered-list
            items:
              - Check your internet connection.
              - Ensure you're connected to the Ixian network (check sync status).
              - Restart Spixi and try again.
              - If the issue persists, check for app updates.
```

---

## JavaScript Implementation

Create `help-topics.js`:

```javascript
// ==========================================
// HELP TOPICS FAQ - JAVASCRIPT
// ==========================================

class HelpTopics {
  constructor() {
    this.data = null;
    this.currentCategory = 'account-security'; // Default active category
    this.expandedQuestion = 'account-restore'; // Default expanded question
    
    this.init();
  }

  async init() {
    await this.loadData();
    this.renderCategories();
    this.renderQuestions();
    this.attachEventListeners();
    this.setupSearch();
  }

  // Load YAML data
  async loadData() {
    try {
      // Option 1: Fetch YAML and parse with js-yaml library
      const response = await fetch('help-topics.yaml');
      const yamlText = await response.text();
      this.data = jsyaml.load(yamlText);
      
      // Option 2: Use pre-converted JSON (if you convert YAML to JSON during build)
      // const response = await fetch('help-topics.json');
      // this.data = await response.json();
    } catch (error) {
      console.error('Error loading help topics:', error);
    }
  }

  // Render category buttons
  renderCategories() {
    const navContainer = document.querySelector('.help-topics__nav');
    navContainer.innerHTML = '';

    this.data.categories.forEach(category => {
      const button = document.createElement('button');
      button.className = 'help-topics__category';
      button.dataset.category = category.id;
      button.textContent = category.name;
      
      if (category.id === this.currentCategory) {
        button.classList.add('help-topics__category--active');
      }

      button.addEventListener('click', () => this.switchCategory(category.id));
      navContainer.appendChild(button);
    });
  }

  // Render questions for current category
  renderQuestions() {
    const faqContainer = document.querySelector('.help-topics__faq');
    faqContainer.innerHTML = '';

    const category = this.data.categories.find(c => c.id === this.currentCategory);
    if (!category) return;

    category.questions.forEach(question => {
      const faqItem = this.createFaqItem(question);
      faqContainer.appendChild(faqItem);
    });
  }

  // Create FAQ item element
  createFaqItem(question) {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.dataset.questionId = question.id;

    if (question.id === this.expandedQuestion) {
      item.classList.add('faq-item--expanded');
    }

    // Question button
    const questionButton = document.createElement('button');
    questionButton.className = 'faq-item__question';
    questionButton.textContent = question.question;
    questionButton.addEventListener('click', () => this.toggleQuestion(question.id));

    // Answer container
    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-item__answer';
    
    // Render answer content
    question.answer.forEach(block => {
      const content = this.createContentBlock(block);
      answerDiv.appendChild(content);
    });

    item.appendChild(questionButton);
    item.appendChild(answerDiv);

    return item;
  }

  // Create content block based on type
  createContentBlock(block) {
    const contentDiv = document.createElement('div');
    contentDiv.className = 'faq-item__content';

    // Subtitle
    if (block.subtitle) {
      const subtitle = document.createElement('h3');
      subtitle.className = 'faq-item__subtitle';
      subtitle.textContent = block.subtitle;
      contentDiv.appendChild(subtitle);
    }

    // Paragraph
    if (block.type === 'paragraph') {
      const p = document.createElement('p');
      p.className = 'faq-item__text';
      p.textContent = block.text;
      contentDiv.appendChild(p);
    }

    // Ordered list
    if (block.type === 'ordered-list') {
      const ol = document.createElement('ol');
      ol.className = 'faq-item__list';
      block.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
      });
      contentDiv.appendChild(ol);
    }

    // Unordered list
    if (block.type === 'unordered-list') {
      const ul = document.createElement('ul');
      ul.className = 'faq-item__list';
      block.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      contentDiv.appendChild(ul);
    }

    // Note
    if (block.note) {
      const note = document.createElement('p');
      note.className = 'faq-item__note';
      note.textContent = block.note;
      contentDiv.appendChild(note);
    }

    return contentDiv;
  }

  // Switch category
  switchCategory(categoryId) {
    this.currentCategory = categoryId;
    this.expandedQuestion = null; // Collapse all when switching

    // Update active button
    document.querySelectorAll('.help-topics__category').forEach(btn => {
      btn.classList.remove('help-topics__category--active');
      if (btn.dataset.category === categoryId) {
        btn.classList.add('help-topics__category--active');
      }
    });

    this.renderQuestions();
  }

  // Toggle question (accordion behavior)
  toggleQuestion(questionId) {
    const allItems = document.querySelectorAll('.faq-item');
    
    allItems.forEach(item => {
      if (item.dataset.questionId === questionId) {
        // Toggle clicked item
        if (item.classList.contains('faq-item--expanded')) {
          item.classList.remove('faq-item--expanded');
          this.expandedQuestion = null;
        } else {
          item.classList.add('faq-item--expanded');
          this.expandedQuestion = questionId;
        }
      } else {
        // Collapse all others (accordion behavior)
        item.classList.remove('faq-item--expanded');
      }
    });
  }

  // Attach additional event listeners
  attachEventListeners() {
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.collapseAll();
      }
    });
  }

  // Collapse all questions
  collapseAll() {
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('faq-item--expanded');
    });
    this.expandedQuestion = null;
  }

  // Setup search functionality
  setupSearch() {
    const searchInput = document.querySelector('.search-input__field');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.searchQuestions(e.target.value);
    });
  }

  // Search questions across all categories
  searchQuestions(query) {
    if (!query || query.trim().length < 2) {
      // Reset to current category if search is cleared
      this.renderQuestions();
      return;
    }

    const faqContainer = document.querySelector('.help-topics__faq');
    faqContainer.innerHTML = '';

    const lowerQuery = query.toLowerCase();
    let foundAny = false;

    // Search all categories
    this.data.categories.forEach(category => {
      category.questions.forEach(question => {
        // Search in question text
        const matchesQuestion = question.question.toLowerCase().includes(lowerQuery);
        
        // Search in answer text
        const matchesAnswer = JSON.stringify(question.answer).toLowerCase().includes(lowerQuery);

        if (matchesQuestion || matchesAnswer) {
          const faqItem = this.createFaqItem(question);
          faqContainer.appendChild(faqItem);
          foundAny = true;
        }
      });
    });

    // Show "no results" message
    if (!foundAny) {
      const noResults = document.createElement('div');
      noResults.className = 'faq-item';
      noResults.innerHTML = `
        <div class="faq-item__question" style="cursor: default;">
          No results found for "${query}"
        </div>
      `;
      faqContainer.appendChild(noResults);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new HelpTopics();
});
```

---

## Include js-yaml Library

Add to `<head>` in HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
```

Or install via npm if using a build system:

```bash
npm install js-yaml
```

---

## CSS Variables Used

### Spacing
```css
--spacing/xxs: 4px       /* Category button padding */
--spacing/xs: 8px        /* Category button padding, overline */
--spacing/sm: 12px       /* Content gap */
--spacing/md: 16px       /* Mobile padding */
--spacing/lg: 20px       /* Mobile question padding */
--spacing/xl: 24px       /* Category nav gap, question padding */
--spacing/xxl: 32px      /* Answer content gap */
--spacing/3xl: 40px      /* Container gap, mobile section padding */
--spacing/super-lg: 80px /* Section padding, question/answer padding */
--spacing/super-xl: 100px /* Nav/FAQ gap */
```

### Colors
```css
--colors/surface/01: #f9fafb                     /* Section background */
--colors/surface/04: #d4d4d8                     /* Active category button */
--colors/text/01: #04070b                        /* Title, expanded question */
--colors/text/02: #172330                        /* Collapsed question, answer text */
--colors/text/accent: #ad4fc4                    /* Label (purple) */
--colors/outline/02: #a1a1aa                     /* Border (gray) */
--colors/outline/action-primary/default: #003d7a /* Expanded item border (blue) */
```

### Typography
```css
/* Label Small (Section Label) */
--label/sm/font-family: 'Inter'
--label/sm/font-weight: 600
--label/sm/font-size: 14px
--label/sm/line-height: 20px
--tracking/global/label-sm: -0.5px

/* Heading Large (Section Title) */
--heading/lg/font-family: 'Sora'
--heading/lg/font-weight: 600
--heading/lg/font-size: 32px
--heading/lg/line-height: 44px
--tracking/heading/heading-lg: -1px

/* Label Medium (Category Buttons, Subtitle) */
--label/md/font-family: 'Inter'
--label/md/font-weight: 600
--label/md/font-size: 16px
--label/md/line-height: 24px
--tracking/global/label-md: -0.5px

/* Heading Small (Question) */
--heading/sm/font-family: 'Inter'
--heading/sm/font-weight: 600
--heading/sm/font-size: 20px (desktop) / 18px (mobile)
--heading/sm/line-height: 28px (desktop) / 26px (mobile)
--tracking/heading/heading-sm: -0.5px

/* Body Medium (Answer Text, Lists) */
--body/md/font-family: 'Inter'
--body/md/font-weight: 400
--body/md/font-size: 16px
--body/md/line-height: 24px
--tracking/global/body-md: 0px
```

### Border Radius
```css
--corner-radius/sm: 8px   /* Active category button */
--corner-radius/lg: 16px  /* Category button */
```

---

## Design Specifications

### Section
- **Background:** #f9fafb (light gray)
- **Border top:** 1px solid #a1a1aa
- **Padding:** 80px
- **Container max-width:** 1280px
- **Gap:** 40px (header to content)

### Layout
- **Nav/FAQ gap:** 100px
- **Nav width:** Auto (shrinks to content)
- **FAQ width:** Flex 1 (takes remaining space)

### Category Navigation
- **Gap:** 24px between buttons
- **Button padding:** 4px × 8px
- **Active background:** #d4d4d8
- **Active border-radius:** 8px
- **Default border-radius:** 16px

### FAQ Items
- **Border:** 1px solid #a1a1aa (top and bottom)
- **Expanded border:** 1px solid #003d7a (blue)
- **Question padding:** 24px × 80px
- **Answer padding:** 0 × 80px × 24px
- **Content gap:** 32px

### Question Text
- **Default color:** #172330 (gray)
- **Expanded/hover color:** #04070b (black)
- **Font:** 20px Inter Semibold

### Answer Content
- **Text color:** #172330 (gray)
- **Font:** 16px Inter Regular
- **Line height:** 24px
- **List padding:** 24px left
- **Content gap:** 12px

---

## Accordion Behavior

### Rules
1. **Only one question open at a time** (true accordion)
2. **Clicking expanded question collapses it**
3. **Clicking collapsed question expands it and collapses others**
4. **Switching categories collapses all**
5. **Smooth animation** (slideDown 0.3s)

### Visual States
- **Collapsed:** Gray question text, no answer visible
- **Expanded:** Black question text, blue border, answer visible
- **Hover:** Question text changes to black

---

## Search Integration

### How It Works
1. User types in search input (from hero section)
2. JavaScript searches all questions and answers
3. Results displayed across all categories
4. Matches can be expanded individually
5. Clear search to return to category view

### Search Features
- **Minimum 2 characters** to trigger search
- **Searches question text and answer content**
- **Case-insensitive**
- **Shows "No results" if nothing found**
- **Highlights remain expanded after search**

---

## YAML Structure Explained

```yaml
categories:                 # Array of categories
  - id: category-slug       # Unique ID for JS reference
    name: Display Name      # Shown in navigation
    questions:              # Array of questions
      - id: question-slug   # Unique ID for JS reference
        question: Question text?
        answer:             # Array of content blocks
          - subtitle: Optional subtitle
            type: ordered-list | unordered-list | paragraph
            items: [...]    # For lists
            text: "..."     # For paragraphs
            note: Optional note at end
```

---

## Responsive Behavior

### Desktop (>768px)
- Side-by-side layout (nav left, FAQ right)
- Nav: Vertical stack
- FAQ: Full width
- Question padding: 24px × 80px

### Mobile (≤768px)
- Stacked layout
- Nav: Horizontal scrollable row
- FAQ: Full width
- Question padding: 20px × 16px
- Answer padding: 0 × 16px × 20px
- Smaller question font: 18px

---

## Implementation Checklist

- [ ] Create HTML structure
- [ ] Add CSS to styles.css
- [ ] Create help-topics.yaml file
- [ ] Create help-topics.js file
- [ ] Include js-yaml library
- [ ] Populate YAML with all categories and questions
- [ ] Test category switching
- [ ] Test accordion behavior (one open at a time)
- [ ] Test search functionality
- [ ] Test keyboard navigation (Escape to close)
- [ ] Test mobile responsive layout
- [ ] Test horizontal scrolling on mobile nav
- [ ] Verify border colors (gray vs blue)
- [ ] Verify text colors (gray vs black states)
- [ ] Test smooth animations
- [ ] Verify all CSS variables are defined

---

## File Structure

```
project/
├── help.html
├── styles.css
├── variables.css
├── help-topics.yaml          # YAML data file
├── help-topics.js            # JavaScript logic
└── assets/
    └── icons/
```

---

## Alternative: JSON Instead of YAML

If you prefer JSON (no library needed):

**help-topics.json:**
```json
{
  "categories": [
    {
      "id": "account-security",
      "name": "Account, identity & security",
      "questions": [
        {
          "id": "account-restore",
          "question": "How do I create or restore my Spixi account?",
          "answer": [
            {
              "subtitle": "Create a new account",
              "type": "ordered-list",
              "items": [
                "Download and open Spixi.",
                "Tap Create new account.",
                "..."
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

**JavaScript change:**
```javascript
async loadData() {
  const response = await fetch('help-topics.json');
  this.data = await response.json();
}
```

---

## Final Notes

- **YAML makes content easy to edit** (no quotes, clean syntax)
- **JSON is simpler** (no library needed, native support)
- **Accordion behavior** (only one open) is enforced in JS
- **Search is live** (updates as you type)
- **Mobile nav scrolls horizontally** (fits all categories)
- **Expanded items have blue border** (#003d7a)
- **Collapsed items have gray border** (#a1a1aa)
- **All content is searchable** (questions + answers)
- **Category switching collapses all questions**
- **Smooth animations** enhance UX
