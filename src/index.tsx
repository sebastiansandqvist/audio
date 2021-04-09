declare const React: typeof import('react');
declare const ReactDOM: typeof import('react-dom');
declare const Wad: typeof import('web-audio-daw');

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      {title}
    </header>
  );
}

interface Instrument {
  id: string;
  wad: typeof Wad;
}

interface Song {
  id: string;
  title: string;
  bpm: number;
  instrumentId: string;
}

const Sidebar: React.FC<{ songs: Song[] }> = ({ songs }) => {
  return (
    <aside>
      {songs.map((song) => (
        <a href={song.id}>{song.title}</a>
      ))}
    </aside>
  );
};

function App() {
  return (
    <div className="App">
      <Header title="Hello World"></Header>
      <Sidebar songs={[]}></Sidebar>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

const piano = new Wad({
  source: 'square',
  pitch: 'C4',
  env: {
    attack: 0.01,
    decay: 0.005,
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
});

piano.play();
