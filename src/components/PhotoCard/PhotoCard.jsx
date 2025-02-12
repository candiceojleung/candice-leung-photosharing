import "./PhotoCard.scss";

function PhotoCard({ url, alt, photographer, tags,id }) {
  return (
    <div className="photocard">
      <img src={url} alt={alt} />
      <p className="photocard__photographer">{photographer}</p>
      <ul className="photocard__tags">
        {tags.map((tag,index) => {
          return <li  key={`${index}`} id={id} className="photocard__tag">{tag}</li>;
        })}
      </ul>
    </div>
  );
}

export default PhotoCard;
