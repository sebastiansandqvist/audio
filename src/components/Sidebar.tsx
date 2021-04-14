declare const React: typeof import('react');
import * as song from '../song';

type Song = song.T;

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


export default Sidebar;
