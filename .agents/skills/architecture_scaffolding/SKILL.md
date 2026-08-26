---
name: architecture-scaffolding
description: Forces the AI to design and propose a strict ASCII directory structure before generating any project files.
---

# Skill: Architecture Scaffolding

## 🎯 Purpose
To prevent messy, unstructured file dumping. This skill ensures that complex architectural paradigms (Clean Architecture, Domain-Driven Design, MVC) are thoughtfully applied and approved by the user before any code is written.

## 🛠️ Execution Protocol

When the user asks to start a new project, build an app, or define an architecture, you MUST execute the following pipeline:

### 1. The Interrogation
Do not write code. Ask the user 2 questions:
1. "What is the expected scale of this project? (Quick MVP vs. Enterprise Scalability)"
2. "Do you have a preferred architectural pattern (e.g., Feature-Sliced Design, Clean Architecture, standard Next.js App Router)?"

### 2. The Blueprint Phase
Based on their answers, design a comprehensive folder hierarchy. Output an ASCII tree representing the directories and key files. 

Example:
```text
src/
├── core/                # Business logic and domain entities
├── infrastructure/      # Database adapters and external API clients
├── presentation/        # UI components and routes
└── shared/              # Utils and common types
```

Beneath the tree, provide a 1-sentence explanation for the purpose of each top-level directory to enforce strict boundary rules.

### 3. The Approval Block
You MUST stop and wait for the user to explicitly say "Approved" or request modifications to the tree.

### 4. The Scaffold Execution
Once approved, use your command-line tools to execute a chained `mkdir -p` command to instantly scaffold the entire directory structure on the user's filesystem. 

## ⚠️ Constraints
- Never create files or directories without explicit user approval of the ASCII blueprint.
