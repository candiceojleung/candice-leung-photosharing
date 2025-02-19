import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import PhotoPage from "../src/pages/PhotoPage/PhotoPage"
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
        className={`desktop-screen  ${
          isDrawerOpen ? "drawer-open" : "drawer-closed"
        }`}
      >
        <div className="desktop-screen__right">
          <FilterDrawer
            selectedFilter={selectedFilter}
            setSelectedFilter={selectedTag}
            isDrawerOpen={isDrawerOpen}
          />
        </div>
        <div className="desktop-screen__left">
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
