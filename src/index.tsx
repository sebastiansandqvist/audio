declare const React: typeof import('react');
declare const ReactDOM: typeof import('react-dom');
declare const Wad: typeof import('web-audio-daw');

interface HeaderProps {
  song: Song;
  updateSong:  (song: Song) => void;
  instruments: Instrument[];
}


// 512 x 512 viewbox

const icons = {
  decrement: 'M396.365 193.613c-10.419 10.701-120.192 115.251-120.192 115.251-5.581 5.709-12.877 8.576-20.173 8.576-7.322 0-14.618-2.867-20.173-8.576 0 0-109.773-104.551-120.218-115.251-10.419-10.701-11.136-29.952 0-41.37 11.162-11.392 26.701-12.313 40.345 0l100.045 95.923 100.019-95.923c13.671-12.313 29.235-11.392 40.346 0 11.161 11.443 10.471 30.695 0 41.37z',
  increment: 'M396.365 267.187c-10.419-10.701-120.192-115.277-120.192-115.277-5.581-5.709-12.877-8.55-20.173-8.55-7.322 0-14.618 2.841-20.173 8.55 0 0-109.773 104.576-120.218 115.277-10.419 10.701-11.136 29.926 0 41.37 11.162 11.417 26.701 12.313 40.345 0l100.045-95.949 100.019 95.923c13.671 12.314 29.235 11.418 40.346 0 11.161-11.417 10.471-30.669 0-41.344z',
};

interface IconProps {
  name: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  // TODO: specify fill in css from parent, allowing :hover to change to blue
  return <>
    <svg viewBox="0 0 512 512" height="12" className="Icon" fill="#8699b5">
      <path d={icons[name]} />
    </svg>
  </>;
};

interface TempoProps {
  bpm: number;
  updateBpm: (bpm: number) => void;
};

const Tempo: React.FC<TempoProps> = ({ bpm, updateBpm }) => {
  return <>
    <input
      className="Tempo-input"
      type="number"
      maxLength={3}
      value={bpm.toString()}
      onInput={(event) => {
        updateBpm((event.target as HTMLInputElement).valueAsNumber);
      }}
    />
    <span className="Tempo-label">bpm</span>
    <div className="Tempo-controls">
      <button onClick={() => updateBpm(bpm + 1)}>
        <Icon name="increment" />
      </button>
      <button onClick={() => updateBpm(bpm - 1)}>
        <Icon name="decrement" />
      </button>
    </div>
  </>;
};

const Header: React.FC<HeaderProps> = ({ song, updateSong, instruments }) => {
  return <>
    <header className="Header">
      <input
        className="Header-title"
        placeholder="Name your song..."
        value={song.title}
        onInput={(event) => {
          updateSong({
            ...song,
            title: (event.target as HTMLInputElement).value
          });
        }}
      />
      <div>
        <select value={song.instrumentId} onChange={(event) => {
          for (const instrument of instruments) {
            instrument.wad.stop();
            if (instrument.id === event.target.value) {
              instrument.wad.play();
              updateSong({
                ...song,
                instrumentId: event.target.value
              });
            }
          }
        }}>
          <optgroup label="Instruments">
            {instruments.map((instrument) => (
              <option value={instrument.id} key={instrument.id}>{instrument.id}</option>
            ))}
          </optgroup>
        </select>
        <Tempo
          bpm={song.bpm}
          updateBpm={(bpm) => {
            updateSong({ ...song, bpm });
          }}
        />
      </div>
    </header>
  </>;
}

interface Note {
  coords: [number, number];
  duration: number;
  pitch: string;
}

interface Song {
  id: string;
  title: string;
  bpm: number;
  // length: number;
  instrumentId: string;
  notes: Note[];
}

interface SidebarProps {
  songs: Song[];
  activeSong: Song;
  setActiveSong: (song: Song) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ songs, activeSong, setActiveSong }) => {
  return <>
    <aside className="Sidebar">
      <div className="Sidebar-heading">Songs</div>
      <div className="pad20">
      {songs.map((song) => (
        <a
          className={activeSong.id === song.id ? 'active' : ''}
          href="#"
          key={song.id}
          onClick={(event) => {
            event.preventDefault();
            setActiveSong(song);
          }}
        >
            {song.title || 'Untitled'}
        </a>
      ))}
      </div>
    </aside>
  </>;
};

function Editor() {
  return <>
    <div className="Editor">
      Editor area
    </div>
  </>;
}

interface ControlsProps {
  song: Song;
  isPlaying: boolean;
  togglePlay: () => void;
}


// function generateLoopWad() {
//   for ( var i = 0; i < currentLoopPlay.notes.length; i++ ) {

//     var wadInstance = 'wad' + i;
//     var thisLoopInstrument = _.findWhere(instrumentInstances, {name: currentLoopPlay.instrument})
//     var thisLoopInstrumentCode = thisLoopInstrument.code;

//     thisLoopInstrumentCode.pitch = currentLoopPlay.notes[i].pitch;

