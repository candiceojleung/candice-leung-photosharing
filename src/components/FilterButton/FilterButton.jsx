import "./FilterButton.scss";

function FilterButton({onClick}) {
  return (
    <>
      <button onClick ={onClick}>
        Filter
        <img src="../src/assets/images/Filter.svg" alt="filter icon"></img>
      </button>
    </>
  );
}

export default FilterButton;
