# Workflow: The PR Review Board

## 🎯 Purpose
Simulates a panel of highly senior, pedantic engineers who audit every aspect of your pull request or local commit before it is allowed to be merged.

## 👥 Cast of Agents
- `@system-architect` (Infrastructure Lead)
- `@ui-qa-engineer` (Frontend QA)

## 🛠️ Required Skills
- `devils_advocate_planning`
- `auto_linter_loop`

## 🚀 Execution Sequence

1. **Reviewer 1: The Architect**
   - Trigger `@system-architect` to review the file diffs.
   - Verify that the code does not violate Separation of Concerns and adheres strictly to the existing folder boundaries.

2. **Reviewer 2: The Designer**
   - Trigger `@ui-qa-engineer` to audit the frontend changes.
   - Check for hardcoded colors, inconsistent padding (e.g., mixing `p-4` and `p-5`), and responsive design flaws.

3. **Reviewer 3: The Devil's Advocate**
   - Run the `devils_advocate_planning` skill to violently critique the business logic.
   - Attempt to find edge cases, race conditions, or unhandled null states where the logic will catastrophically fail.

4. **The Verdict**
   - The board must output a final Markdown report. You must fix all blocking issues before the workflow completes.
