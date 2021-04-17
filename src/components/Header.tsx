declare const React: typeof import('react');
import { Song } from '../song';
import { Instrument } from '../instrument';
import Tempo from './Tempo';

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

export default Header;
