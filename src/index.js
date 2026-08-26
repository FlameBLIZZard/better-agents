const { intro, outro, select, multiselect, spinner, isCancel, cancel } = require('@clack/prompts');
const pc = require('picocolors');
const path = require('path');
const fs = require('fs-extra');
const { compileAntigravity } = require('./compilers/antigravity');
const { compileCursor } = require('./compilers/cursor');
const { compileClaude } = require('./compilers/claude');

const registry = require('./registry.json');

// Helper to extract a brief description/hint from registry.json
function extractHint(relPath) {
  const hintText = registry[relPath] || 'Custom module';
  const repoUrl = `https://github.com/FlameBLIZZard/better-agents/blob/main/.agents/${relPath}`;
  return `${hintText} (Docs: ${repoUrl})`;
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
    const relPath = path.posix.join(dirRelPath, item);
    
    if (isDirectoryMode && stat.isDirectory()) {
      const hint = extractHint(relPath);
      options.push({ value: relPath, label: item, hint });
    } else if (!isDirectoryMode && stat.isFile() && item.endsWith('.md')) {
      const hint = extractHint(relPath);
      options.push({ value: relPath, label: item.replace('.md', ''), hint });
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

  // 2. Subagents
  const subagents = getOptionsFromDir('subagents');
  if (subagents.length > 0) {
    const res = await multiselect({
      message: 'Select Subagents:',
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
      message: 'Select Skills:',
      options: skills,
      required: false
    });
    if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
    selectedFiles.push(...res);
  }

  // 4b. Workflows
  const workflows = getOptionsFromDir('workflows');
  if (workflows.length > 0) {
    const res = await multiselect({
      message: 'Select Multi-Agent Workflows:',
      options: workflows,
      required: false
    });
    if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
    selectedFiles.push(...res);
  }

  // 4c. Slash Commands
  const enableSlashCommands = await select({
    message: 'Install the Slash Command Router? (Allows you to type /ba-launch instead of natural language)',
    options: [
      { value: true, label: 'Yes' },
      { value: false, label: 'No' }
    ]
  });
  if (isCancel(enableSlashCommands)) { cancel('Operation cancelled.'); process.exit(0); }
  if (enableSlashCommands) {
    selectedFiles.push('slash_commands.json');
  }

  // 5. Hooks
  const availableHooks = [
    { value: 'time-machine', label: 'Time Machine (Auto-Save)', hint: extractHint('hooks.json') }, // keep old hint fallback or use registry
    { value: 'auto-formatter', label: 'Auto-Formatter (Prettier)', hint: extractHint('scripts/auto_formatter.js') },
    { value: 'cost-tracker', label: 'Token Cost Tracker', hint: extractHint('scripts/cost_tracker.js') }
  ];

  const selectedHooks = await multiselect({
    message: 'Install Invisible Lifecycle Hooks?',
    options: availableHooks,
    required: false
  });
  if (isCancel(selectedHooks)) { cancel('Operation cancelled.'); process.exit(0); }

  if (selectedHooks.length > 0) {
    selectedFiles.push('hooks.json'); // We will just copy the master hooks.json for simplicity
    if (selectedHooks.includes('time-machine')) selectedFiles.push('scripts/time_machine.js');
    if (selectedHooks.includes('auto-formatter')) selectedFiles.push('scripts/auto_formatter.js');
    if (selectedHooks.includes('cost-tracker')) selectedFiles.push('scripts/cost_tracker.js');
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
    outro(pc.green('You are all set! Happy Coding.'));
  } catch (error) {
    s.stop(pc.red('Compilation failed.'));
    console.error(error);
  }
}

module.exports = { runCLI };
