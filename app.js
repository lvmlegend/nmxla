/**
 * JOJO'S BIZARRE ADVENTURE • EYE-FRIENDLY & INTERACTIVE CHARACTER CREW LOGIC
 * Features:
 * - 6 Interactive JoJo Stand Users (Jotaro, Giorno, Josuke, DIO, Rohan, Joseph) + Random Rotation
 * - Custom SVG Anime Portraits & Stand Stats
 * - Eye-friendly subtle Menacing Katakana ("ゴゴゴ") ambient canvas
 * - Zero glaring screen inversions, high readability question/answer flow
 */

const CHARACTER_ORDER = ['jotaro', 'giorno', 'josuke', 'dio', 'rohan', 'joseph'];

// Global State
const state = {
    allQuestions: [],
    selectedCharMode: 'random', // 'jotaro' | 'giorno' | 'josuke' | 'dio' | 'rohan' | 'joseph' | 'random'
    activeCharId: 'jotaro',
    practice: {
        list: [],
        currentIndex: 0,
        answeredMap: {}, // qId -> { selected, isCorrect }
        streak: 0,
        filter: 'all',
        isShuffled: false,
        autoNext: true,
    },
    exam: {
        active: false,
        preset: { count: 40, minutes: 30 },
        questions: [],
        answers: {}, // index -> 'A'/'B'/'C'/'D'
        flagged: new Set(),
        currentIndex: 0,
        timeRemaining: 0,
        timerInterval: null,
        isReviewMode: false,
        stats: null
    },
    bookmarks: new Set(),
    wrongQuestions: new Set(),
    activeTab: 'practice',
    sakuraEnabled: true,
    lastNonZeroVolume: 0.75
};

// ==========================================================================
// Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
        state.allQuestions = window.QUESTIONS_DATA;
    } else {
        console.error("QUESTIONS_DATA not loaded!");
        return;
    }

    loadSavedData();
    initCharacterCrewUI();
    initPractice();
    renderChapters();
    renderGlossary();
    renderSearchBank();
    initMenacingCanvas();

    setupKeyboardShortcuts();
    const autoNextCheckbox = document.getElementById('auto-next-toggle');
    if (autoNextCheckbox) {
        autoNextCheckbox.addEventListener('change', (e) => {
            state.practice.autoNext = e.target.checked;
        });
    }

    updateHeaderStats();
    updateBookmarksUI();
    initVolumeUI();
});

