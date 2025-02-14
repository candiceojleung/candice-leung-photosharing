import "./Tags.scss";

function Tags({ tag, isSelected, onClick  }) {
  return (
    <div
    className={`tag ${isSelected ? "tag--selected" : ""}`}
    onClick={onClick ? () => onClick(tag) : undefined} 
    >
      {tag}
    </div>
  );
}
  
export default Tags;