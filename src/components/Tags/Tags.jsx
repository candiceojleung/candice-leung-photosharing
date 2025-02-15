import "./Tags.scss";
import { BodyCopy } from "../Typography/Typography";

function Tags({ tag, isSelected, onClick }) {
  return (
   
      <div
        className={`tag ${isSelected ? "tag--selected" : ""}`}
        onClick={onClick ? () => onClick(tag) : undefined}
      >
         <BodyCopy>{tag}</BodyCopy>
      </div>
  );
}

export default Tags;
