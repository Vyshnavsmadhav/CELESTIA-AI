---
name: Ethos & Architecture
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626263'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#091d2e'
  on-tertiary-container: '#73869a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#d1e4fb'
  tertiary-fixed-dim: '#b5c8df'
  on-tertiary-fixed: '#091d2e'
  on-tertiary-fixed-variant: '#36485b'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '300'
    lineHeight: 90px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  section-padding-v: 160px
  section-padding-h: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is rooted in the concept of "Quiet Luxury"—a philosophy that prioritizes substance, intentionality, and timelessness over transient digital trends. It is designed for an audience of C-suite executives and board members who value clarity, discretion, and strategic depth.

The aesthetic merges **Minimalism** with **Editorial Brutalism**. It utilizes expansive "museum-grade" whitespace to frame content as intellectual property rather than mere information. The emotional response is one of calm authority; the UI does not demand attention through vibration or saturated color, but earns it through precision and structural integrity.

Key visual pillars include:
- **Architectural Framing:** Layouts governed by strong horizontal axes and asymmetrical balance.
- **Cinematic Restraint:** Use of high-contrast, desaturated imagery focusing on natural light, shadows on concrete, and glass textures.
- **Textural Depth:** A tactile quality achieved through subtle grain and paper-like background tones.

## Colors
The palette is a curated selection of earth-derived tones and architectural neutrals. 

- **Primary (Charcoal Black):** Used for primary typography and structural borders. It represents the "ink" of the brand.
- **Background (Warm White):** A soft, off-white base that prevents eye strain and evokes the feel of premium heavy-stock paper.
- **Accents:** 
    - *Slate Grey & Muted Navy:* Used for secondary information and subtle data visualization.
    - *Natural Stone & Soft Beige:* Used for background layering and UI containers to provide soft "zones" without harsh lines.
    - *Deep Forest Green:* Reserved for high-level success states or subtle call-to-actions that require a sophisticated distinction.

## Typography
Typography is the primary vehicle for the brand’s authority. This design system uses a high-contrast hierarchy between oversized headlines and functional body text.

- **Display & Headlines:** Set in Hanken Grotesk. For Display styles, use tight tracking for a modern, architectural feel. For Headlines, use wide letter-spacing (0.05em) to evoke a premium, editorial aesthetic.
- **Body:** Set in Inter for maximum legibility in complex reports and strategic summaries. 
- **Label Caps:** Used for section headers and small navigation elements. Always uppercase with generous tracking to create a sense of scale.
- **Alignment:** Headlines should often utilize asymmetrical placement—flushed left with significant hanging whitespace to the right.

## Layout & Spacing
The layout follows a **Fluid Grid** with an emphasis on "Negative Space as Content." 

- **The 12-Column Grid:** On desktop, use a 12-column grid with wide 32px gutters. Content should rarely fill all 12 columns; instead, use offsets (e.g., a 6-column text block starting at column 4) to create an asymmetrical, editorial feel.
- **Vertical Rhythm:** Section headers are separated by large 160px vertical buffers to allow the reader to reset between strategic concepts.
- **Mobile Adaptations:** At the 768px breakpoint, the layout collapses to a single column, but maintains generous 24px side margins and retains the 80px+ vertical spacing between key modules.
- **Safe Areas:** Avoid "crowding" the edges. Every component requires a minimum "clearance zone" equal to the `stack-lg` variable.

## Elevation & Depth
In alignment with "Quiet Luxury," depth is expressed through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Tiers:** Use `Natural Stone` or `Soft Beige` backgrounds to elevate a container from the `Warm White` base.
- **Outlines:** Use 1px solid borders in `Slate Grey` at 20-30% opacity. This creates a "hairline" effect reminiscent of technical architectural drawings.
- **Shadows:** When necessary for functional depth (e.g., a floating menu), use a single, ultra-diffused shadow: `0 20px 50px rgba(0,0,0,0.03)`. It should be almost imperceptible, felt rather than seen.
- **Glassmorphism:** Reserved exclusively for navigation overlays or modal backdrops. Use a high blur (20px+) with 80% opacity `Warm White` to maintain the "paper" feel.

## Shapes
The shape language is **Strictly Geometric (Sharp)**. 

0px border radii are used across all primary components: buttons, input fields, cards, and image containers. This reinforces the "Architectural" and "Institutional" nature of the brand. Curves are seen as too soft or consumer-focused; sharp corners communicate precision, mathematical rigor, and structural permanence.

*Note: The only exception is for circular avatars or specific system-status icons where a circle is the universal signifier.*

## Components
- **Buttons:** Primary buttons are solid Charcoal Black with white text, sharp corners, and wide padding (16px 40px). Secondary buttons use a 1px Slate Grey border with wide tracking on the label.
- **Cards:** Use zero-fill backgrounds with a 1px hairline border or a subtle tonal shift to `Natural Stone`. Content inside cards should have generous internal padding (min 40px).
- **Horizontal Timelines:** Representing consulting roadmaps. Use a thin 1px horizontal axis in Charcoal Black. Milestones are marked by small 8x8px solid squares (not circles).
- **Input Fields:** Bottom-border only (1px Slate Grey). Labels are `label-caps` positioned above the field. No background fill.
- **Lists:** Strategy-focused lists use "01", "02" numbering in `label-caps` style, separated by full-width 1px hairline dividers.
- **Cinematic Image Containers:** Images should always be framed with wide margins or bleed entirely to one side of the screen, never centered in a small box. Use a subtle 2% black inner-glow to give digital images a "printed" depth.