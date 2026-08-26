const { intro, outro, select, multiselect, spinner, isCancel, cancel } = require('@clack/prompts');
const pc = require('picocolors');
const path = require('path');
const fs = require('fs-extra');
const { compileAntigravity } = require('./compilers/antigravity');
const { compileCursor } = require('./compilers/cursor');
const { compileClaude } = require('./compilers/claude');

const registry = require('./registry.json');

// Helper to extract a brief description from registry.json
function extractHint(relPath) {
  return registry[relPath] || 'Custom module';
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

const PRESETS = {
  founder: [
    'subagents/market_researcher.md',
    'subagents/autopilot.md',
    'skills/problem_discovery_engine',
    'rules/continuous_learning_protocol.md'
  ],
  enterprise: [
    'subagents/system_architect.md',
    'subagents/refactoring_specialist.md',
    'subagents/ui_qa_engineer.md',
    'skills/architecture_scaffolding',
    'skills/component_decoupling_engine',
    'rules/token_conservation.md'
  ],
  'open-source': [
    'workflows/oss_contributor_protocol.md',
    'skills/github_publisher',
    'subagents/code_librarian.md',
    'subagents/system_architect.md',
    'rules/code_reuse_mandate.md'
  ],
  security: [
    'workflows/zero_day_response.md',
    'workflows/incident_response_protocol.md',
    'skills/red_team_pentester',
    'skills/devils_advocate_planning',
    'subagents/silent_fixer.md'
  ],
  designer: [
    'workflows/design_system_extractor.md',
    'skills/svg_graphics_engine',
    'subagents/design_translator.md',
    'subagents/vector_artist.md',
    'subagents/ui_qa_engineer.md'
  ],
  'legacy-killer': [
    'workflows/legacy_modernization_protocol.md',
    'workflows/tech_debt_eradicator.md',
    'skills/component_decoupling_engine',
    'skills/snippet_harvesting_engine',
    'subagents/refactoring_specialist.md',
    'rules/code_reuse_mandate.md'
  ]
};

async function runCLI(args = []) {
  intro(pc.bgMagenta(pc.black(' Better Agents - Universal Installer ')));

  const command = args[0] || 'init'; // default to init

  if (command === 'update') {
    const configPath = path.join(process.cwd(), 'better-agents.json');
    if (!fs.existsSync(configPath)) {
      cancel('No better-agents.json found in this directory. Run `npx better-agents init` first.');
      process.exit(1);
    }

    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    const s = spinner();
    s.start(`Updating and re-compiling toolkit for ${config.target}...`);
    
    try {
      if (config.target === 'antigravity') {
        await compileAntigravity(config.modules, process.cwd());
      } else if (config.target === 'cursor' || config.target === 'windsurf') {
        await compileCursor(config.modules, process.cwd(), config.target);
      } else if (config.target === 'claude') {
        await compileClaude(config.modules, process.cwd());
      }
      s.stop('Update complete!');
      outro(pc.green('Your agents have been synced to the latest versions!'));
    } catch (err) {
      s.stop(pc.red('Update failed.'));
      console.error(err);
    }
    return;
  }

  const presetIndex = args.indexOf('--preset');
  const presetName = presetIndex !== -1 ? args[presetIndex + 1] : null;

  let selectedFiles = [];

  if (presetName && PRESETS[presetName]) {
    selectedFiles = [...PRESETS[presetName]];
    console.log(pc.green(`\nLoaded preset: ${presetName}`));
  } else {
    const buildMethod = await select({
      message: 'How would you like to build your toolkit?',
      options: [
        { value: 'preset', label: '🚀 Select a Preset Loadout (Recommended)' },
        { value: 'manual', label: '🛠️ Build a Custom Toolkit (Manual Checklist)' }
      ]
    });

    if (isCancel(buildMethod)) { cancel('Operation cancelled.'); process.exit(0); }

    if (buildMethod === 'preset') {
      const chosenPreset = await select({
        message: 'Choose a Preset Loadout:',
        options: [
          { value: 'founder', label: '🚀 The Startup Founder (Prototyping, Market Research, Autopilot)' },
          { value: 'enterprise', label: '🏢 The Enterprise Architect (Architecture, QA, Refactoring)' },
          { value: 'open-source', label: '🤝 The OSS Core Contributor (GitHub workflows, Architecture cloning)' },
          { value: 'security', label: '🛡️ The Security Auditor (Zero-day patching, Pentesting)' },
          { value: 'designer', label: '🎨 The Design Systems Engineer (SVG graphics, UI extraction)' },
          { value: 'legacy-killer', label: '🧹 The Technical Debt Eradicator (Refactoring, Decoupling, DRY logic)' }
        ]
      });
      if (isCancel(chosenPreset)) { cancel('Operation cancelled.'); process.exit(0); }
      
      selectedFiles = [...PRESETS[chosenPreset]];
      console.log(pc.green(`\nLoaded preset: ${chosenPreset}`));
    } else {
    // 1. Core Rules
    const coreRules = getOptionsFromDir('rules');
    if (coreRules.length > 0) {
      const res = await multiselect({
        message: 'Select Core Rules (Space to select, Enter to submit, Arrows to navigate):',
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
        message: 'Select Subagents (Space to select, Enter to submit, Arrows to navigate):',
        options: subagents,
        required: false
      });
      if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
      selectedFiles.push(...res);
    }

    // 4. Skills & Workflows (Folders)
    const skills = getOptionsFromDir('skills', true);
    if (skills.length > 0) {
      const res = await multiselect({
        message: 'Select Skills & Workflows (Space to select, Enter to submit):',
        options: skills,
        required: false
      });
      if (isCancel(res)) { cancel('Operation cancelled.'); process.exit(0); }
      selectedFiles.push(...res);
    }

    // 5. Hooks
    const availableHooks = [
      { value: 'time-machine', label: 'Time Machine (Auto-Save)', hint: extractHint('hooks.json') },
      { value: 'auto-formatter', label: 'Auto-Formatter (Prettier)', hint: extractHint('scripts/auto_formatter.js') },
      { value: 'cost-tracker', label: 'Token Cost Tracker', hint: extractHint('scripts/cost_tracker.js') }
    ];

    const selectedHooks = await multiselect({
      message: 'Install Invisible Lifecycle Hooks? (Space to select, Enter to submit):',
      options: availableHooks,
      required: false
    });
    if (isCancel(selectedHooks)) { cancel('Operation cancelled.'); process.exit(0); }

    if (selectedHooks.length > 0) {
      selectedFiles.push('hooks.json');
      if (selectedHooks.includes('time-machine')) selectedFiles.push('scripts/time_machine.js');
      if (selectedHooks.includes('auto-formatter')) selectedFiles.push('scripts/auto_formatter.js');
      if (selectedHooks.includes('cost-tracker')) selectedFiles.push('scripts/cost_tracker.js');
    }
    }
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
    
    // Save state
    const configPath = path.join(targetDir, 'better-agents.json');
    fs.writeFileSync(configPath, JSON.stringify({
      target: aiTarget,
      modules: selectedFiles
    }, null, 2));

    s.stop('Compilation complete!');
    outro(pc.green('You are all set! Configuration saved to better-agents.json. Happy Coding.'));
  } catch (error) {
    s.stop(pc.red('Compilation failed.'));
    console.error(error);
  }
}

module.exports = { runCLI };
