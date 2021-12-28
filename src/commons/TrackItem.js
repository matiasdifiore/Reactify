import { millisToMinutesAndSeconds } from "../utils/functions";

const TrackItem = ({ track, i, action }) => {
  return (
    <tr>
      {action ? (
        <td>
          <button
            className="button is-success"
            onClick={() => action(track)}
          >
            ➕
          </button>
        </td>
      ) : (
        <td>{i + 1}</td>
      )}
     
      <td>
        <span>{track.name}</span>
        <p className="has-text-grey">{track.artists[0].name}</p>
      </td>
      <td>{track.album.name}</td>
      <td>{millisToMinutesAndSeconds(track.duration_ms)}</td>
    </tr>
  );
};

export default TrackItem;
