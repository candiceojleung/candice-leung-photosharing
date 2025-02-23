import "./FilterButton.scss";
import { Label } from "../Typography/Typography";

function FilterButton({ onClick, isDrawerOpen }) {
  return (
    <div
      className={`filter-button ${
        isDrawerOpen ? "filter-button--clicked" : ""
      }`}
      onClick={onClick}  //add modifier so that when button is clicked, there is different styling 
    >
      <Label>Filters</Label>
      <img
        className="filter-button__icon"
        src="../src/assets/images/Filter.svg"
        alt="filter-icon"
      ></img>
    </div>
  );
}

export default FilterButton;
