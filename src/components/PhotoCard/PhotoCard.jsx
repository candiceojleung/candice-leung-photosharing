import "./PhotoCard.scss";

function PhotoCard({ url, alt, photographer, tags }) {
  return (
    <div className="photo">
      <div className="photo__content">
        <img className="photo__image" src={url} alt={alt} />
        <div className="photo__photographer">{photographer}</div>
      </div>
      <div className="photo__tags">
        {tags.map((tag, index) => (
          <p key={index} className="photo_tag">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PhotoCard;
