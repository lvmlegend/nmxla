/**
 * IMAGEX • 画像処理 - Main Application Logic (Anime Edition)
 * Comprehensive Practice & Exam Engine with Anime Mascot & Volume Control
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
    sakuraEnabled: true,
    lastNonZeroVolume: 0.6
};

// ==========================================================================
// Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load questions data
    if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
        state.allQuestions = window.QUESTIONS_DATA;
    } else {
        console.error("QUESTIONS_DATA not loaded!");
        return;
    }

    // 2. Load LocalStorage
    loadSavedData();

    // 3. Setup Practice Mode
    initPractice();

    // 4. Render Chapters & Glossary
    renderChapters();
    renderGlossary();
    renderSearchBank();

    // 5. Setup Sakura Petals Animation
    initSakuraCanvas();

    // 6. Setup Keyboard Listeners & Auto-Next
    setupKeyboardShortcuts();
    const autoNextCheckbox = document.getElementById('auto-next-toggle');
    if (autoNextCheckbox) {
        autoNextCheckbox.addEventListener('change', (e) => {
            state.practice.autoNext = e.target.checked;
        });
    }

    // 7. Update Header Stats & Volume Slider
    updateHeaderStats();
    updateBookmarksUI();
    initVolumeUI();
});

function loadSavedData() {
    // Theme
    const savedTheme = localStorage.getItem('xla_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

    // Sakura
    const savedSakura = localStorage.getItem('xla_sakura');
    if (savedSakura !== null) {
        state.sakuraEnabled = savedSakura === 'true';
    }
    const sakuraBtn = document.getElementById('sakura-toggle-btn');
    if (sakuraBtn) sakuraBtn.classList.toggle('active', state.sakuraEnabled);

    // Bookmarks
    try {
        const savedBm = localStorage.getItem('xla_bookmarks');
        if (savedBm) state.bookmarks = new Set(JSON.parse(savedBm));
    } catch (e) {}

    // Wrong Questions
    try {
        const savedWrong = localStorage.getItem('xla_wrong');
        if (savedWrong) state.wrongQuestions = new Set(JSON.parse(savedWrong));
    } catch (e) {}

    // Practice Answers
    try {
        const savedAns = localStorage.getItem('xla_practice_answers');
        if (savedAns) state.practice.answeredMap = JSON.parse(savedAns);
    } catch (e) {}

    // Practice Streak
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
// Volume & Audio Controls (To / Nhỏ & Mute)
// ==========================================================================

function initVolumeUI() {
    const vol = window.soundEngine ? window.soundEngine.volume : 0.6;
    const volPct = Math.round(vol * 100);
    state.lastNonZeroVolume = vol > 0 ? vol : 0.6;

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
        // Mute
        state.lastNonZeroVolume = currentVol;
        window.soundEngine.setVolume(0);
        if (slider) slider.value = 0;
        if (label) label.textContent = '0%';
        updateVolumeIcon(0);
    } else {
        // Unmute to last known volume
        const restoreVol = state.lastNonZeroVolume > 0 ? state.lastNonZeroVolume : 0.6;
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

    if (pct === 0) {
        iconEl.textContent = '🔇';
    } else if (pct < 35) {
        iconEl.textContent = '🔈';
    } else if (pct < 75) {
        iconEl.textContent = '🔉';
    } else {
        iconEl.textContent = '🔊';
    }
}

// ==========================================================================
// Tabs Navigation
// ==========================================================================

function switchTab(tabId) {
    if (state.exam.active && tabId !== 'exam') {
        if (!confirm('Senpai đang trong bài thi. Rời đi sẽ tạm dừng bài thi. Tiếp tục?')) {
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
// Practice Mode Logic & Anime Mascot Reactions
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

    // Tags & numbers
    document.getElementById('p-chapter-tag').textContent = q.chapterName || `Chương ${q.chapterId}`;
    document.getElementById('p-q-number').textContent = `Câu ${idx + 1} / ${list.length} (Gốc: Câu ${q.id})`;

    const totalAnswered = Object.keys(state.practice.answeredMap).length;
    document.getElementById('p-q-answered-count').textContent = `Đã làm: ${totalAnswered} / ${state.allQuestions.length}`;

    // Progress Bar
    const progressPct = ((idx + 1) / list.length) * 100;
    document.getElementById('p-progress-bar').style.width = `${progressPct}%`;

    // Star Button
    const isStarred = state.bookmarks.has(q.id);
    const starIcon = document.getElementById('p-star-icon');
    const starBtn = document.getElementById('p-star-btn');
    if (starIcon) starIcon.textContent = isStarred ? '★' : '☆';
    if (starBtn) starBtn.classList.toggle('active', isStarred);

    // Title
    document.getElementById('p-q-title').textContent = q.question;

    // Options
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

    // Explanation Box
    const expCard = document.getElementById('p-explanation-card');
    const expText = document.getElementById('p-explanation-text');
    if (answeredInfo) {
        expCard.classList.add('show');
        expText.innerHTML = `
            <p><strong>Đáp án chính xác: [${q.answer}]</strong> - ${q.options[q.answer]}</p>
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
        window.soundEngine.playCorrect();

        // High streak celebrations
        if (state.practice.streak > 1 && state.practice.streak % 5 === 0) {
            window.soundEngine.playStreak();
            triggerConfetti();
            updateMascotMood('streak', state.practice.streak);
        } else {
            updateMascotMood('correct');
        }

        state.wrongQuestions.delete(q.id);
    } else {
        state.practice.streak = 0;
        window.soundEngine.playWrong();
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
        }, 1100);
    }
}

// Anime Mascot Reactions
function updateMascotMood(type, extra = null) {
    const avatar = document.getElementById('mascot-avatar-emoji');
    const mood = document.getElementById('mascot-mood');
    const speech = document.getElementById('mascot-speech-text');
    if (!avatar || !speech) return;

    if (type === 'correct') {
        avatar.textContent = '(*≧ω≦*)';
        mood.textContent = 'Sugoi desu! 🌸';
        const msgs = [
            '"Sugoi! Senpai chọn chuẩn đét luôn! Tiếp tục giữ phong độ nào! ✨"',
            '"Chính xác 100%! Trí nhớ của Senpai tuyệt đỉnh thật đó! 💖"',
            '"Omedetou! Một điểm cộng to đùng cho Senpai nha! 🌸"'
        ];
        speech.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    } else if (type === 'wrong') {
        avatar.textContent = '(；´Д｀)';
        mood.textContent = 'Đừng nản nha Senpai! 💖';
        const msgs = [
            '"Ôi tiếc quá! Nhưng không sao nè, Senpai hãy xem kỹ phần giải thích cốt lõi ở dưới nhé! 💡"',
            '"Thất bại là mẹ thành công! Ghi nhớ câu này là lần sau Senpai không bao giờ nhầm nữa! 🌸"',
            '"Yuki tin Senpai câu sau sẽ trả lời đúng ngay thôi! Ganbatte! ✨"'
        ];
        speech.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    } else if (type === 'streak') {
        avatar.textContent = '٩(◕‿◕｡)۶';
        mood.textContent = `COMBO x${extra}!! 🔥`;
        speech.textContent = `"YATTA!! Chuỗi ${extra} câu đúng liên tiếp! Quá là ngầu luôn Senpai ơiii!! 🔥✨"`;
    } else if (type === 'exam_done') {
        avatar.textContent = '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧';
        mood.textContent = 'Omedetou! 🏆';
        speech.textContent = `"Chúc mừng Senpai đã hoàn thành bài thi! Yuki tự hào về Senpai lắm đó! 🌸"`;
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
            alert('Hết giờ làm bài! Yuki-chan sẽ tự động chấm điểm cho Senpai nhé!');
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

    document.getElementById('e-chapter-tag').textContent = q.chapterName || `Chương ${q.chapterId}`;
    document.getElementById('e-q-number').textContent = `Câu ${idx + 1} / ${list.length}`;

    const answeredCount = Object.keys(state.exam.answers).length;
    document.getElementById('e-q-answered-count').textContent = `Đã làm: ${answeredCount} / ${list.length}`;

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

    let msg = `Senpai đã làm ${answeredCount}/${total} câu.`;
    if (unanswered > 0) msg += ` Còn ${unanswered} câu chưa chọn!`;
    msg += ' Senpai có chắc muốn nộp bài thi ngay không?';

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
        badge.textContent = 'XUẤT SẮC 🏆';
    } else if (scoreVal >= 8.0) {
        badge.className = 'result-badge good';
        badge.textContent = 'GIỎI 🌟';
    } else if (scoreVal >= 6.5) {
        badge.className = 'result-badge average';
        badge.textContent = 'KHÁ 👍';
    } else {
        badge.className = 'result-badge poor';
        badge.textContent = 'CẦN CỐ GẮNG 💪';
    }

    updateMascotMood('exam_done');
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
    if (confirm('Senpai có chắc muốn dừng bài thi và quay lại chọn đề không?')) {
        backToExamSetup();
    }
}

// ==========================================================================
// Chapters Tab
// ==========================================================================

const CHAPTER_DEFS = [
    { id: 1, name: 'Chương 1: Tổng quan & Khái niệm cơ bản', desc: 'Nhiễu ngẫu nhiên, hệ thống, mức xám, số hóa, điểm ảnh, biến dạng ảnh.' },
    { id: 2, name: 'Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh', desc: 'Mô hình RGB, CMY, HSV, HSL, Vector, Raster, Bayer, 3-CCD, BMP, RAW, TIFF, PCX.' },
    { id: 3, name: 'Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh', desc: 'Lọc trung bình, trung vị, Wiener, đảo, Dãn độ tương phản, Histogram, Phép nhân chập.' },
    { id: 4, name: 'Chương 4: Phát hiện biên & Hình thái học ảnh', desc: 'Gradient, Sobel, Prewitt, Canny, Laplace, Co/Giãn/Mở/Đóng, Trích biên.' },
    { id: 5, name: 'Chương 5: Phân vùng ảnh (Segmentation)', desc: 'Ngưỡng, Đẳng điệu, Tam giác, Đối xứng nền, Texture, Tách/Hợp vùng, Phát triển vùng.' },
    { id: 6, name: 'Chương 6: Nhận dạng ảnh & Phân lớp', desc: 'Có giám sát, Không giám sát, K-means, KNN, ISODATA, Hopfield, Kohonen.' },
    { id: 7, name: 'Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG', desc: 'RLE, Huffman, LZW, JPEG DCT, Quét Zig-Zag, Kim tự tháp, Fractal.' },
    { id: 8, name: 'Chuẩn đầu ra & Tác phong học tập', desc: '10 câu hỏi chuẩn mực thái độ, giờ giảng, tự đánh giá và tích lũy kiến thức học phần.' }
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
                <span class="chapter-number">Chuyên đề ${ch.id}</span>
                <span class="chapter-qcount">${chQuestions.length} câu</span>
            </div>
            <div class="chapter-title">${ch.name}</div>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">${ch.desc}</p>
            
            <div style="margin-top: 0.5rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">
                    <span>Tiến độ đúng</span>
                    <span>${correctInCh.length}/${chQuestions.length} (${pct}%)</span>
                </div>
                <div class="progress-strip" style="margin-bottom:0.75rem; height:5px;">
                    <div class="progress-bar-fill" style="width:${pct}%"></div>
                </div>
            </div>

            <div class="chapter-footer">
                <button class="btn btn-primary btn-sm" onclick="practiceChapter(${ch.id})">
                    ⚡ Luyện tập ngay
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
        starContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Chưa có câu hỏi nào được gắn sao.</p>';
    } else {
        starContainer.innerHTML = '';
        starList.forEach(q => {
            const item = createQuestionSummaryItem(q, 'starred');
            starContainer.appendChild(item);
        });
    }

    const wrongContainer = document.getElementById('wrong-questions-list');
    const wrongList = state.allQuestions.filter(q => state.wrongQuestions.has(q.id));
    document.getElementById('wrong-count-val').textContent = wrongList.length;

    if (wrongList.length === 0) {
        wrongContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Tuyệt vời! Senpai chưa làm sai câu nào!</p>';
    } else {
        wrongContainer.innerHTML = '';
        wrongList.forEach(q => {
            const item = createQuestionSummaryItem(q, 'wrong');
            wrongContainer.appendChild(item);
        });
    }
}

function createQuestionSummaryItem(q) {
    const div = document.createElement('div');
    div.style.cssText = 'background:var(--bg-pill); border:1.5px solid var(--border-color); border-radius:var(--radius-sm); padding:0.75rem 1rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; cursor:pointer;';
    div.innerHTML = `
        <div style="flex:1;">
            <div style="font-size:0.75rem; color:var(--primary); font-weight:800;">Câu ${q.id} • ${q.chapterName}</div>
            <div style="font-size:0.92rem; font-weight:700; color:var(--text-primary); margin-top:2px; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${q.question}</div>
        </div>
        <button class="btn btn-secondary btn-sm" style="flex-shrink:0;">Luyện câu này</button>
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
            alert('Senpai chưa có câu nào làm sai!');
            return;
        }
    } else if (filterType === 'starred') {
        subset = state.allQuestions.filter(q => state.bookmarks.has(q.id));
        if (subset.length === 0) {
            alert('Senpai chưa gắn sao câu hỏi nào!');
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
                <button class="btn btn-secondary btn-sm" onclick="practiceSingleQuestion(${q.id})">⚡ Luyện câu này</button>
            </div>
            <div style="font-size:1.1rem; font-weight:800; margin-bottom:0.75rem; color:var(--text-primary);">${q.question}</div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.75rem; font-size:0.92rem; font-weight:600;">
                <div style="padding:0.5rem 0.75rem; border-radius:8px; background:${q.answer === 'A' ? 'var(--success-bg)' : 'var(--bg-pill)'}; border:1.5px solid ${q.answer === 'A' ? 'var(--success)' : 'transparent'};">
                    <strong>A.</strong> ${q.options.A || ''}
                </div>
                <div style="padding:0.5rem 0.75rem; border-radius:8px; background:${q.answer === 'B' ? 'var(--success-bg)' : 'var(--bg-pill)'}; border:1.5px solid ${q.answer === 'B' ? 'var(--success)' : 'transparent'};">
                    <strong>B.</strong> ${q.options.B || ''}
                </div>
                <div style="padding:0.5rem 0.75rem; border-radius:8px; background:${q.answer === 'C' ? 'var(--success-bg)' : 'var(--bg-pill)'}; border:1.5px solid ${q.answer === 'C' ? 'var(--success)' : 'transparent'};">
                    <strong>C.</strong> ${q.options.C || ''}
                </div>
                <div style="padding:0.5rem 0.75rem; border-radius:8px; background:${q.answer === 'D' ? 'var(--success-bg)' : 'var(--bg-pill)'}; border:1.5px solid ${q.answer === 'D' ? 'var(--success)' : 'transparent'};">
                    <strong>D.</strong> ${q.options.D || ''}
                </div>
            </div>

            <div style="font-size:0.88rem; color:var(--text-secondary); background:rgba(255,117,140,0.06); padding:0.6rem 0.85rem; border-radius:8px; border:1px dashed rgba(255,117,140,0.3);">
                💡 <strong>Định nghĩa cốt lõi:</strong> ${q.explanation}
            </div>
        `;
        container.appendChild(card);
    });

    if (filtered.length > 100) {
        const moreNote = document.createElement('div');
        moreNote.style.textAlign = 'center';
        moreNote.style.color = 'var(--text-muted)';
        moreNote.style.padding = '1rem';
        moreNote.textContent = `(Đang hiển thị 100 / ${filtered.length} câu phù hợp. Vui lòng gõ từ khóa chi tiết hơn)`;
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
                <span>${item.concept}</span>
                <button class="icon-btn btn-sm" title="Tìm các câu liên quan trong đề" onclick="searchRelatedQuestion('${item.concept}')">
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
    if (window.soundEngine) window.soundEngine.playClick();
}

function openShortcutsModal() {
    document.getElementById('shortcuts-modal').classList.add('show');
}

function closeShortcutsModal() {
    document.getElementById('shortcuts-modal').classList.remove('show');
}

function confirmResetProgress() {
    if (confirm('Senpai có chắc muốn đặt lại toàn bộ tiến trình học (lịch sử làm bài, chuỗi combo, câu sai)? Dữ liệu câu đã gắn sao sẽ được giữ lại.')) {
        state.practice.answeredMap = {};
        state.practice.streak = 0;
        state.wrongQuestions.clear();
        saveState();
        updateHeaderStats();
        updateBookmarksUI();
        renderPracticeQuestion();
        renderPracticeMatrix();
        renderChapters();
        alert('Tiến trình đã được đặt lại thành công!');
    }
}

// ==========================================================================
// Falling Sakura Petals Animation Canvas (🌸)
// ==========================================================================

let sakuraAnimationId = null;

function initSakuraCanvas() {
    const canvas = document.getElementById('sakura-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const petalCount = 35;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
        petals.push({
            x: Math.random() * width,
            y: Math.random() * height - height,
            size: Math.random() * 8 + 7,
            speedY: Math.random() * 1.4 + 0.8,
            speedX: Math.random() * 1.5 - 0.7,
            angle: Math.random() * 360,
            angleSpeed: (Math.random() - 0.5) * 1.5,
            opacity: Math.random() * 0.4 + 0.4,
            sway: Math.random() * 50
        });
    }

    function drawPetal(p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = `rgba(255, 183, 197, ${p.opacity})`;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size, -p.size, -p.size * 1.2, p.size, 0, p.size * 1.3);
        ctx.bezierCurveTo(p.size * 1.2, p.size, p.size, -p.size, 0, 0);
        ctx.fill();
        ctx.restore();
    }

    function animate() {
        if (!state.sakuraEnabled) {
            ctx.clearRect(0, 0, width, height);
            sakuraAnimationId = requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        petals.forEach(p => {
            p.y += p.speedY;
            p.x += Math.sin((p.y + p.sway) * 0.015) * 1.2 + p.speedX;
            p.angle += p.angleSpeed;

            if (p.y > height + 20) {
                p.y = -20;
                p.x = Math.random() * width;
            }
            if (p.x > width + 20) p.x = -20;
            if (p.x < -20) p.x = width + 20;

            drawPetal(p);
        });

        sakuraAnimationId = requestAnimationFrame(animate);
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
// Confetti Animation Effect
// ==========================================================================

function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff758c', '#38bdf8', '#10b981', '#fbbf24', '#ec4899', '#a855f7', '#ffffff'];

    for (let i = 0; i < 75; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 18,
            vy: (Math.random() - 0.7) * 18,
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
