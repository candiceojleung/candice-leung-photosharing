import "./Tags.scss";
import tags from "../../data/tags.json";

function Tags() {
  return (
    <>
      {tags.map((tag,index) => {
        return <button  key={`${index}`} className="tag">{tag}</button>;
      })}
    </>
  );
}
export default Tags;
