# Prismo Detailing Design System

## Visual Direction

Aggressive premium automotive: black-gloss studio depth, metallic crimson accents, crisp silver structure, and sharp italic display type. Dark mode is the flagship look; light mode keeps the same red performance language against a clinical white and obsidian contrast system.

## Typography

- Headings: `Rajdhani`, fallback `"Orbitron", "Arial Narrow", sans-serif`; `font-weight: 700`; `font-style: italic`; `text-transform: uppercase`; `letter-spacing: 0`.
- Body: `Inter`, fallback `"Avenir Next", "Segoe UI", sans-serif`; `font-weight: 400-800`; comfortable `1.5` line-height.
- Kicker labels: uppercase, `0.18em` tracking, 700 weight, crimson accent.
- Buttons/navigation: uppercase, 700-800 weight, compact tracking around `0.05em`.

## Color Tokens

| Token | Dark Mode | Light Mode | Usage |
| --- | --- | --- | --- |
| `--bg-page` | `#000000` | `#f7f8fa` | Site canvas |
| `--bg-section` | `#050505` | `#ffffff` | Full-width sections |
| `--bg-elevated` | `rgba(13, 13, 15, 0.9)` | `rgba(255, 255, 255, 0.92)` | Nav, cards, panels |
| `--text-primary` | `#f8f8f8` | `#050505` | Headlines, core copy |
| `--text-secondary` | `#c9cbd1` | `#2b2f36` | Body and secondary copy |
| `--text-muted` | `#8f939c` | `#646a73` | Captions and supporting labels |
| `--accent` | `#e50914` | `#d90416` | Primary crimson |
| `--accent-deep` | `#7a0008` | `#8b000a` | Gradient low stop |
| `--accent-bright` | `#ff2b35` | `#ff2430` | Highlights, focus, price |
| `--metal` | `#aeb4bd` | `#555c66` | Metallic secondary tone |
| `--border` | `rgba(255,255,255,0.12)` | `rgba(5,5,5,0.12)` | Thin structural borders |
| `--border-strong` | `rgba(229,9,20,0.48)` | `rgba(217,4,22,0.44)` | Accent borders |

## Component Rules

- Cards: `18px` radius, razor-thin neutral border, soft shadow with a faint red glow. Featured cards use crimson border and stronger glow.
- Buttons: primary is glossy crimson gradient in dark mode; inverted obsidian fill with red text in light mode. Secondary buttons use transparent/elevated fills with red borders.
- Navigation: fixed glass pill, uppercase geometric labels, theme toggle with a red-lit mechanical track.
- Forms: dark translucent or light graphite-tinted fields; red focus ring; `8px` field radius.
- Motion: theme changes transition background, text, border, and shadow values over `250-350ms`.

## Tailwind Token Mapping

```js
// tailwind.config.js theme extension if this project adopts Tailwind later.
export default {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Rajdhani', 'Orbitron', 'Arial Narrow', 'sans-serif'],
        body: ['Inter', 'Avenir Next', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        garage: 'var(--bg-page)',
        section: 'var(--bg-section)',
        panel: 'var(--bg-elevated)',
        ink: 'var(--text-primary)',
        muted: 'var(--text-muted)',
        crimson: {
          DEFAULT: 'var(--accent)',
          deep: 'var(--accent-deep)',
          bright: 'var(--accent-bright)',
          soft: 'var(--accent-soft)',
        },
        metal: 'var(--metal)',
        stroke: 'var(--border)',
      },
      borderRadius: {
        card: 'var(--radius-lg)',
        control: 'var(--radius-sm)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        nav: 'var(--shadow-nav)',
        glow: '0 0 28px var(--accent-ring)',
      },
    },
  },
};
```
