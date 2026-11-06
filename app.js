/**
 * JOJO'S BIZARRE ADVENTURE • ジョジョの奇妙な冒険 - Main Logic
 * Features:
 * - Floating Menacing Katakana Aura ("ゴゴゴゴ" & "ドドドド") Canvas
 * - ZA WARUDO! Time-Stop Visual Screen Distortion on Wrong Answer
 * - On-Screen Manga Action Popups ("ORA ORA!", "DI MOLTO!", "OH MY GOD!")
 * - Stand Companion Reactions (Jotaro, Giorno, Joseph, Rohan)
 */

// Global State
const state = {
    allQuestions: [],
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
    sakuraEnabled: true, // Menacing ゴゴゴゴ Aura enabled
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
// JoJo Visual Action Effects (SFX Popups & ZA WARUDO Screen Invert)
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

function triggerZaWarudoVisual() {
    document.body.classList.remove('za-warudo-flash');
    void document.body.offsetWidth; // trigger reflow
    document.body.classList.add('za-warudo-flash');
    setTimeout(() => {
        document.body.classList.remove('za-warudo-flash');
    }, 600);
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

function switchTab(tabId) {
    if (state.exam.active && tabId !== 'exam') {
        if (!confirm('Bạn đang trong Đấu Trường Stand! Rời đi sẽ tạm dừng trận đấu. Tiếp tục?')) {
            return;
        }
    }

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

    if (window.soundEngine) window.soundEngine.playClick();
}

// ==========================================================================
// Practice Mode Logic & JoJo Stand Reactions
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
        document.getElementById('p-q-title').innerHTML = '<span style="color:var(--text-muted)">Không có mục tiêu nào trong khu vực này.</span>';
        document.getElementById('p-options-list').innerHTML = '';
        document.getElementById('p-explanation-card').classList.remove('show');
        return;
    }

    const idx = state.practice.currentIndex;
    const q = list[idx];

    document.getElementById('p-chapter-tag').textContent = q.chapterName || `Part ${q.chapterId}`;
    document.getElementById('p-q-number').textContent = `Câu ${idx + 1} / ${list.length} (Gốc: Câu ${q.id})`;

    const totalAnswered = Object.keys(state.practice.answeredMap).length;
    document.getElementById('p-q-answered-count').textContent = `Đã hạ: ${totalAnswered} / ${state.allQuestions.length}`;

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
            <p><strong>ĐÁP ÁN CHUẨN: [${q.answer}]</strong> — ${q.options[q.answer]}</p>
            <p style="margin-top: 0.4rem; color: var(--text-secondary);">${q.explanation || ''}</p>
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

    if (isCorrect) {
        state.practice.streak++;

        if (state.practice.streak > 1 && state.practice.streak % 5 === 0) {
            window.soundEngine.playStreak();
            triggerConfetti();
            spawnJoJoSfx(`ORA RUSH x${state.practice.streak}!! 🎹🔥`);
            updateMascotMood('streak', state.practice.streak);
        } else {
            window.soundEngine.playCorrect();
            const cries = ['ORA ORA!! 👊⭐', 'YES! I AM!! 🔥', 'DI MOLTO!! 🐞✨', 'STAR FINGER!! ⭐'];
            spawnJoJoSfx(cries[Math.floor(Math.random() * cries.length)]);
            updateMascotMood('correct');
        }

        state.wrongQuestions.delete(q.id);
    } else {
        state.practice.streak = 0;
        window.soundEngine.playWrong();
        triggerZaWarudoVisual();
        const wrongCries = ['ZA WARUDO!! ⏱️🛑', 'OH MY GOD!! 😱', 'HORY SHIIIT!! 💥', 'WRYYYYYY!! 🧛‍♂️'];
        spawnJoJoSfx(wrongCries[Math.floor(Math.random() * wrongCries.length)]);
        state.wrongQuestions.add(q.id);
        updateMascotMood('wrong');
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

function updateMascotMood(type, extra = null) {
    const avatar = document.getElementById('mascot-avatar-emoji');
    const mood = document.getElementById('mascot-mood');
    const speech = document.getElementById('mascot-speech-text');
    if (!avatar || !speech) return;

    if (type === 'correct') {
        avatar.textContent = '⭐👊';
        mood.textContent = 'ORA ORA ORA!! ⭐';
        const msgs = [
            '"ORA ORA ORA!! Chính xác tuyệt đối! Tốc độ phản xạ của ngươi ngang ngửa 『Star Platinum』 đấy!"',
            '"YES! I AM!! Đòn đánh hoàn hảo! Giorno đang gảy piano ăn mừng cho ngươi kìa! 🐞🎹"',
            '"DI MOLTO!! Tuyệt vời lắm Stand User, không kẻ địch nào qua mắt được ngươi!"'
        ];
        speech.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    } else if (type === 'wrong') {
        avatar.textContent = '⏱️🧛';
        mood.textContent = 'ZA WARUDO!! 🛑';
        const msgs = [
            '"OH MY GOD!! DIO vừa dùng 『The World』 dừng thời gian làm ngươi chọn nhầm rồi! Đọc ngay 『Heaven\'s Door』 bên dưới để phá giải!"',
            '"Yare Yare Daze... Đừng nóng vội! Hãy nhìn vào định nghĩa gốc bên dưới để ghi nhớ năng lực của câu hỏi này!"',
            '"HORY SHIIIT!! Bị trúng đòn của Stand địch rồi! Nhưng Giorno sẽ dùng 『Gold Experience』 hồi phục lại cho ngươi ngay!"'
        ];
        speech.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    } else if (type === 'streak') {
        avatar.textContent = '🐞👑';
        mood.textContent = `REQUIEM x${extra}!! 🔥`;
        speech.textContent = `"KOREGA REQUIEM DA!! Chuỗi ${extra} câu đúng liên tiếp! Tiếng đàn Piano 3:45 của Giorno đã vang lên, không ai cản nổi ngươi nữa!! 🎹🔥"`;
    } else if (type === 'exam_done') {
        avatar.textContent = '🏆🎸';
        mood.textContent = 'ARRIVEDERCI! ◄';
        speech.textContent = `"Yare Yare... Ngươi đã hoàn thành trận quyết đấu! Một chiến thắng xứng tầm Stand Master thực thụ! ⭐"`;
    }
}

function prevPracticeQuestion() {
    if (state.practice.currentIndex > 0) {
        state.practice.currentIndex--;
        renderPracticeQuestion();
        window.soundEngine.playClick();
    }
}

function nextPracticeQuestion() {
    if (state.practice.currentIndex < state.practice.list.length - 1) {
        state.practice.currentIndex++;
        renderPracticeQuestion();
        window.soundEngine.playClick();
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
    window.soundEngine.playClick();
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
            state.practice.currentIndex = idx;
            renderPracticeQuestion();
            window.soundEngine.playClick();
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
// Exam Mode (Đấu Trường Thời Gian)
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
    spawnJoJoSfx('STAND PROUD!! ⭐');
    window.soundEngine.playClick();
}

function startExamTimer() {
    if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);

    updateTimerDisplay();
    state.exam.timerInterval = setInterval(() => {
        state.exam.timeRemaining--;
        updateTimerDisplay();

        if (state.exam.timeRemaining <= 0) {
            clearInterval(state.exam.timerInterval);
            alert('MADE IN HEAVEN! Thời gian đã hết! Hệ thống sẽ tự động phán quyết điểm số.');
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
        window.soundEngine.playClick();
    }
}

function nextExamQuestion() {
    if (state.exam.currentIndex < state.exam.questions.length - 1) {
        state.exam.currentIndex++;
        renderExamQuestion();
        window.soundEngine.playClick();
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

    let msg = `Bạn đã tung đòn ${answeredCount}/${total} câu.`;
    if (unanswered > 0) msg += ` Còn ${unanswered} mục tiêu chưa chọn!`;
    msg += ' Bạn có chắc muốn kết thúc trận đấu (ARRIVEDERCI) ngay không?';

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
        badge.textContent = 'CẦN TU LUYỆN HAMON & STAND! 💪';
    }

    updateMascotMood('exam_done');
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
    if (confirm('Bạn có muốn dùng tuyệt chiêu NIGERUNDAYO (Rút lui) và quay lại chọn đề không?')) {
        backToExamSetup();
    }
}

// ==========================================================================
// Chapters Tab (8 Parts)
// ==========================================================================

const CHAPTER_DEFS = [
    { id: 1, name: 'Part 1: Tổng quan & Khái niệm cơ bản', desc: 'Nhiễu ngẫu nhiên, hệ thống, mức xám, số hóa, điểm ảnh, biến dạng ảnh.' },
    { id: 2, name: 'Part 2: Thu nhận & Biểu diễn màu, Định dạng ảnh', desc: 'Mô hình RGB, CMY, HSV, HSL, Vector, Raster, Bayer, 3-CCD, BMP, RAW, TIFF, PCX.' },
    { id: 3, name: 'Part 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh', desc: 'Lọc trung bình, trung vị, Wiener, đảo, Dãn độ tương phản, Histogram, Phép nhân chập.' },
    { id: 4, name: 'Part 4: Phát hiện biên & Hình thái học ảnh', desc: 'Gradient, Sobel, Prewitt, Canny, Laplace, Co/Giãn/Mở/Đóng, Trích biên.' },
    { id: 5, name: 'Part 5: Phân vùng ảnh (Segmentation)', desc: 'Ngưỡng, Đẳng điệu, Tam giác, Đối xứng nền, Texture, Tách/Hợp vùng, Phát triển vùng.' },
    { id: 6, name: 'Part 6: Nhận dạng ảnh & Phân lớp', desc: 'Có giám sát, Không giám sát, K-means, KNN, ISODATA, Hopfield, Kohonen.' },
    { id: 7, name: 'Part 7: Nén dữ liệu ảnh & Chuẩn JPEG', desc: 'RLE, Huffman, LZW, JPEG DCT, Quét Zig-Zag, Kim tự tháp, Fractal.' },
    { id: 8, name: 'Part 8: Chuẩn đầu ra & Tác phong học tập', desc: '10 câu hỏi chuẩn mực thái độ, giờ giảng, tự đánh giá và tích lũy kiến thức học phần.' }
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

        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="chapter-card-header">
                <span class="chapter-number">★ JOJO PART ${ch.id}</span>
                <span class="chapter-qcount">${chQuestions.length} Mục tiêu</span>
            </div>
            <div class="chapter-title">${ch.name}</div>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">${ch.desc}</p>
            
            <div style="margin-top: 0.5rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:800; color:var(--gold); margin-bottom:4px;">
                    <span>Tiến độ Chinh phục</span>
                    <span>${correctInCh.length}/${chQuestions.length} (${pct}%)</span>
                </div>
                <div class="progress-strip" style="margin-bottom:0.75rem; height:7px;">
                    <div class="progress-bar-fill" style="width:${pct}%"></div>
                </div>
            </div>

            <div class="chapter-footer">
                <button class="btn btn-primary btn-sm" onclick="practiceChapter(${ch.id})">
                    👊 Xuất kích (ORA!)
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function practiceChapter(chId) {
    const chQuestions = state.allQuestions.filter(q => q.chapterId === chId);
    initPractice(`chapter-${chId}`, chQuestions);
    switchTab('practice');
}

// ==========================================================================
// Bookmarks Tab
// ==========================================================================

function renderBookmarksTab() {
    const starContainer = document.getElementById('starred-questions-list');
    const starList = state.allQuestions.filter(q => state.bookmarks.has(q.id));
    document.getElementById('starred-count-val').textContent = starList.length;

    if (starList.length === 0) {
        starContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Chưa có câu hỏi nào được gắn Ngôi Sao Joestar.</p>';
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
        wrongContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">DI MOLTO! Chưa có kẻ địch nào hạ gục được bạn!</p>';
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
    div.style.cssText = 'background:var(--bg-surface); border:2px solid var(--border-subtle); border-radius:4px; padding:0.75rem 1rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; cursor:pointer; box-shadow: 3px 3px 0px #000;';
    div.innerHTML = `
        <div style="flex:1;">
            <div style="font-size:0.75rem; color:var(--gold); font-weight:900;">Câu ${q.id} • ${q.chapterName}</div>
            <div style="font-size:0.92rem; font-weight:800; color:var(--text-primary); margin-top:2px; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${q.question}</div>
        </div>
        <button class="btn btn-secondary btn-sm" style="flex-shrink:0;">Tái đấu</button>
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
            alert('DI MOLTO! Bạn chưa có câu nào làm sai!');
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
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <span class="chapter-tag" style="font-size:0.75rem;">Câu ${q.id} • ${q.chapterName}</span>
                <button class="btn btn-secondary btn-sm" onclick="practiceSingleQuestion(${q.id})">👊 Đánh câu này</button>
            </div>
            <div style="font-size:1.1rem; font-weight:900; margin-bottom:0.75rem; color:var(--text-primary);">${q.question}</div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.75rem; font-size:0.92rem; font-weight:700;">
                <div style="padding:0.5rem 0.75rem; border-radius:4px; background:${q.answer === 'A' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:2px solid ${q.answer === 'A' ? 'var(--success)' : 'var(--border-subtle)'};">
                    <strong>A.</strong> ${q.options.A || ''}
                </div>
                <div style="padding:0.5rem 0.75rem; border-radius:4px; background:${q.answer === 'B' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:2px solid ${q.answer === 'B' ? 'var(--success)' : 'var(--border-subtle)'};">
                    <strong>B.</strong> ${q.options.B || ''}
                </div>
                <div style="padding:0.5rem 0.75rem; border-radius:4px; background:${q.answer === 'C' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:2px solid ${q.answer === 'C' ? 'var(--success)' : 'var(--border-subtle)'};">
                    <strong>C.</strong> ${q.options.C || ''}
                </div>
                <div style="padding:0.5rem 0.75rem; border-radius:4px; background:${q.answer === 'D' ? 'var(--success-bg)' : 'var(--bg-surface)'}; border:2px solid ${q.answer === 'D' ? 'var(--success)' : 'var(--border-subtle)'};">
                    <strong>D.</strong> ${q.options.D || ''}
                </div>
            </div>

            <div style="font-size:0.88rem; font-weight:700; color:var(--text-secondary); background:rgba(255,215,0,0.08); padding:0.6rem 0.85rem; border-radius:4px; border:1.5px solid var(--gold);">
                📖 <strong>『Heaven's Door』:</strong> ${q.explanation}
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
                <button class="icon-btn btn-sm" title="Truy tìm câu hỏi liên quan" onclick="searchRelatedQuestion('${item.concept}')">
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
// Header Stats
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
    spawnJoJoSfx('COLOR SHIFT!! 🎨');
    if (window.soundEngine) window.soundEngine.playClick();
}

function openShortcutsModal() {
    document.getElementById('shortcuts-modal').classList.add('show');
}

function closeShortcutsModal() {
    document.getElementById('shortcuts-modal').classList.remove('show');
}

function confirmResetProgress() {
    if (confirm('KILLER QUEEN: BITES THE DUST! Bạn có muốn quay ngược thời gian và đặt lại toàn bộ lịch sử làm bài không? (Các câu gắn Sao Joestar vẫn được giữ lại).')) {
        state.practice.answeredMap = {};
        state.practice.streak = 0;
        state.wrongQuestions.clear();
        saveState();
        updateHeaderStats();
        updateBookmarksUI();
        renderPracticeQuestion();
        renderPracticeMatrix();
        renderChapters();
        spawnJoJoSfx('BITES THE DUST!! 💣⏪');
    }
}

// ==========================================================================
// JoJo Menacing Katakana Aura Canvas ("ゴゴゴゴ" & "ドドドド")
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

    const symbols = ['ゴ', 'ゴ', 'ゴ', 'ド', 'ド', '★'];
    const colors = ['#ff007f', '#ffd700', '#a855f7', '#00f5d4'];
    const count = 24;
    const particles = [];

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 20 + 18,
            speedY: -(Math.random() * 1.1 + 0.5), // float upwards menacingly
            char: symbols[Math.floor(Math.random() * symbols.length)],
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.35 + 0.15,
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
            // Subtle menacing vibration
            const jitterX = Math.sin(Date.now() * 0.03 + p.shakeOffset) * 1.8;
            const jitterY = Math.cos(Date.now() * 0.04 + p.shakeOffset) * 1.2;

            if (p.y < -40) {
                p.y = height + 30;
                p.x = Math.random() * width;
            }

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.font = `900 italic ${p.size}px 'Outfit', sans-serif`;
            ctx.fillStyle = p.color;
            ctx.shadowColor = '#000000';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.fillText(p.char, p.x + jitterX, p.y + jitterY);
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
    if (state.sakuraEnabled) spawnJoJoSfx('ゴゴゴゴ!!');
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
    const colors = ['#ffd700', '#ff007f', '#00f5d4', '#a855f7', '#ffffff'];

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: Math.random() * 7 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 20,
            vy: (Math.random() - 0.7) * 20,
            gravity: 0.38,
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
            p.opacity -= 0.015;

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
