/**
 * Navigation Module
 * Handles navbar scroll behavior and mobile menu interactions
 *
 * This script was extracted from inline scripts that were duplicated
 * across all HTML pages for better maintainability.
 */
(function() {
  'use strict';

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

  let lastScrollTop = 0;
  const scrollThreshold = 50;

  // Guard clause if elements don't exist
  if (!navbar) return;

  /**
   * Handle scroll behavior - add/remove scrolled and hidden classes
   */
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class when page is scrolled down
    if (scrollTop > scrollThreshold) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    // Hide navbar when scrolling down, show when scrolling up
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      navbar.classList.add('navbar--hidden');
    } else {
      navbar.classList.remove('navbar--hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  /**
   * Open mobile menu
   */
  function openMenu() {
    if (!mobileMenu || !navToggle) return;
    mobileMenu.classList.add('mobile-menu--open');
    document.body.classList.add('body--menu-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation');
  }

  /**
   * Close mobile menu
   */
  function closeMenu() {
    if (!mobileMenu || !navToggle) return;
    mobileMenu.classList.remove('mobile-menu--open');
    document.body.classList.remove('body--menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll, false);

  if (navToggle) {
    navToggle.addEventListener('click', openMenu);
  }

  if (navClose) {
    navClose.addEventListener('click', closeMenu);
  }

  // Close menu when clicking a link
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside (on the overlay)
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });
  }

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('mobile-menu--open')) {
      closeMenu();
    }
  });
})();
