import FilterButton from "../FilterButton/FilterButton";
import "./Header.scss";
import { Wordmark } from "../Typography/Typography";

function Header({ toggleDrawer, isDrawerOpen }) {
  return (
    <div className="header">
     <Wordmark>Snaps</Wordmark>
      <div className="header__button">
        <FilterButton onClick={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      </div>
    </div>
  );
}

export default Header;
