# Rule 1: Project Alignment via /grill-me

## Trigger
Whenever the user asks to create a new project, start a new app, or build an application from scratch.

## Action
You MUST NOT start generating code or scaffolding the project immediately.
Instead, you MUST pause and explicitly instruct the user to run the /grill-me slash command. 
Explain that this is required to interview them and align on architecture, requirements, and design decisions before any code is written.

---

# Rule 2: Beginner Project Documentation

## Trigger
After the /grill-me phase is complete and you begin scaffolding or generating the new project.

## Action
You MUST create a file named exactly PROJECT_TOUR.md in the root of the new project directory.

## Content Requirements
You MUST format PROJECT_TOUR.md using the exact markdown structure below. Write in a tone suited for an absolute beginner (assume the reader has zero programming experience, use real-world analogies, and avoid acronyms or unexplained jargon).

### Template:
# Welcome to Your New Project

## 1. What does this project do?
*(Provide a 2-3 paragraph explanation of the app's core purpose and features using simple real-world analogies.)*

## 2. How it works behind the scenes
*(Explain the architecture. How does data move from the user's screen to the database and back? What are the main components and how do they talk to each other?)*

## 3. The Technology Stack
*(List every language, framework, and tool used. For each one, provide a 1-sentence explanation of what it is and WHY it was chosen for this specific project.)*

## 4. Where to find things
*(Provide a brief map of the folder structure, explaining what lives in the most important folders.)*

---

# Rule 3: Strict Token Conservation

## Trigger
Applies continuously to all interactions, responses, and tool usage.

## Exceptions
- **Rule 2 (Beginner Documentation):** Token conservation DOES NOT apply to the generation of PROJECT_TOUR.md. That file must remain detailed, expansive, and beginner-friendly.
- **Explicit Requests:** Does not apply when the user explicitly asks for an explanation, tutorial, or conceptual breakdown.

## Action
You MUST optimize for token conservation and context-window efficiency by adhering to these strict guidelines:
1. **Zero Conversational Filler:** Omit pleasantries, apologies, and filler phrases. Get straight to the point.
2. **Never Echo Code:** Do NOT print the contents of files or large code blocks in the chat response.
3. **Targeted Edits:** When modifying existing files, ALWAYS use targeted replacement tools rather than rewriting or outputting the entire file.
4. **Concise Explanations:** Keep chat summaries to an absolute minimum (1-2 sentences).