//     window[wadLoop][wadInstance] = new Wad(thisLoopInstrumentCode)
//     // console.log(currentLoopPlay.notes)

//     // thisLoopInstrumentCode.filter = thisLoopInstrumentCode.filter[0]
//     // var wadInstance = 'wad' + instrumentInstances[i].id
//     // console.log(instrumentInstances[i].code, wadInstance)
//     // window[wadInstance] = new Wad(instrumentInstances[i].code)

//   }
//   var loopingLength = currentLoopPlay.notes.length
//   var beatLen = 15/BPM;
//   var xCoord, holdLen, waitLen;
//   for ( var j = 0; j < loopingLength; j++ ) {

//     var wadInstance = 'wad' + j;

//     thisLoop = currentLoopPlay.notes[j];

//     xCoord  = thisLoop.coords[0];
//     holdLen = thisLoop.duration * beatLen
//     waitLen = beatLen*xCoord

//     window[wadLoop][wadInstance].play({ env: { hold: holdLen }, wait: waitLen});

//   }

// }

const Controls: React.FC<ControlsProps> = ({ song, isPlaying, togglePlay }) => {
  return <>
    <div className="Controls">
      <button
        className="Control-play"
        onClick={togglePlay}>
        {isPlaying ? <i className="material-icons">stop</i> : <i className="material-icons">play_arrow</i> }
      </button>
      <button>Clear</button>
      <button>Save</button>
    </div>
  </>;
}

