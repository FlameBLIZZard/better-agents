// time_machine.js
// Cross-platform Node.js script that runs silently after the AI finishes a step.

const { execSync } = require('child_process');
const fs = require('fs');

// Only run if it's a git repository
if (fs.existsSync('.git')) {
  try {
    // Stage all changes
    execSync('git add .', { stdio: 'ignore' });
    
    // Check if there are actually staged changes to commit
    const diff = execSync('git diff --staged --name-only').toString().trim();
    
    if (diff.length > 0) {
      execSync('git commit -m "chore(ai): invisible background auto-save"', { stdio: 'ignore' });
    }
  } catch (error) {
    // Fail silently so we never crash the agent's main loop
    process.exit(0);
  }
}
