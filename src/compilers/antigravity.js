const fs = require('fs-extra');
const path = require('path');
const pc = require('picocolors');

async function compileAntigravity(selections, targetDir) {
  const sourceDir = path.join(__dirname, '../../.agents');
  const destDir = path.join(targetDir, '.agents');

  // Copy everything for now (in a real app, we'd filter by selections)
  await fs.copy(sourceDir, destDir);
  
  console.log(pc.green(`\n✔ Successfully installed modular .agents folder into ${targetDir}`));
  console.log(pc.cyan(`\nAntigravity will automatically load these rules next time you open the workspace!`));
}

module.exports = { compileAntigravity };
