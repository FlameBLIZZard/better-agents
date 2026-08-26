# Better Agents

An ever-growing, limitless collection of optimized, modular rules and skills for Antigravity AI agents. This repository is continuously evolving to make agents more efficient, thorough, and user-friendly.

## 🌟 Current Features

Our toolkit currently includes the following rules and skills:

### 📜 Rules
1. **Interactive Planning (`project_alignment.md`):** Forces the agent to pause and interview you (`/grill-me`) before scaffolding new projects.
2. **Beginner-Friendly Documentation (`beginner_documentation.md`):** Automatically generates a `PROJECT_TOUR.md` for new projects using simple analogies.
3. **Strict Token Conservation (`token_conservation.md`):** Strips out AI conversational filler and forces targeted file edits.
4. **The Checkpoint Rule (`git_checkpoint.md`):** Forces the agent to auto-commit code (`git add . && git commit`) before attempting major refactors.
5. **Artifact-First Output (`artifact_first.md`):** Prevents the agent from dumping long texts into chat, forcing it to save research and data as markdown files.
6. **The 3-Option Ideation Rule (`three_option_ideation.md`):** Forbids the agent from making architectural decisions unilaterally; it must present 3 distinct options for you to choose from.
7. **The Clean Desk Policy (`clean_desk_policy.md`):** Forces the agent to automatically delete temporary scratch files and debug scripts once a task is finished.
8. **Skill Inventory Manager (`skill_inventory_manager.md`):** Teaches the agent to automatically scan and list all your installed skills in a clean table whenever you ask what capabilities you have.

### 🛠️ Skills
1. **Auto-Linter Loop (`auto_linter_loop`):** Teaches the agent to automatically run your project's linter in the background and fix syntax errors autonomously before asking for your review.
2. **Devil's Advocate Planning (`devils_advocate_planning`):** When writing a complex plan, the agent spawns a background subagent to aggressively critique the plan for security flaws and edge cases.
3. **Deep-Dive Competitor Analysis (`competitor_analysis`):** Spawns a market-research subagent to scour the web for competitors to your app idea and compiles a Markdown artifact detailing their weaknesses.
4. **Red Team Pentester (`red_team_pentester`):** Spawns a security subagent to audit newly written backend code for SQL injection, XSS, and CSRF vulnerabilities.
5. **Auto-Documenter (`auto_documenter`):** A workflow for iterating over un-documented files and injecting standardized JSDoc/Docstrings above all public functions and classes.

## 🚀 How to Install

Antigravity natively supports discovering modular rules and skills placed in the `.agents/` directory.

### 1. Global Installation (Recommended)
To apply these rules and skills to **all** projects on your machine, copy the `.agents/` folder to your global config directory:
- **Windows:** Copy the `.agents/` folder into `C:\Users\<YourUser>\.gemini\config\`
- **Mac/Linux:** Copy the `.agents/` folder into `~/.gemini/config/`

### 2. Project-Specific Installation
To apply these to a single project, simply copy the `.agents/` folder into the root of your project directory. The agent will automatically discover them when working in that project.

## 🤝 Contributing
Because this repository is constantly growing, feel free to contribute your own favorite rules and skills to help the community build better agents!
