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


function App() {

  const [songs, setSongs] = React.useState<{[key: string]: Song }>({
    'New Song': song.defaults['New Song'],
    'Carol': song.defaults['Carol']
  });

  const [activeSongId, setActiveSongId] = React.useState<string>('New Song');


  const updateSong = (song: Song) => {
    setSongs(Object.assign({}, songs, { [song.id]: song }));
  };

  const togglePlay = async () => {
    const activeSong = songs[activeSongId];
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
        song={songs[activeSongId]}
        updateSong={updateSong}
        instruments={[
          instrument.defaults['Flute'],
          instrument.defaults['Piano'],
          instrument.defaults['Synth Lead']
        ]}
      />
      <Sidebar
        songs={songs}
        activeSong={songs[activeSongId]}
        setActiveSongId={setActiveSongId}
      />
      <Editor activeSongId={activeSongId} song={songs[activeSongId]} updateSong={updateSong} />
      <Controls song={songs[activeSongId]} updateSong={updateSong} togglePlay={togglePlay} />
    </div>
  </>;
}

ReactDOM.render(<App />, document.getElementById('app'));

