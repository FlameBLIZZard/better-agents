---
name: auto-documenter
description: >-
  Iterates over un-documented files and automatically writes standardized
  documentation comments (e.g., JSDoc, Python docstrings) for all public functions and classes.
---

# Skill: Auto-Documenter (JSDoc/Docstrings)

## When to use this skill
Activate this skill when the user asks you to "document the codebase", "write docstrings", or when you finish a large module that lacks inline documentation.

## Execution Steps

1. **Identify Scope:** Confirm with the user which specific file(s) or folder(s) they want documented. Do not attempt to document the entire project at once to avoid context limits.
2. **Determine Standard:** Determine the appropriate standard for the language (e.g., JSDoc for JS/TS, PEP 257 docstrings for Python, GoDoc for Go).
3. **Iterate and Edit:**
   - For each file in the scope, read the contents.
   - Identify all public functions, classes, and complex types.
   - Use `replace_file_content` to carefully inject the appropriate documentation blocks *above* each entity. Ensure you document parameters (e.g., `@param`), return types (`@returns`), and throw conditions.
4. **Final Review:** Run the project linter (if applicable) to ensure the newly added comments didn't break formatting rules.
5. **Report:** Provide the user with a list of the files you successfully documented.
