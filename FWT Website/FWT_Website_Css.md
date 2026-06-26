# FlywheelTech — Design System & CSS Reference

> All styling, color, typography, spacing, component patterns, and animation specifications for the FlywheelTech website.
> Referenced by: `FWT_Website_Content.md` and `FWT_Lovable_Spec.md`
> Build target: React + Tailwind CSS + Framer Motion

---

## 1. COLOR PALETTE

```css
/* === FlyWheel Tech Solutions — Color Palette === */
--color-bg-primary:     #FFFFFF;       /* Main page background */
--color-bg-section:     #F6F6F6;       /* Alternating section backgrounds */
--color-bg-card:        #F8F9FA;       /* Card and panel areas */
--color-accent:         #35979C;       /* Primary teal — headings, links, active states */
--color-accent-bright:  #57C1C6;       /* Lighter teal — highlights, hover glow */
--color-accent-glow:    rgba(53, 151, 156, 0.15);  /* Soft glow behind stats/accents */
--color-text-primary:   #212529;       /* Main body text */
--color-text-muted:     #343A40;       /* Secondary / supporting text */
--color-text-dim:       #6C757D;       /* Labels, captions */
--color-border:         rgba(222, 226, 230, 0.6);  /* Subtle dividers */
--color-cta-bg:         #35979C;       /* CTA button fill */
--color-cta-text:       #FFFFFF;       /* CTA button text */
--color-cta-hover:      #2D8084;       /* CTA hover state */
```

**Tailwind config extensions:**
```js
colors: {
  accent:        '#35979C',
  'accent-bright': '#57C1C6',
  'accent-hover':  '#2D8084',
  'accent-glow':   'rgba(53, 151, 156, 0.15)',
  'text-primary':  '#212529',
  'text-muted':    '#343A40',
  'text-dim':      '#6C757D',
  'bg-card':       '#F8F9FA',
  'bg-section':    '#F6F6F6',
  border:          'rgba(222, 226, 230, 0.6)',
}
```

**Accessibility note:**
- `#212529` on `#FFFFFF` = 16.1:1 contrast (AAA ✓)
- `#343A40` on `#FFFFFF` = 11.9:1 contrast (AAA ✓)
- `#35979C` on `#FFFFFF` = 3.8:1 — use only for large text / headings (AA Large ✓). Do NOT use as small body text colour.

---

## 2. LOGO

**Primary asset URL:**
```
https://staging.flywheeltechsolutions.com/web/image/website/1/logo/FlyWheel%20Tech%20Solutions?unique=01916d6
```

**Usage:**
```jsx
<img
  src="https://staging.flywheeltechsolutions.com/web/image/website/1/logo/FlyWheel%20Tech%20Solutions?unique=01916d6"
  alt="FlywheelTech"
  className="h-8 w-auto"
/>
```

**Fallback text:** `FlywheelTech` in `#35979C`, font-weight 700.

---

## 3. TYPOGRAPHY

```
Font families:
  --font-heading: 'Inter', sans-serif    weights: 300, 400, 600, 700
  --font-body:    'Inter', sans-serif    weights: 400, 500
  --font-mono:    'JetBrains Mono', monospace   (stats, data labels)

Load via Google Fonts with display=swap. Subset Latin only.
```

**Type scale:**

| Role | Size | Weight | Line Height | Color |
|------|------|--------|-------------|-------|
| Hero Headline | clamp(2.5rem, 5vw, 4rem) | 600 | 1.1 | `#212529` |
| Hero Sub-headline | clamp(1.1rem, 2vw, 1.5rem) | 400 | 1.5 | `#343A40` |
| Hero Body | clamp(0.95rem, 1.5vw, 1.1rem) | 400 | 1.75 | `#343A40` |
| Section Label | 0.75rem | 600 | — | `#35979C` |
| Stat Number | clamp(2rem, 4vw, 3.5rem) | 700 (mono) | 1.0 | `#35979C` |
| Card Title | 1.1rem | 600 | 1.3 | `#212529` |
| Card Body | 0.9rem | 400 | 1.65 | `#343A40` |
| CTA Button | 0.95rem | 600 | — | `#FFFFFF` |
| Nav Link | 0.9rem | 500 | — | `#212529` |
| Footer Link | 0.85rem | 400 | — | `#343A40` |
| Caption / Label | 0.75rem | 400 | — | `#6C757D` |

