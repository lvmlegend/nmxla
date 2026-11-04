import sys, re, json
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\lehiep\.gemini\antigravity\brain\675defa0-c861-4ea4-91e1-6b6b5f2371b2\.user_uploaded\media_1793719596713_ceeeb7dd.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = r'(Câu\s+\d+\..*?)(?=(?:Câu\s+\d+\.|\Z))'
matches = re.findall(pattern, text, re.DOTALL)

parsed_questions = []
for m in matches:
    lines = [l.strip() for l in m.strip().split('\n') if l.strip()]
    q_line = lines[0]
    q_num = int(re.search(r'Câu\s+(\d+)\.', q_line).group(1))
    q_text = re.sub(r'^Câu\s+\d+\.\s*', '', q_line)
    
    options = {}
    current_opt = None
    for l in lines[1:]:
        opt_m = re.match(r'^([A-D])\.\s*(.*)', l)
        if opt_m:
            current_opt = opt_m.group(1)
            options[current_opt] = opt_m.group(2)
        elif current_opt:
            options[current_opt] += ' ' + l
    parsed_questions.append({
        'id': q_num,
        'question': q_text,
        'options': options
    })

type2_prefixes = [
    r'^Một bước xử lý cần đạt đặc điểm sau:\s*(.*?)\.\s*Kỹ thuật hoặc khái niệm nào phù hợp nhất\?',
    r'^Khi gặp tình huống có đặc điểm:\s*(.*?),\s*kỹ thuật nào nên được nhận diện\?',
    r'^Một hệ thống được thiết kế để\s*(.*?)\.\s*Nội dung nào tương ứng đúng nhất\?',
    r'^Trong một bài toán xử lý ảnh, yêu cầu là:\s*(.*?)\.\s*Lựa chọn nào phù hợp nhất\?',
    r'^Mô tả hoạt động sau thuộc về khái niệm nào:\s*(.*?)\??$',
    r'^Một bài toán có yêu cầu\s*(.*?)\.\s*Kỹ thuật nào phù hợp nhất\?',
    r'^Một hệ thống có biểu hiện:\s*(.*?)\.\s*Nhận định nào xác định đúng kỹ thuật liên quan\?',
    r'^Để đáp ứng yêu cầu\s*(.*?),\s*khái niệm hoặc kỹ thuật nào phù hợp nhất\?',
    r'^Nếu hệ thống phải\s*(.*?),\s*lựa chọn nào nên được xem xét trước tiên\?',
    r'^Để thực hiện nhiệm vụ\s*(.*?),\s*phương án nào phù hợp nhất\?',
    r'^Tình huống\s*(.*?)\s*tương ứng với khái niệm nào\?',
    r'^Khi quan sát thấy yêu cầu\s*(.*?),\s*nội dung nào liên quan trực tiếp\?',
    r'^Một bước xử lý có chức năng\s*(.*?)\.\s*Đó là kỹ thuật nào\?',
    r'^Một kỹ sư cần thực hiện chức năng:\s*(.*?)\.\s*Lựa chọn nào phù hợp\?',
    r'^Trong thực hành, yêu cầu\s*(.*?)\s*nên gắn với lựa chọn nào\?'
]

type1_prefixes = [
    r'^Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về\s*(.*?)\?',
    r'^Trong xử lý ảnh số, nhận định nào phù hợp nhất với\s*(.*?)\?',
    r'^Đặc điểm nào sau đây gắn đúng với\s*(.*?)\?',
    r'^Khi xét\s*(.*?),\s*phát biểu nào là chính xác\?',
    r'^Nội dung nào phản ánh đúng bản chất của\s*(.*?)\?',
    r'^Khi ôn tập về\s*(.*?),\s*nội dung nào cần được ghi nhớ là đúng\?',
    r'^Phát biểu nào mô tả phù hợp nhất cho\s*(.*?)\s*trong môn xử lý ảnh\?',
    r'^Ý nghĩa nào sau đây gần nhất với\s*(.*?)\?',
    r'^Trong các mô tả sau, mô tả nào đúng với\s*(.*?)\?',
    r'^Nhận định nào dưới đây phù hợp với khái niệm\s*(.*?)\?'
]

q_type1 = {} # q_id -> (concept, options)
q_type2 = {} # q_id -> (definition, options)

for q in parsed_questions:
    q_text = q['question']
    matched = False
    for p in type1_prefixes:
        m = re.match(p, q_text)
        if m:
            concept = m.group(1).strip()
            q_type1[q['id']] = (concept, q['options'])
            matched = True
            break
    if matched:
        continue
    for p in type2_prefixes:
        m = re.match(p, q_text)
        if m:
            definition = m.group(1).strip()
            q_type2[q['id']] = (definition, q['options'])
            matched = True
            break

# Normalize function for string comparison
def norm(s):
    s = s.strip().rstrip('.')
    s = re.sub(r'\s+', ' ', s)
    return s.lower()

# Build mapping between concept and definition
# For Type 1: concept in question, definitions in options
# For Type 2: definition in question, concepts in options

# Let's count co-occurrences
concept_def_votes = defaultdict(int)

for q_id, (concept, options) in q_type1.items():
    for opt, def_text in options.items():
        concept_def_votes[(norm(concept), norm(def_text))] += 1

for q_id, (def_text, options) in q_type2.items():
    for opt, concept in options.items():
        concept_def_votes[(norm(concept), norm(def_text))] += 1

# If a pair (C, D) appears where C is question and D is option, AND D is question and C is option, that's a strong pair!
strong_pairs = set()
for q1_id, (c1, opts1) in q_type1.items():
    for opt1_key, d1 in opts1.items():
        # check if d1 appears as question in q_type2 and c1 is in its options
        for q2_id, (d2, opts2) in q_type2.items():
            if norm(d1) == norm(d2):
                for opt2_key, c2 in opts2.items():
                    if norm(c1) == norm(c2):
                        strong_pairs.add((norm(c1), norm(d1)))

print(f"Strong confirmed (Concept, Definition) pairs: {len(strong_pairs)}")

# Map each concept to its best definition
concept_to_def = {}
def_to_concept = {}
for c, d in strong_pairs:
    concept_to_def[c] = d
    def_to_concept[d] = c

# Check how many questions can be answered with strong pairs
correct_answers = {} # q_id -> 'A'/'B'/'C'/'D'

for q_id, (concept, options) in q_type1.items():
    c_norm = norm(concept)
    if c_norm in concept_to_def:
        target_def = concept_to_def[c_norm]
        for opt_key, opt_val in options.items():
            if norm(opt_val) == target_def:
                correct_answers[q_id] = opt_key
                break

for q_id, (definition, options) in q_type2.items():
    d_norm = norm(definition)
    if d_norm in def_to_concept:
        target_concept = def_to_concept[d_norm]
        for opt_key, opt_val in options.items():
            if norm(opt_val) == target_concept:
                correct_answers[q_id] = opt_key
                break

print(f"Directly resolved technical questions: {len(correct_answers)} / {len(q_type1) + len(q_type2)}")

unresolved = []
for q in parsed_questions:
    if q['id'] not in correct_answers and q['id'] not in range(191, 201):
        unresolved.append(q['id'])

print(f"Unresolved technical question IDs: {unresolved}")
