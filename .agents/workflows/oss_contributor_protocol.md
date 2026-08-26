# Workflow: The Open-Source Core Contributor

## 🎯 Purpose
A specialized protocol for joining massive, unfamiliar Open Source repositories (like React, Linux, or Next.js). It rapidly maps the architecture, learns the contribution guidelines, and scaffolds your first Pull Request to match their internal style perfectly.

## 👥 Cast of Agents
- `@system-architect` (Infrastructure Lead)
- `@code-librarian` (Efficiency Engineer)
- `@autopilot` (Autonomous Developer)

## 🛠️ Required Skills
- `snippet_harvesting_engine`
- `architecture_scaffolding`

## 🚀 Execution Sequence

1. **Phase 1: Architecture Mapping**
   - Execute the `architecture_scaffolding` skill in read-only mode via `@system-architect`.
   - The agent maps the unfamiliar repository, outputting a high-level ASCII tree of where the core logic, utilities, and test suites live, so you understand the routing of the massive project.

2. **Phase 2: The Style Harvest**
   - Trigger `@code-librarian` to run the `snippet_harvesting_engine`.
   - Instead of looking for reusable code, the agent reads the repository's `CONTRIBUTING.md` and `package.json` linting rules. It analyzes their internal naming conventions, syntax preferences, and testing frameworks to build a temporary "Style Matrix" in memory.

3. **Phase 3: The Chameleon PR**
   - Hand the feature request to `@autopilot`.
   - The agent implements your feature or bug fix while strictly adhering to the "Style Matrix" harvested in Phase 2. The resulting Pull Request will look exactly as if a Senior Core Maintainer wrote it.
