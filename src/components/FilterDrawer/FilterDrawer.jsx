import "./FilterDrawer.scss"; 
import tags from "../../data/tags.json"; 
import Tags from "../Tags/Tags";
import { Heading } from "../Typography/Typography";
import { BodyCopy } from "../Typography/Typography";

function FilterDrawer({ selectedFilter, setSelectedFilter, isDrawerOpen }) {
    if (!isDrawerOpen) return null;
  return (
    <div className="filter-drawer">
      <Heading><p className="filter-drawer__header"> Filters</p></Heading>
      <BodyCopy> <div className="filter-drawer__tags">
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
      </BodyCopy>
    </div>
  );
}

export default FilterDrawer;
