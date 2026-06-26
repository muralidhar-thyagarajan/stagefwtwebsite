# FlywheelTech Website

A professional website built with HTML, JavaScript, and Tailwind CSS featuring parallax scroll effects and modern animations.

## ✅ Completed Pages

1. **index.html** - Home page with 5 parallax sections
2. **contact.html** - Contact page with form and regional office locations
3. **why-flywheel/gcc-advantage.html** - The GCC Advantage page with comprehensive content

## 📁 Structure

```
/
├── index.html                      # Home page (COMPLETE)
├── contact.html                    # Contact page (COMPLETE)
├── assets/
│   ├── css/
│   │   └── custom.css             # Custom styles and animations (COMPLETE)
│   └── js/
│       └── main.js                # JavaScript for nav, parallax, animations (COMPLETE)
├── why-flywheel/
│   ├── gcc-advantage.html         # COMPLETE
│   ├── why-india.html             # TODO
│   └── why-flywheeltech.html      # TODO
├── services/
│   ├── consulting.html            # TODO
│   ├── bot.html                   # TODO
│   ├── managed-services.html      # TODO
│   └── decision-operations.html   # TODO
├── industries/
│   ├── banking-mortgage.html      # TODO
│   ├── fintech-proptech.html      # TODO
│   ├── b2b-startups.html          # TODO
│   └── decision-operations.html   # TODO
└── about/
    ├── our-story.html             # TODO
    ├── leadership.html            # TODO
    └── locations.html             # TODO
```

## 🚀 How to Use

### Viewing the Website

1. Open `index.html` in a web browser
2. All pages use CDN-hosted Tailwind CSS and Lucide Icons - no build step required
3. Works with any modern web browser

### Testing Features

- **Navigation**: Click through dropdown menus
- **Mobile Menu**: Resize browser to < 768px to test mobile navigation
- **Parallax Effects**: Scroll on the home page to see parallax backgrounds
- **Scroll Animations**: Watch elements fade in as you scroll
- **Forms**: Test the contact form (currently logs to console)

## 🎨 Design System

### Colors
- **Accent**: #35979C (teal) - Used for CTAs, headings, links
- **Text Primary**: #212529 - Main body text
- **Text Muted**: #343A40 - Secondary text
- **Background Card**: #F8F9FA - Card backgrounds
- **Background Section**: #F6F6F6 - Alternating section backgrounds

### Typography
- **Heading Font**: Inter (300, 400, 600, 700)
- **Body Font**: Inter (400, 500)
- **Mono Font**: JetBrains Mono (for stats)

