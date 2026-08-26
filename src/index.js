const { intro, outro, select, multiselect, spinner, isCancel, cancel } = require('@clack/prompts');
const pc = require('picocolors');
const path = require('path');
const fs = require('fs-extra');
const { compileAntigravity } = require('./compilers/antigravity');
const { compileCursor } = require('./compilers/cursor');
const { compileClaude } = require('./compilers/claude');

// Helper to extract a brief description/hint from markdown or YAML
function extractHint(filePath, relPath) {
  let hintText = '';
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Try to find a YAML description
    const descMatch = content.match(/description:\s*(?:>-)?\s*([^\n]+)/i);
    if (descMatch) hintText = descMatch[1].trim().substring(0, 50) + '...';
    else {
      // Try to find a Role (for subagents)
      const roleMatch = content.match(/\*\*Role:\*\*\s*([^\n]+)/i);
      if (roleMatch) hintText = 'Role: ' + roleMatch[1].trim();
      else {
        // Default to the first Markdown header
        const firstLine = content.split('\n').find(l => l.startsWith('# '));
        if (firstLine) hintText = firstLine.replace('# ', '').trim();
      }
    }
  } catch (e) {}

  const repoUrl = `https://github.com/FlameBLIZZard/better-agents/blob/main/.agents/${relPath}`;
  return hintText ? `${hintText} (Docs: ${repoUrl})` : `Docs: ${repoUrl}`;
}

// Helper to dynamically read directories
function getOptionsFromDir(dirRelPath, isDirectoryMode = false) {
  const fullPath = path.join(__dirname, '../.agents', dirRelPath);
  if (!fs.existsSync(fullPath)) return [];
  
  const items = fs.readdirSync(fullPath);
  const options = [];

  for (const item of items) {
    const itemPath = path.join(fullPath, item);
    const stat = fs.statSync(itemPath);
    
    if (isDirectoryMode && stat.isDirectory()) {
      const skillMd = path.join(itemPath, 'SKILL.md');
      const relFile = path.posix.join(dirRelPath, item, 'SKILL.md');
      let hint = '';
      if (fs.existsSync(skillMd)) hint = extractHint(skillMd, relFile);
      options.push({ value: path.posix.join(dirRelPath, item), label: item, hint });
    } else if (!isDirectoryMode && stat.isFile() && item.endsWith('.md')) {
      const relFile = path.posix.join(dirRelPath, item);
      const hint = extractHint(itemPath, relFile);
      options.push({ value: path.posix.join(dirRelPath, item), label: item.replace('.md', ''), hint });
    }
  }
  return options;
}

async function runCLI() {
  intro(pc.bgMagenta(pc.black(' Better Agents - Universal Installer ')));

  const selectedFiles = [];

  // 1. Core Rules
  const coreRules = getOptionsFromDir('rules');
  if (coreRules.length > 0) {
    const res = await multiselect({
      message: 'Select Core Rules:',
      options: coreRules,
      required: false
    });
    if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
    selectedFiles.push(...res);
  }

  // 2. Motivation Rules
  const motivationRules = getOptionsFromDir('rules/motivation');
  if (motivationRules.length > 0) {
    const res = await multiselect({
      message: 'Select Motivation & Psychology Rules:',
      options: motivationRules,
      required: false
    });
    if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
    selectedFiles.push(...res);
  }

  // 3. Subagents
  const subagents = getOptionsFromDir('rules/subagents');
  if (subagents.length > 0) {
    const res = await multiselect({
      message: 'Select Vibecoder Subagents:',
      options: subagents,
      required: false
    });
    if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
    selectedFiles.push(...res);
  }

  // 4. Skills (Folders)
  const skills = getOptionsFromDir('skills', true);
  if (skills.length > 0) {
    const res = await multiselect({
      message: 'Select Skills & Workflows:',
      options: skills,
      required: false
    });
    if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
    selectedFiles.push(...res);
  }

  // 5. Hooks
  const hooks = await select({
    message: 'Install the "Time Machine" Auto-Save Hook?',
    options: [
      { value: true, label: 'Yes (Recommended)', hint: 'Silently commits changes to git so you can undo AI mistakes' },
      { value: false, label: 'No' }
    ]
  });
  if (isCancel(hooks)) { cancel('Operation cancelled.'); process.exit(0); }
  if (hooks) {
    selectedFiles.push('hooks.json');
    selectedFiles.push('scripts/time_machine.js');
  }

  if (selectedFiles.length === 0) {
    outro(pc.yellow('No modules selected. Exiting.'));
    process.exit(0);
  }

  const aiTarget = await select({
    message: 'Which AI Assistant are you using?',
    options: [
      { value: 'antigravity', label: 'Antigravity AI (Full Modular Setup)' },
      { value: 'cursor', label: 'Cursor (.cursorrules)' },
      { value: 'windsurf', label: 'Windsurf (.windsurfrules)' },
      { value: 'claude', label: 'Claude Projects (Markdown Export)' },
    ]
  });

  if (isCancel(aiTarget)) { cancel('Operation cancelled.'); process.exit(0); }

  const s = spinner();
  s.start(`Compiling your customized toolkit for ${aiTarget}...`);

  const targetDir = process.cwd();

  try {
    if (aiTarget === 'antigravity') {
      await compileAntigravity(selectedFiles, targetDir);
    } else if (aiTarget === 'cursor' || aiTarget === 'windsurf') {
      await compileCursor(selectedFiles, targetDir, aiTarget);
    } else if (aiTarget === 'claude') {
      await compileClaude(selectedFiles, targetDir);
    }
    
    s.stop('Compilation complete!');
    outro(pc.green('You are all set! Happy Vibecoding.'));
  } catch (error) {
    s.stop(pc.red('Compilation failed.'));
    console.error(error);
  }
}

module.exports = { runCLI };
