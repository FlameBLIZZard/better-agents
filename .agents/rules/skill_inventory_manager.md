# Rule: Skill Inventory Manager

## Trigger
Whenever the user asks "what skills do you have?", "list my skills", "show workflows", or expresses confusion about which custom capability to use for a task.

## Action
You MUST help the user discover and manage their installed skills.
1. Scan the `.agents/skills/` directory in the current workspace (or the global `.gemini/config/` directory) to see what is installed.
2. Read the frontmatter of the installed `SKILL.md` files to extract their names and descriptions.
3. Present the findings to the user in a clean, easy-to-read Markdown table so they know exactly what capabilities are available to them.
4. If the user is trying to solve a specific problem, proactively recommend the installed skill that best matches their goal.
