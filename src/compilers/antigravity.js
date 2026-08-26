const fs = require('fs-extra');
const path = require('path');
const pc = require('picocolors');

async function compileAntigravity(selectedFiles, targetDir) {
  const sourceBase = path.join(__dirname, '../.agents');
  const destBase = path.join(targetDir, '.agents');

  for (const relPath of selectedFiles) {
    const srcPath = path.join(sourceBase, relPath);
    const destPath = path.join(destBase, relPath);
    
    if (fs.existsSync(srcPath)) {
      await fs.copy(srcPath, destPath);
    }
  }
  
  console.log(pc.green(`\n✔ Successfully installed ${selectedFiles.length} customized modules into ${targetDir}`));
  console.log(pc.cyan(`\nAntigravity will automatically load these rules next time you open the workspace!`));
}

module.exports = { compileAntigravity };
