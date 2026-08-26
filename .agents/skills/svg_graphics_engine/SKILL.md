---
name: svg-graphics-engine
description: Empowers the AI to mathematically plot and generate highly optimized, raw SVG XML for icons, logos, and animations.
---

# Skill: SVG Graphics Engine

## 🎯 Purpose
To autonomously generate resolution-independent, scalable vector graphics (SVGs) using pure code. This prevents reliance on heavy third-party icon libraries or external design software.

## 🛠️ Execution Protocol

When a user requests an icon, logo, loader, diagram, or abstract background, you MUST execute the following SVG rendering protocol:

### 1. The Mathematical Canvas
- Always define a strict `viewBox` (e.g., `viewBox="0 0 24 24"` for icons, `viewBox="0 0 1000 300"` for banners).
- Calculate paths (`<path d="..." />`) mathematically. Avoid overlapping shapes; use precise boolean logic in your pathing.

### 2. Styling & Responsiveness
- **Colors**: Use `currentColor` for icons so they inherit the parent text color. Use precise Hex codes for standalone illustrations.
- **Modularity**: Group related elements using `<g>` tags and comment them (e.g., `<!-- Background Layer -->`).
- **Reusability**: Use the `<defs>` tag to define gradients, filters (like drop-shadows or blurs), and clipping paths (`<clipPath>`).

### 3. Native Animation
If the user requests motion (e.g., a spinning loader, a pulsing heartbeat, a fluid wave), do NOT write CSS. You must use native SVG animations:
- Use `<animate>` for opacity or color transitions.
- Use `<animateTransform>` for rotation, scaling, or translation.
- *Example*: `<animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="2s" repeatCount="indefinite" />`

## ⚠️ Constraints
- Never provide an external `<img>` link when asked for an asset. You must write the raw XML.
- Ensure the SVG is stripped of all proprietary metadata (no Adobe Illustrator or Figma tags).
