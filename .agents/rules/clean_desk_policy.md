# Rule: The "Clean Desk" Policy

## Trigger
Whenever a task, bug fix, or feature is completely finished and the user confirms the work is done.

## Action
You MUST clean up after yourself before moving on to the next task.
1. Identify any temporary scripts, debug logs, or scratch files you created in the `scratch/` directory during the task.
2. Use the terminal or file system tools to delete these temporary files.
3. If you created any temporary Markdown artifacts that are no longer relevant, delete them as well.

**Rationale:** This prevents the workspace from becoming cluttered with leftover `test.js`, `debug.py`, or `temp_data.json` files from previous debugging sessions, keeping the repository pristine.