function loadSavedData() {
    const savedTheme = localStorage.getItem('xla_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

    const savedChar = localStorage.getItem('xla_char_mode');
    if (savedChar) {
        state.selectedCharMode = savedChar;
        state.activeCharId = savedChar === 'random' ? 'jotaro' : savedChar;
    }

    const savedSakura = localStorage.getItem('xla_sakura');
    if (savedSakura !== null) {
        state.sakuraEnabled = savedSakura === 'true';
    }
    const sakuraBtn = document.getElementById('sakura-toggle-btn');
    if (sakuraBtn) sakuraBtn.classList.toggle('active', state.sakuraEnabled);

    try {
        const savedBm = localStorage.getItem('xla_bookmarks');
        if (savedBm) state.bookmarks = new Set(JSON.parse(savedBm));
    } catch (e) {}

    try {
        const savedWrong = localStorage.getItem('xla_wrong');
        if (savedWrong) state.wrongQuestions = new Set(JSON.parse(savedWrong));
    } catch (e) {}

    try {
        const savedAns = localStorage.getItem('xla_practice_answers');
        if (savedAns) state.practice.answeredMap = JSON.parse(savedAns);
    } catch (e) {}

    try {
        const savedStreak = localStorage.getItem('xla_streak');
        if (savedStreak) state.practice.streak = parseInt(savedStreak) || 0;
    } catch (e) {}
}

function saveState() {
    localStorage.setItem('xla_bookmarks', JSON.stringify([...state.bookmarks]));
    localStorage.setItem('xla_wrong', JSON.stringify([...state.wrongQuestions]));
    localStorage.setItem('xla_practice_answers', JSON.stringify(state.practice.answeredMap));
    localStorage.setItem('xla_streak', state.practice.streak.toString());
}

// ==========================================================================
// JoJo Character Crew System (6 Stand Users + Random Mode)
// ==========================================================================

function initCharacterCrewUI() {
    const bar = document.getElementById('char-selector-bar');
    if (!bar || !window.JOJO_CHARACTERS) return;

    // Populate Rohan avatar in explanation box
    const rohanExpAvatar = document.getElementById('rohan-exp-avatar');
    if (rohanExpAvatar && window.JOJO_CHARACTERS.rohan) {
        rohanExpAvatar.innerHTML = window.JOJO_CHARACTERS.rohan.svg;
    }

    renderCharacterSelectorBar();
    updateCompanionDisplay('idle');
}

function renderCharacterSelectorBar() {
    const bar = document.getElementById('char-selector-bar');
    if (!bar || !window.JOJO_CHARACTERS) return;

    bar.innerHTML = `<span class="char-selector-label">👥 Chọn Đồng Đội Stand:</span>`;

    // Random rotation button
    const randomBtn = document.createElement('button');
    randomBtn.className = `char-pill ${state.selectedCharMode === 'random' ? 'active' : ''}`;
    randomBtn.style.setProperty('--char-accent', '#fbbf24');
    randomBtn.innerHTML = `
        <span class="char-pill-avatar" style="font-size:0.9rem; background:rgba(251,191,36,0.18);">🎲</span>
        <span>Đổi Ngẫu Nhiên (Cả Đội)</span>
    `;
    randomBtn.onclick = () => selectCharacterMode('random');
    bar.appendChild(randomBtn);

    // Individual character pills
    CHARACTER_ORDER.forEach(charId => {
        const c = window.JOJO_CHARACTERS[charId];
        if (!c) return;

        const btn = document.createElement('button');
        btn.className = `char-pill ${state.selectedCharMode === charId ? 'active' : ''}`;
        btn.style.setProperty('--char-accent', c.accent);
        btn.innerHTML = `
            <span class="char-pill-avatar">${c.svg}</span>
            <span>${c.name.split(' ')[0]}</span>
        `;
        btn.onclick = () => selectCharacterMode(charId);
        bar.appendChild(btn);
    });
}

function selectCharacterMode(mode) {
    state.selectedCharMode = mode;
    localStorage.setItem('xla_char_mode', mode);

    if (mode === 'random') {
        const randomIdx = Math.floor(Math.random() * CHARACTER_ORDER.length);
        state.activeCharId = CHARACTER_ORDER[randomIdx];
    } else {
        state.activeCharId = mode;
    }

    renderCharacterSelectorBar();
    updateCompanionDisplay('idle', null, true);
    if (window.soundEngine) window.soundEngine.playCharacterSummon(state.activeCharId);
}

function rotateCharacterIfNeeded() {
    if (state.selectedCharMode === 'random') {
        const others = CHARACTER_ORDER.filter(id => id !== state.activeCharId);
        state.activeCharId = others[Math.floor(Math.random() * others.length)];
    } else {
        state.activeCharId = state.selectedCharMode;
    }
}

function updateCompanionDisplay(moodType = 'idle', extra = null, animateSummon = false) {
    if (!window.JOJO_CHARACTERS) return;
    const charObj = window.JOJO_CHARACTERS[state.activeCharId] || window.JOJO_CHARACTERS.jotaro;

    const banner = document.getElementById('mascot-banner');
    const avatarContainer = document.getElementById('mascot-avatar-svg');
    const nameEl = document.getElementById('mascot-char-name');
    const standEl = document.getElementById('mascot-stand-name');
    const moodBadge = document.getElementById('mascot-mood');
    const statsPill = document.getElementById('mascot-stats-pill');
    const speechEl = document.getElementById('mascot-speech-text');

    if (banner) {
        banner.style.setProperty('--char-accent', charObj.accent);
        if (animateSummon || state.selectedCharMode === 'random') {
            banner.classList.remove('char-summon-anim');
            void banner.offsetWidth;
            banner.classList.add('char-summon-anim');
        }
    }
    if (avatarContainer) avatarContainer.innerHTML = charObj.svg;
    if (nameEl) nameEl.textContent = charObj.name;
    if (standEl) {
        standEl.textContent = `• ${charObj.stand}`;
        standEl.style.color = charObj.accent;
    }
    if (statsPill) statsPill.textContent = charObj.stats;

    if (moodType === 'idle') {
        if (moodBadge) moodBadge.textContent = charObj.part;
        if (speechEl) speechEl.textContent = charObj.quotes.idle;
    } else if (moodType === 'correct') {
        if (moodBadge) moodBadge.textContent = 'Đòn đánh chuẩn xác! ⭐';
        const list = charObj.quotes.correct;
        if (speechEl) speechEl.textContent = list[Math.floor(Math.random() * list.length)];
    } else if (moodType === 'wrong') {
        if (moodBadge) moodBadge.textContent = 'Cần xem lại định nghĩa 📖';
        const list = charObj.quotes.wrong;
        if (speechEl) speechEl.textContent = list[Math.floor(Math.random() * list.length)];
    } else if (moodType === 'streak') {
        if (moodBadge) moodBadge.textContent = `COMBO x${extra}!! 🔥`;
        if (speechEl) speechEl.textContent = charObj.quotes.streak;
    }
}

// ==========================================================================
// JoJo Scene Transition Curtain & Question Slide Animations
// ==========================================================================

let sceneTransitionTimeout = null;

function triggerSceneTransition(subTitle = '★ JOJO STAND EYECATCH ★', mainTitle = 'CHUYỂN CẢNH • ゴゴゴ', customCharId = null) {
    if (window.soundEngine) {
        window.soundEngine.playTabTransition();
    }

    const overlay = document.getElementById('scene-transition-overlay');
    const avatarEl = document.getElementById('scene-wipe-avatar');
    const subEl = document.getElementById('scene-wipe-sub');
    const titleEl = document.getElementById('scene-wipe-title');
    if (!overlay) return;

    const cId = customCharId || state.activeCharId || 'jotaro';
    const charObj = (window.JOJO_CHARACTERS && window.JOJO_CHARACTERS[cId]) ? window.JOJO_CHARACTERS[cId] : null;
    if (avatarEl && charObj) {
        avatarEl.innerHTML = charObj.svg;
    }
    if (subEl) subEl.textContent = subTitle;
    if (titleEl) titleEl.textContent = mainTitle;

    if (sceneTransitionTimeout) clearTimeout(sceneTransitionTimeout);
    overlay.classList.remove('active');
    void overlay.offsetWidth;
    overlay.classList.add('active');

    sceneTransitionTimeout = setTimeout(() => {
        overlay.classList.remove('active');
    }, 580);
}

function animateQuestionCard(cardId, direction = 'next') {
    const card = document.getElementById(cardId);
    if (!card) return;

    card.classList.remove('q-slide-next', 'q-slide-prev');
    void card.offsetWidth;
    card.classList.add(direction === 'prev' ? 'q-slide-prev' : 'q-slide-next');
}

// ==========================================================================
// Gentle Action Popup Badge
// ==========================================================================

function spawnJoJoSfx(text) {
    const el = document.createElement('div');
    el.className = 'jojo-sfx-popup';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
    }, 900);
}

// ==========================================================================
// Volume & Audio Controls
// ==========================================================================

function initVolumeUI() {
    const vol = window.soundEngine ? window.soundEngine.volume : 0.75;
    const volPct = Math.round(vol * 100);
    state.lastNonZeroVolume = vol > 0 ? vol : 0.75;

    const slider = document.getElementById('volume-slider');
    const label = document.getElementById('vol-percentage');
    if (slider) slider.value = volPct;
    if (label) label.textContent = `${volPct}%`;

    updateVolumeIcon(volPct);
}

function handleVolumeChange(val) {
    const num = parseInt(val);
    const volFraction = num / 100;

    if (window.soundEngine) {
        window.soundEngine.setVolume(volFraction);
        window.soundEngine.playVolumeTest();
    }

    if (num > 0) state.lastNonZeroVolume = volFraction;

    const label = document.getElementById('vol-percentage');
    if (label) label.textContent = `${num}%`;

    updateVolumeIcon(num);
}

function toggleMute() {
    if (!window.soundEngine) return;

    const currentVol = window.soundEngine.volume;
    const slider = document.getElementById('volume-slider');
    const label = document.getElementById('vol-percentage');

    if (currentVol > 0 && window.soundEngine.enabled) {
        state.lastNonZeroVolume = currentVol;
        window.soundEngine.setVolume(0);
        if (slider) slider.value = 0;
        if (label) label.textContent = '0%';
        updateVolumeIcon(0);
    } else {
        const restoreVol = state.lastNonZeroVolume > 0 ? state.lastNonZeroVolume : 0.75;
        window.soundEngine.setVolume(restoreVol);
        const restorePct = Math.round(restoreVol * 100);
        if (slider) slider.value = restorePct;
        if (label) label.textContent = `${restorePct}%`;
        updateVolumeIcon(restorePct);
        window.soundEngine.playVolumeTest();
    }
}

