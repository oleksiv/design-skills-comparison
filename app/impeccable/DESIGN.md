---
name: Mooring
description: The studio seen from above. A room plan whose mats fill themselves.
colors:
  chalk-ground: "oklch(0.972 0.008 255)"
  chalk-tint: "oklch(0.93 0.03 262)"
  hairline: "oklch(0.86 0.025 262)"
  ink: "oklch(0.24 0.06 266)"
  ink-soft: "oklch(0.42 0.05 264)"
  mat-ultramarine: "oklch(0.45 0.19 264)"
  mat-ultramarine-deep: "oklch(0.38 0.17 266)"
  wall-line: "oklch(0.76 0.09 262)"
  on-blue: "oklch(0.9 0.035 262)"
  mat-booked: "oklch(0.94 0.025 262)"
  tape-yellow: "oklch(0.89 0.17 98)"
  tape-yellow-deep: "oklch(0.84 0.17 92)"
typography:
  display:
    fontFamily: "Archivo (wdth 112% mobile, 125% desktop)"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Archivo (wdth 112%)"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.98
  body:
    fontFamily: "Archivo (wdth 100%)"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  mat: "10px"
  control: "12px"
  room: "28px"
  chip: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.tape-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.tape-yellow-deep}"
  button-on-ground:
    backgroundColor: "{colors.mat-ultramarine}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
  button-secondary-on-blue:
    textColor: "#ffffff"
    rounded: "{rounded.control}"
---

# Design System: Mooring

## Overview

The page is a studio floor plan. Rooms are drawn with pale wall lines and a door gap. Mats are rounded slabs that are either booked (solid), open (dashed outline) or just filled from the waitlist (tape yellow). Ultramarine fields own the hero, the testimonial, the featured pricing pass and the close. The rest of the page sits on a cool chalk ground.

## Colors

- **Mat ultramarine** carries whole regions. It is the Committed strategy, so never use it as a scattered accent.
- **Tape yellow** means one thing: act now, or just filled. Use it for primary buttons, promoted mats, the head of the waitlist and punched pass holes. Never use it as a decorative field.
- **Chalk ground and tint** are cool, never cream. Secondary text on blue is `on-blue`, never grey.

## Typography

Use one family, Archivo, and let the width axis do the hierarchy. Display and plan names are wide (112–125%) and heavy. Reading text is normal width at 18px, with a measure of 34–60ch. Prices and counts use tabular numerals. There are no eyebrows: the headings stand on their own.

## Layout

The container is 1344px max, with 16 / 32 / 48px gutters. Sections breathe at 80px on mobile and 112px on desktop. Feature rows use a 12-column grid (4/4/4) separated by 2px hairlines. Steps sit on a dashed blue track. Everything collapses to one column at 390px. The mat grid is 6 columns on small screens and one row of 18 at lg, so the door and queue stay in the first viewport.

## Elevation & Depth

The page is flat, like a plan drawing. The only shadow is a soft, offset blue-tinted one under the white Studio pass. Motion carries the depth instead: mats fill in staggered with a 520ms expo-out on load, and a promoted mat pulses with an expanding yellow ring.

## Shapes

Mats are 10px, controls 12px, rooms and passes 28px, and waitlist chips are pills. The door is a gap in the wall plus a dashed quarter-circle swing. Pricing passes carry a dashed perforation with punched side notches.

## Components

- **Room (hero, close):** a 2px wall-line border and a door gap, with the queue outside the door.
- **Mat:** a button. Tapping a booked mat cancels it, and after 650ms the head of the waitlist takes it (aria-live announces it). An open mat is aria-disabled.
- **FAQ:** native details/summary, with a plus icon that rotates 45°.
- **Focus:** a 3px outline at 3px offset, blue on the ground and yellow on blue fields (`--mr-focus`).

## Do's and Don'ts

- Do draw new UI in the plan vocabulary: walls, mats, doors, passes.
- Don't add same-size icon cards, gradient text, eyebrows, or yellow as a background field.
- Don't invent customers, logos or numbers beyond the brief's proof.
