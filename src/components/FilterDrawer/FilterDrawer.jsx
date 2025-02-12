import "./FilterDrawer.scss"
import FilterTags from "../FilterTags/FilterTags"

function FilterDrawer({setSelectedFilter}) {
    return (
        <>
            <FilterTags setSelectedFilter={setSelectedFilter}/>
        </>
    )
}

export default FilterDrawer