"""Fail if any Lighthouse category falls below its budget.

Usage: python3 scripts/lighthouse_check.py report1.json report2.json
Performance gets a little slack because shared CI machines are noisier than a laptop.
"""
import json
import sys

BUDGET = {'performance': 0.85, 'accessibility': 0.95, 'best-practices': 0.95, 'seo': 0.95}
failed = False

for path in sys.argv[1:]:
    with open(path, encoding='utf-8') as f:
        categories = json.load(f)['categories']
    scores = {name: cat['score'] for name, cat in categories.items()}
    print(f"{path}: " + ', '.join(f'{name} {round((s or 0) * 100)}' for name, s in scores.items()))
    for name, floor in BUDGET.items():
        if name in scores and (scores[name] is None or scores[name] < floor):
            failed = True
            print(f"::error::{path}: {name} is {round((scores[name] or 0) * 100)}, below the budget of {round(floor * 100)}")

print('lighthouse budget:', 'FAILED' if failed else 'passed')
sys.exit(1 if failed else 0)
