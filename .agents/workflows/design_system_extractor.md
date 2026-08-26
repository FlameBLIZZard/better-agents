# Workflow: The Design System Extractor

## 🎯 Purpose
A surgical pipeline designed to scan a chaotic, inconsistent UI codebase and automatically extract all colors, fonts, spacing values, and raw assets into a strict, unified design system, then refactor the codebase to use it.

## 👥 Cast of Agents
- `@design-translator` (Design Systems Engineer)
- `@vector-artist` (Vector Graphics Engineer)
- `@refactoring-specialist` (Staff Engineer)

## 🛠️ Required Skills
- `svg_graphics_engine`
- `component_decoupling_engine`

## 🚀 Execution Sequence

1. **Phase 1: Extraction & Reconnaissance**
   - Trigger `@design-translator` to execute a deep scan of the frontend `src/` directory.
   - It identifies hardcoded hex codes, inline styles, arbitrary padding/margin classes, and scattered CSS files.
   - It synthesizes this chaos into a single, unified `theme.ts` (or `tailwind.config.js`) consisting of strict semantic variables (e.g., `primary-500`, `spacing-lg`).

2. **Phase 2: Asset Harvesting**
   - Hand off to `@vector-artist`, which uses the `svg_graphics_engine` to hunt down loose `.png` icons or bloated SVG strings.
   - It optimizes, mathematically plots, and standardizes these assets into a single `<IconLibrary />` or an optimized `assets/` folder.

3. **Phase 3: The Purge**
   - Trigger `@refactoring-specialist` (The Staff Engineer).
   - It sweeps through the codebase, actively removing all hardcoded values and inline styles, replacing them exclusively with the variables from the newly generated design system.
