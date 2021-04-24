declare const React: typeof import('react');
import { Song } from '../song';


interface SidebarProps {
  songs: { [key: string]: Song };
  activeSongId: string;
  setActiveSongId: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ songs, activeSongId, setActiveSongId }) => {
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
