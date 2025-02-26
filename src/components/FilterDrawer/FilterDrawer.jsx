import "./FilterDrawer.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Tags from "../Tags/Tags";
import { Heading, Label } from "../Typography/Typography";

function FilterDrawer({ selectedFilter, setSelectedFilter, isDrawerOpen }) {
  const [tags, setTags] = useState(null);
  
  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/tags`);
      setTags(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!isDrawerOpen) return null;
  return (
    <section className="filter-drawer">
      <Heading>
        <p className="filter-drawer__header">Filters</p>
      </Heading>
      <Label>
        <div className="filter-drawer__tags">
          {tags.map((tag, index) => (
            <Tags
              key={index}
              tag={tag}
              isClickable={true}
              isSelected={selectedFilter === tag}
              onClick={setSelectedFilter}
            />
          ))}
        </div>
      </Label>
    </section>
  );
}

export default FilterDrawer;
