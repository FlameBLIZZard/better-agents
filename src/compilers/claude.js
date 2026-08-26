const fs = require('fs-extra');
const path = require('path');
const pc = require('picocolors');

// Helper to find all markdown files in a directory recursively
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

async function compileClaude(selections, targetDir) {
  const sourceDir = path.join(__dirname, '../../.agents');
  const destFile = path.join(targetDir, 'better-agents-claude.md');

  const allFiles = getAllMarkdownFiles(sourceDir);
  let compiledContent = `# Better Agents - System Prompt\n\nUpload this file to your Claude Project Knowledge Base.\n\n`;

  for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    // Strip yaml frontmatter if it exists
    content = content.replace(/---\n[\s\S]*?\n---\n/, '');
    compiledContent += `\n---\n${content}\n`;
  }

  fs.writeFileSync(destFile, compiledContent);

  console.log(pc.green(`\n✔ Successfully compiled rules into ${destFile}`));
  console.log(pc.magenta(`\nNext Step: Open Claude, create a new Project, and upload this file to the Knowledge Base!`));
}

module.exports = { compileClaude };
