import "./Tags.scss";
import { Label } from "../Typography/Typography";

function Tags({ tag, isSelected, onClick }) {
  return (
    <figure
      className={`tag ${isSelected ? "tag--selected" : ""}`}
      onClick={onClick ? () => onClick(tag) : null}
    >
      <Label>{tag}</Label>
    </figure>
  );
}

export default Tags;
