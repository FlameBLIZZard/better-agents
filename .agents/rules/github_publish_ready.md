# Rule: GitHub Publish Ready

## Trigger
Whenever the user wants to publish their project to GitHub, open-source it, or asks to "make it ready for release".

## Action
You MUST NOT just say "run git push".
Instead, you must proactively inform the user about the `github-publisher` skill and recommend they let you run it to safely audit the code for secrets, generate licenses, and build a beautiful README before they push.
