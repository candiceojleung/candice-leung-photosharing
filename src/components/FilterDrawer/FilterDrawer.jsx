import "./FilterDrawer.scss"; 
import tags from "../../data/tags.json"; 
import Tags from "../Tags/Tags";

function FilterDrawer({ selectedFilter, setSelectedFilter, isDrawerOpen }) {
    if (!isDrawerOpen) return null;
  return (
    <div className="filter-drawer">
      {tags.map((tag, index) => (
        <Tags 
          key={index} 
          tag={tag} 
          isClickable={true} 
          isSelected={selectedFilter === tag}
          onClick={() => setSelectedFilter(tag === selectedFilter ? null : tag)} 
        />
      ))}
    </div>
  );
}

export default FilterDrawer;
