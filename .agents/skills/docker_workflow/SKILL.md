---
name: docker-workflow
description: >-
  Writes optimized multi-stage Dockerfiles, automatically runs the build, and loops
  to debug and fix any build errors autonomously.
---

# Skill: Docker Workflow & Auto-Debugger

## When to use this skill
Activate this skill when the user wants to containerize their application for production.

## Execution Steps

1. **Analyze the Stack:** Examine the project to determine the language, framework, and required dependencies (e.g., `package.json`, `requirements.txt`, `go.mod`).
2. **Write Infrastructure:** 
   - Use `write_to_file` to create a `.dockerignore` file to exclude `node_modules`, `.git`, `.env`, etc.
   - Use `write_to_file` to create an optimized, multi-stage `Dockerfile`. Ensure you are using Alpine or slim images to reduce size.
3. **Build & Test:** Use the `run_command` tool to execute `docker build -t app-name .`
4. **Auto-Debug Loop:** 
   - If the build succeeds (exit code 0), move to Step 5.
   - If the build fails, read the terminal error output.
   - Use `replace_file_content` to fix the `Dockerfile` or missing dependencies in the source code.
   - Re-run the build. Loop this debug process up to 3 times.
5. **Compose (Optional):** If the project clearly requires a database (e.g., uses Prisma, Mongoose, or SQLAlchemy), write a `docker-compose.yml` linking the app to a database container.
6. **Report:** Inform the user that the image successfully built, and provide them with the final `docker run` or `docker-compose up -d` command.
