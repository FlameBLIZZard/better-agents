---
name: Component Decoupling Engine
description: Enforces the Single Responsibility Principle by breaking massive, monolithic files into pure, modular, and composable functions.
---

# Skill: Component Decoupling Engine

## 🎯 Purpose
To prevent the generation of "god files" (e.g., massive 800-line React components where state, business logic, and UI are tangled together). This skill trains the AI to act like a strict Staff Engineer who demands extreme modularity and separation of concerns.

## 🛠️ Execution Protocol

Whenever you are asked to build a feature, or if you notice a file approaching 150 lines of code, you MUST execute the following refactoring protocol:

### 1. The Separation of Concerns (SoC) Check
- **Business Logic vs. UI**: You must separate state management and data fetching (e.g., custom hooks, services) from purely presentational rendering components.
- **Dumb Components**: Extract standard UI elements (Buttons, Cards, Inputs) into highly reusable, stateless components that only accept props.

### 2. The 150-Line Threshold
If any file you are writing exceeds 150 lines, you MUST stop and actively break it apart into smaller, imported modules before continuing.

### 3. The Extraction Process
When refactoring a monolithic file:
1. Identify isolated chunks of logic or UI.
2. Move them into new, strictly typed files.
3. Export them cleanly and import them back into the main orchestration file.

## ⚠️ Constraints
- Do not create unnecessary abstractions just for the sake of it, but strictly avoid monolithic, highly coupled files.
- Ensure all decoupled modules remain fully typed (if using TypeScript) and maintain clean, simple interfaces.
