import FilterButton from "../FilterButton/FilterButton";
import "./Header.scss";
import { Wordmark } from "../Typography/Typography";

function Header({ toggleDrawer, isDrawerOpen }) {
  return (
    <div className="header">
      <h1 className="header__title"><Wordmark>Snaps</Wordmark></h1>
      <div className="header__button">
        <FilterButton onClick={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      </div>
    </div>
  );
}

export default Header;
