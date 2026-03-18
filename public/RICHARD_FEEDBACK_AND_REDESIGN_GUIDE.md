# DTMP Landing Page — Feedback & Redesign Guide
**To:** Richard
**From:** Mercy
**Re:** Landing Page Retro Feedback + Way Forward
**Date:** March 2026

---

## Part 1 — The Note

Hi Richard,

Following the review session today, I wanted to share the feedback we received and give you a clear path forward.

We showcased the landing page in the retro and the feedback was that it doesn't yet follow the design principles that have been established across our approved platforms. The specific callouts were:

- The page feels **busy and heavy** — purple is being used too broadly across all sections rather than as a focused brand anchor
- The layout doesn't follow the **clean, breathable structure** of our reference platforms
- The design system (colours, typography, spacing, card patterns) of our existing approved platforms was not carried through

To be clear — this isn't about scrapping what you built. The content structure is solid, the sections are right, and the DTMP concepts come through clearly. What needs to change is the **visual execution** — how it looks and feels, not what it says.

I've put together a detailed redesign guide below. Feed it directly to your AI along with the current `HomePage.tsx` file and it will walk you through exactly what to change and how. The reference platform to match is called the **DIA AI Hub** — it's an in-house platform and the approved design benchmark.

Let me know if you have questions.

— Mercy

---

## Part 2 — The Redesign Guide (Feed This to Your AI)

---

### CONTEXT FOR YOUR AI

You are improving an existing React landing page (`src/components/HomePage.tsx`) for a platform called **DTMP** (Digital Transformation Management Platform), built for **STC Bank** — a digital bank in Saudi Arabia (part of STC Group). The page was recently reviewed and the feedback was that it doesn't follow the approved design principles of the reference platform.

Your job is to **rewrite `HomePage.tsx`** to match the design language described in this guide. Do not change the content significantly — the sections, headings, and copy from the current file are largely correct. What you are changing is the **visual design, layout, colour usage, spacing, and component patterns**.

The reference platform is called the **DIA AI Hub** — described in full below.

---

### THE REFERENCE: DIA AI Hub Design Language

The DIA AI Hub is a beautiful, modern enterprise platform. Its design is characterised by:

- A **rich warm gradient hero** that transitions from coral-orange to deep dark
- A **clean white and soft lavender body** below the fold
- **Generous whitespace** — sections breathe, nothing is cramped
- **Restrained colour** — accent colours appear only as small indicators, not backgrounds
- **Consistent card anatomy** — every card follows the same pattern
- **Confident typography** — large bold headlines, clear hierarchy
- **Repeating section rhythm** — every section follows the same structure

This is the standard you are building to.

---

### 1. COLOURS — EXACT VALUES TO USE

#### Hero & Header (Dark Zone)
```
STC Brand Purple Deep:    #2D1052
STC Brand Purple:         #5F2D91
Coral Orange (warm):      #FF6B4A
```

**Hero gradient** (apply to hero section background):
```css
background: linear-gradient(110deg, #FF6B4A 0%, #5F2D91 45%, #2D1052 100%);
```
This gives a warm coral-to-STC-purple-to-deep-dark effect. Beautiful, on-brand, modern.

#### Body (Light Zone — everything below the hero)
```
White sections:           #FFFFFF
Soft lavender sections:   #F5F7FF   ← alternate sections with this, NOT grey
Card background:          #FFFFFF
Card border (subtle):     #E8EAFA
Body text (primary):      #0D0F1A
Body text (secondary):    #374151
Body text (muted):        #6B7280
```

#### Accent & Interactive
```
Primary CTA (buttons):    #FF6B4A   (coral orange)
CTA hover:                #E85A35
Phase pill labels bg:     #FFF3EF   (very light coral tint)
Phase pill labels text:   #CC4A1E
Link colour:              #5F2D91   (STC purple — used sparingly)
```

#### Phase Colours (for 4D framework cards — dots and borders only, NOT backgrounds)
```
Discern:    #2563EB   (blue)
Design:     #0D9488   (teal)
Deploy:     #7C3AED   (purple)
Drive:      #EA580C   (orange)
```

