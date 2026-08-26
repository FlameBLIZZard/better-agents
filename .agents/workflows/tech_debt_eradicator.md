# Workflow: The Technical Debt Eradicator

## 🎯 Purpose
A surgical orchestration protocol designed to shrink bloated codebases, eliminate duplicate logic, and enforce extreme modularity. This workflow pays down technical debt rather than building new features.

## 👥 Cast of Agents
- `@code-librarian` (Efficiency Engineer)
- `@refactoring-specialist` (Staff Engineer)
- `@ui-qa-engineer` (Frontend QA)

## 🛠️ Required Skills
- `snippet_harvesting_engine`
- `component_decoupling_engine`
- `auto_linter_loop`

## 🚀 Execution Sequence

1. **Phase 1: The Harvest**
   - Trigger `@code-librarian` to run the `snippet_harvesting_engine` across the repository.
   - The agent must hunt down duplicate boilerplate (e.g., redundant API fetchers, duplicated layout wrappers) and consolidate them into centralized, global utility files.

2. **Phase 2: The Decoupling**
   - Hand the consolidated codebase over to `@refactoring-specialist`.
   - The agent executes the `component_decoupling_engine` to scan for any file exceeding 150 lines.
   - It ruthlessly breaks apart monolithic "god files", enforcing a strict boundary between state-management hooks and pure presentation components.

3. **Phase 3: The Integrity Audit**
   - Trigger `@ui-qa-engineer` to review the newly decoupled components and ensure no visual regressions or padding inconsistencies were introduced during the refactor.
   - Concurrently run the `auto_linter_loop` skill to automatically fix any missing imports or typed-prop errors caused by splitting the files.
