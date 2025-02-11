import "./PhotoCard.scss";

function PhotoCard({ url, alt, photographer }) {
  return (
    <div className="photocard">
      <img src={url} alt={alt} />
      <h2 className="photocard__photographer">{photographer}</h2>;
    </div>
  );
}

export default PhotoCard;
