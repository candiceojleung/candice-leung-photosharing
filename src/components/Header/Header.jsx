import FilterButton from "../FilterButton/FilterButton";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Snaps</h1>
      <div classname="header__button">
        <FilterButton />
      </div>
    </div>
  );
}

export default Header;
