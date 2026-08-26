---
name: auto-linter-loop
description: >-
  A workflow for automatically running project linters/tests, parsing the output,
  and fixing syntax errors autonomously before declaring a coding task finished.
---

# Skill: Auto-Linter Loop

## When to use this skill
Activate this skill whenever you have completed a significant block of coding or refactoring, before asking the user to review the code.

## Execution Steps

1. **Identify the Tool:** Determine the project's primary linter or testing framework (e.g., `npm run lint`, `flake8`, `cargo clippy`, `go vet`).
2. **Execute:** Use the `run_command` tool to run the linter.
3. **Analyze:** 
   - If the command exits with code `0`, the code is clean. Exit the skill.
   - If errors are found, read the output carefully.
4. **Fix:** Use the `replace_file_content` tool to patch the identified errors in the files.
5. **Loop:** Repeat steps 2-4 until the linter passes or you reach a maximum of 3 attempts.
6. **Report:** If errors persist after 3 attempts, summarize the remaining issues for the user. Otherwise, inform the user that the code was auto-linted successfully.
