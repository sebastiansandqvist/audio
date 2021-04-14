declare const React: typeof import('react');
declare const ReactDOM: typeof import('react-dom');
declare const Wad: typeof import('web-audio-daw');
import * as song from './song';
import * as instrument from './instrument';
import {
  Icon
} from './components';

type Song = song.T;
type Note = song.Note;
type Instrument = instrument.T;

interface TempoProps {
  bpm: number;
  updateBpm: (bpm: number) => void;
};

function useSpinner(value: number, action: Function) {
  const [isSpinning, setIsSpinning] = React.useState(false);
  // const [runOnce, setRunOnce] = React.useState(true);
  const rafId = React.useRef<number | undefined>();
  const timeoutId = React.useRef<number | undefined>();

  React.useEffect(() => {
    const spin = () => {
      if (isSpinning) {
        action();
        rafId.current = requestAnimationFrame(spin);
      }
    };

    rafId.current = requestAnimationFrame(spin);

    return () => {
      if (rafId.current !== undefined) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [value, isSpinning]);

  return {
    start() {
      action();
      timeoutId.current = setTimeout(() => {
        setIsSpinning(true);
      }, 300)
    },
    stop() {
      setIsSpinning(false);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      clearTimeout(timeoutId.current);
    }
  };
}

const Tempo: React.FC<TempoProps> = ({ bpm, updateBpm }) => {
  const [isMouseDown, setMouseDown] = React.useState(false);
  const increment = useSpinner(bpm, () => updateBpm(bpm + 1));
  const decrement = useSpinner(bpm, () => updateBpm(bpm - 1));

  React.useEffect(() => {
    const onMouseUp = () => {
      increment.stop();
      decrement.stop();
    }
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

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
      <button onMouseDown={increment.start}>
        <Icon name="increment" />
      </button>
      <button onMouseDown={decrement.start}>
        <Icon name="decrement" />
      </button>
    </div>
  </>;
};



interface HeaderProps {
  song: Song;
  updateSong:  (song: Song) => void;
  instruments: Instrument[];
}

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
        <select value={song.instrumentId} className="mR10" onChange={(event) => {
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


const scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];
const fullScale: string[] = [];
for (let i = 1; i < 7; i++) {
  for (const pitch of scale) {
    fullScale.unshift(`${pitch}${i}`);
  }
}

const fullScaleToYCoord: { [key: string]: number } = {};
(() => {
  for (let i = 0; i < fullScale.length; i++) {
    fullScaleToYCoord[fullScale[i]] = i;
  }
})();


interface EditorProps {
  song: Song;
  updateSong: (song: Song) => void;
}

function formatPitch(pitch: string) {
  if (pitch.includes('#')) return pitch.replace('#', '♯');
  if (pitch.includes('b')) return pitch.replace('b', '♭');
  return `${pitch[0]} ${pitch[1]}`;
}

// determines the # of beats (columns) to show
function getColumnCount(song: Song) {
  const MIN_LENGTH = 20;
  const EXTRA_VISIBLE_COLUMNS = 10; // the number of additional columns to show after the last detected note
  let maxNotePosition = 0;
  for (const note of song.notes) {
    maxNotePosition = Math.max(maxNotePosition, note.x);
  }
  return Math.max(maxNotePosition + EXTRA_VISIBLE_COLUMNS, MIN_LENGTH);
}

interface Coordinate {
  x: number;
  y: number;
}

const Editor: React.FC<EditorProps> = ({ song, updateSong }) => {
  const X_OFFSET = 60;
  const Y_OFFSET = 10;
  const ROW_HEIGHT = 20;
  const ROW_WIDTH = 20;
  const PADDING = 4;

  const [hoveredX, setHoveredX] = React.useState(-1);
  const [hoveredY, setHoveredY] = React.useState(-1);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    let isPainting = false;

    let x = 0;
    let y = 0;

    // let priorX = -1;
    // let priorY = -1;

    const paint = (event: MouseEvent) => {
      const newX = event.offsetX - canvas.offsetLeft;
      const newY = event.offsetY - canvas.offsetTop;

      const xCoord = Math.round(newX / (ROW_WIDTH + PADDING)) - 3;
      const yCoord = Math.round(newY / (ROW_HEIGHT + PADDING)) - 1;

      if (xCoord < 0 || yCoord < 0) return;

      setHoveredX(xCoord);
      setHoveredY(yCoord);

      if (!isPainting) return;

      {
        // add only mode when dragging, no removal:
        const pitch = fullScale[yCoord];
        const existingNote = song.notes.find((note) => note.pitch === pitch && note.x === xCoord);
        if (!existingNote) {
          song.notes.push({
            x: xCoord,
            pitch,
            duration: 1
          });
          updateSong({ ...song });
        }
      }

      x = newX;
      y = newY;
    };

    const startPaint = (event: MouseEvent) => {
      isPainting = true;
      x = event.offsetX - canvas.offsetLeft;
      y = event.offsetY - canvas.offsetTop;

      const xCoord = Math.round(x / (ROW_WIDTH + PADDING)) - 3;
      const yCoord = Math.round(y / (ROW_HEIGHT + PADDING)) - 1;

      if (xCoord < 0 || yCoord < 0) return;

      {
        const pitch = fullScale[yCoord];
        const existingNoteIndex = song.notes.findIndex((note) => note.pitch === pitch && note.x === xCoord);
        if (existingNoteIndex === -1) {
          song.notes.push({
            x: xCoord,
            pitch,
            duration: 1
          });
        }
        else {
          // clicking an already existing note will toggle it off
          song.notes.splice(existingNoteIndex, 1);
        }
        updateSong({ ...song });
      }
    };

    const stopPaint = (event: MouseEvent) => {
      isPainting = false;
      x = 0;
      y = 0;
      setHoveredX(-1);
      setHoveredY(-1);
      // priorX = -1;
      // priorY = -1;
    };

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseleave', stopPaint);
    canvas.addEventListener('mouseup', stopPaint);

    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseleave', stopPaint);
      canvas.removeEventListener('mouseup', stopPaint);
    };
  }, []);


  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    const columns = getColumnCount(song);

    // create a high DPI canvas based on devicePixelRatio:
    {
      const pixelRatio = window.devicePixelRatio || 1;

      const height = fullScale.length * (ROW_HEIGHT + PADDING) + Y_OFFSET;
      const width = columns * (ROW_WIDTH + PADDING * 2) + X_OFFSET;

      canvas.height = height * pixelRatio;
      canvas.width = width * pixelRatio;

      canvas.style.height = `${height}px`;
      canvas.style.width = `${width}px`;

      ctx.scale(pixelRatio, pixelRatio);
    }

    // write each note name in the first column:
    {
      ctx.font = '12px monospace';
      ctx.fillStyle = '#677fa1';

      for (let i = 0; i < fullScale.length; i++) {
        const pitch = fullScale[i];
        const x = 20;
        const y = (ROW_HEIGHT + PADDING) * (i + 1);
        ctx.fillText(formatPitch(pitch), x, y);
      }
    }

    // draw a grid of empty squares:
    {

      for (let y = 0; y < fullScale.length; y++) {
        for (let x = 0; x < columns; x++) {
          const v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
          const h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
          ctx.fillStyle = (x === hoveredX && y === hoveredY) ? '#8699b5' : (x === hoveredX || y === hoveredY) ? '#b5c2d2' : '#c5cfdc';
          ctx.fillRect(h, v, ROW_WIDTH, ROW_HEIGHT);
        }
      }
    }

    // fill in the squares for the song's notes:
    {
      ctx.fillStyle = '#00a9ff';

      for (const note of song.notes) {
        const { x, duration, pitch } = note;
        const y = fullScaleToYCoord[pitch];
        const v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
        const h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
        const width = (ROW_WIDTH * duration) + (PADDING * (duration - 1));
        ctx.fillRect(h, v, width, ROW_HEIGHT);
      }
    }

  }, [song, hoveredX, hoveredY]);
  // const grid = React.useMemo(() => {

  //   // where the key is `${pitch}${x}`
  //   const noteByCoord = new Map<string, song.NoteV2>();

  //   const MIN_LENGTH = 30;
  //   const PADDING = 10;
  //   let max = 0;
  //   for (const note of song.notes) {
  //     max = Math.max(max, note.x);
  //     noteByCoord.set(`${note.pitch}${note.x}`, note);
  //   }
  //   const length = Math.max(max + PADDING, MIN_LENGTH);

  //   const result: { pitch: string, duration: number, x: number, hasValue: boolean }[][] = [];
  //   for (let y = 0; y < fullScale.length; y++) {
  //     const pitch = fullScale[y];
  //     const row: { pitch: string, duration: number, x: number, y: number, hasValue: boolean }[] = [];
  //     for (let x = 0; x < length;) {
  //       const key = `${pitch}${x}`;
  //       const note = noteByCoord.get(key);
  //       if (note) {
  //         row.push({ pitch, duration: note.duration, x, y, hasValue: true });
  //         x += note.duration;
  //       }
  //       else {
  //         row.push({ pitch, duration: 1, x, y, hasValue: false });
  //         x += 1;
  //       }
  //     }
  //     result.push(row);
  //   }

  //   return result;
  // }, [song]);

  // console.log({ grid, length });

  return <>
    <div className="Editor">
      <canvas id="canvas" ref={canvasRef} />
      {/*
      <table>
        <tbody>
          {grid.map((row, y) => (
            <tr key={fullScale[y]}>
              <td key='pitch' className="pitch">{formatNote(fullScale[y])}</td>
              {
                row.map((note, x) => (
                  <td
                    key={`${fullScale[y]}-${x}`}
                    className={`note ${note.hasValue ? 'active' : ''}`}
                    colSpan={note.duration}
                  >
                    <button onClick={() => {
                      console.log(note);
                      // TODO: actually implement this
                      song.notes.push({
                        pitch: fullScale[y],
                        duration: 1,
                        x
                      });
                      const newSong = {...song};
                      updateSong(newSong);
                    }}>{note.duration}</button>
                  </td>
                ))
              }
            </tr>
           ))}
        </tbody>
      </table>
      */}
    </div>
  </>;
}




