import "./PhotoCard.scss";
import Tags from "../Tags/Tags";

function PhotoCard({ url, alt, photographer, tags}) {
  return (
    <div className="photo">
      <div className="photo__content">
        <img className="photo__image" src={url} alt={alt} />
        <div className="photo__photographer">{photographer}</div>
      </div>
      <div className="photo__tags">
        {tags.map((tag, index) => (
          <Tags 
            tag={tag} 
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoCard;
