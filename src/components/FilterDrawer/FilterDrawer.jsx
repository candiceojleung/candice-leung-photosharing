import "./FilterDrawer.scss";
import FilterTags from "../FilterTags/FilterTags";

function FilterDrawer({ selectedTag, setSelectedFilter, isDrawerOpen }) {
    if (!isDrawerOpen) return null;
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
