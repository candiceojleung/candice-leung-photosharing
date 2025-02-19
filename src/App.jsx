import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import PhotoPage from "../src/pages/PhotoPage/PhotoPage"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
