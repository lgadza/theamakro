import "./App.css";
import Category from "./components/Category";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home/Home.jsx";
import SearchBar from "./components/SearchBar";
import Sell from "./pages/Home/Sell/Sell";
import ProfilePage from "./pages/Home/Profile/ProfilePage";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
