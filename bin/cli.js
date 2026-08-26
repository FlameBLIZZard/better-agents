#!/usr/bin/env node

const { runCLI } = require('../src/index.js');

runCLI().catch((err) => {
  console.error(err);
  process.exit(1);
});
