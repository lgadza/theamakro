import "./App.css";
import Category from "./components/Category";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <SearchBar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
