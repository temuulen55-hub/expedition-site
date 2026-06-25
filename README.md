# Khairkhan Expeditions

A 5-page React + Tailwind v4 + Framer Motion site for a premium Mongolian
expedition agency. Built and verified with `npm install && npm run build`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Stack notes

- **Tailwind v4** — no `tailwind.config.js`. All design tokens (colors, the
  three type families, and the fluid type scale) live in `src/index.css`
  under one `@theme` block.
- **Framer Motion** powers every interaction in the brief: the magnetic
  button (`src/components/MagneticButton.jsx`), the custom blended cursor
  (`src/components/CustomCursor.jsx`), scroll reveals (`Reveal.jsx`), and
  the hero parallax in `Home.jsx`.
- **Lenis** wraps the app (`src/lib/SmoothScroll.jsx`) for the eased,
  buttery scroll feel the brief asked for, and resets to top on route change.
- **CMS-ready data** — `src/data/tours.js` is shaped like a Strapi
  `find` response. Swap the static array for `fetch('/api/tours?populate=*')`
  and the rest of the app is untouched.

## Design decisions

**Color** — Paper `#F7F4EC`, Ink `#1C1B19`, Steppe `#3F4A3D`,
Steppe-light `#6B7860`, Earth `#6B6259`, Line `#DCD5C5`.

**Type** — one serif (Noto Serif Display) renders *both* Mongolian and
English headings, because most luxury serif faces (Fraunces, Playfair)
have no Cyrillic glyphs — pairing them with Mongolian text would have
silently fallen back to a default system font and broken the whole
typographic system. Inter carries UI/body text in both scripts; Manrope
is the all-caps utility face for labels, tags, and eyebrows.

**The signature device** — `BilingualHeading.jsx` ("the Twin Line").
Instead of a language toggle, every heading stacks Mongolian (large,
solid) directly above English (smaller, italic, faded), joined by a
single vertical tick — a small nod to elevation markers on an
expedition map. This makes the bilingual requirement the design's one
memorable idea rather than a UI chore bolted on afterward.

**Fluid type** — sizes use hand-derived Utopia-method `clamp()` values
(320px → 1440px viewport) so display headings stay sculpted at every
breakpoint without manual `sm:` / `lg:` font-size overrides.

## File map

```
src/
  components/   Nav, Footer, CustomCursor, MagneticButton,
                BilingualHeading, Reveal
  lib/          SmoothScroll.jsx (Lenis)
  data/         tours.js (sample CMS data)
  pages/        Home, Expeditions, Itinerary, Journal, Booking
```
