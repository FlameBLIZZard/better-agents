---
name: devils-advocate-planning
description: >-
  Spawns a background subagent to aggressively critique an implementation plan,
  finding security flaws, edge cases, and scaling issues before finalizing it.
---

# Skill: Devil's Advocate Architecture

## When to use this skill
Activate this skill when drafting a complex `implementation_plan.md` for a major new feature or architectural change.

## Execution Steps

1. **Draft Initial Plan:** Create your initial implementation plan as normal.
2. **Spawn the Critic:** Use the `invoke_subagent` tool to spawn a `research` subagent.
   - **Role:** `Devil's Advocate Architect`
   - **Prompt:** "Read the `implementation_plan.md`. Your job is to aggressively critique it. Look for security vulnerabilities, race conditions, scaling bottlenecks, and UX edge cases. Do NOT write code. Reply with a bulleted list of the top 3 critical flaws in the current plan."
3. **Wait for Feedback:** Wait for the subagent to report back.
4. **Harden the Plan:** Address the subagent's critiques by updating the `implementation_plan.md` to mitigate the identified risks.
5. **Present to User:** Present the hardened plan to the user, explicitly mentioning which flaws were caught and mitigated by the Devil's Advocate subagent.
