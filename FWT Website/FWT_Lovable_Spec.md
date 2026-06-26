# FlywheelTech Website — Lovable Build Specification

> **Build target:** React + Tailwind CSS + Framer Motion  
> **Type:** Parallax narrative scroll site — single-page architecture with anchor-based navigation and separate sub-pages for Why Flywheel, Industries, Services, and About Us  
> **Audience:** CxOs at mid-size US/European BFSI companies and fintech founders  
> **Tone:** Clean, professional, CxO-to-CxO — white/light backgrounds with teal accents. Not a consumer site, not a startup brochure.

---

## 1. DESIGN SYSTEM

### 1.1 Color Palette

```
/* === FlyWheel Tech Solutions — Color Palette === */
--color-bg-primary:     #FFFFFF        /* Main page background (white) */
--color-bg-section:     #F6F6F6        /* Alternating section backgrounds (light grey) */
--color-bg-card:        #F8F9FA        /* Card/panel areas (off-white) */
--color-accent:         #35979C        /* Primary teal — links, active states, headings */
--color-accent-bright:  #57C1C6        /* Lighter teal — highlights, hover glow */
--color-accent-glow:    rgba(53, 151, 156, 0.15)  /* Soft glow behind stats/accents */
--color-text-primary:   #212529        /* Main body text (near-black) */
--color-text-muted:     #343A40        /* Secondary / supporting text (dark grey) */
--color-text-dim:       #6C757D        /* Labels, captions (medium grey) */
--color-border:         rgba(222, 226, 230, 0.6)   /* Subtle dividers */
--color-cta-bg:         #35979C        /* CTA button fill (primary teal) */
--color-cta-text:       #FFFFFF        /* CTA button text (white) */
--color-cta-hover:      #2D8084        /* CTA hover state (darker teal) */

/* Tailwind config mappings */
accent:         '#35979C'
accent-bright:  '#57C1C6'
accent-hover:   '#2D8084'
text-primary:   '#212529'
text-muted:     '#343A40'
text-dim:       '#6C757D'
bg-card:        '#F8F9FA'
bg-section:     '#F6F6F6'
```

### 1.2 Typography

```
Font families:
  --font-heading: 'Inter', sans-serif   (weights: 300, 400, 600, 700)
  --font-body:    'Inter', sans-serif   (weights: 400, 500)
  --font-mono:    'JetBrains Mono', monospace  (for stats, data, labels)

Scale:
  Hero Headline:    clamp(2.5rem, 5vw, 4rem)   font-weight: 600   line-height: 1.1
  Hero Sub-headline: clamp(1.1rem, 2vw, 1.5rem)  font-weight: 400   line-height: 1.5   color: --text-muted
  Hero Body:        clamp(0.95rem, 1.5vw, 1.1rem)  font-weight: 400   line-height: 1.75
  Section Label:    0.75rem   font-weight: 600   letter-spacing: 0.15em   UPPERCASE   color: --accent-bright
  Stat Number:      clamp(2rem, 4vw, 3.5rem)   font-mono   font-weight: 700
  CTA Button:       0.95rem   font-weight: 600   letter-spacing: 0.05em
```

### 1.3 Spacing & Layout

```
Max content width:  1200px
Section padding:    py-24 (desktop) → py-16 (tablet) → py-12 (mobile)
Content padding:    px-6 (mobile) → px-12 (tablet) → px-8 (desktop, within max-width)
Grid:               12-column, gap-8
Hero text column:   max-width 720px (left-aligned, not centred)
Card gap:           gap-6
Border radius:      rounded-xl (cards), rounded-lg (buttons), rounded-sm (labels)
```

### 1.4 Visual Language