const instruments: { [key: string]: Instrument } = {
  'Flute': {
    id: 'Flute',
    wad: new Wad({
      source: 'triangle',
      pitch: 'C5',
      env: {
        attack: 0.1,
        decay: 0.1,
        hold: 0.4,
        sustain: 0.4,
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
        magnitude: 4
      }
    })
  },
  'Piano': {
    id: 'Piano',
    wad: new Wad({
      source: 'square',
      pitch: 'C4',
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

interface Instrument {
  id: keyof typeof instruments;
  wad: InstanceType<typeof Wad>;
}

const defaultSongs: { [key: string]: Song } = {
  'Twinkle': {
    id: 'Twinkle',
    title: 'Twinkle Twinkle Little Star',
    bpm: 80,
    // length: 48,
    instrumentId: 'Piano',
    notes: [{"coords":[5,22],"duration": 1,"pitch":"A4"},{"coords":[6,22],"duration": 1,"pitch":"A4"},{"coords":[37,22],"duration": 1,"pitch":"A4"},{"coords":[38,22],"duration": 1,"pitch":"A4"},{"coords":[3,23],"duration": 1,"pitch":"G4"},{"coords":[4,23],"duration": 1,"pitch":"G4"},{"coords":[7,23],"duration": 2,"pitch":"G4"},{"coords":[17,23],"duration": 1,"pitch":"G4"},{"coords":[18,23],"duration": 1,"pitch":"G4"},{"coords":[25,23],"duration": 1,"pitch":"G4"},{"coords":[26,23],"duration": 1,"pitch":"G4"},{"coords":[35,23],"duration": 1,"pitch":"G4"},{"coords":[36,23],"duration": 1,"pitch":"G4"},{"coords":[39,23],"duration": 2,"pitch":"G4"},{"coords":[9,24],"duration": 1,"pitch":"F4"},{"coords":[10,24],"duration": 1,"pitch":"F4"},{"coords":[19,24],"duration": 1,"pitch":"F4"},{"coords":[20,24],"duration": 1,"pitch":"F4"},{"coords":[27,24],"duration": 1,"pitch":"F4"},{"coords":[28,24],"duration": 1,"pitch":"F4"},{"coords":[41,24],"duration": 1,"pitch":"F4"},{"coords":[42,24],"duration": 1,"pitch":"F4"},{"coords":[11,25],"duration": 1,"pitch":"E4"},{"coords":[12,25],"duration": 1,"pitch":"E4"},{"coords":[21,25],"duration": 1,"pitch":"E4"},{"coords":[22,25],"duration": 1,"pitch":"E4"},{"coords":[29,25],"duration": 1,"pitch":"E4"},{"coords":[30,25],"duration": 1,"pitch":"E4"},{"coords":[43,25],"duration": 1,"pitch":"E4"},{"coords":[44,25],"duration": 1,"pitch":"E4"},{"coords":[13,26],"duration": 1,"pitch":"D4"},{"coords":[14,26],"duration": 1,"pitch":"D4"},{"coords":[23,26],"duration": 2,"pitch":"D4"},{"coords":[31,26],"duration": 2,"pitch":"D4"},{"coords":[45,26],"duration": 1,"pitch":"D4"},{"coords":[46,26],"duration": 1,"pitch":"D4"},{"coords":[1,27],"duration": 1,"pitch":"C4"},{"coords":[2,27],"duration": 1,"pitch":"C4"},{"coords":[15,27],"duration": 2,"pitch":"C4"},{"coords":[33,27],"duration": 1,"pitch":"C4"},{"coords":[34,27],"duration": 1,"pitch":"C4"},{"coords":[47,27],"duration": 2,"pitch":"C4"}]
  },
  'Mario': {
    id: 'Mario',
    title: 'Theme from Super Mario',
    bpm: 120,
    // length: 50,
    instrumentId: 'Synth Lead',
    notes: [{"coords":[9,28], "duration": 1,"pitch":"G5"},{"coords":[1,31], "duration": 1,"pitch":"E5"},{"coords":[2,31], "duration": 1,"pitch":"E5"},{"coords":[4,31], "duration": 1,"pitch":"E5"},{"coords":[7,31], "duration": 1,"pitch":"E5"},{"coords":[6,35], "duration": 1,"pitch":"C5"},{"coords":[17,35], "duration":1,"pitch":"C5"},{"coords":[9,36], "duration": 1,"pitch":"B4"},{"coords":[28,36], "duration":1,"pitch":"B4"},{"coords":[30,37], "duration":1,"pitch":"Bb4"},{"coords":[26,38], "duration":1,"pitch":"A4"},{"coords":[31,38], "duration":1,"pitch":"A4"},{"coords":[9,40], "duration": 1,"pitch":"G4"},{"coords":[13,40], "duration":1,"pitch":"G4"},{"coords":[20,40], "duration":1,"pitch":"G4"},{"coords":[33,40], "duration": 2,"pitch":"G4"},{"coords":[1,41], "duration": 1,"pitch":"F#4"},{"coords":[2,41], "duration": 1,"pitch":"F#4"},{"coords":[4,41], "duration": 1,"pitch":"F#4"},{"coords":[6,41], "duration": 1,"pitch":"F#4"},{"coords":[7,41], "duration": 1,"pitch":"F#4"},{"coords":[17,43], "duration":1,"pitch":"E4"},{"coords":[23,43], "duration":1,"pitch":"E4"},{"coords":[28,45], "duration":1,"pitch":"D4"},{"coords":[30,46], "duration":1,"pitch":"C#4"},{"coords":[20,47], "duration":1,"pitch":"C4"},{"coords":[26,47], "duration":1,"pitch":"C4"},{"coords":[31,47], "duration":1,"pitch":"C4"},{"coords":[33,47], "duration": 2,"pitch":"C4"},{"coords":[13,52], "duration":1,"pitch":"G3"},{"coords":[17,52], "duration":1,"pitch":"G3"},{"coords":[23,52], "duration":1,"pitch":"G3"},{"coords":[28,52], "duration":1,"pitch":"G3"},{"coords":[30,53], "duration":1,"pitch":"F#3"},{"coords":[26,54], "duration":1,"pitch":"F3"},{"coords":[31,54], "duration":1,"pitch":"F3"},{"coords":[20,55], "duration":1,"pitch":"E3"},{"coords":[33,55], "duration": 2,"pitch":"E3"},{"coords":[1,57], "duration": 1,"pitch":"D3"},{"coords":[2,57], "duration": 1,"pitch":"D3"},{"coords":[4,57], "duration": 1,"pitch":"D3"},{"coords":[6,57], "duration": 1,"pitch":"D3"},{"coords":[7,57], "duration": 1,"pitch":"D3"},{"coords":[23,58], "duration":1,"pitch":"C#3"}]
  }
};

const songs = [defaultSongs['Twinkle'], defaultSongs['Mario']];

function App() {

  const [activeSong, setActiveSong] = React.useState<Song>(songs[0]);
  const [isPlaying, setPlaying] = React.useState<boolean>(false);

  const updateSong = (song: Song) => {
    const priorSongIndex = songs.findIndex((x) => x.id === song.id);
    const priorSong = songs[priorSongIndex];
    if (!priorSong) return;
    songs.splice(priorSongIndex, 1, song);
    setActiveSong(song);
  };

  const togglePlay = async () => {
    const instrument = instruments[activeSong.instrumentId];
    if (isPlaying) {
      setPlaying(false);
      instrument.wad.stop();
    }
    else {
      setPlaying(true);
      const promises: Promise<unknown>[] = [];
      const beatLength = (60 / 4) / activeSong.bpm; // / 4 since it's quarter notes?
      for (const note of activeSong.notes) {
        instrument.wad.play({
          pitch: note.pitch,
          wait: beatLength * note.coords[0],
          env: { hold: note.duration * beatLength }
        });
      }
    }
  };

  return <>
    <div className="App">
      <Header
        song={activeSong}
        updateSong={updateSong}
        instruments={[
          instruments['Flute'],
          instruments['Piano'],
          instruments['Synth Lead']
        ]}
      />
      <Sidebar
        songs={songs}
        activeSong={activeSong}
        setActiveSong={setActiveSong}
      />
      <Editor />
      <Controls song={activeSong} isPlaying={isPlaying} togglePlay={togglePlay} />
    </div>
  </>;
}

ReactDOM.render(<App />, document.getElementById('app'));

