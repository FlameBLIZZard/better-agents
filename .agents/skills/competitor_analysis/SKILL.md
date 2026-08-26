---
name: competitor-analysis
description: >-
  Spawns a research subagent to search the web for competitors to a startup idea,
  compiling a detailed Markdown artifact of their weaknesses.
---

# Skill: Deep-Dive Competitor Analysis

## When to use this skill
Activate this skill when the user proposes a new app or startup idea and asks for market research, or when they want to know how their idea stands out.

## Execution Steps

1. **Spawn Researcher:** Use the `invoke_subagent` tool to spawn a `research` subagent.
   - **Role:** `Market Researcher`
   - **Prompt:** "Use the `search_web` tool to find 3 existing competitors for the following app idea: [INSERT IDEA]. For each competitor, identify their core features, pricing model (if public), and most frequent user complaints or missing features. Compile this into a Markdown report and save it using `write_to_file` at `competitor_analysis.md`."
2. **Wait for Report:** Wait for the subagent to complete the task and notify you.
3. **Analyze & Strategize:** Read the generated `competitor_analysis.md` file.
4. **Advise the User:** Reply to the user in chat. Provide a 2-sentence summary of the market landscape and propose 1 unique feature or "hook" the user can build to stand out against the weaknesses identified by the researcher. Link to the artifact for details.
