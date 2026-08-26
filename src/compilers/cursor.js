const fs = require('fs-extra');
const path = require('path');
const pc = require('picocolors');

// Helper to find all markdown files in a directory recursively or just return the file
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

async function compileCursor(selectedFiles, targetDir, targetName) {
  const sourceBase = path.join(__dirname, '../../.agents');
  const fileName = targetName === 'windsurf' ? '.windsurfrules' : '.cursorrules';
  const destFile = path.join(targetDir, fileName);

  let compiledContent = `# Better Agents - Unified Instructions\n\n`;
  let fileCount = 0;

  for (const relPath of selectedFiles) {
    // Skip hooks/scripts because Cursor doesn't support them
    if (relPath.endsWith('.json') || relPath.endsWith('.js')) continue;

    const fullPath = path.join(sourceBase, relPath);
    const mdFiles = getMarkdownFiles(fullPath);

    for (const file of mdFiles) {
      let content = fs.readFileSync(file, 'utf-8');
      // Strip yaml frontmatter if it exists
      content = content.replace(/---\n[\s\S]*?\n---\n/, '');
      compiledContent += `\n---\n${content}\n`;
      fileCount++;
    }
  }

  fs.writeFileSync(destFile, compiledContent);

  console.log(pc.green(`\n✔ Successfully compiled ${fileCount} rules into ${destFile}`));
  console.log(pc.cyan(`\nYour AI IDE will read this file automatically.`));
}

module.exports = { compileCursor };
