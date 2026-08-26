#!/bin/bash
# time_machine.sh
# This script runs automatically in the background after the AI finishes a step.
# It checks if there are uncommitted changes, and if so, commits them.

if [ -d ".git" ]; then
  git add .
  
  # Only commit if there are actually staged changes to avoid empty commits
  if ! git diff --staged --quiet; then
    git commit -m "chore(ai): invisible background auto-save"
  fi
fi
