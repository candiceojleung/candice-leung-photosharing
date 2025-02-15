import "./Tags.scss";
import { BodyCopy } from "../Typography/Typography";

function Tags({ tag, isSelected, onClick  }) {
  return (
    <BodyCopy><div
    className={`tag ${isSelected ? "tag--selected" : ""}`}
    onClick={onClick ? () => onClick(tag) : undefined} 
    >
      {tag}
    </div>
    </BodyCopy>
  );
}
  
export default Tags;