function updateVolumeIcon(pct) {
    const iconEl = document.getElementById('sound-icon');
    if (!iconEl) return;

    if (pct === 0) iconEl.textContent = '🔇';
    else if (pct < 35) iconEl.textContent = '🔈';
    else if (pct < 75) iconEl.textContent = '🔉';
    else iconEl.textContent = '🔊';
}

// ==========================================================================
// Tabs Navigation
// ==========================================================================

const TAB_TITLES = {
    practice:  { sub: '★ STAND TRAINING ARENA ★', title: 'LUYỆN TẬP 400 CÂU • ゴゴゴ', charId: null },
    exam:      { sub: '★ STARDUST CRUSADERS EXAM ★', title: 'ĐẤU TRƯỜNG TÍNH GIỜ ⏱️', charId: 'dio' },
    chapters:  { sub: '★ 8 PARTS ADVENTURE ★', title: '8 CHƯƠNG XỬ LÝ ẢNH 📚', charId: 'giorno' },
    bookmarks: { sub: '★ JOESTAR TARGET LIST ★', title: 'CÂU ĐÃ LƯU & CÂU SAI 🎯', charId: 'josuke' },
    search:    { sub: '★ HERMIT PURPLE DIVINATION ★', title: 'TRA CỨU KHO 400 CÂU 🔍', charId: 'joseph' },
    glossary:  { sub: '★ ROHAN KISHIBE ARCHIVE ★', title: 'SỔ TAY HEAVEN\'S DOOR 📖', charId: 'rohan' }
};

