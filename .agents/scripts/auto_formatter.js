const { execSync } = require('child_process');
const fs = require('fs');

let inputData = '';
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  try {
    const payload = JSON.parse(inputData);
    
    // Only run if the tool is editing a file
    const toolName = payload.toolCall?.name;
    if (toolName === 'write_to_file' || toolName === 'replace_file_content') {
      try {
        // Silently run prettier on the source folder before allowing the edit
        execSync('npx prettier --write "src/**/*.{js,ts,jsx,tsx,css,md}" --log-level silent', { 
          stdio: 'ignore',
          timeout: 10000 
        });
      } catch (e) {
        // Prettier might not be installed or failed, just ignore
      }
    }

    // Always allow the agent to proceed
    console.log(JSON.stringify({
      decision: "allow"
    }));
    process.exit(0);

  } catch (error) {
    console.log(JSON.stringify({ decision: "allow" }));
    process.exit(0);
  }
});
