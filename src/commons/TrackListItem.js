import TrackItem from "./TrackItem";

const TrackListItem = ({ tracks, action }) => {
  return (
    <section className="pt-4">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Álbum</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, i) => (
            <TrackItem track={track} key={i} i={i} action={action}/>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TrackListItem;
