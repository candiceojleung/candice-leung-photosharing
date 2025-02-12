import FilterButton from "../FilterButton/FilterButton"
import "./Header.scss"

function Header() {
    return (
        <>
            <h1 className="header__title">Snaps</h1>
            <FilterButton/>
        </>
    )
}

export default Header