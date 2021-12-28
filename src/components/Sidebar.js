import { Link } from "react-router-dom";

const Sidebar = ({ playlists, artists }) => {
  return (
    <aside className="menu column is-one-quarter">
      <div className="is-flex is-justify-content-space-between">
        <p className="menu-label">Playlists</p>
        <Link to={'/new-playlist'}>
        <button className="button is-success is-small">NEW</button>
        </Link>
      </div>
      <ul className="menu-list">
        {playlists.map((playlist, i) => (
          <li key={i}>
            <Link to={`/single/playlists/${playlist.id}`}>{playlist.name}</Link>{" "}
          </li>
        ))}
      </ul>
      <p className="menu-label">Artists</p>
      <ul className="menu-list">
        {artists.map((artist, i) => (
          <li key={i}>
            <Link to={`/single/artists/${artist.id}`}>{artist.name}</Link>{" "}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
