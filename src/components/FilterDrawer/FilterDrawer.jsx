import "./FilterDrawer.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Tags from "../Tags/Tags";
import { Heading, Label } from "../Typography/Typography";

function FilterDrawer({ selectedFilter, setSelectedFilter, isDrawerOpen }) {
  const [tags, setTags] = useState(null);
  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "0b7ea1c0-7c37-4087-bfb3-dd00663da892";
  const url = `${BASE_URL}/tags?api_key=${API_KEY}`; //fetch tags here, as filter drawer is parent component to tags 

  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    try {
      const { data } = await axios.get(url);
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
