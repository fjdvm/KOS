---
name: KnowledgeOS
colors:
  surface: '#11131a'
  surface-dim: '#11131a'
  surface-bright: '#373941'
  surface-container-lowest: '#0c0e15'
  surface-container-low: '#1a1b23'
  surface-container: '#1e1f27'
  surface-container-high: '#282a32'
  surface-container-highest: '#33343d'
  on-surface: '#e2e1ec'
  on-surface-variant: '#c4c5d6'
  inverse-surface: '#e2e1ec'
  inverse-on-surface: '#2f3038'
  outline: '#8e90a0'
  outline-variant: '#444654'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002681'
  primary-container: '#6989ff'
  on-primary-container: '#002172'
  inverse-primary: '#2b53d0'
  secondary: '#c4c6d0'
  on-secondary: '#2d3038'
  secondary-container: '#44474f'
  on-secondary-container: '#b3b5be'
  tertiary: '#ffb77b'
  on-tertiary: '#4d2700'
  tertiary-container: '#d7790c'
  on-tertiary-container: '#432100'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#e0e2ec'
  secondary-fixed-dim: '#c4c6d0'
  on-secondary-fixed: '#191c23'
  on-secondary-fixed-variant: '#44474f'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77b'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3900'
  background: '#11131a'
  on-background: '#e2e1ec'
  surface-variant: '#33343d'
typography:
  page-title:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  page-title-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  canvas-max-width: 1200px
  sidebar-width: 260px
  command-bar-height: 56px
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is built on the principle of **Invisible Utility**. It serves as a personal learning operating system where the interface recedes to prioritize the user's intellectual output. The aesthetic combines the structural precision of high-performance engineering tools with the calm, spacious elegance of a premium editorial platform.

The design style is **Modern Minimalist**. It avoids all decorative flourishes—no gradients, glassmorphism, or illustrative elements—relying instead on perfect alignment, generous whitespace, and a monochromatic foundation punctuated by a single, purposeful accent color. The goal is to evoke a sense of focused sophistication and cognitive clarity.

## Colors

The palette is a strictly curated dark mode designed to reduce eye strain during long sessions of deep work. 

- **Foundation**: The background uses a deep, desaturated obsidian (#0F1115) to provide maximum contrast for text while maintaining a soft visual footprint.
- **Surfaces**: Tiers of gray define hierarchy. Components sit on the 'Surface' layer, with subtle shifts in value for hover and active states to provide tactile feedback without needing shadows.
- **Typography**: Three levels of grey ensure information hierarchy. Primary text is off-white to prevent the "vibrating" effect of pure white on black.
- **Accents**: A high-vibrancy "Electric Blue" is used sparingly for primary actions and focus indicators. Functional colors (Success, Error, etc.) are desaturated to remain harmonious with the dark UI.

## Typography

The system utilizes **Inter** for its systematic, utilitarian clarity and exceptional legibility at all scales.

- **Scale**: A high-contrast scale is used for page titles to provide a clear entry point for the user's attention.
- **Readability**: Body text uses a generous 1.5x line height to facilitate long-form reading and note-taking.
- **Rhythm**: All type sizes are derived from an 8px baseline grid to ensure vertical consistency. 
- **Application**: Use `page-title` for the main canvas header. `headline-sm` is preferred for sidebar category headers in all-caps or medium-weight title case.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model designed for maximum focus.

1. **Sidebar**: A 260px left-docked navigation bar that is fully collapsible to allow for a "True Focus" mode.
2. **Command Bar**: A persistent top navigation element that houses the global search and breadcrumbs, maintaining a height of 56px.
3. **The Canvas**: The central content area has a constrained maximum width of 1200px. This prevents line lengths from becoming too long, which is critical for learning and reading retention.
4. **Spacing Logic**: A strict 8px grid system. Margins within the canvas are generous (48px) to create a "breathable" feel that separates the content from the application chrome.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

- **Layers**: The base background is the lowest level. Cards, Modals, and Popovers use the `Surface` color (#171A21) and are defined by a 1px solid border (#2A313D).
- **Interactive States**: Instead of lifting an object (shadows), we indicate interaction by shifting the background color to `Surface Hover` or `Surface Active`.
- **Modals**: For high-priority interruptions (like Command-K menus), a subtle 20% black dimming overlay is used on the background to maintain focus on the active element.
- **Floating Elements**: Popovers and menus use a slightly darker border than standard cards to provide crisp definition against the surface layers.

## Shapes

The shape language is **Refined and Intentional**. 

- **Base Radius**: A standard 8px (0.5rem) radius is applied to buttons, input fields, and small UI components.
- **Container Radius**: Larger elements like cards and the main sidebar use a 12px (0.75rem) radius to feel more integrated and modern.
- **Exceptions**: System-level tags or "Chips" may use a fully rounded (pill) shape to differentiate them from interactive buttons.
- **Borders**: All borders are strictly 1px. No heavy strokes or double borders are permitted.

## Components

- **Buttons**: Primary buttons use the Accent color with Primary Text. Secondary buttons are transparent with a 1px border. No gradients; state changes are purely color-value shifts.
- **Inputs**: Minimalist fields with no background (transparent) and a bottom-border only, or a fully enclosed `Surface` background. Focus is indicated by a 1px Primary Accent border.
- **Cards**: Non-interactive containers with `Surface` color and a 1px border. Interactive cards shift to `Surface Hover` on pointer-over.
- **Command Bar**: A floating or pinned element with a subtle border. It should feel like a search utility (Linear-inspired).
- **Lists**: Clean rows with 12px vertical padding. Use `Secondary Text` for metadata and `Muted Text` for timestamps or breadcrumbs.
- **Icons**: Exclusively use 1.5pt thin outline icons (Lucide/Feather style). Icons should always be the same color as the adjacent text.
- **Chips/Status**: Small, low-contrast indicators. Success/Error states use a background with 10% opacity of the functional color and a solid text label in that color.