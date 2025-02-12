import FilterDrawer from "../FilterDrawer/FilterDrawer"
import "./FilterButton.scss"

function FilterButton() {
    return (
        <>
            <button>Filter
                <img src="../src/assets/images/Filter.svg" alt="filter icon"></img>
            </button>
            <FilterDrawer />
        </>
    )
}

export default FilterButton