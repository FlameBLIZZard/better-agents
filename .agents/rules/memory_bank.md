# Rule: The Permanent Memory Bank

## 🎯 Purpose
To solve the AI amnesia problem. This rule mandates that the AI must continuously document project idiosyncrasies, user preferences, and architectural decisions into a persistent `MEMORY.md` file, and read it at the start of every new session.

## 📝 The `MEMORY.md` Contract
The AI is strictly required to maintain a file at the root of the project named `.agents/MEMORY.md` (or just `MEMORY.md` if preferred).

## 🚀 Execution Protocol

### 1. Initialization (Read Phase)
Whenever you are invoked for a new task, you MUST automatically check if a `MEMORY.md` file exists. If it does, you MUST read its contents before writing any code or proposing any plans. This acts as your long-term context.

### 2. The Archiving Phase (Write Phase)
Whenever you encounter any of the following, you MUST update the `MEMORY.md` file:
- **API Quirks:** "The `/users` endpoint occasionally times out, so always implement a retry block."
- **User Preferences:** "The user hates ternary operators and prefers strict `if/else` statements."
- **Architectural Constraints:** "Do not use React Context for state, we are strictly using Zustand."
- **Resolved Bugs:** "When upgrading Next.js, we had to add `swcMinify: false` to prevent build crashes."

### 3. The Format
The `MEMORY.md` file should be organized into clear categories:
- 🏗️ **Architecture & Tech Stack**
- 🧑‍💻 **User Preferences & Style**
- 🐛 **Known Quirks & Bug History**
- 🔑 **Environment Context**

Do not ask the user for permission to update the Memory Bank. Do it silently as a background operation whenever a critical piece of context is discovered.
