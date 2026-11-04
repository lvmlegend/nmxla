/**
 * Audio Engine using Web Audio API (Anime & Kawaii Sound Effects)
 * Generates procedural sound effects without external audio files.
 * Provides 100% offline reliability, zero latency, customizable volume.
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.volume = 0.6; // default 60%
        this.ttsEnabled = true;
        this.currentUtterance = null;

        // Load saved preferences
        const savedMute = localStorage.getItem('xla_sound_muted');
        if (savedMute !== null) {
            this.enabled = savedMute !== 'true';
        }
        const savedVol = localStorage.getItem('xla_sound_volume');
        if (savedVol !== null) {
            this.volume = Math.max(0, Math.min(1, parseFloat(savedVol)));
        }
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setMuted(muted) {
        this.enabled = !muted;
        localStorage.setItem('xla_sound_muted', muted ? 'true' : 'false');
    }

    setVolume(val) {
        this.volume = Math.max(0, Math.min(1, val));
        if (this.volume > 0) {
            this.enabled = true;
            localStorage.setItem('xla_sound_muted', 'false');
        } else {
            this.enabled = false;
            localStorage.setItem('xla_sound_muted', 'true');
        }
        localStorage.setItem('xla_sound_volume', this.volume.toString());
    }

    // Play a gentle musical tone with envelope
    _playTone(freq, type = 'sine', duration = 0.2, startTime = 0, gainLevel = 1) {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

        const targetGain = this.volume * gainLevel * 0.35;
        gain.gain.setValueAtTime(0.0001, this.ctx.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(targetGain, this.ctx.currentTime + startTime + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + startTime);
        osc.stop(this.ctx.currentTime + startTime + duration + 0.05);
    }

    // 1. Kawaii Correct Sparkle Chime (Anime Level-up Ding! 🌸)
    playCorrect() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx) return;

        // Sparkly high-pitch arpeggio: G5 -> C6 -> E6 -> G6 -> C7
        const notes = [
            { f: 783.99, d: 0.12, t: 0.00 },
            { f: 1046.50, d: 0.14, t: 0.06 },
            { f: 1318.51, d: 0.16, t: 0.12 },
            { f: 1567.98, d: 0.18, t: 0.18 },
            { f: 2093.00, d: 0.35, t: 0.25 }
        ];

        notes.forEach(n => {
            this._playTone(n.f, 'sine', n.d, n.t, 0.85);
        });
    }

    // 2. Anime "Aww / Pout" Wrong Sound (Cute soft cartoon boing/wobble)
    playWrong() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        // Pitch drop like an anime character sighing/pouting
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);

        const targetGain = this.volume * 0.3;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(targetGain, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.3);
    }

    // 3. Sugoi! Streak Fanfare (Anime Power-Up!)
    playStreak() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx) return;

        // Rapid upward energy glissando + bell
        const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
        freqs.forEach((f, i) => {
            this._playTone(f, 'sine', 0.15, i * 0.045, 0.7);
        });
        // Sustained bright chime
        this._playTone(2093.00, 'triangle', 0.5, 0.35, 0.9);
    }

    // 4. Kawaii Click / Pop Sound
    playClick() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx) return;

        this._playTone(900, 'sine', 0.04, 0, 0.35);
    }

    // 5. Volume Test Preview (Soft ping when moving slider)
    playVolumeTest() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx) return;

        this._playTone(1046.50, 'sine', 0.1, 0, 0.7);
    }

    // 6. Anime Stage Clear / Victory Fanfare (Yatta! 🏆)
    playVictory() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx) return;

        const chord1 = [523.25, 659.25, 783.99]; // C
        const chord2 = [587.33, 739.99, 880.00]; // D
        const chord3 = [659.25, 830.61, 987.77]; // E
        const chord4 = [783.99, 987.77, 1318.51, 1567.98]; // G major bright

        const playChord = (chord, delay, dur) => {
            chord.forEach(freq => this._playTone(freq, 'sine', dur, delay, 0.65));
        };

        playChord(chord1, 0, 0.22);
        playChord(chord2, 0.18, 0.22);
        playChord(chord3, 0.36, 0.25);
        playChord(chord4, 0.60, 0.65);
    }

    // 7. Text-to-Speech (Vietnamese TTS)
    speak(text, onEnd) {
        if (!('speechSynthesis' in window) || !this.enabled || this.volume <= 0) return;
        this.stopSpeech();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.05; // slightly energetic
        utterance.pitch = 1.15; // slightly brighter anime feel
        utterance.volume = this.volume;

        const voices = window.speechSynthesis.getVoices();
        const viVoice = voices.find(v => v.lang.startsWith('vi') || v.lang.includes('VIE'));
        if (viVoice) {
            utterance.voice = viVoice;
            utterance.lang = viVoice.lang;
        } else {
            utterance.lang = 'vi-VN';
        }

        utterance.onend = () => {
            this.currentUtterance = null;
            if (onEnd) onEnd();
        };
        utterance.onerror = () => {
            this.currentUtterance = null;
            if (onEnd) onEnd();
        };

        this.currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);
    }

    stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            this.currentUtterance = null;
        }
    }

    isSpeaking() {
        return window.speechSynthesis && window.speechSynthesis.speaking;
    }
}

window.soundEngine = new SoundEngine();