**Headline rendering note:** On two-line hero headlines, first line uses font-weight 300, second line uses font-weight 700 for visual contrast.

---

## 4. SPACING & LAYOUT

```
Max content width:    1200px  (max-w-7xl mx-auto)
Section padding:      py-24 desktop → py-16 tablet → py-12 mobile
Content padding:      px-8 desktop → px-6 mobile  (within max-width container)
Grid columns:         12-column, gap-8
Hero text max-width:  720px  (left-aligned)
Card gap:             gap-6
Border radius:        rounded-xl cards | rounded-lg buttons | rounded-full chips
```

**Breakpoints (Tailwind defaults):**
- `sm`: 640px
- `md`: 768px — mobile nav switches to hamburger here
- `lg`: 1024px
- `xl`: 1280px

---

## 5. SECTION BACKGROUNDS

Pages alternate between white and light-grey sections:

```
White section:      bg-white
Grey section:       bg-[#F6F6F6]
Teal accent block:  bg-[#35979C]  (used only for Footer CTA strip)
```

Never use dark backgrounds except the Footer CTA strip.

---

## 6. NAVIGATION

### Top Bar

```jsx
/* Transparent → solid on scroll (Home page only) */
className={`fixed top-0 w-full z-50 transition-all duration-300 h-16
  ${scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[rgba(222,226,230,0.6)]'
    : 'bg-transparent'
  }`}

/* Sub-pages: always solid */
className="fixed top-0 w-full z-50 h-16
  bg-white border-b border-[rgba(222,226,230,0.6)]"
```

### Dropdown

```jsx
<div className="absolute top-full left-0 mt-2
  bg-white border border-[rgba(222,226,230,0.6)]
  rounded-xl shadow-lg shadow-gray-200/80
  py-2 min-w-[220px] z-50">

  {/* Each item */}
  <a className="block px-4 py-3 text-sm text-[#212529]
    hover:bg-[#F6F6F6] hover:text-[#35979C]
    rounded-lg transition-colors duration-150">
    Item label
  </a>
</div>
```

Dropdown animation: `opacity 0→1, y -8→0, duration 0.2s easeOut`

### Mobile Menu

Full-screen white overlay. Links stacked vertically with `py-4 text-lg`. Close button top-right.

---

## 7. PARALLAX MECHANICS

Use `framer-motion` `useScroll` + `useTransform`. Do NOT use CSS `background-attachment: fixed`.

### Three-layer system (per full-bleed hero):

| Layer | Scroll factor | Content |
|-------|--------------|---------|
| Background | 0.1 | Slow-moving SVG line-art in accent-glow tones |
| Mid | 0.3 | Decorative section label or stat |
| Foreground | 0 (pinned) | Headline, body, CTA — scroll-triggered fade-in only |

### Scroll-triggered reveals (`whileInView`, `once: true`, `amount: 0.3`):

```
Hero Headline:         opacity 0→1, y 40→0, duration 0.7s, ease easeOut
Hero Sub-headline:     same, delay +0.15s
Hero Body paragraphs:  same, delay +0.25s, stagger 0.1s per paragraph
CTA button:            opacity 0→1, y 20→0, delay +0.4s
Stat cards:            opacity 0→1, scale 0.95→1, stagger 0.1s
Feature cards:         opacity 0→1, x -20→0, stagger 0.1s
```

### Section transition line:

Between major sections on parallax pages: a thin horizontal accent line draws across the viewport on scroll.
```
width: 0 → 100%, duration 1.2s, ease linear, color: #35979C, height: 1px
```

### Narrative progress indicator (Home page only):

Fixed vertical progress bar on right edge.
```
position: fixed right-4 top-1/2 -translate-y-1/2
height: 33vh  width: 2px
background: rgba(222,226,230,0.6)  (track)
fill: #35979C  (progress, driven by scrollYProgress)
```

### Reduced motion:

All parallax and animation effects must be disabled when `prefers-reduced-motion: reduce` is set. Fall back to standard scroll-reveal only.

---

## 8. COMPONENTS

### CTA Button — Primary
```jsx
<a className="inline-flex items-center gap-2
  bg-[#35979C] text-white
  rounded-lg px-6 py-3
  font-semibold text-[0.95rem] tracking-[0.05em]
  hover:bg-[#2D8084]
  transition-colors duration-200
  shadow-sm">
  Label →
</a>
```

### CTA Button — Ghost
```jsx
<a className="inline-flex items-center gap-2
  border-2 border-[#35979C] text-[#35979C]
  rounded-lg px-6 py-3
  font-semibold text-[0.95rem]
  hover:bg-[rgba(53,151,156,0.08)]
  transition-colors duration-200">
  Label →
</a>
```

### CTA — Text Link
```jsx
<a className="text-[#35979C] font-medium
  hover:text-[#2D8084]
  underline-offset-4 hover:underline
  transition-colors duration-150">
  Label →
</a>
```

### Section Label Chip
```jsx
<span className="inline-block
  bg-[rgba(53,151,156,0.12)] text-[#35979C]
  text-xs font-semibold tracking-widest uppercase
  rounded-full px-3 py-1 mb-4">
  SECTION LABEL
</span>
```

### Stat Card
```jsx
<div className="bg-[#F8F9FA]
  border border-[rgba(222,226,230,0.6)]
  rounded-xl p-6">
  <div className="font-mono text-4xl font-bold text-[#35979C]
    drop-shadow-[0_0_12px_rgba(53,151,156,0.25)]">
    {stat}
  </div>
  <div className="text-sm text-[#343A40] mt-2 leading-snug">
    {label}
  </div>
</div>
```

### Feature / Anti-pattern Card
```jsx
<div className="bg-[#F8F9FA]
  border border-[rgba(222,226,230,0.6)]
  rounded-xl p-6
  hover:border-[#57C1C6] hover:shadow-md
  transition-all duration-200">
  <div className="text-[#35979C] mb-3">{icon}</div>
  <h3 className="font-semibold text-[#212529] mb-2">{title}</h3>
  <p className="text-sm text-[#343A40] leading-relaxed">{copy}</p>
</div>
```

### Section Wrapper — White
```jsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-8">
    {/* content */}
  </div>
</section>
```

### Section Wrapper — Grey
```jsx
<section className="py-24 bg-[#F6F6F6]">
  <div className="max-w-7xl mx-auto px-8">
    {/* content */}
  </div>
</section>
```

### Footer CTA Strip
```jsx
<section className="py-16 bg-[#35979C]">
  <div className="max-w-7xl mx-auto px-8 text-center">
    <h2 className="text-3xl font-semibold text-white mb-3">{headline}</h2>
    <p className="text-white/80 mb-8 text-lg">{sub}</p>
    <a href="/contact"
      className="inline-block bg-white text-[#35979C]
        font-semibold rounded-lg px-8 py-3
        hover:bg-[#F6F6F6]
        transition-colors shadow-sm">
      Talk to Us →
    </a>
  </div>
</section>
```

### Leadership Card
```jsx
<div className="bg-[#F8F9FA]
  border border-[rgba(222,226,230,0.6)]
  rounded-xl p-6">
  {/* Photo placeholder: w-full aspect-square rounded-lg bg-[#E9ECEF] mb-4 */}
  <h3 className="font-semibold text-[#212529] text-lg">{name}</h3>
  <p className="text-[#35979C] text-sm font-medium mb-1">{title}</p>
  <p className="text-[#6C757D] text-xs mb-3">{education}</p>
  <p className="text-[#343A40] text-sm leading-relaxed">{bio}</p>
</div>
```

### Location Card
```jsx
<div className="bg-[#F8F9FA]
  border border-[rgba(222,226,230,0.6)]
  rounded-xl p-6">
  <p className="text-[#35979C] text-xs font-semibold tracking-widest uppercase mb-2">{region}</p>
  <p className="text-[#212529] font-semibold text-lg mb-3">{city}</p>
  <p className="text-[#343A40] text-sm leading-relaxed">{address}</p>
  <a href={`tel:${phone}`} className="text-[#35979C] text-sm mt-2 block hover:underline">{phone}</a>
  <a href={`mailto:${email}`} className="text-[#35979C] text-sm hover:underline">{email}</a>
</div>
```

