import { Route, useRouteMatch, Link } from "react-router-dom";

const Header = ({ images, name, description, type }) => {
  const match = useRouteMatch()
  console.log('logueando match', match)

  return (
    <header className="has-background-primary-dark p-5 has-text-white">
      <div className="is-flex is-justify-content-space-between">
        <p className="is-size-5">{type}</p>
        
        <Route exact path="/single/playlists/:id">
          <Link to={`${match.url}/add`}>
              <button className="button is-link is-small">Add tracks</button>
          </Link>
        </Route>
        <Route path='/single/playlists/:id/add'>
          <Link to={`${match.url}`}>
              <button className="button is-warning is-small">Stop adding</button>
          </Link>
        </Route>
      </div>
      <div className="is-flex">
        <img
          src={images[0]?.url}
          alt=""
          style={{ width: "256px", height: "256px" }}
        />
        <div className="p-4 is-flex is-flex-direction-column is-justify-content-space-around">
          <p className="is-size-1">{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;