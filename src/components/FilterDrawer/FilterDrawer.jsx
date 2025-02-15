import "./FilterDrawer.scss"; 
import tags from "../../data/tags.json"; 
import Tags from "../Tags/Tags";

function FilterDrawer({ selectedFilter, setSelectedFilter, isDrawerOpen }) {
    if (!isDrawerOpen) return null;
  return (
    <div className="filter-drawer">
      <h3 className="filter-drawer__header">Filter</h3>
      <div className="filter-drawer__tags">
      {tags.map((tag, index) => (
        <Tags 
          key={index} 
          tag={tag} 
          isClickable={true} 
          isSelected={selectedFilter === tag}
          onClick={setSelectedFilter} 
        />
      ))}
      </div>
    </div>
  );
}

export default FilterDrawer;