interface ControlsProps {
  song: Song;
  updateSong: (song: Song) => void;
  togglePlay: () => void;
}


const Controls: React.FC<ControlsProps> = ({ song, updateSong, togglePlay }) => {
  return <>
    <div className="Controls">
      <button className="Control-play" onClick={togglePlay}>
        <Icon name="play" size={18} />
      </button>
      {
        <div>
          <button
            className="button mR20"
            onClick={() => {
              song.notes.length = 0;
              updateSong({ ...song });
            }}>
              Clear
          </button>
        </div>
      }
    </div>
  </>;
}





// const songs = [song.defaults['Lux Aeterna'], song.defaults['Mario'], song.defaults['Twinkle']];
const songs = [song.defaults['New Song']];

function App() {

  const [activeSong, setActiveSong] = React.useState<Song>(songs[0]);

  const updateSong = (song: Song) => {
    const priorSongIndex = songs.findIndex((x) => x.id === song.id);
    const priorSong = songs[priorSongIndex];
    if (!priorSong) return;
    songs.splice(priorSongIndex, 1, song);
    setActiveSong(song);
  };

  const togglePlay = async () => {
    const activeInstrument = instrument.defaults[activeSong.instrumentId];
    const beatLength = (60 / 4) / activeSong.bpm; // / 4 since it's quarter notes?
    for (const note of activeSong.notes) {
      activeInstrument.wad.play({
        pitch: note.pitch,
        wait: beatLength * note.x,
        env: { hold: note.duration * beatLength }
      });
    }
  };

  return <>
    <div className="App">
      <Header
        song={activeSong}
        updateSong={updateSong}
        instruments={[
          instrument.defaults['Flute'],
          instrument.defaults['Piano'],
          instrument.defaults['Synth Lead']
        ]}
      />
      <Sidebar
        songs={songs}
        activeSong={activeSong}
        setActiveSong={setActiveSong}
      />
      <Editor song={activeSong} updateSong={updateSong} />
      <Controls song={activeSong} updateSong={updateSong} togglePlay={togglePlay} />
    </div>
  </>;
}

ReactDOM.render(<App />, document.getElementById('app'));

