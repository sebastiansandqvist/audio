export interface Note {
  coords: [number, number];
  duration: number;
  pitch: string;
}

export interface NoteV2 {
  x: number;
  pitch: string;
  duration: number;
}

export interface T {
  id: string;
  title: string;
  bpm: number;
  instrumentId: string;
  notes: NoteV2[];
  // notes: Note[];
}

export const defaults: { [key: string]: T } = {
  'New Song': {
    id: 'New Song',
    title: '',
    bpm: 120,
    instrumentId: 'Synth Lead',
    notes: [
      // { pitch: 'D6',  x: 0,  duration: 1 },
      // { pitch: 'D6',  x: 8,  duration: 1 },
      // { pitch: 'D6',  x: 9,  duration: 1 },
      // { pitch: 'D6',  x: 10, duration: 1 },
      // { pitch: 'D6',  x: 11, duration: 1 },
      // { pitch: 'D6',  x: 12, duration: 1 },
      // { pitch: 'C#6', x: 1,  duration: 1 },
      // { pitch: 'C6',  x: 2,  duration: 1 },
      // { pitch: 'B6',  x: 3,  duration: 1 },
      // { pitch: 'Bb6', x: 4,  duration: 1 },
      // { pitch: 'A6',  x: 5,  duration: 2 },
      // { pitch: 'G#5', x: 6,  duration: 3 },
      // { pitch: 'G5',  x: 7,  duration: 3 },
    ]
  },
  // 'Lux Aeterna': {
  //   id: 'Lux Aeterna',
  //   title: 'Lux Aeterna',
  //   bpm: 100,
  //   instrumentId: 'Piano',
  //   notes: [
  //     {"coords":[35,21],"duration": 2,"pitch":"D6"},
  //     {"coords":[43,21],"duration": 2,"pitch":"D6"},
  //     {"coords":[51,21],"duration": 2,"pitch":"D6"},
  //     {"coords":[59,21],"duration": 2,"pitch":"D6"},
  //     {"coords":[33,25],"duration": 2,"pitch":"Bb5"},{"coords":[37,25],"duration": 2,"pitch":"Bb5"},{"coords":[41,25],"duration": 2,"pitch":"Bb5"},{"coords":[45,25],"duration": 2,"pitch":"Bb5"},{"coords":[57,25],"duration": 2,"pitch":"Bb5"},{"coords":[61,25],"duration": 2,"pitch":"Bb5"},{"coords":[49,26],"duration": 2,"pitch":"A5"},{"coords":[53,26],"duration": 2,"pitch":"A5"},{"coords":[137,35],"duration": 1,"pitch":"C5"},{"coords":[138,35],"duration": 1,"pitch":"C5"},{"coords":[169,35],"duration": 1,"pitch":"C5"},{"coords":[170,35],"duration": 1,"pitch":"C5"},{"coords":[173,35],"duration": 1,"pitch":"C5"},{"coords":[174,35],"duration": 1,"pitch":"C5"},{"coords":[57,37],"duration": 6,"pitch":"Bb4"},{"coords":[63,37],"duration": 1,"pitch":"Bb4"},{"coords":[65,37],"duration": 1,"pitch":"Bb4"},{"coords":[71,37],"duration": 1,"pitch":"Bb4"},{"coords":[73,37],"duration": 1,"pitch":"Bb4"},{"coords":[79,37],"duration": 1,"pitch":"Bb4"},{"coords":[81,37],"duration": 1,"pitch":"Bb4"},{"coords":[87,37],"duration": 1,"pitch":"Bb4"},{"coords":[89,37],"duration": 1,"pitch":"Bb4"},{"coords":[91,37],"duration": 1,"pitch":"Bb4"},{"coords":[93,37],"duration": 1,"pitch":"Bb4"},{"coords":[95,37],"duration": 1,"pitch":"Bb4"},{"coords":[97,37],"duration": 1,"pitch":"Bb4"},{"coords":[103,37],"duration": 1,"pitch":"Bb4"},{"coords":[105,37],"duration": 1,"pitch":"Bb4"},{"coords":[111,37],"duration": 1,"pitch":"Bb4"},{"coords":[113,37],"duration": 1,"pitch":"Bb4"},{"coords":[114,37],"duration": 1,"pitch":"Bb4"},{"coords":[121,37],"duration": 1,"pitch":"Bb4"},{"coords":[122,37],"duration": 1,"pitch":"Bb4"},{"coords":[129,37],"duration": 1,"pitch":"Bb4"},{"coords":[130,37],"duration": 1,"pitch":"Bb4"},{"coords":[133,37],"duration": 1,"pitch":"Bb4"},{"coords":[134,37],"duration": 1,"pitch":"Bb4"},{"coords":[139,37],"duration": 1,"pitch":"Bb4"},{"coords":[140,37],"duration": 1,"pitch":"Bb4"},{"coords":[143,37],"duration": 1,"pitch":"Bb4"},{"coords":[144,37],"duration": 1,"pitch":"Bb4"},{"coords":[145,37],"duration": 1,"pitch":"Bb4"},{"coords":[146,37],"duration": 1,"pitch":"Bb4"},{"coords":[153,37],"duration": 1,"pitch":"Bb4"},{"coords":[154,37],"duration": 1,"pitch":"Bb4"},{"coords":[161,37],"duration": 1,"pitch":"Bb4"},{"coords":[162,37],"duration": 1,"pitch":"Bb4"},{"coords":[165,37],"duration": 1,"pitch":"Bb4"},{"coords":[166,37],"duration": 1,"pitch":"Bb4"},{"coords":[177,37],"duration": 1,"pitch":"Bb4"},{"coords":[183,37],"duration": 1,"pitch":"Bb4"},{"coords":[185,37],"duration": 1,"pitch":"Bb4"},{"coords":[191,37],"duration":1,"pitch":"Bb4"},{"coords":[193,37],"duration":1,"pitch":"Bb4"},{"coords":[49,38],"duration": 8,"pitch":"A4"},{"coords":[64,38],"duration": 1,"pitch":"A4"},{"coords":[72,38],"duration": 1,"pitch":"A4"},{"coords":[80,38],"duration": 1,"pitch":"A4"},{"coords":[88,38],"duration": 1,"pitch":"A4"},{"coords":[90,38],"duration": 1,"pitch":"A4"},{"coords":[92,38],"duration": 1,"pitch":"A4"},{"coords":[94,38],"duration": 1,"pitch":"A4"},{"coords":[96,38],"duration": 1,"pitch":"A4"},{"coords":[98,38],"duration": 2,"pitch":"A4"},{"coords":[104,38],"duration": 1,"pitch":"A4"},{"coords":[106,38],"duration": 2,"pitch":"A4"},{"coords":[112,38],"duration": 1,"pitch":"A4"},{"coords":[115,38],"duration": 1,"pitch":"A4"},{"coords":[116,38],"duration": 1,"pitch":"A4"},{"coords":[123,38],"duration": 1,"pitch":"A4"},{"coords":[124,38],"duration": 1,"pitch":"A4"},{"coords":[131,38],"duration": 1,"pitch":"A4"},{"coords":[132,38],"duration": 1,"pitch":"A4"},{"coords":[135,38],"duration": 1,"pitch":"A4"},{"coords":[136,38],"duration": 1,"pitch":"A4"},{"coords":[141,38],"duration": 1,"pitch":"A4"},{"coords":[142,38],"duration": 1,"pitch":"A4"},{"coords":[147,38],"duration": 1,"pitch":"A4"},{"coords":[148,38],"duration": 1,"pitch":"A4"},{"coords":[155,38],"duration": 1,"pitch":"A4"},{"coords":[156,38],"duration": 1,"pitch":"A4"},{"coords":[163,38],"duration": 1,"pitch":"A4"},{"coords":[164,38],"duration": 1,"pitch":"A4"},{"coords":[167,38],"duration": 1,"pitch":"A4"},{"coords":[168,38],"duration": 1,"pitch":"A4"},{"coords":[171,38],"duration": 1,"pitch":"A4"},{"coords":[172,38],"duration": 1,"pitch":"A4"},{"coords":[175,38],"duration": 1,"pitch":"A4"},{"coords":[176,38],"duration": 1,"pitch":"A4"},{"coords":[184,38],"duration": 1,"pitch":"A4"},{"coords":[192,38],"duration":1,"pitch":"A4"},{"coords":[33,40],"duration": 8,"pitch":"G4"},{"coords":[41,40],"duration": 8,"pitch":"G4"},{"coords":[66,40],"duration": 2,"pitch":"G4"},{"coords":[74,40],"duration": 2,"pitch":"G4"},{"coords":[82,40],"duration": 2,"pitch":"G4"},{"coords":[117,40],"duration": 1,"pitch":"G4"},{"coords":[118,40],"duration": 1,"pitch":"G4"},{"coords":[125,40],"duration": 1,"pitch":"G4"},{"coords":[126,40],"duration": 1,"pitch":"G4"},{"coords":[149,40],"duration": 1,"pitch":"G4"},{"coords":[150,40],"duration": 1,"pitch":"G4"},{"coords":[157,40],"duration": 1,"pitch":"G4"},{"coords":[158,40],"duration": 1,"pitch":"G4"},{"coords":[179,40],"duration": 1,"pitch":"G4"},{"coords":[187,40],"duration": 1,"pitch":"G4"},{"coords":[197,40],"duration": 4,"pitch":"G4"},{"coords":[65,45],"duration": 4,"pitch":"D4"},{"coords":[119,45],"duration": 1,"pitch":"D4"},{"coords":[120,45],"duration": 1,"pitch":"D4"},{"coords":[127,45],"duration": 1,"pitch":"D4"},{"coords":[128,45],"duration": 1,"pitch":"D4"},{"coords":[151,45],"duration": 1,"pitch":"D4"},{"coords":[152,45],"duration": 1,"pitch":"D4"},{"coords":[159,45],"duration": 1,"pitch":"D4"},{"coords":[160,45],"duration": 1,"pitch":"D4"},{"coords":[25,47],"duration": 2,"pitch":"C4"},{"coords":[57,47],"duration": 2,"pitch":"C4"},{"coords":[89,47],"duration": 2,"pitch":"C4"},{"coords":[1,49],"duration": 2,"pitch":"Bb3"},{"coords":[9,49],"duration": 2,"pitch":"Bb3"},{"coords":[17,49],"duration": 2,"pitch":"Bb3"},{"coords":[27,49],"duration": 2,"pitch":"Bb3"},{"coords":[31,49],"duration": 2,"pitch":"Bb3"},{"coords":[33,49],"duration": 2,"pitch":"Bb3"},{"coords":[41,49],"duration": 2,"pitch":"Bb3"},{"coords":[49,49],"duration": 2,"pitch":"Bb3"},{"coords":[59,49],"duration": 2,"pitch":"Bb3"},{"coords":[63,49],"duration": 2,"pitch":"Bb3"},{"coords":[65,49],"duration": 2,"pitch":"Bb3"},{"coords":[72,49],"duration": 2,"pitch":"Bb3"},{"coords":[77,49],"duration": 1,"pitch":"Bb3"},{"coords":[81,49],"duration": 2,"pitch":"Bb3"},{"coords":[91,49],"duration": 2,"pitch":"Bb3"},{"coords":[95,49],"duration": 2,"pitch":"Bb3"},{"coords":[3,50],"duration": 2,"pitch":"A3"},{"coords":[11,50],"duration": 2,"pitch":"A3"},{"coords":[19,50],"duration": 2,"pitch":"A3"},{"coords":[29,50],"duration": 2,"pitch":"A3"},{"coords":[35,50],"duration": 2,"pitch":"A3"},{"coords":[43,50],"duration": 2,"pitch":"A3"},{"coords":[51,50],"duration": 2,"pitch":"A3"},{"coords":[61,50],"duration": 2,"pitch":"A3"},{"coords":[67,50],"duration": 2,"pitch":"A3"},{"coords":[74,50],"duration": 2,"pitch":"A3"},{"coords":[83,50],"duration": 2,"pitch":"A3"},{"coords":[93,50],"duration": 2,"pitch":"A3"},{"coords":[5,52],"duration": 2,"pitch":"G3"},{"coords":[13,52],"duration": 2,"pitch":"G3"},{"coords":[21,52],"duration": 2,"pitch":"G3"},{"coords":[37,52],"duration": 2,"pitch":"G3"},{"coords":[45,52],"duration": 2,"pitch":"G3"},{"coords":[53,52],"duration": 2,"pitch":"G3"},{"coords":[69,52],"duration": 2,"pitch":"G3"},{"coords":[76,52],"duration": 2,"pitch":"G3"},{"coords":[85,52],"duration": 2,"pitch":"G3"},{"coords":[4,57],"duration": 1,"pitch":"D3"},{"coords":[7,57],"duration": 2,"pitch":"D3"},{"coords":[12,57],"duration": 1,"pitch":"D3"},{"coords":[15,57],"duration": 2,"pitch":"D3"},{"coords":[21,57],"duration": 1,"pitch":"D3"},{"coords":[23,57],"duration": 2,"pitch":"D3"},{"coords":[28,57],"duration": 1,"pitch":"D3"},{"coords":[30,57],"duration": 1,"pitch":"D3"},{"coords":[39,57],"duration": 2,"pitch":"D3"},{"coords":[47,57],"duration": 2,"pitch":"D3"},{"coords":[55,57],"duration": 2,"pitch":"D3"},{"coords":[68,57],"duration": 1,"pitch":"D3"},{"coords":[70,57],"duration": 1,"pitch":"D3"},{"coords":[71,57],"duration": 2,"pitch":"D3"},{"coords":[76,57],"duration": 1,"pitch":"D3"},{"coords":[78,57],"duration": 1,"pitch":"D3"},{"coords":[79,57],"duration": 2,"pitch":"D3"},{"coords":[87,57],"duration": 2,"pitch":"D3"},{"coords":[3,61],"duration": 1,"pitch":"Bb2"},{"coords":[5,61],"duration": 1,"pitch":"Bb2"},{"coords":[11,61],"duration": 1,"pitch":"Bb2"},{"coords":[13,61],"duration": 1,"pitch":"Bb2"},{"coords":[20,61],"duration": 1,"pitch":"Bb2"},{"coords":[22,61],"duration": 1,"pitch":"Bb2"},{"coords":[27,61],"duration": 1,"pitch":"Bb2"},{"coords":[31,61],"duration": 1,"pitch":"Bb2"},{"coords":[57,61],"duration": 1,"pitch":"Bb2"},{"coords":[58,61],"duration": 1,"pitch":"Bb2"},{"coords":[59,61],"duration": 1,"pitch":"Bb2"},{"coords":[60,61],"duration": 1,"pitch":"Bb2"},{"coords":[61,61],"duration": 1,"pitch":"Bb2"},{"coords":[62,61],"duration": 1,"pitch":"Bb2"},{"coords":[63,61],"duration": 1,"pitch":"Bb2"},{"coords":[64,61],"duration": 1,"pitch":"Bb2"},{"coords":[67,61],"duration": 1,"pitch":"Bb2"},{"coords":[71,61],"duration": 1,"pitch":"Bb2"},{"coords":[75,61],"duration": 1,"pitch":"Bb2"},{"coords":[79,61],"duration": 1,"pitch":"Bb2"},{"coords":[1,64],"duration": 1,"pitch":"G2"},{"coords":[2,64],"duration": 1,"pitch":"G2"},{"coords":[3,64],"duration": 3,"pitch":"G2"},{"coords":[6,64],"duration": 1,"pitch":"G2"},{"coords":[7,64],"duration": 3,"pitch":"G2"},{"coords":[10,64],"duration": 1,"pitch":"G2"},{"coords":[11,64],"duration": 3,"pitch":"G2"},{"coords":[14,64],"duration": 1,"pitch":"G2"},{"coords":[19,64],"duration": 1,"pitch":"G2"},{"coords":[23,64],"duration": 1,"pitch":"G2"},{"coords":[26,64],"duration": 1,"pitch":"G2"},{"coords":[30,64],"duration": 1,"pitch":"G2"},{"coords":[32,64],"duration": 1,"pitch":"G2"},{"coords":[33,64],"duration": 1,"pitch":"G2"},{"coords":[66,64],"duration": 1,"pitch":"G2"},{"coords":[69,64],"duration": 1,"pitch":"G2"},{"coords":[72,64],"duration": 1,"pitch":"G2"},{"coords":[74,64],"duration": 1,"pitch":"G2"},{"coords":[80,64],"duration": 1,"pitch":"G2"},{"coords":[17,68],"duration": 4,"pitch":"D#2"},{"coords":[21,68],"duration": 4,"pitch":"D#2"},{"coords":[49,68],"duration": 1,"pitch":"D#2"},{"coords":[50,68],"duration": 1,"pitch":"D#2"},{"coords":[51,68],"duration": 1,"pitch":"D#2"},{"coords":[52,68],"duration": 1,"pitch":"D#2"},{"coords":[53,68],"duration": 1,"pitch":"D#2"},{"coords":[54,68],"duration": 1,"pitch":"D#2"},{"coords":[55,68],"duration": 1,"pitch":"D#2"},{"coords":[56,68],"duration": 1,"pitch":"D#2"},{"coords":[1,69],"duration": 1,"pitch":"D2"},{"coords":[7,69],"duration": 1,"pitch":"D2"},{"coords":[8,69],"duration": 1,"pitch":"D2"},{"coords":[9,69],"duration": 1,"pitch":"D2"},{"coords":[15,69],"duration": 1,"pitch":"D2"},{"coords":[16,69],"duration": 1,"pitch":"D2"},{"coords":[18,69],"duration": 1,"pitch":"D2"},{"coords":[24,69],"duration": 1,"pitch":"D2"},{"coords":[25,69],"duration": 1,"pitch":"D2"},{"coords":[26,69],"duration": 5,"pitch":"D2"},{"coords":[31,69],"duration": 1,"pitch":"D2"},{"coords":[32,69],"duration": 1,"pitch":"D2"},{"coords":[57,69],"duration": 1,"pitch":"D2"},{"coords":[58,69],"duration": 1,"pitch":"D2"},{"coords":[59,69],"duration": 1,"pitch":"D2"},{"coords":[60,69],"duration": 1,"pitch":"D2"},{"coords":[61,69],"duration": 1,"pitch":"D2"},{"coords":[62,69],"duration": 1,"pitch":"D2"},{"coords":[63,69],"duration": 1,"pitch":"D2"},{"coords":[64,69],"duration": 1,"pitch":"D2"},{"coords":[65,69],"duration": 3,"pitch":"D2"},{"coords":[68,69],"duration": 1,"pitch":"D2"},{"coords":[69,69],"duration": 1,"pitch":"D2"},{"coords":[70,69],"duration": 1,"pitch":"D2"},{"coords":[71,69],"duration": 1,"pitch":"D2"},{"coords":[72,69],"duration": 1,"pitch":"D2"},{"coords":[73,69],"duration": 1,"pitch":"D2"},{"coords":[74,69],"duration": 6,"pitch":"D2"},{"coords":[80,69],"duration": 1,"pitch":"D2"},{"coords":[82,69],"duration": 1,"pitch":"D2"},{"coords":[17,73],"duration": 1,"pitch":"Bb1"},{"coords":[67,73],"duration": 1,"pitch":"Bb1"},{"coords":[71,73],"duration": 1,"pitch":"Bb1"},{"coords":[81,73],"duration": 1,"pitch":"Bb1"},{"coords":[33,76],"duration": 1,"pitch":"G1"},{"coords":[34,76],"duration": 1,"pitch":"G1"},{"coords":[35,76],"duration": 1,"pitch":"G1"},{"coords":[36,76],"duration": 1,"pitch":"G1"},{"coords":[37,76],"duration": 1,"pitch":"G1"},{"coords":[38,76],"duration": 1,"pitch":"G1"},{"coords":[39,76],"duration": 1,"pitch":"G1"},{"coords":[40,76],"duration": 1,"pitch":"G1"},{"coords":[41,76],"duration": 1,"pitch":"G1"},{"coords":[42,76],"duration": 1,"pitch":"G1"},{"coords":[43,76],"duration": 1,"pitch":"G1"},{"coords":[44,76],"duration": 1,"pitch":"G1"},{"coords":[45,76],"duration": 1,"pitch":"G1"},{"coords":[46,76],"duration": 1,"pitch":"G1"},{"coords":[47,76],"duration": 1,"pitch":"G1"},{"coords":[48,76],"duration": 1,"pitch":"G1"},{"coords":[64,76],"duration": 1,"pitch":"G1"},{"coords":[65,76],"duration": 1,"pitch":"G1"},{"coords":[66,76],"duration": 1,"pitch":"G1"},{"coords":[67,76],"duration": 1,"pitch":"G1"},{"coords":[68,76],"duration": 1,"pitch":"G1"},{"coords":[69,76],"duration": 1,"pitch":"G1"},{"coords":[70,76],"duration": 1,"pitch":"G1"},{"coords":[71,76],"duration": 1,"pitch":"G1"},{"coords":[72,76],"duration": 1,"pitch":"G1"},{"coords":[73,76],"duration": 1,"pitch":"G1"},{"coords":[74,76],"duration": 1,"pitch":"G1"},{"coords":[75,76],"duration": 1,"pitch":"G1"},{"coords":[76,76],"duration": 1,"pitch":"G1"},{"coords":[77,76],"duration": 1,"pitch":"G1"},{"coords":[78,76],"duration": 1,"pitch":"G1"},{"coords":[79,76],"duration": 1,"pitch":"G1"},{"coords":[49,80],"duration": 1,"pitch":"D#1"},{"coords":[50,80],"duration": 1,"pitch":"D#1"},{"coords":[51,80],"duration": 1,"pitch":"D#1"},{"coords":[52,80],"duration": 1,"pitch":"D#1"},{"coords":[53,80],"duration": 1,"pitch":"D#1"},{"coords":[54,80],"duration": 1,"pitch":"D#1"},{"coords":[55,80],"duration": 1,"pitch":"D#1"},{"coords":[56,80],"duration": 1,"pitch":"D#1"},{"coords":[80,80],"duration": 1,"pitch":"D#1"},{"coords":[81,80],"duration": 1,"pitch":"D#1"},{"coords":[82,80],"duration": 1,"pitch":"D#1"},{"coords":[83,80],"duration": 1,"pitch":"D#1"},{"coords":[84,80],"duration": 1,"pitch":"D#1"},{"coords":[85,80],"duration": 1,"pitch":"D#1"},{"coords":[86,80],"duration": 1,"pitch":"D#1"},{"coords":[87,80],"duration": 1,"pitch":"D#1"},{"coords":[57,81],"duration": 1,"pitch":"D1"},{"coords":[58,81],"duration": 1,"pitch":"D1"},{"coords":[59,81],"duration": 1,"pitch":"D1"},{"coords":[60,81],"duration": 1,"pitch":"D1"},{"coords":[61,81],"duration": 1,"pitch":"D1"},{"coords":[62,81],"duration": 1,"pitch":"D1"},{"coords":[63,81],"duration": 1,"pitch":"D1"},{"coords":[64,81],"duration": 1,"pitch":"D1"},{"coords":[88,81],"duration": 1,"pitch":"D1"},{"coords":[89,81],"duration": 1,"pitch":"D1"},{"coords":[90,81],"duration": 1,"pitch":"D1"},{"coords":[91,81],"duration": 1,"pitch":"D1"},{"coords":[92,81],"duration": 1,"pitch":"D1"},{"coords":[93,81],"duration": 1,"pitch":"D1"},{"coords":[94,81],"duration": 1,"pitch":"D1"},{"coords":[95,81],"duration": 1,"pitch":"D1"}
  //   ]
  // },
  // 'Mario': {
  //   id: 'Mario',
  //   title: 'Theme from Super Mario',
  //   bpm: 120,
  //   instrumentId: 'Synth Lead',
  //   notes: [{"coords":[9,28], "duration": 1,"pitch":"G5"},{"coords":[1,31], "duration": 1,"pitch":"E5"},{"coords":[2,31], "duration": 1,"pitch":"E5"},{"coords":[4,31], "duration": 1,"pitch":"E5"},{"coords":[7,31], "duration": 1,"pitch":"E5"},{"coords":[6,35], "duration": 1,"pitch":"C5"},{"coords":[17,35], "duration":1,"pitch":"C5"},{"coords":[9,36], "duration": 1,"pitch":"B4"},{"coords":[28,36], "duration":1,"pitch":"B4"},{"coords":[30,37], "duration":1,"pitch":"Bb4"},{"coords":[26,38], "duration":1,"pitch":"A4"},{"coords":[31,38], "duration":1,"pitch":"A4"},{"coords":[9,40], "duration": 1,"pitch":"G4"},{"coords":[13,40], "duration":1,"pitch":"G4"},{"coords":[20,40], "duration":1,"pitch":"G4"},{"coords":[33,40], "duration": 2,"pitch":"G4"},{"coords":[1,41], "duration": 1,"pitch":"F#4"},{"coords":[2,41], "duration": 1,"pitch":"F#4"},{"coords":[4,41], "duration": 1,"pitch":"F#4"},{"coords":[6,41], "duration": 1,"pitch":"F#4"},{"coords":[7,41], "duration": 1,"pitch":"F#4"},{"coords":[17,43], "duration":1,"pitch":"E4"},{"coords":[23,43], "duration":1,"pitch":"E4"},{"coords":[28,45], "duration":1,"pitch":"D4"},{"coords":[30,46], "duration":1,"pitch":"C#4"},{"coords":[20,47], "duration":1,"pitch":"C4"},{"coords":[26,47], "duration":1,"pitch":"C4"},{"coords":[31,47], "duration":1,"pitch":"C4"},{"coords":[33,47], "duration": 2,"pitch":"C4"},{"coords":[13,52], "duration":1,"pitch":"G3"},{"coords":[17,52], "duration":1,"pitch":"G3"},{"coords":[23,52], "duration":1,"pitch":"G3"},{"coords":[28,52], "duration":1,"pitch":"G3"},{"coords":[30,53], "duration":1,"pitch":"F#3"},{"coords":[26,54], "duration":1,"pitch":"F3"},{"coords":[31,54], "duration":1,"pitch":"F3"},{"coords":[20,55], "duration":1,"pitch":"E3"},{"coords":[33,55], "duration": 2,"pitch":"E3"},{"coords":[1,57], "duration": 1,"pitch":"D3"},{"coords":[2,57], "duration": 1,"pitch":"D3"},{"coords":[4,57], "duration": 1,"pitch":"D3"},{"coords":[6,57], "duration": 1,"pitch":"D3"},{"coords":[7,57], "duration": 1,"pitch":"D3"},{"coords":[23,58], "duration":1,"pitch":"C#3"}]
  // },
  // 'Twinkle': {
  //   id: 'Twinkle',
  //   title: 'Twinkle Twinkle Little Star',
  //   bpm: 80,
  //   instrumentId: 'Piano',
  //   notes: [{"coords":[5,22],"duration": 1,"pitch":"A4"},{"coords":[6,22],"duration": 1,"pitch":"A4"},{"coords":[37,22],"duration": 1,"pitch":"A4"},{"coords":[38,22],"duration": 1,"pitch":"A4"},{"coords":[3,23],"duration": 1,"pitch":"G4"},{"coords":[4,23],"duration": 1,"pitch":"G4"},{"coords":[7,23],"duration": 2,"pitch":"G4"},{"coords":[17,23],"duration": 1,"pitch":"G4"},{"coords":[18,23],"duration": 1,"pitch":"G4"},{"coords":[25,23],"duration": 1,"pitch":"G4"},{"coords":[26,23],"duration": 1,"pitch":"G4"},{"coords":[35,23],"duration": 1,"pitch":"G4"},{"coords":[36,23],"duration": 1,"pitch":"G4"},{"coords":[39,23],"duration": 2,"pitch":"G4"},{"coords":[9,24],"duration": 1,"pitch":"F4"},{"coords":[10,24],"duration": 1,"pitch":"F4"},{"coords":[19,24],"duration": 1,"pitch":"F4"},{"coords":[20,24],"duration": 1,"pitch":"F4"},{"coords":[27,24],"duration": 1,"pitch":"F4"},{"coords":[28,24],"duration": 1,"pitch":"F4"},{"coords":[41,24],"duration": 1,"pitch":"F4"},{"coords":[42,24],"duration": 1,"pitch":"F4"},{"coords":[11,25],"duration": 1,"pitch":"E4"},{"coords":[12,25],"duration": 1,"pitch":"E4"},{"coords":[21,25],"duration": 1,"pitch":"E4"},{"coords":[22,25],"duration": 1,"pitch":"E4"},{"coords":[29,25],"duration": 1,"pitch":"E4"},{"coords":[30,25],"duration": 1,"pitch":"E4"},{"coords":[43,25],"duration": 1,"pitch":"E4"},{"coords":[44,25],"duration": 1,"pitch":"E4"},{"coords":[13,26],"duration": 1,"pitch":"D4"},{"coords":[14,26],"duration": 1,"pitch":"D4"},{"coords":[23,26],"duration": 2,"pitch":"D4"},{"coords":[31,26],"duration": 2,"pitch":"D4"},{"coords":[45,26],"duration": 1,"pitch":"D4"},{"coords":[46,26],"duration": 1,"pitch":"D4"},{"coords":[1,27],"duration": 1,"pitch":"C4"},{"coords":[2,27],"duration": 1,"pitch":"C4"},{"coords":[15,27],"duration": 2,"pitch":"C4"},{"coords":[33,27],"duration": 1,"pitch":"C4"},{"coords":[34,27],"duration": 1,"pitch":"C4"},{"coords":[47,27],"duration": 2,"pitch":"C4"}]
  // }
};
