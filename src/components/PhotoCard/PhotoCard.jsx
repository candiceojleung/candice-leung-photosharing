import { SmallBodyCopy } from "../Typography/Typography";
import "./PhotoCard.scss";
import {Link} from "react-router-dom"

function PhotoCard({ url, alt, photographer, tags, id }) {
  return (
    <div className="photo">
      <div className="photo__content">
        <Link to={`/photo/${id}`}>
        <img className="photo__image" src={url} alt={alt} />
        </Link>
        <SmallBodyCopy>
          <div className="photo__photographer">{photographer}</div>
        </SmallBodyCopy>
      </div>
      <SmallBodyCopy>
        <div className="photo__tags">
          {tags.map((tag, index) => (
            <p key={index} className="photo__tag">
              {tag}
            </p>
          ))}
        </div>
      </SmallBodyCopy>
    </div>
  );
}

export default PhotoCard;
