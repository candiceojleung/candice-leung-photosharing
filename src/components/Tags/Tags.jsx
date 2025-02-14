import "./Tags.scss";

function Tags({ tag, isClickable = false, isSelected, onClick }) {
  return (
    <button
      className={`tag ${isClickable ? "tag--clickable" : ""} ${
        isSelected ? "tag--selected" : ""
      }`}
      onClick={isClickable ? () => onClick(tag) : undefined} 
    >
      {tag}
    </button>
  );
}
  
export default Tags;