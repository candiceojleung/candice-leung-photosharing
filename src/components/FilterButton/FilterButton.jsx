import "./FilterButton.scss";

function FilterButton({ onClick }) {
  return (
    <>
      <div className="filter-button" onClick={onClick}>
       Filter
        <img
        className="filter-button__img"
          src="../src/assets/images/Filter.svg"
          alt="filter icon"
        ></img>
      </div>
    </>
  );
}

export default FilterButton;
