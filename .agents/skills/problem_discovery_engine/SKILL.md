---
name: Problem Discovery Engine
description: Scrapes developer forums and social platforms to extract validated, real-world pain points for product ideation.
---

# Skill: Problem Discovery Engine

## 🎯 Purpose
To prevent the "building a solution in search of a problem" anti-pattern. This skill instructs the AI to actively search the internet for genuine user complaints and technical friction points to generate highly validated product ideas.

## 🛠️ Execution Protocol

When the user invokes this skill, you must use your web search or browsing tools to execute the following pipeline:

### 1. The Scraping Phase
Target specific communities (e.g., HackerNews, Reddit `r/webdev`, `r/SaaS`, GitHub Issues, or StackOverflow) and search for high-signal frustration keywords:
- *"I wish there was a tool that..."*
- *"Is there an open source alternative to..."*
- *"I am so tired of manually..."*
- *"Why is it so hard to..."*

### 2. The Validation Phase
Filter out trivial bugs. You are looking for systemic issues that multiple people are complaining about. 

### 3. The Output Artifact
Generate a `MARKET_GAPS.md` artifact formatted strictly as follows:

```markdown
# 🔍 Market Gap Analysis

## 1. [Pain Point Name]
- **The Problem**: (1-2 sentences summarizing the friction)
- **Signal Strength**: (High/Medium/Low - based on how many people are complaining)
- **Verbatim Quote**: *"Quote from the user showing genuine frustration"*
- **Proposed Solution**: (A 1-sentence technical pitch for a SaaS or CLI tool that solves it)
```

## ⚠️ Constraints
- Never hallucinate problems. You must find actual complaints on the internet.
- Focus strictly on technical, software, or developer-tooling pain points unless the user specifies a different industry.