function switchTab(tabId, skipSceneWipe = false) {
    if (state.exam.active && tabId !== 'exam') {
        if (!confirm('Bạn đang trong bài thi thử tính giờ! Rời đi sẽ tạm dừng bài thi. Tiếp tục?')) {
            return;
        }
    }

    const isChangingTab = state.activeTab !== tabId;
    state.activeTab = tabId;

    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tabId}`);
    });

    if (tabId === 'bookmarks') {
        renderBookmarksTab();
    } else if (tabId === 'practice') {
        renderPracticeQuestion();
        renderPracticeMatrix();
    }

    if (!skipSceneWipe && isChangingTab) {
        const info = TAB_TITLES[tabId] || { sub: '★ JOJO XLA ★', title: 'CHUYỂN CẢNH • ゴゴゴ', charId: null };
        triggerSceneTransition(info.sub, info.title, info.charId);
    } else if (window.soundEngine) {
        window.soundEngine.playClick();
    }
}

// ==========================================================================
// Practice Mode Logic
// ==========================================================================

function initPractice(filter = 'all', questionsSubset = null) {
    state.practice.filter = filter;
    if (questionsSubset) {
        state.practice.list = [...questionsSubset];
    } else {
        state.practice.list = [...state.allQuestions];
    }

    state.practice.currentIndex = 0;
    renderPracticeQuestion();
    renderPracticeMatrix();
}

function renderPracticeQuestion() {
    const list = state.practice.list;
    if (!list || list.length === 0) {
        document.getElementById('p-q-title').innerHTML = '<span style="color:var(--text-muted)">Không có câu hỏi nào trong danh mục này.</span>';
        document.getElementById('p-options-list').innerHTML = '';
        document.getElementById('p-explanation-card').classList.remove('show');
        return;
    }

    const idx = state.practice.currentIndex;
    const q = list[idx];

    document.getElementById('p-chapter-tag').textContent = q.chapterName || `Part ${q.chapterId}`;
    document.getElementById('p-q-number').textContent = `Câu ${idx + 1} / ${list.length} (Mã gốc: Câu ${q.id})`;

    const totalAnswered = Object.keys(state.practice.answeredMap).length;
    document.getElementById('p-q-answered-count').textContent = `Đã làm: ${totalAnswered} / ${state.allQuestions.length}`;

    const progressPct = ((idx + 1) / list.length) * 100;
    document.getElementById('p-progress-bar').style.width = `${progressPct}%`;

    const isStarred = state.bookmarks.has(q.id);
    const starIcon = document.getElementById('p-star-icon');
    const starBtn = document.getElementById('p-star-btn');
    if (starIcon) starIcon.textContent = isStarred ? '★' : '☆';
    if (starBtn) starBtn.classList.toggle('active', isStarred);

    document.getElementById('p-q-title').textContent = q.question;

    const optList = document.getElementById('p-options-list');
    optList.innerHTML = '';

    const answeredInfo = state.practice.answeredMap[q.id];

    ['A', 'B', 'C', 'D'].forEach(optKey => {
        if (!q.options[optKey]) return;

        const optDiv = document.createElement('div');
        optDiv.className = 'option-item';
        optDiv.dataset.opt = optKey;

        if (answeredInfo) {
            optDiv.classList.add('locked');
            if (optKey === q.answer) {
                optDiv.classList.add('correct');
            } else if (optKey === answeredInfo.selected) {
                optDiv.classList.add('wrong');
            } else {
                optDiv.classList.add('dimmed');
            }
        } else {
            optDiv.onclick = () => selectPracticeAnswer(q, optKey);
        }

        optDiv.innerHTML = `
            <div class="option-badge">${optKey}</div>
            <div class="option-text">${q.options[optKey]}</div>
        `;
        optList.appendChild(optDiv);
    });

    const expCard = document.getElementById('p-explanation-card');
    const expText = document.getElementById('p-explanation-text');
    if (answeredInfo) {
        expCard.classList.add('show');
        expText.innerHTML = `
            <p><strong>Đáp án đúng: [${q.answer}]</strong> — ${q.options[q.answer]}</p>
            <p style="margin-top: 0.35rem; color: var(--text-secondary);">${q.explanation || ''}</p>
        `;
    } else {
        expCard.classList.remove('show');
    }

    document.getElementById('p-prev-btn').disabled = idx === 0;
    document.getElementById('p-next-btn').disabled = idx === list.length - 1;

    highlightCurrentMatrixBtn();
}

function selectPracticeAnswer(q, selectedOpt) {
    if (state.practice.answeredMap[q.id]) return;

    const isCorrect = selectedOpt === q.answer;
    state.practice.answeredMap[q.id] = {
        selected: selectedOpt,
        isCorrect: isCorrect
    };

    rotateCharacterIfNeeded();

    if (isCorrect) {
        state.practice.streak++;

        if (state.practice.streak > 1 && state.practice.streak % 5 === 0) {
            window.soundEngine.playStreak();
            triggerConfetti();
            spawnJoJoSfx(`COMBO x${state.practice.streak}!! 🎹🔥`);
            updateCompanionDisplay('streak', state.practice.streak);
        } else {
            window.soundEngine.playCorrect();
            const cries = ['ORA ORA!! 👊⭐', 'DI MOLTO!! 🐞✨', 'GURETO DAZE!! 💎', 'NICEU!! 👍✨'];
            spawnJoJoSfx(cries[Math.floor(Math.random() * cries.length)]);
            updateCompanionDisplay('correct');
        }

        state.wrongQuestions.delete(q.id);
    } else {
        state.practice.streak = 0;
        window.soundEngine.playWrong();
        const wrongCries = ['ZA WARUDO!! ⏱️', 'OH MY GOD!! 😱', 'YARE YARE... ⭐'];
        spawnJoJoSfx(wrongCries[Math.floor(Math.random() * wrongCries.length)]);
        state.wrongQuestions.add(q.id);
        updateCompanionDisplay('wrong');
    }

    saveState();
    updateHeaderStats();
    renderPracticeQuestion();
    renderPracticeMatrix();

    if (isCorrect && state.practice.autoNext) {
        setTimeout(() => {
            if (state.practice.currentIndex < state.practice.list.length - 1) {
                nextPracticeQuestion();
            }
        }, 1150);
    }
}

function prevPracticeQuestion() {
    if (state.practice.currentIndex > 0) {
        state.practice.currentIndex--;
        renderPracticeQuestion();
        animateQuestionCard('practice-question-card', 'prev');
        if (window.soundEngine) window.soundEngine.playQuestionSlide('prev');
    }
}

function nextPracticeQuestion() {
    if (state.practice.currentIndex < state.practice.list.length - 1) {
        state.practice.currentIndex++;
        renderPracticeQuestion();
        animateQuestionCard('practice-question-card', 'next');
        if (window.soundEngine) window.soundEngine.playQuestionSlide('next');
    }
}

function toggleShufflePractice() {
    state.practice.isShuffled = !state.practice.isShuffled;
    const btn = document.getElementById('p-shuffle-btn');
    if (btn) btn.classList.toggle('active', state.practice.isShuffled);

    if (state.practice.isShuffled) {
        state.practice.list.sort(() => Math.random() - 0.5);
    } else {
        state.practice.list.sort((a, b) => a.id - b.id);
    }
    state.practice.currentIndex = 0;
    renderPracticeQuestion();
    renderPracticeMatrix();
    animateQuestionCard('practice-question-card', 'next');
    if (window.soundEngine) window.soundEngine.playQuestionSlide('next');
}

function toggleCurrentBookmark() {
    const q = state.practice.list[state.practice.currentIndex];
    if (!q) return;

    if (state.bookmarks.has(q.id)) {
        state.bookmarks.delete(q.id);
    } else {
        state.bookmarks.add(q.id);
    }
    saveState();
    updateBookmarksUI();
    renderPracticeQuestion();
    renderPracticeMatrix();
    window.soundEngine.playClick();
}

function readCurrentQuestion() {
    const q = state.practice.list[state.practice.currentIndex];
    if (!q) return;

    if (window.soundEngine.isSpeaking()) {
        window.soundEngine.stopSpeech();
        return;
    }

    let speechText = `Câu hỏi: ${q.question}. `;
    ['A', 'B', 'C', 'D'].forEach(key => {
        if (q.options[key]) {
            speechText += `Phương án ${key}: ${q.options[key]}. `;
        }
    });

    window.soundEngine.speak(speechText);
}

// ==========================================================================
// Question Matrix Palette
// ==========================================================================

function renderPracticeMatrix() {
    const grid = document.getElementById('practice-matrix-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filter = document.getElementById('matrix-filter') ? document.getElementById('matrix-filter').value : 'all';
    const list = state.practice.list;

    list.forEach((q, idx) => {
        const ans = state.practice.answeredMap[q.id];
        const isStarred = state.bookmarks.has(q.id);

        if (filter === 'unanswered' && ans) return;
        if (filter === 'correct' && (!ans || !ans.isCorrect)) return;
        if (filter === 'wrong' && (!ans || ans.isCorrect)) return;
        if (filter === 'starred' && !isStarred) return;

        const btn = document.createElement('button');
        btn.className = 'matrix-btn';
        btn.textContent = idx + 1;
        btn.id = `matrix-btn-${idx}`;

        if (idx === state.practice.currentIndex) btn.classList.add('current');
        if (ans) btn.classList.add(ans.isCorrect ? 'correct' : 'wrong');
        if (isStarred) btn.classList.add('flagged');

        btn.onclick = () => {
            const dir = idx >= state.practice.currentIndex ? 'next' : 'prev';
            state.practice.currentIndex = idx;
            renderPracticeQuestion();
            animateQuestionCard('practice-question-card', dir);
            if (window.soundEngine) window.soundEngine.playQuestionSlide(dir);
        };

        grid.appendChild(btn);
    });
}

function highlightCurrentMatrixBtn() {
    document.querySelectorAll('.matrix-btn').forEach(btn => btn.classList.remove('current'));
    const currentBtn = document.getElementById(`matrix-btn-${state.practice.currentIndex}`);
    if (currentBtn) {
        currentBtn.classList.add('current');
        currentBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function filterMatrix() {
    renderPracticeMatrix();
}

// ==========================================================================
// Exam Mode (Thi Thử Tính Giờ)
// ==========================================================================

function selectExamPreset(cardElement) {
    document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
    state.exam.preset = {
        count: parseInt(cardElement.dataset.q),
        minutes: parseInt(cardElement.dataset.time)
    };
    window.soundEngine.playClick();
}

function startExam() {
    const { count, minutes } = state.exam.preset;
    const shuffled = [...state.allQuestions].sort(() => Math.random() - 0.5);
    state.exam.questions = shuffled.slice(0, Math.min(count, shuffled.length));
    state.exam.answers = {};
    state.exam.flagged = new Set();
    state.exam.currentIndex = 0;
    state.exam.timeRemaining = minutes * 60;
    state.exam.active = true;
    state.exam.isReviewMode = false;

    document.getElementById('exam-setup-view').style.display = 'none';
    document.getElementById('exam-active-view').style.display = 'block';
    document.getElementById('exam-result-view').style.display = 'none';

    startExamTimer();
    renderExamQuestion();
    renderExamMatrix();
    triggerSceneTransition('★ STARDUST CRUSADERS EXAM ★', `BẮT ĐẦU THI ${count} CÂU (${minutes} PHÚT)!`, 'jotaro');
}

function startExamTimer() {
    if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);

    updateTimerDisplay();
    state.exam.timerInterval = setInterval(() => {
        state.exam.timeRemaining--;
        updateTimerDisplay();

        if (state.exam.timeRemaining <= 0) {
            clearInterval(state.exam.timerInterval);
            alert('Hết giờ làm bài! Hệ thống sẽ tự động thu bài và chấm điểm.');
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerText = document.getElementById('exam-timer-text');
    const timerBox = document.getElementById('exam-timer-box');
    if (!timerText) return;

    const m = Math.floor(state.exam.timeRemaining / 60);
    const s = state.exam.timeRemaining % 60;
    timerText.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

    if (state.exam.timeRemaining < 300) {
        timerBox.classList.add('warning');
    } else {
        timerBox.classList.remove('warning');
    }
}

function renderExamQuestion() {
    const list = state.exam.questions;
    const idx = state.exam.currentIndex;
    const q = list[idx];

    document.getElementById('e-chapter-tag').textContent = q.chapterName || `Part ${q.chapterId}`;
    document.getElementById('e-q-number').textContent = `Câu ${idx + 1} / ${list.length}`;

    const answeredCount = Object.keys(state.exam.answers).length;
    document.getElementById('e-q-answered-count').textContent = `Đã chọn: ${answeredCount} / ${list.length}`;

    const progressPct = ((idx + 1) / list.length) * 100;
    document.getElementById('e-progress-bar').style.width = `${progressPct}%`;

    const isFlagged = state.exam.flagged.has(idx);
    document.getElementById('e-star-icon').textContent = isFlagged ? '★' : '☆';
    document.getElementById('e-star-btn').classList.toggle('active', isFlagged);

    document.getElementById('e-q-title').textContent = q.question;

    const optList = document.getElementById('e-options-list');
    optList.innerHTML = '';

    const selectedOpt = state.exam.answers[idx];

    ['A', 'B', 'C', 'D'].forEach(optKey => {
        if (!q.options[optKey]) return;

        const optDiv = document.createElement('div');
        optDiv.className = 'option-item';

        if (state.exam.isReviewMode) {
            optDiv.classList.add('locked');
            if (optKey === q.answer) {
                optDiv.classList.add('correct');
            } else if (optKey === selectedOpt) {
                optDiv.classList.add('wrong');
            } else {
                optDiv.classList.add('dimmed');
            }
        } else {
            if (selectedOpt === optKey) optDiv.classList.add('selected');
            optDiv.onclick = () => selectExamAnswer(idx, optKey);
        }

        optDiv.innerHTML = `
            <div class="option-badge">${optKey}</div>
            <div class="option-text">${q.options[optKey]}</div>
        `;
        optList.appendChild(optDiv);
    });

    renderExamMatrix();
}

function selectExamAnswer(qIdx, optKey) {
    if (state.exam.isReviewMode) return;
    state.exam.answers[qIdx] = optKey;
    renderExamQuestion();
    window.soundEngine.playClick();
}

function prevExamQuestion() {
    if (state.exam.currentIndex > 0) {
        state.exam.currentIndex--;
        renderExamQuestion();
        animateQuestionCard('exam-question-card', 'prev');
        if (window.soundEngine) window.soundEngine.playQuestionSlide('prev');
    }
}

function nextExamQuestion() {
    if (state.exam.currentIndex < state.exam.questions.length - 1) {
        state.exam.currentIndex++;
        renderExamQuestion();
        animateQuestionCard('exam-question-card', 'next');
        if (window.soundEngine) window.soundEngine.playQuestionSlide('next');
    }
}

function toggleExamCurrentBookmark() {
    const idx = state.exam.currentIndex;
    if (state.exam.flagged.has(idx)) {
        state.exam.flagged.delete(idx);
    } else {
        state.exam.flagged.add(idx);
    }
    renderExamQuestion();
    window.soundEngine.playClick();
}

function renderExamMatrix() {
    const grid = document.getElementById('exam-matrix-grid');
    if (!grid) return;
    grid.innerHTML = '';

    state.exam.questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'matrix-btn';
        btn.textContent = idx + 1;

        if (idx === state.exam.currentIndex) btn.classList.add('current');

        if (state.exam.isReviewMode) {
            const userPick = state.exam.answers[idx];
            if (userPick === q.answer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        } else {
            if (state.exam.answers[idx]) btn.classList.add('answered');
        }

        if (state.exam.flagged.has(idx)) btn.classList.add('flagged');

        btn.onclick = () => {
            state.exam.currentIndex = idx;
            renderExamQuestion();
            window.soundEngine.playClick();
        };

        grid.appendChild(btn);
    });
}

function confirmSubmitExam() {
    const answeredCount = Object.keys(state.exam.answers).length;
    const total = state.exam.questions.length;
    const unanswered = total - answeredCount;

    let msg = `Bạn đã làm ${answeredCount}/${total} câu.`;
    if (unanswered > 0) msg += ` Còn ${unanswered} câu chưa chọn đáp án!`;
    msg += ' Bạn có chắc chắn muốn nộp bài ngay không?';

    if (confirm(msg)) finishExam();
}

function finishExam() {
    clearInterval(state.exam.timerInterval);
    state.exam.active = false;

    let correctCount = 0;
    state.exam.questions.forEach((q, idx) => {
        const userPick = state.exam.answers[idx];
        if (userPick === q.answer) {
            correctCount++;
        } else {
            state.wrongQuestions.add(q.id);
        }
    });

    const total = state.exam.questions.length;
    const score = ((correctCount / total) * 10).toFixed(1);
    const timeSpentSec = (state.exam.preset.minutes * 60) - state.exam.timeRemaining;
    const m = Math.floor(timeSpentSec / 60);
    const s = timeSpentSec % 60;
    const timeFormatted = `${m}p ${s.toString().padStart(2, '0')}s`;

    state.exam.stats = {
        correct: correctCount,
        wrong: total - correctCount,
        score: score,
        time: timeFormatted
    };

    saveState();
    updateBookmarksUI();

    document.getElementById('exam-active-view').style.display = 'none';
    document.getElementById('exam-result-view').style.display = 'block';

    document.getElementById('res-score-num').textContent = score;
    document.getElementById('res-stat-correct').textContent = correctCount;
    document.getElementById('res-stat-wrong').textContent = total - correctCount;
    document.getElementById('res-stat-time').textContent = timeFormatted;

    const badge = document.getElementById('res-badge');
    const scoreVal = parseFloat(score);
    if (scoreVal >= 9.0) {
        badge.className = 'result-badge excellent';
        badge.textContent = 'S-RANK: GOLD EXPERIENCE REQUIEM 🏆';
    } else if (scoreVal >= 8.0) {
        badge.className = 'result-badge good';
        badge.textContent = 'A-RANK: STAR PLATINUM ⭐';
    } else if (scoreVal >= 6.5) {
        badge.className = 'result-badge average';
        badge.textContent = 'B-RANK: CRAZY DIAMOND 💎';
    } else {
        badge.className = 'result-badge poor';
        badge.textContent = 'CẦN ÔN TẬP THÊM CÁC CÂU SAI! 💪';
    }

    spawnJoJoSfx('◄ TO BE CONTINUED...');
    window.soundEngine.playVictory();
    triggerConfetti();
}

function reviewExamAnswers() {
    state.exam.isReviewMode = true;
    state.exam.currentIndex = 0;

    document.getElementById('exam-result-view').style.display = 'none';
    document.getElementById('exam-active-view').style.display = 'block';

    renderExamQuestion();
    renderExamMatrix();
    window.soundEngine.playClick();
}

function restartSameExam() {
    state.exam.answers = {};
    state.exam.flagged = new Set();
    state.exam.currentIndex = 0;
    state.exam.timeRemaining = state.exam.preset.minutes * 60;
    state.exam.active = true;
    state.exam.isReviewMode = false;

    document.getElementById('exam-result-view').style.display = 'none';
    document.getElementById('exam-active-view').style.display = 'block';

    startExamTimer();
    renderExamQuestion();
    renderExamMatrix();
    window.soundEngine.playClick();
}

function backToExamSetup() {
    clearInterval(state.exam.timerInterval);
    state.exam.active = false;
    state.exam.isReviewMode = false;

    document.getElementById('exam-setup-view').style.display = 'block';
    document.getElementById('exam-active-view').style.display = 'none';
    document.getElementById('exam-result-view').style.display = 'none';
    window.soundEngine.playClick();
}

function confirmExitExam() {
    if (confirm('Bạn có muốn thoát bài thi hiện tại và quay lại màn hình chọn đề không?')) {
        backToExamSetup();
    }
}

// ==========================================================================
// Chapters Tab (8 Parts with Character Guardians)
// ==========================================================================

const CHAPTER_DEFS = [
    { id: 1, charId: 'joseph', name: 'Part 1: Tổng quan & Khái niệm cơ bản', desc: 'Nhiễu ngẫu nhiên, hệ thống, mức xám, số hóa, điểm ảnh, biến dạng ảnh.' },
    { id: 2, charId: 'josuke', name: 'Part 2: Thu nhận & Biểu diễn màu, Định dạng ảnh', desc: 'Mô hình RGB, CMY, HSV, HSL, Vector, Raster, Bayer, 3-CCD, BMP, RAW, TIFF, PCX.' },
    { id: 3, charId: 'giorno', name: 'Part 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh', desc: 'Lọc trung bình, trung vị, Wiener, đảo, Dãn độ tương phản, Histogram, Phép nhân chập.' },
    { id: 4, charId: 'jotaro', name: 'Part 4: Phát hiện biên & Hình thái học ảnh', desc: 'Gradient, Sobel, Prewitt, Canny, Laplace, Co/Giãn/Mở/Đóng, Trích biên.' },
    { id: 5, charId: 'rohan', name: 'Part 5: Phân vùng ảnh (Segmentation)', desc: 'Ngưỡng, Đẳng điệu, Tam giác, Đối xứng nền, Texture, Tách/Hợp vùng, Phát triển vùng.' },
    { id: 6, charId: 'dio', name: 'Part 6: Nhận dạng ảnh & Phân lớp', desc: 'Có giám sát, Không giám sát, K-means, KNN, ISODATA, Hopfield, Kohonen.' },
    { id: 7, charId: 'giorno', name: 'Part 7: Nén dữ liệu ảnh & Chuẩn JPEG', desc: 'RLE, Huffman, LZW, JPEG DCT, Quét Zig-Zag, Kim tự tháp, Fractal.' },
    { id: 8, charId: 'jotaro', name: 'Part 8: Chuẩn đầu ra & Tác phong học tập', desc: '10 câu hỏi chuẩn mực thái độ, giờ giảng, tự đánh giá và tích lũy kiến thức học phần.' }
];

function renderChapters() {
    const container = document.getElementById('chapters-grid-container');
    if (!container) return;
    container.innerHTML = '';

    CHAPTER_DEFS.forEach(ch => {
        const chQuestions = state.allQuestions.filter(q => q.chapterId === ch.id);
        const answeredInCh = chQuestions.filter(q => state.practice.answeredMap[q.id]);
        const correctInCh = answeredInCh.filter(q => state.practice.answeredMap[q.id].isCorrect);
        const pct = chQuestions.length > 0 ? Math.round((correctInCh.length / chQuestions.length) * 100) : 0;

        const charObj = window.JOJO_CHARACTERS ? window.JOJO_CHARACTERS[ch.charId] : null;
        const guardianHtml = charObj ? `
            <div class="chapter-guardian">
                <div class="chapter-guardian-avatar">${charObj.svg}</div>
                <span>Đồng hành: <strong style="color:${charObj.accent}">${charObj.name}</strong> • ${charObj.stand}</span>
            </div>
        ` : '';

        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="chapter-card-header">
                <span class="chapter-number">★ JOJO PART ${ch.id}</span>
                <span class="chapter-qcount">${chQuestions.length} câu hỏi</span>
            </div>
            <div class="chapter-title">${ch.name}</div>
            <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">${ch.desc}</p>
            ${guardianHtml}
            
            <div style="margin-top: 0.25rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.76rem; font-weight:700; color:var(--text-secondary); margin-bottom:4px;">
                    <span>Tiến độ hoàn thành</span>
                    <span style="color:var(--gold);">${correctInCh.length}/${chQuestions.length} (${pct}%)</span>
                </div>
                <div class="progress-strip" style="margin-bottom:0.5rem; height:6px;">
                    <div class="progress-bar-fill" style="width:${pct}%"></div>
                </div>
            </div>

            <div class="chapter-footer">
                <button class="btn btn-primary btn-sm" onclick="practiceChapter(${ch.id}, '${ch.charId}')">
                    👊 Ôn tập chương này
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function practiceChapter(chId, guardianCharId) {
    const chQuestions = state.allQuestions.filter(q => q.chapterId === chId);
    if (guardianCharId && window.JOJO_CHARACTERS && window.JOJO_CHARACTERS[guardianCharId]) {
        state.activeCharId = guardianCharId;
        updateCompanionDisplay('idle', null, true);
    }
    initPractice(`chapter-${chId}`, chQuestions);
    switchTab('practice', true);
    triggerSceneTransition(`★ JOJO PART ${chId} ★`, `ÔN TẬP CHƯƠNG ${chId} (${chQuestions.length} CÂU)`, guardianCharId);
}

// ==========================================================================
// Bookmarks Tab
// ==========================================================================

function renderBookmarksTab() {
    const starContainer = document.getElementById('starred-questions-list');
    const starList = state.allQuestions.filter(q => state.bookmarks.has(q.id));
    document.getElementById('starred-count-val').textContent = starList.length;

    if (starList.length === 0) {
        starContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Chưa có câu hỏi nào được gắn Ngôi Sao.</p>';
    } else {
        starContainer.innerHTML = '';
        starList.forEach(q => {
            const item = createQuestionSummaryItem(q);
            starContainer.appendChild(item);
        });
    }

    const wrongContainer = document.getElementById('wrong-questions-list');
    const wrongList = state.allQuestions.filter(q => state.wrongQuestions.has(q.id));
    document.getElementById('wrong-count-val').textContent = wrongList.length;

    if (wrongList.length === 0) {
        wrongContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Tuyệt vời! Bạn chưa có câu hỏi nào làm sai!</p>';
    } else {
        wrongContainer.innerHTML = '';
        wrongList.forEach(q => {
            const item = createQuestionSummaryItem(q);
            wrongContainer.appendChild(item);
        });
    }
}

function createQuestionSummaryItem(q) {
    const div = document.createElement('div');
    div.style.cssText = 'background:var(--bg-surface); border:1px solid var(--border-color); border-radius:8px; padding:0.75rem 1rem; display:flex; justify-content:space-between; align-items:center; gap:0.75rem; cursor:pointer;';
    div.innerHTML = `
        <div style="flex:1; min-width:0;">
            <div style="font-size:0.75rem; color:var(--gold); font-weight:700;">Câu ${q.id} • ${q.chapterName}</div>
            <div style="font-size:0.92rem; font-weight:600; color:var(--text-primary); margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${q.question}</div>
        </div>
        <button class="btn btn-secondary btn-sm" style="flex-shrink:0;">Xem câu</button>
    `;
    div.onclick = () => {
        initPractice('single', [q]);
        switchTab('practice');
    };
    return div;
}

function practiceFilterQuestions(filterType) {
    let subset = [];
    if (filterType === 'wrong') {
        subset = state.allQuestions.filter(q => state.wrongQuestions.has(q.id));
        if (subset.length === 0) {
            alert('Tuyệt vời! Bạn chưa có câu nào làm sai!');
            return;
        }
    } else if (filterType === 'starred') {
        subset = state.allQuestions.filter(q => state.bookmarks.has(q.id));
        if (subset.length === 0) {
            alert('Bạn chưa gắn sao câu hỏi nào!');
            return;
        }
    }

    initPractice(filterType, subset);
    switchTab('practice');
}

function updateBookmarksUI() {
    const badge = document.getElementById('bookmark-badge');
    if (badge) {
        const count = state.bookmarks.size + state.wrongQuestions.size;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

// ==========================================================================
// Search Bank Tab
// ==========================================================================

let searchKeyword = '';
let searchChapterId = 'all';

function renderSearchBank() {
    const container = document.getElementById('search-results-list');
    if (!container) return;

    let filtered = state.allQuestions.filter(q => {
        const matchChap = searchChapterId === 'all' || q.chapterId.toString() === searchChapterId;
        if (!matchChap) return false;

        if (!searchKeyword) return true;
        const kw = searchKeyword.toLowerCase();
        const textToSearch = `câu ${q.id} ${q.question} ${Object.values(q.options).join(' ')} ${q.explanation}`.toLowerCase();
        return textToSearch.includes(kw);
    });

    document.getElementById('search-result-count').textContent = filtered.length;
    container.innerHTML = '';

    filtered.slice(0, 100).forEach(q => {
        const card = document.createElement('div');
        card.className = 'question-card anime-card';
        card.style.padding = '1.25rem';

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                <span class="chapter-tag" style="font-size:0.75rem;">Câu ${q.id} • ${q.chapterName}</span>
                <button class="btn btn-secondary btn-sm" onclick="practiceSingleQuestion(${q.id})">👊 Luyện câu này</button>
            </div>
            <div style="font-size:1.08rem; font-weight:700; margin-bottom:0.85rem; color:var(--text-primary);">${q.question}</div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.55rem; margin-bottom:0.85rem; font-size:0.92rem; font-weight:500;">
                <div style="padding:0.55rem 0.8rem; border-radius:8px; background:${q.answer === 'A' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:1.5px solid ${q.answer === 'A' ? 'var(--success)' : 'var(--border-color)'};">
                    <strong>A.</strong> ${q.options.A || ''}
                </div>
                <div style="padding:0.55rem 0.8rem; border-radius:8px; background:${q.answer === 'B' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:1.5px solid ${q.answer === 'B' ? 'var(--success)' : 'var(--border-color)'};">
                    <strong>B.</strong> ${q.options.B || ''}
                </div>
                <div style="padding:0.55rem 0.8rem; border-radius:8px; background:${q.answer === 'C' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:1.5px solid ${q.answer === 'C' ? 'var(--success)' : 'var(--border-color)'};">
                    <strong>C.</strong> ${q.options.C || ''}
                </div>
                <div style="padding:0.55rem 0.8rem; border-radius:8px; background:${q.answer === 'D' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:1.5px solid ${q.answer === 'D' ? 'var(--success)' : 'var(--border-color)'};">
                    <strong>D.</strong> ${q.options.D || ''}
                </div>
            </div>

            <div style="font-size:0.88rem; color:var(--text-secondary); background:rgba(16, 185, 129, 0.08); padding:0.65rem 0.9rem; border-radius:8px; border-left:3px solid #10b981;">
                📖 <strong style="color:#10b981;">『Heaven's Door』:</strong> ${q.explanation}
            </div>
        `;
        container.appendChild(card);
    });

    if (filtered.length > 100) {
        const moreNote = document.createElement('div');
        moreNote.style.textAlign = 'center';
        moreNote.style.color = 'var(--text-muted)';
        moreNote.style.padding = '1rem';
        moreNote.textContent = `(Đang hiển thị 100 / ${filtered.length} câu phù hợp. Hãy nhập từ khóa cụ thể hơn)`;
        container.appendChild(moreNote);
    }
}