### Pull Quote / Accent Line
```jsx
<blockquote className="border-l-2 border-[#35979C] pl-5 my-6">
  <p className="text-[#212529] text-lg font-light italic leading-relaxed">{quote}</p>
</blockquote>
```

### 10-Domain Grid (2×5 cards, used on GCC Advantage page)
```jsx
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
  {domains.map(d => (
    <div className="bg-[#F8F9FA]
      border border-[rgba(222,226,230,0.6)]
      rounded-xl p-4 text-center">
      <div className="text-[#35979C] mb-2">{d.icon}</div>
      <p className="text-xs font-semibold text-[#212529] mb-1">{d.name}</p>
      <p className="text-xs text-[#6C757D] leading-snug">{d.brief}</p>
    </div>
  ))}
</div>
```

### BOT Timeline Graphic (used on BOT service page)
Three horizontal stage cards connected by arrow indicators:
```
[BOT LAUNCHPAD] → [BOT GROWTH] → [BOT STABLE / TRANSFER]

Below, offset right by one stage width:
[─────────── MANAGED INFRASTRUCTURE + CORPORATE SERVICES ───────────────────→]
  (bar starts at Launchpad, extends well past Transfer — label: "Persists post-transfer")
```
Use accent color `#35979C` for the stage cards' top border. Managed services bar uses `#57C1C6` dashed line.

---

## 9. PAGE HERO (Sub-pages)

All sub-pages open with a page hero:

```jsx
<section className="min-h-[55vh] bg-white flex items-center py-20
  relative overflow-hidden">
  {/* Parallax background layer: subtle radial gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(53,151,156,0.08)_0%,_transparent_60%)]
    pointer-events-none" />

  <div className="max-w-7xl mx-auto px-8 relative z-10">
    {/* Breadcrumb */}
    <p className="text-xs font-mono text-[#6C757D] tracking-widest uppercase mb-6">
      {breadcrumb}
    </p>
    {/* Headline */}
    <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold
      text-[#212529] leading-[1.1] max-w-3xl mb-4">
      {headline}
    </h1>
    {/* Sub-headline */}
    <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-[#343A40]
      leading-relaxed max-w-2xl">
      {subheadline}
    </p>
  </div>
</section>
```

---

## 10. ICONS

Use **Lucide React** (`lucide-react@0.383.0`) throughout. Recommended icon set:

| Context | Icon |
|---------|------|
| Own the IP | `Lock` |
| Own the Team | `Users` |
| Own the Governance | `ClipboardCheck` |
| Not a Staffing Company | `UserX` |
| Not an IT Vendor | `Ban` |
| Not Managed Services | `Unplug` |
| MLOps / LLMOps | `Brain` |
| AgentOps | `Bot` |
| HITL / DecisionOps | `UserCheck` |
| KnowledgeOps | `Database` |
| AI FinOps | `DollarSign` |
| AISecOps | `ShieldCheck` |
| Responsible AI | `Scale` |
| CX Ops | `MessageCircle` |
| GCC Consulting | `Lightbulb` |
| BOT | `Repeat` |
| Managed Services | `Building2` |
| Decision Operations | `SlidersHorizontal` |
| Location | `MapPin` |
| Contact | `Mail` |

Default icon size: `w-6 h-6` for cards, `w-5 h-5` for inline.

---

## 11. IMAGERY DIRECTION

- No stock photography.
- Use abstract geometric line-art SVGs as section background elements: flowing curves, grid intersections, circuit-like paths — in `#35979C` / `#57C1C6` tones at low opacity (0.08–0.15) on white/light backgrounds.
- World map for Locations page: minimal SVG outline, three teal dots with hover tooltips.
- Leadership photos: square, `rounded-lg`, placeholder `bg-[#E9ECEF]` until real photos provided.

---

*CSS Reference version: v1.0*
*Paired with: FWT_Website_Content.md, FWT_Lovable_Spec.md*
