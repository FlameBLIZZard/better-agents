const { intro, outro, select, multiselect, spinner } = require('@clack/prompts');
const pc = require('picocolors');
const path = require('path');
const { compileAntigravity } = require('./compilers/antigravity');
const { compileCursor } = require('./compilers/cursor');
const { compileClaude } = require('./compilers/claude');

async function runCLI() {
  intro(pc.bgMagenta(pc.black(' Better Agents - Universal Installer ')));

  const features = await multiselect({
    message: 'Which modules do you want to install?',
    options: [
      { value: 'core', label: 'Core Best Practices', hint: 'recommended' },
      { value: 'subagents', label: 'Vibecoder Subagents' },
      { value: 'workflows', label: 'Agentic Workflows' },
      { value: 'motivation', label: 'Motivation & Psychology Suite' },
    ],
    required: true
  });

  if (features === Symbol.for('cancel')) { process.exit(0); }

  const aiTarget = await select({
    message: 'Which AI Assistant are you using?',
    options: [
      { value: 'antigravity', label: 'Antigravity AI (Full Features)' },
      { value: 'cursor', label: 'Cursor (.cursorrules)' },
      { value: 'windsurf', label: 'Windsurf (.windsurfrules)' },
      { value: 'claude', label: 'Claude Projects (Markdown Export)' },
    ]
  });

  if (aiTarget === Symbol.for('cancel')) { process.exit(0); }

  const s = spinner();
  s.start(`Compiling your toolkit for ${aiTarget}...`);

  const targetDir = process.cwd();

  try {
    if (aiTarget === 'antigravity') {
      await compileAntigravity(features, targetDir);
    } else if (aiTarget === 'cursor' || aiTarget === 'windsurf') {
      // For demo purposes, they use the same compiler strategy
      await compileCursor(features, targetDir);
    } else if (aiTarget === 'claude') {
      await compileClaude(features, targetDir);
    }
    
    s.stop('Compilation complete!');
    outro(pc.green('You are all set! Happy Vibecoding.'));
  } catch (error) {
    s.stop(pc.red('Compilation failed.'));
    console.error(error);
  }
}

module.exports = { runCLI };
