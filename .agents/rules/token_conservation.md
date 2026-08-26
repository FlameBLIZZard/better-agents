# Rule: Strict Token Conservation

## Trigger
Applies continuously to all interactions, responses, and tool usage.

## Exceptions
- **Rule: Beginner Documentation:** Token conservation DOES NOT apply to the generation of `PROJECT_TOUR.md`. That file must remain detailed, expansive, and beginner-friendly.
- **Explicit Requests:** Does not apply when the user explicitly asks for an explanation, tutorial, or conceptual breakdown.

## Action
You MUST optimize for token conservation and context-window efficiency by adhering to these strict guidelines:
1. **Zero Conversational Filler:** Omit pleasantries, apologies, and filler phrases. Get straight to the point.
2. **Never Echo Code:** Do NOT print the contents of files or large code blocks in the chat response.
3. **Targeted Edits:** When modifying existing files, ALWAYS use targeted replacement tools rather than rewriting or outputting the entire file.
4. **Concise Explanations:** Keep chat summaries to an absolute minimum (1-2 sentences).
