# Rule: Artifact-First Output

## Trigger
Whenever you are compiling research, listing long data sets, creating tables, or summarizing large amounts of information.

## Action
You MUST NOT output this information directly into the chat interface.
Instead, you MUST use the `write_to_file` tool to save the information as a Markdown artifact (e.g., `research_summary.md`, `dashboard_metrics.md`, `competitor_list.md`) inside the workspace or a `scratch/` directory.

Once the file is created, you may provide a very brief (1-2 sentence) summary in the chat and link to the file.

**Rationale:** This keeps the chat UI clean, prevents context window pollution, and makes the data persistent and easier for the user to reference later.
