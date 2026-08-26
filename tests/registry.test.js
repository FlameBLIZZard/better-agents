import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Registry Integrity', () => {
  const registryPath = path.join(__dirname, '../src/registry.json');
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));
  const agentsDir = path.join(__dirname, '../.agents');

  it('should ensure all rules in the registry exist as physical files', () => {
    const keys = Object.keys(registry);
    keys.forEach(key => {
      // keys are things like "rules/anti_burnout.md"
      const filePath = path.join(agentsDir, key);
      const fileExists = fs.existsSync(filePath);
      
      // If it's a directory (like skills/auto_documenter)
      let exists = fileExists;
      if (!exists && !key.endsWith('.md')) {
        exists = fs.existsSync(path.join(agentsDir, key));
      }

      expect(exists).toBe(true);
    });
  });
});
