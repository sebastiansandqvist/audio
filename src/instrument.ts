declare const Wad: typeof import('web-audio-daw');

export interface Instrument {
  id: keyof typeof instruments;
  wad: InstanceType<typeof Wad>;
}

export const instruments: { [key: string]: Instrument } = {
  'Flute': {
    id: 'Flute',
    wad: new Wad({
      source: 'triangle',
      pitch: 'C5',
      volume: 0.5,
      env: {
        attack: 0.1,
        decay: 0.02,
        hold: 0.4,
        sustain: 0.3,
        release: 0.2
      },
      filter: {
        type: 'lowpass',
        frequency: 600,
        q: 7,
        env: {
          attack: 0.7,
          frequency: 1600
        }
      },
      vibrato: {
        attack: 0.1,
        speed: 5,
        magnitude: 6
      }
    })
  },
  'Piano': {
    id: 'Piano',
    wad: new Wad({
      source: 'square',
      pitch: 'C4',
      volume: 0.5,
      env: {
        attack: 0.01,
        decay: 0.005,
        hold: 0.4,
        sustain: 0.2,
        release: 0.3
      },
      filter: {
        type: 'lowpass',
        frequency: 1200,
        q: 8.5,
        env: {
          attack: 0.2,
          frequency: 600
        }
      }
    })
  },
  'Synth Lead': {
    id: 'Synth Lead',
    wad: new Wad({
      source: 'square',
      pitch: 'C4',
      volume: 0.5,
      env: {
        attack: 0.005,
        decay: 0.005,
        hold: 0.4,
        sustain: 0.3,
        release: 0.01
      }
    })
  }
};
