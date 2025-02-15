import { SmallBodyCopy } from "../Typography/Typography";
import "./PhotoCard.scss";
SmallBodyCopy

function PhotoCard({ url, alt, photographer, tags }) {
  return (
    <div className="photo">
      <div className="photo__content">
        <img className="photo__image" src={url} alt={alt} />
        <SmallBodyCopy><div className="photo__photographer">{photographer}</div></SmallBodyCopy>
      </div>
      <SmallBodyCopy><div className="photo__tags">
        {tags.map((tag, index) => (
          <p key={index} className="photo_tag">
            {tag}
          </p>
        ))}
      </div>
      </SmallBodyCopy>
    </div>
  );
}

export default PhotoCard;
