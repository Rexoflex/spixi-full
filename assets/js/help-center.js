// ==========================================
// HELP CENTER - FAQ JAVASCRIPT
// ==========================================

class HelpCenter {
  constructor() {
    this.yamlData = null;
    this.currentCategory = null;
    this.searchInput = document.getElementById('helpSearch');
    this.categoryNav = document.getElementById('categoryNav');
    this.faqContainer = document.getElementById('faqContainer');
    
    this.init();
  }

  async init() {
    try {
      await this.loadYAML();
      this.renderCategories();
      this.setActiveCategory(this.yamlData.sections[0].id);
      this.setupSearch();
    } catch (error) {
      console.error('Failed to initialize Help Center:', error);
    }
  }

  async loadYAML() {
    try {
      const response = await fetch('docs/help-center.yml');
      const yamlText = await response.text();
      this.yamlData = jsyaml.load(yamlText);
    } catch (error) {
      console.error('Error loading YAML:', error);
      throw error;
    }
  }

  renderCategories() {
    if (!this.yamlData || !this.yamlData.sections) return;

    this.categoryNav.innerHTML = this.yamlData.sections
      .map(section => `
        <button 
          class="help-topics__category" 
          data-category="${section.id}"
          onclick="helpCenter.setActiveCategory('${section.id}')"
        >
          ${section.title}
        </button>
      `)
      .join('');
  }

  setActiveCategory(categoryId) {
    this.currentCategory = categoryId;
    
    // Update active state on category buttons
    const categoryButtons = this.categoryNav.querySelectorAll('.help-topics__category');
    categoryButtons.forEach(btn => {
      if (btn.dataset.category === categoryId) {
        btn.classList.add('help-topics__category--active');
      } else {
        btn.classList.remove('help-topics__category--active');
      }
    });

    // Render FAQ items for this category
    this.renderFAQItems(categoryId);
  }

  renderFAQItems(categoryId) {
    const section = this.yamlData.sections.find(s => s.id === categoryId);
    if (!section || !section.items) return;

    this.faqContainer.innerHTML = section.items
      .map((item, index) => this.renderFAQItem(item, index))
      .join('');
    
    // Auto-expand first item
    setTimeout(() => {
      const firstItem = this.faqContainer.querySelector('.faq-item');
      if (firstItem) {
        firstItem.classList.add('faq-item--expanded');
        const firstButton = firstItem.querySelector('.faq-item__question');
        if (firstButton) {
          firstButton.setAttribute('aria-expanded', 'true');
        }
      }
    }, 100);
  }

  renderFAQItem(item, index) {
    const answer = this.parseAnswer(item.answer);
    
    return `
      <div class="faq-item" data-faq-id="${index}">
        <button 
          class="faq-item__question" 
          onclick="helpCenter.toggleFAQ(${index})"
          aria-expanded="false"
        >
          <span>${item.question}</span>
          <svg class="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="faq-item__answer">
          ${answer}
        </div>
      </div>
    `;
  }

  parseAnswer(answerText) {
    if (!answerText) return '';
    
    const lines = answerText.trim().split('\n');
    let html = '';
    let currentContent = [];
    let inList = false;

    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      // Skip empty lines
      if (!trimmedLine) {
        if (currentContent.length > 0) {
          html += this.flushContent(currentContent, inList);
          currentContent = [];
          inList = false;
        }
        return;
      }

      // Check if it's a subtitle (ends with colon or is all caps)
      if (trimmedLine.match(/^[A-Z][^.!?]*:$/) || trimmedLine === trimmedLine.toUpperCase()) {
        if (currentContent.length > 0) {
          html += this.flushContent(currentContent, inList);
          currentContent = [];
          inList = false;
        }
        html += `<div class="faq-item__content"><h4 class="faq-item__subtitle">${trimmedLine}</h4></div>`;
        return;
      }

      // Check if it's a numbered list item
      if (trimmedLine.match(/^\d+\./)) {
        if (!inList) {
          if (currentContent.length > 0) {
            html += this.flushContent(currentContent, false);
            currentContent = [];
          }
          inList = true;
        }
        currentContent.push(trimmedLine.replace(/^\d+\.\s*/, ''));
        return;
      }

      // Check if it's a bullet list item
      if (trimmedLine.startsWith('-')) {
        if (!inList) {
          if (currentContent.length > 0) {
            html += this.flushContent(currentContent, false);
            currentContent = [];
          }
          inList = true;
        }
        currentContent.push(trimmedLine.replace(/^-\s*/, ''));
        return;
      }

      // Regular text
      if (inList) {
        html += this.flushContent(currentContent, true);
        currentContent = [];
        inList = false;
      }
      currentContent.push(trimmedLine);
    });

    // Flush remaining content
    if (currentContent.length > 0) {
      html += this.flushContent(currentContent, inList);
    }

    return html;
  }

  flushContent(content, isList) {
    if (content.length === 0) return '';
    
    if (isList) {
      const items = content.map(item => `<li>${item}</li>`).join('');
      return `<div class="faq-item__content"><ol class="faq-item__list">${items}</ol></div>`;
    } else {
      const text = content.join(' ');
      return `<div class="faq-item__content"><p class="faq-item__text">${text}</p></div>`;
    }
  }

  toggleFAQ(index) {
    const faqItems = this.faqContainer.querySelectorAll('.faq-item');
    const clickedItem = faqItems[index];
    const isExpanded = clickedItem.classList.contains('faq-item--expanded');

    // Close all items
    faqItems.forEach(item => {
      item.classList.remove('faq-item--expanded');
      const button = item.querySelector('.faq-item__question');
      button.setAttribute('aria-expanded', 'false');
    });

    // If the clicked item wasn't expanded, expand it
    if (!isExpanded) {
      clickedItem.classList.add('faq-item--expanded');
      const button = clickedItem.querySelector('.faq-item__question');
      button.setAttribute('aria-expanded', 'true');
    }
  }

  setupSearch() {
    if (!this.searchInput) return;

    let searchTimeout;
    this.searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.performSearch(e.target.value);
      }, 300);
    });
  }

  performSearch(query) {
    if (!query || query.length < 2) {
      // Show current category
      this.renderFAQItems(this.currentCategory);
      return;
    }

    const searchQuery = query.toLowerCase();
    const allItems = [];

    // Search through all sections
    this.yamlData.sections.forEach(section => {
      section.items.forEach(item => {
        const questionMatch = item.question.toLowerCase().includes(searchQuery);
        const answerMatch = item.answer && item.answer.toLowerCase().includes(searchQuery);
        
        if (questionMatch || answerMatch) {
          allItems.push(item);
        }
      });
    });

    // Render search results
    if (allItems.length === 0) {
      this.faqContainer.innerHTML = `
        <div class="faq-item">
          <div class="faq-item__question" style="cursor: default;">
            <span>No results found for "${query}"</span>
          </div>
        </div>
      `;
    } else {
      this.faqContainer.innerHTML = allItems
        .map((item, index) => this.renderFAQItem(item, index))
        .join('');
    }
  }
}

// Initialize when DOM is ready
let helpCenter;
document.addEventListener('DOMContentLoaded', () => {
  helpCenter = new HelpCenter();
});
