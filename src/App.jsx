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
    setSelectedFilter((selectedBefore) =>
      selectedBefore === tag ? null : tag
    );
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((currentState) => !currentState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer}/>
      <FilterDrawer
        selectedTag={selectedTag}
        setSelectedFilter={setSelectedFilter}
        isDrawerOpen={isDrawerOpen}
      />
      <Hero />
      <PhotoCardList selectedFilter={selectedFilter} />
      <Footer />
    </>
  );
}

export default App;
