/**
 * Audio Engine using Web Audio API (Anime & Kawaii Sound Effects)
 * Generates clear, punchy, and playful procedural sound effects.
 * 100% offline, zero latency, customizable volume.
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.compressor = null;
        this.enabled = true;
        this.volume = 0.7; // default 70%
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
        if (this.ctx) {
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            if (!this.masterGain) {
                // Dynamics compressor for punchy, clear, non-distorting audio
                this.compressor = this.ctx.createDynamicsCompressor();
                this.compressor.threshold.setValueAtTime(-15, this.ctx.currentTime);
                this.compressor.knee.setValueAtTime(10, this.ctx.currentTime);
                this.compressor.ratio.setValueAtTime(3.5, this.ctx.currentTime);
                this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
                this.compressor.release.setValueAtTime(0.15, this.ctx.currentTime);

                this.masterGain = this.ctx.createGain();
                this.masterGain.gain.setValueAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime);

                this.masterGain.connect(this.compressor);
                this.compressor.connect(this.ctx.destination);
            }
        }
    }

    setMuted(muted) {
        this.enabled = !muted;
        localStorage.setItem('xla_sound_muted', muted ? 'true' : 'false');
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setValueAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime);
        }
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

        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setValueAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime);
        }
    }

    // Helper: Play a tone with ADSR envelope through master bus
    _playTone(freq, type = 'sine', duration = 0.2, startTime = 0, gainLevel = 1, pitchEnd = null) {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const t0 = this.ctx.currentTime + startTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, t0);
        if (pitchEnd !== null) {
            osc.frequency.exponentialRampToValueAtTime(Math.max(10, pitchEnd), t0 + duration);
        }

        const maxGain = gainLevel * 0.55;
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(maxGain, t0 + 0.006); // ultra-fast punchy attack
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t0);
        osc.stop(t0 + duration + 0.02);
    }

    // =========================================================================
    // 1. ÂM THANH ĐÚNG: Sparkle Magic Bell (Trong trẻo, vang giòn, cực đã tai ✨)
    // =========================================================================
    playCorrect() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const now = 0;
        // Percussive strike 1: G5 (784Hz) + C6 (1046.5Hz) - bright pop
        this._playTone(784.0, 'triangle', 0.12, now, 0.7);
        this._playTone(1046.5, 'sine', 0.15, now, 0.6);

        // Percussive strike 2: E6 (1318.5Hz) - rising melody
        this._playTone(1318.5, 'triangle', 0.18, now + 0.07, 0.75);
        this._playTone(2637.0, 'sine', 0.12, now + 0.07, 0.35); // octave sparkle

        // Percussive strike 3: High G6 (1568Hz) + C7 (2093Hz) - victorious ringing bell
        this._playTone(1568.0, 'sine', 0.38, now + 0.14, 0.85);
        this._playTone(2093.0, 'triangle', 0.42, now + 0.14, 0.9);
        this._playTone(3136.0, 'sine', 0.28, now + 0.14, 0.4); // celestial chime shimmer
    }

    // =========================================================================
    // 2. ÂM THANH SAI: Bouncy Cartoon Spring "Tưng tưng / Boing" (Rõ ràng & Vui nhộn 🎈)
    // =========================================================================
    playWrong() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const now = 0;
        // Sound 1: Cartoon spring twang (G4 392Hz quick pitch sweep to 493Hz then back)
        this._playTone(420, 'triangle', 0.14, now, 0.85, 290);
        this._playTone(210, 'sawtooth', 0.12, now, 0.35, 160);

        // Sound 2: Funny bouncy "boing" drop (330Hz down to 196Hz with wobble)
        const t2 = now + 0.12;
        this._playTone(340, 'triangle', 0.26, t2, 0.95, 175);
        this._playTone(170, 'sine', 0.26, t2, 0.7, 95);

        // Add a cute wobble effect using a fast vibrato oscillator if possible
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const tStart = this.ctx.currentTime + t2;

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(320, tStart);
            osc.frequency.exponentialRampToValueAtTime(180, tStart + 0.24);

            gain.gain.setValueAtTime(0.001, tStart);
            gain.gain.exponentialRampToValueAtTime(0.4 * this.volume, tStart + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.0001, tStart + 0.24);

            osc.connect(gain);
            gain.connect(this.masterGain);

            osc.start(tStart);
            osc.stop(tStart + 0.25);
        } catch (e) {}
    }

    // =========================================================================
    // 3. Âm Streak / Combo (Power-Up Fanfare 🔥)
    // =========================================================================
    playStreak() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        // Rapid bright pentatonic glissando
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
        notes.forEach((f, i) => {
            this._playTone(f, 'triangle', 0.16, i * 0.045, 0.65);
            this._playTone(f * 2, 'sine', 0.12, i * 0.045, 0.3);
        });

        // Final celebratory bell
        this._playTone(2093.00, 'sine', 0.55, 0.32, 0.95);
        this._playTone(2637.00, 'triangle', 0.5, 0.32, 0.6);
    }

    // =========================================================================
    // 4. Âm UI Click: Bubble Pop (Tách / Bụp nhẹ giòn tan 🫧)
    // =========================================================================
    playClick() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        this._playTone(850, 'sine', 0.04, 0, 0.45, 1250);
    }

    // =========================================================================
    // 5. Volume Test Preview
    // =========================================================================
    playVolumeTest() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        this._playTone(1046.50, 'triangle', 0.12, 0, 0.7);
        this._playTone(2093.00, 'sine', 0.15, 0.04, 0.5);
    }

    // =========================================================================
    // 6. Âm Chiến Thắng / Hoàn Thành Bài Thi (Yatta! 🏆)
    // =========================================================================
    playVictory() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const chord1 = [523.25, 659.25, 783.99]; // C
        const chord2 = [587.33, 739.99, 880.00]; // D
        const chord3 = [659.25, 830.61, 987.77]; // E
        const chord4 = [783.99, 987.77, 1318.51, 1567.98, 2093.00]; // G Major bright

        const playChord = (chord, delay, dur) => {
            chord.forEach(freq => {
                this._playTone(freq, 'triangle', dur, delay, 0.5);
                this._playTone(freq * 1.5, 'sine', dur * 0.8, delay, 0.25);
            });
        };

        playChord(chord1, 0, 0.24);
        playChord(chord2, 0.20, 0.24);
        playChord(chord3, 0.40, 0.28);
        playChord(chord4, 0.65, 0.75);
    }

    // =========================================================================
    // 7. Text-to-Speech (Giọng đọc tiếng Việt)
    // =========================================================================
    speak(text, onEnd) {
        if (!('speechSynthesis' in window) || !this.enabled || this.volume <= 0) return;
        this.stopSpeech();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.05;
        utterance.pitch = 1.15;
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
