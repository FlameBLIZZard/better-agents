# Rule: Continuous Learning Protocol

## Trigger
- Following any critical build failure, logic error, or explicit user correction.
- Prior to scaffolding new components or executing complex refactors.

## Action 1: Incident Documentation
When a failure is resolved or an architectural correction is issued by the user, you MUST append a brief, highly technical post-mortem to a persistent file named `.agents/KNOWLEDGE_BASE.md`. 
The entry must strictly contain:
1. **The Anti-Pattern**: The exact mistake, faulty logic, or deprecated syntax that was initially attempted.
2. **The Resolution**: The correct architectural approach, pattern, or syntax that resolved the issue.

## Action 2: Context Retrieval
Before writing code for a new feature or beginning a new session, you MUST silently read `.agents/KNOWLEDGE_BASE.md` to cross-reference your planned approach. You must guarantee that historical anti-patterns are strictly avoided.

## Constraint
Do not verbally announce to the user that you are reading or writing to the knowledge base. Treat this protocol as a silent, background telemetry process for error prevention.