function handleBankSearch(val) {
    searchKeyword = val.trim();
    renderSearchBank();
}

function handleBankChapterFilter(val) {
    searchChapterId = val;
    renderSearchBank();
}

function practiceSingleQuestion(qId) {
    const q = state.allQuestions.find(item => item.id === qId);
    if (q) {
        initPractice('single', [q]);
        switchTab('practice');
    }
}

// ==========================================================================
// Glossary Tab
// ==========================================================================

let glossaryKeyword = '';

function renderGlossary() {
    const container = document.getElementById('glossary-grid-container');
    if (!container || !window.GLOSSARY_DATA) return;

    let filtered = window.GLOSSARY_DATA;
    if (glossaryKeyword) {
        const kw = glossaryKeyword.toLowerCase();
        filtered = filtered.filter(item => 
            item.concept.toLowerCase().includes(kw) || 
            item.definition.toLowerCase().includes(kw)
        );
    }

    document.getElementById('glossary-count').textContent = filtered.length;
    container.innerHTML = '';

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'glossary-card';
        card.innerHTML = `
            <div class="glossary-term">
                <span>★ ${item.concept}</span>
                <button class="icon-btn btn-sm" title="Tìm câu hỏi liên quan" onclick="searchRelatedQuestion('${item.concept}')">
                    <span>🔍</span>
                </button>
            </div>
            <div class="glossary-def">${item.definition}</div>
        `;
        container.appendChild(card);
    });
}

