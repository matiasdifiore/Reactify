import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { fakePlaylists } from "./utils/fakeData";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import Grid from "./components/Grid";
import NewPlaylist from "./components/NewPlaylist";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("/api/playlists")
      .then((res) => res.data)
      .then((playlists) => setPlaylists(playlists.items));
    axios
      .get("/api/artists")
      .then((res) => res.data)
      .then((artists) => setArtists(artists.items));
    axios
      .get("/api/albums")
      .then((res) => res.data)
      .then((albums) => setAlbums(albums.items));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container is-fluid columns">
        <Sidebar playlists={playlists} artists={artists} />
        <Switch>
          <Route path= "/new-playlist" render = {()=> <NewPlaylist /> } />
          <Route exact path="/" render={() => <p>¡Bienvenidos a Reactify!</p>} />
          <Route  path="/404" render={() => <p>404</p>} />

          <Route  path="/single/playlist/{id}/add">
          <Content />
          </Route>
          <Route  path="/single/:type/:id">
            <Content />
          </Route>
          
          <Route path="/collection/:type">
            <Grid albums={albums} playlists={playlists} artists={artists} />
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
