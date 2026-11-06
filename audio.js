/**
 * JOJO'S BIZARRE ADVENTURE SOUND ENGINE (Web Audio API)
 * Synthesizes iconic JoJo sound effects:
 * - Correct: Il Vento d'Oro (Giorno's Theme) Climax Piano/Brass Riff + Stand Hit
 * - Wrong: ZA WARUDO! (DIO Time-Stop Dubstep Bass Drop + Clock Ticks)
 * - Streak: Full Giorno Giovanna 3:45 Piano Solo
 * - Tab / Scene Transition: JoJo Eyecatch Whoosh + Stand Sting
 * - Question Slide: Heaven's Door Page Flip / Manga Panel Swipe
 * - Character Summon: Stand Aura Materialize Shimmer
 * - Victory: To Be Continued (Roundabout Riff) + Stardust Fanfare
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.compressor = null;
        this.noiseBuffer = null;
        this.enabled = true;
        this.volume = 0.75; // default 75%
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
                // Punchy Dynamics Compressor
                this.compressor = this.ctx.createDynamicsCompressor();
                this.compressor.threshold.setValueAtTime(-16, this.ctx.currentTime);
                this.compressor.knee.setValueAtTime(8, this.ctx.currentTime);
                this.compressor.ratio.setValueAtTime(5, this.ctx.currentTime);
                this.compressor.attack.setValueAtTime(0.002, this.ctx.currentTime);
                this.compressor.release.setValueAtTime(0.12, this.ctx.currentTime);

                this.masterGain = this.ctx.createGain();
                this.masterGain.gain.setValueAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime);

                this.masterGain.connect(this.compressor);
                this.compressor.connect(this.ctx.destination);
            }
            if (!this.noiseBuffer) {
                // Create 1-second white noise buffer for air whoosh / page flip transitions
                const bufferSize = this.ctx.sampleRate;
                this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = this.noiseBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
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

    // Play a rich piano/brass note (Grand Piano + Golden Wind Brass layer)
    _playJoJoNote(freq, startTime, duration, gainLevel = 0.8) {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const t0 = this.ctx.currentTime + startTime;

        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, t0);

        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(freq * 1.002, t0);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(freq * 4.5, t0);
        filter.frequency.exponentialRampToValueAtTime(freq * 1.8, t0 + duration);

        const peak = gainLevel * 0.5;
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(peak, t0 + 0.005);
        gain.gain.exponentialRampToValueAtTime(peak * 0.6, t0 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc1.start(t0);
        osc2.start(t0);
        osc1.stop(t0 + duration + 0.02);
        osc2.stop(t0 + duration + 0.02);
    }

    // Filtered noise whoosh helper for smooth transitions
    _playNoiseWhoosh(startFreq, peakFreq, endFreq, duration, gainLevel = 0.25) {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;

        const now = this.ctx.currentTime;
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.setValueAtTime(2.2, now);
        filter.frequency.setValueAtTime(startFreq, now);
        filter.frequency.exponentialRampToValueAtTime(peakFreq, now + duration * 0.45);
        filter.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(gainLevel, now + duration * 0.35);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        noise.start(now);
        noise.stop(now + duration + 0.02);
    }

    // =========================================================================
    // 1. ÂM CHUYỂN CẢNH (TAB / SCENE CUT): JOJO EYECATCH WHOOSH + STAND CHORD 🎬✨
    // =========================================================================
    playTabTransition() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        // Cinematic anime whip-pan air whoosh
        this._playNoiseWhoosh(220, 1650, 320, 0.28, 0.32);

        // JoJo Eyecatch 2-step harmonic sting (B minor -> C#5/F#5 Golden resolution)
        this._playJoJoNote(369.99, 0.02, 0.14, 0.45); // F#4
        this._playJoJoNote(587.33, 0.02, 0.14, 0.45); // D5
        this._playJoJoNote(493.88, 0.09, 0.22, 0.55); // B4
        this._playJoJoNote(739.99, 0.09, 0.22, 0.60); // F#5
    }

    // =========================================================================
    // 2. ÂM CHUYỂN CÂU HỎI: HEAVEN'S DOOR PAGE FLIP / MANGA SWIPE 📖💨
    // =========================================================================
    playQuestionSlide(direction = 'next') {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const now = this.ctx.currentTime;

        // Crisp paper flip noise
        if (direction === 'next') {
            this._playNoiseWhoosh(380, 1450, 620, 0.14, 0.22);
        } else {
            this._playNoiseWhoosh(1350, 650, 280, 0.14, 0.22);
        }

        // Subtle tonal slide pluck
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        if (direction === 'next') {
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.09);
        } else {
            osc.frequency.setValueAtTime(587.33, now);
            osc.frequency.exponentialRampToValueAtTime(392.00, now + 0.09);
        }

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.22, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.11);
    }

    // =========================================================================
    // 3. ÂM TRIỆU HỒI NHÂN VẬT (STAND SUMMON): MYSTICAL STAND AURA SHIMMER ⭐✨
    // =========================================================================
    playCharacterSummon(charId = 'jotaro') {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        // Soft Stand energy whoosh
        this._playNoiseWhoosh(300, 2100, 500, 0.24, 0.24);

        // Character-flavored harmonic arpeggio
        const charChords = {
            jotaro: [293.66, 440.00, 587.33, 880.00], // Star Platinum heroic D5/A5
            giorno: [369.99, 493.88, 587.33, 739.99], // Gold Experience B minor
            josuke: [329.63, 493.88, 659.25, 987.77], // Crazy Diamond bright E5/B5
            dio:    [246.94, 349.23, 493.88, 698.46], // The World ominous diminished
            rohan:  [440.00, 554.37, 659.25, 880.00], // Heaven's Door A major book chime
            joseph: [392.00, 493.88, 587.33, 783.99]  // Hermit Purple G major
        };
        const notes = charChords[charId] || charChords.jotaro;
        notes.forEach((freq, idx) => {
            this._playJoJoNote(freq, idx * 0.045, 0.22, 0.48);
        });
    }

    // =========================================================================
    // 4. ÂM ĐÚNG: GIORNO'S THEME (IL VENTO D'ORO) CLIMAX RIFF! 🐞🎹✨
    // =========================================================================
    playCorrect() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const riff = [
            { f: 739.99, t: 0.00, d: 0.14, g: 0.95 }, // F#5
            { f: 587.33, t: 0.13, d: 0.16, g: 0.90 }, // D5
            { f: 659.25, t: 0.27, d: 0.08, g: 0.85 }, // E5
            { f: 698.46, t: 0.34, d: 0.08, g: 0.90 }, // F5
            { f: 739.99, t: 0.41, d: 0.12, g: 0.95 }, // F#5
            { f: 987.77, t: 0.51, d: 0.38, g: 1.10 }  // B5 Climax!
        ];

        riff.forEach(n => {
            this._playJoJoNote(n.f, n.t, n.d, n.g);
            this._playJoJoNote(n.f * 0.5, n.t, n.d, n.g * 0.55);
        });

        this._playJoJoNote(493.88, 0.51, 0.38, 0.65);
        this._playJoJoNote(587.33, 0.51, 0.38, 0.65);
    }

    // =========================================================================
    // 5. ÂM SAI: ZA WARUDO!! (DIO TIME-STOP BASS DROP + CLOCK TICKS) ⏱️🛑
    // =========================================================================
    playWrong() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const now = this.ctx.currentTime;

        const carrier = this.ctx.createOscillator();
        const mod = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const shatterGain = this.ctx.createGain();

        carrier.type = 'sawtooth';
        carrier.frequency.setValueAtTime(950, now);
        carrier.frequency.exponentialRampToValueAtTime(65, now + 0.38);

        mod.type = 'sine';
        mod.frequency.setValueAtTime(48, now);
        mod.frequency.linearRampToValueAtTime(12, now + 0.38);

        modGain.gain.setValueAtTime(320, now);
        modGain.gain.exponentialRampToValueAtTime(20, now + 0.38);

        shatterGain.gain.setValueAtTime(0.001, now);
        shatterGain.gain.exponentialRampToValueAtTime(0.55, now + 0.015);
        shatterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);

        mod.connect(modGain);
        modGain.connect(carrier.frequency);
        carrier.connect(shatterGain);
        shatterGain.connect(this.masterGain);

        carrier.start(now);
        mod.start(now);
        carrier.stop(now + 0.44);
        mod.stop(now + 0.44);

        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'triangle';
        sub.frequency.setValueAtTime(240, now + 0.03);
        sub.frequency.exponentialRampToValueAtTime(42, now + 0.52);

        subGain.gain.setValueAtTime(0.001, now + 0.03);
        subGain.gain.exponentialRampToValueAtTime(0.95, now + 0.06);
        subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

        sub.connect(subGain);
        subGain.connect(this.masterGain);
        sub.start(now + 0.03);
        sub.stop(now + 0.57);

        const tickTimes = [0.22, 0.35, 0.50];
        tickTimes.forEach((t, idx) => {
            const tickOsc = this.ctx.createOscillator();
            const tickGain = this.ctx.createGain();
            tickOsc.type = 'square';
            tickOsc.frequency.setValueAtTime(idx % 2 === 0 ? 1800 : 1350, now + t);

            tickGain.gain.setValueAtTime(0.35, now + t);
            tickGain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.025);

            tickOsc.connect(tickGain);
            tickGain.connect(this.masterGain);
            tickOsc.start(now + t);
            tickOsc.stop(now + t + 0.03);
        });
    }

    // =========================================================================
    // 6. ÂM STREAK COMBO: FULL GIORNO GIOVANNA 3:45 PIANO SOLO! 🎹🔥⭐
    // =========================================================================
    playStreak() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const solo = [
            { f: 739.99, t: 0.00, d: 0.22, g: 1.0 },  // F#5
            { f: 587.33, t: 0.22, d: 0.22, g: 0.95 }, // D5
            { f: 587.33, t: 0.46, d: 0.09, g: 0.9 },  // D5
            { f: 659.25, t: 0.55, d: 0.09, g: 0.9 },  // E5
            { f: 698.46, t: 0.64, d: 0.09, g: 0.95 }, // F5
            { f: 659.25, t: 0.73, d: 0.09, g: 0.9 },  // E5
            { f: 587.33, t: 0.82, d: 0.09, g: 0.9 },  // D5
            { f: 554.37, t: 0.91, d: 0.09, g: 0.9 },  // C#5
            { f: 587.33, t: 1.00, d: 0.11, g: 0.95 }, // D5
            { f: 739.99, t: 1.11, d: 0.13, g: 1.0 },  // F#5
            { f: 987.77, t: 1.24, d: 0.55, g: 1.15 }  // B5 GOLDEN CLIMAX!
        ];

        solo.forEach(n => {
            this._playJoJoNote(n.f, n.t, n.d, n.g);
            this._playJoJoNote(n.f * 0.5, n.t, n.d, n.g * 0.6);
        });

        this._playJoJoNote(246.94, 0.00, 0.4, 0.7);
        this._playJoJoNote(246.94, 0.46, 0.4, 0.7);
        this._playJoJoNote(293.66, 1.24, 0.55, 0.8);
        this._playJoJoNote(493.88, 1.24, 0.55, 0.8);
    }

    // =========================================================================
    // 7. ÂM CLICK NHẸ
    // =========================================================================
    playClick() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.035);

        gain.gain.setValueAtTime(0.32, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.04);
    }

    // =========================================================================
    // 8. Volume Slider Test Preview
    // =========================================================================
    playVolumeTest() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        this._playJoJoNote(739.99, 0, 0.12, 0.7);
        this._playJoJoNote(987.77, 0.06, 0.16, 0.8);
    }

    // =========================================================================
    // 9. ÂM NỘP BÀI / CHIẾN THẮNG: TO BE CONTINUED (ROUNDABOUT RIFF) ⬅️🏆
    // =========================================================================
    playVictory() {
        if (!this.enabled || this.volume <= 0) return;
        this.init();
        if (!this.ctx || !this.masterGain) return;

        const notes = [
            { f: 329.63, t: 0.00, d: 0.14, g: 0.85 }, // E4
            { f: 369.99, t: 0.12, d: 0.14, g: 0.85 }, // F#4
            { f: 392.00, t: 0.24, d: 0.18, g: 0.90 }, // G4
            { f: 440.00, t: 0.40, d: 0.18, g: 0.95 }, // A4
            { f: 493.88, t: 0.56, d: 0.22, g: 1.00 }, // B4
            { f: 659.25, t: 0.76, d: 0.65, g: 1.15 }  // E5 Power Chord!
        ];

        notes.forEach(n => {
            this._playJoJoNote(n.f, n.t, n.d, n.g);
            this._playJoJoNote(n.f * 0.5, n.t, n.d, n.g * 0.65);
        });

        this._playJoJoNote(493.88, 0.76, 0.65, 0.8);
        this._playJoJoNote(783.99, 0.76, 0.65, 0.85);
    }

    // =========================================================================
    // 10. Text-to-Speech (Giọng đọc tiếng Việt)
    // =========================================================================
    speak(text, onEnd) {
        if (!('speechSynthesis' in window) || !this.enabled || this.volume <= 0) return;
        this.stopSpeech();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.05;
        utterance.pitch = 0.95;
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
