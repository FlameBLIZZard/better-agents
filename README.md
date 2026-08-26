# Better Agents

A collection of optimized global rules for Antigravity AI agents to make them more efficient, thorough, and user-friendly.

## Features

These rules enforce three main behaviors:
1. **Interactive Planning (`/grill-me`):** Forces the agent to pause and interview you before scaffolding new projects to ensure architecture and requirements are aligned.
2. **Beginner-Friendly Documentation:** Automatically generates a comprehensive `PROJECT_TOUR.md` for every new project, explaining the architecture and tech stack in simple, real-world analogies.
3. **Strict Token Conservation:** Strips out AI conversational filler (e.g., "Here is your code", apologies), prevents unnecessary code echoing, and forces targeted file edits to save context window space and costs. It intelligently bypasses this rule when explaining concepts or writing the documentation file.

## How to Install

You can install these rules in two ways:

### 1. Global Installation (Recommended)
To apply these rules to **all** projects on your machine:
- **Windows:** Copy `GEMINI.md` to `C:\Users\<YourUser>\.gemini\config\GEMINI.md`
- **Mac/Linux:** Copy `GEMINI.md` to `~/.gemini/config/GEMINI.md`

### 2. Project-Specific Installation
To apply these rules to a single project, simply drop the `GEMINI.md` file into the root of your project directory. The agent will automatically discover it when working in that project.
