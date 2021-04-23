declare const React: typeof import('react');
import { Song } from '../song';


interface SidebarProps {
  songs: { [key: string]: Song };
  activeSongId: string;
  setActiveSongId: (id: string) => void;
  setActiveSong: (song: Song) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ songs, activeSongId, setActiveSongId, setActiveSong }) => {
  return <>
    <aside className="Sidebar">
      <div className="Sidebar-heading">Songs</div>
      <div className="pad20">
      {Object.keys(songs).map((songId) => (
        <a
          className={activeSongId === songId ? 'active' : ''}
          href="#"
          key={songId}
          onClick={(event) => {
            event.preventDefault();
            setActiveSongId(songId);
            setActiveSong(songs[songId]);
          }}
        >
            {songs[songId].title || 'Untitled'}
        </a>
      ))}
      </div>
    </aside>
  </>;
};


export default Sidebar;
