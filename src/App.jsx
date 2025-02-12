import "./App.scss";
import {useState} from "react";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <>
      <Header />
      <FilterDrawer setSelectedFilter={setSelectedFilter} />
      <Hero />
      <PhotoCardList selectedFilter={selectedFilter} />
      <Footer />
    </>
  );
}

export default App;
