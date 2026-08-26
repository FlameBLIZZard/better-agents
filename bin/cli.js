#!/usr/bin/env node

const { runCLI } = require('../src/index.js');

runCLI(process.argv.slice(2)).catch((err) => {
  console.error(err);
  process.exit(1);
});
