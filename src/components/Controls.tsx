declare const React: typeof import('react');
import Icon from './Icon';
import { Song } from '../song';

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

export default Controls;
