# Better Agents

A collection of optimized, modular rules for Antigravity AI agents to make them more efficient, thorough, and user-friendly.

## Features

These rules enforce three main behaviors:
1. **Interactive Planning (`project_alignment.md`):** Forces the agent to pause and interview you (`/grill-me`) before scaffolding new projects to ensure architecture and requirements are aligned.
2. **Beginner-Friendly Documentation (`beginner_documentation.md`):** Automatically generates a comprehensive `PROJECT_TOUR.md` for every new project, explaining the architecture and tech stack in simple, real-world analogies.
3. **Strict Token Conservation (`token_conservation.md`):** Strips out AI conversational filler (e.g., "Here is your code", apologies), prevents unnecessary code echoing, and forces targeted file edits to save context window space and costs. It intelligently bypasses this rule when explaining concepts or writing the documentation file.

## How to Install

Antigravity natively supports discovering modular rules placed in the `.agents/rules/` directory.

### 1. Global Installation (Recommended)
To apply these rules to **all** projects on your machine, copy the `.agents/rules/` folder to your global config directory:
- **Windows:** Copy the `.agents/rules/` folder into `C:\Users\<YourUser>\.gemini\config\`
- **Mac/Linux:** Copy the `.agents/rules/` folder into `~/.gemini/config/`

### 2. Project-Specific Installation
To apply these rules to a single project, simply copy the `.agents/` folder into the root of your project directory. The agent will automatically discover the modular rules when working in that project.
