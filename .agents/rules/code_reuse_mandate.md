# Rule: Code Reuse Mandate (DRY Principle)

## Trigger
- Prior to writing any new utility function, custom React hook, API fetcher, or generic UI component.
- During any feature scaffolding phase.

## Action
You MUST strictly forbid yourself from generating new code for common logic. Before writing a new function or component, you are required to assume it already exists somewhere in the codebase.
You must use your search tools to scan `src/utils`, `src/hooks`, `src/components`, or `shared/` directories.

## Constraint
If a highly similar function or component exists, you MUST `import` and adapt it. Writing duplicate logic is a critical violation of token conservation and the DRY (Don't Repeat Yourself) principle. 

## Exception
You are only permitted to write net-new utility logic if exhaustive codebase searches return absolutely zero comparable snippets.
