# Contributing to Better Agents 🚀

Welcome to the ultimate open-source marketplace for AI Agents! We want to build the largest, highest-quality collection of custom rules, subagents, and skills for AI-Assisted Developers. 

Whether you've invented a hilarious Motivation Rule or a hyper-advanced Next.js Auto-Linter, we want it!

## How to Contribute

You can contribute in two ways:

### Method 1: The Easy Way (GitHub Issues)
Don't want to mess with git? No problem.
1. Go to the **Issues** tab.
2. Click **New Issue**.
3. Select **Submit a New Subagent** or **Submit a New Skill**.
4. Fill out the beautiful form with your prompt. Our maintainers will merge it into the CLI for you!

### Method 2: The Hacker Way (Pull Requests)
Want to add the files yourself? Perfect.
1. **Fork** this repository.
2. Create your markdown file in the appropriate directory:
   - `.agents/rules/`
   - `.agents/rules/subagents/`
   - `.agents/skills/<skill_name>/SKILL.md`
3. **CRITICAL STEP**: You must open `src/registry.json` and add a snappy, one-sentence marketing description for your new file. *If you do not do this, the CLI installer will not display your contribution!*
4. Test the CLI locally by running `node bin/cli.js`.
5. Open a **Pull Request**!

---

### Core Philosophy
- **Agentic Workflows First**: We prioritize robust, predictable, and highly automated workflows.
- **Zero Filler**: Write prompts that forbid the AI from being overly conversational.
- **Modularity**: Don't put 5 different ideas into one file. Break them up so users can selectively install them via the CLI.

Happy coding! 🎮