### Icons
- Using Lucide Icons (https://lucide.dev)
- Loaded via CDN
- Icons initialized with `lucide.createIcons()`

## 📝 Creating Remaining Pages

To create the remaining pages, use `why-flywheel/gcc-advantage.html` as a template:

### Template Pattern

1. **Copy** `why-flywheel/gcc-advantage.html`
2. **Update** the following:
   - `<title>` and meta description
   - Breadcrumb text
   - Page headline and sub-headline
   - Section content based on `FWT_Website_Content.md`
   - Update navigation "active" states (highlighted menu item)
   - Fix relative paths for assets (../ for subfolder pages)

### Navigation Active States

For each page, update the navigation to highlight the current section:
```html
<!-- Example: On Services pages -->
<div class="dropdown relative">
  <button class="dropdown-trigger text-sm font-medium text-accent ...">
    Services <i data-lucide="chevron-down" class="w-4 h-4"></i>
  </button>
  ...
</div>
```

### Section Structure

Each section follows this pattern:
```html
<section class="py-24 bg-white"> <!-- or bg-bg-section -->
  <div class="max-w-7xl mx-auto px-8">
    <!-- Section Label -->
    <span class="inline-block bg-[rgba(53,151,156,0.12)] text-accent text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1 mb-6" data-reveal="fade">
      SECTION LABEL
    </span>

    <!-- Headline -->
    <h2 class="text-3xl md:text-4xl font-semibold text-text-primary mb-4 max-w-3xl" data-reveal="fade-up">
      Section Headline
    </h2>

    <!-- Sub-headline -->
    <p class="text-xl text-text-muted mb-8 max-w-3xl" data-reveal="fade-up" style="transition-delay: 0.1s">
      Section sub-headline
    </p>

    <!-- Body Content -->
    <div class="max-w-3xl text-lg text-text-muted leading-relaxed" data-reveal="fade-up" style="transition-delay: 0.2s">
      <p>Body content...</p>
    </div>

    <!-- CTA -->
    <a href="../contact.html" class="inline-flex items-center gap-2 mt-8 text-accent font-medium hover:text-accent-hover underline-offset-4 hover:underline transition-colors" data-reveal="fade" style="transition-delay: 0.3s">
      Link Text →
    </a>
  </div>
</section>
```

## 🎯 Animation Attributes

Add these data attributes to enable scroll animations:

- `data-reveal="fade"` - Simple fade in
- `data-reveal="fade-up"` - Fade in with upward movement
- `data-reveal="fade-left"` - Fade in from left
- `data-reveal="scale"` - Fade in with scale effect
- `data-stagger` - For items that should animate in sequence (add to each child)
- `style="transition-delay: 0.1s"` - Delay animation timing

## 🔧 JavaScript Features

### Parallax Backgrounds
```html
<div data-parallax="0.1"><!-- slow moving background --></div>
<div data-parallax="0.5"><!-- faster moving background --></div>
```

### Section Transition Lines
```html
<section data-section-line>
  <!-- Section content -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8">
    <div class="section-line"></div>
  </div>
</section>
```

## 📋 Content Reference

All page content is specified in:
- **Content**: `FWT Website/FWT_Website_Content.md`
- **Styles**: `FWT Website/FWT_Website_Css.md`

## 🎨 Component Examples

### Stat Card
```html
<div class="bg-bg-card border border-[rgba(222,226,230,0.6)] rounded-xl p-6">
  <div class="font-['JetBrains_Mono'] text-4xl font-bold text-accent stat-glow">40%</div>
  <div class="text-sm text-text-muted mt-2 leading-snug">Stat description</div>
</div>
```

### Feature Card
```html
<div class="bg-bg-card border border-[rgba(222,226,230,0.6)] rounded-xl p-6 card-hover">
  <div class="text-accent mb-3">
    <i data-lucide="lock" class="w-6 h-6"></i>
  </div>
  <h3 class="font-semibold text-text-primary text-lg mb-2">Card Title</h3>
  <p class="text-sm text-text-muted leading-relaxed">Card description</p>
</div>
```

### CTA Button
```html
<a href="contact.html" class="inline-flex items-center gap-2 bg-accent text-white rounded-lg px-6 py-3 font-semibold text-[0.95rem] tracking-wider hover:bg-accent-hover transition-colors shadow-sm">
  Talk to Us →
</a>
```

## 📱 Responsive Design

- **Desktop**: Full navigation, multi-column layouts
- **Tablet (< 1024px)**: Adjusted column counts
- **Mobile (< 768px)**: Hamburger menu, single column layouts

All pages are fully responsive using Tailwind's responsive utilities.

## ♿ Accessibility

- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion support (`prefers-reduced-motion`)

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Form

The contact form currently logs data to the console. To make it functional:

1. **Add a backend endpoint** (e.g., PHP, Node.js, serverless function)
2. **Update** `assets/js/main.js` in the `initFormHandling()` function
3. **Example**: Replace console.log with:
   ```javascript
   fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(data => {
     alert('Message sent successfully!');
     contactForm.reset();
   })
   .catch(error => {
     alert('Error sending message. Please try again.');
   });
   ```

## 🚧 Next Steps

To complete the website:

1. **Create remaining Why Flywheel pages** (2 pages)
   - why-india.html
   - why-flywheeltech.html

2. **Create Services pages** (4 pages)
   - consulting.html
   - bot.html (includes BOT timeline graphic)
   - managed-services.html
   - decision-operations.html

3. **Create Industries pages** (4 pages)
   - banking-mortgage.html
   - fintech-proptech.html
   - b2b-startups.html
   - decision-operations.html

4. **Create About pages** (3 pages)
   - our-story.html
   - leadership.html (includes team member cards with photos)
   - locations.html (includes map graphic)

5. **Optional Enhancements**
   - Add real team photos to leadership page
   - Create custom world map SVG for locations page
   - Implement backend for contact form
   - Add Google Analytics or similar tracking
   - Add meta tags for social media (Open Graph, Twitter Cards)
   - Optimize images and add lazy loading
   - Add a sitemap.xml for SEO

## 💡 Tips

- **Consistency**: Keep the same structure across all pages
- **Content**: Reference `FWT_Website_Content.md` for exact copy
- **Styles**: All styling should use Tailwind classes as defined in the config
- **Icons**: Browse Lucide icons at https://lucide.dev for appropriate icons
- **Testing**: Test on multiple screen sizes and browsers

## 📄 License

© 2026 FlywheelTech. All rights reserved.
