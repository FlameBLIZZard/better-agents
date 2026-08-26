const fs = require('fs-extra');
const path = require('path');
const pc = require('picocolors');

async function compileAntigravity(selectedFiles, targetDir) {
  const sourceBase = path.join(__dirname, '../../.agents');
  const destBase = path.join(targetDir, '.agents');

  for (const relPath of selectedFiles) {
    const srcPath = path.join(sourceBase, relPath);
    const destPath = path.join(destBase, relPath);
    
    if (fs.existsSync(srcPath)) {
      await fs.copy(srcPath, destPath);
    }
  }

  // Generate a native rule for the Command Router
  if (selectedFiles.includes('slash_commands.json')) {
    const slashRegistry = JSON.parse(fs.readFileSync(path.join(sourceBase, 'slash_commands.json'), 'utf-8'));
    let routerMd = `# Rule: Slash Command Router\n\n## Trigger\nWhen the user's prompt begins with a recognized slash command.\n\n## Action\nYou MUST immediately halt standard conversational operations and execute the associated protocol strictly.\n\n### Registered Commands:\n`;
    
    for (const [cmd, data] of Object.entries(slashRegistry)) {
      routerMd += `- **${cmd}**: Executes \`${data.file}\` (${data.description})\n`;
    }
    
    await fs.outputFile(path.join(destBase, 'rules/command_router.md'), routerMd);
  }
  
  console.log(pc.green(`\n✔ Successfully installed ${selectedFiles.length} customized modules into ${targetDir}`));
  console.log(pc.cyan(`\nAntigravity will automatically load these rules next time you open the workspace!`));
}

module.exports = { compileAntigravity };
