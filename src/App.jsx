import "./App.scss";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PhotoCardList />
      <Footer />
    </>
  );
}

export default App;
