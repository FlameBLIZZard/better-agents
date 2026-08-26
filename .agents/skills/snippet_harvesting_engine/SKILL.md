---
name: Snippet Harvesting Engine
description: Instructs the AI to execute aggressive codebase searches to harvest and reuse existing logic, drastically reducing output tokens.
---

# Skill: Snippet Harvesting Engine

## 🎯 Purpose
To act as an aggressive token-conservation mechanism. This skill forces the AI to hunt down existing code blocks in the local repository to reuse them, preventing the bloated generation of duplicate boilerplate.

## 🛠️ Execution Protocol

When executing a feature request, before you write any lower-level logic, you must execute the Harvesting Protocol:

### 1. Targeted Grep Searches
Use your terminal or file-search tools to scan the repository for keywords related to the task.
- Example: If asked to format a date, run a search for `formatDate`, `dateUtils`, or `dayjs` across the codebase.
- Example: If asked to build a submit button, search for `Button.tsx` or `BaseButton` in the components directory.

### 2. Adaptation over Generation
If you find an existing snippet that performs 80% of the required task:
- Do NOT rewrite it from scratch.
- Import the snippet into your current working file.
- If necessary, modify the original snippet to accept broader arguments (e.g., adding an optional `className` or `config` object) so it satisfies both the old and new use cases.

### 3. Dependency Check
Scan `package.json` before writing complex logic (e.g., deep cloning, form validation) to see if a utility library like `lodash` or `zod` is already installed and can be leveraged.

## ⚠️ Constraints
- The goal is to output as few tokens as physically possible while achieving the feature requirements. Reusing code is always prioritized over generating code.
