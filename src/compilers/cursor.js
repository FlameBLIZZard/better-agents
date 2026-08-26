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

async function compileCursor(selections, targetDir) {
  const sourceDir = path.join(__dirname, '../../.agents');
  const destFile = path.join(targetDir, '.cursorrules');

  const allFiles = getAllMarkdownFiles(sourceDir);
  let compiledContent = `# Better Agents - Unified Instructions\n\n`;

  for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    // Strip yaml frontmatter if it exists
    content = content.replace(/---\n[\s\S]*?\n---\n/, '');
    compiledContent += `\n---\n${content}\n`;
  }

  fs.writeFileSync(destFile, compiledContent);

  console.log(pc.green(`\n✔ Successfully compiled rules into ${destFile}`));
  console.log(pc.cyan(`\nCursor will read this file automatically for your project.`));
}

module.exports = { compileCursor };