function handleGlossarySearch(val) {
    glossaryKeyword = val.trim();
    renderGlossary();
}

function searchRelatedQuestion(term) {
    searchKeyword = term;
    const input = document.getElementById('bank-search-input');
    if (input) input.value = term;
    switchTab('search');
    renderSearchBank();
}

// ==========================================================================
// Header Stats & Theme
// ==========================================================================

function updateHeaderStats() {
    const streakEl = document.getElementById('streak-counter');
    if (streakEl) streakEl.textContent = state.practice.streak;

    const answeredEntries = Object.values(state.practice.answeredMap);
    const correctCount = answeredEntries.filter(a => a.isCorrect).length;
    const accuracy = answeredEntries.length > 0 ? Math.round((correctCount / answeredEntries.length) * 100) : 0;
    
    const accEl = document.getElementById('accuracy-rate');
    if (accEl) accEl.textContent = `${accuracy}% (${correctCount}/${answeredEntries.length})`;
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('xla_theme', newTheme);

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    if (window.soundEngine) window.soundEngine.playClick();
}

function openShortcutsModal() {
    document.getElementById('shortcuts-modal').classList.add('show');
}

function closeShortcutsModal() {
    document.getElementById('shortcuts-modal').classList.remove('show');
}

function confirmResetProgress() {
    if (confirm('KILLER QUEEN: BITES THE DUST! Bạn có muốn đặt lại toàn bộ lịch sử làm bài không? (Các câu gắn Sao vẫn được giữ lại).')) {
        state.practice.answeredMap = {};
        state.practice.streak = 0;
        state.wrongQuestions.clear();
        saveState();
        updateHeaderStats();
        updateBookmarksUI();
        renderPracticeQuestion();
        renderPracticeMatrix();
        renderChapters();
        spawnJoJoSfx('BITES THE DUST!! ⏪');
    }
}

