```
/* =========================================================
   FLYWHEELTECH — Design System CSS
   Extracted from: ambitious-studies-288412.framer.app
   ========================================================= */

/* ─── FONT IMPORTS ─────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Variable:wght@100..900&family=JetBrains+Mono:wght@400;600&display=swap');

/* ─── CSS CUSTOM PROPERTIES (DESIGN TOKENS) ────────────── */
:root {
  /* Colors */
  --color-brand:          #35979c;   /* Teal — primary brand */
  --color-brand-light:    rgba(53, 151, 156, 0.12); /* Badge bg */
  --color-text-primary:   #212529;   /* Near-black — headings */
  --color-text-secondary: #343a40;   /* Dark gray — body copy */
  --color-text-muted:     #6c757d;   /* Muted — captions, fine print */
  --color-text-white:     #ffffff;
  --color-bg-white:       #ffffff;
  --color-bg-light:       #f8f9fa;   /* Section bg — light gray */
  --color-bg-stat:        #f6f6f6;   /* Stats row bg */
  --color-bg-divider:     rgba(222, 226, 230, 0.6); /* Divider line */
  --color-bg-warm:        #faf9f5;   /* Warm off-white accent */
  --color-bg-dark:        #222222;   /* Dark overlay */

  /* Typography — Font Families */
  --font-primary:   'Inter Variable', 'Inter', system-ui, Arial, sans-serif;
  --font-mono:      'JetBrains Mono', monospace;

  /* Typography — Font Sizes */
  --text-xs:    11px;
  --text-sm:    13px;
  --text-base:  14px;
  --text-md:    15px;
  --text-lg:    16px;
  --text-xl:    18px;
  --text-2xl:   20px;
  --text-3xl:   22px;
  --text-4xl:   40px;
  --text-5xl:   56px;
  --text-stat:  40px;

  /* Typography — Line Heights */
  --leading-tight:   1.15;
  --leading-snug:    1.20;
  --leading-normal:  1.55;
  --leading-relaxed: 1.75;

  /* Typography — Letter Spacing */
  --tracking-tight:    -1.4px;
  --tracking-snug:     -0.8px;
  --tracking-slight:   -0.4px;
  --tracking-normal:    0px;
  --tracking-wide:      0.28px;
  --tracking-wider:     0.3px;
  --tracking-widest:    1.65px;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-7:  28px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Border Radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-pill: 100px;

  /* Transitions */
  --transition: 0.2s ease;
}

/* ─── RESET & BASE ──────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: 400;
  color: var(--color-text-secondary);
  background-color: var(--color-bg-white);
  line-height: var(--leading-normal);
}

a {
  color: inherit;
  text-decoration: none;
}

/* ─── TYPOGRAPHY ────────────────────────────────────────── */

/* Hero Heading — Light */
h1.hero-light,
.h1-light {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-5xl);        /* 56px */
  font-weight: 300;
  line-height: 67.2px;               /* 1.2× */
  letter-spacing: var(--tracking-tight); /* -1.4px */
  color: var(--color-text-primary);
}

/* Hero Heading — Bold (second line) */
h1.hero-bold,
.h1-bold {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-5xl);        /* 56px */
  font-weight: 700;
  line-height: 67.2px;
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

/* Section Heading */
h2,
.h2 {
  font-family: 'Inter Variable', var(--font-primary);
  font-size: var(--text-4xl);        /* 40px */
  font-weight: 400;
  line-height: 46px;                 /* 1.15× */
  letter-spacing: var(--tracking-snug); /* -0.8px */
  color: var(--color-text-primary);
}

/* Card / Component Heading */
h3,
.h3 {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-xl);         /* 18px */
  font-weight: 600;
  line-height: 21.6px;               /* 1.2× */
  letter-spacing: var(--tracking-normal);
  color: var(--color-text-primary);
}

/* Eyebrow / Section Label */
.eyebrow {
  font-family: var(--font-mono);     /* JetBrains Mono */
  font-size: var(--text-xs);         /* 11px */
  font-weight: 600;
  line-height: 1;
  letter-spacing: var(--tracking-widest); /* 1.65px */
  text-transform: uppercase;
  color: var(--color-brand);
}

/* Lead / Sub-headline */
.lead {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-3xl);        /* 22px */
  font-weight: 400;
  line-height: 34.1px;               /* 1.55× */
  color: var(--color-text-secondary);
}

/* Body Copy — Default */
p,
.body {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-lg);         /* 16px */
  font-weight: 400;
  line-height: 28px;                 /* 1.75× */
  color: var(--color-text-secondary);
}

/* Body Copy — Small / Caption */
.text-sm {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-sm);         /* 13px */
  font-weight: 400;
  line-height: 19.5px;
  color: var(--color-text-secondary);
}

/* Section Subtitle */
.subtitle {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-2xl);        /* 20px */
  font-weight: 400;
  line-height: 31px;
  color: var(--color-text-secondary);
}

/* Stat / Metric Number */
.stat-number {
  font-family: var(--font-mono);     /* JetBrains Mono */
  font-size: var(--text-stat);       /* 40px */
  font-weight: 700;
  line-height: 1;
  letter-spacing: var(--tracking-normal);
  color: var(--color-brand);
}

/* Stat Description */
.stat-label {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-sm);         /* 13px */
  font-weight: 400;
  line-height: 19.5px;
  color: var(--color-text-secondary);
  text-align: center;
}

/* Fine Print / Copyright */
.text-muted {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-sm);         /* 13px */
  color: var(--color-text-muted);
}

/* ─── NAV / HEADER ──────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-10);
  height: 60px;
  background-color: var(--color-bg-white);
}

.nav-logo {
  font-family: 'Inter Variable', var(--font-primary);
  font-size: var(--text-2xl);        /* 20px */
  font-weight: 400;
  letter-spacing: var(--tracking-slight); /* -0.4px */
  color: var(--color-brand);
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  list-style: none;
}

.nav-link {
  font-family: 'Inter Variable', var(--font-primary);
  font-size: var(--text-base);       /* 14px */
  font-weight: 400;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color var(--transition);
}

.nav-link:hover {
  color: var(--color-brand);
}

/* ─── BUTTONS ───────────────────────────────────────────── */

/* Primary Button — Filled Teal */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-base);       /* 14px */
  font-weight: 600;
  letter-spacing: 0.28px;
  color: var(--color-text-white);
  background-color: var(--color-brand);
  border: none;
  border-radius: var(--radius-md);   /* 8px */
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition), opacity var(--transition);
}

.btn-primary:hover {
  opacity: 0.9;
}

/* Primary Button — Large */
.btn-primary-lg {
  padding: 14px 32px;
}

/* Secondary Button — Outlined */
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-md);         /* 15px */
  font-weight: 600;
  letter-spacing: 0.3px;
  color: var(--color-brand);
  background-color: transparent;
  border: 1.5px solid var(--color-brand);
  border-radius: var(--radius-md);
  padding: 12px 28px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition), color var(--transition);
}

.btn-outline:hover {
  background-color: var(--color-brand-light);
}

/* Text / Ghost Button */
.btn-text {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-md);         /* 15px */
  font-weight: 500;
  color: var(--color-brand);
  background: none;
  border: none;
  padding: var(--space-3) 0;
  cursor: pointer;
  text-decoration: none;
  transition: opacity var(--transition);
}

.btn-text:hover {
  opacity: 0.75;
}

/* ─── BADGE / EYEBROW PILL ──────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: var(--text-xs);         /* 11px */
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-brand);
  background-color: var(--color-brand-light);
  border-radius: var(--radius-pill);
  padding: 6px 14px;
}

/* ─── SECTIONS ──────────────────────────────────────────── */
.section {
  padding: var(--space-20) var(--space-12);
}

.section-white {
  background-color: var(--color-bg-white);
}

.section-light {
  background-color: var(--color-bg-light); /* #f8f9fa */
  padding: var(--space-8);
}

.section-warm {
  background-color: var(--color-bg-warm); /* #faf9f5 */
}

/* ─── STATS ROW ─────────────────────────────────────────── */
.stats-row {
  display: flex;
  align-items: center;
  background-color: var(--color-bg-stat); /* #f6f6f6 */
  padding: var(--space-12) var(--space-12);
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  text-align: center;
}

.stat-divider {
  width: 1px;
  align-self: stretch;
  background-color: var(--color-bg-divider);
}

/* ─── CARDS ─────────────────────────────────────────────── */
.card {
  background-color: var(--color-bg-light);
  border-radius: var(--radius-md);
  padding: var(--space-8);
}

.card-title {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-xl);         /* 18px */
  font-weight: 600;
  line-height: 21.6px;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.card-body {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-lg);         /* 16px */
  font-weight: 400;
  line-height: 28px;
  color: var(--color-text-secondary);
}

/* ─── FOOTER ────────────────────────────────────────────── */
.footer {
  background-color: var(--color-bg-white);
  padding: var(--space-16) var(--space-12);
}

.footer-logo {
  font-family: 'Inter Variable', var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: 400;
  letter-spacing: var(--tracking-slight);
  color: var(--color-brand);
  margin-bottom: var(--space-3);
}

.footer-tagline {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-base);       /* 14px */
  font-weight: 400;
  color: var(--color-text-secondary);
}

.footer-link {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-base);       /* 14px */
  font-weight: 400;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-link:hover {
  color: var(--color-brand);
}

.footer-heading {
  font-family: var(--font-mono);
  font-size: var(--text-xs);         /* 11px */
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-brand);
  margin-bottom: var(--space-4);
}

.footer-copyright {
  font-family: 'Inter', var(--font-primary);
  font-size: var(--text-sm);         /* 13px */
  color: var(--color-text-muted);
}
```