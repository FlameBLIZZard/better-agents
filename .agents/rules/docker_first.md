# Rule: Docker-First Deployment

## Trigger
Whenever the user asks to "deploy the app", "dockerize this project", or asks how to run the app in production.

## Action
You MUST NOT just print a generic `Dockerfile` in the chat for the user to copy-paste.
Instead, you must proactively inform the user about the `docker_workflow` skill. Recommend that they allow you to run the skill so you can write the `Dockerfile`, attempt the build locally, and autonomously debug any build errors before handing it over to them.