- **Background alternation:** Sections alternate between `--color-bg-primary` (#FFFFFF) and `--color-bg-section` (#F6F6F6). Never dark backgrounds except for the Footer CTA strip (use `--color-accent` teal as a full-bleed accent block).
- **Hero sections:** White background. A very subtle radial gradient using `--color-accent-glow` (rgba teal, 0.12 opacity) behind key headline blocks — adds warmth without weight.
- **Accent lines:** Thin 1px left border in `--color-accent` on pull-quotes, blockquotes, and section label indicators.
- **Stat callouts:** Large mono numbers in `--color-accent` (#35979C) with `--color-accent-glow` behind the number swatch. Card background `--color-bg-card`.
- **Dividers:** `border-t` using `--color-border` — never heavy rules.
- **Imagery:** No stock photos. Use abstract geometric line-art SVGs and data-visualization-style illustrations in `--color-accent` and `--color-accent-bright` tones on white/light grey backgrounds.
- **Motion:** All animations via Framer Motion. Default: `opacity: 0 → 1`, `y: 30 → 0`, duration 0.6s, ease `easeOut`, staggered per element within a section.
- **Section label chips:** Small uppercase label in `--color-accent` text, `--color-accent-glow` background, `rounded-full px-3 py-1 text-xs font-semibold tracking-widest`.

---

## 2. PARALLAX MECHANICS

### 2.1 Core Parallax Behavior

Use `framer-motion` `useScroll` + `useTransform` for all parallax effects. Do NOT use CSS `background-attachment: fixed` (poor mobile performance).

**Three parallax layers per full-bleed hero section:**
1. **Background layer** (depth factor 0.1): A slow-moving abstract SVG or gradient blob. Moves at 10% of scroll speed.
2. **Mid layer** (depth factor 0.3): Section label or decorative stat. Moves at 30% of scroll speed.
3. **Foreground layer** (depth factor 0): Content (headline, body, CTA). Pinned — no parallax, but scroll-triggered fade-in on enter.

### 2.2 Scroll-Triggered Reveals

Every content block inside a section uses `whileInView` with `viewport: { once: true, amount: 0.3 }`:
- **Hero Headline:** `opacity 0→1, y 40→0, duration 0.7s`
- **Hero Sub-headline:** same, delay `+0.15s`
- **Hero Body paragraphs:** same, delay `+0.25s`, stagger `0.1s` per paragraph
- **CTA button:** `opacity 0→1, y 20→0, delay +0.4s`
- **Stat cards:** `opacity 0→1, scale 0.95→1, stagger 0.1s`

### 2.3 Section Transitions

Between major sections on the Home page: use a **thin horizontal accent line** (`w-0 → w-full, duration 1.2s, ease linear`) that draws across the viewport as the user scrolls into the next section. This gives the "progressing through a narrative" feel.

### 2.4 Narrative Progress Indicator

On the Home page only: a fixed **vertical progress bar** on the right edge (2px wide, `--color-border` track, `--color-accent` fill). Fills as user scrolls through the page. Position: `fixed right-4 top-1/2 -translate-y-1/2 h-1/3`. Subtle — not a numbered stepper.

---

## 3. NAVIGATION

### 3.1 Top Navigation Bar

**Behavior:**
- Fixed to top of viewport on all pages
- Initially transparent on Home page hero; transitions to `bg-white/95 backdrop-blur-md shadow-sm` after scrolling 80px
- On sub-pages: always solid `bg-white border-b border-[rgba(222,226,230,0.6)]`
- Height: `h-16` (desktop) / `h-14` (mobile)
- Border bottom: `border-b border-color-border` (appears on scroll / solid state)

**Left:** Logo image — use the hosted asset:
```
<img
  src="https://staging.flywheeltechsolutions.com/web/image/website/1/logo/FlyWheel%20Tech%20Solutions?unique=01916d6"
  alt="FlywheelTech"
  className="h-8 w-auto"
/>
```
Fallback text: `FlywheelTech` in `--color-accent` (#35979C), font-weight 700.

**Center/Right (desktop):** Horizontal nav links with dropdowns. Link text in `--color-text-primary`, hover in `--color-accent`.

**Mobile:** Hamburger → full-screen white overlay menu, links stacked vertically, close button top-right.

### 3.2 Navigation Structure

```
FlywheelTech [logo]          [Why Flywheel ▾]   [Industries ▾]   [Services ▾]   [About ▾]   [Talk to Us →]
```

**Why Flywheel** (dropdown):
- The GCC Advantage
- Why India
- Why FlywheelTech

**Industries** (dropdown):
- Banking, Mortgages & Financial Services
- Fintech & Proptech
- B2B Startups
- Document-Driven Decision Operations

**Services** (dropdown):
- Consulting
- Build-Operate-Transfer
- Managed Services
- Decision Operations

**About** (dropdown):
- Our Story
- Leadership
- Locations

**Talk to Us →** — primary CTA button, `bg-accent rounded-lg px-5 py-2`, always visible

### 3.3 Dropdown Style

```
bg-white border border-[rgba(222,226,230,0.6)] rounded-xl shadow-lg shadow-gray-200/80
py-2, min-width 220px
Each item: px-4 py-3 text-[#212529] text-sm hover:bg-[#F6F6F6] hover:text-[#35979C] rounded-lg transition
Active/current item: text-[#35979C] font-medium
Appears on hover (desktop), tap (mobile)
Animation: opacity 0→1, y -8→0, duration 0.2s
```

### 3.4 Anchor Navigation (Home page)

The Home page is a single scroll. Add smooth-scroll anchor links corresponding to each section. The nav CTA "Learn how the GCC model works" scrolls to Section 1.3 (The Answer). "Start with the Problem" scrolls to Section 1.2.

---

## 4. PAGE ARCHITECTURE

The site has the following URL structure:

```
/                          → Home (parallax scroll, single page)
/why-flywheel/gcc-advantage
/why-flywheel/why-india
/why-flywheel/why-flywheeltech
/industries/banking-mortgage
/industries/fintech-proptech
/industries/b2b-startups
/industries/decision-operations
/services/consulting
/services/bot
/services/managed-services
/services/decision-operations
/about/our-story
/about/leadership
/about/locations
/contact
```

Sub-pages (all routes except `/`) share a **Sub-page layout**:
- Nav (solid)
- Page hero (single viewport height, parallax background, left-aligned headline block)
- Content sections (standard scroll, section reveals)
- Footer CTA strip
- Footer

---

## 5. HOME PAGE — FULL SPECIFICATION

The Home page is a **single long-scroll narrative**. Each section occupies at least one viewport height (`min-h-screen`). The visitor reads a compressed version of the full SCR story before navigating deeper.

---

### HOME / Section 1.1 — Opening Hero

**Layout:** Full viewport. `bg-white`. Left-aligned text block (max-w-2xl). Right half: abstract animated SVG (flowing geometric line-art in `--color-accent` teal tones, very subtle — suggests network or momentum). A faint radial teal glow (`--color-accent-glow`) behind the headline block.

**Section label (above headline):**
`FLYWHEEL TECH` — small caps, accent color, mono font

**Hero Headline:**
AI Is Deciding Who Survives.
The Question Is Whether You're Building Something That's Yours.

*Render on two lines. First line lighter weight (300), second line bold (700).*

**Hero Sub-headline:**
Mid-size BFSI companies and fintech founders have a narrow window to build AI capability they own — before the window closes.

**Hero Body:**
The race is real. By end-2026, institutions without production-grade AI will face a 15–20% cost disadvantage against AI-native competitors. The tools are widely available. The talent exists. The models perform. And yet more than 80% of enterprise AI spend in 2025 failed to deliver measurable business value.

Speed is not the problem. Architecture is. The companies moving fastest on AI are also accumulating the most fragile positions — vendor-dependent, IP-light, and increasingly exposed to the exact disruptions their AI programs were supposed to prevent.

There is a structural answer to this. It is not a vendor. It is not outsourcing. It is a focused, captive AI capability built inside your organisation — designed to compound in value, not in dependency.

**CTA:** `Start with the Problem →` — ghost button (border accent, text accent), scrolls to Section 1.2

**Scroll indicator:** Animated down-arrow at bottom center. Fades out after first scroll.

**Stat strip** (bottom of section, above fold break):
Three stats in a horizontal row, separated by vertical dividers:

| Stat | Label |
|------|-------|
| 15–20% | Cost disadvantage for non-AI BFSI by end-2026 |
| 80%+ | Of $684B enterprise AI spend in 2025 failed to deliver value |
| 40% | Of new mid-market GCC setups now use the Build-Operate-Transfer model |

*Stats rendered in `--font-mono`, large, in `--color-accent` (#35979C), with faint teal glow (`--color-accent-glow`) behind the number. Card background `--color-bg-card` (#F8F9FA).*

---

### HOME / Section 1.2 — The Trap

**Layout:** `bg-[#F6F6F6]`. Left side: large vertical section label "THE TRAP" rotated 90° (decorative, `--color-text-dim`). Right side + center: text block.

**Section label:** `THE PROBLEM`

**Hero Headline:**
Speed Without Foundation
Is the Trap Everyone Is Falling Into.

**Hero Sub-headline:**
Foundation models are fast to start. They are expensive, fragile, and difficult to exit at scale.

**Hero Body — Three columns (desktop), stacked (mobile):**

Column 1 — **Vendor Risk**
Building on foundation model APIs is the fastest path to an AI pilot. It is also the fastest path to a position you cannot easily escape. Vendor pricing is currently subsidised to drive adoption. Once your workflows are embedded, pricing will reset. The institutions with the greatest AI exposure will have the least leverage when it does.

Column 2 — **The Operating Model Misconception**
AI does not eliminate operational headcount. In regulated industries, it radically shifts where effort is required — away from execution and toward oversight, orchestration, governance, and optimisation. Your AI-enabled enterprise will need ten distinct operational functions that do not exist in your current org chart.

Column 3 — **The New P&L**
Four structural line items change simultaneously: your labour composition, your general and administrative costs, token and infrastructure spend — an entirely new operating line with no historical benchmark — and compliance costs that now have to account for decision provenance in a way they never did before.

**CTA:** `Talk to Us About Your Situation →` — small, text link style with accent color, opens to `/contact`

---

### HOME / Section 1.3 — The Answer

**Layout:** `bg-white`. Slow parallax abstract line-art SVG in `--color-accent-glow` tones behind. Text centered, max-w-3xl, centered on page.

**Section label:** `THE STRUCTURAL ANSWER`

**Hero Headline:**
The Answer Is a Capability You Own —
Built by People Who Have Done It Before.

**Hero Sub-headline:**
A Global Capability Center, structured correctly for AI, converts the transformation imperative from a risk into a compounding asset.

**Hero Body:**
The world's largest financial institutions have spent decades building AI capability inside their own Global Capability Centers. Mid-size BFSI companies and fintech founders have never had access to that model — at a scale and cost structure that works for them. Until now.

A purpose-built AI GCC gives you what foundation model vendors and outsourcing partners structurally cannot: talent that accumulates inside your organisation, IP that belongs to you, and models you can explain to a regulator without calling the vendor.

The Build-Operate-Transfer model — now the mainstream path for mid-market firms, having grown to approximately 40% of new GCC setups — makes the entry point accessible. You do not need to build from scratch. You need the right partner: one who has operated this at scale, in a regulated industry, and whose only commercial incentive is to make you independent.

**Three feature cards** (below body, horizontal row):

| Icon | Title | Copy |
|------|-------|------|
| 🔒 | Own the IP | Models, processes, and institutional knowledge transfer fully to you. No vendor retains your data or your capability. |
| 👥 | Own the Team | Every team member goes onto your payroll. Headcount is your asset — not a vendor's revenue line. |
| 📋 | Own the Governance | Explainability, HITL, decision provenance — built in from day one, not retrofitted for a regulator. |

*Icons: use Lucide React icons (Lock, Users, ClipboardCheck). Cards: `bg-card`, `rounded-xl`, `border border-color-border`, `p-6`.*

**CTA (primary button):** `How It Works →` — links to `/why-flywheel/gcc-advantage`

---

### HOME / Section 1.4 — Proof of Standing

**Layout:** `bg-[#F6F6F6]`. Split. Left 55%: text. Right 45%: stat block + minimal world map SVG with three teal location dots (Silicon Valley, Paris, Pune).

**Section label:** `OUR TRACK RECORD`

**Hero Headline:**
We Built This. At Scale.
In Your Industry. Under Regulatory Scrutiny.

**Hero Sub-headline:**
The FlywheelTech founding team spent over a decade building and operating an AI-focused GCC for a US fintech that processed 30% of American home loans — serving 150+ US customers.

**Hero Body:**
They started with two people and a mandate. They ended with over 2,000 employees — six of the top ten US mortgage originators and servicers in their customer list. Every model decision was auditable. Every architecture choice was made under live regulatory scrutiny. When the company was acquired, the GCC was the asset.

That institutional knowledge — how to build an innovation culture across a 9.5-hour time zone gap, how to structure AI capability that survives regulatory audit, how to design an organisation its parent company can genuinely own and operate — is not available in a consulting report. It is operational knowledge, earned over time, under real conditions.

FlywheelTech was founded to make that knowledge available to the next generation of BFSI and fintech companies navigating exactly the same challenge.

**Proof stats (right column or below body on mobile):**

| Number | Context |
|--------|---------|
| 2,000+ | Team members built and operated |
| 30% | Of US home loans processed |
| 150+ | US customers served |
| 6 of 10 | Top US mortgage originators and servicers |

**CTA:** `Meet the Team →` — links to `/about/leadership`

---

### HOME / Section 1.5 — Global Presence

**Layout:** Dark, minimal. Centered text. Three location cards in a row below.

**Section label:** `GLOBAL OPERATIONS`

**Hero Headline:**
Americas. Europe. India.
One Team. One Methodology.

**Hero Sub-headline:**
We are a global company with no single-geography bias — present where our clients need us, operating with the same standards everywhere.

**Hero Body:**
FlywheelTech operates across North America, Europe, and India. Our client engagements are led from Silicon Valley and Paris. Our India operations are anchored in Pune, backed by over 50 years of operating heritage through the Vulcan Group. We are not a multinational. We are a globally distributed team with a FlywheelTech culture.

**Location cards (three, horizontal):**

| Region | City | Contact |
|--------|------|---------|
| North America | Silicon Valley, CA | muralidhar@flywheeltechsolutions.com |
| Europe | Paris, France | suvir@flywheeltechsolutions.com |
| India | Pune | info@flywheeltechsolutions.com |

*Cards: minimal, `border border-color-border rounded-xl p-6`. Show region label in accent color, city in large text, contact in muted.*

**CTA (primary button):** `Get in Touch →` — links to `/contact`

---

## 6. SUB-PAGE TEMPLATE

All sub-pages use this shared layout:

```
[Nav — solid]
[Page Hero — min-h-[60vh], parallax background layer, left-aligned content]
  - Section label (breadcrumb: e.g., "WHY FLYWHEEL / THE GCC ADVANTAGE")
  - Page Headline (h1)
  - Page Sub-headline
[Content sections — stacked, scroll-reveal]
  - Each section: py-20, alternating bg-primary / bg-section
  - Section label
  - Hero Headline (h2)
  - Hero Sub-headline
  - Hero Body
  - CTA link
[Footer CTA Strip]
[Footer]
```

**Page Hero background:** Dark navy with a slow-moving subtle radial gradient (parallax factor 0.15). No imagery.

---

## 7. CONTENT — ALL SUB-PAGES

*(Full copy. Feed directly to Lovable as page content.)*

---

### PAGE: /why-flywheel/gcc-advantage

**Page Headline:** The Default Paths to AI Transformation Are Structurally Broken for Mid-Size BFSI.
**Page Sub-headline:** Build in-house, outsource, or rely on foundation models. Each one has a specific failure mode for your situation.

---

**Section: Why In-House Fails**
Label: `PATH 1`
Headline: Building In-House Works — If You Have the Budget, the Time, and the Talent Pipeline.
Sub-headline: Most mid-size BFSI companies have none of these in the quantities required.
Body: The AI talent market is structurally expensive. The roles required — AI architects, ML engineers, LLMOps specialists, AI governance professionals — do not exist in traditional BFSI organisations and are expensive to hire for directly in US or European markets. They compete for management attention with the core business, making sustained focus difficult to maintain. They require a hiring pipeline that takes years to build. For a mid-size institution, building a full AI capability in-house is not just expensive. It is a different business than the one you are in. The organisations that have done it successfully had decade-long runway and institutional resources that most mid-market peers do not.
CTA: Talk to Us About Your Options → /contact

---

**Section: Why Outsourcing Fails**
Label: `PATH 2`
Headline: Outsourcing Moves the Problem. It Does Not Solve It.
Sub-headline: When the contract ends, the institutional knowledge leaves with the vendor.
Body: Contracting AI capability to an IT services vendor or a consultancy provides headcount without building institutional knowledge. The models, the operational logic, the architecture understanding — these accumulate with the vendor. When the engagement ends, or when the vendor's incentives diverge from yours, you are left with delivered outputs and no capability to operate, maintain, or extend them. In a regulated industry, this is not just an operational problem. It is a compliance problem. Explainability requirements, HITL governance, decision provenance — these cannot be delegated to a vendor who will one day exit the relationship.
CTA: Talk to Us About Building What You Own → /contact

---

**Section: The Operating Model Shift**
Label: `THE REAL CHALLENGE`
Headline: AI Doesn't Eliminate Operations. It Rewrites the Entire Operating Model.
Sub-headline: Ten functional domains. None of them exist in your current org chart. All require permanent, dedicated staffing.
Body: The most consequential misconception in AI transformation planning is this: that AI reduces headcount by eliminating labour-intensive execution. In regulated industries, the inverse is closer to the truth. AI shifts operational effort from execution to oversight, orchestration, governance, and optimisation — and creates ten distinct functional domains that do not exist in a traditional BFSI organisation.

These domains span Model and AI Runtime Operations (MLOps, LLMOps — keeping your AI accurate and operational in production); Agent and Orchestration Operations (governing autonomous AI behaviour); Human-in-the-Loop and DecisionOps (managing regulated AI decisions with the accountability trail regulators require); Knowledge and Context Operations (turning enterprise data into AI-ready infrastructure); AI FinOps (governing token and compute economics); AISecOps (securing your AI environment against a new category of attacks); and Responsible AI governance (maintaining explainability and regulatory compliance at the model level).

None of these roles map to a developer, engineer, or QA professional. All must be inside your organisation.

**10-Domain visual:** Render as a 2×5 grid of icon cards. Each card: icon, domain name, one-line brief. Use Lucide React icons. Dark card style.

| Domain | Brief |
|--------|-------|
| MLOps / LLMOps | Keep AI models accurate and operational in production |
| AgentOps | Govern autonomous AI behaviour and tool usage |
| HITL / DecisionOps | Human oversight of regulated AI decisions |
| KnowledgeOps | Turn enterprise knowledge into AI-ready infrastructure |
| ContextOps | Orchestrate context and retrieval across agents and systems |
| AI FinOps | Govern token costs and compute economics |
| AISecOps | Secure AI systems against prompt injection and adversarial attacks |
| MirrorOps | Maintain auditable records of AI decisions and policy lineage |
| Responsible AI | Bias, fairness, explainability, regulatory compliance |
| CX Ops | Operate human + AI customer engagement |

CTA: Talk to Us About Your Operating Model → /contact

---

**Section: The New P&L**
Label: `FINANCIAL REALITY`
Headline: Your AI Program Has a New P&L. Most Boards Haven't Modeled It Yet.
Sub-headline: Four structural line items are changing at the same time. Each one is material.
Body: The financial model of an AI-native financial institution looks nothing like its predecessor. Labour and benefits contracts shift in composition — not just in size — as AI operational domains require different skills, sourced from different markets. Management layers thin and real estate contracts restructure as distributed AI operations change how and where work happens.

Token and infrastructure costs emerge as an entirely new operating line with no historical benchmark. Unlike traditional software licensing, AI inference costs scale with usage and are subject to repricing by vendors currently charging below cost to drive adoption.

Compliance and audit costs restructure around decision provenance. In a post-OCC Bulletin 2026-13, post-EU AI Act, post-CFPB adverse action world, the cost of operating AI without an auditable decision trail belongs on your board's risk register today.

**Four-item visual:** Horizontal bar or 2×2 card grid:
1. Labour Composition — Shifts in skill mix and geography, not just headcount
2. G&A Restructure — Management layers thin; real estate contracts change
3. Token & Infrastructure — New opex line with no historical benchmark
4. Compliance & Audit — Decision provenance is now a cost line, not a project

CTA: Talk to Us About AI Financial Planning → /contact

---

**Section: The Mid-Size Bind**
Label: `YOUR SPECIFIC SITUATION`
Headline: Mid-Size BFSI Is Caught in the Same Structural Trap It Faced a Decade Ago.
Sub-headline: Large enough to need the capability. Without the institutional knowledge or operating experience to build it independently.
Body: A decade ago, when the first Global Capability Centers were being established, the model was effectively inaccessible to mid-size companies. Entry costs were prohibitive, operational knowledge was scarce, and the talent ecosystem was not mature for anything short of a large-enterprise build. The companies that accessed the GCC model early built structural advantages that compounded over time.

The AI transformation wave is replicating that divide at speed. Mid-size BFSI companies are large enough to need AI operations capability — the regulatory requirements, the competitive pressure, and the operating model transformation all apply to them. But they do not have the institutional knowledge or operating experience to build a genuine AI GCC independently.

The companies that solve this in the next 18 months will carry a structural advantage into the rest of the decade.
CTA: Start the Conversation → /contact

---

**Section: Why Generic GCCs Fail**
Label: `THE WRONG TOOL`
Headline: Most GCC Providers Are Staffing Agencies with a Capability Center Rebrand.
Sub-headline: FTE arbitrage is not an AI transformation strategy. Knowing the difference before you sign matters.
Body: The majority of organisations describing themselves as GCC providers today are co-working and real estate arrangements bolted onto recruitment services and legal and administrative support. They can hire people. They can provide space. They cannot build AI capability — because they have no structural reason to understand your specific business, no incentive to prepare your team for the operating model transformation your business requires, and no framework for building the AI operational domains your new model depends on.

The distinction matters before you sign. A general-purpose GCC provider gives you headcount in a location. A purpose-built AI GCC partner gives you a functioning capability — staffed, organised, and designed to be handed over to you as an institutional asset.
CTA: Talk to Us About What to Look For → /contact

---

**Section: The Structural Answer**
Label: `THE PATH FORWARD`
Headline: A Purpose-Built AI GCC Is the Structural Answer.
Sub-headline: Focused on your industry. Designed for AI operations. Built to be yours.
Body: A purpose-built AI GCC is not a staffed team in a different time zone. It is an operational unit structured around the AI domains your new operating model requires — with the hiring strategy, the culture architecture, the governance framework, and the institutional knowledge to function as a genuine extension of your organisation.

Built correctly, it gives you what no vendor relationship provides: talent that accumulates inside your business, IP that belongs to you, models you can explain to a regulator without escalating to a vendor, and an operational capability that compounds in value as your AI program matures.

The Build-Operate-Transfer model makes this accessible at mid-market scale.
CTA (primary): Learn Why India → /why-flywheel/why-india

---

### PAGE: /why-flywheel/why-india

**Page Headline:** We Understand the Hesitation. We've Earned the Right to Address It.
**Page Sub-headline:** Cross-cultural operating challenges are real. So is India's unmatched AI talent advantage.

---

**Section: The Talent Math**
Label: `THE NUMBERS`
Headline: The AI Talent Advantage Is Real. The Numbers Are Not Close.
Sub-headline: 120,000 AI professionals already embedded in Indian GCCs. 40–60% cost advantage over US or European equivalents.
Body: India's GCC ecosystem reached $69.85 billion in 2025 and is projected to exceed $130 billion by 2033. Over 1,700 Global Capability Centers employ 1.9 million professionals. Pune — where FlywheelTech operates — has grown from 210 GCCs in 2019 to over 360 in 2025, the fastest-growing GCC city in India, concentrated specifically in BFSI, fintech, and engineering.

For AI specifically, India's pipeline is unmatched. GenAI and LLM hiring demand grew 300% year-over-year. Mid-market GCCs hold 1.5 times more deep-tech AI talent per employee than non-mid-market peers. The talent is not coming — it is already there, working in production AI environments.

The cost advantage — 40–60% versus US or European equivalents — is structural, not cyclical. For a mid-size BFSI company building an AI operations team, it is the difference between a program that is financially viable and one that is not.

**Stat strip:** `$69.85B` GCC ecosystem 2025 | `1,700+` GCCs | `120,000+` AI professionals | `300%` YoY growth in GenAI hiring | `40–60%` cost advantage
CTA: Talk to Us About Building Your Team → /contact

---

**Section: What FWT Brings**
Label: `THE OPERATING LAYER`
Headline: The Challenge Is Never Geography. It Is Context, Culture, and Operating Model.
Sub-headline: We have built the playbook for AI GCCs in India. It does not exist in a consulting report.
Body: Building a team in India is straightforward. Building an AI capability center that functions as a genuine extension of a US or European financial institution — that understands your regulatory environment, operates with your governance standards, maintains your audit requirements, and builds institutional knowledge that compounds over time — is not.

The operating model design matters. The hiring framework matters. The culture architecture for innovation across time zones matters. These are not things you learn by reading a report about India's GCC ecosystem. They are things you learn by doing — over years, under real operational pressure.

We have that playbook. We built it the hard way. We transfer it to every client we work with.
CTA: Talk to Our India Operations Team → /contact

---

**Section: FWT's Origin**
Label: `OUR IDENTITY`
Headline: We Are Not an India Company That Went Global. We Are a Global Company with Deep India Expertise.
Sub-headline: Founded in Silicon Valley. Operating across Americas, Europe, and India. No single-geography bias.
Body: FlywheelTech was not built from India outward. It was built from the operating reality of mid-size BFSI companies — from the specific challenge of building AI capability at a scale and cost structure that works for companies that are not JP Morgan Chase.

Our founding team is from Silicon Valley. Our European operations are led from Paris. Our India operations are anchored in Pune, backed by 50 years of operating heritage through the Vulcan Group. We have no ideological commitment to any single geography, model provider, or operating structure.

India is part of the right answer for most of our clients. We will tell you clearly if it is not right for yours.
CTA (primary): Why FlywheelTech → /why-flywheel/why-flywheeltech

---

### PAGE: /why-flywheel/why-flywheeltech

**Page Headline:** We Built an AI GCC from 2 to Over 2,000. In a Regulated Industry. Under Regulatory Audit.
**Page Sub-headline:** Before large language models existed. Before "AI transformation" was an industry category.

---

**Section: The Proof Point**
Label: `OUR TRACK RECORD`
Headline: This Is Not a Case Study. This Is What We Are.
Sub-headline: The FlywheelTech founding team designed, built, scaled, and exited an AI-integrated platform in regulated financial services — from two people to over 2,000.
Body: They started with two people in India and a mandate to build production AI for US mortgage lending. They ended with over 2,000 employees, serving 150+ US customers — including six of the top ten US mortgage originators and servicers — processing 30% of US home loans.

Every model decision was made under live regulatory scrutiny. Every architecture choice had to be explainable to an auditor. Hallucinations were not a product quality issue — they were a compliance liability. The institutional knowledge accumulated in that GCC was the asset that made the company acquirable.

That knowledge — not a methodology derived from it, but the actual operational experience of building and running it — is what FlywheelTech offers.

**Proof stats visual (2×2 or horizontal):**
`2,000+` Team built and operated | `30%` US home loans processed | `150+` US customers | `6 of 10` Top US mortgage originators served
CTA: Talk to Our Founding Team → /contact

---

**Section: What FWT Is Not**
Label: `OUR COMMITMENTS`
Headline: We Are Not a Staffing Company, an IT Services Vendor, or a Managed Services Provider.
Sub-headline: Our commercial model is designed to exit. Yours is designed to compound.
Body: Every team member we recruit goes onto your payroll — not ours. Headcount is your asset, from day one. We have no structural incentive to grow your team beyond what your business requires, because we do not earn a revenue line from the size of your headcount.

We do not operate on SLAs or output-based contracts. We do not perform AI capability on your behalf — we build it inside your organisation. There is no managed services tail, no ongoing dependency, no account that benefits from keeping you reliant on us.

We publish our anti-patterns explicitly: no black-box generative AI dependence, no hyperscaler vendor lock-in, no FTE-growth revenue model. We favour open-source LLMs, vertically trained models on your data, and client-owned IP.

**Three anti-pattern cards:**
| Title | Copy |
|-------|------|
| Not a Staffing Company | Every hire goes on your payroll. We don't earn from headcount. |
| Not an IT Services Vendor | No SLAs. No output contracts. We build your capability; we don't perform it. |
| Not a Managed Services Play | No tail. No dependency. Our exit is your independence. |
CTA: Talk to Us About Our Engagement Model → /contact

---

**Section: The BOT Model**
Label: `HOW IT WORKS`
Headline: Build. Operate. Transfer. Then Step Away.
Sub-headline: BOT is now the mainstream mid-market entry path. Our entire business is designed around doing it correctly.
Body: The BOT model has grown from under 10% of new GCC setups a few years ago to approximately 40% today. It solves the entry problem: you do not need the operational playbook to start. You engage a partner who does, let them build and operate through to maturity, and take ownership when the capability is ready to run independently.

What distinguishes FlywheelTech in the BOT market is specificity of purpose. We do not build general GCCs. We build AI-focused GCCs for BFSI and fintech companies. The transfer at the end is not a handover of headcount — it is a handover of institutional AI capability.

**Three-step visual (horizontal timeline):**
`BUILD` → Initial team, infrastructure, governance architecture, first production workloads
`OPERATE` → Scale capability, mature AI operational domains, build institutional knowledge
`TRANSFER` → Full ownership transfer: people, models, IP, processes, governance documentation

CTA: See Our Service Model → /services/bot

---

**Section: The Narrow Focus**
Label: `WHY IT MATTERS`
Headline: We Do One Thing. We Do It for BFSI. We Do It End-to-End.
Sub-headline: Narrow focus is not a limitation. In a specialist engagement, it is the advantage.
Body: FlywheelTech is not a generalist GCC enabler, an IT services firm with a GCC practice, or a consulting house that pivoted to AI. We are a narrowly focused, end-to-end AI GCC implementation partner for BFSI and fintech companies. That is the entirety of what we do.

The narrowness is deliberate. The regulatory environment of financial services, the specific operating model requirements of AI-native BFSI, the culture architecture of a high-trust GCC — these are not general capabilities. They are domains where depth matters more than breadth.

If your challenge is building AI capability for a BFSI business that you will genuinely own and operate — we are built for exactly that. If your challenge is something else, we will tell you clearly.
CTA (primary): See How We Work Across Industries → /industries

---

### PAGES: /industries/*

*(Apply sub-page template. Content from FWT_Website_Content.md — Industries section. Each sub-page follows the same structure: page hero + 3–4 content sections + footer CTA strip.)*

**Industry pages — shared footer CTA strip:**
Headline: "Your industry has specific AI failure modes. Ours has specific answers."
CTA: Talk to Us About Your Industry → /contact

---

### PAGES: /services/*

*(Apply sub-page template. Content from FWT_Website_Content.md — Services section.)*

**Services / BOT page — include a visual timeline graphic:**
Three phases: BOT Launchpad | BOT Growth | BOT Stable
Each phase: title, 3–4 bullet activities/outcomes, no time periods.
Below the three phases: a horizontal bar graphic showing that Managed Infrastructure + Corporate Services continues beyond the BOT transfer line. Label this clearly: "Managed services persist post-transfer."

---

### PAGES: /about/*

*(Apply sub-page template. Content from FWT_Website_Content.md — About Us section.)*

**About / Leadership page:**
Use a card grid (3 columns desktop, 1 mobile). Each card: photo placeholder (square, rounded-lg, bg-card), name (large), title (accent color), education (muted, small), bio text.

**About / Locations page:**
Three regional cards with contact details. Below: a minimal dark world map SVG with three location dots (Silicon Valley, Paris, Pune). No labels on the map — dots only, with a tooltip on hover.

---

## 8. FOOTER

**Layout:** Full-width. Two-part footer:

**Top CTA strip:** Full-bleed `bg-[#35979C]` teal block
Headline: "Ready to build AI capability you actually own?" — white, text-3xl font-semibold
Sub-copy: "Start with a conversation about your situation. No commitment required." — white/80
Button: `Talk to Us →` — `bg-white text-[#35979C] font-semibold rounded-lg px-8 py-3 hover:bg-[#F6F6F6]`

**Main footer:** `bg-[#F6F6F6] border-t border-[rgba(222,226,230,0.6)]` — 4 columns, `py-12`

Column 1 — Brand:
```
<img src="https://staging.flywheeltechsolutions.com/web/image/website/1/logo/FlyWheel%20Tech%20Solutions?unique=01916d6"
  alt="FlywheelTech" className="h-7 w-auto mb-4" />
```
Tagline: "AI capability you own. Built by people who've done it before." — text-[#343A40] text-sm
"Backed by the Vulcan Group" — text-[#6C757D] text-xs mt-2

Column 2 — Why Flywheel (links in `text-[#343A40] hover:text-[#35979C]`):
- The GCC Advantage
- Why India
- Why FlywheelTech

Column 3 — Services:
- Consulting
- Build-Operate-Transfer
- Managed Services
- Decision Operations

Column 4 — Company:
- Industries
- Our Story
- Leadership
- Locations
- Contact

**Bottom bar:** `border-t border-[rgba(222,226,230,0.6)] py-4 bg-[#F6F6F6]`
`© 2026 FlywheelTech. All rights reserved.` | `info@flywheeltechsolutions.com`
Text: `text-[#6C757D] text-sm`

---

## 9. CONTACT PAGE — /contact

**Page Headline:** Let's Start with the Problem You're Actually Trying to Solve.
**Page Sub-headline:** Whether you're at the decision stage, mid-build, or rethinking an approach that isn't working — the first conversation is about your situation, not our services.

**Layout:** Two columns. Left: text + regional contacts. Right: contact form.

**Regional contacts (left, stacked):**

North America — Silicon Valley
4462 Alexander Valley Way, Dublin CA 94568
+1 408-386-6734 | muralidhar@flywheeltechsolutions.com

Europe — Paris
+33 6 32 27 03 32 | suvir@flywheeltechsolutions.com

India — Pune
69A Florida Estate Society, Keshav Nagar Mundhwa, Pune 411036
info@flywheeltechsolutions.com

**Contact form (right):**
Fields: Name | Company | Role | Region (select: Americas / Europe / India / Other) | Message (textarea)
Submit button: `Send Message →` — primary blue
Form note (below button, muted text): "We respond within one business day. No sales deck will be sent."

---

## 10. COMPONENT NOTES FOR LOVABLE

### CTA Button Variants
```
Primary:   bg-[#35979C] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#2D8084] transition-colors shadow-sm
Ghost:     border-2 border-[#35979C] text-[#35979C] rounded-lg px-6 py-3 font-semibold hover:bg-[rgba(53,151,156,0.08)] transition-colors
Text link: text-[#35979C] font-medium hover:text-[#2D8084] underline-offset-4 hover:underline transition-colors
```

### Section Label Chip
```
<span className="inline-block bg-[rgba(53,151,156,0.12)] text-[#35979C] text-xs font-semibold
  tracking-widest uppercase rounded-full px-3 py-1 mb-4">
  SECTION LABEL
</span>
```

### Stat Card
```
<div className="bg-[#F8F9FA] border border-[rgba(222,226,230,0.6)] rounded-xl p-6">
  <div className="font-mono text-4xl font-bold text-[#35979C]
    drop-shadow-[0_0_12px_rgba(53,151,156,0.25)]">{stat}</div>
  <div className="text-sm text-[#343A40] mt-2">{label}</div>
</div>
```

### Feature / Anti-pattern Card
```
<div className="bg-[#F8F9FA] border border-[rgba(222,226,230,0.6)] rounded-xl p-6
  hover:border-[#57C1C6] hover:shadow-md transition-all duration-200">
  <div className="text-[#35979C] mb-3">{icon}</div>
  <h3 className="font-semibold text-[#212529] mb-2">{title}</h3>
  <p className="text-sm text-[#343A40] leading-relaxed">{copy}</p>
</div>
```

### Page Section Wrapper
```
/* White section */
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-8"> ... </div>
</section>

/* Grey section */
<section className="py-24 bg-[#F6F6F6]">
  <div className="max-w-7xl mx-auto px-8"> ... </div>
</section>
```

### Footer CTA Strip (teal accent block)
```
<section className="py-16 bg-[#35979C]">
  <div className="max-w-7xl mx-auto px-8 text-center">
    <h2 className="text-3xl font-semibold text-white mb-3">{headline}</h2>
    <p className="text-white/80 mb-8">{sub}</p>
    <a href="/contact" className="bg-white text-[#35979C] font-semibold rounded-lg px-8 py-3
      hover:bg-[#F6F6F6] transition-colors shadow-sm">
      Talk to Us →
    </a>
  </div>
</section>
```

---

## 11. PERFORMANCE & ACCESSIBILITY NOTES

- All parallax effects must be disabled when `prefers-reduced-motion` is set. Fall back to standard scroll-reveal only.
- All `whileInView` animations: `once: true` — do not replay on scroll-back.
- All CTAs must be `<a>` or `<button>` elements — not styled divs.
- Color contrast: all body text must pass WCAG AA (minimum 4.5:1 against background). `--color-text-primary (#212529)` on `--color-bg-primary (#FFFFFF)` = 16.1:1 (AAA). `--color-text-muted (#343A40)` on `#FFFFFF` = 11.9:1 (AAA). `--color-accent (#35979C)` on `#FFFFFF` = 3.8:1 — use only for large text/headings (AA Large); do not use as small body text colour.
- Mobile breakpoint: everything collapses at `md` (768px). Navigation switches to hamburger. Multi-column layouts stack.
- Fonts: load via Google Fonts with `display=swap`. Subset to Latin only.

---

*Spec version: Lovable Build v1.0*
*Source content: FWT_Website_Content.md*
*Source outline: FWT_Website_Structural_Outline.md*