#### THE RULE ON PURPLE:
**STC purple (#5F2D91) appears ONLY in:**
1. The hero gradient
2. The header background
3. Small accent dots/borders on cards
4. The final footer CTA background

**It does NOT appear as:**
- Section backgrounds
- Card backgrounds
- Button fills (use orange instead)
- Any body section colour

---

### 2. TYPOGRAPHY

#### Font
The project already has **Manrope** loaded in `index.html`. Use it exclusively.
```css
font-family: 'Manrope', system-ui, sans-serif;
```

#### Scale
```
Hero headline:      font-size: 3.75rem (60px) | font-weight: 800 | line-height: 1.1
Hero subtext:       font-size: 1.125rem (18px) | font-weight: 400 | color: rgba(255,255,255,0.75)
Section heading:    font-size: 2rem (32px) | font-weight: 700 | color: #0D0F1A
Section subtext:    font-size: 1rem | font-weight: 400 | color: #374151 | max-width: 600px centred
Card title:         font-size: 1rem | font-weight: 700 | color: #0D0F1A
Card body:          font-size: 0.875rem | font-weight: 400 | color: #6B7280
Stat number:        font-size: 3rem | font-weight: 800 | color: #0D0F1A (or gradient text)
Category label:     font-size: 0.7rem | font-weight: 700 | letter-spacing: 0.1em | UPPERCASE
```

#### Gradient Text (for stat numbers and key highlights)
```css
background: linear-gradient(135deg, #FF6B4A 0%, #5F2D91 100%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
```

---

### 3. HEADER

**Replace the current custom header with this:**

```
- Background: #2D1052 (deep STC purple — seamless with hero)
- Height: 56px
- Position: sticky, top-0, z-50
- Layout: flex, space-between
- Left: STC Bank logo (text or image)
- Centre: Nav links — Home | Marketplaces | Dashboard | Resources | Support
  - Font: 0.875rem, weight 500, colour rgba(255,255,255,0.85)
  - Hover: colour white
- Right: Single pill button — "Sign In"
  - Background: transparent
  - Border: 1px solid rgba(255,255,255,0.4)
  - Text: white, 0.875rem, weight 600
  - Hover: background rgba(255,255,255,0.1)
- No box shadow — the header bleeds into the hero
```

---

### 4. HERO SECTION

```
- Background: linear-gradient(110deg, #FF6B4A 0%, #5F2D91 45%, #2D1052 100%)
- Min-height: 88vh
- Padding: 120px top, 80px bottom
- Content: centred, max-width 800px
- Layout: flex column, items-center, text-center
```

**Elements in order:**
1. Small pill badge above headline:
   - Text: "Digital Transformation Management Platform"
   - Background: rgba(255,255,255,0.15)
   - Border: 1px solid rgba(255,255,255,0.25)
   - Text colour: white, 0.75rem, weight 600, letter-spacing 0.08em

2. Main headline (bold, white, large):
   - "One Platform. One Direction. Governing STC Bank's Digital Transformation."
   - Font-size: 3.75rem, weight 800, line-height 1.1
   - Max 3 lines

3. Subheadline:
   - 2 lines max, muted white (rgba 255,255,255,0.75)
   - "Empowering STC Bank's teams with a structured four-phase approach to enterprise transformation."

4. **AI / Explore Bar:**
   - Full-width input bar, max-width 560px
   - Background: rgba(255,255,255,0.12)
   - Border: 1px solid rgba(255,255,255,0.25)
   - Border-radius: 999px (full pill)
   - Padding: 14px 20px
   - Placeholder text: "What transformation challenge can we help with?"
   - Right side: coral orange "Explore →" button inside the bar
   - Backdrop-filter: blur(8px)

5. Quick-chip links (3–4 pills below the bar):
   - Background: rgba(255,255,255,0.1)
   - Border: 1px solid rgba(255,255,255,0.2)
   - Text: white, 0.75rem, weight 500
   - Content: "Learning Center" · "Document Studio" · "Portfolio Management" · "Support Services"

6. Two CTA buttons:
   - Primary: "Explore Marketplaces" — coral orange fill, white text, pill shape
   - Secondary: "Watch Overview →" — transparent, white border, white text

---

### 5. SECTION RHYTHM — APPLY THIS PATTERN TO EVERY BODY SECTION

Every section below the hero follows this exact repeating structure:

```
[Section container]
  padding: 80px 0
  background: alternating #FFFFFF and #F5F7FF

  [Section header — centred]
    Small orange pill label    e.g. "FRAMEWORK" / "MARKETPLACES" / "VALUE"
    Large bold heading         2–4 words
    Short descriptor           1–2 sentences, grey, max-width 580px, centred

  [Content — cards grid or stats row]

  [Optional section CTA]
    Single coral orange pill button, centred, e.g. "Explore All Marketplaces →"
```

**Background alternation order:**
1. Stats section → #FFFFFF
2. 4D Framework → #F5F7FF (soft lavender)
3. Strategic Pillars → #FFFFFF
4. Enterprise Priorities → #F5F7FF
5. Find Your DTMP Experience → #FFFFFF
6. Six Marketplaces → #F5F7FF
7. EA Office Value → #FFFFFF
8. Contributors → #F5F7FF
9. Footer CTA → #2D1052 (deep purple)

---

### 6. CARD DESIGN — THE UNIVERSAL PATTERN

Every card on the page uses this exact anatomy:

```
Background:       #FFFFFF
Border-radius:    12px
Box-shadow:       0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)
Padding:          24px
Border:           1px solid #E8EAFA

[Inside the card — top to bottom]
  1. Icon container (32x32px, rounded-lg, coloured background tint)
     - Icon: 18px, matching phase or category colour
     - Background: light tint of the icon colour (e.g. blue icon → #EFF6FF background)

  2. Card title
     - font-size: 1rem, font-weight: 700, color: #0D0F1A
     - margin-top: 16px

  3. Card description
     - font-size: 0.875rem, font-weight: 400, color: #6B7280
     - line-height: 1.6
     - max 3 lines

  4. Optional: phase colour bottom border (3px, full width, rounded)
     or coloured left border (3px)
```

**What cards do NOT have:**
- Coloured backgrounds
- Heavy shadows
- Images
- Multiple CTAs
- Anything extra

---

### 7. STATS SECTION

After the hero, show 4 key stats in a horizontal row:

```
Layout: 4 columns, white background, padding 64px 0
Each stat:
  - Large number: font-size 3rem, font-weight 800 (use gradient text)
  - Label: font-size 0.875rem, color #6B7280, font-weight 500, margin-top 8px
  - Optional divider between stats

Suggested stats for STC Bank:
  - "4" → Transformation Phases
  - "9" → Integrated Marketplaces
  - "3" → Workflow Stages
  - "1" → Unified Platform
```

---

### 8. 4D FRAMEWORK SECTION

```
Section label: "FRAMEWORK"
Heading: "The 4D Transformation Model"
Descriptor: "Every service on DTMP maps to one of four structured phases."

Cards: 2×2 grid (or 4 columns on desktop)
Each card shows:
  - Phase colour dot (top-left, 10px circle)
  - Phase name: DISCERN / DESIGN / DEPLOY / DRIVE (bold, phase colour)
  - Short description
  - 3 bullet points of what's inside
  - Coloured bottom border (3px, phase colour)

Phase colours:
  Discern → #2563EB (blue)
  Design  → #0D9488 (teal)
  Deploy  → #7C3AED (purple)
  Drive   → #EA580C (orange)
```

---

### 9. MARKETPLACES SECTION

```
Section label: "MARKETPLACES"
Heading: "Six Integrated EA Marketplaces"
Descriptor: "Structured services across every phase of your transformation journey."

Cards: 3×2 grid
Each card: small coloured icon (16px in 32px rounded container), bold name, 2-line description

Bottom CTA: single wide dark purple button
  - Text: "Explore All Marketplaces — Full Access"
  - Background: #2D1052
  - Colour: white
  - Border-radius: 8px
  - Padding: 14px 32px
  - Centred, displayed below the grid
```

---

### 10. CONTRIBUTORS SECTION

```
Section label: "CONTRIBUTORS"
Heading: "Who Uses the STC Bank Transformation Platform"
Cards: 3×2 grid, same card pattern as above
Roles: Transformation Office | Strategy & Leadership | Business Architects |
       Project & Product Teams | Lifecycle Operations | Security & DevOps
```

---

### 11. FOOTER CTA SECTION

```
Background: #2D1052
Padding: 80px 0
Text-align: center

Heading: "Ready to Govern STC Bank's Digital Transformation?"
  font-size: 2.5rem, font-weight: 800, color: white

Subtext: "Connect your teams, manage your portfolio, and drive outcomes — all in one platform."
  color: rgba(255,255,255,0.7)

Button: "Get Started"
  Background: #FF6B4A (coral orange)
  Colour: white
  Border-radius: 999px
  Padding: 14px 36px
  Font-weight: 700
```

---

### 12. WHAT TO REMOVE FROM THE CURRENT FILE

Remove these immediately:
- The purple loading spinner screen
- All `style={{ backgroundColor: '#5F2D91' }}` on body sections
- All purple card backgrounds
- The hardcoded custom header (replace with the one described above)
- The hardcoded custom footer (replace with the Footer CTA section above)
- Any `bg-purple-*` Tailwind classes on body sections
- The `bg-gray-50` alternating sections → replace with `#F5F7FF`

---

### 13. DEFINITION OF DONE

The redesign is complete when:

- [ ] Hero shows the coral→purple gradient (not flat purple)
- [ ] Header is slim, deep purple, seamlessly connected to hero
- [ ] AI explore bar is present in the hero
- [ ] Quick chip links present below the bar
- [ ] All body sections are white or soft lavender (#F5F7FF) — no purple backgrounds
- [ ] All cards are white with the universal card anatomy (icon, title, description)
- [ ] Every section follows the label → heading → descriptor → grid → optional CTA pattern
- [ ] Phase colours used only as dots/borders on cards, not backgrounds
- [ ] Stats section present with gradient text numbers
- [ ] Footer CTA section is deep purple with coral orange button
- [ ] Manrope font used throughout
- [ ] No TypeScript errors — `npm run build` passes
- [ ] Responsive on mobile, tablet, desktop
- [ ] No "STC Bank DTMP" plain text logo — use an image or styled component

---

### FILES TO WORK IN

| File | Action |
|------|--------|
| `src/components/HomePage.tsx` | Full rewrite following this guide |
| `src/index.css` | Already has the gradients — use `--dws-grad-hero` and `.gradient-text` |
| `tailwind.config.js` | Already has colour tokens — use them |
| `index.html` | Already updated — do not touch |
| `src/main.tsx` | Already updated — do not touch |

---

*End of guide. Feed this document plus the current `HomePage.tsx` to your AI and ask it to rewrite the homepage following these specifications exactly.*