// ==========================================================================
// Subtle Ambient Menacing Katakana Canvas ("ゴゴゴ")
// ==========================================================================

let menacingAnimationId = null;

function initMenacingCanvas() {
    const canvas = document.getElementById('sakura-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const symbols = ['ゴ', 'ゴ', 'ド', '★'];
    const colors = ['#8b5cf6', '#38bdf8', '#fbbf24'];
    const count = 14; // Subtle, non-distracting count
    const particles = [];

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 14 + 14,
            speedY: -(Math.random() * 0.6 + 0.25),
            char: symbols[Math.floor(Math.random() * symbols.length)],
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.08 + 0.04, // Very gentle opacity (4% - 12%)
            shakeOffset: Math.random() * 100
        });
    }

    function animate() {
        if (!state.sakuraEnabled) {
            ctx.clearRect(0, 0, width, height);
            menacingAnimationId = requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.y += p.speedY;
            const jitterX = Math.sin(Date.now() * 0.015 + p.shakeOffset) * 0.8;

            if (p.y < -40) {
                p.y = height + 30;
                p.x = Math.random() * width;
            }

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.font = `800 ${p.size}px 'Outfit', sans-serif`;
            ctx.fillStyle = p.color;
            ctx.fillText(p.char, p.x + jitterX, p.y);
            ctx.restore();
        });

        menacingAnimationId = requestAnimationFrame(animate);
    }

    animate();
}

