declare const React: typeof import('react');
import { Song } from '../song';


interface SidebarProps {
  songs: { [key: string]: Song };
  activeSong: Song;
  setActiveSongId: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ songs, activeSong, setActiveSongId }) => {
  return <>
    <aside className="Sidebar">
      <div className="Sidebar-heading">Songs</div>
      <div className="pad20">
      {Object.keys(songs).map((songId) => (
        <a
          className={activeSong.id === songId ? 'active' : ''}
          href="#"
          key={songId}
          onClick={(event) => {
            event.preventDefault();
            setActiveSongId(songId);
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
