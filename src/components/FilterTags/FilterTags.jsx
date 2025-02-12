import "./FilterTags.scss";
import tags from "../../data/tags.json";

function FilterTags({setSelectedFilter}) {
  const selectedTag = (tag) => {
    setSelectedFilter((selectedBefore) => 
      selectedBefore === tag ? null : tag
    );
  }
  
  return (
    <>
      {tags.map((tag,index) => {
        return <button  onClick= {() =>selectedTag(tag)} key={`${index}`} className="tag">{tag}</button>;
      })}
    </>
  );
}
export default FilterTags;
