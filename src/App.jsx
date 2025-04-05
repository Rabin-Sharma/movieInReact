import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./body/Home";
import Contact from "./Contact";
import { useState } from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./footer/Footer";
import MovieDetail from "./body/MovieDetail";
import Search from "./body/Search";
import ApiFetch from "./ApiFetch";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Router>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/movie/search" element={<Search />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
