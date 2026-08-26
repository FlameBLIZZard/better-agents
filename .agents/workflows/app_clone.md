---
name: app-clone-orchestration
description: >-
  A master orchestration workflow that acts as a Project Manager to clone an existing application UI.
  It manages state via a Kanban board and delegates tasks to specialized subagents.
---

# Workflow: The "App Clone" Orchestration

## When to use this workflow
Activate this workflow when the user provides a URL or screenshots of an existing application and says "Clone this", "Rebuild this UI", or "Make a site that looks like X".

## Orchestration Steps

### Phase 1: Reconnaissance & Planning
1. **Initialize Project Board:** Create a Markdown artifact named `kanban_board.md` in the workspace. Add three columns: `[TODO]`, `[IN PROGRESS]`, and `[DONE]`.
2. **Spawn Researcher:** Use `invoke_subagent` to spawn a `research` subagent to analyze the target URL/app. Have it identify the core color palette, typography vibe, and primary structural components (e.g., Hero Section, Navbar, Feature Grid).
3. **Populate Board:** Based on the researcher's report, break the UI down into component tickets and list them in the `[TODO]` column of the `kanban_board.md`.

### Phase 2: Design & Asset Generation
4. **Spawn Concept Artist:** Invoke the `@concept-artist` subagent to generate placeholder assets, background images, or mockups that fit the vibe identified by the researcher. 

### Phase 3: Autonomous Execution
5. **Iterative Building:** 
   - Pick the first component from `[TODO]` and move it to `[IN PROGRESS]` in the Kanban artifact.
   - Invoke the `@autopilot` subagent to write the actual code (HTML/React/Tailwind) for that specific component.
   - Once `@autopilot` finishes, invoke the `@vibe-check` subagent to QA the component's aesthetics. If it fails, send it back to `@autopilot`.
   - Once approved, move the component to `[DONE]`.
6. **Loop:** Repeat Step 5 until the `[TODO]` list is empty.

### Phase 4: Final Delivery
7. **Present:** Notify the user that the orchestration is complete. Instruct them to run the dev server to view their newly cloned application.
