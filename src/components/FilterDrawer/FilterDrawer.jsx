import "./FilterDrawer.scss";
import FilterTags from "../FilterTags/FilterTags";

function FilterDrawer({ selectedTag, setSelectedFilter }) {
  return (
    <>
      <FilterTags
        selectedTag={selectedTag}
        setSelectedFilter={setSelectedFilter}
      />
    </>
  );
}

export default FilterDrawer;
