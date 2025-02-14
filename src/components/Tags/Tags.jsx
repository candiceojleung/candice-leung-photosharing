import "./Tags.scss";

function Tags({ tag, isSelected, onClick }) {
  return (
    <button
    className={`tag ${isSelected ? "tag--selected" : ""}`}
    onClick={onClick ? () => onClick(tag) : undefined} 
    >
      {tag}
    </button>
  );
}
  
export default Tags;