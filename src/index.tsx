declare const React: typeof import('react');
declare const ReactDOM: typeof import('react-dom');
declare const Wad: typeof import('web-audio-daw');
import * as song from './song';
import * as instrument from './instrument';
import {
  Controls,
  Editor,
  Header,
  Icon,
  Sidebar
} from './components';

type Song = song.T;
type Note = song.Note;
type Instrument = instrument.T;


const songs = [song.defaults['Mario'], song.defaults['Lux Aeterna'], song.defaults['Twinkle'], song.defaults['New Song']];

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

