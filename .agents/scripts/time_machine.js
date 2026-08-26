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
  // Only run if it's a git repository
  if (fs.existsSync('.git')) {
    try {
      const status = execSync('git status --porcelain').toString();
      if (status) {
        execSync('git add .');
        execSync('git commit -m "chore(ai): auto-checkpoint before next step"');
      }
    } catch (e) {
      // Fail silently
    }
  }
  
  // Fulfill the PostToolUse contract by returning an empty JSON object
  console.log(JSON.stringify({}));
  process.exit(0);
});
