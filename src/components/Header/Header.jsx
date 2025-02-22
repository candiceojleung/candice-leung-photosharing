import FilterButton from "../FilterButton/FilterButton";
import "./Header.scss";
import { Wordmark } from "../Typography/Typography";
import { Link } from "react-router-dom";

function Header({ toggleDrawer, isDrawerOpen }) {
  return (
    <header className="header">
      <Link to={`/`}>
        <Wordmark>Snaps</Wordmark>
      </Link>
      <div className="header__button">
        <FilterButton onClick={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      </div>
    </header>
  );
}

export default Header;
