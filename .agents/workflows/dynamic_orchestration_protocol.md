# Workflow: Dynamic Orchestration Protocol

## 🎯 Purpose
To transform the IDE into a fully autonomous tech company. This protocol triggers the Master Agent to recursively spawn, manage, and terminate a hierarchy of specialized worker agents to accomplish massive architectural goals without manual human micro-management.

## 👥 Cast of Agents
- `@chief-executive` (Dynamic Orchestrator)
- *Dynamically Generated Worker Agents* (Spawned on the fly)

## 🚀 Execution Sequence

1. **Phase 1: Project Breakdown & Org Chart Design**
   - The `@chief-executive` analyzes the user's massive prompt.
   - It breaks the project into distinct, non-overlapping domains (e.g., Database, UI, Security, Networking).
   - It generates an organizational chart detailing exactly which temporary agents need to be defined.

2. **Phase 2: The Recruitment Drive (Spawning)**
   - The `@chief-executive` rapidly executes the `define_subagent` tool to create the specialized workforce. 
   - Each worker is given a hyper-focused system prompt (e.g., *"You are `postgres_expert`. You only write migration files. Do not touch the UI."*).
   - The Master Agent grants `enable_subagent_tools: true` to "Lead" agents so they can spawn their own nested sub-contractors.

3. **Phase 3: Concurrent Execution & Messaging**
   - The `@chief-executive` executes `invoke_subagent` to spin up the entire workforce concurrently.
   - It acts as a central router, using `send_message` to pass API schemas from the Backend agent to the Frontend agent.

4. **Phase 4: QA & Downsizing**
   - As workers report back with `DONE` statuses, the Master Agent audits their code. 
   - If the code fails, the Master Agent sends the stack trace back to the worker for a rewrite.
   - Once the final project is assembled and verified, the temporary agents are terminated and the `@chief-executive` presents the final product to the user.
