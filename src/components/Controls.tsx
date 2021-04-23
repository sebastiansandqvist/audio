declare const React: typeof import('react');
import Icon from './Icon';
import { Song } from '../song';

interface ControlsProps {
  activeSongId: string;
  updateSong: (songId: string, updates: Partial<Song>) => void;
  togglePlay: () => void;
}


const Controls: React.FC<ControlsProps> = ({ activeSongId, updateSong, togglePlay }) => {
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
              updateSong(activeSongId, { notes: [] });
            }}>
              Clear
          </button>
        </div>
      }
    </div>
  </>;
}

export default Controls;
