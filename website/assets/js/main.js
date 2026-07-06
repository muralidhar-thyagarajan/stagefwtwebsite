// FlywheelTech - Main JavaScript

// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('main-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  // Handle scroll behavior for nav (Home page only)
  if (document.body.classList.contains('home-page')) {
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Dropdown functionality - Desktop
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');
    let timeoutId;

    // Show dropdown on hover
    trigger.addEventListener('mouseenter', function() {
      clearTimeout(timeoutId);
      menu.classList.remove('opacity-0', 'invisible', 'translate-y-2', 'pointer-events-none');
      menu.classList.add('opacity-100', 'visible', 'translate-y-0', 'pointer-events-auto');
    });

    menu.addEventListener('mouseenter', function() {
      clearTimeout(timeoutId);
    });

    // Hide dropdown with delay
    dropdown.addEventListener('mouseleave', function() {
      timeoutId = setTimeout(function() {
        menu.classList.add('opacity-0', 'invisible', 'translate-y-2', 'pointer-events-none');
        menu.classList.remove('opacity-100', 'visible', 'translate-y-0', 'pointer-events-auto');
      }, 100);
    });

    // Keep dropdown open when hovering over menu items
    menu.addEventListener('mouseleave', function() {
      timeoutId = setTimeout(function() {
        menu.classList.add('opacity-0', 'invisible', 'translate-y-2', 'pointer-events-none');
        menu.classList.remove('opacity-100', 'visible', 'translate-y-0', 'pointer-events-auto');
      }, 100);
    });

    // Allow clicks on dropdown links
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // Let the link navigate normally
        clearTimeout(timeoutId);
      });
    });
  });

  // Mobile dropdown toggle
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
  mobileDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.mobile-dropdown-trigger');
    const menu = dropdown.querySelector('.mobile-dropdown-menu');

    trigger.addEventListener('click', function() {
      menu.classList.toggle('hidden');
      const icon = trigger.querySelector('.dropdown-icon');
      icon.style.transform = menu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
});

// ===== PARALLAX & SCROLL ANIMATIONS =====
function initParallax() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Parallax background layers
  const parallaxLayers = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;

    parallaxLayers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-parallax')) || 0.5;
      const yPos = -(scrolled * speed);
      layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (prefersReducedMotion) {
          entry.target.style.opacity = '1';
        } else {
          entry.target.classList.add('revealed');
        }

        // Handle staggered children
        const staggerChildren = entry.target.querySelectorAll('[data-stagger]');
        staggerChildren.forEach((child, index) => {
          if (!prefersReducedMotion) {
            setTimeout(() => {
              child.classList.add('revealed');
            }, index * 100);
          }
        });
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  const revealElements = document.querySelectorAll('[data-reveal]');
  revealElements.forEach(el => observer.observe(el));
}

// ===== PROGRESS INDICATOR (Home page only) =====
function initProgressIndicator() {
  const indicator = document.getElementById('progress-indicator');
  if (!indicator) return;

  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / (documentHeight - windowHeight)) * 100;

    indicator.style.height = `${Math.min(progress, 100)}%`;
  });
}

// ===== SECTION TRANSITION LINES =====
function initSectionLines() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const line = entry.target.querySelector('.section-line');
        if (line) {
          line.style.width = '100%';
        }
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('[data-section-line]');
  sections.forEach(section => observer.observe(section));
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== SCROLL CUE (hero → next section) =====
function initScrollCue() {
  document.querySelectorAll('.scroll-cue').forEach(function(cue) {
    cue.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Real in-page anchors (e.g. #section-2) are handled by initSmoothScroll
      if (href && href.length > 1 && href.charAt(0) === '#') return;

      e.preventDefault();
      const hero = this.closest('section');
      let next = hero ? hero.nextElementSibling : null;
      while (next && next.tagName !== 'SECTION') {
        next = next.nextElementSibling;
      }
      if (next) {
        next.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollBy({ top: Math.round(window.innerHeight * 0.9), behavior: 'smooth' });
      }
    });
  });
}

// ===== FORM HANDLING =====
function initFormHandling() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send to a backend
    console.log('Form submitted:', data);

    // Show success message (you can customize this)
    alert('Thank you for your message. We will respond within one business day.');
    contactForm.reset();
  });
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', function() {
  initParallax();
  initScrollReveal();
  initProgressIndicator();
  initSectionLines();
  initSmoothScroll();
  initScrollCue();
  initFormHandling();
});
