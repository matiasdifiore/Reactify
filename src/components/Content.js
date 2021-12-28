import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../commons/Header";
import TrackListItem from "../commons/TrackListItem";
import {useParams, useHistory, Route,Switch} from "react-router-dom";
import useInput from "../hooks/useInput"
import {capitalize} from "../utils/functions"




const Content = () => {
  const [data, setData]=useState({});
  const { type, id } = useParams();
  let history= useHistory();
  const search = useInput();
  const [searchResult, setSearchResult]= useState([]);

  
  useEffect(() => {
    if (!{id}) return;
    
    axios
    .get(`/api/${type}/${id}`)
    .then((res) => res.data)
    .then((dt) => setData(dt))
    .catch(()=> history.push("/404"))
  }, [id]);
  
  
  if (!data.name) return (
    
    <div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
  )

  const handleSubmit=(e)=>{
    e.preventDefault();

    axios
    .get(`/api/tracks/search?q=${search.value}`)
    .then((res)=> res.data)
    .then((tracks)=>{
      setSearchResult(tracks.items)
    })
  }

  const addToPlaylist = (track) => {
    console.log(track);
    axios
      .post(`/api/playlists/${id}/tracks`, { uri: track.uri })
      .then(() => {
        alert("Track agregado exitosamente");
        return axios.get(`/api/${type}/${id}`);
      })
      .then((res) => res.data)
      .then((data) => setData(data));
  };

  return (
    <section className="layout">
      <Header {...data} type={capitalize(type)} />
      <Switch>
      <Route path="/single/playlists/:id/add"> 
        <form onSubmit={handleSubmit}>
          <label className="label my-3">Search</label>
          <input
            {...search}
            className="input my-3"
            type="text"
            placeholder="Search tracks"
          />
        </form>
        <TrackListItem tracks={searchResult} action={addToPlaylist}/>
      </Route>
      <Route path="*">
      <TrackListItem tracks={data.tracks || []} />
      </Route>
      </Switch>
    </section>
  );
};

export default Content;
