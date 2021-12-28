import React,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import useInput from "../hooks/useInput"


const NewPlaylist = () => {

  const history= useHistory();
  const name = useInput();
  const description= useInput();
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      
      axios.post("/api/playlists",{
          name:name.value,
          description:description.value,})
      .then(res=>res.data)
      .then(playlist=>{
          console.log("playlist",playlist)
          history.push(`/`) 
        //   aca hay un error con el pedido get, no se actualiza el back cuando submitteo
      })
      
  }

  return (
    <div className="layout m-5">
    <h3 className="title is-3">New Playlist</h3>
    <form onSubmit={handleSubmit}>
      <label className="label my-3">Name</label>
      <input
          value={name.value}
          onChange={name.onChange}
          className="input my-3"
          type="text"
          placeholder="Title"
        />

      <label className="label my-3">Description</label>
      <textarea 
      {...description}
      className="textarea"
    
      placeholder="Description">

      </textarea>
      <button className="button is-link my-5">Submit</button>
    </form>
  </div>
  );
};

export default NewPlaylist;
