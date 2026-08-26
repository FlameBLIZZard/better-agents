const fs = require('fs');

// Read payload from stdin
let inputData = '';
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  try {
    const payload = JSON.parse(inputData);
    
    // In a real scenario, you'd calculate actual cost based on step index, 
    // model name, and transcript size. Here we do a mock estimate.
    const stepIdx = payload.invocationNum || 1;
    const estCost = (stepIdx * 0.002).toFixed(3);

    // Output the strict JSON contract required by PostInvocation
    const response = {
      injectSteps: [
        {
          ephemeralMessage: `💸 Estimated Token Cost for step ${stepIdx}: $${estCost}`
        }
      ]
    };

    console.log(JSON.stringify(response));
    process.exit(0);

  } catch (error) {
    // Fail silently so we don't break the agent loop
    console.log(JSON.stringify({}));
    process.exit(0);
  }
});
