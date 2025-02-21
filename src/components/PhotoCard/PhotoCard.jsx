import { SmallBodyCopy } from "../Typography/Typography";
import "./PhotoCard.scss";
import { Link } from "react-router-dom";

function PhotoCard({ url, alt, photographer, tags, id }) {
  return (
    <section className="photo">
      <div className="photo__content">
        <Link to={`/photo/${id}`} className="photo__link">
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
    </section>
  );
}

export default PhotoCard;
