import sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

from solve_all import concept_definitions

# Sort alphabetically
sorted_defs = sorted(concept_definitions, key=lambda x: x[0].lower())

data = []
for c, d in sorted_defs:
    data.append({
        'concept': c,
        'definition': d
    })

with open('glossary.js', 'w', encoding='utf-8') as f:
    f.write('// Sổ tay định nghĩa và thuật ngữ cốt lõi Xử Lý Ảnh\n')
    f.write('window.GLOSSARY_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')

print(f"Glossary created with {len(data)} terms.")
