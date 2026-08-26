# Workflow: The Incident Response Team

## 🎯 Purpose
An emergency protocol designed to isolate, fix, and document critical production bugs or systemic crashes the moment a stack trace is pasted.

## 👥 Cast of Agents
- `@silent-fixer` (Automated Debugger)

## 🛠️ Required Skills
- `devils_advocate_planning`
- **Rule Reference**: `continuous_learning_protocol.md`

## 🚀 Execution Sequence

1. **Phase 1: Triage & Patch**
   - Trigger `@silent-fixer` the moment the stack trace is provided.
   - The agent must instantly isolate the failing component and write a targeted patch to restore functionality.

2. **Phase 2: Stress Testing**
   - Run the `devils_advocate_planning` skill against the new patch.
   - Specifically look for regression bugs or secondary issues caused by the hotfix.

3. **Phase 3: The Post-Mortem**
   - Enforce the `continuous_learning_protocol.md` core rule.
   - Automatically write the incident details, the anti-pattern that caused it, and the resolution into `.agents/KNOWLEDGE_BASE.md` to ensure the AI never makes this specific mistake again.
