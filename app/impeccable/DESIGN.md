---
name: Mooring
description: Booking and scheduling for small fitness studios, built on the Pilates reformer's spring bar.
colors:
  aubergine-upholstery: "oklch(0.31 0.095 337)"
  aubergine-deep: "oklch(0.22 0.07 335)"
  on-upholstery: "oklch(0.96 0.015 335)"
  on-upholstery-soft: "oklch(0.83 0.045 335)"
  aluminium: "oklch(0.945 0.004 300)"
  aluminium-rail: "oklch(0.885 0.006 300)"
  aluminium-shadow: "oklch(0.8 0.008 300)"
  ink: "oklch(0.21 0.03 335)"
  ink-soft: "oklch(0.36 0.03 335)"
  steel: "oklch(0.47 0.015 320)"
  spring-yellow: "oklch(0.86 0.16 92)"
  spring-yellow-hover: "oklch(0.9 0.15 95)"
  spring-yellow-ink: "oklch(0.74 0.16 75)"
  spring-red: "oklch(0.6 0.2 25)"
  spring-green: "oklch(0.62 0.15 155)"
  spring-blue: "oklch(0.58 0.15 250)"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "3rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112.5"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 75"
rounded:
  hook: "9999px"
  panel: "2rem"
spacing:
  gutter-mobile: "16px"
  gutter: "24px"
  section: "112px"
  panel-x: "48px"
components:
  button-primary:
    backgroundColor: "{colors.spring-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hook}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.spring-yellow-hover}"
  button-ghost-on-upholstery:
    textColor: "{colors.on-upholstery}"
    rounded: "{rounded.hook}"
    padding: "0 24px"
    height: "48px"
  button-ghost-on-upholstery-hover:
    backgroundColor: "{colors.aubergine-deep}"
  upholstery-panel:
    backgroundColor: "{colors.aubergine-upholstery}"
    textColor: "{colors.on-upholstery}"
    rounded: "{rounded.panel}"
    padding: "56px 48px"
  rail:
    backgroundColor: "{colors.aluminium-rail}"
    rounded: "{rounded.hook}"
  hook-booked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.aluminium}"
    rounded: "{rounded.hook}"
    size: "32px"
---

# Design System: Mooring

## Overview

**Creative North Star: "The Spring Bar"**

The page is a Pilates reformer seen from the side. Aubergine upholstery is the carriage that carries the big statements; aluminium is the frame and the ground everything else sits on; springs hang between them and stand for spots in a class. A booked spot is a spring hooked on and pulled taut in its tension colour. An open spot is a slack steel spring above an empty, dashed hook.

Density is low and the scale contrast is high. Hierarchy comes from size and width of one typeface, not from ornament. The material is never faked: there are no stitch lines, no bevels and no brushed-metal stripes. The upholstery and aluminium are flat colour fields with one soft drop shadow, and the springs are the only drawn objects.

**Key Characteristics:**
- Two grounds only: aubergine upholstery fields and cool aluminium.
- Tension colour (red, yellow, green, blue) marks an engaged spring; at rest everything is steel or aluminium.
- One family, Archivo, used across its width axis: expanded for display, normal for reading, condensed for stamped labels.
- Pill rails and pill buttons; 2rem panels; round hooks.

## Colors

A committed two-ground palette: aubergine carries 30 to 40 percent of the page, aluminium the rest, with four reformer spring colours held back for state.

### Primary
- **Aubergine Upholstery**: the carriage. Hero, testimonial, the higher pricing plan and the closing call to action are set on it at full page width.
- **Spring Yellow**: every primary action ("Start free trial") and the hooked springs on the upholstery. It is the one colour that appears on both grounds.

### Secondary
- **Spring Red, Spring Green, Spring Blue, Spring Yellow Ink**: the reformer's tension code. They colour only springs that are hooked on, cycling red, yellow, green, blue along a bar.

### Neutral
- **Aluminium**: page ground.
- **Aluminium Rail**: header rail, spring bar, gear rail, the lighter pricing plan.
- **Aluminium Shadow**: dividers between rows, waitlist chip borders.
- **Ink / Ink Soft**: headings and body text on aluminium.
- **Steel**: secondary text, slack springs, resting spring sets, open hooks.
- **On Upholstery / On Upholstery Soft**: text on aubergine; the soft value is tinted from the aubergine, never grey.

### Named Rules
**The Engaged Colour Rule.** Tension colour appears only on a spring that is hooked on. A spring at rest, or a spring used as an icon, is steel on aluminium or soft aubergine-white on upholstery.

**The Two Grounds Rule.** Every section sits on aluminium or on a full aubergine panel. No third ground, no gradients between them.

