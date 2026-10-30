// Fusion Food Family Lab - Web Audio API Synthesizer
// Completely standalone audio generator: zero external file dependencies or broken audio paths!

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem('fusion_muted') === 'true';
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('fusion_muted', this.muted);
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }

  playTick() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.audioCtx.currentTime + 0.03);

    gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.03);
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    // Pleasant two-note ascending chime (C5 -> G5)
    [523.25, 783.99].forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0.18, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.25);
    });
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(130, now + 0.22);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  playChime() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const notes = [587.33, 739.99, 880.00]; // D5, F#5, A5
    notes.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0.15, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.4);
    });
  }

  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    // Major chord triumphant fanfare (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.12);

      gain.gain.setValueAtTime(0.2, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.45);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.45);
    });
  }

  playSizzle() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const bufferSize = Math.floor(this.audioCtx.sampleRate * 0.22);
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(now);
    noise.stop(now + 0.22);
  }

  startContinuousSizzle(intensity = 0.5, heatMultiplier = 1.0) {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;
    if (this._sizzleNode) return;

    try {
      const ctx = this.audioCtx;
      const now = ctx.currentTime;
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2600, now);
      filter.Q.setValueAtTime(1.8, now);

      const highpass = ctx.createBiquadFilter();
      highpass.type = 'highpass';
      highpass.frequency.setValueAtTime(1200, now);

      const gainNode = ctx.createGain();
      const targetGain = Math.min(0.35, (0.08 + intensity * 0.18) * heatMultiplier);
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(targetGain, now + 0.15);

      noiseSource.connect(filter);
      filter.connect(highpass);
      highpass.connect(gainNode);
      gainNode.connect(ctx.destination);

      noiseSource.start(now);
      this._sizzleNode = {
        source: noiseSource,
        filter: filter,
        gain: gainNode
      };
    } catch (e) {
      console.warn('Continuous sizzle audio error:', e);
    }
  }

  updateContinuousSizzle(proximity = 1.0, heatMultiplier = 1.0) {
    if (!this._sizzleNode || !this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      const target = Math.max(0.001, Math.min(0.35, (0.08 + proximity * 0.22) * heatMultiplier));
      this._sizzleNode.gain.gain.cancelScheduledValues(now);
      this._sizzleNode.gain.gain.linearRampToValueAtTime(target, now + 0.1);
      this._sizzleNode.filter.frequency.setValueAtTime(2200 + proximity * 1400 * heatMultiplier, now);
    } catch (e) {}
  }

  stopContinuousSizzle() {
    if (!this._sizzleNode || !this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      this._sizzleNode.gain.gain.cancelScheduledValues(now);
      this._sizzleNode.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
      const node = this._sizzleNode;
      this._sizzleNode = null;
      setTimeout(() => {
        try {
          node.source.stop();
          node.source.disconnect();
        } catch (e) {}
      }, 250);
    } catch (e) {
      this._sizzleNode = null;
    }
  }

  playSkewerClink() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    [2200, 3400, 4800].forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.85, now + 0.12);
      gain.gain.setValueAtTime(0.12 / (idx + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    });
  }

  playOilFlarePop() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.08);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  triggerHaptic(pattern = [25, 30, 25]) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }
}

export const sound = new SoundEngine();
