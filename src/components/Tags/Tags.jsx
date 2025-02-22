import "./Tags.scss";
import { Label } from "../Typography/Typography";

function Tags({ tag, isSelected, onClick }) {
  return (
    <div
      className={`tag ${isSelected ? "tag--selected" : ""}`}
      onClick={onClick ? () => onClick(tag) : null}
    >
      <Label>{tag}</Label>
    </div>
  );
}

export default Tags;