## Typography

**Display Font:** Archivo (variable, wdth 62 to 125), sans-serif fallback
**Body Font:** Archivo
**Label Font:** Archivo at condensed width

**Character:** An equipment nameplate voice. Expanded black weights read like a maker's mark on a machine frame; condensed caps read like stamped part labels.

### Hierarchy
- **Display** (900, clamp(2.4rem, 5.4vw, 5rem), 0.95, expanded): hero and closing headlines only.
- **Headline** (900, 2.25rem to 3rem, expanded): section headings (Features, How it works, Pricing, FAQ).
- **Title** (800, 1.5rem to 1.875rem, semi-expanded): feature names, step leads, plan names.
- **Body** (400, 1rem to 1.125rem, 1.625, max 48 to 60ch): descriptions and answers.
- **Label** (600, 0.75rem, 0.12em tracking, uppercase, condensed): instrument readouts on the spring bar only.
- **Figures** (900, expanded, tabular): prices, stats and class counts.

### Named Rules
**The Size Is Billing Rule.** Importance is carried by size and width alone. Stats run as stacked lines of display type, heavy expanded figures followed by light normal-width words, with no separators or icons.

## Layout

Single column inside a 1280px container (max-w-7xl) with 16px gutters on phones and 24px from 640px. Sections are separated by about 112px; headings sit 40px above their content. Feature rows are a three-track grid (title, description, a 3.5rem spring column) that collapses to title and description over each other on phones. Steps run on a gear rail in three columns from 768px and stack below. The spring bar keeps twelve columns at every width; it scales and never wraps. The page works from 390px to 1440px without horizontal scroll.

## Elevation & Depth

Flat colour fields with a single soft, offset drop shadow under each upholstery panel and under primary buttons. Rails carry only a 1px top highlight. No inset bevels.

### Shadow Vocabulary
- **Carriage** (`0 24px 40px -24px oklch(0.2 0.06 335 / 0.7)`): under aubergine panels.
- **Button** (`0 6px 14px -6px oklch(0.15 0.04 335 / 0.6)`, plus `inset 0 -2px 0 oklch(0.7 0.15 80 / 0.6)`): primary buttons.
- **Rail highlight** (`inset 0 1px 0 oklch(1 0 0 / 0.8)`): rails and the light pricing panel.

## Shapes

Pills for rails, buttons and chips; 2rem corners on panels; circles for hooks and step markers. Springs are a zigzag SVG that stretches with its box, so taut and slack are the same drawing at different heights. Every spring, hook and rail uses one geometry wherever it appears.

## Components

### Buttons
- **Shape:** full pill, 48px tall (40px in the header).
- **Primary:** Spring Yellow with Ink text, bold 15px, 24px side padding; hover lightens, press nudges down 1px.
- **Ghost on upholstery:** 2px On Upholstery Soft outline; hover fills Aubergine Deep.
- **Focus:** 2px outline offset 3px, aubergine on aluminium, yellow on aubergine.

### Navigation
- Header is an aluminium rail: expanded wordmark left, three links, primary button right. On phones the links drop to a second row inside the rail. Links underline in aubergine on hover.

### Upholstery Panel
- Aubergine field, 2rem corners, carriage shadow, generous padding (56px by 48px on desktop). Holds display type and primary actions.

### Spring Bar (signature)
- Twelve springs hang from the panel above onto an aluminium rail. Booked: tension-coloured spring at full stretch, ink hook with member initials (11px, from 640px). Open: short steel spring, dashed steel hook with a drawn plus. Tapping a booked spring cancels it and the first waitlisted name hooks on after a beat; tapping an open hook books it. A readout (condensed label, expanded count, plain notice in a polite live region) and waitlist chips sit under the rail. On first view it runs one cancel-and-promote cycle by itself, skipped under reduced motion.

### Accordion (FAQ)
- Native details rows between aluminium dividers. The marker is a dashed steel hook with a plus that turns into a filled ink hook and rotates 45 degrees when open.

## Do's and Don'ts

### Do:
- **Do** set the biggest statements on full-width aubergine panels and everything else on aluminium.
- **Do** colour a spring only when it is hooked on (The Engaged Colour Rule).
- **Do** draw open spots as deliberately as booked ones: slack steel spring, dashed hook.
- **Do** carry hierarchy with Archivo's width and weight, not with extra colour.

### Don't:
- **Don't** fake material: no stitch lines, inset bevels or striped metal textures.
- **Don't** use tension colours as decoration on resting icons or separators.
- **Don't** add a third ground colour or gradients between the two grounds.
- **Don't** set eyebrow labels above headings; the condensed label style belongs to the spring bar readout only.
