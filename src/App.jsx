import "./App.scss";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";

function App() {
  return (
    <>
    <Hero />
      <FilterDrawer />
      <PhotoCardList />
    </>
  );
}

export default App;
