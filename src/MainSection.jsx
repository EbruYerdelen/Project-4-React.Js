export default function MainSection(props) {
  return (
    <div className="dest1">
      <img
        className="dest1-img"
        src={`src/assets/${props.data.imageUrl}`}
        alt="dest1-img"
      />
      <div className="info">
        <div className="location-cont">
          <img
            className="location-icon"
            src="src/assets/Fill219.png"
            alt="location-icon"
          />
          <h3 className="country">{props.data.location}</h3>
          <a href={props.data.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1 className="location-title">{props.data.title}</h1>
        <div className="dates">
          <p className="start-date">{props.data.startDate + " " + "-"}</p>
          <p className="end-date">{"" + props.data.endDate}</p>
        </div>
        <p className="description">{props.data.description}</p>
      </div>
    </div>
  );
}
