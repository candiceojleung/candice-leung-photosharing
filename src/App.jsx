import "./App.scss";
import { useState } from "react";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const selectedTag = (tag) => {
    setSelectedFilter(selectedFilter === tag ? null : tag);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((currentState) => !currentState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <div
        className={`desktop ${isDrawerOpen ? "drawer-open" : "drawer-closed"}`}
      >
        <div className="desktop__right">
          <FilterDrawer
            selectedFilter={selectedFilter}
            setSelectedFilter={selectedTag}
            isDrawerOpen={isDrawerOpen}
          />
        </div>
        <div className="desktop__left">
          <Hero />
          <PhotoCardList
            selectedFilter={selectedFilter}
            isDrawerOpen={isDrawerOpen}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
