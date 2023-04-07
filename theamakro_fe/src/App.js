import "./App.css";
import Category from "./components/Category";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SearchBar from "./components/SearchBar";
import Sell from "./pages/Home/Sell/Sell";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProductPreview from "./pages/Home/ProductPreview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <SearchBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/category" element={<Category />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/item_preview" element={<ProductPreview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
