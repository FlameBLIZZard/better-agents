const fs = require('fs');
const path = require('path');

const agentsDir = path.join(__dirname, '..', '.agents');

// Helper to count markdown files in a directory
function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  const files = fs.readdirSync(dirPath);
  return files.filter(f => f.endsWith('.md') || f.endsWith('.js') || f.endsWith('.json')).length;
}

// Get counts
const psychologyRules = countFiles(path.join(agentsDir, 'rules', 'motivation'));
const subagents = countFiles(path.join(agentsDir, 'rules', 'subagents'));
const coreRules = countFiles(path.join(agentsDir, 'rules')) - psychologyRules - subagents; // Files directly in rules/
const skills = fs.readdirSync(path.join(agentsDir, 'skills')).length; // Counting folders in skills
const workflows = countFiles(path.join(agentsDir, 'workflows'));
const hooks = countFiles(path.join(agentsDir, 'scripts')) + 1; // +1 for hooks.json

const total = coreRules + skills + subagents + psychologyRules + hooks + workflows;

const newSection = `<!-- STATS:START -->
## 📊 The Arsenal (${total} Modules & Counting)

\`\`\`mermaid
pie title The Agentic Toolkit Breakdown
    "Core Rules" : ${coreRules}
    "Advanced Skills" : ${skills}
    "Subagents" : ${subagents}
    "Psychology Rules" : ${psychologyRules}
    "Lifecycle Hooks" : ${hooks}
    "Workflows" : ${workflows}
\`\`\`
<!-- STATS:END -->`;

const readmePath = path.join(__dirname, '..', 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(/<!-- STATS:START -->[\s\S]*<!-- STATS:END -->/, newSection);

fs.writeFileSync(readmePath, readme);
console.log('Successfully updated README.md stats!');
