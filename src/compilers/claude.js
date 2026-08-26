const fs = require('fs-extra');
const path = require('path');
const pc = require('picocolors');

function getMarkdownFiles(itemPath, arrayOfFiles = []) {
  if (!fs.existsSync(itemPath)) return arrayOfFiles;
  
  const stat = fs.statSync(itemPath);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(itemPath);
    files.forEach((file) => {
      getMarkdownFiles(path.join(itemPath, file), arrayOfFiles);
    });
  } else if (itemPath.endsWith('.md')) {
    arrayOfFiles.push(itemPath);
  }
  return arrayOfFiles;
}

async function compileClaude(selectedFiles, targetDir) {
  const sourceBase = path.join(__dirname, '../../.agents');
  const destFile = path.join(targetDir, 'better-agents-claude.md');

  let compiledContent = `# Better Agents - System Prompt\n\nUpload this file to your Claude Project Knowledge Base.\n\n`;
  let fileCount = 0;

  for (const relPath of selectedFiles) {
    if (relPath.endsWith('.json') || relPath.endsWith('.js')) continue;

    const fullPath = path.join(sourceBase, relPath);
    const mdFiles = getMarkdownFiles(fullPath);

    for (const file of mdFiles) {
      let content = fs.readFileSync(file, 'utf-8');
      content = content.replace(/---\n[\s\S]*?\n---\n/, '');
      compiledContent += `\n---\n${content}\n`;
      fileCount++;
    }
  }

  fs.writeFileSync(destFile, compiledContent);

  console.log(pc.green(`\n✔ Successfully compiled ${fileCount} rules into ${destFile}`));
  console.log(pc.magenta(`\nNext Step: Open Claude, create a new Project, and upload this file to the Knowledge Base!`));
}

module.exports = { compileClaude };
