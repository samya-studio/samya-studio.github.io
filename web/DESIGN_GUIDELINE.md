# Samya Studio Design Guidelines

## Philosophy
**"Elegant, Modern, Premium"**
Samya Studio's design language bridges the gap between heavy industrial strength and modern digital elegance. It uses deep, dark backgrounds to represent depth and stability, pierced by vibrant AWS Orange to signify energy and action.

## Color Palette

### Primary Brand
- **AWS Orange**: `#FF9900`
  - Usage: CTAs, Highlights, Icons, Text Gradients.
  - *Effect*: Represents energy, action, and the "Builder" spirit.

### Backgrounds (The Void)
- **Deep Ocean (BG)**: `#0F1B2A` (AWS Blue Deeper)
  - Usage: Main body background.
- **Surface (Glass)**: `#232F3E` (AWS Blue Dark)
  - Usage: Section backgrounds, Cards (with opacity).

### Text
- **Primary**: `#FFFFFF` (White)
- **Secondary**: `rgba(255, 255, 255, 0.7)`
  - Usage: Paragraphs, descriptions.

## Typography
- **Font Family**: `Inter`, system-ui, sans-serif.
- **Headings**: Bold (`700`), Tight tracking (`-0.02em`).
- **Body**: Regular (`400`), Relaxed line-height (`1.6`).

## Component Styles

### Glassmorphism ("The Glass")
The core aesthetic element. Used for cards, overlays, and sticky navigation.
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

### Buttons
- **Primary**: Solid AWS Orange with a subtle glow on hover.
  - Hover: `transform: translateY(-2px)`, `box-shadow: 0 0 20px rgba(255, 153, 0, 0.3)`

### Navigation
- **Default**: Absolute, Transparent.
- **Scrolled**: Fixed, Glassy background (`blur(12px)`).
- **Item Hover**: Deep Ocean Glass.
  - Background: `rgba(15, 27, 42, 0.8)`
  - Blur: `8px`
  - Text: `#FF9900`

## Layout And Spacing
- **Container**: Max-width `1200px`, centered.
- **Section Padding**: `8rem 0` (Large breathing room).
- **Grid Gap**: `2rem`.
