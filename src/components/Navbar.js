import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => res.data)
      .then((user) => setUser(user));
  }, []);

  return (
    <nav className="navbar has-background-black-ter mb-4">
      <Link to= "/">
      <h3 className="navbar-item has-text-success pt-4">REACTIFY</h3>
      </Link>
      <div className="navbar-item navbar-end">
        <Link to="/collection/playlists">
          <button className="button is-ghost has-text-white">Playlists</button>
        </Link>
        <Link to="/collection/artists">
          <button className="button is-ghost has-text-white">Artists</button>
        </Link>
        <Link to="/collection/albums">
          <button className="button is-ghost has-text-white">Albums</button>
        </Link>
      </div>
      <div className="navbar-item navbar-end">
        {user.id ? (
          <p className="has-text-white">{user.display_name}</p>
        ) : (
          <a
            href="http://localhost:3001/api/login"
            className="button is-primary"
          >
            <strong>Log in</strong>
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
