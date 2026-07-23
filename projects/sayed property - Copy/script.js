// =============================================
// SYED PROPERTIES — Main JavaScript
// =============================================

(function () {
  'use strict';

  // ─── SCROLL PROGRESS BAR ───────────────────
  const progressBar = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = progress + '%';
  }

  // ─── NAVBAR SCROLL BEHAVIOR ─────────────────
  const navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ─── ACTIVE NAV LINK HIGHLIGHT ──────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    let current = '';
    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // ─── MOBILE NAV ────────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      // Prevent body scroll when nav open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  window.closeMobileNav = function () {
    if (mobileNav) mobileNav.classList.remove('open');
    if (hamburger) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  };

  // ─── ANIMATE ON SCROLL (IntersectionObserver) ─
  const aosElements = document.querySelectorAll('.aos-fade, .aos-fade-left, .aos-fade-right');
  const aosObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          aosObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  aosElements.forEach((el) => aosObserver.observe(el));

  // ─── PROPERTY FILTER ─────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const propertyCards = document.querySelectorAll('#properties-grid .property-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      propertyCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        const show = filter === 'all' || categories.includes(filter);

        if (show) {
          card.style.display = '';
          // Re-trigger animation
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ─── FLOATING WHATSAPP TOOLTIP ───────────────
  const waTooltip = document.getElementById('wa-tooltip');
  const waBtn     = document.getElementById('float-wa-btn');

  if (waTooltip) {
    // Show tooltip after 3 seconds, hide after 6 seconds
    setTimeout(() => {
      waTooltip.style.opacity = '1';
      waTooltip.style.transform = 'translateX(0)';
      setTimeout(() => {
        waTooltip.style.opacity = '0';
        waTooltip.style.transform = 'translateX(10px)';
      }, 5000);
    }, 3000);
  }

  if (waBtn) {
    waBtn.addEventListener('mouseenter', () => {
      if (waTooltip) {
        waTooltip.style.opacity = '1';
        waTooltip.style.transform = 'translateX(0)';
      }
    });
    waBtn.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (waTooltip) {
          waTooltip.style.opacity = '0';
          waTooltip.style.transform = 'translateX(10px)';
        }
      }, 1200);
    });
  }

  // ─── PROPERTY CARD FAVORITE BUTTON ──────────
  document.querySelectorAll('.property-fav').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = btn.textContent.trim();
      if (current === '♡') {
        btn.textContent = '♥';
        btn.style.background = '#FF6B6B';
        btn.style.color = 'white';
      } else {
        btn.textContent = '♡';
        btn.style.background = 'rgba(255,255,255,0.9)';
        btn.style.color = '';
      }
    });
  });

  // ─── CONTACT FORM ────────────────────────────
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const submitBtn   = document.getElementById('form-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name  = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();

      if (!name) {
        shakeField('form-name', 'Please enter your name.');
        return;
      }
      if (!phone || phone.length < 10) {
        shakeField('form-phone', 'Please enter a valid phone number.');
        return;
      }

      // Build WhatsApp message
      const interest = document.getElementById('form-interest').value;
      const budget   = document.getElementById('form-budget').value;
      const message  = document.getElementById('form-message').value.trim();

      const waMsg = encodeURIComponent(
        `Hello Syed Properties! 🙏\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        (interest ? `Interest: ${interest}\n` : '') +
        (budget   ? `Budget: ${budget}\n` : '') +
        (message  ? `\nMessage: ${message}` : '')
      );

      // Simulate sending + redirect to WhatsApp
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        // Show success message
        if (formSuccess) {
          contactForm.querySelectorAll('.form-group, .form-row, button[type="submit"]').forEach(
            (el) => (el.style.display = 'none')
          );
          formSuccess.classList.add('show');
        }
        // Open WhatsApp
        window.open(`https://wa.me/917610377630?text=${waMsg}`, '_blank', 'noopener,noreferrer');
      }, 1000);
    });
  }

  function shakeField(id, message) {
    const input = document.getElementById(id);
    if (!input) return;
    input.focus();
    input.style.borderColor = '#E53E3E';
    input.style.boxShadow = '0 0 0 3px rgba(229,62,62,0.15)';
    input.placeholder = message;
    setTimeout(() => {
      input.style.borderColor = '';
      input.style.boxShadow = '';
      input.placeholder = '';
    }, 3000);
  }

  // ─── COUNTER ANIMATION (Hero Stats) ─────────
  function animateCounter(el, target, suffix, duration) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start).toLocaleString('en-IN') + suffix;
    }, 16);
  }

  // Trigger counter when hero stats come into view
  const heroStats = document.querySelectorAll('.hero-stat strong');
  const heroStatTargets = [100, 6200, 100];
  const heroStatSuffixes = ['+', '+', '%'];
  let countersStarted = false;

  const heroObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        heroStats.forEach((el, i) => {
          animateCounter(el, heroStatTargets[i], heroStatSuffixes[i], 1800);
        });
        heroObserver.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  const heroSection = document.getElementById('hero');
  if (heroSection) heroObserver.observe(heroSection);

  // ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ──────
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = navbar ? navbar.offsetHeight : 72;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── SCROLL EVENT LISTENER ────────────────────
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScrollProgress();
        updateNavbar();
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ─── INIT ─────────────────────────────────────
  updateNavbar();
  updateActiveNav();

  // Make all property cards visible on load (for those already in viewport)
  setTimeout(() => {
    propertyCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        card.classList.add('visible');
      }
    });
  }, 200);

  console.log('🏠 Syed Properties Website — Loaded Successfully');
})();
