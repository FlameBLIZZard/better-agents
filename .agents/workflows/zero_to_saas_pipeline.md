# Workflow: The Zero-to-SaaS Pipeline

## 🎯 Purpose
The ultimate end-to-end startup generator. This workflow orchestrates an entire product lifecycle from ideation to MVP execution, ensuring that the software solves a real problem and is architecturally sound before a single line of code is written.

## 👥 Cast of Agents
- `@market-researcher` (Product Strategist)
- `@concept-artist` (UI/UX Prototyper)
- `@system-architect` (Infrastructure Lead)
- `@autopilot` (Autonomous Developer)

## 🛠️ Required Skills
- `problem_discovery_engine`
- `architecture_scaffolding`
- `svg_graphics_engine`

## 🚀 Execution Sequence

1. **Phase 1: Ideation & Validation**
   - Trigger `@market-researcher` to run the `problem_discovery_engine` skill.
   - Wait for the generation of `MARKET_GAPS.md`.
   - The user must explicitly select one of the validated pain points to proceed.

2. **Phase 2: Visual Prototyping**
   - Trigger `@concept-artist` to design the wireframes for the selected solution.
   - If vector assets are needed, invoke the `svg_graphics_engine` skill.

3. **Phase 3: Infrastructure Blueprinting**
   - Trigger `@system-architect` to run the `architecture_scaffolding` skill.
   - Wait for the user to approve the ASCII directory tree.
   - Execute the `mkdir -p` scaffolding.

4. **Phase 4: Implementation**
   - Hand off the wireframes and folder structure to `@autopilot`.
   - `@autopilot` will silently execute the implementation across the scaffolded directories.
