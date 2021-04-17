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

function App() {

  const [songs, setSongs] = React.useState({ ...songData });
  const [activeSongId, setActiveSongId] = React.useState('New Song');
  const [activeBeat, setActiveBeat] = React.useState(-1);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const updateSong = (song: Song) => {
    setSongs(Object.assign({}, songs, { [song.id]: song }));
  };

  const togglePlay = () => {
    if (isPlaying) return; // TODO: add pause functionality here instead of blocking double play
    setIsPlaying(true);
    const activeSong = songs[activeSongId];
    const activeInstrument = instruments[activeSong.instrumentId];
    const beatLength = (60 / 4) / activeSong.bpm; // / 4 since it's quarter notes?

    for (const note of activeSong.notes) {
      activeInstrument.wad.play({
        pitch: note.pitch,
        wait: beatLength * note.x,
        env: { hold: note.duration * beatLength }
      });
    }

    let maxBeatX = 0;
    for (const note of activeSong.notes) {
      maxBeatX = Math.max(maxBeatX, note.x + note.duration);
    }

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
        song={songs[activeSongId]}
        updateSong={updateSong}
        instruments={[
          instruments['Flute'],
          instruments['Piano'],
          instruments['Synth Lead']
        ]}
      />
      <Sidebar
        songs={songs}
        activeSong={songs[activeSongId]}
        setActiveSongId={setActiveSongId}
      />
      <Editor
        activeBeat={activeBeat}
        activeSongId={activeSongId}
        song={songs[activeSongId]}
        updateSong={updateSong}
      />
      <Controls song={songs[activeSongId]} updateSong={updateSong} togglePlay={togglePlay} />
    </div>
  </>;
}

ReactDOM.render(<App />, document.getElementById('app'));