function toggleSakura() {
    state.sakuraEnabled = !state.sakuraEnabled;
    localStorage.setItem('xla_sakura', state.sakuraEnabled.toString());
    const btn = document.getElementById('sakura-toggle-btn');
    if (btn) btn.classList.toggle('active', state.sakuraEnabled);
    if (window.soundEngine) window.soundEngine.playClick();
}

// ==========================================================================
// Golden Star Confetti Effect
// ==========================================================================

function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#fbbf24', '#8b5cf6', '#38bdf8', '#10b981', '#f43f5e'];

    for (let i = 0; i < 65; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 16,
            vy: (Math.random() - 0.7) * 16,
            gravity: 0.35,
            opacity: 1
        });
    }

    function renderParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.opacity -= 0.016;

            if (p.opacity > 0) {
                alive = true;
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        if (alive) {
            requestAnimationFrame(renderParticles);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    renderParticles();
}

// ==========================================================================
// Keyboard Shortcuts
// ==========================================================================

function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

        const key = e.key.toUpperCase();

        if (state.activeTab === 'practice') {
            const currentQ = state.practice.list[state.practice.currentIndex];
            if (!currentQ) return;

            if (['A', '1'].includes(key)) selectPracticeAnswer(currentQ, 'A');
            else if (['B', '2'].includes(key)) selectPracticeAnswer(currentQ, 'B');
            else if (['C', '3'].includes(key)) selectPracticeAnswer(currentQ, 'C');
            else if (['D', '4'].includes(key)) selectPracticeAnswer(currentQ, 'D');
            else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                nextPracticeQuestion();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevPracticeQuestion();
            } else if (key === 'S') {
                toggleCurrentBookmark();
            } else if (key === 'R') {
                readCurrentQuestion();
            }
        } else if (state.activeTab === 'exam' && state.exam.active && !state.exam.isReviewMode) {
            const idx = state.exam.currentIndex;
            if (['A', '1'].includes(key)) selectExamAnswer(idx, 'A');
            else if (['B', '2'].includes(key)) selectExamAnswer(idx, 'B');
            else if (['C', '3'].includes(key)) selectExamAnswer(idx, 'C');
            else if (['D', '4'].includes(key)) selectExamAnswer(idx, 'D');
            else if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextExamQuestion();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevExamQuestion();
            } else if (key === 'S') {
                toggleExamCurrentBookmark();
            }
        }

        if (key === 'M') {
            toggleMute();
        } else if (e.key === '?') {
            openShortcutsModal();
        } else if (e.key === 'Escape') {
            closeShortcutsModal();
        }
    });
}
