<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0f172a,c026d3&height=250&section=header&text=Better%20Agents&fontSize=80&fontColor=ffffff&animation=fadeIn&fontAlignY=30&desc=The%20Vibecoder's%20AI%20Toolkit&descAlignY=60&descAlign=50&descTheme=ffffff" alt="Better Agents Banner" />
</p>

<p align="center">
  <a href="https://github.com/FlameBLIZZard/better-agents"><img src="https://img.shields.io/badge/Status-Actively%20Growing-success?style=for-the-badge&logo=github"></a>
  <a href="#"><img src="https://img.shields.io/badge/Platform-Antigravity%20AI-blue?style=for-the-badge&logo=google"></a>
  <a href="#"><img src="https://img.shields.io/badge/Vibe-Immaculate-ff69b4?style=for-the-badge&logo=sparkles"></a>
</p>

> An ever-growing, limitless collection of optimized, modular rules, skills, and subagents for Antigravity AI. Drop these into your workspace to transform your agent from a generic assistant into a 10x vibecoding studio.

---

## 🌟 The Vibecoder Production Studio (Subagents)

Why write code when you can Direct? This specialized cast of AI subagents is designed for **vibecoding**, where you act as the Creative Director and the AI handles the boilerplate.

| Subagent | Role | Description |
|:---|:---|:---|
| 🎨 **`@concept-artist`** | Mockup Generator | Generates 3 visual UI concepts before a single line of code is written. |
| 🪄 **`@readme-wizard`** | Open Source Marketer | Writes world-class, visually stunning READMEs with dynamic banners and badges. |
| 🧠 **`@vibe-translator`** | Technical Producer | Translates abstract aesthetic ideas (e.g., "cyberpunk cafe") into strict technical specs. |
| 🚀 **`@autopilot`** | Head Developer | Takes a spec and silently grinds in the background to build the entire MVP. |
| 🧽 **`@silent-fixer`** | Bug Janitor | Paste a stack trace, and it patches the code without explaining anything. *"Fixed. Refresh."* |
| ✨ **`@vibe-check`** | Art Critic | QA agent that strictly reviews frontend code for padding, styling, and aesthetic vibes. |

---

## 📜 Core Rules

Enforce best practices and protect your context window natively.

<details>
<summary><b>Click to expand available Rules</b></summary>
<br>

- 🗣️ **Interactive Planning (`project_alignment.md`)**: Forces the agent to interview you (`/grill-me`) before scaffolding.
- 🎓 **Beginner Documentation (`beginner_documentation.md`)**: Auto-generates a simple `PROJECT_TOUR.md` using real-world analogies.
- 📉 **Strict Token Conservation (`token_conservation.md`)**: Strips AI filler and forces targeted file edits to save context and money.
- 💾 **The Checkpoint Rule (`git_checkpoint.md`)**: Auto-commits code (`git add . && git commit`) before major refactors.
- 📄 **Artifact-First Output (`artifact_first.md`)**: Prevents long text dumps in chat by saving data as markdown artifacts.
- 🛤️ **The 3-Option Ideation (`three_option_ideation.md`)**: Forbids unilateral decisions; the agent must present 3 distinct choices.
- 🧹 **Clean Desk Policy (`clean_desk_policy.md`)**: Automatically deletes temporary scratch files once a task is finished.
- 🗂️ **Skill Inventory Manager (`skill_inventory_manager.md`)**: Scans and lists all your installed skills in a clean table on demand.
- 🚀 **GitHub Publish Ready (`github_publish_ready.md`)**: Stops you from blindly pushing code and recommends an open-source audit first.
- 🐳 **Docker-First Deployment (`docker_first.md`)**: Prevents the agent from dumping raw Dockerfiles in chat, forcing it to actually test the build locally first.

#### 🧠 Motivation & Psychology Rules
- 🔥 **The Hype Man (`hype_man.md`)**: Drops the robotic AI tone to aggressively hype you up after you fix a nasty bug or deploy.
- 🛑 **Anti-Burnout Protocol (`anti_burnout.md`)**: If you're stuck in a rut, the agent refuses to give you code and orders you to take a walk while it debugs in the background.
- 🎮 **RPG Gamification (`gamification.md`)**: Awards you "+50 XP" and levels up your stats when you complete UI components or merge PRs.
- 🏆 **The Small Wins Tracker (`small_wins.md`)**: Interrupts you when you're overwhelmed to remind you of the amazing foundation you've already built today.

</details>

---

## 🛠️ Advanced Skills

Teach your agent complex, multi-step workflows.

<details>
<summary><b>Click to expand available Skills</b></summary>
<br>

- 🔄 **Auto-Linter Loop (`auto_linter_loop`)**: Runs your linter in the background and autonomously fixes syntax errors.
- 😈 **Devil's Advocate Planning (`devils_advocate_planning`)**: Spawns a subagent to aggressively critique your plan for flaws.
- 🕵️ **Competitor Analysis (`competitor_analysis`)**: Spawns a market-research subagent to scour the web for competitors and weaknesses.
- 🛡️ **Red Team Pentester (`red_team_pentester`)**: Spawns a security subagent to audit backend code for SQLi, XSS, and CSRF.
- 📝 **Auto-Documenter (`auto_documenter`)**: Iterates over files and injects standardized JSDoc/Docstrings above all public functions.
- 🌐 **GitHub Publisher (`github_publisher`)**: A master workflow that hunts for exposed `.env` secrets, generates licenses, and spawns the `@readme-wizard`.
- 🐳 **Docker Workflow & Auto-Debugger (`docker_workflow`)**: Writes multi-stage Dockerfiles, runs the build, and autonomously loops to fix any build errors.

</details>

---

## 🏗️ Orchestration Workflows

Massive, multi-step agentic orchestrations that manage multiple subagents and maintain state.

<details>
<summary><b>Click to expand available Workflows</b></summary>
<br>

- 🎭 **The "App Clone" Orchestrator (`app_clone`)**: You provide a URL. The agent acts as a Project Manager, setting up a Kanban board artifact, spawning researchers to analyze the UI, and dispatching the `@autopilot` to build the app component-by-component.

</details>

---

## 🪝 Lifecycle Hooks

Invisible scripts that run automatically behind the scenes at specific agent lifecycle events (like before a tool is used, or after a step is completed).

<details>
<summary><b>Click to expand available Hooks</b></summary>
<br>

- ⏱️ **The "Time Machine" Auto-Save (`hooks.json`)**: An invisible background Node.js script (`time_machine.js`) that silently commits your code to Git after *every single AI step*. If the AI ever ruins your project, you can instantly hit undo and roll back to exactly how the code looked 5 minutes ago.

</details>

---

## 🚀 How to Install

Antigravity natively supports discovering modular rules and skills placed in the `.agents/` directory.

### 1. Global Installation (Recommended)
To apply these rules and skills to **all** projects on your machine, copy the `.agents/` folder to your global config:
- **Windows:** Copy into `C:\Users\<YourUser>\.gemini\config\`
- **Mac/Linux:** Copy into `~/.gemini/config/`

### 2. Project-Specific Installation
To apply these to a single project, simply drop the `.agents/` folder into the root of your project directory. 

---

<p align="center">
  <b>🤝 Contributing</b><br>
  Because this repository is constantly growing, feel free to contribute your own favorite rules and skills to help the community build better agents!
</p>
