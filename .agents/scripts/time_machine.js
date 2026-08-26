// time_machine.js
// Cross-platform Node.js script that runs silently after the AI finishes a step.

const { execSync } = require('child_process');
const fs = require('fs');

let inputData = '';
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  let payload = {};
  try { payload = JSON.parse(inputData); } catch (e) {}
  const workspaceDir = (payload.workspacePaths && payload.workspacePaths.length > 0) ? payload.workspacePaths[0] : process.cwd();
  
  const gitDir = workspaceDir + '/.git';
  // Only run if it's a git repository
  if (fs.existsSync(gitDir)) {
    try {
      const status = execSync('git status --porcelain', { cwd: workspaceDir }).toString();
      if (status) {
        execSync('git add .', { cwd: workspaceDir });
        execSync('git commit -m "chore(ai): auto-checkpoint before next step"', { cwd: workspaceDir });
      }
    } catch (e) {
      // Fail silently
    }
  }
  
  // Fulfill the PostToolUse contract by returning an empty JSON object
  console.log(JSON.stringify({}));
  process.exit(0);
});
