---
name: github-publisher
description: >-
  A multi-step workflow that audits the codebase for secrets, adds missing
  infrastructure (LICENSE, .gitignore, .github templates), and spawns a subagent
  to write a stunning README.
---

# Skill: GitHub Publisher

## When to use this skill
Activate this skill when the user asks to "make this project ready for GitHub", "open source this", or "publish this repo".

## Execution Steps

1. **Security Audit:** Scan the directory for `.env` files, hardcoded API keys, or database credentials. If found, ensure they are immediately added to a `.gitignore` file.
2. **Infrastructure Check:** Use `write_to_file` to create a standard `LICENSE` file (default to MIT unless specified) and a `.gitignore` tailored to the project's tech stack.
3. **Community Templates:** Create a `.github/ISSUE_TEMPLATE/` folder with basic `bug_report.md` and `feature_request.md` templates.
4. **Spawn the Marketer:** Use `invoke_subagent` to summon the `@readme-wizard` (Open Source Marketer) to generate a visually stunning `README.md` for the project.
5. **Final Review:** Present the generated files to the user and confirm that the project is now safely and beautifully prepped for GitHub.
