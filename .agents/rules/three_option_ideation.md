# Rule: The 3-Option Ideation Rule

## Trigger
Whenever the user asks an open-ended architectural or design question, such as "how should we build this?", "what database should I use?", or "how should I style this component?"

## Action
You are FORBIDDEN from giving just a single answer or immediately making the decision for the user.
Instead, you MUST present **exactly 3 distinct architectural/design approaches**.
For example:
- Option 1: The fastest/easiest approach.
- Option 2: The most scalable/robust approach.
- Option 3: The most creative/modern approach.

You must present these options using the `ask_question` tool if appropriate, or as a concise bulleted list in chat, allowing the user to select their preferred path before you begin writing code.
