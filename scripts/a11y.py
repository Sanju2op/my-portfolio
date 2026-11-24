"""Run axe-core against the built pages at phone and desktop widths. Fails on serious or critical issues.

Usage: python3 scripts/a11y.py http://localhost:4321
Needs: playwright (pip) and axe-core (npm install --no-save axe-core).
"""
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

base = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:4321').rstrip('/')
pages = ['/', '/projects/', '/projects/testimonials-system/', '/about/', '/contact/', '/404.html']
sizes = {'phone': (390, 844), 'desktop': (1366, 900)}
axe = Path('node_modules/axe-core/axe.min.js').read_text(encoding='utf-8')
failed = 0

with sync_playwright() as p:
    browser = p.chromium.launch()
    for label, (w, h) in sizes.items():
        page = browser.new_page(viewport={'width': w, 'height': h})
        for path in pages:
            page.goto(base + path, wait_until='load')
            page.wait_for_timeout(400)
            page.add_script_tag(content=axe)
            result = page.evaluate('axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } })')
            for v in result['violations']:
                level = v.get('impact') or 'minor'
                line = f"[{level}] {label} {path}: {v['id']} - {v['help']} ({len(v['nodes'])} element(s))"
                if level in ('serious', 'critical'):
                    failed += 1
                    print('::error::' + line)
                    for n in v['nodes'][:3]:
                        print('    ', n['target'], n.get('failureSummary', '').splitlines()[:2])
                else:
                    print('::warning::' + line)
        page.close()
    browser.close()

print('accessibility check:', 'FAILED' if failed else 'passed', f'({failed} serious or critical issue(s))')
sys.exit(1 if failed else 0)
