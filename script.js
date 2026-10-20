/**
 * =========================================================
 * Under 19 ST PAULS CUP - Short Pitch Cricket Tournament
 * Lightweight Vanilla JavaScript for Interactive Enhancements
 * =========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');
  const backToTopBtn = document.getElementById('backToTop');
  const header = document.getElementById('header');

  /**
   * 1. Mobile Hamburger Menu Toggle
   */
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('nav-open');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (event) => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        if (mainNav.classList.contains('nav-open')) {
          mainNav.classList.remove('nav-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  /**
   * 2. Smooth Navigation and Auto-close on link click
   */
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      // Close mobile nav drawer if open
      if (mainNav && mainNav.classList.contains('nav-open')) {
        mainNav.classList.remove('nav-open');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }

      // Smooth scroll with offset for sticky header
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update active link class
          navLinks.forEach((nl) => nl.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  /**
   * 3. Active Nav Link on Scroll (IntersectionObserver)
   */
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  /**
   * 4. Back to Top Button Smooth Scroll
   */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
