import "./FilterButton.scss";
import { BodyCopy } from "../Typography/Typography";

function FilterButton({onClick, isDrawerOpen }) {
  return (
   
        <div
          className={`filter-button ${
            isDrawerOpen ? "filter-button--clicked" : ""
          }`}
          onClick={onClick}
        >
             <BodyCopy>Filters</BodyCopy>
          <img
            className="filter-button__icon"
            src="../src/assets/images/Filter.svg"
            alt="filter-icon"
          ></img>
        </div>
  );
}

export default FilterButton;
