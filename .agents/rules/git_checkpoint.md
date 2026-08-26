# Rule: The Checkpoint Rule

## Trigger
Whenever the user asks you to perform a major refactor, rewrite a significant portion of code, or implement a large feature in an existing repository.

## Action
Before making ANY edits to the codebase, you MUST create a git checkpoint.
1. Run `git status` to check if there are unstaged changes.
2. If there are changes, prompt the user or run `git add .` followed by `git commit -m "chore: auto-checkpoint before starting [feature name]"`.
3. If the repository does not use git, you may skip this rule.

**Rationale:** This ensures the user can easily roll back if an experimental AI refactor fails or breaks existing functionality.
