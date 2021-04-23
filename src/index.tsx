declare const React: typeof import('react');
declare const ReactDOM: typeof import('react-dom');
declare const Wad: typeof import('web-audio-daw');
import { songData, Note, Song } from './song';
import { instruments, Instrument } from './instrument';
import {
  Controls,
  Editor,
  Header,
  Icon,
  Sidebar
} from './components';

const songs = { ...songData };

function App() {

  // const songs = React.useRef<{[key: string]: Song }>({ ...songData });
  const [activeSongId, setActiveSongId] = React.useState('New Song');
  const [activeSong, setActiveSong] = React.useState(songs[activeSongId]);
  const [activeBeat, setActiveBeat] = React.useState(-1);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const updateSong = (songId: string, updates: Partial<Song>) => {
    const updatedSong = Object.assign({}, songs[songId], updates);
    songs[songId] = updatedSong;
    setActiveSong(updatedSong);
  };

  const togglePlay = () => {
    if (isPlaying) return; // TODO: add pause (or stop) functionality here instead of blocking double play
    setIsPlaying(true);
    const activeInstrument = instruments[activeSong.instrumentId];
    const beatLength = (60 / 4) / activeSong.bpm; // / 4 since it's quarter notes?

    // 1. queue up all the audio to be played at the correct `wait` offset:
    for (const note of activeSong.notes) {
      activeInstrument.wad.play({
        pitch: note.pitch,
        wait: beatLength * note.x,
        env: { hold: note.duration * beatLength }
      });
    }

    // 2. calculate the end timestamp x coordinate:
    let maxBeatX = 0;
    for (const note of activeSong.notes) {
      maxBeatX = Math.max(maxBeatX, note.x + note.duration);
    }

    // 3. update the `activeBeat` on each tick:
    let beat = 0;
    setActiveBeat(beat);
    const interval = setInterval(() => {
      beat++;
      setActiveBeat(beat);
      if (beat >= maxBeatX) {
        clearInterval(interval);
        setIsPlaying(false);
        setActiveBeat(-1);
      }
    }, beatLength * 1000);
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
        activeSongId={activeSongId}
        setActiveSongId={setActiveSongId}
        setActiveSong={setActiveSong}
        songs={songs}
      />
      <Editor
        activeBeat={activeBeat}
        activeSongId={activeSongId}
        song={activeSong}
        updateSong={updateSong}
      />
      <Controls
        activeSongId={activeSongId}
        updateSong={updateSong}
        togglePlay={togglePlay}
      />
    </div>
  </>;
}

ReactDOM.render(<App />, document.getElementById('app'));

