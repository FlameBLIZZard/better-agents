# Workflow: The Zero-Day Vulnerability Response

## 🎯 Purpose
A purely defensive, automated security pipeline that proactively scans your codebase for exploits, patches them silently, and generates professional incident reports without requiring developer intervention.

## 👥 Cast of Agents
- `@red-team-pentester` (Security Auditor)
- `@silent-fixer` (Automated Debugger)
- `@code-librarian` (Efficiency Engineer)
- `@documentation-engineer` (Documentation Lead)

## 🛠️ Required Skills
- `red_team_pentester`
- `auto_linter_loop`

## 🚀 Execution Sequence

1. **Phase 1: The Offensive Audit**
   - Trigger the `red_team_pentester` skill.
   - The agent simulates a cyberattack against the local codebase, searching for SQL injection vectors, XSS vulnerabilities, insecure dependencies, or exposed API keys.
   - If an exploit is found, execution halts and the incident is isolated.

2. **Phase 2: The Silent Patch**
   - Hand the stack trace and vulnerability vector to `@silent-fixer`.
   - The agent operates without conversational overhead to apply targeted, surgical patches to the vulnerability (e.g., sanitizing inputs, upgrading a vulnerable NPM package).

3. **Phase 3: The Post-Mortem**
   - Trigger `@code-librarian` to catalog the vulnerability pattern so the AI never makes the same architectural mistake again.
   - Trigger `@documentation-engineer` to draft a formal, enterprise-grade Incident Response Report detailing the attack vector, the patch applied, and the resolution timeline.
