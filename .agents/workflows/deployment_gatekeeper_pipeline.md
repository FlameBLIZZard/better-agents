# Workflow: The Production Launch Sequence

## 🎯 Purpose
The ultimate deployment gatekeeper. This workflow acts as a strict CI/CD pipeline operated entirely by AI subagents to ensure code is secure, documented, and packaged correctly before release.

## 👥 Cast of Agents
- `@ui-qa-engineer` (Frontend QA)
- `@documentation-engineer` (Documentation Engineer)

## 🛠️ Required Skills
- `red_team_pentester`
- `auto_documenter`
- `docker_workflow`
- `github_publisher`

## 🚀 Execution Sequence

1. **Phase 1: The Security Audit**
   - Run the `red_team_pentester` skill against the codebase to identify any SQLi, XSS, or environment variable leaks.
   - Block the launch sequence if critical vulnerabilities are found.

2. **Phase 2: UI & Documentation Polish**
   - Trigger `@ui-qa-engineer` to do a final sweep of component padding, styling, and visual consistency.
   - Trigger `@documentation-engineer` to run the `auto_documenter` skill, ensuring all public APIs and components have JSDoc/Docstrings.

3. **Phase 3: Containerization**
   - Run the `docker_workflow` skill to autonomously write the `Dockerfile`, build the local image, and verify the container starts successfully.

4. **Phase 4: The Release**
   - Hand off to the `github_publisher` skill to generate the release notes, bump the semantic version, and tag the commit.
