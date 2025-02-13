import FilterButton from "../FilterButton/FilterButton";
import "./Header.scss";

function Header({toggleDrawer}) {
  return (
    <div className="header">
      <h1 className="header__title">Snaps</h1>
      <div className="header__button">
        <FilterButton onClick={toggleDrawer}/>
      </div>
    </div>
  );
}

export default Header;
